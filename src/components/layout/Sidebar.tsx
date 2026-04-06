"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  User,
  CreditCard,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/dashboard",
    active: true,
  },
  {
    icon: CreditCard,
    label: "Templates",
    href: "/templates",
    active: false,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
        aria-label="Toggle menu">
        {isSidebarOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
        fixed lg:static
        top-0 left-0
        h-screen
        w-72
        bg-white border-r border-gray-200
        flex flex-col
        transform transition-transform duration-300 ease-in-out
        z-50 lg:z-auto
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}>
        {/* Logo */}
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              Resume<span className="text-blue-600">Builder</span>
            </h1>
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-3 sm:px-4 py-4 overflow-y-auto">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                className={`w-full flex items-center px-3 sm:px-4 py-2.5 sm:py-3 mb-1 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}>
                <IconComponent className="w-5 h-5 mr-3 shrink-0" />
                <span className="font-medium text-sm sm:text-base">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* User Info */}
        <div className="p-3 sm:p-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            {/* Left Side - User Info */}
            <div className="flex items-center min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shrink-0">
                <span className="text-white font-medium text-sm">JD</span>
              </div>

              <div className="ml-2 sm:ml-3 min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">
                  John Doe
                </p>
                <p className="text-xs text-gray-500 truncate">
                  john@example.com
                </p>
              </div>
            </div>

            {/* Right Side - Logout Button */}
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title="Logout"
              onClick={() => console.log("logout")}>
              <LogOut className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
