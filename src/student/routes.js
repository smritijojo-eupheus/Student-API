const { Router } = require("express");
const controller = require("./controller");

const route = Router();

route.get("/", controller.getstudent);
route.get("/:id", controller.getstudentId);
route.post("/", controller.getcheckStudentEmail);
route.delete("/:id", controller.getDeleteStudentId);
route.put("/:id", controller.getChangeStudentId);

module.exports = route;
