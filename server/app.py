# app.py

from flask import Flask, request, jsonify
from player import Player
from avatar import Avatar
import csv

app = Flask(__name__)

avatar1 = Avatar("path/to/avatar/image.png", 1, 50, True)
player = Player("Alice", "alice123", "password123", avatar1,
                100, False, False, "inventory", 0, 1, 0, 0)

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

# this needs to be moved to the backend files
@app.route('/waste-check', methods=['POST'])
def waste_check():
    try:
        data = request.get_json()
        image_name = data['imageName']  # Get the image name from the request
        bin_num = data['binNum'] 
        
        bin_type = int(bins_data.get(image_name))

        # Check if bin_num is equal to image_name
        if bin_num == bin_type:
            return jsonify({'success': True}), 200
        else:
            return jsonify({'success': False}), 200

    except Exception as e:
        return jsonify({'error: bad item name': str(e)}), 500

# this needs to be moved to the backend files
@app.route('/test-waste-check', methods=['POST'])
def test_waste_check():
    try:
        data = request.get_json()
        image_name = data['imageName']  # Get the image name from the request

        bin_type = bins_data.get(image_name, 'General Waste Bin')

        # Return the bin type as JSON response
        return jsonify({'bin': bin_type}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/update-score', methods=['POST'])
def update_score():
    try:
        data = request.get_json()
        score = data['score_update']

        # Update the player's total score
        current = player.get_totalScore()
        player.set_totalScore(current + score)
        
        return jsonify({'score': current + score}), 200  # Return the updated score
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)