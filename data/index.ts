export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "Delivering scalable fullstack solutions for businesses",
        description: "I prioritize building rapid MVPs and scaling them efficiently based on real business needs.",
        className: "lg:col-span-3 md:col-span-6 md:row-span-5 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end min-w-96",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "Comfortable working across the entire stack",
        description: "Expertise in React, Next.js, TypeScript, Node.js, and robust backend architectures.",
        className: "lg:col-span-2 md:col-span-3 md:row-span-3",
        imgClassName: "",
        titleClassName: "justify-start mb-15",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "Where Development Meets Marketing",
        description: "Combining technical skills with marketing strategies to build products that convert. I focus on clean, minimal, Apple-style user experiences.",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Passionate about AI integration in web applications",
        description: "Building intelligent, practical AI features to give modern business products a competitive edge.",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },
    {
        id: 5,
        title: "Building robust architectures and scalable systems",
        description: "Focused on performance optimization, system design fundamentals, and maintainable code structure.",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Ready to build an impactful business solution together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];
export const projects = [
    {
        id: 1,
        title: "Horizon Banking Management System",
        des: "A full-scale online banking platform designed as a real-world financial SaaS application, not a toy budget tracker. The system enables users to securely connect multiple bank accounts, view real-time balances and transactions, and transfer money between users on the platform. ",
        img: "/horizon-app.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/fm.svg"],
        link: "https://nextjs-banking-management-system.vercel.app",
    },
    {
        id: 2,
        title: "Berimbolo Security Company",
        des: "Berimbolo Security Solutions delivers personalized risk assessments and tailored protection strategies for residential and commercial clients.",
        img: "/berimbolo-security.png",
        iconLists: ["/re.svg", "/tail.svg", "/git.svg", "/c.svg"],
        link: "https://berimbolo-backend.web.app",
    },
    {
        id: 3,
        title: "IT Solutions Support Platform",
        des: "A full-stack web application for IT solutions and support services.",
        img: "/dern-support.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
        link: "https://github.com/AliAhmed2007/Dern-Support-Fullstack-Application",
    },
    {
        id: 4,
        title: "Yoom - Video Conferencing App",
        des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        img: "/p2.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "https://github.com/adrianhajdin/zoom-clone",
    },
];

export const testimonials = [
    {
        quote:
            "Collaborating with Ali was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
        profile: "/profile.svg"
    },
    {
        quote:
            "I had a chance to work alongside him on a Laravel project, and I must say that he is a great frontend developer. He is proficient at creating clean and user-friendly user interfaces using various technologies like Next.js, React, TypeScript, Tailwind CSS, etc. He is also familiar with backend workflows and APIs, which is a great advantage when working as a full-stack developer. I think he is a great person to work alongside.",
        name: "Kareem Ashraf Radwan",
        title: "Full Stack Web Developer",
        profile: "/kareem.jpg",
        href: "https://www.linkedin.com/in/ali-ahmed-ali1/details/recommendations/",
        icon: "link.svg"
    }
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Freelance Web Application Developer",
        desc: "Delivered end-to-end web solutions including system architecture design, API integration, authentication workflows, and deployment. Focused on maintainable code structure and scalable full-stack architecture.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Full-Stack Developer – Next.js & TypeScript",
        desc: "Designed and developed scalable full-stack applications using Next.js with TypeScript. Built server-side and client-side features leveraging App Router, API routes, and server actions. Implemented authentication flows, role-based access control, and secure RESTful APIs with JWT-based session management.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "ALX Fullstack Web Dev Intern",
        desc: "Developed and maintained user-facing features using Reactjs/Nextjs modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: 'https://github.com/AliAhmed2007'
    },
    {
        id: 2,
        img: "/twit.png",
        link: 'https://x.com/AliAhmedAli_188'
    },
    {
        id: 3,
        img: "/link.svg",
        link: 'https://www.linkedin.com/in/ali-ahmed-ali1/'
    },
];