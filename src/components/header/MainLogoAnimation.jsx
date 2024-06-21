import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

function AnimatedText() {
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            anime.timeline({ loop: false })
                .add({
                    targets: textRef.current,
                    scale: [0.5, 1],  // Scale from 0.5 to 1
                    opacity: [0, 1],  // Fade in from 0 to 1
                    easing: "easeOutExpo",
                    duration: 1500
                });
        }
    }, []);

    return (
        <h1 ref={textRef} style={{ opacity: 0 }}>Chiranjeevi G Naidu</h1>
    );
}

export default AnimatedText;