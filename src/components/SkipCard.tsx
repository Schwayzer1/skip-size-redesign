"use client";

import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Skip } from "@/types/skip";
import clsx from "clsx";
import { CircleAlert, FileWarning } from "lucide-react";

interface Props {
  skip: Skip;
  selected: boolean;
  onSelect: (id: number) => void;
}

export default function SkipCard({ skip, selected, onSelect }: Props) {
  return (
    <Card
      onClick={() => onSelect(skip.id)}
      className={clsx(
        "relative rounded-3xl bg-white/60 backdrop-blur-md transition-all duration-200 cursor-pointer border-2 shadow-md hover:shadow-xl",
        selected
          ? "border-green-500 scale-[1.03]"
          : "border-transparent hover:ring-2 hover:ring-green-200"
      )}
    >
      <div className="relative p-4 rounded-t-3xl">
        {!skip.allowed_on_road && (
          <span className="absolute flex justify-center items-center gap-x-1 bottom-3 left-3 bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
            <CircleAlert className="w-3 h-3" />
            Not Allowed On Road
          </span>
        )}
        <img
          src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
          alt={`${skip.size} Yard Skip`}
          className="rounded-2xl w-full h-48 object-contain"
        />
      </div>
      <div className="px-6 pb-6">
        <h3 className="text-xl font-semibold text-slate-800">
          {skip.size} Yard Skip
        </h3>
        <p className="text-sm text-slate-500">
          {skip.hire_period_days} day hire period
        </p>
        <p className="text-2xl font-bold text-green-600 mt-3">
          £{skip.price_before_vat}
        </p>
        <Button
          variant={selected ? "default" : "outline"}
          className={clsx(
            "w-full mt-4 rounded-full transition-colors duration-200",
            selected ? "bg-green-600 hover:bg-green-700" : ""
          )}
        >
          {selected ? "Selected" : "Select"}
        </Button>
      </div>
    </Card>
  );
}
