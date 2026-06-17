import { motion } from "framer-motion";

export default function ParallaxBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Layer 1 - slow */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"
      />

      {/* Layer 2 - medium */}
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-120px] right-[-120px] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl"
      />

      {/* Layer 3 - horizontal drift */}
      <motion.div
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl"
      />

    </div>
  );
}