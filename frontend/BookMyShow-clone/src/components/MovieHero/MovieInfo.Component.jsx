import React from "react";
import { useNavigate } from "react-router-dom";

const MovieInfo = ({ movie }) => {
  const genres = movie.genres?.map(({ name }) => name).join(", ");
  const navigate = useNavigate();

  const handleBuyTicket = () => {
    if (movie.id) {
      navigate(`/book-tickets/${movie.id}`);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3 px-4 my-3">
        <h1 className="text-5xl font-bold text-white font-poppins">{movie.original_title}</h1>
        <div className="text-black flex flex-col gap-2 md:px-4">
          <h4 className="font-semibold text-white font-poppins">4.2k rating</h4>
          <h4 className="font-semibold text-white font-poppins">
            Kannada, English, Hindi, Telegu, Tamil
          </h4>
          <h4 className="font-semibold text-white font-poppins">
            {movie.runtime} min | {genres}
          </h4>
        </div>
        <div className="flex items-center gap-3 ">
          <button
            className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg font-poppins"
            onClick={handleBuyTicket}
          >
            Buy Ticket
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;