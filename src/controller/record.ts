import { Request, Response } from "express";
import { RecordService } from "../service/record";

class RecordController {
  async getTopRecord(req: Request, res: Response) {
    try {
      const limit = +(req.query?.limit || 10);
      const state = typeof req.query?.state === "string" ? req.query.state : "";
      const [data] = await new RecordService().getTopRecord(limit, state);
      res.status(200).json({
        status: "ok",
        message: "successfully fetched data",
        data,
      });
    } catch (err) {
      res.status(500).json({
        status: "internal server error",
        message: "internal server error",
      });
    }
  }
}

export default new RecordController();
