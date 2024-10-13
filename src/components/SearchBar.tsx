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
      className="search-bar"
    />
  );
};

export default SearchBar;
