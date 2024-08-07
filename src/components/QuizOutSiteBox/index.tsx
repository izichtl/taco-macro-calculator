"use client";
import React from "react";
import NotAssociatedQuiz from "../NotAssociatedQuiz";
import AssociatedQuiz from "../AssociatedQuiz";


const QuizContainer = ({ userType }: any) => {
  return (
    <>
      { userType === 'associated' && (
        <AssociatedQuiz />
      )}
      { userType === 'notAssociated' && (
      <NotAssociatedQuiz />
        )}
    </>
  );
};

export default QuizContainer;

