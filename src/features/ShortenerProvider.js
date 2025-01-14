import { ShortenerContext } from "./ShortenerContext";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import { API_BASE_URL } from "@/config.js";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const defaultErrorMessage =
  "There was an error when trying to shorten the URL.";

export const ShortenerProvider = ({ children }) => {
  const { getItem, setItem } = useLocalStorage("links");
  const [shortenedLinks, setShortenedLinks] = useState(getItem() || []);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    setItem(shortenedLinks);
  }, [shortenedLinks, setItem]);

  const shortenLink = async (link) => {
    try {
      setIsLoading(true);
      const res = await fetch(API_BASE_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          url: link,
        }),
      });

      const data = await res.json();

      if (res.ok && data.short_url) {
        const newId = shortenedLinks.length
          ? shortenedLinks[shortenedLinks.length - 1].id + 1
          : 1;

        setShortenedLinks((prev) => [
          ...prev,
          {
            id: newId,
            longLink: link,
            shortLink: data.short_url,
          },
        ]);
      } else {
        setApiError(data.error || defaultErrorMessage);
      }
    } catch (error) {
      console.error(error);
      setApiError(defaultErrorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteLink = (id) => {
    setShortenedLinks((prevLinks) =>
      prevLinks.filter((link) => link.id !== id)
    );
  };

  return (
    <ShortenerContext.Provider
      value={{
        shortenedLinks,
        setShortenedLinks,
        deleteLink,
        shortenLink,
        apiError,
        isLoading,
      }}
    >
      {children}
    </ShortenerContext.Provider>
  );
};

ShortenerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
