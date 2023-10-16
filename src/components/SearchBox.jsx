import React from "react";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkedAlt,
  FaSearchDollar,
  FaFunnelDollar,
  FaSearch,
} from "react-icons/fa";

let icon = {
  position: "absolute",
  right: "240px",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
};

function SearchBox() {
  return (
    <form className="custom-search-form">
      <input type="text" className="form-control mt-2" placeholder="Search" />
    </form>
  );
}

export default SearchBox;
