//
import PropTypes from "prop-types";
import classNames from "classnames/bind";

//
import styles from "./DefaultLayout.module.scss";

//
const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return <div className={cx("wrapper")}>aaaa{children}</div>;
};

DefaultLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
