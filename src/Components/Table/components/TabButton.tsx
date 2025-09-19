import { TabButtonProps } from "../types";

export function TabButton({ tab, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={() => onClick(tab)}
      className={`flex-1 text-center py-2 md:py-1 text-sm md:text-base font-medium transition cursor-pointer
          ${
            isActive
              ? "bg-red-500 text-white"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
    >
      {tab} klasa
    </button>
  );
}
