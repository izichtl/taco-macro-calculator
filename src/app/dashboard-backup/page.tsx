
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ECommerce from "@/components/Dashboard/E-commerce";


export const metadata: Metadata = {
  title: "Next.js Profile Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Profile page for NextAdmin Dashboard Kit",
};

const Profile = () => {

  return (
    <>
    <DefaultLayout>
      <ECommerce />
    </DefaultLayout>
    </>
  );
};

export default Profile;
