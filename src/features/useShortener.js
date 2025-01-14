import { useContext } from "react";
import { ShortenerContext } from "../contexts/shortenerContext";

export const useShortener = () => useContext(ShortenerContext);
