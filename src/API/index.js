//write a function to fetch all the players from the API and import this function into the allplayers.jsx component
export async function fetchAllPlayers() {
  try {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2405-FTB-ET-WEB-PT/players");
    const data = await response.json();
    return data.players;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

//write a function to fetch a single player from the API and import this function into the singleplayer.jsx component
export async function fetchSinglePlayer() {
  try {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2405-FTB-ET-WEB-PT/players")
    const data = await response.json();
    return data.player;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}