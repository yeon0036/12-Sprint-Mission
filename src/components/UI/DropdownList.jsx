import React from "react";
import "./DropdownList.css";

function DropdownList({ onSortSelection }) {
  return (
    <div className="dropdownList">
      <div className="dropdownItem" onClick={() => onSortSelection("recent")}>
        최신순
      </div>
      <div className="dropdownItem" onClick={() => onSortSelection("favorite")}>
        인기순
      </div>
    </div>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f80040d (fixed)
=======

>>>>>>> c67bc75 (Sprint Mission 5 Final)
export default DropdownList;
