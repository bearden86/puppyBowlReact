import { useNavigate } from "react-router-dom";

export default function SinglePlayers() {
  const navigate = useNavigate();
  navigate(`/players/${id}`);

  return (
    <div>
      <h1>Single Players</h1>
    </div>
  );
}
