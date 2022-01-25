import { UserModel } from "../models/user.model.js";

export const uploadsController = async (req, res) => {
  const realPath = req.file.path.replace("public/", "");

  const id = req.user._id;

  let usuario = await UserModel.findById(id);

  usuario.imageUrl = realPath;

  await usuario.save();

  res.send({ usuario });
};
