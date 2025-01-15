import styles from "./LinkShortenerForm"; 
import { BgShortenPattern } from "../features/BackgroundPatterns";
import ShortenButton from "../features/ShortenButton";
import { validateUrl } from "./ValidateUrl";
import { useShortener } from "../features/UseShortener";

const LinkShortenerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = ({ mode: "onTouched" });

  const { shortenLink, isLoading } = useShortener();
  const onSubmit = ({ link }) => {
    shortenLink(link);
  }
  
  return (
    <>
             <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles["form__input-container"]}>
            <input
              type="text"
              className={`${styles.form__input} ${
                errors.link && styles["form__input--error"]
              }`}
              placeholder="Shorten a link here..."
              {...register("link", {
                required: "Please add a link",
                validate: {
                  validUrl: (value) =>
                    validateUrl(value) || "Please enter a valid URL",
                },
              })}
              aria-invalid={errors.link ? "true" : "false"}
            />
           
          </div>

          <div>
            <ShortenButton type="submit" disabled={isLoading} />
          </div>
        </form>
        <BgShortenPattern className={styles.form__background} />     
    </>
  );
};

export default LinkShortenerForm;
