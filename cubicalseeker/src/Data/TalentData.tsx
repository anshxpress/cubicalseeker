import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const searchFields=[
    { title: "Job Title", icon: IconSearch, options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
    { title: "Location", icon: IconMapPin, options: ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad'] },
    { title: "Skills", icon: IconRecharging, options: ["HTML","CSS","JavaScript","React","Angular","Node.js","Python","Java","Ruby","PHP","SQL","MongoDB","PostgreSQL","Git","API Development","Testing and Debugging","Agile Methodologies","DevOps","AWS","Azure","Google Cloud"] },
]

const talents = [
  {
    id: 1,
    name: "Rohan Sharma",
    jobTitle: "Software Engineer",
    company: "Google",
    skills: ["React", "SpringBoot", "MongoDB", "Java"],
    about: "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. Passionate about cloud computing and distributed systems.",
    expectedCtc: "₹48 - 60LPA",
    location: "Bangalore, India",
    totalExp: 4,
    postTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 2,
    name: "Aisha Khan",
    jobTitle: "Frontend Developer",
    company: "Meta",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    about: "Frontend Developer at Meta, focused on creating visually appealing and highly interactive web interfaces. I am dedicated to web accessibility and performance optimization, ensuring inclusive experiences for global users.",
    expectedCtc: "₹40 - 55LPA",
    location: "Hyderabad, India",
    totalExp: 3,
    postTime: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 3,
    name: "Rahul Patel",
    jobTitle: "Backend Developer",
    company: "Amazon",
    skills: ["Node.js", "Express", "MySQL", "AWS"],
    about: "Backend Developer at Amazon specializing in server-side logic and database management. I build robust APIs and microservices that power high-traffic e-commerce platforms. Experienced in AWS Lambda and DynamoDB.",
    expectedCtc: "₹50 - 65LPA",
    location: "Chennai, India",
    totalExp: 5,
    postTime: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 4,
    name: "Diya Mehta",
    jobTitle: "UX/UI Designer",
    company: "Adobe",
    skills: ["Figma", "Sketch", "Prototyping", "Wireframing"],
    about: "UX/UI Designer at Adobe with a passion for user-centric design. I transform complex requirements into intuitive and beautiful interfaces. Expert in design systems and collaborative workflows with engineering teams.",
    expectedCtc: "₹35 - 50LPA",
    location: "Mumbai, India",
    totalExp: 4,
    postTime: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 5,
    name: "Chirag Jain",
    jobTitle: "Full Stack Developer",
    company: "Microsoft",
    skills: ["Python", "Django", "React", "Azure"],
    about: "Full Stack Developer at Microsoft delivering end-to-end web solutions. I leverage Python/Django for backend security and React for responsive frontends. Committed to writing clean, maintainable code and mentoring junior devs.",
    expectedCtc: "₹45 - 60LPA",
    location: "Pune, India",
    totalExp: 6,
    postTime: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 6,
    name: "Fiza Khan",
    jobTitle: "DevOps Engineer",
    company: "Netflix",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    about: "DevOps Engineer at Netflix focused on automating deployment pipelines and ensuring high availability. I optimize cloud infrastructure using Terraform and Ansible to support massive scale streaming services.",
    expectedCtc: "₹50 - 65LPA",
    location: "Delhi, India",
    totalExp: 5,
    postTime: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 7,
    name: "Arjun Singh",
    jobTitle: "Data Scientist",
    company: "Spotify",
    skills: ["Python", "Machine Learning", "SQL", "Pandas"],
    about: "Data Scientist at Spotify using machine learning to personalize user listening experiences. I treat data as a product, building predictive models that drive engagement and retention. Experienced in NLP and recommendation systems.",
    expectedCtc: "₹45 - 55LPA",
    location: "Bangalore, India",
    totalExp: 3,
    postTime: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 8,
    name: "Priya Das",
    jobTitle: "Product Manager",
    company: "Flipkart",
    skills: ["Agile", "Roadmapping", "Jira", "Analytics"],
    about: "Product Manager at Flipkart leading cross-functional teams to launch innovative e-commerce features. I bridge the gap between business goals and technical feasibility, ensuring timely delivery of high-value products.",
    expectedCtc: "₹40 - 55LPA",
    location: "Bangalore, India",
    totalExp: 7,
    postTime: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString()
  }
];

const profile={
    name: "Rohan Sharma",
    role: "Software Engineer",
    company: "Google",
    location: "Delhi, India",
    about: "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.",
    skills: ["React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL", "Python", "Django", "Figma", "Sketch", "Docker", "AWS"],
    experience: [
      {
        title: "Software Engineer III",
        company: "Google",
        location: "Mumbai, India",
        startDate: "Apr 2022",
        endDate: "Present",
        description: "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
      },
      {
        title: "Software Engineer",
        company: "Microsoft",
        location: "Surat, India",
        startDate: "Jun 2018",
        endDate: "Mar 2022",
        description: "At Microsoft, I worked on developing and optimizing cloud-based applications, focusing on enhancing performance and scalability. I collaborated with product managers and designers to create innovative features that improved user engagement. My responsibilities included writing clean, maintainable code, performing code reviews, and mentoring junior developers. I played a key role in migrating legacy applications to modern cloud infrastructure, resulting in significant cost savings and improved efficiency."
      }
    ],
    certifications: [
      {
        name: "Google Professional Cloud Architect",
        issuer: "Google",
        issueDate: "Aug 2023",
        certificateId: "CB72982GG"
      },
      {
        name: "Microsoft Certified: Azure Solutions Architect Expert",
        issuer: "Microsoft",
        issueDate: "May 2022",
        certificateId: "MS12345AZ"
      }
    ]
}

export {searchFields, talents, profile};