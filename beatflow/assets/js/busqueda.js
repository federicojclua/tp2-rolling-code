const canciones = ["amores como el nuestro", "y ahora te vas", "auto rojo", "lo mejor del amor", "voy a olvidarme de mi",
"el bombon asesino", "en la ciudad de la furia", "flaca", "mujer amante", "crimen", "una foto", "la morocha", "hola perdida", 
"sinvergüenza", "young miko", "sin querer", "inocente", "el amor de mi vida", "linda", "piscina", 
"los charros", "los bukis", "rodrigo", "carlos vives", "los palmeras", "gustavo cerati", "andres calamaro", "rata blanca",
"vilma palma e los vampiros", "soda stereo", "mesita", "luck ra", "emanero", "bizarrap", "bzrp", "fer vazquez", "roze",
"los angeles azules", "marka akme", "maria becerra"];

const searchBar = document.getElementById("search-bar");
const suggestionsContainer = document.getElementById("suggestionsContainer");

searchBar.addEventListener("input", (event) => { // Cambiado de keyup a input para capturar todos los cambios en el campo de búsqueda
  const input = event.target.value.trim().toLowerCase(); // Quitamos los espacios al inicio y al final
  const matchingSongs = canciones.filter(song => song.toLowerCase().startsWith(input)); // Usamos startsWith para encontrar las canciones que empiezan con la entrada

  if (input.length) {
    suggestionsContainer.innerHTML = ""; // Limpiar sugerencias anteriores

    matchingSongs.sort(); // Ordenar las canciones alfabéticamente

    matchingSongs.forEach(song => {
      const li = document.createElement("li");
      li.textContent = song;
      li.className = "suggestion";
      suggestionsContainer.appendChild(li);
      li.addEventListener("click", () => {
        searchBar.value = song; // Autocompletar el campo de búsqueda
        suggestionsContainer.style.display = "none"; // Ocultar las sugerencias
      });
    });

    suggestionsContainer.style.display = "block";
  } else {
    suggestionsContainer.style.display = "none";
  } 
});




  