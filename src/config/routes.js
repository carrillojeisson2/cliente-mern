// layout
import LayoutAdmin from "../layouts/LayoutAdmin";

// Admin pages
import AdminHome from "../pages/Admin";
import AdminSingIn from "../pages/Admin/SignIn";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "./admin",
        component: AdminHome,
        exact: true,
      },
      {
        path: "/admin/login",
        component: AdminSingIn,
        exact: true,
      },
    ],
  },
];

export default routes;
