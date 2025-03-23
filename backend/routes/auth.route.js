import express from "express";
import { handleSingnup,handleLogin, checkAuth,} from "../controller/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router=express.Router();

router.post('/signup',handleSingnup);
router.post('/login',handleLogin);

router.get('/check',protectRoute,checkAuth);

export default router;