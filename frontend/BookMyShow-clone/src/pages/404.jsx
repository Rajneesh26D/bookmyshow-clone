import React from "react";

const ErrorPage = () => {
  const errorImageUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"; // Example error/404 image

  return (
    <div className="h-screen flex items-center justify-center">
      <div
        className="bg-cover bg-center w-full h-full"
        style={{ backgroundImage: `url(${errorImageUrl})` }}
      ></div>
    </div>
  );
};

export default ErrorPage;