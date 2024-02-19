let listaCanciones = [
  //Rock Nacional
  {
    artista: 'Soda Stereo',
    titulo: 'En la Ciudad de la Furia',
    album: 'Doble Vida',
    ano: 1988,
    genero: 'Rock, Pop Rock',
    id: 101,
  },
  {
    artista: 'Andrés Calamaro',
    titulo: 'Flaca',
    album: 'Alta Suciedad',
    ano: 1997,
    genero: 'Rock',
    id: 102,
  },
  {
    artista: 'Rata Blanca',
    titulo: 'Mujer Amante',
    album: 'Magos, Espadas y Rosas',
    ano: 1990,
    genero: 'Rock, Heavy Metal',
    id: 103,
  },
  {
    artista: 'Vilma Palma e Vampiros',
    titulo: 'Auto Rojo',
    album: '3980',
    ano: 1993,
    genero: 'Rock Pop Rock',
    id: 104,
  },
  {
    artista: 'Gustavo Cerati',
    titulo: 'Crimen',
    album: 'Ahí Vamos',
    ano: 2006,
    genero: 'Rock',
    id: 105,
  },

  //Cumbias
  {
    artista: 'Los Charros',
    titulo: 'Amores como el Nuestro',
    album: 'Corazón de Papel',
    ano: 1996,
    genero: 'Cumbia, Pop',
    id: 201,
  },
  {
    artista: 'La Nueva Luna',
    titulo: 'Y Ahora Te Vas',
    album: 'Humildad y Talento',
    ano: 2000,
    genero: 'Cumbia, Pop',
    id: 202,
  },
  {
    artista: 'Rodrigo',
    titulo: 'Lo Mejor del Amor',
    album: 'Lo Mejor del Amor',
    ano: 1996,
    genero: 'Cumbia, Cuarteto',
    id: 203,
  },
  {
    artista: 'Mario Luis',
    titulo: 'Voy a Olvidarme de Mí',
    album: 'Solo',
    ano: 1996,
    genero: 'Cumbia',
    id: 204,
  },
  {
    artista: 'Los Palmeras',
    titulo: 'El Bombón',
    album: 'El Bombón',
    ano: 2006,
    genero: 'Cumbia',
    id: 205,
  },

  //Top 10 2023
  {
    artista: 'Mesita',
    titulo: 'Una Foto',
    album: 'Una Foto',
    ano: 2023,
    genero: 'RKT, Trap',
    id: 301,
  },
  {
    artista: 'Luck Ra, BM',
    titulo: 'La Morocha',
    album: 'La Morocha',
    ano: 2023,
    genero: 'Pop, Urbano',
    id: 302,
  },
  {
    artista: 'Luck Ra',
    titulo: 'Hola Perdida',
    album: 'Hola Perdida',
    ano: 2023,
    genero: 'Pop, Urbano',
    id: 303,
  },
  {
    artista: 'Emanero, Karina, j mena, Angela Torres',
    titulo: 'Sinvergüenza',
    album: 'Sinvergüenza',
    ano: 2023,
    genero: 'Cumbia',
    id: 304,
  },
  {
    artista: 'Bizarrap, Young Miko',
    titulo: 'Young Miko',
    album: 'Young Miko',
    ano: 2023,
    genero: 'Trap, Pop',
    id: 305,
  },
  {
    artista: 'Fer Vazquez, Flor Alvarez',
    titulo: 'Sin Querer',
    album: 'Sin Querer',
    ano: 2023,
    genero: 'Cumbia',
    id: 306,
  },
  {
    artista: 'Roze Official, Peipper',
    titulo: 'Inocente',
    album: 'Inocente',
    ano: 2023,
    genero: 'Cumbia, Urbano',
    id: 307,
  },
  {
    artista: 'Los Ángeles Azules, Maria Becerra',
    titulo: 'El Amor de Mi Vida',
    album: 'El Amor de Mi Vida',
    ano: 2023,
    genero: 'Cumbia',
    id: 308,
  },
  {
    artista: 'Marka Akme',
    titulo: 'Linda',
    album: 'Linda',
    ano: 2023,
    genero: 'Urbano',
    id: 309,
  },
  {
    artista: 'Maria Becerra, Chencho Corleone, Ovy On The Drums',
    titulo: 'Piscina',
    album: 'Piscina',
    ano: 2023,
    genero: 'Urbano',
    id: 310,
  },
];

//Obtengo las imagenes de los carruseles
let canciones = document.querySelectorAll(
  '#carruselCanciones1 .carousel-item, #carruselCanciones2 .carousel-item'
);

//Agrega evento click a cada imagen
canciones.forEach(function (cancion) {
  cancion.addEventListener('click', function (evento) {
    // Confirma que el evento click proviene de una imagen
    if (evento.target.tagName === 'IMG') {
      //Se muestra el modal
      let modalDetalle = new bootstrap.Modal(document.getElementById('modalCancion'));
      modalDetalle.show();
      // Busca la canción correspondiente en el array listaCanciones
      let detalle = listaCanciones.find((c) => c.id === parseInt(evento.target.id));
      //Muestra la informacion de la cancion en el modal
      document.getElementById('detalleTitulo').textContent = detalle.titulo;
      document.getElementById('detalleArtista').textContent = detalle.artista;
      document.getElementById('detalleAlbum').textContent = detalle.album;
      document.getElementById('detalleAno').textContent = detalle.ano;
      document.getElementById('detalleGenero').textContent = detalle.genero;
      //Asigna la imagen del evento a la portada del modal
      document.getElementById('portadaAlbum').src = evento.target.src;
    }
  });
});
