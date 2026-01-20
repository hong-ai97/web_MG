import React from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    width?: "fit-content" | "100%";
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    delay = 0,
    className = "",
    width = "100%"
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.8, // Slightly snappier to feel "immediate"
                ease: [0.22, 1, 0.36, 1],
                delay: delay
            }}
            className={className}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
