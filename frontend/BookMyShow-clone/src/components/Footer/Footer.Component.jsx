import React from "react"; 
import { Link } from "react-router-dom"; 
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaLinkedin, FaXing } from "react-icons/fa"; 
import { AiOutlineMail } from "react-icons/ai";

const iconStyle = { 
  marginRight: "10px", 
  fontSize: "24px", 
  color: "#fff", 
  transition: "transform 0.3s ease-in-out", 
};

const hoveredStyle = { 
  transform: "scale(1.2)", 
};

const Footer = () => { 
  return (
    <div className="bg-gray-800 text-white">
      {/* Service icons section */}
      <div className="container mx-auto py-6 border-b border-gray-700 flex flex-wrap justify-center">
        <div className="w-1/3 lg:w-1/3 flex flex-col items-center py-4">
          <div className="mb-2">
            <svg className="w-10 h-10 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M20 18C20 20.2091 16.4183 22 12 22C7.58172 22 4 20.2091 4 18C4 15.7909 7.58172 14 12 14C16.4183 14 20 15.7909 20 18Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="text-xs text-center text-gray-400">24/7 CUSTOMER CARE</div>
        </div>
        
        <div className="w-1/3 lg:w-1/3 flex flex-col items-center py-4">
          <div className="mb-2">
            <svg className="w-10 h-10 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 7H19M5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V7M5 7L7 4H17L19 7" stroke="currentColor" strokeWidth="1.5" />
              <path d="M9 11H15V15H9V11Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="text-xs text-center text-gray-400">RESEND BOOKING CONFIRMATION</div>
        </div>
        
        <div className="w-1/3 lg:w-1/3 flex flex-col items-center py-4">
          <div className="mb-2">
            <svg className="w-10 h-10 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="text-xs text-center text-gray-400">SUBSCRIBE TO THE NEWSLETTER</div>
        </div>
      </div>

      {/* Movie categories section */}
      <div className="container mx-auto py-4 px-4">
        <div className="mb-6">
          <h3 className="text-sm mb-3 text-gray-400">MOVIES NOW SHOWING IN CHENNAI</h3>
          <div className="text-xs flex flex-wrap">
            <Link to="#" className="mr-2 mb-2 text-gray-300 hover:text-white">Devil's Double Next Level</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Maaman</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Mission: Impossible - The Final Reckoning</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Tourist Family</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Final Destination Bloodlines</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Eleven</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Retro</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Shinchan: Our Dinosaur Diary</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Jora Kalya Thattunga</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">#Single</Link>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm mb-3 text-gray-400">UPCOMING MOVIES IN CHENNAI</h3>
          <div className="text-xs flex flex-wrap">
            <Link to="#" className="mr-2 mb-2 text-gray-300 hover:text-white">IPL T20 2025 Live Screening-(DC VS GT)</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">IPL T20 2025 Live Screening-(RR VS PBKS)</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">IPL T20 2025 Live Screening-(LSG VS SRH)</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">IPL T20 2025 Live Screening-(CSK VS RR)</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">IPL T20 2025 Live Screening-(MI VS DC)</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">IPL T20 2025 Live Screening-(GT VS LSG)</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Sajana</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Azadi</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Chandrabindoo</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Kapkapili</Link>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm mb-3 text-gray-400">MOVIES BY GENRE</h3>
          <div className="text-xs flex flex-wrap">
            <Link to="#" className="mr-2 mb-2 text-gray-300 hover:text-white">Drama Movies</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Thriller Movies</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Comedy Movies</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Family Movies</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Action Movies</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Horror Movies</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Romantic Movies</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Adventure Movies</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Mystery Movies</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Fantasy Movies</Link>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm mb-3 text-gray-400">MOVIES BY LANGUAGE</h3>
          <div className="text-xs flex flex-wrap">
            <Link to="#" className="mr-2 mb-2 text-gray-300 hover:text-white">Movies in Tamil</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Movies in English</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Movies in Malayalam</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Movies in Hindi</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Movies in Telugu</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Movies in Sindhi</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Movies in Konkani</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Movies in Portuguese</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Movies in Khasi</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Movies in Nepali</Link>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm mb-3 text-gray-400">SPORTS EVENTS IN CHENNAI</h3>
          <div className="text-xs flex flex-wrap">
            <Link to="#" className="mr-2 mb-2 text-gray-300 hover:text-white">Running</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Chess</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Cricket</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Cycling</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Walking</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Mixed Martial Arts</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Horse Race</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Shooting</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Wrestling</Link> | 
            <Link to="#" className="mx-2 mb-2 text-gray-300 hover:text-white">Judo</Link>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm mb-3 text-gray-400">EVENTS IN TOP CITIES</h3>
        </div>
      </div>
      
      {/* Footer logo and social icons */}
      <div className="bg-gray-900 py-6">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <Link to="/" className="text-xl font-bold">
              <span className="text-white">book</span>
              <span className="text-red-500">my</span>
              <span className="text-white">show</span>
            </Link>
          </div>
          <div className="flex justify-center mb-6">
            <Link to="#" className="mx-2">
              <div className="bg-gray-700 rounded-full p-2">
                <FaFacebook className="text-lg text-gray-400" />
              </div>
            </Link>
            <Link to="#" className="mx-2">
              <div className="bg-gray-700 rounded-full p-2">
                <FaTwitter className="text-lg text-gray-400" />
              </div>
            </Link>
            <Link to="#" className="mx-2">
              <div className="bg-gray-700 rounded-full p-2">
                <FaInstagram className="text-lg text-gray-400" />
              </div>
            </Link>
            <Link to="#" className="mx-2">
              <div className="bg-gray-700 rounded-full p-2">
                <AiOutlineMail className="text-lg text-gray-400" />
              </div>
            </Link>
            <Link to="#" className="mx-2">
              <div className="bg-gray-700 rounded-full p-2">
                <FaPinterest className="text-lg text-gray-400" />
              </div>
            </Link>
            <Link to="#" className="mx-2">
              <div className="bg-gray-700 rounded-full p-2">
                <FaLinkedin className="text-lg text-gray-400" />
              </div>
            </Link>
          </div>
          <div className="text-xs text-gray-400 px-4">
            <p>Copyright 2025 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
            <p className="mt-2">The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied.</p>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Footer;