"use client";

import { Skip } from "@/types/skip";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface Props {
  selectedSkip: Skip;
  onContinue: () => void;
}

export default function SelectedSkipBar({ selectedSkip, onContinue }: Props) {
  const totalPrice = selectedSkip.price_before_vat;

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="fixed bottom-6 left-4 right-4 sm:left-10 sm:right-10 bg-white/90 backdrop-blur-md shadow-2xl border border-gray-200 rounded-xl px-6 py-4 flex flex-col sm:flex-row justify-between items-center z-50"
    >
      <div className="text-center sm:text-left">
        <p className="text-sm text-gray-400">Selected:</p>
        <p className="text-lg font-semibold text-slate-800">
          {selectedSkip.size} Yard Skip – £{totalPrice}
        </p>
      </div>
      <Button
        className="mt-3 sm:mt-0 w-full sm:w-auto bg-green-600 hover:bg-green-700 rounded-full"
        onClick={onContinue}
      >
        Continue →
      </Button>
    </motion.div>
  );
}
