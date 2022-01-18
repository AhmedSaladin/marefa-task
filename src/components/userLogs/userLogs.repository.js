import UserLogs from "./userLogs.model.js";

export default {
  userLoginInSpecificPeriod: (id, startPreiod, endPeriod) => {
    return UserLogs.aggregate([
      {
        $match: {
          userId: id,
          loggedin: { $gte: startPreiod, $lte: endPeriod },
        },
      },
      { $sort: { loggedin: 1 } },
      {
        $group: {
          _id: "$userId",
          totalDays: { $sum: 1 },
          days: { $push: { date: "$loggedin", ip: "$ip" } },
        },
      },
    ]);
  },
};
