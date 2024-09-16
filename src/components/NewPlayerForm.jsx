import { useNavigate } from "react-router-dom";


export default function NewPlayerForm() {
  const navigate = useNavigate();
  navigate(`/players/${id}`);

  return (
    <div>
      <h1>New Player Form</h1>
    </div>
  );
}
