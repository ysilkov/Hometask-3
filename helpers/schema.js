import * as yup from "yup";

export let schema = yup.object().shape({
  name: yup.string(),
  category: yup.string().required(),
  content: yup.string(),
});
export const validate = (schema) => {
  return async (req, res, next) => {
    try {
      const validateBody = await schema.validate(req.body);
      req.body = validateBody;
      next();
    } catch (err) {
      res.status(500).json(err);
    }
  };
};
