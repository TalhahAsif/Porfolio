// DownloadCV.jsx
import React from "react";

const DownloadCV = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../assets/Talhah-Asif.pdf";
    link.download = "TalhahAsif.pdf";
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Download PDF
    </button>
  );
};

export default DownloadCV;
