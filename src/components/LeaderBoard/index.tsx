import React, { useEffect, useState } from "react";

const LeaderBoard = () => {
  const [leaderBoard, setLeaderBoard] = useState([
    {
      _id: "65591e5593ea0deca05bd37d",
      name: "Raya",
      gamesPlayed: 4,
      gamesWon: 3,
      __v: 0,
    },
    {
      _id: "65591e5b93ea0deca05bd384",
      name: "Mankey",
      gamesPlayed: 4,
      gamesWon: 1,
      __v: 0,
    },
    {
      _id: "65591e4f93ea0deca05bd376",
      name: "Rebel",
      gamesPlayed: 4,
      gamesWon: 0,
      __v: 0,
    },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://catan-leaderbaord-backend.vercel.app/api/leaderboard"
        );
        const data = await response.json();
        console.log("data=====> ", data);
        // setLeaderBoard(data);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    // Fetch data initially
    fetchData();
    // Set up an interval to fetch data every 12 hours
    const intervalId = setInterval(fetchData, 12 * 60 * 60 * 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <table className="table-leaderboard">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Games won</th>
            <th>Games played</th>
          </tr>
        </thead>
        <tbody>
            {leaderBoard?.length ? leaderBoard?.map((item, index)=>{
                return (
                    <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.gamesWon}</td>
                        <td>{item.gamesPlayed}</td>
                    </tr>
                )
            }) : null}
        </tbody>
      </table>
    </>
  );
};

export default LeaderBoard;
