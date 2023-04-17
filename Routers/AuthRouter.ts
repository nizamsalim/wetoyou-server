import { Router } from "express";
import {
  authenticateWithGoogle,
  updatePhone,
} from "../Controllers/AuthController";
import VerifyAuthToken from "../Middlewares/VerifyAuthToken";

const router: Router = Router();

router.post("/authenticate/google", authenticateWithGoogle);

// @protected routes
router.post("/updatephone", VerifyAuthToken, updatePhone);

export default router;
