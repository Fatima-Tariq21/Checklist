import React, { useState } from "react";

function FormList() {
  const steps = [
    "Offer Sent",
    "Offer Signed",
    "Background Check Processed",
     "Employee documents received",
    "Laptop Handover",
    "Bamboo HR Profile Setup",
    "Welcome Email with Key Contacts Intro",
   
  ];

  const [userName, setUserName] = useState(""); // state for Name
  const [responses, setResponses] = useState({});
  const [notes, setNotes] = useState({});

  const handleChange = (step, value) => {
    setResponses({ ...responses, [step]: value });
  };

  const handleNoteChange = (step, value) => {
    setNotes({ ...notes, [step]: value });
  };

  return (
    <div className="container mt-4">
      {/* 👇 Name Line */}
      <div className="name-row mb-4">
        <label className="name-label">Employee Name:</label>
        <input
          type="text"
          className="name-input"
          placeholder="Enter your  employee name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <ul className="list-group">
        {steps.map((step, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {/* Step Label */}
            <span className="step-label">{step}</span>

            {/* Radio Buttons */}
            <div className="radio-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name={step}
                  value="Yes"
                  onChange={() => handleChange(step, "Yes")}
                  checked={responses[step] === "Yes"}
                />
                <label className="form-check-label">Yes</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name={step}
                  value="No"
                  onChange={() => handleChange(step, "No")}
                  checked={responses[step] === "No"}
                />
                <label className="form-check-label">No</label>
              </div>
            </div>

            {/* Comment Box */}
            <div className="comment-box">
              <label className="comment-label">Comments:</label>
              <input
                type="text"
                className="step-input"
                value={notes[step] || ""}
                onChange={(e) => handleNoteChange(step, e.target.value)}
              />
            </div>
            

          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormList;
