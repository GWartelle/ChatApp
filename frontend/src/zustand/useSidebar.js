import { create } from "zustand";

const useSidebar = create((set) => ({
  isSidebarOpen: true,
  setIsSidebarOpen: (bool) => set(() => ({ isSidebarOpen: bool })),
}));

export default useSidebar;
