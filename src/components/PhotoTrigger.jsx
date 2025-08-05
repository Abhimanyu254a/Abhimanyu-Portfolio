import { motion } from 'framer-motion';

const PhotoTrigger = () => {
  return (
    <motion.div
      className="photo-div"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <img src="/your-photo.jpg" alt="Me" className="middle" />
    </motion.div>
  );
};

export default PhotoTrigger;
