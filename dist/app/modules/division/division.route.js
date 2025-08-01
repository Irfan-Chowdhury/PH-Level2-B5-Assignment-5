"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivisionRoutes = void 0;
const express_1 = require("express");
const checkAuth_1 = require("../../middlewares/checkAuth");
const validateRequest_1 = require("../../middlewares/validateRequest");
const user_interface_1 = require("../user/user.interface");
const division_validation_1 = require("./division.validation");
const division_controller_1 = require("./division.controller");
const router = (0, express_1.Router)();
router.post("/create", 
// checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
(0, validateRequest_1.validateRequest)(division_validation_1.createDivisionSchema), division_controller_1.DivisionController.createDivision);
router.get("/", division_controller_1.DivisionController.getAllDivisions);
router.get("/:slug", division_controller_1.DivisionController.getSingleDivision);
router.patch("/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN, user_interface_1.Role.SUPER_ADMIN), (0, validateRequest_1.validateRequest)(division_validation_1.updateDivisionSchema), division_controller_1.DivisionController.updateDivision);
router.delete("/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN, user_interface_1.Role.SUPER_ADMIN), division_controller_1.DivisionController.deleteDivision);
exports.DivisionRoutes = router;
