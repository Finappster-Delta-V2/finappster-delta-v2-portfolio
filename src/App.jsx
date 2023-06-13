import { motion } from "framer-motion";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      This is working!
    </motion.div>
  );
};

export default App;
