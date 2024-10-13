import { User } from "../types/User";
import styles from "../styles/UserCard.module.scss";
interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className={styles.userCard}>
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email.toLowerCase()}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <p>
        <strong>Address:</strong> {user.address.street}, {user.address.suite},{" "}
        {user.address.city}, {user.address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
