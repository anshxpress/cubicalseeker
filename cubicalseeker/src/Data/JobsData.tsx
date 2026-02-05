import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const dropdownData = [
    { title: "Job Title", icon: IconSearch, options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
    { title: "Location", icon: IconMapPin, options: ['Delhi', 'Gurugram', 'Pune', 'Bangaluru', 'Mumbai', 'Hydrabad', 'Surat', 'Chennai'] },
    { title: "Experience", icon: IconBriefcase, options: ['Entry Level', 'Intermediate', 'Expert'] },
    { title: "Job Type", icon: IconRecharging, options: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship'] }
];

const jobList = [
    {
      id: 1,
      jobTitle: "Product Designer",
      company: "Meta",
      applicants: 25,
      experience: "Entry Level",
      jobType: "Full-Time",
      location: "Gurugram",
      packageOffered: 32,
      postTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
      description: "Meta is seeking a Product Designer to join our team. You'll be working on designing user-centric interfaces for our blockchain wallet platform. This is an excellent opportunity for entry-level designers to grow their skills in a dynamic environment."
    },
    {
      id: 2,
      jobTitle: "Sr. UX Designer",
      company: "Netflix",
      applicants: 14,
      experience: "Expert",
      jobType: "Part-Time",
      location: "Pune",
      packageOffered: 40,
      postTime: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      description: "Netflix is looking for a Sr. UX Designer to enhance our user experience on streaming platforms. Ideal candidates will have extensive experience in user research and interaction design, helping us to deliver engaging content to our global audience."
    },
    {
      id: 3,
      jobTitle: "Product Manager",
      company: "Microsoft",
      applicants: 58,
      experience: "Intermediate",
      jobType: "Full-Time",
      location: "Remote",
      packageOffered: 35,
      postTime: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      description: "Join Microsoft as a Product Manager and contribute to our new AI-driven productivity tools. We're looking for leaders who can drive product vision and execution. This is a remote position, offering flexibility and the opportunity to work with a leading technology company."
    },
    {
      id: 4,
      jobTitle: "Senior Frontend Engineer",
      company: "Adobe",
      applicants: 23,
      experience: "Expert",
      jobType: "Part-Time",
      location: "Mumbai",
      packageOffered: 33,
      postTime: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      description: "Adobe is seeking a part-time Senior Frontend Engineer to help us build the next generation of creative tools. You will work closely with our design team to implement pixel-perfect UIs using React and WebGL."
    },
    {
      id: 5,
      jobTitle: "Backend Developer",
      company: "Google",
      applicants: 21,
      experience: "Entry Level",
      jobType: "Full-Time",
      location: "Bangalore",
      packageOffered: 38,
      postTime: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
      description: "Google is hiring a Backend Developer to join our team in Bangalore. You'll be responsible for developing scalable backend systems that power our services using Go and Java. This role requires strong problem-solving skills."
    },
    {
      id: 6,
      jobTitle: "SMM Manager",
      company: "Spotify",
      applicants: 73,
      experience: "Intermediate",
      jobType: "Full-Time",
      location: "Delhi",
      packageOffered: 34,
      postTime: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      description: "Spotify is looking for an SMM Manager to lead our social media marketing efforts in Delhi. You will create and manage campaigns to promote our music streaming service, engage with our audience, and drive growth."
    },
    {
      id: 7,
      jobTitle: "Full Stack Developer",
      company: "Amazon",
      applicants: 50,
      experience: "Intermediate",
      jobType: "Full-Time",
      location: "Mumbai",
      packageOffered: 36,
      postTime: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      description: "Amazon is looking for a Full Stack Developer to build and maintain our customer-facing applications. You will work with a dynamic team to create seamless and responsive web applications using AWS, React, and Node.js."
    },
    {
      id: 8,
      jobTitle: "iOS Developer",
      company: "Apple",
      applicants: 30,
      experience: "Expert",
      jobType: "Full-Time",
      location: "Surat",
      packageOffered: 42,
      postTime: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      description: "Apple is seeking an iOS Developer to join our team. You will work on developing cutting-edge applications for iOS devices using Swift and SwiftUI, ensuring high performance and an exceptional user experience."
    }
  ];

  export {dropdownData,jobList};