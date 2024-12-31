
function MobileIcon(props: any) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1A1A1A"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-tablet-smartphone"
      {...props}
    >
      <rect width={10} height={14} x={3} y={8} rx={2} />
      <path d="M5 4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2h-2.4M8 18h.01" />
    </svg>
  );
}

export default MobileIcon;
