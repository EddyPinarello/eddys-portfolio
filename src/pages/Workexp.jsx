import React from 'react';
import Timeline from '../components/Timeline';

const workExperienceData = [
    {
      role: "Software Engineer Intern",
      company: "Moku Srl",
      description: [
        "Working on thesis project: Analysis, Design, and Development of a Prototype for the Digital Lifecycle Management of EEE"
      ],
      tags: ["Ruby", "Rails", "GraphQL", "Blockchain", "SWE"],
      dateRange: "05/2025 to current",
      onClick: () => window.open("https://www.moku.io/en", "_blank")
    },
    {
      role: "PLC Programmer Intern",
      company: "Carretta Srl",
      description: [
        "Worked closely with a senior PLC programmer, learning ladder logic and contributing to programming tasks.",
        "Facilitated communication between the CEO and the programming team to ensure clear understanding of project requirements.",
        "Assisted in testing production lines, identifying and resolving issues to support smooth operation during testing phases."
      ],
      tags: ["PLC", "Ladder Logic", "Automation", "Team Communication"],
      dateRange: "05/2021 to 06/2021",
      onClick: () => window.open("https://carretta.it/en/", "_blank")
    }
  ];
  
function Workexp() {
  return (
    <div className="workexp-section">
      <Timeline items={workExperienceData} />
    </div>
  );
}

export default Workexp;
