import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { cloneElement } from 'react';
import '../../styles/scrollAnimations.css';

const ScrollAnimatedSection = ({
    children,
    animationType = 'fade-in-up',
    delay = 0,
    threshold = 0.1,
    className = '',
    ...props
}) => {
    const [ref, isVisible] = useScrollAnimation(threshold);

    const animationClass = `${animationType} ${isVisible ? 'visible' : ''}`;
    const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};

    // If children is a single React element, clone it and add our props
    if (children && children.type) {
        return cloneElement(children, {
            ref,
            className: `${children.props.className || ''} ${animationClass} ${className}`.trim(),
            style: {
                ...children.props.style,
                ...delayStyle,
            },
            ...props
        });
    }

    // Fallback to wrapper div for multiple children or text
    return (
        <div
            ref={ref}
            className={`${animationClass} ${className}`}
            style={delayStyle}
            {...props}
        >
            {children}
        </div>
    );
};

export default ScrollAnimatedSection;