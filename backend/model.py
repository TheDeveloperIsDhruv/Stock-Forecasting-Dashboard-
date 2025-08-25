import yfinance as yf
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import numpy as np
from datetime import datetime, timedelta

def train_and_predict(ticker, predict_days):
    df = yf.download(ticker, period="6mo", interval="1d")
    df = df[['Close']].dropna().reset_index()


    df['Days'] = (df['Date'] - df['Date'].min()).dt.days
    X = df[['Days']]
    y = df['Close']

    # Split data into train and test sets (80% train, 20% test)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    model = LinearRegression()
    model.fit(X_train, y_train)

     # Predict future prices for the next 'predict_days'
    last_day = df['Days'].max()
    future_day_indices = np.arange(last_day + 1, last_day + predict_days + 1).reshape(-1, 1)
    predicted_prices = model.predict(future_day_indices)

    # Generate future dates corresponding to predictions
    last_date = df['Date'].max()
    future_dates = [last_date + timedelta(days=i) for i in range(1, predict_days + 1)]

    # Combine dates and predictions into a list of dictionaries
    pred_data = [
        {"date": date.strftime("%Y-%m-%d"), "predicted_price": round(float(price), 2)}
        for date, price in zip(future_dates, predicted_prices)
    ]

    
    # test_score = model.score(X_test, y_test)
    # print(f"Model Test Score: {test_score:.2f}")

    return {"ticker": ticker, "predictions": pred_data}
