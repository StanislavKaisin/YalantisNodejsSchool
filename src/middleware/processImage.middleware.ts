import { Request, Response, NextFunction } from "express";
import path from "path";
import fs from "fs";
import sharp from "sharp";
import { v4 as uuidv4 } from "uuid";

export const processImage = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  //if no file, create id and pass link to standart img response 'no photo'
  if (!req.file) {
    res.locals = {
      id: uuidv4(),
      imgSrc: "uploads/no_image_available.jpg",
    };
    return next();
  }
  const { filename } = req.file;
  try {
    await sharp(req.file.path)
      .resize({
        width: 200,
        height: 200,
        fit: sharp.fit.inside,
      })
      .jpeg()
      .toFile(path.resolve(req.file.destination, `${filename}.jpg`));
    await fs.unlinkSync(req.file.path);
  } catch (error) {
    return res.status(500).send({ error: error.errors });
  }
  next();
};
