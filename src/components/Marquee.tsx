
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Item {
    id: number | string;
    image: string;
    title: string;
    event?: string;
    badge?: string;
    label?: string;
}

interface MarqueeProps {
    items: Item[];
    baseSpeed?: number;
    scrollContainerRef?: React.RefObject<HTMLElement>;
}

const Marquee = ({ items, baseSpeed = 50, scrollContainerRef }: MarqueeProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const content = container.querySelector(".marquee-content") as HTMLElement;
        if (!content) return;

        const ctx = gsap.context(() => {
            // Create the infinite marquee animation
            const animation = gsap.to(content, {
                xPercent: -50,
                duration: baseSpeed,
                ease: "none",
                repeat: -1
            });

            animationRef.current = animation;

            let timeoutId: NodeJS.Timeout;

            // ScrollTrigger for velocity-based effects
            ScrollTrigger.create({
                trigger: document.body,
                scroller: scrollContainerRef?.current || window,
                start: "top top",
                end: "bottom bottom",
                onUpdate: (self) => {
                    const velocity = self.getVelocity();
                    const normalizedVelocity = velocity / 500;
                    const direction = self.direction === 1 ? 1 : -1;
                    const speedBoost = Math.abs(normalizedVelocity);
                    const targetTimeScale = direction * (1 + speedBoost);

                    gsap.to(animation, {
                        timeScale: targetTimeScale,
                        duration: 0.2,
                        overwrite: true
                    });

                    if (timeoutId) clearTimeout(timeoutId);

                    timeoutId = setTimeout(() => {
                        gsap.to(animation, {
                            timeScale: direction,
                            duration: 0.5,
                            ease: "power1.out"
                        });
                    }, 100);
                }
            });
        }, containerRef);

        return () => {
            ctx.revert();
        };
    }, [baseSpeed, scrollContainerRef]);

    const displayItems = [...items, ...items, ...items, ...items];

    return (
        <div
            ref={containerRef}
            className="w-full relative overflow-hidden bg-black py-10"
        >
            <div className="marquee-content flex gap-4 w-max px-4">
                {displayItems.map((item, index) => (
                    <div
                        key={`${item.id}-${index}`}
                        className="relative w-[280px] h-[360px] flex-shrink-0 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 group cursor-pointer"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" /> */}
                        <div className="absolute -bottom-2 left-0 w-full p-6 text-center transform transition-transform duration-500 group-hover:translate-y-0">
                            <h3 className="text-white text-xl font-[300] mb-1">{item.title}</h3>
                            {item.event && <p className="text-gray-300 text-sm">{item.event}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Marquee;
