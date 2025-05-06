import React from 'react'

function ProjectCard({title, text, image, link, tags}) {
    return (
        <a href={link} className="project-card" target="_blank" rel="noopener noreferrer">
            <div className="project-card-image">
                <img src={image} alt={`${title} preview`} />
            </div>
            <div className="project-card-content">
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <div key={index} className="tag">
                            <span>{"</"}</span>{tag}<span>{">"}</span>
                        </div>
                    ))}

                </div>
            </div>
        </a>
    );
}

export default ProjectCard;