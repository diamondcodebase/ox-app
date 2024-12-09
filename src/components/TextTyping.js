import "./TextTyping.css";
import { motion } from "framer-motion";

export default function TextTyping({textInput}) {
  const text = textInput.split(" ");

  return (
    <motion.div
      id="texttyping" 
      className="flex flex-col items-center justify-between"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background:'#6677dd',
          height:'100vh',
          color:'#fff',
        }}
    >
      <div className="text-5xl sm:text-7xl m-40 p-40 font-bold font-sans">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: i / 5,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}