document.addEventListener('DOMContentLoaded', init);

function init() {
    const bgm = document.getElementById('bgm');
    window.addEventListener("dragstart", (e)=>e.preventDefault());

    

}

document.body.addEventListener('click', (e) => handleBodyClick(e));

function handleBodyClick(event) {
    
    addIcon(event);
}

function addIcon(event) {
    const iconSize = Math.floor(Math.random() * 51) + 100; // Random size between 100 and 150 inclusive
    const icon = document.createElement('img');
    icon.classList.add('icon');
    icon.style.left = `${event.clientX}px`;
    icon.style.top = `${event.clientY}px`;
    icon.style.width = `${iconSize}px`;
    icon.style.height = `${iconSize}px`;
    icon.src = `./suki.jpg`;
    document.body.appendChild(icon);
}
