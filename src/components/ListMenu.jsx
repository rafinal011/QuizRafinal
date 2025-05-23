import { MdDashboard, MdPeople, MdShop, MdError, MdPerson } from "react-icons/md";
import { useBreadcrumb } from "../context/BreadcrumbContext";
import { Link } from "react-router-dom";

export default function ListMenu() {
  const { updateBreadcrumb } = useBreadcrumb();

  const handleMenuClick = (menu) => {
    if (menu === "dashboard") {
      updateBreadcrumb(["Home", "Dashboard"]);
    } else if (menu === "orders") {
      updateBreadcrumb(["Home", "Dashboard", "Orders"]);
    } else if (menu === "customers") {
      updateBreadcrumb(["Home", "Dashboard", "Customers"]);
    } else if (menu === "error400") {
      updateBreadcrumb(["Home", "Error", "400 Bad Request"]);
    } else if (menu === "error401") {
      updateBreadcrumb(["Home", "Error", "401 Unauthorized"]);
    } else if (menu === "error403") {
      updateBreadcrumb(["Home", "Error", "403 Forbidden"]);
    } else if (menu === "users") {
      updateBreadcrumb(["Home", "Dashboard", "Users"]);
    }
  };
  

  return (
    <div>
      <ul id="menu-list" className="space-y-3">
        <li>
          <Link
            to="/"
            onClick={() => handleMenuClick("dashboard")}
            className="hover:text-hijau flex items-center rounded-xl p-4 font-bold text-gray-600 hover:bg-green-200">
            <MdDashboard className="mr-4 text-2xl" />
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/orders"
            onClick={() => handleMenuClick("orders")}
            className="hover:text-hijau flex items-center rounded-xl p-4 font-bold text-gray-600 hover:bg-green-200">
            <MdShop className="mr-4 text-2xl" />
            Orders
          </Link>
        </li>

        <li>
          <Link
            to="/customers"
            onClick={() => handleMenuClick("customers")}
            className="hover:text-hijau flex items-center rounded-xl p-4 font-bold text-gray-600 hover:bg-green-200">
            <MdPeople className="mr-4 text-2xl" />
            Customers
          </Link>
        </li>
        <li>
  <Link
    to="/users"
    onClick={() => handleMenuClick("users")}
    className="hover:text-hijau flex items-center rounded-xl p-4 font-bold text-gray-600 hover:bg-green-200">
    <MdPerson className="mr-4 text-2xl" />
    Users
  </Link>
</li>

        {/* Tambahan menu Error */}
        <li>
          <Link
            to="/error-400"
            onClick={() => handleMenuClick("error400")}
            className="hover:text-red-600 flex items-center rounded-xl p-4 font-bold text-gray-600 hover:bg-red-100">
            <MdError className="mr-4 text-2xl" />
            Error 400
          </Link>
        </li>
        <li>
          <Link
            to="/error-401"
            onClick={() => handleMenuClick("error401")}
            className="hover:text-red-600 flex items-center rounded-xl p-4 font-bold text-gray-600 hover:bg-red-100">
            <MdError className="mr-4 text-2xl" />
            Error 401
          </Link>
        </li>
        <li>
          <Link
            to="/error-403"
            onClick={() => handleMenuClick("error403")}
            className="hover:text-red-600 flex items-center rounded-xl p-4 font-bold text-gray-600 hover:bg-red-100">
            <MdError className="mr-4 text-2xl" />
            Error 403
          </Link>
        
        </li>
      </ul>
    </div>
  );
}
