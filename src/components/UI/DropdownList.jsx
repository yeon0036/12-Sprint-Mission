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

>>>>>>> React-정혜연-sprint6
=======
>>>>>>> c20238f3d1067618eaf8bd5e79e46823cdf525cb
export default DropdownList;
