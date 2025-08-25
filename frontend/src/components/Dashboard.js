import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrediction } from '../redux/stockSlice';
import  "./Dashboard.css"; // Assuming you have a CSS file for styling

const Dashboard = () => {
  const [ticker, setTicker] = useState('');
  const [days, setDays] = useState(30);
  const dispatch = useDispatch();
  const { predictions, status, error } = useSelector((state) => state.stock);

  const handleSubmit = () => {
    if (ticker.trim() !== '') {
      dispatch(fetchPrediction({ ticker, days }));
    }
  };

  return (
    <div className="dashboard-container">
      <div className="card">
        <h1 className="title">📈 Stock Price Predictor</h1>

        <div className="form-group">
          <label>Stock Ticker</label>
          <input
            type="text"
            value={ticker}
            onChange={(e) => setTicker(e.target.value.toUpperCase())}
            placeholder="e.g., AAPL"
          />
        </div>

        <div className="form-group">
          <label>Days to Forecast</label>
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        </div>

        <button onClick={handleSubmit}>🚀 Predict</button>

        <div className="result">
          {status === 'loading' && <p className="status">Loading...</p>}
          {status === 'failed' && <p className="error">❌ {error}</p>}
          {status === 'succeeded' && predictions.length > 0 && (
            <>
              <h2>Forecasted Prices</h2>
              <ul className="predictions-list">
                {predictions.map((pred, idx) => (
                  <li key={idx}>
                    <span>{pred.date}</span>
                    <strong>${pred.predicted_price}</strong>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
