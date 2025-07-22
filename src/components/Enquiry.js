import React, { useState } from 'react';
import './Enquiry.css'; // Import external styles

const Enquiry = () => {
  const [activeTab, setActiveTab] = useState('Tour');

  return (
    <div className="inquiry-container">
      {/* Header */}
      <div className="inquiry-header">
        <h2 className="inquiry-title">Find The Best Place</h2>
        <div className="tab-group">
          {['Hotels', 'Tour', 'Flight'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="inquiry-form">
        <div className="form-group">
          <label>Looking For</label>
          <input type="text" placeholder="Tour Name" />
        </div>

        <div className="form-group">
          <label>Price</label>
          <select>
            <option>Price</option>
            <option>1000₹</option>
            <option>1500₹</option>
            <option>2000₹</option>
          </select>
        </div>

        <div className="form-group">
          <label>Location</label>
          <select>
            <option>All City</option>
            <option>Goa</option>
            <option>Manali</option>
            <option>Kerala</option>
          </select>
        </div>

        <div className="form-group">
          <label>Departure Month</label>
          <input type="date" />
        </div>

        <div className="form-group search-button">
          <label className="invisible">Search</label>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
