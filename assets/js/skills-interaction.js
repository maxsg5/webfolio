// Interactive Skills - Mouse Follow Effect
document.addEventListener('DOMContentLoaded', function () {
    const skillBubbles = document.querySelectorAll('.skill-bubble');

    skillBubbles.forEach(bubble => {
        bubble.addEventListener('mouseenter', function (e) {
            // Pause the floating animation on hover
            this.style.animationPlayState = 'paused';
        });

        bubble.addEventListener('mouseleave', function (e) {
            // Resume the floating animation
            this.style.animationPlayState = 'running';
            // Reset any transform from mouse move
            this.style.transform = '';
        });

        bubble.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Calculate rotation based on mouse position
            const rotateX = (y / rect.height) * 20;
            const rotateY = (x / rect.width) * -20;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.15)`;
        });
    });

    // Optional: Add magnetic effect - skills slightly move toward cursor
    const skillsContainers = document.querySelectorAll('.skills-container');

    skillsContainers.forEach(container => {
        container.addEventListener('mousemove', function (e) {
            const bubbles = this.querySelectorAll('.skill-bubble');

            bubbles.forEach(bubble => {
                if (bubble.matches(':hover')) return; // Skip if directly hovering

                const rect = bubble.getBoundingClientRect();
                const bubbleCenterX = rect.left + rect.width / 2;
                const bubbleCenterY = rect.top + rect.height / 2;

                const deltaX = e.clientX - bubbleCenterX;
                const deltaY = e.clientY - bubbleCenterY;
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                // Magnetic effect within 200px radius
                if (distance < 200) {
                    const force = (200 - distance) / 200;
                    const moveX = (deltaX / distance) * force * 8;
                    const moveY = (deltaY / distance) * force * 8;

                    bubble.style.transition = 'transform 0.15s ease-out';
                    const currentTransform = bubble.style.transform || '';
                    bubble.style.transform = `${currentTransform} translate(${moveX}px, ${moveY}px)`;
                }
            });
        });

        container.addEventListener('mouseleave', function () {
            const bubbles = this.querySelectorAll('.skill-bubble');
            bubbles.forEach(bubble => {
                bubble.style.transition = 'transform 0.5s ease-out';
                // Reset to natural floating state
                bubble.style.transform = '';
            });
        });
    });
});
