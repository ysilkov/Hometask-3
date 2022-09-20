import * as yup from "yup";
import { Request, Response, NextFunction } from "express";
import {
  Assign,
  ObjectShape,
  AnyObject,
  TypeOfShape,
  AssertsShape,
} from "yup/lib/object";
import { RequiredStringSchema } from "yup/lib/string";

export const schema = yup.object().shape({
  name: yup.string(),
  category: yup.string().required(),
  content: yup.string(),
});
export const validate = (
  schema: yup.ObjectSchema<
    Assign<
      ObjectShape,
      {
        name: yup.StringSchema<string | undefined>;
        category: RequiredStringSchema<string | undefined>;
        content: yup.StringSchema<string | undefined>;
      }
    >,
    AnyObject,
    TypeOfShape<
      Assign<
        ObjectShape,
        {
          name: yup.StringSchema<string | undefined>;
          category: RequiredStringSchema<string | undefined>;
          content: yup.StringSchema<string | undefined>;
        }
      >
    >,
    AssertsShape<
      Assign<
        ObjectShape,
        {
          name: yup.StringSchema<string | undefined>;
          category: RequiredStringSchema<string | undefined>;
          content: yup.StringSchema<string | undefined>;
        }
      >
    >
  >
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validateBody: {
        name: string | undefined;
        category: string;
        content: string | undefined;
      } = await schema.validate(req.body);
      req.body = validateBody;
      next();
    } catch (err) {
      res.status(500).json(err);
    }
  };
};
