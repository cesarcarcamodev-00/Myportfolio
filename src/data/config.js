export const siteConfig = {
  name: 'Cesar',
  title: 'Software Developer',
  role: 'Full Stack Web Developer',
  email: 'cesarcarcamo.dev@gmail.com',
  location: 'San Pedro Sula, Honduras',
  availability: 'Open to opportunities',
  
  hero: {
    greeting: "Hello, I'm",
    description: 'I build modern, responsive, and user-friendly websites with cutting-edge technologies. Passionate about creating seamless digital experiences.',
    stats: [
      { number: '5+', label: 'Years Experience' },
      { number: '50+', label: 'Projects Completed' },
    ],
  },
  
  social: [
    { name: 'GitHub', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
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
        title: 'Tools & Others',
        skills: ['Git', 'Docker', 'AWS', 'Figma', 'CI/CD'],
      },
    ],
    tools: ['VS Code', 'GitHub', 'GitLab', 'Jira', 'Slack', 'Postman', 'Chrome DevTools', 'Figma'],
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
        'Developed and maintained enterprise web applications using Blazor and .NET 6+',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines using AWS and Docker',
        'Collaborated with cross-functional teams to deliver high-quality software',
      ],
      technologies: ['.NET', 'ASP.NET', 'SQL Server', 'AWS', 'Docker', 'AGILE'],
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
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with shopping cart, payment integration, and admin dashboard.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '🛒',
      link: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and drag-and-drop boards.',
      tags: ['React', 'Firebase', 'Material UI'],
      image: '✓',
      link: '#',
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with charts and scheduling capabilities.',
      tags: ['Next.js', 'D3.js', 'Python'],
      image: '📊',
      link: '#',
    },
    {
      id: 4,
      title: 'Portfolio Generator',
      description: 'AI-powered portfolio builder with multiple themes and customization options.',
      tags: ['React', 'OpenAI', 'Vercel'],
      image: '🎨',
      link: '#',
    },
    {
      id: 5,
      title: 'Real-Time Chat App',
      description: 'End-to-end encrypted messaging application with group chats and file sharing.',
      tags: ['Node.js', 'Socket.io', 'MongoDB'],
      image: '💬',
      link: '#',
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with 7-day forecasts and interactive maps.',
      tags: ['React', 'Weather API', 'Leaflet'],
      image: '🌤️',
      link: '#',
    },
  ],
};
