import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useLenis } from "@/components/LenisProvider";

export interface ItemData {
    image: string;
    title: string;
    date: string;
    description?: string;
    link?: string;
}

interface ItemModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: ItemData | null;
}

const ItemModal = ({ isOpen, onClose, item }: ItemModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const lenis = useLenis();

    useEffect(() => {
        if (!isOpen) return;

        // Stop Lenis scroll
        if (lenis) lenis.stop();

        // GSAP animation on enter
        if (modalRef.current && contentRef.current) {
            gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
            gsap.fromTo(contentRef.current, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, delay: 0.1 });
        }

        // Disable body scroll
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
            if (lenis) lenis.start();
        };
    }, [isOpen, lenis]);

    const handleClose = () => {
        if (modalRef.current && contentRef.current) {
            gsap.to(contentRef.current, { scale: 0.95, opacity: 0, duration: 0.2 });
            gsap.to(modalRef.current, { opacity: 0, duration: 0.2, delay: 0.1, onComplete: onClose });
        } else {
            onClose();
        }
    };

    if (!isOpen || !item) return null;

    return (
        <div ref={modalRef} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10" onClick={handleClose}>
            <div
                ref={contentRef}
                className="w-full max-w-[80%] h-[80vh] md:h-[600px] bg-black border border-orange-primary flex flex-col md:flex-row shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Left Side: Image */}
                <div className="w-full md:w-[45%] h-[40%] md:h-full p-6 md:p-10 flex items-center justify-center">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full aspect-[1/1.5] object-cover"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-[55%] h-[60%] md:h-full py-6 pr-6 pl-6 md:pl-0 flex flex-col relative">
                    {/* Vertical separating line on desktop */}
                    <div className="hidden md:block absolute left-0 top-10 bottom-10 w-[1px] bg-gray-800"></div>

                    {/* Scrollable Content */}
                    <div
                        className="flex-1 overflow-y-auto mt-3 pr-4 mb-4 min-h-0 md:pl-10 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-[#1A1A1A] [&::-webkit-scrollbar-thumb]:bg-orange-primary [&::-webkit-scrollbar-thumb]:rounded-full"
                        data-lenis-prevent
                    >
                        <h2 className="text-3xl md:text-InterHeader font-bold mb-2">{item.title}</h2>
                        <p className="text-PoppinsDescription mb-8 font-light">Date : {item.date}</p>

                        <div className="text-base md:text-PoppinsDescription leading-relaxed md:leading-[1.8] font-light text-justify">
                            {item.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat "}
                        </div>
                    </div>

                    {/* Fixed Bottom Link */}
                    <div className="pt-2 md:pl-10">
                        {item.link ? (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 text-PoppinsDescription font-light hover:text-white transition-colors"
                            >
                                Read more <span className="text-orange-primary">HERE</span>
                            </a>
                        ) : (
                            <span className="text-gray-300 text-PoppinsDescription font-light">
                                Read more <span className="text-orange-primary cursor-pointer hover:underline">HERE</span>
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemModal;
