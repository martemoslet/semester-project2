import router from "./router.mjs";
import { logout } from "./handlers/logout.mjs";
import * as templates from "./templates/index.mjs";

import * as listing from "./api/listings/index.mjs";

router();
logout();
