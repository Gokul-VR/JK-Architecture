import React, { useState, useEffect, useRef } from 'react';

interface CircleIndicatorProps {
    filledIndices?: number[];
    circleSize?: number;
    gap?: number;
    filledColor?: string;
    emptyColor?: string;
    containerClassName?: string;
    fillFromEnd?: boolean; // New prop to control filling from end
}

const CircleIndicator: React.FC<CircleIndicatorProps> = ({
    filledIndices = [],
    circleSize = 32,
    gap = 8,
    filledColor = 'bg-orange-500',
    emptyColor = 'border-gray-600',
    containerClassName = '',
    fillFromEnd = true // Default to true for responsive behavior
}) => {
    const [totalCircles, setTotalCircles] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const calculateCircles = () => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const circleWithGap = circleSize + gap;
            const calculatedTotal = Math.floor(containerWidth / circleWithGap);
            setTotalCircles(calculatedTotal);
        }
    };

    useEffect(() => {
        calculateCircles();

        const handleResize = () => {
            calculateCircles();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [circleSize, gap]);

    // Adjust filled indices based on fillFromEnd prop
    const getAdjustedFilledIndices = () => {
        if (!fillFromEnd) {
            // Use absolute indices
            return filledIndices.filter(index => index < totalCircles);
        }

        // Calculate from the end
        const maxIndex = Math.max(...filledIndices);
        const offset = Math.max(0, maxIndex - totalCircles + 1);

        return filledIndices
            .map(index => index - offset)
            .filter(index => index >= 0 && index < totalCircles);
    };

    const adjustedFilledIndices = getAdjustedFilledIndices();

    return (
        <div
            ref={containerRef}
            className={`flex items-center overflow-hidden ${containerClassName}`}
            style={{ gap: `${gap}px` }}
        >
            {Array.from({ length: totalCircles }, (_, index) => {
                const isFilled = adjustedFilledIndices.includes(index);

                return (
                    <div
                        key={index}
                        className={`
              rounded-full
              transition-all
              duration-300
              flex-shrink-0
              ${isFilled
                                ? `${filledColor}`
                                : `border-2 ${emptyColor} bg-transparent`
                            }
            `}
                        style={{
                            width: `${circleSize}px`,
                            height: `${circleSize}px`
                        }}
                    />
                );
            })}
        </div>
    );
};
export default CircleIndicator;