/**
 * @param {Function} func
 * @returns Function wrapped by try & catch
 */
export default (func) => {
  return async (req, res, next) => {
    try {
      const [statusCode, data] = await func(req);
      res.status(statusCode).json(data);
    } catch (error) {
      next(error);
    }
  };
};
