import React, { useState } from "react";
import "./TimelineItem.scss";
import { tagDefinitions } from "../../data/timelineData";
import ProjectDetailModal from "../projectDetailModal/ProjectDetailModal";

export default function TimelineItem({ item, index }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
        <div className="timeline-marker">
          <div className="marker-dot" />
          <div className="marker-line" />
        </div>

        <div className="timeline-content">
          {/* Date Range */}
          <div className="timeline-date">{item.dateRange}</div>

          {/* Title */}
          <h3 className="timeline-title">{item.title}</h3>

          {/* Tags */}
          <div className="timeline-tags">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="tag-badge"
                style={{ backgroundColor: tagDefinitions[tag].color }}
              >
                #{tagDefinitions[tag].label}
              </span>
            ))}
          </div>

          {/* Project Detail */}
          <p className="timeline-description">{item.projectDetail}</p>

          {/* Tools and Skills */}
          <div className="timeline-skills">
            <div className="skill-group">
              <h5>Tools:</h5>
              <div className="skill-chips">
                {item.tools.map((tool) => (
                  <span key={tool} className="skill-chip">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-group">
              <h5>Skills:</h5>
              <div className="skill-chips">
                {item.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Lessons Learned (Preview - first 2) */}
          {item.lessons && item.lessons.length > 0 && (
            <div className="timeline-lessons">
              <h5>Key Lessons:</h5>
              <ul>
                {item.lessons.slice(0, 2).map((lesson, idx) => (
                  <li key={idx}>{lesson}</li>
                ))}
              </ul>
              {item.lessons.length > 2 && (
                <p className="lessons-more">+{item.lessons.length - 2} more</p>
              )}
            </div>
          )}

          {/* View Details Button */}
          <button
            className="view-details-btn"
            onClick={() => setShowDetail(true)}
          >
            View Details →
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {showDetail && (
        <ProjectDetailModal item={item} onClose={() => setShowDetail(false)} />
      )}
    </>
  );
}
