document.addEventListener("DOMContentLoaded", () => {
    let folderIndex = 1;

    function playAudio(file) {
        const audio = new Audio(`my_music_app/audio${folderIndex}/${file}`);
        console.log(`Playing: my_music_app/audio1${folderIndex}/${file}`);
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
        console.log(`Switched to folder: my_music_app/audio1${folderIndex}`);
    });
});
// scripts.js
let currentFolder = 1;

const buttons = document.querySelectorAll('.circle, .rectangle');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;
        if (buttonId === 'button8') {
            currentFolder = currentFolder === 6 ? 1 : currentFolder + 1;
            console.log(`Current folder: audio${currentFolder}`);
        } else {
            const audioIndex = buttonId.replace('button', '');
            const audioPath = `assets/audio${currentFolder}/b${audioIndex}.mp3`;
            console.log(`Attempting to play: ${audioPath}`);
            const audio = new Audio(audioPath);
            audio.play()
                .then(() => {
                    console.log(`Playing: ${audioPath}`);
                })
                .catch(error => {
                    console.error(`Error playing audio: ${audioPath}`, error);
                });

            button.classList.add('pressed');
            setTimeout(() => {
                button.classList.remove('pressed');
            }, 200);
        }
    });
});
