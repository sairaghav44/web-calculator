from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.get_json()
    number1 = data.get("number1")
    number2 = data.get("number2")
    operation = data.get("operation")

    if operation == "add":
        result = number1 + number2
    elif operation == "subtract":
        result = number1 - number2
    elif operation == "multiply":
        result = number1 * number2
    elif operation == "divide":
        if number2 != 0:
            result = number1 / number2
        else:
            return jsonify({"error": "Division by zero is not allowed."}), 400
    else:
        return jsonify({"error": "Invalid operation."}), 400

    return jsonify({"result": result})
    
if __name__ == "__main__":
    app.run(debug=True)