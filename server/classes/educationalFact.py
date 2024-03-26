class EducationalFact:
    def __init__(self, fact_number=None, fact_text=None):
        self.factNumber = fact_number
        self.factText = fact_text

    def get_text(self):
        return self.factText