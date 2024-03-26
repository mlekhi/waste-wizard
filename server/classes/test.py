from educationalFact import *
from wasteItem import *
import csv

def main():
    waste_bins = [0,1,2]
    waste_items = []
    with open('../game-data/waste.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            image_path = row['image_name']
            bin_type = int(row['bin_type'])
            waste_item = WasteItem(image_path, bin_type)
            waste_items.append(waste_item)

    educational_facts = []
    with open('../game-data/facts.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            fact_number = int(row['factNumber'])
            fact_text = row['factText']
            educational_fact = EducationalFact(fact_number, fact_text)
            educational_facts.append(educational_fact)

if __name__ == "__main__":
    main()  