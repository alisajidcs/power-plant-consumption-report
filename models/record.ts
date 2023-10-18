import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";

@Table({
  tableName: Record.RECORD_TABLE_NAME,
})
export class Record extends Model {
  public static RECORD_TABLE_NAME = "record" as string;
  public static RECORD_ID = "id" as string;
  public static RECORD_NAME = "name" as string;
  public static RECORD_NET_GENERATION = "netGeneration" as string;
  public static RECORD_LONGITUDE = "longitude" as string;
  public static RECORD_LATITUDE = "latitude" as string;
  public static RECORD_FACILITY_CODE = "facilityCode" as string;
  public static RECORD_STATE = "state" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Record.RECORD_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: Record.RECORD_NAME,
  })
  name!: string;

  @Column({
    type: DataType.INTEGER,
    field: Record.RECORD_NET_GENERATION,
  })
  netGeneration!: number;

  @Column({
    type: DataType.FLOAT,
    field: Record.RECORD_LONGITUDE,
  })
  longitude!: number;

  @Column({
    type: DataType.FLOAT,
    field: Record.RECORD_LATITUDE,
  })
  latitude!: number;

  @Column({
    type: DataType.STRING(100),
    field: Record.RECORD_NAME,
  })
  facilityCode!: string;

  @Column({
    type: DataType.STRING(100),
    field: Record.RECORD_NAME,
  })
  state!: string;

}
