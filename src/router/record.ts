import { Router } from "express";
import RecordController from "../controller/record";

class RecordRoutes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.get("", RecordController.getTopRecord);
  }
}

export default new RecordRoutes().router;
