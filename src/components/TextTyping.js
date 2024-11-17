import "./TextTyping.css";
import { motion } from "framer-motion";

export default function TextTyping({textInput}) {
  const text = textInput.split(" ");

  return (
    <section id="texttyping">
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
    </section>
  );
}