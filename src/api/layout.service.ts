import { Code } from "lucide-react";
import { WebService } from "./web.service";

export class LayoutService {
  private readonly web: WebService;

  constructor() {
    this.web = new WebService();
  }

  logout = async () => {
    await this.web.delete("http://localhost:8083/api/access/logout", {});
  };
  refreshtoken = async () => {
    return await this.web.get("http://localhost:8083/api/access/token/refresh");
  };
  profileData = async () => {
    return await this.web.get("http://localhost:5000/api/auth/me", {
      requiresAuth: true,
    });
  };
}
