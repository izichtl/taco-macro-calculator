import { Metadata } from "next";
import ResultLogicLayer from "@/components/LogicResult";
import NoSideLayout from '@/components/Layouts/NoSideLayout';

export const metadata: Metadata = {
  title: "Quiz Crescer",
  description: "",
};

const DynamicPage = () => {


  return (
    <NoSideLayout>
      <ResultLogicLayer />
    </NoSideLayout>
  );
};

export default DynamicPage;