// AdminHeader.js

import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const AdminHeader = ({ user }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/users">Users</Link>
          </li>
          <li>
            <Link to="/admin/settings">Settings</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <div className="user-info">
        <span>Welcome, {user.displayName}</span>
        {/* Add user-related information or actions */}
        <button onClick={() => {}}>Logout</button>
      </div>
    </header>
  );
};

export default AdminHeader;
