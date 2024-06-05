import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen border-t-2 p-8">
      <div className="md:w-1/2 order-2 md:order-1 p-4">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          We are dedicated to providing top-notch solutions for managing exams with ease and precision. Our team comprises experienced professionals in the field of educational technology.
          We understand the challenges that educational institutions face in administering exams and are committed to addressing these challenges with innovative solutions.
          Our mission is to enhance the examination experience through technology, making it more efficient, secure, and accessible.
          We believe in continuous improvement and are always seeking feedback to better serve our users.
          Our platform is built on cutting-edge technology, ensuring reliability and scalability.
          We prioritize data security and privacy, adhering to the highest standards in the industry.
          Our vision is to become the leading provider of exam management solutions worldwide, helping institutions of all sizes to succeed.
          We are passionate about education and dedicated to making a positive impact in the lives of educators and students.
          Thank you for considering our exam management system. We look forward to partnering with you to achieve your educational goals.
        </p>
      </div>
      <div className="md:w1/2 order-1 md:order-2 p-4">
        <Image src="/About.png" width={600} height={100} alt="About" className="rounded-lg shadw-lg" />
      </div>
    </div>
  );
};

export default About;
