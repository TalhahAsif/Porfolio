// DownloadCV.jsx
import React from "react";

const DownloadCV = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "http://localhost:5173/Talhah-Asif.pdf";
    link.download = "TalhahAsif.pdf";
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className=" bg-slate-800 hover:bg-slate-900 duration-200 text-text_silver font-bold py-2 px-4 rounded-full"
    >
      Download CV
    </button>
  );
};

export default DownloadCV;
