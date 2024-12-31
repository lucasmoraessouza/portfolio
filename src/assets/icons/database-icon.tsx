function DatabaseICon(props: any) {
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
      className="lucide lucide-database"
      {...props}
    >
      <ellipse cx={12} cy={5} rx={9} ry={3} />
      <path d="M3 5v14a9 3 0 0018 0V5M3 12a9 3 0 0018 0" />
    </svg>
  );
}

export default DatabaseICon;
