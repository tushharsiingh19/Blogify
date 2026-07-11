import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const authStatus = useSelector((state) => state.auth.status);

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true,
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm">
            <Container>
                <nav className="flex items-center justify-between py-4">

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <Logo width="70px" />
                    </Link>

                    {/* Navigation */}
                    <ul className="flex items-center gap-3">

                        {navItems.map(
                            (item) =>
                                item.active && (
                                    <li key={item.name}>
                                        <NavLink
                                            to={item.slug}
                                            className={({ isActive }) =>
                                                `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                                    isActive
                                                        ? "bg-blue-600 text-white shadow-md"
                                                        : "text-gray-700 hover:bg-gray-100"
                                                }`
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                )
                        )}

                        {authStatus && (
                            <li className="ml-2">
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>

                </nav>
            </Container>
        </header>
    );
}

export default Header;