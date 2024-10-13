import { useUsers } from "./hooks/useUsers";

import "./styles/App.scss";

const App: React.FC = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <p>Loading users..</p>;
  if (error) return <p>{error}</p>;
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
