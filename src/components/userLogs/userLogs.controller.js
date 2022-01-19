import { status } from "../../utility/statusCode.js";
import UserLogsService from "./userLogs.service.js";

export const userLogins = async ({ body }) => {
  const id = body.id;
  const date = body.date;
  const logins = await UserLogsService.logins(id, date);
  return [status.OK, logins];
};

export const activeUsers = async () => {
  const Users = await UserLogsService.activeUsers();
  return [status.OK, Users];
};
