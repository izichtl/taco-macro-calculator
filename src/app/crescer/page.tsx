import { Metadata } from "next";
import CrescerLogicLayer from "@/components/LogicCrescer";
import NoSideLayout from '@/components/Layouts/NoSideLayout';

export const metadata: Metadata = {
  title: "Programa Crescer - Sicred",
  description: "Página de acesso ao programa crescer",
};

const DynamicPage = () => {
  return (
    <NoSideLayout>
      <CrescerLogicLayer />
    </NoSideLayout>
  )
}

export default DynamicPage