# Web Calculator

A web-based calculator project built to explore frontend development and Python backend integration.

The project is being developed in versions, starting with a JavaScript frontend prototype and moving towards a Flask-powered backend.

## Versions

- **v0.1.0 – Frontend prototype:** Calculator interface and button interactions using HTML, CSS, and vanilla JavaScript.
- **v0.2.0 – Flask backend:** Added a Python Flask application with a JSON-based calculation endpoint. Frontend-to-backend integration is being developed.

## Features

### Frontend
- Interactive calculator interface
- Number input
- Clear all (AC)
- Delete last character (DEL)
- Operator selection
- Dynamic display updates

### Python backend
- Flask application serves the calculator page.
- `/calculate` endpoint accepts HTTP `POST` requests.
- Reads incoming JSON data using `request.get_json()`.
- Supports addition, subtraction, multiplication, and division.
- Checks for division by zero and invalid operations.
- Returns calculation results or error messages as JSON using `jsonify()`.

## JSON Request Format

The backend expects a request body in this format:

```json
{
  "number1": 25,
  "number2": 15,
  "operation": "add"
}
```

Supported operation values:

- `add`
- `subtract`
- `multiply`
- `divide`

A successful calculation returns:

```json
{
  "result": 40
}
```

An unsuccessful calculation returns a JSON error message with an HTTP 400 status code.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Python
- Flask
- JSON
- HTTP POST requests

## Project Structure

```text
web-calculator_v01/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── web-calculator_v02/
│   └── web-calculator-py/
│       ├── app.py
│       ├── static/
│       │   ├── script.js
│       │   └── style.css
│       └── templates/
│           └── index.html
│
└── README.md
```

## Running Version 0.2 Locally

1. Clone the repository.
2. Open the `web-calculator_v02/web-calculator-py` directory.
3. Create and activate a Python virtual environment.
4. Install Flask:

   ```bash
   python -m pip install flask
   ```

5. Start the Flask application:

   ```bash
   python app.py
   ```

6. Open the local address printed by Flask in your browser (usually `http://127.0.0.1:5000/`).

## Learning Goals

- Understand how JavaScript handles browser interactions.
- Learn how Flask receives HTTP requests.
- Send structured data from JavaScript to Python using JSON.
- Understand request and response handling.
- Separate frontend responsibilities from backend calculation logic.
- Build towards a complete full-stack application.

## Future Improvements

- Complete and test JavaScript `fetch()` integration with the Flask endpoint.
- Improve input validation and error handling.
- Add decimal number support.
- Improve calculator functionality and user experience.

## Developer

Created as a personal learning project to explore frontend development, Python, Flask, and full-stack web development.
