import React from "react";

const AddGame = () => {
  const postData = {
    // Your data goes here
    playerName: 'John Doe',
    score: 100,
    // Add other data properties as needed
  };

  const postPlayerData = async () => {
    try {
      const response = await fetch('https://catan-leaderboard-backend.vercel.app/api/addPlayer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Failed to add player data');
      }

      // Handle the success or response data if needed
      const responseData = await response.json();
      console.log('Player data added successfully:', responseData);
    } catch (error) {
      console.error('Error adding player data:', error);
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border border-zo-stroke p-6">
    hello
      </div>
    </div>
  );
};

export default AddGame;
