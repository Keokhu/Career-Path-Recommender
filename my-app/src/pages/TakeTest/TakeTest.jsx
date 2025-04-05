import React, { useState } from "react";
import axios from "axios";

import './TakeTest.css';
import Navbar2 from "../../components/Navbar/Navbar";

const questionsData = [
  { id: 'q1', text: 'Do you enjoy building or fixing things with your hands?', type: 'R' },
  { id: 'q2', text: 'Do you like solving science or math problems?', type: 'I' },
  { id: 'q3', text: 'Do you enjoy writing, painting, or creative activities?', type: 'A' },
  { id: 'q4', text: 'Would you like to work in a hospital, school, or social service?', type: 'S' },
  { id: 'q5', text: 'Do you enjoy leading and making business decisions?', type: 'E' },
  { id: 'q6', text: 'Do you like organizing files, schedules, or financial records?', type: 'C' },
  { id: 'q7', text: 'Do you enjoy working outdoors with plants, animals, or machines?', type: 'R' },
  { id: 'q8', text: 'Do you like researching new topics and finding solutions?', type: 'I' },
  { id: 'q9', text: 'Would you rather persuade people to buy something than work alone?', type: 'E' },
  { id: 'q10', text: 'Do you prefer structured, rule-based work over unpredictable tasks?', type: 'C' }
];

export default function Assessment() {
  const [answers, setAnswers] = useState({});
  const [advice, setAdvice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswer = (index, answer) => {
    setAnswers((prev) => ({ ...prev, [index]: answer }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    const formattedData = questionsData.map((q, index) => ({
      question: q.text,
      answer: answers[index] || ""
    }));
    
    const variable = JSON.stringify(formattedData);

    axios.get("http://localhost:5000/ai/response", {
      params: { variable }
    })
      .then((res) => {
        setAdvice(res.data.msg);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error(error.message);
        alert("Error: " + error.message);
        setIsSubmitting(false);
      });
  };

  const answeredQuestions = Object.keys(answers).length;
  const totalQuestions = questionsData.length;

  return (
    <div className="dark-assessment-page">
      <Navbar2 />
      <div className="dark-assessment-container">
        <h1 className="exploration-title">Start Your Exploration...</h1>
        
        <div className="question-list">
          {questionsData.map((q, index) => (
            <div key={q.id} className="question-box">
              <p className="question-text">{q.text}</p>
              <div className="options-row">
                <label className="option-btn">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value="yes"
                    checked={answers[index] === "yes"}
                    onChange={() => handleAnswer(index, "yes")}
                  />
                  <span className="radio-dot"></span>
                  <span>Yes</span>
                </label>
                
                <label className="option-btn">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value="no"
                    checked={answers[index] === "no"}
                    onChange={() => handleAnswer(index, "no")}
                  />
                  <span className="radio-dot"></span>
                  <span>No</span>
                </label>
              </div>
            </div>
          ))}
        </div>

       
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="submit-btn"
          >
            {isSubmitting ? "Processing..." : "Discover Your Career Path"}
          </button>
    

        {advice && (
          <div className="results-section">
            <h2 className="results-title">Your Results</h2>
            <div className="result-box">
              <h3>Recommended Career:</h3>
              <p className="career-advice">{advice}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}