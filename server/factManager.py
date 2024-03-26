import csv
from educationalFact import *

class EducationalFactsManager:
    def __init__(self):
        self.facts = []
        self.load_facts_from_csv()

    def load_facts_from_csv(self):
        with open("game-data/facts.csv", newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                fact_number = int(row['factNumber'])
                fact_text = row['factText']
                fact = EducationalFact(fact_number, fact_text)
                self.facts.append(fact)

    def get_fact_by_number(self, fact_number):
        for fact in self.facts:
            if fact.factNumber == fact_number:
                return fact.factText
        return None  # Return None if fact number not found