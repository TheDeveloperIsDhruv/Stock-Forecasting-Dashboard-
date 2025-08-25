# AI Powered Stock Price Predictor

This repository contains an **AI-powered stock price predictor** with:
- An **interactive frontend** (see `/frontend`)
- A **Flask backend** (see `/backend`) that connects to a machine learning model to forecast future stock prices.

---

## Features

- ML-powered future stock price predictions
- Beautiful, interactive web frontend
- Python Flask REST API backend
- Visualizations of historical & predicted prices

---

## Project Structure

---

## Getting Started

### Backend (Flask + ML)

1. **Setup Python virtual environment**
    ```bash
    cd backend
    python -m venv env
    # Activate:
    # Mac/Linux: source env/bin/activate
    pip install -r requirements.txt
    ```

2. **Run the server**
    ```bash
    python app.py
    ```

### Frontend

1. **Install dependencies**
    ```bash
    cd frontend
    npm install
    ```

2. **Start**
    ```bash
    npm start
    ```
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

- Enter a stock symbol and choose your forecast options.
- The frontend sends data to the backend ML service.
- Predicted prices are visualized in real time.

---

## Technologies

- **Backend:** Python, Flask, ML Model
- **Frontend:** React, Redux.
- **Visualization:** Matlplotlib

---

