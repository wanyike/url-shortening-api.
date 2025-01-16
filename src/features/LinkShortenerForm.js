
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
             <form className= "" onSubmit={handleSubmit(onSubmit)}>
          <div className={["form__input-container"]}>
            <input
              type="text"
              className=""
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
            
    </>
  );
};

export default LinkShortenerForm;
