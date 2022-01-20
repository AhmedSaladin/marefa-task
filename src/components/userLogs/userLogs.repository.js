import UserLogsModel from "./userLogs.model.js";

export default {
  userLoginInSpecificPeriod: (id, startPreiod, endPeriod) => {
    return UserLogsModel.aggregate([
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

  mostActiveUsers: (startPreiod, endPeriod) => {
    return UserLogsModel.aggregate([
      {
        $match: {
          loggedin: { $gte: startPreiod, $lte: endPeriod },
        },
      },
      {
        $group: {
          _id: "$loggedin",
          totalLogins: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);
  },

  // I have misunderstand meaning of active user and it lead me to create this query.
  // it generate report about each user logins and return each user logins times in limited period and his email and name
  // mostActiveUsers: (startPreiod, endPeriod) => {
  //   return UserLogs.aggregate([
  //     {
  //       $match: {
  //         loggedin: { $gte: startPreiod, $lte: endPeriod },
  //       },
  //     },
  //     {
  //       $group: {
  //         _id: { $toObjectId: "$userId" },
  //         totalDays: { $sum: 1 },
  //       },
  //     },
  //     { $sort: { totalDays: -1 } },
  //     {
  //       $lookup: {
  //         from: "users",
  //         localField: "_id",
  //         foreignField: "_id",
  //         as: "userInfo",
  //       },
  //     },
  //     {
  //       $replaceRoot: {
  //         newRoot: {
  //           $mergeObjects: [{ $arrayElemAt: ["$userInfo", 0] }, "$$ROOT"],
  //         },
  //       },
  //     },
  //     {
  //       $project: {
  //         _id: 1,
  //         email: 1,
  //         name: 1,
  //         totalDays: 1,
  //       },
  //     },
  //   ]);
  // },
};
