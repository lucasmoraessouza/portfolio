function FrontendIcon(props: any) {
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
      className="lucide lucide-proportions"
      {...props}
    >
      <rect width={20} height={16} x={2} y={4} rx={2} />
      <path d="M12 9v11M2 9h13a2 2 0 012 2v9" />
    </svg>
  );
}

export default FrontendIcon;
