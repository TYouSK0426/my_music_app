document.addEventListener("DOMContentLoaded", () => {
    let folderIndex = 1;

    function playAudio(file) {
        const audio = new Audio(`audio${folderIndex}/${file}`);
        console.log(`Playing: audio${folderIndex}/${file}`);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }

    document.getElementById('btn1').addEventListener('click', () => playAudio('b1.mp3'));
    document.getElementById('btn2').addEventListener('click', () => playAudio('b2.mp3'));
    document.getElementById('btn3').addEventListener('click', () => playAudio('b3.mp3'));
    document.getElementById('btn4').addEventListener('click', () => playAudio('b4.mp3'));
    document.getElementById('btn5').addEventListener('click', () => playAudio('b5.mp3'));
    document.getElementById('btn6').addEventListener('click', () => playAudio('b6.mp3'));
    document.getElementById('btn7').addEventListener('click', () => playAudio('b7.mp3'));

    document.getElementById('btn8').addEventListener('click', () => {
        folderIndex = folderIndex % 6 + 1;
        console.log(`Switched to folder: audio${folderIndex}`);
    });
});
