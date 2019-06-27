function parallax() {
    const paralaxContainer = document.querySelector('.parallax-header-layer1');
    let layers = paralaxContainer.children;
    const container = document.querySelector('.section-header');
    const moveLayers = e => {
        
        const initialX = (window.innerWidth / 2) - e.pageX;
        const initialY = (window.innerHeight / 2) - e.pageY;
        Array.from(layers).forEach(layers => {
            
            const divider = layers.dataset.speed; 
            const positionX = initialX * divider;
            const positionY = initialY * divider;
            const bottomPosition = window.innerHeight / 2 * divider;
            let image = layers.firstElementChild;

            layers.style.transform = `translate(${positionX}px, ${positionY}px)`;
            // image.style.bottom = `-${bottomPosition}px`;
    
        });


    };

    container.addEventListener('mousemove', moveLayers);
    
}
module.exports = parallax;