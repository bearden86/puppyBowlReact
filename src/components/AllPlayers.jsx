//add the fetchallplayers function from the index.js file
import { fetchAllPlayers } from "../API/index.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//with useState hook, crete a variable to hold the players, and set the players
export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  navigate(`/players/${id}`);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAllPlayers();
      setPlayers(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <h2>{player.name}</h2>
          <p>{player.breed}</p>
          <img src={player.imageUrl} alt={player.name} />
        </div>
      ))}
    </div>
  );
}