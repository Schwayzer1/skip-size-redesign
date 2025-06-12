"use client";

import { Skip } from "@/types/skip";
import React, { useState } from "react";
import SkipCard from "./SkipCard";
import SelectedSkipBar from "./SelectedSkipBar";

interface Props {
  skips: Skip[];
}

export default function SkipList({ skips }: Props) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedSkip = skips.find((s) => s.id === selectedId);
  return (
    <div className="w-full h-full bg-gradient-to-tr from-[#93adcc] to-[#f8fafc]">
      <div className="flex flex-col justify-center items-center gap-4 pt-14 font-[family-name:var(--font-geist-sans)] ">
        <h1 className="text-3xl font-bold text-slate-900">
          Choose Your Skip Size
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Select the skip size that best suits your needs
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 w-full min-h-screen p-8 pb-20 sm:py-20 lg:px-40 font-[family-name:var(--font-geist-sans)] ">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            selected={selectedId === skip.id}
            onSelect={(id) => setSelectedId(selectedId === id ? null : id)}
          />
        ))}
      </div>
      {selectedSkip && (
        <SelectedSkipBar
          selectedSkip={selectedSkip}
          onContinue={() => console.log("Continue clicked:", selectedSkip)}
        />
      )}
    </div>
  );
}
