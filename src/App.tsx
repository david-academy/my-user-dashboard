// src/App.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/App.scss";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="app">
      <h1>User Dashboard</h1>
      <div className="user-cards">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>
            <p>
              <strong>Address:</strong> {user.address.street},{" "}
              {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
