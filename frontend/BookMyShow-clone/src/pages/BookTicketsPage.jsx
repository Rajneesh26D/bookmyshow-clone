import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import TicketCountModal from "../components/Modal/TicketCountModal";
import SeatSelectionModal from "../components/Modal/SeatSelectionModal";
import PaymentModel from "../components/PaymentModel/Payment.Component";
import { MovieContext } from "../context/Movie.context";

// Dummy cinemas and showtimes data for demo
const DUMMY_CINEMAS = [
  {
    id: 1,
    name: "AGS Cinemas: Maduravoyal",
    format: "4K DOLBY 7.1",
    shows: [
      { id: 101, time: "09:00 AM" },
      { id: 102, time: "09:15 AM" },
      { id: 103, time: "12:45 PM" },
      { id: 104, time: "04:15 PM" },
      { id: 105, time: "06:55 PM" },
      { id: 106, time: "07:35 PM" },
      { id: 107, time: "10:55 PM" },
    ],
    cancellable: false,
  },
  {
    id: 2,
    name: "Cinepolis: BSR Mall, OMR, Thoraipakkam",
    format: "DOLBY 7.1",
    shows: [
      { id: 201, time: "09:00 AM" },
      { id: 202, time: "12:15 PM" },
      { id: 203, time: "03:45 PM" },
      { id: 204, time: "07:15 PM" },
      { id: 205, time: "10:45 PM" },
    ],
    cancellable: false,
  },
  {
    id: 3,
    name: "MAYAJAAL Multiplex: ECR, Chennai",
    format: "4K DOLBY ATMOS",
    shows: [
      { id: 301, time: "09:00 AM", subtitle: true },
      { id: 302, time: "12:20 PM", subtitle: true },
      { id: 303, time: "03:40 PM", subtitle: true },
      { id: 304, time: "07:00 PM", subtitle: true },
      { id: 305, time: "10:20 PM", subtitle: true },
      { id: 306, time: "11:55 PM", subtitle: true, format: "4K DOLBY 7.1" },
    ],
    cancellable: false,
  },
];

const BookTicketsPage = () => {
  const { movieId } = useParams();
  const [selectedShow, setSelectedShow] = useState(null); // {cinema, show}
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [seatModalOpen, setSeatModalOpen] = useState(false);
  const [numTickets, setNumTickets] = useState(1);
  const [selectedDate, setSelectedDate] = useState(0); // Index of selected date

  // Optionally store language/format for later use
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");

  const { isOpen, setIsOpen, price, setPrice } = useContext(MovieContext);

  // Generate date array for the week
  const getDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const day = date.toLocaleString('en-US', { weekday: 'short' }).toUpperCase();
      const dayNum = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
      
      dates.push({ day, dayNum, month });
    }
    
    return dates;
  };

  const dates = getDates();

  // User clicks a showtime
  const handleShowSelect = (cinema, show) => {
    setSelectedShow({ cinema, show });
    setTicketModalOpen(true);
  };

  // After ticket count & language/format selection
  const handleTicketCountConfirm = (ticketData) => {
    setNumTickets(ticketData.count);
    setSelectedLanguage(ticketData.language);
    setSelectedFormat(ticketData.format);
    setTicketModalOpen(false);
    setSeatModalOpen(true);
  };

  // After seats are picked, payment is handled by modal in SeatSelectionModal (setIsOpen)
  const handleSeatSelectionConfirm = () => {
    setSeatModalOpen(false);
    // Payment modal will be shown by setIsOpen(true) from SeatSelectionModal
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Movie Header */}
      <div className="bg-white py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Mission: Impossible - The Final Reckoning - (English)</h1>
          <div className="flex gap-2 text-sm mt-1">
            <span className="px-2 py-0.5 border border-gray-400 rounded text-gray-600">UA13+</span>
            <span className="px-2 py-0.5 border border-gray-400 rounded text-gray-600">Action</span>
            <span className="px-2 py-0.5 border border-gray-400 rounded text-gray-600">Adventure</span>
            <span className="px-2 py-0.5 border border-gray-400 rounded text-gray-600">Thriller</span>
          </div>
        </div>
      </div>

      {/* Date Selection */}
      <div className="bg-white sticky top-0 z-10 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-2 gap-1">
            {dates.map((date, index) => (
              <div 
                key={index}
                onClick={() => setSelectedDate(index)}
                className={`flex-shrink-0 w-16 py-3 rounded-md text-center cursor-pointer 
                  ${selectedDate === index 
                    ? 'bg-red-500 text-white' 
                    : 'hover:bg-gray-100'}`}
              >
                <div className="text-xs font-medium">{date.day}</div>
                <div className={`text-xl font-bold ${selectedDate === index ? 'text-white' : 'text-gray-800'}`}>
                  {date.dayNum}
                </div>
                <div className="text-xs font-medium">{date.month}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            <div className="relative min-w-[150px]">
              <select className="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 text-sm focus:outline-none">
                <option>English - 2D</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            
            <div className="relative min-w-[150px]">
              <select className="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 text-sm focus:outline-none">
                <option>Price Range</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            
            <div className="relative min-w-[150px]">
              <select className="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 text-sm focus:outline-none">
                <option>Preferred Time</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            
            <div className="ml-auto">
              <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center text-sm gap-4">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span>AVAILABLE</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span>FAST FILLING</span>
          </div>
          <div className="flex items-center gap-1 border border-green-500 text-xs px-1">
            <span>LAN</span>
          </div>
          <span className="text-gray-600 text-xs">SUBTITLES LANGUAGE</span>
        </div>
      </div>

      {/* Cinema Listings */}
      <div className="container mx-auto px-4 pb-12">
        <div className="space-y-6">
          {DUMMY_CINEMAS.map((cinema) => (
            <div key={cinema.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex items-start p-4 border-b border-gray-200">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <button className="text-gray-400 hover:text-red-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </button>
                    <h2 className="text-lg font-bold">{cinema.name}</h2>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Non-cancellable</p>
                </div>
                <button className="flex items-center text-gray-500 px-2">
                  <span className="font-medium text-sm">INFO</span>
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex flex-wrap gap-4">
                  {cinema.shows.map((show) => (
                    <button
                      key={show.id}
                      className="relative group"
                      onClick={() => handleShowSelect(cinema, show)}
                    >
                      <div className="px-4 py-2 border border-gray-300 rounded-md text-center hover:border-green-500 group-hover:border-green-500 bg-white">
                        <div className="text-green-500 font-semibold">{show.time}</div>
                        <div className="text-xs text-gray-500">
                          {show.format || cinema.format}
                        </div>
                      </div>
                      {show.subtitle && (
                        <div className="absolute -top-1 -right-1 bg-green-500 text-white text-[8px] px-1 rounded">
                          ENG
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ticket Count Modal */}
      <TicketCountModal
        isOpen={ticketModalOpen}
        onClose={() => setTicketModalOpen(false)}
        onConfirm={handleTicketCountConfirm}
      />

      {/* Seat Selection Modal */}
      <SeatSelectionModal
        isOpen={seatModalOpen}
        onClose={() => setSeatModalOpen(false)}
        numTickets={numTickets}
        onConfirm={handleSeatSelectionConfirm}
      />

      {/* Payment Modal */}
      <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
    </div>
  );
};

export default BookTicketsPage;