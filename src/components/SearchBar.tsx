import styles from "../styles/SearchBar.module.scss";

interface SearchBarProps {
  filterText: string;
  onFilterChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  filterText,
  onFilterChange,
}) => {
  return (
    <input
      type="text"
      placeholder="Search by name or email"
      value={filterText}
      onChange={(e) => onFilterChange(e.target.value)}
      className={styles.searchBar}
    />
  );
};

export default SearchBar;
