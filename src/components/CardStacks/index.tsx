interface CardStacksProps {
  icon: React.ElementType;
  name: string;
  color: string;
}

export function CardStacks({ icon: Icon, name, color }: CardStacksProps) {
  return (
    <div
      className="flex flex-col items-center bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group relative border-2 border-transparent hover:border-[var(--hover-color)] hover:cursor-pointer"
      style={{ "--hover-color": color } as React.CSSProperties}
    >
      <div className="text-4xl text-white mb-3 group-hover:text-[var(--hover-color)] transition-colors duration-300">
        <Icon />
      </div>
      <p className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
        {name}
      </p>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
