import styles from "./Link.module.css";
import PropTypes from "prop-types";

const linkVariants = {
  default: "default",
  primary: "primary",
  secondary: "secondary",
};

const Link = ({
  href,
  variant = linkVariants.default,
  target,
  className,
  children,
}) => {
  return (
    <a
      className={` ${styles.link} ${styles[`link--${variant}`]} ${className}`}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
};

export default Link;

Link.propTypes = {
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.values(linkVariants)),
  target: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
