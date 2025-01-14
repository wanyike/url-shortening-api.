import PropTypes from "prop-types";
import styles from "./NotificationBanner.module.css";
import { ErrorIcon, SuccessIcon } from "@/shared/components/Icons/CustomIcons";
import { motion } from "motion/react";

const notificationTypes = {
  error: <ErrorIcon className={styles.notification__icon} />,
  success: <SuccessIcon className={styles.notification__icon} />,
};

const variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const NotificationBanner = ({ type = "error", message }) => {
  const notificationIcon = notificationTypes[type] || notificationTypes.error;
  return (
    <motion.div
      className={styles.notification}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.4, type: "spring" }}
    >
      {notificationIcon}
      <span className={styles.notification__message}>{message}</span>
    </motion.div>
  );
};

NotificationBanner.propTypes = {
  type: PropTypes.oneOf(["error", "success"]),
  message: PropTypes.string.isRequired,
};

export default NotificationBanner;
