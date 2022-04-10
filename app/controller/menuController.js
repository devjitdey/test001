const db = require("../config/db.config");
const menu = db.menu;

exports.fetchMenuList = (req, res) => {
  menu.findAll({
    where: {
      id: req.body.id
    }
  })
    .then(user => {
        if(user)
            res.status(200).send({ message: "Fetch menu list successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err});
    });
};

exports.orderMenu = (req, res) => {
  menu.update({
    menuDate: req.body.menuDate,
    lunchOrder: req.body.lunchOrder || null,
    dinnerOrder: req.body.dinnerOrder || null,
  },{
    where: {
        menuId: req.body.menuId,
        id:req.body.id
    }
  })
  .then(done => {
    if(done)
        res.status(200).send({ message: "Menu list updated successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err});
    });
};