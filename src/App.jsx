import { useState, useEffect, Suspense, lazy } from 'react';
import './assets/tailwind.css';
import { BreadcrumbProvider } from './context/BreadcrumbContext';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import Loading from './components/Loading'; // Loading indicator
import ErrorPage from './components/ErrorPage.jsx'; // Fallback error page
import ErrorBoundary from './components/ErrorBoundary.jsx';

// Lazy loaded pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Orders = lazy(() => import('./pages/Orders'));
const Customers = lazy(() => import('./pages/Customers'));
const Users = lazy(() => import('./pages/User'));
const Error400 = lazy(() => import('./pages/Error400'));
const Error401 = lazy(() => import('./pages/Error401'));
const Error403 = lazy(() => import('./pages/Error403'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const Forgot = lazy(() => import('./pages/Auth/Forgot'));
const GuestPage = lazy(() => import('./pages/GuestPage')); // Lazy import GuestPage

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('src/Data/orders.json');
      const data = await response.json();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await fetch('src/Data/customers.json');
      const data = await response.json();
      setCustomers(data);
    };
    fetchCustomers();
  }, []);

  const filteredOrders = orders.filter(order =>
    order['Customer Name'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    order['Order ID'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    order['Status'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    order['Total Price'].toString().includes(searchTerm) ||
    order['Order Date'].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCustomers = customers.filter(customer =>
    customer['Customer Name'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer['Customer ID'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer['Email'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer['Phone'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer['Loyalty'].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <BreadcrumbProvider>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Main Layout */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders orders={filteredOrders} />} />
              <Route path="/customers" element={<Customers customers={filteredCustomers} />} />
              <Route path="/users" element={<Users />} />
              <Route path="/error-400" element={<Error400 />} />
              <Route path="/error-401" element={<Error401 />} />
              <Route path="/error-403" element={<Error403 />} />
            </Route>

            {/* Auth Layout */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot" element={<Forgot />} />
            </Route>

            {/* Guest Page */}
            <Route path="/guest" element={<GuestPage />} />

            {/* Fallback for undefined routes */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BreadcrumbProvider>
  );
}

export default App;
