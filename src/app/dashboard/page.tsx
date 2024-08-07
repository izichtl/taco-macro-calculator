
import { Metadata } from "next";
import ECommerce from "@/components/Dashboard/E-commerce";
import NoSideLayout from '@/components/Layouts/NoSideLayout';
import QuizResponses from "@/components/SicredDashboard";


export const metadata: Metadata = {
  title: "Next.js Profile Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Profile page for NextAdmin Dashboard Kit",
};

const Profile = () => {

  return (
    <>
    <NoSideLayout>
      <QuizResponses />
    </NoSideLayout>
    </>
  );
};

export default Profile;
