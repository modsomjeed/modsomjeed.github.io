import React, { useState } from "react";
import "./Lessons.scss";
import { getAllLessons } from "../../data/timelineData";

export default function Lessons() {
  const { allLessons, categorized } = getAllLessons();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Collaboration",
    "Delivery",
    "Quality",
    "Architecture",
    "Stakeholder"
  ];

  const getDisplayLessons = () => {
    if (activeCategory === "All") {
      return allLessons;
    }
    return categorized[activeCategory] || [];
  };

  const displayLessons = getDisplayLessons();

  return (
    <div className="lessons-container">
      <div className="lessons-header">
        <h1>Lessons Learned</h1>
        <p>Key insights and lessons from projects and experiences</p>
      </div>

      {/* Category Filter */}
      <div className="category-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results Info */}
      <div className="lessons-info">
        <p>
          Showing <strong>{displayLessons.length}</strong> lessons in{" "}
          <strong>
            {activeCategory === "All" ? "all categories" : activeCategory}
          </strong>
        </p>
      </div>

      {/* Lessons Grid */}
      {displayLessons.length > 0 ? (
        <div className="lessons-grid">
          {displayLessons.map((lesson, idx) => (
            <div key={idx} className="lesson-card">
              <div className="lesson-icon">💡</div>
              <p className="lesson-text">{lesson.text}</p>
              <div className="lesson-meta">
                <span className="lesson-source">From: {lesson.source}</span>
                <div className="lesson-tags">
                  {lesson.tags.map((tag) => (
                    <span key={tag} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="lessons-empty">
          <p>No lessons found in this category.</p>
        </div>
      )}

      {/* Summary Stats */}
      <div className="lessons-summary">
        <h3>Summary</h3>
        <div className="summary-stats">
          <div className="stat">
            <div className="stat-number">{allLessons.length}</div>
            <div className="stat-label">Total Lessons</div>
          </div>
          <div className="stat">
            <div className="stat-number">{Object.keys(categorized).length}</div>
            <div className="stat-label">Categories</div>
          </div>
          {Object.entries(categorized).map(([cat, lessons]) => (
            lessons.length > 0 && (
              <div key={cat} className="stat">
                <div className="stat-number">{lessons.length}</div>
                <div className="stat-label">{cat}</div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
