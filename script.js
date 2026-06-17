document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector(".envelope");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const butterflyContainer = document.getElementById("butterfly-container");

    // Helper to generate an emoji butterfly particle
    const createButterflyParticle = () => {
        const butterfly = document.createElement("div");
        butterfly.className = "butterfly";
        butterfly.innerText = "🦋"; // Added the requested emoji element

        // Randomize floating paths upwards and outwards
        const randomX = (Math.random() - 0.5) * 300; // Left/Right spread
        const randomY = -250 - Math.random() * 200;  // Upward height distance
        const randomRotate = (Math.random() - 0.5) * 90; // Rotation spin

        butterfly.style.setProperty('--x-axis', `${randomX}px`);
        butterfly.style.setProperty('--y-axis', `${randomY}px`);
        butterfly.style.setProperty('--rotate', `${randomRotate}deg`);

        // Give each butterfly a unique slight animation speed variation
        const customDuration = 2 + Math.random() * 1; 
        butterfly.style.animationDuration = `${customDuration}s`;

        butterflyContainer.appendChild(butterfly);

        // Clear the element out of the memory after animation completes
        setTimeout(() => {
            butterfly.remove();
        }, customDuration * 1000);
    };

    // Action function to open the letter
    const openEnvelope = () => {
        if (!envelope.classList.contains("open")) {
            envelope.classList.add("open");
            
            // Release a dynamic burst of butterflies for a few seconds only
            let burstCount = 0;
            const burstInterval = setInterval(() => {
                createButterflyParticle();
                burstCount++;
                
                // Stop spawning after creating a flock (lasts around 1.5 - 2 seconds)
                if (burstCount >= 20) {
                    clearInterval(burstInterval);
                }
            }, 80); 
        }
    };

    // Action function to close envelope and wipe active particles
    const closeEnvelope = () => {
        envelope.classList.remove("open");
        butterflyContainer.innerHTML = ""; 
    };

    // Bind event controllers
    openBtn.addEventListener("click", openEnvelope);
    closeBtn.addEventListener("click", closeEnvelope);
    envelope.addEventListener("click", openEnvelope);
});