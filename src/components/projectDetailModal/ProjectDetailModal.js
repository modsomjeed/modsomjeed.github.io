import React from "react";
import "./ProjectDetailModal.scss";
import { tagDefinitions } from "../../data/timelineData";

export default function ProjectDetailModal({ item, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {/* Header */}
        <div className="modal-header">
          <h1>{item.title}</h1>
          <p className="modal-date">{item.dateRange}</p>
          <div className="modal-tags">
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
        </div>

        {/* Scrollable Content */}
        <div className="modal-body">
          {/* Context */}
          {item.context && (
            <section className="modal-section">
              <h3>Context</h3>
              <p>{item.context}</p>
            </section>
          )}

          {/* What You Did */}
          {item.whatYouDid && (
            <section className="modal-section">
              <h3>What I Did</h3>
              <p>{item.whatYouDid}</p>
            </section>
          )}

          {/* Impact */}
          {item.impact && (
            <section className="modal-section impact-section">
              <h3>Impact</h3>
              <p className="impact-text">{item.impact}</p>
            </section>
          )}

          {/* Tools and Skills */}
          <section className="modal-section">
            <h3>Tools & Skills</h3>
            <div className="skills-container">
              <div className="skill-group">
                <h5>Tools</h5>
                <div className="skill-list">
                  {item.tools.map((tool) => (
                    <span key={tool} className="skill-item">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-group">
                <h5>Skills</h5>
                <div className="skill-list">
                  {item.skills.map((skill) => (
                    <span key={skill} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Lessons Learned */}
          {item.lessons && item.lessons.length > 0 && (
            <section className="modal-section">
              <h3>Lessons Learned</h3>
              <ul className="lessons-list">
                {item.lessons.map((lesson, idx) => (
                  <li key={idx}>{lesson}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Links */}
          {item.links && item.links.length > 0 && (
            <section className="modal-section">
              <h3>Resources</h3>
              <div className="links-container">
                {item.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-link"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
