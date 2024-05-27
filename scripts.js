document.addEventListener("DOMContentLoaded", () => {
    let folderIndex = 1;

    function playAudio(file) {
        const audio = new Audio(`my_music_app/audio${folderIndex}/${file}`);
        console.log(`Playing: my_music_app/audio${folderIndex}/${file}`);
      
    }

    document.getElementById('btn1').addEventListener('click', () => playAudio('b1.MP3'));
    document.getElementById('btn2').addEventListener('click', () => playAudio('b2.MP3'));
    document.getElementById('btn3').addEventListener('click', () => playAudio('b3.MP3'));
    document.getElementById('btn4').addEventListener('click', () => playAudio('b4.MP3'));
    document.getElementById('btn5').addEventListener('click', () => playAudio('b5.MP3'));
    document.getElementById('btn6').addEventListener('click', () => playAudio('b6.MP3'));
    document.getElementById('btn7').addEventListener('click', () => playAudio('b7.MP3'));

    document.getElementById('btn8').addEventListener('click', () => {
        folderIndex = folderIndex % 6 + 1;
        console.log(`Switched to folder: my_music_app/audio1${folderIndex}`);
    });
});
