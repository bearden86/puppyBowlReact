import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../API";
import { useNavigate } from "react-router-dom";

export default function SinglePlayers() {
  const { id } = useParams();
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  navigate(`/players/${id}`);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchSinglePlayer(id);
      setPlayers(data);
    }
    fetchData();
  }, [id]);

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
