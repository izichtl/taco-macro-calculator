import { Metadata } from "next";
import React from "react";
import NoSideLayout from '@/components/Layouts/NoSideLayout';
import HomeFoodLogic from "@/components/HomeLogic";

export const metadata: Metadata = {
  title:
    "Quiz Crescer",
  description: "",
};

export default function Home() {
  return (
    <NoSideLayout>
      <HomeFoodLogic />
    </NoSideLayout>
  );
}
