import React from "react";

const DownloadBut = () => {
  const handleDownload = () => {
    // JSX code for the score card
    const scoreCardJSX = `
      import React from 'react';
      
      const ScoreCard = () => {
        return (
          <div>
            <h1>My Score Card</h1>
            <p>Your score: 95%</p>
            {/* Add more score details here */}
          </div>
        );
      };
      
      export default ScoreCard;
    `;

    // Create a Blob object with the JSX code
    const blob = new Blob([scoreCardJSX], { type: "text/plain" });

    // Create a URL for the Blob object
    const url = URL.createObjectURL(blob);

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = url;
    link.download = "ScoreCard.jsx"; // Specify the file name

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up resources
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Score Card</button>
    </div>
  );
};

export default DownloadBut;
