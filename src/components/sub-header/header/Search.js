import React from "react";
import "../styles/search.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiOutlineArrowDown } from "react-icons/ai";

function Search() {
  return (
    <div className="search">
      <div className="container">
        <div className="categories">
          <button>
            All
            <AiOutlineArrowDown />
          </button>
        </div>
        <div className="input">
          <input type="text" name="search" placeholder="search" />
        </div>
        <div className="search-btn">
          <button>
            <FaMagnifyingGlass
              style={{ fontSize: "16px", color: "rgb(72, 71, 71)" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
