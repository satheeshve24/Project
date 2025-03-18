from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Sample bus stop data (Modify with real GPS coordinates)
bus_stops = [
    {"id": 1, "name": "Birla Planetarium", "lat": 13.0827, "lon": 80.2707},
    {"id": 2, "name": "Intermediate Stop", "lat": 13.0900, "lon": 80.2600},
    {"id": 3, "name": "RMK Engineering College", "lat": 13.2000, "lon": 80.1500}
]

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/map")
def map_view():
    return render_template("map.html")

@app.route("/api/bus-stops")
def get_bus_stops():
    return jsonify(bus_stops)

if __name__ == "__main__":
    app.run(debug=True)
