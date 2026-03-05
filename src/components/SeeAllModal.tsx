import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useLenis } from "@/components/LenisProvider";

const SeeAllModal = ({ category, onClose }: { category: any, onClose: () => void }) => {
    const navigate = useNavigate();
    const modalRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const lenis = useLenis();

    useEffect(() => {
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
    }, [lenis]);

    const handleClose = () => {
        if (modalRef.current && contentRef.current) {
            gsap.to(contentRef.current, { scale: 0.95, opacity: 0, duration: 0.2 });
            gsap.to(modalRef.current, { opacity: 0, duration: 0.2, delay: 0.1, onComplete: onClose });
        } else {
            onClose();
        }
    };

    if (!category) return null;

    return (
        <div ref={modalRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10" onClick={handleClose}>
            <div
                ref={contentRef}
                className="w-full h-full max-w-[80vw] max-h-[80vh] bg-black border border-orange-primary p-6 md:p-8 flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className="flex-1 overflow-y-auto pr-2 md:pr-4 min-h-0 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-[#1A1A1A] [&::-webkit-scrollbar-thumb]:bg-orange-primary [&::-webkit-scrollbar-thumb]:rounded-full"
                    data-lenis-prevent
                >
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                        {category.projects.map((project: any) => (
                            <div
                                key={project.id}
                                className="flex flex-col gap-3 cursor-pointer group"
                                onClick={() => {
                                    handleClose();
                                    setTimeout(() => navigate(`/project/${project.id}`), 300);
                                }}
                            >
                                <div className="w-full aspect-[1/1.5] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="">
                                    <h3 className="text-white text-[1.2rem] md:text-[1.5rem] font-[500] leading-tight">{project.name}</h3>
                                    <p className="text-gray-300 text-[0.9rem] md:text-[1.1rem] font-poppins font-[300] mt-1">{project.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeeAllModal;
