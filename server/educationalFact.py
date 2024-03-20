class EducationalFact:
    def __init__(self, factNumber: int, factText: str):
        self.factNumber = factNumber
        self.factText = factText

    def getFactNumber(self) -> int:
        return self.factNumber

    def getFactText(self) -> str:
        return self.factText

    def setfactNumber(self, factNumber: int):
        self.factNumber = factNumber

    def setFactText(self, factText: str):
        self.factText = factText
