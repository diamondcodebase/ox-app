import "./style.css";
import { motion } from "framer-motion";

export default function TextTyping({textInput}) {
  const text = textInput.split(" ");

  return (
    <div className="TextTyping">
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
}