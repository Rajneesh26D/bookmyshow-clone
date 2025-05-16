// import React, { useContext, useEffect, useState } from "react";
// import { MovieContext } from "../../context/Movie.context";
// import MovieInfo from "./MovieInfo.Component";
// import TicketCountModal from "../Modal/TicketCountModal"; 
// import SeatSelectionModal from "../Modal/SeatSelectionModal";
// import PaymentModel from "../PaymentModel/Payment.Component";


// const MovieHero = () => {
//   const { movie } = useContext(MovieContext);

//   // New state for modals and ticket/seat selection
//   const [ticketModalOpen, setTicketModalOpen] = useState(false);
//   const [seatModalOpen, setSeatModalOpen] = useState(false);
//   const [numTickets, setNumTickets] = useState(1);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const { isOpen, setIsOpen, price } = useContext(MovieContext);

//   // Handler for Buy Ticket
//   const handleBuyTicket = () => setTicketModalOpen(true);

//   // After ticket count chosen
//   const handleTicketCountConfirm = (ticketData) => {
//     setNumTickets(ticketData.count);
//     // setNumTickets(count);
//     setTicketModalOpen(false);
//     setSeatModalOpen(true);
//   };

//   // After seats chosen
//   const handleSeatSelectionConfirm = (seats) => {
//     setSelectedSeats(seats);
//     setSeatModalOpen(false);
//     // TODO: Trigger payment modal here, or use context if your PaymentModel is global
//     // Example: setShowPaymentModal(true); or setIsOpen(true);
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const genres = movie.genres?.map(({ name }) => name).join(", ");

//   return (
//     <>
//       {/* Ticket Count Modal */}
//       <TicketCountModal
//         isOpen={ticketModalOpen}
//         onClose={() => setTicketModalOpen(false)}
//         onConfirm={handleTicketCountConfirm}
//       />
//       {/* Seat Selection Modal */}
//       <SeatSelectionModal
//         isOpen={seatModalOpen}
//         onClose={() => setSeatModalOpen(false)}
//         numTickets={numTickets}
//         onConfirm={handleSeatSelectionConfirm}
//       />

//       <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />

//       <div>
//         {/* mobile or tab screen size */}
//         <div className="lg:hidden w-full">
//           <img
//             src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
//             alt="cover pic"
//             className=" rounded responsive-img my-2 py-2"
//             style={{ width: "calc(100%-2rem)" }}
//           />
//         </div>
//         <div className="flex flex-col gap-3 lg:hidden">
//           <div className="flex flex-col-reverse gap-3 px-4 my-3">
//             <div className="text-black flex flex-col gap-2 md:px-4">
//               <h4>4.2k rating</h4>
//               <h4>Kannada, English, Hindi, Telegu, Tamil</h4>
//               <h4>
//                 {movie.runtime} min | {genres}
//               </h4>
//             </div>
//           </div>
//           <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
//             <button
//               onClick={handleBuyTicket}
//               className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"
//             >
//               Buy Ticket
//             </button>
//           </div>
//         </div>

//         {/* Large Screen Device */}
//         <div
//           className="relative hidden w-full lg:block"
//           style={{ height: "30rem" }}
//         >
//           <div
//             className="absolute z-10 w-full h-full"
//             style={{
//               // background: "rgb(0, 0, 0)",
//               background:
//                 "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(72,16,16,1) 0%, rgba(13,59,44,0.9977240896358543) 49%, rgba(0,0,0,0.0005) 100%);",
//             }}
//           >
//             <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
//               <div className="w-64 h-96">
//                 <img
//                   src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
//                   alt="Movie Poster"
//                   className="w-full h-full rounded-lg"
//                 />
//               </div>
//               <div>
//                 <MovieInfo
//                   movie={movie}
//                   onBuyTicket={handleBuyTicket}
//                 />
//               </div>
//             </div>
//             <img
//               src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
//               alt="Backdrop Poster"
//               className="w-full h-full object-cover object-center"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MovieHero;

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../../context/Movie.context";
import MovieInfo from "./MovieInfo.Component";
// Remove modal imports: TicketCountModal, SeatSelectionModal, PaymentModel

const MovieHero = () => {
  const { movie } = useContext(MovieContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const genres = movie.genres?.map(({ name }) => name).join(", ");

  // Buy Ticket now navigates to the booking page
  const handleBuyTicket = () => {
    if (movie.id) {
      navigate(`/book-tickets/${movie.id}`);
    }
  };

  return (
    <>
      <div>
        {/* mobile or tab screen size */}
        <div className="lg:hidden w-full">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="cover pic"
            className=" rounded responsive-img my-2 py-2"
            style={{ width: "calc(100%-2rem)" }}
          />
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex flex-col-reverse gap-3 px-4 my-3">
            <div className="text-black flex flex-col gap-2 md:px-4">
              <h4>4.2k rating</h4>
              <h4>Kannada, English, Hindi, Telegu, Tamil</h4>
              <h4>
                {movie.runtime} min | {genres}
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
            <button
              onClick={handleBuyTicket}
              className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"
            >
              Buy Ticket
            </button>
          </div>
        </div>

        {/* Large Screen Device */}
        <div
          className="relative hidden w-full lg:block"
          style={{ height: "30rem" }}
        >
          <div
            className="absolute z-10 w-full h-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(72,16,16,1) 0%, rgba(13,59,44,0.9977240896358543) 49%, rgba(0,0,0,0.0005) 100%)",
            }}
          >
            <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
              <div className="w-64 h-96">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="Movie Poster"
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div>
                <MovieInfo
                  movie={movie}
                  // onBuyTicket now handled internally; prop not required
                />
              </div>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="Backdrop Poster"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieHero;