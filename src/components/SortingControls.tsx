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
    <div className="sorting-controls">
      <button onClick={() => onSortFieldChange("name")}>
        Sort by Name {sortField === "name" ? "(selected)" : ""}
      </button>
      <button onClick={() => onSortFieldChange("email")}>
        Sort by Email {sortField === "email" ? "(selected)" : ""}
      </button>
      <button onClick={onSortOrderChange}>
        {sortOrder === "asc" ? "Ascending" : "Descending"}
      </button>
    </div>
  );
};

export default SortingControls;
