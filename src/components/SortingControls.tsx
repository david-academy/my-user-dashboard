import styles from "../styles/SortingControls.module.scss";

interface SortingControlsProps {
  sortField: "name" | "email";
  sortOrder: "asc" | "desc";
  onSortFieldChange: (field: "name" | "email") => void;
  onSortOrderChange: () => void;
}

const SortingControls: React.FC<SortingControlsProps> = ({
  sortField,
  sortOrder,
  onSortFieldChange,
  onSortOrderChange,
}) => {
  return (
    <div className={styles.sortingControls}>
      <button onClick={() => onSortFieldChange("name")}>
        Sort by Name {sortField === "name" ? "✓" : ""}
      </button>
      <button onClick={() => onSortFieldChange("email")}>
        Sort by Email {sortField === "email" ? "✓" : ""}
      </button>
      <button onClick={onSortOrderChange}>
        {sortOrder === "asc" ? "↓" : "↑"}
      </button>
    </div>
  );
};

export default SortingControls;
