import { motion } from 'framer-motion';

const animations = {
    initial: { opacity: 0, z: -100 },
    animate: { opacity: 1, z: 0 },
    exit: { opacity: 0, z: 100 },
};

const AnimationPage = ({ children }) => {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimationPage;
