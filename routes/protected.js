const express = require("express");
const router = express.Router();

const {
  create,
  read,
  readall,
  update,
  remove,
  hash,
  like,
} = require("../controller/studentCtrl");

const {
  add,
  addAuto,
  view,
  viewAll,
  edit,
  del,
} = require("../controller/attendanceCtrl");
//student API's
router.post("/student", create);
router.get("/student", readall);
router.get("/student/:id", read);
router.put("/student/:id", update);
router.delete("/student/:id", remove);
router.post("/student/hash", hash);
router.post("/student/like", like);

//attendance API's
router.post("/attendance", add);
router.get("/attendance", viewAll);
router.get("/attendance/:id", view);
router.put("/attendance/:id", edit);
router.delete("/attendance/:id", del);
router.post("/attendance/auto", addAuto);
module.exports = router;
