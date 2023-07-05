import { Request, Response } from "express";

const postFate = (req: Request, res: Response) => {
  const name = req.body.name;
  res.status(200).json("you will be happy " + name);
};

const getFate = (req: Request, res: Response) => {
  res.status(200).json("You will be happy");
};
export { getFate, postFate };
