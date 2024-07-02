import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import DeleteButton from "./DeleteButton";
import useSidebar from "../../zustand/useSidebar";

const Sidebar = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={`border-r border-slate-500 p-4 flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />

      <div className="mt-auto flex gap-4">
        <LogoutButton />
        <DeleteButton />
      </div>
    </div>
  );
};

export default Sidebar;
