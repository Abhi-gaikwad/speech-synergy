import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Custom styles
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import game1 from '../assets/game1.jpeg';
import game2 from '../assets/game2.jpg';
import game3 from '../assets/game3.jpg';
import game4 from '../assets/game4.jpeg';
import game5 from '../assets/game5.jpeg';
import game6 from '../assets/game6.jpg';

// Register the required elements
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function Home() {
  const pieData = {
    labels: ['Unsatisfied', 'Satisfied', 'Going'],
    datasets: [
      {
        label: 'Level',
        data: [20, 150, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const pieData1 = {
    labels: ['Unsatisfied', 'Satisfied', 'Going'],
    datasets: [
      {
        label: 'Level',
        data: [90, 150, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Final Outcomes',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  // Sample data for the table
  const tableData = [
    { patientId: 'P001', name: 'Vijay Bhat', sessions: 5, status: 'Active', therapist: 'Dr. Varade' },
    { patientId: 'P002', name: 'Riya Shah', sessions: 3, status: 'Inactive', therapist: 'Dr. Banerji' },
    // Add more rows as needed
  ];

  return (
    <div className="main-content">
      <div className="cards-container">
        <div className="home-card">
          <div className="card-body">
            <h5 className="card-title">Patients</h5>
            <Pie data={pieData} />
          </div>
        </div>
        <div className="home-card">
          <div className="card-body">
            <h5 className="card-title">Therapists</h5>
            <Pie data={pieData1} />
          </div>
        </div>
        <div className="home-card">
          <div className="card-body">
            <h5 className="card-title">Results</h5>
            <Bar data={barData} />
          </div>
        </div>
        <div className="home-card2">
          <div className="card-body2">
            <h5 className="card-title">Patient Details</h5>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Patient Name</th>
                  <th>Sessions</th>
                  <th>Status</th>
                  <th>Assigned Therapist</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.patientId}</td>
                    <td>{row.name}</td>
                    <td>{row.sessions}</td>
                    <td>{row.status}</td>
                    <td>{row.therapist}</td>
                    <td>
                      <button className="btn btn-purple">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <h3>Practice Games</h3>
      <div className="game-cards-container">
        
        <div className="game-card">
          <div className="card-body">
            <h5 className="card-title">Word Match</h5>
            <img src={game1} alt="game1" className="game-image" />
            <p className="game-description">improve vocabulary by matching words with images.</p>
            <button className="btn btn-purple">Play Now</button>
          </div>
        </div>
        <div className="game-card">
          <div className="card-body">
            <h5 className="card-title">Sound Hunt</h5>
            <img src={game2} alt="game1" className="game-image" />
            <p className="game-description">Identify sounds in different enviroments</p>
            <button className="btn btn-purple">Play Now</button>
          </div>
        </div>
        <div className="game-card">
          <div className="card-body">
            <h5 className="card-title">Rhyme Time</h5>
            <img src={game3} alt="game1" className="game-image" />
            <p className="game-description">Find words that rhyme to enhance phonological skills.</p>
            <button className="btn btn-purple">Play Now</button>
          </div>
        </div>
        <div className="game-card">
          <div className="card-body">
            <h5 className="card-title">Sentence Builder</h5>
            <img src={game4} alt="game1" className="game-image" />
            <p className="game-description">Create sentences to improve syntax and grammar</p>
            <button className="btn btn-purple">Play Now</button>
          </div>
        </div>
        <div className="game-card">
          <div className="card-body">
            <h5 className="card-title">Articulation Quiz</h5>
            <img src={game5} alt="game1" className="game-image" />
            <p className="game-description">Practice pronunciation with interactive quizzes</p>
            <button className="btn btn-purple">Play Now</button>
          </div>
        </div>
        <div className="game-card">
          <div className="card-body">
            <h5 className="card-title">Story Time</h5>
            <img src={game6} alt="game1" className="game-image" />
            <p className="game-description">Listen and response to stores to boost comprehension</p>
            <button className="btn btn-purple">Play Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
