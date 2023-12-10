import React from "react";
import PropTypes from "prop-types";

import "./GlobalStyles.module.scss";

const GlobalStyles = ({ children }) => {
  return React.Children.only(children);
};

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyles;
