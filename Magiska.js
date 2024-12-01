const conveyorTrack = document.querySelector('.conveyor-track');

    // Stop auto-scroll when the user is manually scrolling
    conveyorTrack.addEventListener('mousedown', () => {
        conveyorTrack.style.animationPlayState = 'paused';
    });

    // Allow scrolling manually with drag
    let isDown = false;
    let startX;
    let scrollLeft;

    conveyorTrack.addEventListener('mousedown', (e) => {
        isDown = true;
        conveyorTrack.classList.add('active');
        startX = e.pageX - conveyorTrack.offsetLeft;
        scrollLeft = conveyorTrack.scrollLeft;
    });

    conveyorTrack.addEventListener('mouseleave', () => {
        isDown = false;
        conveyorTrack.classList.remove('active');
    });

    conveyorTrack.addEventListener('mouseup', () => {
        isDown = false;
        conveyorTrack.classList.remove('active');
    });

    conveyorTrack.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - conveyorTrack.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scrolling speed
        conveyorTrack.scrollLeft = scrollLeft - walk;
    });

    // Resume auto-scroll when the user stops interacting
    conveyorTrack.addEventListener('mouseup', () => {
        conveyorTrack.style.animationPlayState = 'running';
    });