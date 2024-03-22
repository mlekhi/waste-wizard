# app.py

from flask import Flask, request, jsonify
import csv

app = Flask(__name__)

def read_bins_csv():
    bins = {}
    with open('game-data/waste.csv', 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            bins[row['image_name']] = row['bin_type']
    return bins

bins_data = read_bins_csv()

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/waste-check', methods=['POST'])
def waste_check():
    try:
        data = request.get_json()
        image_name = data['imageName']  # Get the image name from the request

        bin_type = bins_data.get(image_name, 'General Waste Bin')

        # Return the bin type as JSON response
        return jsonify({'bin': bin_type}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)