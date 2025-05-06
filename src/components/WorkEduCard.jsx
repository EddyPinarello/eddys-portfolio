export default function WorkEduCard({ role, company, description, tags, dateRange, isCurrent, onClick }) {
    return (
        <div className="timeline-item" onClick={onClick} style={{ cursor: 'pointer' }}>
            <div className="timeline-left">
                <div className={isCurrent ? "timeline-circle current" : "timeline-circle"} />
                <div className="timeline-date">{dateRange}</div>
            </div>
            <div className="timeline-right">
                <div className="work-edu-card">
                    <div className="work-edu-card-header">
                        <p className="work-edu-card-role">{role}</p>    
                        <p className="work-edu-card-company">{company}</p>
                    </div>
                    <ul className="work-edu-card-description">
                        {Array.isArray(description) ? (
                            description.map((point, idx) => <li key={idx}>{point}</li>)
                        ) : (
                            <li>{description}</li>
                        )}
                        </ul>
                    <div className="tags">
                        {tags.map((tag, index) => (
                            <div key={index} className="tag">
                                <span>{"</"}</span>{tag}<span>{">"}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
