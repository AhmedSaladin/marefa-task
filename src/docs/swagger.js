import { userLogins, activeUsers } from "./userLogs.js";
import { coursesList } from "./tag.js";
import { categoires } from "./category.js";
export default {
  openapi: "3.0.3",
  info: {
    title: "Reporting API",
    description: "Marefa reporting api task",
    version: "1.0.0",
    contact: {
      name: "Ahmed Saladin",
      email: "ahmed_salahdin@hotmail.com",
      url: "https://www.linkedin.com/in/ahmedsaladin/",
    },
  },
  paths: {
    "/user-logins": {
      post: userLogins,
    },
    "/active-users": {
      get: activeUsers,
    },
    "/categories-views": {
      get: categoires,
    },
    "/courses-list": {
      post: coursesList,
    },
  },
};
