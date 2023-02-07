import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { logout } from "./handlers/logout.mjs";

setRegisterFormListener();
setLoginFormListener();
logout();
