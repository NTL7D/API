import { Router } from "express";
import { helloWorld } from "../controllers/helloWorld";
import {
    getUsers,
    getUser,
    createUser,
    updateUserEmail,
    deleteUser,
} from "../controllers/userManage";
const router = Router();

router.route("/test").get(helloWorld);
router.route("/users").get(getUsers);
router.route("/user").post(createUser);
router.route("/user/:id").get(getUser).put(updateUserEmail).delete(deleteUser);

export default router;
