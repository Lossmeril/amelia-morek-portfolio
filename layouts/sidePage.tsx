import { motion } from "framer-motion";

const SidePageLayout = ({ children }: any) => {
  return (
    <main className="w-screen overflow-x-hidden h-full min-h-screen text-white">
      {children}
    </main>
  );
};

export default SidePageLayout;
