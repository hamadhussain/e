import Image from 'next/image';
import React from 'react';

const Services = () => {
  return (
    <div className="flex flex-col bg-whte md:flex-row items-center justify-around min-h-screen p-8">
      <div className="md:w-1/2 p-4">
      <Image src="/Services.png" width={600} height={100} alt="About" className="rounded-lg shdow-lg" />
      </div>
      <div className="md:w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Our Services</h1>
        <p className="text-lg">
          We offer a comprehensive range of services to streamline your exam management processes efficiently and accurately. Our services include online exam creation, automated grading, and real-time analytics. 
          We provide robust security features to ensure the integrity of the examination process. 
          With our system, you can schedule exams, manage question banks, and monitor exam takers seamlessly. 
          We also offer customizable templates to match your institution's branding and specific requirements.
          Our support team is available 24/7 to assist with any technical issues or inquiries.
          By using our services, you can save time, reduce administrative burden, and improve the overall examination experience for both educators and students.
          Our platform is designed to handle large-scale exams with ease, providing reliable performance and accurate results.
          Whether you are a small educational institution or a large university, our services can be tailored to meet your needs.
          Trust us to handle all aspects of your exam management, so you can focus on delivering quality education.
        </p>
      </div>
    </div>
  );
};

export default Services;
