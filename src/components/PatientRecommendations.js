import React, { useState } from 'react';
import './PatientRecommendations.css'; // Custom styles for recommendations

const PatientRecommendations = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    number: '',
    symptoms: '',
    levelOfProblem: '',
    address: '',
  });
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://api.example.com/recommend-therapist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setRecommendations(data.therapists);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recommendations-container">
      <h3>AI Recommendations of Therapists</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            className="form-control"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Phone Number:</label>
          <input
            type="tel"
            id="number"
            name="number"
            className="form-control"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="symptoms">Symptoms:</label>
          <textarea
            id="symptoms"
            name="symptoms"
            className="form-control"
            rows="4"
            value={formData.symptoms}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="levelOfProblem">Level of Problem:</label>
          <input
            type="text"
            id="levelOfProblem"
            name="levelOfProblem"
            className="form-control"
            value={formData.levelOfProblem}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Loading...' : 'Get Recommendations'}
        </button>
      </form>
      {recommendations.length > 0 && (
        <ul className="recommendations-list">
          {recommendations.map((rec, index) => (
            <li key={index}>
              <h4>{rec.name}</h4>
              <p>{rec.specialization}</p>
              <p>{rec.experience} years of experience</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PatientRecommendations;
