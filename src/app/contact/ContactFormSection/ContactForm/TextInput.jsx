import { motion, AnimatePresence } from "framer-motion";
import { capitaliseFirstLetter } from "@/utils";

export default function TextInput({
  name,
  placeholder,
  value,
  errorMessage,
  onChange,
  onBlur,
  email,
}) {
  return (
    <div className="relative w-full border-b-[0.1rem] border-white">
      <input
        type={email ? "email" : "text"}
        id={name}
        className="peer w-full bg-transparent px-[1.4rem] py-[1.7rem] text-[1.5rem] text-[#99b8bb] placeholder:invisible focus:outline-none"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={capitaliseFirstLetter(placeholder)}
      />
      <label
        htmlFor={name}
        className="absolute left-[1.4rem] top-[-0.5rem] text-[1.2rem] font-semibold text-[#99b8bb] transition-all duration-300 peer-placeholder-shown:translate-y-[2.1rem] peer-placeholder-shown:text-[1.5rem]"
      >
        {capitaliseFirstLetter(placeholder)}
      </label>
      <AnimatePresence>
        {errorMessage && (
          <motion.p
            className="text-[1.2rem absolute bottom-0 right-0 text-primary-coral"
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
