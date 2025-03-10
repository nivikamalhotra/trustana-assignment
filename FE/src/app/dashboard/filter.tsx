"use client";
import { useState } from "react";
import styles from "../style/dashboard.module.css";

export default function Filter() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    "Product Category",
    "Images",
    "Google Category",
    "Status",
  ]);

  const availableFilters = [
    "GS1 Category",
    "Tags",
    "General Comment",
    "Product Context",
    "Product Name (Original Lang)",
  ];

  // Function to Toggle Filter Selection
  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <div className={styles.filterContainer}>
      {/* Search Input & Show Filters in One Row */}
      <div className={styles.topBar}>
        <input type="text" placeholder="Search by ID, SKU, Name" className={styles.searchInput} />
        <button className={styles.toggleFilterBtn} onClick={() => setIsFilterVisible(!isFilterVisible)}>
          {isFilterVisible ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Filters Box */}
      {isFilterVisible && (
        <div className={styles.filtersBox}>
          <p className={styles.filterTitle}>Filter products by</p>

          {/* Select Filter Dropdown */}
          <div className={styles.selectFilterContainer}>
            <button className={styles.selectFilterBtn}>+ Select Filter</button>
            <div className={styles.filterDropdown}>
              {availableFilters.map((filter) => (
                <p key={filter} onClick={() => toggleFilter(filter)}>
                  {selectedFilters.includes(filter) ? "✔️ " : ""}{filter}
                </p>
              ))}
            </div>
          </div>

          {/* Dynamic Filters */}
          <div className={styles.filtersGrid}>
            {selectedFilters.includes("Product Category") && (
              <div className={styles.filterField}>
                <label>Product Category</label>
                <select>
                  <option>Select</option>
                </select>
              </div>
            )}

            {selectedFilters.includes("Images") && (
              <div className={styles.filterField}>
                <label>Images</label>
                <select>
                  <option>Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            )}

            {selectedFilters.includes("Google Category") && (
              <div className={styles.filterField}>
                <label>Google Category</label>
                <select>
                  <option>Select</option>
                </select>
              </div>
            )}

            {selectedFilters.includes("Status") && (
              <div className={styles.filterField}>
                <label>Status</label>
                <select>
                  <option>Select</option>
                  <option value="active">Active</option>
                  <option value="deactive">Deactive</option>
                </select>
              </div>
            )}

            {selectedFilters.includes("GS1 Category") && (
              <div className={styles.filterField}>
                <label>GS1 Category</label>
                <select>
                  <option>Select</option>
                </select>
              </div>
            )}

            {selectedFilters.includes("Tags") && (
              <div className={styles.filterField}>
                <label>Tags</label>
                <input type="text" placeholder="Enter tags" />
              </div>
            )}

            {selectedFilters.includes("General Comment") && (
              <div className={styles.filterField}>
                <label>General Comment</label>
                <input type="text" placeholder="Enter comment" />
              </div>
            )}

            {selectedFilters.includes("Product Context") && (
              <div className={styles.filterField}>
                <label>Product Context</label>
                <input type="text" placeholder="Enter context" />
              </div>
            )}

            {selectedFilters.includes("Product Name (Original Lang)") && (
              <div className={styles.filterField}>
                <label>Product Name (Original Lang)</label>
                <input type="text" placeholder="Enter name" />
              </div>
            )}

            {/* Created On (Single Date Picker Box) */}
            <div className={styles.filterField}>
              <label>Created On</label>
              <input type="date" />
            </div>
          </div>

          {/* Buttons */}
          <div className={styles.filterButtons}>
            <button className={styles.applyBtn}>Apply Filters</button>
            <button className={styles.resetBtn}>Reset Filters</button>
          </div>
        </div>
      )}
    </div>
  );
}