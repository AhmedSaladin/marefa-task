export const userLogins = {
  description: "Returns all user logins in specific period",
  parameters: [
    {
      name: "role",
      in: "header",
      description: "User role in system",
      required: true,
      example: "admin",
    },
  ],
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            id: {
              type: "string",
              example: "61e5c89b2d57724a0ae2837e",
            },
            date: {
              type: "object",
              properties: {
                from: {
                  type: "string",
                  description: "Start date",
                  example: "2022-01-01",
                  format: "date",
                },
                to: {
                  type: "string",
                  description: "End date",
                  example: "2022-01-30",
                  format: "date",
                },
              },
            },
          },
        },
      },
    },
  },

  responses: {
    200: {
      description: "A list of all user logins in system",
    },
    403: {
      description: "role header not provided",
    },
    400: {
      description: "body not provided or body missing parameter",
    },
  },
};

export const activeUsers = {
  description: "Returns all users active in last month starting from today",
  parameters: [
    {
      name: "role",
      in: "header",
      description: "User role in system",
      required: true,
      example: "admin",
    },
  ],
  responses: {
    200: {
      description: "A list of all active users in system",
    },
    403: {
      description: "role header not provided",
    },
  },
};
