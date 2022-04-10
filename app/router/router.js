const { verifySignUp, authJwt } = require("../middleware");
const userController = require("../controller/userController");
const menuController = require("../controller/menuController");
module.exports = function(app) {
    
  app.post("/api/auth/signup",verifySignUp.checkDuplicateUsernameOrEmail,userController.signup
  );
  app.post("/api/auth/signin", userController.signin);

  app.get("/api/menuList",authJwt.verifyToken, menuController.fetchMenuList);

  app.put("/api/menu/:id",authJwt.verifyToken, menuController.orderMenu);

  //app.delete("/api/menu/:id",authJwt.verifyToken, menuController.deleteMenu);

  
};