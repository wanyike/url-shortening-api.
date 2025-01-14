import { useContext } from "react";
import { ShortenerContext } from "../contexts/ShortenerContext";

export const useShortener = () => useContext(ShortenerContext);
