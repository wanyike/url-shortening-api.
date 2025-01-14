// import { createContext } from "react";
// import React, { useState } from "react";

// export const ShortenerContext = createContext();

// export const ShortenerProvider = ({ children }) => {
//   const [shortenedLinks, setShortenedLinks] = useState([]);

//   return (
//     <ShortenerContext.Provider value={{ shortenedLinks, setShortenedLinks }}>
//       {children}
//     </ShortenerContext.Provider>
//   );
// };

import React, { createContext, useContext, useState } from "react";
const ShortenerContext = createContext();

export const ShortenerProvider = ({ children }) => {
  const [shortenedLinks, setShortenedLinks] = useState([]);

  return <ShortenerContext.Provider value={{ shortenedLinks, setShortenedLinks }}>{children}</ShortenerContext.Provider>;
};

export const useShortener = () => {
  return useContext(ShortenerContext);
 };
