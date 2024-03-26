import { motion, AnimatePresence } from "framer-motion";

import { capitaliseFirstLetter } from "@/utils";

export default function TextAreaInput({
  name,
  placeholder,
  value,
  errorMessage,
  onChange,
  onBlur,
}) {
  return (
    <div className="relative w-full border-b-[0.1rem] border-white">
      <textarea
        name={name}
        id={name}
        rows="3"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className="peer w-full resize-none bg-transparent px-[1.4rem] py-[1.7rem] text-[1.5rem] text-[#99b8bb] placeholder:invisible focus:outline-none"
      ></textarea>
      <label
        className="absolute left-[1.4rem] top-[-0.5rem] text-[1.2rem] text-[#99b8bb] transition-all duration-300 peer-placeholder-shown:translate-y-[2.3rem] peer-placeholder-shown:text-[1.5rem]"
        htmlFor={name}
      >
        {capitaliseFirstLetter(placeholder)}
      </label>
      <AnimatePresence>
        {errorMessage && (
          <motion.p
            className="absolute bottom-0 right-0 text-[1.2rem] text-primary-coral"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
