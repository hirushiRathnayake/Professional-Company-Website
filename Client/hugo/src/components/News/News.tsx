import React from 'react';
import { FaCalendarAlt, FaNewspaper, FaBullhorn } from 'react-icons/fa'; // Importing icons
import './News.css';

const NewsAndEvents = () => {
  const events = [
    {
      icon: <FaCalendarAlt />,
      title: 'Annual Tech Conference',
      date: 'March 15, 2025',
      description: 'Join us for our annual tech conference to explore the latest innovations in IT.',
    },
    {
      icon: <FaNewspaper />,
      title: 'New Product Launch',
      date: 'April 10, 2025',
      description: 'We are excited to launch our latest software solution for small businesses.',
    },
    {
      icon: <FaBullhorn />,
      title: 'Webinar: Future of AI',
      date: 'May 20, 2025',
      description: 'Learn from industry experts about the evolving role of AI in business.',
    },
  ];

  return (
    <div className="news-events-section container">
      <h2 className="section-title">News and Events</h2>
      <div className="news-events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="icon">{event.icon}</div>
            <h3>{event.title}</h3>
            <p className="date">{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndEvents;
