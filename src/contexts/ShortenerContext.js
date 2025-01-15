import React, { createContext, useState } from "react";

export const ShortenerContext = createContext(); // Declare once

export const ShortenerProvider = ({ children }) => {
  const [shortenedLinks, setShortenedLinks] = useState([]);

  return (
    <ShortenerContext.Provider value={{ shortenedLinks, setShortenedLinks }}>
      {children}
    </ShortenerContext.Provider>
  );
};

