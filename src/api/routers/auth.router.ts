import { Router } from "express";
import { authController } from "../controllers/auth.controller";

const router = Router();



router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.get("/me", () => { });

router.put("/update/:id", () => { });
router.delete("/delete/:id", () => { });

export default router;