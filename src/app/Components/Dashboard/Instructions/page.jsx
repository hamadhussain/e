import Link from "next/link";
import React from "react";

const ExamInstructions = () => {
  return (
    <>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold mb-4">Exam Instructions</h1>
        <p className="text-lg mb-2">Total Number of Questions: 50</p>
        <p className="text-lg mb-2">Marks per Question: 2.5</p>
        <p className="text-lg mb-2">Total Marks: 125</p>
        <p className="text-lg mb-2">Duration: 2 hours</p>
        <p className="text-lg mb-2">
          Exam Type: Multiple Choice Questions (MCQs)
        </p>
        <p className="text-lg mb-2">
          Negative Marking: 0 mark for each incorrect answer
        </p>
        <p className="text-lg mb-2">Passing Marks: 50</p>
        <p className="text-lg mb-2">Exam Date: Saturday, June 1, 2024</p>
        <p className="text-lg mb-2">Exam Time: 10:00 AM - 12:00 PM</p>
        <p className="text-lg mb-2">Instructions:</p>
        <ul className="list-disc pl-4 mb-4">
          <li>Read each question carefully before answering.</li>
          <li>Choose the correct answer from the options provided.</li>
          <li>Do not leave any question unanswered.</li>
          <li>
            If you need assistance, raise your hand and a proctor will assist
            you.
          </li>
        </ul>

        <p className="text-lg mb-2">
          Please read the following instructions carefully before starting the
          exam:
        </p>
        <ol className="list-decimal pl-4 mb-4">
          <li>Do not open the exam until you are instructed to do so.</li>
          <li>Read each question carefully before answering.</li>
          <li>Choose the correct answer from the options provided.</li>
          <li>Do not leave any question unanswered.</li>
          <li>
            If you need assistance, raise your hand and a proctor will assist
            you.
          </li>
        </ol>
        <p className="text-lg mb-2">
          By starting the exam, you agree to abide by these instructions and any
          rules set forth by the exam proctor.
        </p>
        <br />
        <Link href="/Components/Dashboard/ExamQuiz">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            I Understand, Start Exam
          </button>
        </Link>
      </div>
    </>
  );
};

export default ExamInstructions;
