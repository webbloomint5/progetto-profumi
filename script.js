document.getElementById('perfume').addEventListener('click', function() {
    const hearts = document.getElementById('hearts');
    hearts.classList.toggle('show');
    setTimeout(() => {
        hearts.classList.remove('show');
    }, 2000);
});
const spraySound = document.getElementById('spray-sound');
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', () => {
        spraySound.play();
    });
});
