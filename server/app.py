# app.py

from flask import Flask, request, jsonify
from avatar import Avatar
from factManager import EducationalFactsManager
import csv
import random

app = Flask(__name__)

# move to the backend!!!!
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
        player.update_highScore(score)
        updated = player.get_totalScore()

        return jsonify({'score': updated}), 200  # Return the updated score
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/get-fact')
def get_fact():
    facts_manager = EducationalFactsManager()

    fact_number = random.randint(1, len(facts_manager.facts))
    fact_text = facts_manager.get_fact_by_number(fact_number)
    if fact_text is not None:
        return fact_text
    else:
        return f"Fact {fact_number} not found."

if __name__ == '__main__':
    app.run(debug=True)