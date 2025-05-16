import React, { useState, useContext } from "react";
import { MovieContext } from "../../context/Movie.context";

// Helper to generate seats by category - more accurate to the reference image
const generateSeatsByCategory = () => {
  return {
    PREMIUM: {
      price: 200.00,
      rows: [
        { id: 'K', seats: Array(11).fill().map((_, i) => i + 1) },
        { id: 'J', seats: Array(15).fill().map((_, i) => i + 1) },
        { id: 'H', seats: Array(15).fill().map((_, i) => i + 1) }
      ]
    },
    EXECUTIVE: {
      price: 180.00,
      rows: [
        { id: 'G', seats: Array(15).fill().map((_, i) => i + 1) },
        { id: 'F', seats: Array(11).fill().map((_, i) => i + 1) },
        { id: 'E', seats: Array(11).fill().map((_, i) => i + 1) },
        { id: 'D', seats: Array(11).fill().map((_, i) => i + 1) },
        { id: 'C', seats: Array(11).fill().map((_, i) => i + 1) }
      ]
    },
    NORMAL: {
      price: 160.00,
      rows: [
        { id: 'B', seats: Array(11).fill().map((_, i) => i + 1) },
        { id: 'A', seats: Array(11).fill().map((_, i) => i + 1) }
      ]
    }
  };
};

const SeatSelectionModal = ({
  isOpen,
  onClose,
  numTickets,
  onConfirm
}) => {
  const { setIsOpen, setPrice } = useContext(MovieContext);
  const [selected, setSelected] = useState([]);
  const [seatCategories] = useState(generateSeatsByCategory());
  
  // Generate a set of occupied seats (fixed set matching the image)
  const [occupiedSeats] = useState(() => {
    const occupied = new Set();
    // Social distancing seats from image
    occupied.add('J15');
    occupied.add('J14');
    
    // Sold seats from image
    occupied.add('G11');
    occupied.add('G10');
    occupied.add('G9');
    
    return occupied;
  });

  if (!isOpen) return null;

  // Fixed handleSeatClick function with console logs for debugging
  const handleSeatClick = (rowId, seatNum) => {
    const seatId = `${rowId}${seatNum}`;
    console.log(`Clicked on seat: ${seatId}`);
    
    // Check if the seat is occupied or social distancing
    if (occupiedSeats.has(seatId)) {
      console.log(`Seat ${seatId} is occupied, cannot select`);
      return;
    }
    
    // Toggle selection
    if (selected.includes(seatId)) {
      console.log(`Deselecting seat ${seatId}`);
      setSelected(prev => prev.filter(s => s !== seatId));
    } else if (selected.length < numTickets) {
      console.log(`Selecting seat ${seatId}`);
      setSelected(prev => [...prev, seatId]);
    } else {
      console.log(`Already selected ${numTickets} seats, cannot select more`);
      // Optional: Show an alert or message to user
      alert(`You can only select ${numTickets} seats`);
    }
  };

  const isSocialDistancingSeat = (rowId, seatNum) => {
    const seatId = `${rowId}${seatNum}`;
    return seatId === 'J15' || seatId === 'J14'; // From reference image
  };

  const isSold = (rowId, seatNum) => {
    const seatId = `${rowId}${seatNum}`;
    return occupiedSeats.has(seatId) && !isSocialDistancingSeat(rowId, seatNum);
  };

  const getCategoryForSeat = (seatId) => {
    const rowId = seatId.charAt(0);
    for (const [category, data] of Object.entries(seatCategories)) {
      if (data.rows.some(row => row.id === rowId)) {
        return category;
      }
    }
    return null;
  };

  const calculateTotalPrice = () => {
    let total = 0;
    for (const seatId of selected) {
      const category = getCategoryForSeat(seatId);
      if (category) {
        total += seatCategories[category].price;
      }
    }
    return total;
  };

  const handlePayment = () => {
    if (selected.length === numTickets) {
      const totalPrice = calculateTotalPrice();
      setPrice(totalPrice);
      setIsOpen(true); // Open payment modal
      onConfirm(selected);
    } else {
      alert(`Please select exactly ${numTickets} seats.`);
    }
  };

  const renderSeats = (rowId, seats) => {
    return (
      <div className="flex items-center my-2">
        <div className="w-6 text-gray-500 mr-3 font-medium">{rowId}</div>
        <div className="flex flex-wrap gap-1">
          {seats.map(seatNum => {
            const seatId = `${rowId}${seatNum}`;
            const isSelected = selected.includes(seatId);
            const isSocialDistance = isSocialDistancingSeat(rowId, seatNum);
            const isSoldSeat = isSold(rowId, seatNum);
            
            // Determine if we need a gap (based on the layout in the image)
            const needsGap = seatNum === 4 || seatNum === 11;
            
            return (
              <React.Fragment key={seatId}>
                <button
                  className={`
                    w-8 h-8 text-xs flex items-center justify-center
                    ${isSelected ? 'bg-green-600 text-white border border-green-600' : 
                      isSocialDistance ? 'bg-white text-gray-400 border border-gray-300' :
                      isSoldSeat ? 'bg-gray-300 text-gray-500 border border-gray-300' : 
                      'bg-white text-gray-700 border border-green-500 hover:bg-green-100'}
                    ${isSoldSeat || isSocialDistance ? 'cursor-not-allowed' : 'cursor-pointer'}
                    rounded-sm
                  `}
                  onClick={() => handleSeatClick(rowId, seatNum)}
                  disabled={isSoldSeat || isSocialDistance}
                  aria-label={`Seat ${seatId}${isSoldSeat ? ' (Sold)' : isSocialDistance ? ' (Social Distancing)' : ''}`}
                  type="button"
                >
                  {seatNum}
                </button>
                {needsGap && <div className="w-6"></div>}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 overflow-y-auto py-10">
      <div className="bg-white rounded-lg shadow-xl p-6 w-[95vw] max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Select Your Seats</h2>
        
        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            {/* PREMIUM Section */}
            <div className="mb-6">
              <div className="text-gray-500 border-b py-2 mb-2 flex items-center">
                <span className="font-medium">PREMIUM-Rs. {seatCategories.PREMIUM.price.toFixed(2)}</span>
              </div>
              
              <div className="pl-4">
                {seatCategories.PREMIUM.rows.map(row => (
                  <div key={row.id}>
                    {renderSeats(row.id, row.seats)}
                  </div>
                ))}
              </div>
            </div>
            
            {/* EXECUTIVE Section */}
            <div className="mb-6">
              <div className="text-gray-500 border-b py-2 mb-2 flex items-center">
                <span className="font-medium">EXECUTIVE-Rs. {seatCategories.EXECUTIVE.price.toFixed(2)}</span>
              </div>
              
              <div className="pl-4">
                {seatCategories.EXECUTIVE.rows.map(row => (
                  <div key={row.id}>
                    {renderSeats(row.id, row.seats)}
                  </div>
                ))}
              </div>
            </div>
            
            {/* NORMAL Section */}
            <div className="mb-10">
              <div className="text-gray-500 border-b py-2 mb-2 flex items-center">
                <span className="font-medium">NORMAL-Rs. {seatCategories.NORMAL.price.toFixed(2)}</span>
              </div>
              
              <div className="pl-4">
                {seatCategories.NORMAL.rows.map(row => (
                  <div key={row.id}>
                    {renderSeats(row.id, row.seats)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex justify-center items-center mb-6 text-sm space-x-4">
          <div className="flex items-center">
            <div className="w-5 h-5 border border-gray-300 bg-gray-300 mr-2"></div>
            <span>Sold</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 border border-green-500 bg-white mr-2"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 border border-green-600 bg-green-600 mr-2"></div>
            <span>Selected</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 border border-gray-300 bg-white mr-2"></div>
            <span>Social Distancing Seats</span>
          </div>
        </div>
        
        {/* Selection Summary */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 py-3 bg-gray-100 rounded mb-4">
          <div>
            <span className="block md:inline mr-4">Selected Seats:</span>
            <span className="font-bold">{selected.length > 0 ? selected.join(", ") : "None"}</span>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="mr-2">Total:</span>
            <span className="font-bold">₹{calculateTotalPrice().toFixed(2)}</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            className="bg-gray-300 text-gray-800 px-6 py-3 rounded"
            onClick={onClose}
            type="button"
          >
            Cancel
          </button>
          <button
            className={`bg-red-600 text-white px-6 py-3 rounded ${selected.length !== numTickets ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={selected.length !== numTickets}
            onClick={handlePayment}
            type="button"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionModal;