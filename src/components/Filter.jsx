import React, { useState } from "react";

const Filter = ({ handleFilter }) => {
  const [filter, changeFilter] = useState({
    title: "",
    rating: "",
  });

  return (
    <div
      style={{
        padding: "0px 20px 0px 20px",
        width: "25%",
        display: "inline-block",
      }}
      className="d-flex-col text-end"
    >
      <div
        className="d-flex justify-content-between align-items-center mb-1"
        style={{ width: "100%" }}
      >
        <label htmlFor="" className="me-4">
          Title
        </label>
        <input
          type="text"
          placeholder="Filter by Title"
          className="bg-warning rounded border-0 p-1"
          onChange={(e) => {
            changeFilter({ ...filter, title: e.target.value });
            handleFilter(e.target.value, filter.rating);
          }}
        />
      </div>

      <div
        className="d-flex justify-content-between align-items-center"
        style={{ width: "100%" }}
      >
        <label htmlFor="" className="me-5">
          Rating
        </label>
        <input
          type="number"
          min={1}
          max={10}
          step={0.1}
          className="bg-warning rounded border-0 p-1"
          onChange={(e) => {
            changeFilter({ ...filter, rating: e.target.value });
            handleFilter(filter.title, e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
