import styles from "./ShortenLink.module.css";
import PropTypes from "prop-types";
import Link from "@/shared/components/Link/Link";
import CopyButton from "../CopyButton/CopyButton";
import { Reorder } from "motion/react";
import { DeleteIcon } from "@/shared/components/Icons/CustomIcons";
import { useShortener } from "../../../hooks/useShortener";

const ShortenLink = ({ data, container }) => {
  const { id, longLink, shortLink } = data;
  const { deleteLink } = useShortener();

  const handleDelete = () => {
    deleteLink(id);
  };

  return (
    <Reorder.Item value={data} dragDirectionLock={true} dragConstraints={container} dragElastic={0.05} className={styles.link__container} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ type: "spring", duration: 0.35 }}>
      <button className={styles.link__delete} onClick={handleDelete}>
        <DeleteIcon />
      </button>

      <div className={styles["link__container--left"]}>
        <Link href={longLink} variant="primary" className={styles["link--original"]} target="_blank">
          {longLink}
        </Link>
      </div>
      <div className={styles["link__container--right"]}>
        <Link href={shortLink} variant="primary" className={styles["link--short"]} target="_blank">
          {shortLink}
        </Link>
        <CopyButton text={shortLink} />
      </div>
    </Reorder.Item>
  );
};
ShortenLink.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    longLink: PropTypes.string,
    shortLink: PropTypes.string,
  }).isRequired,
  container: PropTypes.shape({ current: PropTypes.any }),
};
export default ShortenLink;
