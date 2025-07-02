import useFakeProgress from "@/hooks/useFakeProgress";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";

const LoaderWrapper = ({ children }) => {
  const { progress, done } = useFakeProgress();

  return (
    <>
      <AnimatePresence>
        {!done && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Loader progress={progress} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: done ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
};

LoaderWrapper.propTypes = {
  children: PropTypes.node,
};

export default LoaderWrapper;
