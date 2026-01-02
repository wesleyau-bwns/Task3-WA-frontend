import Landing from "../pages/Landing";
import User from "../panels/user/pages/User";
import Admin from "../panels/admin/pages/Admin";
import Merchant from "../panels/merchant/pages/Merchant";

export const ALL_PAGES = [
  {
    path: "", // renders at /dashboard (index route)
    label: "Dashboard",
    component: Landing,
    allowedPermissions: ["view-dashboard"],
  },
  {
    path: "admin", // renders at /dashboard/admin
    label: "Admin Panel",
    component: Admin,
    allowedPermissions: ["view-admin-page"],
  },
  {
    path: "user",
    label: "User Panel",
    component: User,
    allowedPermissions: ["view-user-page"],
  },
  {
    path: "merchant",
    label: "Merchant Panel",
    component: Merchant,
    allowedPermissions: ["view-merchant-page"],
  },
];
