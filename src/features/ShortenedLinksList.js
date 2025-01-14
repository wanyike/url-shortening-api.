import styles from "./ShortenedLinksList.module.css";
import { useShortener } from "../../../hooks/useShortener";
import ShortenLink from "./ShortenLink";
import { AnimatePresence, Reorder } from "motion/react";
import { useRef } from "react";

const ShortenedLinkList = () => {
  const container = useRef(null);
  const { shortenedLinks, setShortenedLinks } = useShortener();

  const handleReorder = (newOrder) => {
    setShortenedLinks(newOrder);
  };

  return (
    <AnimatePresence>
      {shortenedLinks.length > 0 && (
        <Reorder.Group className={styles.list} axis="y" values={shortenedLinks} onReorder={handleReorder} ref={container} initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <AnimatePresence>
            {shortenedLinks.map((data) => {
              return <ShortenLink key={data.id} data={data} container={container} />;
            })}
          </AnimatePresence>
        </Reorder.Group>
      )}
    </AnimatePresence>
  );
};

export default ShortenedLinkList;
