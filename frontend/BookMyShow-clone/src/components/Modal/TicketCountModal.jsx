import React, { useState } from "react";

const TicketCountModal = ({ isOpen, onClose, onConfirm, maxTickets = 10 }) => {
  const [count, setCount] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [step, setStep] = useState("language"); // "language" or "count"

  if (!isOpen) return null;

  const handleLanguageFormatSelect = (language, format) => {
    setSelectedLanguage(language);
    setSelectedFormat(format);
  };

  const handleContinue = () => {
    if (selectedLanguage && selectedFormat) {
      setStep("count");
    }
  };

  const handleConfirm = () => {
    onConfirm({
      language: selectedLanguage,
      format: selectedFormat,
      count: count
    });
  };

  // Language selection screen
  if (step === "language") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
        <div className="bg-white rounded-lg shadow-lg w-96 max-w-full">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Mission: Impossible - The Final Reckoning</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Main content */}
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Select language and format</h3>
            
            {/* English section */}
            <div className="mb-6 bg-gray-100 p-3 rounded-md">
              <h4 className="text-gray-500 font-medium mb-3">ENGLISH</h4>
              <div className="flex gap-3">
                <button 
                  className={`px-6 py-2 rounded-full border ${selectedLanguage === 'English' && selectedFormat === '2D' 
                    ? 'border-red-500 text-red-500' 
                    : 'border-gray-300 text-gray-700'}`}
                  onClick={() => handleLanguageFormatSelect('English', '2D')}
                >
                  2D
                </button>
                <button 
                  className={`px-6 py-2 rounded-full border ${selectedLanguage === 'English' && selectedFormat === 'IMAX 2D' 
                    ? 'border-red-500 text-red-500' 
                    : 'border-gray-300 text-gray-700'}`}
                  onClick={() => handleLanguageFormatSelect('English', 'IMAX 2D')}
                >
                  IMAX 2D
                </button>
              </div>
            </div>
            
            {/* Tamil section */}
            <div className="bg-gray-100 p-3 rounded-md">
              <h4 className="text-gray-500 font-medium mb-3">TAMIL</h4>
              <div className="flex gap-3">
                <button 
                  className={`px-6 py-2 rounded-full border ${selectedLanguage === 'Tamil' && selectedFormat === '2D' 
                    ? 'border-red-500 text-red-500' 
                    : 'border-gray-300 text-gray-700'}`}
                  onClick={() => handleLanguageFormatSelect('Tamil', '2D')}
                >
                  2D
                </button>
              </div>
            </div>
            
            {/* Continue Button */}
            <div className="mt-6">
              <button
                className={`w-full py-3 rounded-md ${
                  selectedLanguage && selectedFormat
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                onClick={handleContinue}
                disabled={!selectedLanguage || !selectedFormat}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Ticket count selection screen (original functionality preserved)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg w-96 max-w-full">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold">Select Number of Tickets</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-center mb-6">
            <button
              className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full text-xl"
              onClick={() => setCount((c) => Math.max(1, c - 1))}
              disabled={count === 1}
            >-</button>
            <input
              className="w-16 text-center border border-gray-300 mx-6 rounded py-2 text-lg"
              type="number"
              min={1}
              max={maxTickets}
              value={count}
              readOnly
            />
            <button
              className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full text-xl"
              onClick={() => setCount((c) => Math.min(maxTickets, c + 1))}
              disabled={count === maxTickets}
            >+</button>
          </div>
          
          <div className="mt-6">
            <button
              className="w-full py-3 rounded-md bg-red-500 text-white"
              onClick={handleConfirm}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCountModal;