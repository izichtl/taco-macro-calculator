import { Metadata } from "next"
import CadastroLogicLayer from "@/components/LogicCadastro"

export const metadata: Metadata = {
  title: "Next.js Profile Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Profile page for NextAdmin Dashboard Kit",
};

const DynamicPage = () => {


  return (
    <div>
      <CadastroLogicLayer />
    </div>
  );
};

export default DynamicPage;