# app.py

from flask import Flask, request, jsonify
from classes.wasteItem import WasteItem
from classes.educationalFact import EducationalFact
from classes.player import Player
from classes.avatar import Avatar
import csv
import random

app = Flask(__name__)

waste_bins = [0, 1, 2]
waste_items = []
with open('game-data/waste.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        image_path = row['image_name']
        bin_type = int(row['bin_type'])
        waste_item = WasteItem(image_path, bin_type)
        waste_items.append(waste_item)

educational_facts = []
with open('game-data/facts.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        fact_number = int(row['factNumber'])
        fact_text = row['factText']
        educational_fact = EducationalFact(fact_number, fact_text)
        educational_facts.append(educational_fact)

bins_data = {}
with open('game-data/waste.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        image_name = row['image_name']
        bin_type = int(row['bin_type'])
        bins_data[image_name] = bin_type

avatars = []
with open('game-data/avatars.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        avatarID = int(row['avatarID'])
        cost = int(row['cost'])
        owned = row['owned'].lower() == 'true'
        avatar = Avatar(avatarID, cost, owned)
        avatars.append(avatar)

player = Player()


@app.route('/')
def hello():
    return 'Hello, World!'


@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        username = data['username']
        password = data['password']

        loggedin_player = player.login(username, password)
        return jsonify({'Login Success': loggedin_player, 'Status': 200}), 200

    except Exception as e:
        return jsonify({'error': str(e), 'Status': 500}), 500


@app.route('/logout', methods=['get'])
def logout():
    try:
        player.set_coins(500)
        logoutStatus = player.logout()
        return jsonify({'Logout Success': logoutStatus, 'Status': 200}), 200

    except Exception as e:
        return jsonify({'error': str(e), 'Status': 500}), 500


@app.route('/logged')
def test():
    return loggedin_player.get_coins()

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
        current = player.get_totalScore()

        # Update the player's total score
        player.set_totalScore(current + score)
        updated = player.get_totalScore()

        return jsonify({'score': updated}), 200  # Return the updated score
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/get-score')
def get_score():
    current_score = player.get_totalScore()

    if current_score is not None:
        return jsonify({'score': current_score}), 200
    else:
        return jsonify({'error': 'Score not found'}), 404


@app.route('/get-fact')
def get_fact():
    fact_number = random.randint(0, len(educational_facts)-1)
    fact = educational_facts[fact_number]

    if fact is not None:
        return fact.get_text()
    else:
        return f"Fact {fact_number} not found."


if __name__ == '__main__':
    app.run(debug=True)
