import HeaderIcon from "../../assets/icons/header-icon";

export function Header() {
  return (
    <div className="flex flex-row justify-between items-center">
      <span className="font-oleo antialiased text-2xl font-medium">Lucas Moraes</span>
      <HeaderIcon width={14} height={10} />
    </div>
  );
}
