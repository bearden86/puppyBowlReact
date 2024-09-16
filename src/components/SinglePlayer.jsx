import { useParams } from 'react-router-dom';
import { fetchSinglePlayer } from "../API";
import { useNavigate } from "react-router-dom";

export default function SinglePlayers() {
  const { id } = useParams();
  const navigate = useNavigate();
  navigate(`/players/${id}`);
  fetchSinglePlayer(id);

  return (
    <div>
      <h1>Single Players</h1>
    </div>
  );
}
