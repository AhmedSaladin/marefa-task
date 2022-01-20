import joi from "joi";

export const BodySchema = joi.object({
  id: joi.string().required(),
  date: joi.object().keys({
    from: joi.date().required(),
    to: joi.date().required(),
  }),
});
