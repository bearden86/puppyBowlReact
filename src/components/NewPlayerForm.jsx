import { useNavigate } from "react-router-dom";

//create the form and ajax helper function to create a new player in this component

export default function NewPlayerForm() {
  const navigate = useNavigate();
  navigate(`/players/${id}`);
  const [name, setName] = useState("John Wayne");
  const [breed, setBreed] = useState("Golden Retriever");
  const [status, setStatus] = useState("bench");

  const updateName = (event) => {
    setName(event.target.value);
  };
  const updateBreed = (event) => {
    setBreed(event.target.value);
  };
  const updateStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Breed: {breed}</p>
      <p>Status: {status}</p>
    </div>
  );
}
