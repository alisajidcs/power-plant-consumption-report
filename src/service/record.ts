import { Record } from "../../models/record";

interface IRecordService {
  getTopRecord(limit?: number, state?: string): any;
}

export class RecordService implements IRecordService {
  async getTopRecord(limit: number, state?: string): Promise<any> {
    const queryTotalStateGeneration = `
      SELECT
        SUM("netGeneration") FROM record r2
      WHERE r2.state = r.state
      GROUP BY r2.state
    `;

    const mainQuery = `
      SELECT
        name,
        ABS("netGeneration"),
        state,
        longitude,
        latitude,
        ("netGeneration"::decimal / (${queryTotalStateGeneration})) * 100 as percentage
      FROM record r 
    `;

    const where = (state: string) => `WHERE state = '${state}'`;
    const orderBy = `ORDER BY r."netGeneration" desc`;
    const limitQuery = (limit: number) => `limit ${limit}`;

    let rawQuery = mainQuery;
    if (state) {
      rawQuery += where(state) + " ";
    }
    rawQuery += orderBy + " " + limitQuery(limit);

    try {
      return await Record.sequelize?.query(rawQuery, { raw: true });
    } catch (err) {
      throw new Error("Failed to get records");
    }
  }
}
