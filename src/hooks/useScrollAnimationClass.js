import { useEffect, useRef, useState } from 'react';

export const useScrollAnimationClass = (animationType = 'fade-in-up', threshold = 0.1, delay = 0, rootMargin = '0px') => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                    observer.disconnect();
                }
            },
            {
                threshold,
                rootMargin
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, delay, rootMargin]);

    const className = `${animationType} ${isVisible ? 'visible' : ''}`;

    return [ref, className];
};

export default useScrollAnimationClass;