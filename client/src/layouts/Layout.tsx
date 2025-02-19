import MainLayout from "./MainLayout";
import AdminLayout from "./AdminLayout";
import isAdmin from "../config/isAdmin.js"

export const Layout = isAdmin ? AdminLayout : MainLayout;
