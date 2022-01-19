function userGet(req, res) {
  res.status(200).json({
    message: "GET",
  });
}
function userPost(req, res) {
  const { body } = req;
  console.log(body);
  if (!body.name) {
    res.status(400).json({
      message: "No hay nombre",
    });
  }
  res.status(201).json({
    message: "POST",
  });
}

function userPut(req, res) {
  res.status(201).json({
    message: "PUT",
  });
}

function userDelete(req, res) {
  res.status(201).json({
    message: "DELETE",
  });
}

module.exports = {
  userGet,
  userPost,
  userPut,
  userDelete,
};
