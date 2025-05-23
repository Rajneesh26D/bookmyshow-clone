import React, { useState, createContext } from "react";
export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState({
    id: 0,
    original_title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const [numTickets, setNumTickets] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);


  return (
    <MovieContext.Provider
      value={{
        movie,
        setMovie,
        isOpen,
        setIsOpen,
        price,
        setPrice,
        numTickets,
        setNumTickets,
        selectedSeats,
        setSelectedSeats,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;