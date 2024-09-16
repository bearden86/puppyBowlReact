import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <h1>Nav Bar</h1>
      <Link to="/">Home</Link>
      <Link to="/players">Players</Link>
      <Link to="/players/new">New Player</Link>
    </div>
  );
}