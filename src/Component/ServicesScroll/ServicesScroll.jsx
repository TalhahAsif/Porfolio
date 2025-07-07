import React, { useEffect, useRef } from "react";

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

const ServicesScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      if (!scrollContainer) return;
      scrollAmount += 1;
      scrollContainer.scrollLeft = scrollAmount;

      // If reached end, reset to start (seamless loop with clones)
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }

      requestAnimationFrame(scrollStep);
    };

    requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(scrollStep);
  }, []);

  const loopedServices = [...services, ...services];

  return (
    <>
      <div
        ref={scrollRef}
        className="flex w-full overflow-x-scroll scrollbar-hide whitespace-nowrap py-10"
      >
        {loopedServices.map((data, index) => (
          <div
            key={index}
            className="flex-none mx-5 dark:text-slate-50 backdrop-blur-sm bg-black/10 dark:bg-white/30 rounded-2xl shadow-2xl w-fit"
          >
            <div className="p-4 flex flex-col justify-center gap-4 h-auto rounded-2xl">
              <p className="font-bold text-lg dark:text-yellow-400">
                {data.title}
              </p>
              {/* <p className="text-base dark:text-gray-300 text-xs">
                {data.description}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesScroll;
