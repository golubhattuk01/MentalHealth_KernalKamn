from flask import Flask, render_template, request, jsonify
from chat import get_response  # Assuming `get_response` function is defined in `chat.py`

from flask_cors import CORS 

app = Flask(__name__)
CORS(app)


@app.route("/", methods=["GET"])
def index_get():
    return render_template("base.html")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    
    if data is None or "message" not in data:
        # Invalid request if JSON data is missing or 'message' key is absent
        return jsonify({"error": "Invalid request. 'message' key is missing in JSON data."}), 400
    
    text = data["message"]
    print("Received text:", text)
    
    if not text.strip():  # Check if text is empty or whitespace
        return jsonify({"error": "Invalid message. Message cannot be empty."}), 400

    try:
        response = get_response(text)
        message = {"answer": response}
        return jsonify(message), 200
    except Exception as e:
        # Handle exceptions raised by get_response() function
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
