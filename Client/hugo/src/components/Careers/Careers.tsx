import React from 'react';
import './Careers.css';
import { FaBriefcase, FaUserTie, FaGlobe } from 'react-icons/fa';

const Career = () => {
  const jobOpenings = [
    {
      icon: <FaBriefcase />,
      title: 'Software Engineer',
      location: 'New York, USA',
      description: 'Develop and maintain software solutions. Strong knowledge in React.js and Node.js required.',
      applyLink: '#',
    },
    {
      icon: <FaUserTie />,
      title: 'Project Manager',
      location: 'London, UK',
      description: 'Manage projects and coordinate with clients and teams to deliver high-quality solutions.',
      applyLink: '#',
    },
    {
      icon: <FaGlobe />,
      title: 'UI/UX Designer',
      location: 'Remote',
      description: 'Design intuitive user interfaces and enhance user experiences for our products.',
      applyLink: '#',
    },
  ];

  return (
    <div className="career-section container">
      <h2 className="section-title">Join Our Team</h2>
      <p>Explore exciting career opportunities and grow with us.</p>
      <div className="job-listings">
        {jobOpenings.map((job, index) => (
          <div className="job-card" key={index}>
            <div className="icon">{job.icon}</div>
            <h3>{job.title}</h3>
            <p className="location">{job.location}</p>
            <p>{job.description}</p>
            <a href={job.applyLink} className="apply-btn">Apply Now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
