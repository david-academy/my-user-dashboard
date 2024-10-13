import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { useUsers } from "./hooks/useUsers";

import "./styles/App.scss";
import SortingControls from "./components/SortingControls";
import UserList from "./components/UserList";

const App: React.FC = () => {
  const { users, loading, error } = useUsers();
  const [filterText, setFilterText] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortField, setSortField] = useState<"name" | "email">("name");

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  if (loading) return <p>Loading users..</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="app">
      <h1>User Dashboard</h1>
      <SearchBar filterText={filterText} onFilterChange={setFilterText} />
      <SortingControls
        sortField={sortField}
        sortOrder={sortOrder}
        onSortFieldChange={setSortField}
        onSortOrderChange={toggleSortOrder}
      />
      <UserList
        users={users}
        filterText={filterText}
        sortField={sortField}
        sortOrder={sortOrder}
      />
    </div>
  );
};

export default App;
