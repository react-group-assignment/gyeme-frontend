import React from 'react';
import { useState, useEffect } from 'react';

//This is a hook you can use to conditionally render components based on viewport size

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimentions] = useState(getWindowDimensions())

    useEffect(() => {
        function handleResize() {
            setWindowDimentions(getWindowDimensions())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []);

  return windowDimensions;
}
