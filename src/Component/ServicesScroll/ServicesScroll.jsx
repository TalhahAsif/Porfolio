import React from "react";

const ServicesScroll = () => {
  const services = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      description:
        "MERN Stack Developers create dynamic and responsive web applications from start to finish, utilizing MongoDB, Express.js, React, and Node.js to ensure seamless integration and performance.",
    },
    {
      id: 2,
      title: "Backend Development",
      description:
        "Designing and implementing robust server-side logic, MERN developers handle databases, server management, and API integrations to provide efficient and secure backend solutions.",
    },
    {
      id: 3,
      title: "Frontend Development",
      description:
        "Specializing in React, MERN developers build intuitive and user-friendly interfaces, ensuring an engaging user experience and responsive design across all devices.",
    },
    {
      id: 4,
      title: "API Development and Integration",
      description:
        "Creating and integrating RESTful APIs, MERN developers facilitate communication between various software components and third-party services, enhancing functionality and interoperability.",
    },
    {
      id: 5,
      title: "Database Management",
      description:
        "With expertise in MongoDB, MERN developers design and manage databases that store and retrieve data efficiently, ensuring data consistency and security.",
    },
    {
      id: 6,
      title: "Deployment and Maintenance",
      description:
        "Handling the deployment of applications on various platforms, MERN developers ensure smooth operation and provide ongoing maintenance and updates to keep applications running optimally.",
    },
    {
      id: 7,
      title: "Performance Optimization",
      description:
        "Identifying and resolving performance bottlenecks, MERN developers optimize web applications for speed and efficiency, ensuring a seamless user experience.",
    },
    {
      id: 8,
      title: "Custom Web Solutions",
      description:
        "Tailoring web applications to meet specific client needs, MERN developers provide custom solutions that align with business goals and requirements.",
    },
  ];

  return (
    <>
      <div className="grid gap-10 text-xl mt-10 md:grid-cols-1 lg:grid-cols-2">
        {services.map((data, index) => {
          return (
            <div
              key={data.id}
              className="dark:text-slate-50 backdrop-blur-sm bg-black/10 dark:bg-white/30 rounded-2xl shadow-2xl"
            >
              <div className="p-10 flex justify-center flex-col gap-6 h-[350px] rounded-2xl">
                <p className="font-bold text-2xl dark:text-yellow-400">
                  {data.title}
                </p>
                <p className="text-sm">{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServicesScroll;
