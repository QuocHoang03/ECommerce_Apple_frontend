import PropTypes from "prop-types";

import classNames from "classnames/bind";
import styles from "./HomeLayout.module.scss";
const cx = classNames.bind(styles);

const HomeLayout = ({ children }) => {
  return <div className={cx("wrapper")}>HomeLayout{children}</div>;
};

HomeLayout.propTypes = {
  children: PropTypes.node,
};

export default HomeLayout;
