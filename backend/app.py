from flask import Flask, request, jsonify
from flask_cors import CORS
from model import train_and_predict

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    ticker = data.get('ticker', 'AAPL')
    days = int(data.get('days', 30))
    try:
        result = train_and_predict(ticker, days)
        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
