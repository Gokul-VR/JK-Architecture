import { ReactNode, useEffect, useRef, createContext, useContext } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create context for Lenis instance
const LenisContext = createContext<Lenis | null>(null);

// Custom hook to access Lenis instance
export const useLenis = () => {
    const context = useContext(LenisContext);
    return context;
};

interface LenisProviderProps {
    children: ReactNode;
}

export const LenisProvider = ({ children }: LenisProviderProps) => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis with optimal settings
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        // Integrate Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // Cleanup on unmount
        return () => {
            lenis.destroy();
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
        };
    }, []);

    return (
        <LenisContext.Provider value={lenisRef.current}>
            {children}
        </LenisContext.Provider>
    );
};
