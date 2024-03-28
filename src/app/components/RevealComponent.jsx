// this component is used at all of pages 

"use client"
import React, { useEffect, useRef, useState } from 'react';

const RevealComponent = ({ children, threshold, duration, delay, x, y }) => {
    x = x || 0;
    y = y || 0;
    delay = delay || 0;
    const ref = useRef(null);
    const [intersecting, setIntersecting] = useState(false);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        if (ref.current && !animationCompleted) {
            const intersectionObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setIntersecting(true);
                    setAnimationCompleted(true); // Animation triggered once
                } else {
                    setIntersecting(false);
                }
            }, {
                threshold
            });

            intersectionObserver.observe(ref.current);

            return () => {
                if (ref.current) {
                    intersectionObserver.unobserve(ref.current);
                }
            };
        }
    }, [animationCompleted]);

    return (
        <div
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
                transform: !intersecting ? `translate(${x}px, ${y}px)` : "translate(0px, 0px)",
                width: "100%",
                height: "100%",
                margin:"0px",
                padding:"0px",
            }}
            className={`transition ${intersecting ? "opacity-100" : "opacity-0"}`}
            ref={ref}
        >
            {children}
        </div>
    );
};

export default RevealComponent;