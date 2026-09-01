
const userController ={

getDashboard: async (req, res) => {

  res.status(200).json({
    message: "Welcome to dashboard",
    user: req.user,
  });
}

}

export default userController;