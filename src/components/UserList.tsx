import { User } from "../types/User";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[];
  filterText: string;
  sortField: "name" | "email";
  sortOrder: "asc" | "desc";
}

const UserList: React.FC<UserListProps> = ({
  users,
  filterText,
  sortField,
  sortOrder,
}) => {
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase()) ||
      user.email.toLowerCase().includes(filterText.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const fieldA = a[sortField].toLowerCase();
    const fieldB = b[sortField].toLowerCase();

    if (sortOrder === "asc") {
      return fieldA < fieldB ? -1 : 1;
    } else {
      return fieldA > fieldB ? -1 : 1;
    }
  });

  return (
    <div className="user-cards">
      {sortedUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
