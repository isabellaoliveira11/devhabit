import { ReactNode } from "react";

type HabitCardProps = {
  name: string;
  tag: string;
  streak: number;
  progress: number;
  icon?: ReactNode;
};

export function HabitCard({ name, tag, streak, progress, icon }: HabitCardProps) {
  return (
    <div className="bg-cardBg p-5 rounded-2xl border-2 border-neonPurple w-full max-w-md shadow-xl">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          {icon && <div className="text-2xl">{icon}</div>}
          <h2 className="text-neonBlue text-lg font-bold">{name}</h2>
        </div>
        <span className="text-xs text-neonGreen border border-neonGreen px-2 py-1 rounded-full font-mono">
          #{tag}
        </span>
      </div>

      <div className="w-full bg-darkBg h-3 rounded-full overflow-hidden mb-2 border border-neonGreen">
        <div
          className="bg-neonGreen h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="text-sm text-neonPurple font-semibold">
        🔥 Streak: <span className="text-white">{streak} dias</span>
      </div>
    </div>
  );
}
