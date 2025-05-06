import WorkEduCard from './WorkEduCard';

export default function Timeline({ items }) {
    return (
        <div className="timeline-container">
            {items.map((item, index) => (
                <WorkEduCard
                    key={index}
                    {...item}
                    isCurrent={item.dateRange.includes("current")}
                />
            ))}
            <div className="timeline-end"></div>
        </div>
    );
}

