from flask import Flask, jsonify, make_response
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])

@app.route('/session')
def get_session_data():
    # Define the API URL
    api_url = 'https://api.openf1.org/v1/sessions?country_name=Belgium&session_name=Sprint&year=2023'

    # Make a GET request to the external API
    response = requests.get(api_url)

    # If the request was successful, return the JSON data
    if response.status_code == 200:
        data = response.json()
        res = make_response(jsonify(data))
        res.headers['Access-Control-Allow-Origin'] = '*'
        return res
    else:
        return jsonify({"error": "Failed to retrieve data"}), response.status_code

if __name__ == '__main__':
    app.run(debug=True)
