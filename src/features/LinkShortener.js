import styles from "./LinkShortener.module.css";
import LinkShortenerForm from "./components/LinkShortenerForm/LinkShortenerForm";
import ShortenedLinksList from "./shortening/components/ShortenedLinksList/ShortenedLinksList";
import { ShortenerProvider } from "./contexts/ShortenerProvider";

const LinkShortener = () => {
  return (
    <>
      <ShortenerProvider>
        <div className={styles.shotener__container}>
          <LinkShortenerForm />
        </div>
        <ShortenedLinksList />
      </ShortenerProvider>
    </>
  );
};

export default LinkShortener;
