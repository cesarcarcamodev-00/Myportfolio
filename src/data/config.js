export const siteConfig = {
  name: 'Cesar',
  title: 'Software Developer',
  role: 'Full Stack',
  email: 'cesarcarcamo.dev@gmail.com',
  location: 'San Pedro Sula, Honduras',
  availability: 'Open to opportunities',
  
  hero: {
    greeting: "Hello, I'm",
    description: 'Versatile software developer with experience in application development, project coordination, and cross-functional collaboration. Fast learner with strong problem-solving skills, focused on delivering efficient, scalable solutions and taking end-to-end ownership of project outcomes.',
    stats: [
      { number: '6+', label: 'Years Experience' },
      { number: '10+', label: 'Projects Deployed' },
    ],
  },
  
  social: [
    { name: 'GitHub', url: '#https://github.com/cesarcarcamodev-00' },
    { name: 'LinkedIn', url: '#https://www.linkedin.com/in/cesar-carcamo-643b83213/' },
    { name: 'Email', url: 'mailto:cesarcarcamo.dev@gmail.com' },
  ],
  
  skills: {
    categories: [
      {
        title: 'Frontend',
        skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Blazor'],
      },
      {
        title: 'Backend',
        skills: ['.NET', 'SQL Server'],
      },
      {
        title: 'DevOps & Tools',
        skills: ['Docker', 'AWS', 'CI/CD pipelines',],
      },
    ],
    tools: ['VS Code', 'Visual Studio', 'OpenCode','GitHub', 'GitLab', 'Jira', 'Slack', 'Postman', 'Chrome DevTools', 'Figma'],
  },
  
  experience: [
    {
      id: 1,
      role: 'Senior Full Stack Developer',
      company: 'UnifyCX',
      period: '2019 - 2026',
      location: 'Remote',
      description: 'Leading development of enterprise web applications using Blazor and .NET 6+. Mentoring junior developers and implementing best practices.',
      tasks: [
        'Architected and launched new greenfield.NET 6/Blazor applications across 3 global regions, owning the full development lifecycle from initial design to containerized deployment. ',
        'Led the modernization of legacy ASP.NET systems to .NET 6+, improving application performance and reducing technical debt  ',
        'Implemented TDD and automated testing for new projects, ensuring high code coverage and validating complex business logic before production.',
        'Developed high-performance RESTful APIs for an internal dashboard, saving 15% in annual software costs by replacing premium Power BI licenses.  ',
        'Automated manual workflows using scheduled tasks and APIs, saving 50 labor hours per week across the organization. ',
        'Worked within a Scrum environment to deliver high-priority features on schedule through active participation in sprint cycles. ',
      ],
      technologies: ['.NET', 'ASP.NET', 'SQL Server', 'AWS', 'Docker', 'Agile','GitHub'],
    },
    {
      id: 2,
      role: 'Customer Service Representative',
      company: 'Allied Global',
      period: '2016 - 2019',
      location: 'San Pedro Sula, Honduras',
      description: 'Scalation representative, assisted customers with technical issues',
      tasks: [
        'Handled customer escalations and resolved technical issues',
        'Provided excellent customer support via phone and email',
        'Documented issues and solutions for knowledge base',
      ],
      technologies: ['Customer Service'],
    }
  ],
  
  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Universidad Autonoma de Honduras',
      year: '2015 - 2019',
      description: 'Focus on web development and software engineering',
    },
  ],
  
  projects: [
    {
      id: 1,
      title: 'Time Tracking X',
      description: 'A complete time tracking system with scheduling and employee management features, built from scratch using .net 6, blazor and sql server. designed, developed and deployed using the best practices.',
      tags: ['.NET', 'Blazor', 'SQL Server', 'Figma','HTML/CSS',"Github",'Docker','Circle CI','MudBlazor'],
      image: '🛒',
      link: '#',
    },
    {
      id: 2,
      title: 'UnifyCX Portal',
      description: 'A scalable Enterprise Resource Planning (ERP) solution for HR, supporting 5,000+ global employees with comprehensive Employee Self-Service (ESS) modules to streamline administrative workflows.',
      tags: ['ASP.NET', 'SQL Server', 'HTML/CSS','Javascript',"Github","Docker"],
      image: '✓',
      link: '#',
    },
    {
      id: 3,
      title: 'IT Call Support tool',
      description: 'A precision diagnostic utility designed to monitor and troubleshoot client-specific call quality issues, enabling rapid identification and resolution of connectivity bottlenecks.',
      tags: [".NET", "SQL Server","CSS", "Blazor" , "Mudblazor", "Javascript"],
      image: '📊',
      link: '#',
    },
    {
      id: 4,
      title: "IT Ticket monitoring tool",
      description: 'A ticket-management extension that provides real-time alerts and time-on-hold analytics, driving faster resolution times and improved IT service delivery.',
      tags: ["PHP", "HTML","CSS", "Javascript"],
      image: '🎨',
      link: '#',
    },
    {
      id: 5,
      title: "Automated Call uploader",
      description: 'A high-throughput API that automates the ingestion of call data into Google Cloud for AI-driven QA analysis and performance evaluation.',
      tags: [".NET"],
      image: '💬',
      link: '#',
    },
    {
      id: 6,
      title: "Power BI dashboard",
      description: 'A centralized management portal that integrates with the Power BI tenant to streamline report access through a Role-Based Access Control framework, significantly reducing licensing overhead.',
      tags: ["ASP.NET","CSS", "SQL Server","HTML", "Javascript","Github","Docker"],
      image: '🌤️',
      link: '#',
    },
    {
      id: 7,
      title: "Portfolio 2026",
      description: 'My personal site built with React and Vite.',
      tags: ["React.js","Tailwind", "HTML", "Javascript","Figma","Open code"],
      image: '🌤️',
      link: '#',
    },
    {
      id: 8,
      title: "Multiple EDE Tools (Electronic Data Exchange)",
      description: 'Six distinct EDE tools for multiple clients, each tailored to unique requirements to support employee evaluation and data capture processes. ',
      tags: ['.NET', 'Blazor', 'SQL Server', 'Figma','HTML/CSS','MudBlazor'],
      image: '🌤️',
      link: '#',
    },
    {
      id: 9,
      title: "Recruitment tool",
      description: 'Robust recruitment platform designed to streamline candidate lead tracking and optimize end-to-end hiring workflows.',
      tags: ['.NET', 'MVC', 'SQL Server','HTML/CSS'],
      image: '🌤️',
      link: '#',
    },
  ],
};
