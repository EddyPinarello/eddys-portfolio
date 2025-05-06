import React from 'react'
import Timeline from '../components/Timeline';
const aboutData = [
    {
      role: "Mentorship Program Participant",
      company: "Superhero Valley",
      description: [
        "I am one of the Italian students chosen for the mentorship program of Superhero Valley, a community dedicated to guiding students in computer science fields. Superhero Valley is committed to helping outstanding students fulfill their aspirations and make a positive impact in their communities through personalized mentorship from high-impact mentors of the big tech industry"
      ],
      tags: ["Mentorship", "Coaching"],
      dateRange: "03/2025 to current",
      onClick: () => window.open("https://superherovalley.fun/", "_blank")
    },
    {
      role: "Bachelor's Degree in Computer Science",
      company: "University of Padua",
      description: [
        "Studied algorithms, programming in C/C++, cybersecurity, operating systems, databases, and mathematics.",
        "Built a PostgreSQL tennis tournament database as a top-graded project."
      ],
      tags: ["C", "C++", "Python", "PostgreSQL", "Algorithms", "Cybersecurity"],
      dateRange: "10/2022 to current",
      onClick: () => window.open("https://www.unipd.it", "_blank")
    },
    {
      role: "High School Diploma in Automation",
      company: "ITIS Max Planck",
      description: [
      "computer science fields. Superhero Valley is committed to helping outstanding students fulfill their aspirations and make a positive impact in their communities through personalized mentorship from high-impact mentors of the big tech industry",
      ],
      tags: ["Automation", "Electronics"],
      dateRange: "09/2017 to 07/2022",
      onClick: () => window.open("https://www.maxplanck.edu.it/index.php/it/", "_blank")
    },
];

function About() {
  return (
      <div className="workexp-section">
        <Timeline items={aboutData} />
      </div>
    );
}

export default About