import React from "react";

const ServicesScroll = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "MERN Stack Developers create dynamic and responsive web applications from start to finish, utilizing MongoDB, Express.js, React, and Node.js to ensure seamless integration and performance.",
    },
    {
      title: "Backend Development",
      description:
        "Designing and implementing robust server-side logic, MERN developers handle databases, server management, and API integrations to provide efficient and secure backend solutions.",
    },
    {
      title: "Frontend Development",
      description:
        "Specializing in React, MERN developers build intuitive and user-friendly interfaces, ensuring an engaging user experience and responsive design across all devices.",
    },
    {
      title: "API Development and Integration",
      description:
        "Creating and integrating RESTful APIs, MERN developers facilitate communication between various software components and third-party services, enhancing functionality and interoperability.",
    },
    {
      title: "Database Management",
      description:
        "With expertise in MongoDB, MERN developers design and manage databases that store and retrieve data efficiently, ensuring data consistency and security.",
    },
    {
      title: "Deployment and Maintenance",
      description:
        "Handling the deployment of applications on various platforms, MERN developers ensure smooth operation and provide ongoing maintenance and updates to keep applications running optimally.",
    },
    {
      title: "Performance Optimization",
      description:
        "Identifying and resolving performance bottlenecks, MERN developers optimize web applications for speed and efficiency, ensuring a seamless user experience.",
    },
    {
      title: "Custom Web Solutions",
      description:
        "Tailoring web applications to meet specific client needs, MERN developers provide custom solutions that align with business goals and requirements.",
    },
  ];

  return (
    <>
  <div className="grid gap-5 text-2xl mt-10 md:grid-cols-2 lg:grid-cols-3">
  {services.map((data, index) => {
    return (
      <div key={index} className="dark:text-text_silver">
        <div className="border border-black p-10 flex justify-center flex-col gap-6 h-[440px] rounded-2xl">
          <p className="font-bold text-4xl">{data.title}</p>
          <p className="text-[15px]">{data.description}</p>
        </div>
      </div>
    );
  })}
</div>

    </>
  );
};

export default ServicesScroll;
