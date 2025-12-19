import React, {useState, useMemo} from "react";
import "./Timeline.scss";
import TimelineItem from "../../components/timelineItem/TimelineItem";
import {timelineData, tagDefinitions} from "../../data/timelineData";
import {FaSearch} from "react-icons/fa";

export default function Timeline() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const allTags = Object.keys(tagDefinitions);

  const filteredData = useMemo(() => {
    return timelineData.filter(item => {
      // Filter by tags
      const tagMatch =
        selectedTags.length === 0 ||
        item.tags.some(tag => selectedTags.includes(tag));

      // Filter by search query
      const searchMatch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.projectDetail.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tools.some(tool =>
          tool.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        item.skills.some(skill =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return tagMatch && searchMatch;
    });
  }, [selectedTags, searchQuery]);

  const handleTagToggle = tag => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h1>Timeline</h1>
        <p>Projects, work experience, and lessons learned</p>
      </div>

      {/* Search and Filter Section */}
      <div className="timeline-controls">
        {/* Search Box */}
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by title, tools, skills..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button className="search-clear" onClick={() => setSearchQuery("")}>
              ✕
            </button>
          )}
        </div>

        {/* Tag Filters */}
        <div className="tag-filters">
          <button
            className={`tag-button ${
              selectedTags.length === 0 ? "active" : ""
            }`}
            onClick={() => setSelectedTags([])}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`tag-button ${
                selectedTags.includes(tag) ? "active" : ""
              }`}
              style={
                selectedTags.includes(tag)
                  ? {backgroundColor: tagDefinitions[tag].color, color: "#fff"}
                  : {borderColor: tagDefinitions[tag].color}
              }
              onClick={() => handleTagToggle(tag)}
            >
              #{tagDefinitions[tag].label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Info */}
      <div className="timeline-results">
        <p>
          Showing <strong>{filteredData.length}</strong> of{" "}
          <strong>{timelineData.length}</strong> items
        </p>
      </div>

      {/* Timeline */}
      {filteredData.length > 0 ? (
        <div className="timeline">
          {filteredData.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      ) : (
        <div className="timeline-empty">
          <p>No projects found matching your criteria.</p>
          <p>Try adjusting your filters or search query.</p>
        </div>
      )}
    </div>
  );
}
