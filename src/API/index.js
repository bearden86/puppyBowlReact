//write a function to fetch all the players from the API and import this function into the allplayers.jsx component
export async function fetchAllPlayers() {
  try {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2405-FTB-ET-WEB-PT/players");
    const data = await response.json();
    return data.players;
  } catch (error) {
    console.error("Error fetching players:", error);
  }
}