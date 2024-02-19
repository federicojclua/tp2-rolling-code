

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('assets/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Baby - Justin Bieber", filePath: "assets/songs/1.mp3", coverPath: "assets/media/1.jpg"},
    {songName: "Girls Like You - Maroon 5", filePath: "assets/songs/2.mp3", coverPath: "assets/media/2.jpg"},
    {songName: "Galway Girl - Ed Sheeran", filePath: "assets/songs/3.mp3", coverPath: "assets/media/3.jpg"},
    {songName: "Hosanna - Leon D'Souza Ft. Suzanne D'Mello", filePath: "assets/songs/4.mp3", coverPath: "assets/media/4.jpg"},
    {songName: "Amplifier - Imran Khan", filePath: "assets/songs/5.mp3", coverPath: "assets/media/5.jpg"},
    {songName: "Hall Of Fame - The Script", filePath: "assets/songs/6.mp3", coverPath: "assets/media/6.jpg"},
    {songName: "Can't Get Enough - RAGHAV", filePath: "assets/songs/7.mp3", coverPath: "assets/media/7.jpg"},
    {songName: "Despacito - Luis Fonsi Ft. Daddy Yankee", filePath: "assets/songs/8.mp3", coverPath: "assets/media/8.jpg"},
    {songName: "Kai Saal - Jaz Dhami", filePath: "assets/songs/9.mp3", coverPath: "assets/songs/9.mp3"},
    {songName: "In The End - Mellen Gi & Tommee Profitt Remix", filePath: "assets/songs/10.mp3", coverPath: "assets/media/10.jpg"},
]


songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

// Por ejemplo, cambiar la altura del fondo de la lista de reproducción
document.getElementById('playlistBackground').style.height = '500px';