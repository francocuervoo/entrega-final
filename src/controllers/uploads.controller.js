export const saveImage = async (req, res) => {
  const imageUrl = req.file.path.replace("public/", "");
  res.send(imageUrl);
};
