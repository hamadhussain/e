import Image from 'next/image';
import React from 'react';

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row bg-whte items-center justify-center border-y-2 min-h-screen p-8">
      <div className="md:w-1/2 p-4">
      <Image src="/Features.png" width={600} height={100} alt="About" className="rounded-lg shaow-lg" />
      </div>
      <div className="md:w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Our Features</h1>
        <p className="text-lg">
          Explore our range of features designed to make exam management simple and effective. Our platform supports various types of questions, including multiple-choice, essay, and true/false.
          You can easily create and organize question banks, making it simple to prepare for exams.
          Our automated grading system ensures quick and accurate results, saving valuable time for educators.
          Real-time analytics provide insights into student performance, helping to identify areas for improvement.
          Our user-friendly interface is designed to be intuitive, making it easy for both educators and students to navigate.
          We offer robust security features, including encrypted data storage and secure access controls.
          Customizable notifications keep students and staff informed about important updates and deadlines.
          The platform is mobile-friendly, allowing access from any device, anywhere, anytime.
          Integration with other educational tools and platforms ensures a seamless workflow.
          Experience the efficiency and reliability of our exam management system, designed to support your institution's success.
        </p>
      </div>
    </div>
  );
};

export default Features;
