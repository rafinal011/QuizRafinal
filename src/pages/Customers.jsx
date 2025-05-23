import React from "react";
import { useBreadcrumb } from "../context/BreadcrumbContext";
import { FaUserPlus, FaDownload, FaArrowLeft } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
export default function Customers({ customers }) {
  const { breadcrumb } = useBreadcrumb();
  return (
    <div id="Customer-container" className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-center">
        <div className="w-full ">
          {/* Header Section */}
          <PageHeader
            title="Customers"
            breadcrumb={breadcrumb}
          >
            <div className="flex gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 transition duration-300">
                <FaUserPlus />
                <span>Add Customer</span>
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 transition duration-300">
                <FaDownload />
                <span>Export</span>
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 transition duration-300">
                <FaArrowLeft />
                <span>Back</span>
              </button>
            </div>
          </PageHeader>
          {/* Customer List */}
          <div className="mt-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
              {customers.map((customer, index) => (
                <li key={index} className="transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg p-6 bg-white shadow-sm border border-gray-200">
                  <div className="space-y-3">
                    <p className="text-sm font-bold text-gray-500">Customer ID: 
                      <span className="font-semibold text-gray-900">{customer["Customer ID"]}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Customer Name: 
                      <span className="font-semibold text-gray-900">{customer["Customer Name"]}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Email: 
                      <span className="font-semibold text-blue-900">{customer["Email"]}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Phone: 
                      <span className="font-semibold text-green-700">{customer["Phone"]}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Loyalty Level: 
                      <span className={`font-semibold ${customer.Loyalty === "Gold" ? 
                      "text-yellow-500  bg-yellow-200 rounded-full m-2 px-2 py-1" : customer.Loyalty === "Silver" ?
                       "text-silver-800  bg-slate-200 rounded-full m-2 px-2 py-1" : "text-orange-800  bg-orange-200 rounded-full m-2 px-2 py-1"}`}>
                        {customer.Loyalty}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
