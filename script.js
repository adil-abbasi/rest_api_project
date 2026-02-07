async function getJoke() {
  const loader = document.getElementById("loader");
  const responseDiv = document.getElementById("response");

  loader.style.display = "block";
  responseDiv.innerText = "Fetching data from REST API...";

  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();

    let output = "";

    if (data.type === "single") {
      output = data.joke;
    } else {
      output = data.setup + " — " + data.delivery;
    }

    setTimeout(() => {
      loader.style.display = "none";
      responseDiv.innerText = output;
      responseDiv.style.animation = "fadeIn 0.5s ease";
    }, 600);

  } catch (error) {
    loader.style.display = "none";
    responseDiv.innerText = "Error: Unable to connect to REST API.";
    console.error(error);
  }
}
