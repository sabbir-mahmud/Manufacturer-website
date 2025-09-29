import { motion } from "framer-motion";
import {
    Package,
    Settings,
    ShoppingCart,
    Star,
    User,
    Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { Link, Outlet, useLocation } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin/useAdmin";
import useUser from "../../../Hooks/useFirebase.js/useUser";
import Loading from "../../Shared/Loading/Loading";

const SidebarMenu = ({ menuItems, location, onNavigate }) => {
    return (
        <ul className="space-y-3">
            {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                    <li
                        key={item.name}
                        className={`rounded-lg transition-colors ${
                            isActive
                                ? "bg-primary text-white"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        <Link
                            onClick={onNavigate}
                            to={item.path}
                            className="flex items-center gap-3 p-3 font-medium"
                        >
                            <Icon className="w-5 h-5" />
                            <span>{item.name}</span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

const Dashboard = () => {
    const { user } = useUser();
    const { admin, adminLoading } = useAdmin(user);
    const location = useLocation();

    const [mobileOpen, setMobileOpen] = useState(false);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    // Close on Escape
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setMobileOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Prevent background scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    if (adminLoading) return <Loading />;

    const menuItems =
        admin === true
            ? [
                  { name: "Profile", icon: User, path: "/dashboard/profile" },
                  {
                      name: "Edit Profile",
                      icon: Settings,
                      path: "/dashboard/settings",
                  },
                  { name: "Users", icon: Users, path: "/dashboard/users" },
                  {
                      name: "Manage Products",
                      icon: Package,
                      path: "/dashboard/manage-product",
                  },
                  {
                      name: "Add Product",
                      icon: Package,
                      path: "/dashboard/addProduct",
                  },
                  {
                      name: "Manage Orders",
                      icon: ShoppingCart,
                      path: "/dashboard",
                  },
              ]
            : [
                  { name: "Profile", icon: User, path: "/dashboard/profile" },
                  {
                      name: "Edit Profile",
                      icon: Settings,
                      path: "/dashboard/settings",
                  },
                  { name: "My Orders", icon: ShoppingCart, path: "/dashboard" },
                  {
                      name: "Add Review",
                      icon: Star,
                      path: "/dashboard/myReviews",
                  },
              ];

    const slideVariants = {
        closed: { x: -320, transition: { type: "spring", stiffness: 200 } },
        open: { x: 0, transition: { type: "spring", stiffness: 200 } },
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Helmet>
                <title>Dashboard</title>
            </Helmet>

            {/* Layout container: stacks on mobile, columns on lg */}
            <div className="lg:flex lg:items-start">
                {/* Desktop sidebar (always visible on lg+) */}
                <aside className="hidden lg:block lg:w-64 p-6">
                    <nav className="sticky top-6">
                        <SidebarMenu
                            menuItems={menuItems}
                            location={location}
                            onNavigate={() => {}}
                        />
                    </nav>
                </aside>

                {/* Mobile top bar (visible on mobile) */}
                <div className="lg:hidden w-full border-b">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-4">
                            <button
                                aria-label="Open menu"
                                onClick={() => setMobileOpen(true)}
                                className="btn btn-ghost btn-sm"
                            >
                                Menu
                            </button>
                            <h1 className="text-lg font-semibold">
                                Welcome, {user?.displayName || "User"}!
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Mobile sliding sidebar (fixed when open) */}
                <motion.nav
                    aria-hidden={!mobileOpen}
                    initial="closed"
                    animate={mobileOpen ? "open" : "closed"}
                    variants={slideVariants}
                    className="fixed inset-y-0 left-0 z-50 w-64 p-6 lg:hidden"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Menu</h2>
                        <button
                            aria-label="Close menu"
                            onClick={() => setMobileOpen(false)}
                            className="btn btn-ghost btn-sm"
                        >
                            Close
                        </button>
                    </div>

                    <SidebarMenu
                        menuItems={menuItems}
                        location={location}
                        onNavigate={() => setMobileOpen(false)}
                    />
                </motion.nav>

                {/* Dark overlay when mobile menu is open */}
                {mobileOpen && (
                    <button
                        aria-hidden={!mobileOpen}
                        onClick={() => setMobileOpen(false)}
                        className="fixed inset-0 z-40 bg-black bg-opacity-40 lg:hidden"
                        tabIndex={-1}
                        aria-label="Close menu overlay"
                    />
                )}

                {/* MAIN content area (single-page scroll) */}
                <main className="flex-1 p-6 lg:p-12">
                    {/* Desktop header (only on lg and up) */}
                    <div className="hidden lg:flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Welcome, {user?.displayName || "User"}!
                        </h1>
                    </div>

                    {/* Card container — outlet content. No internal scrollbars here. */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
