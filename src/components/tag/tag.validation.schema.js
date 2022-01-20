import joi from "joi";

export const BodySchema = joi.object({
  name: joi.string().required(),
});
