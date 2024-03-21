from wasteBin import *


class WasteItem:
    def __init__(self, type: str, imagePath: str, itemInfo: str, wasteBin: WasteBin):
        self.type = type
        self.imagePath = imagePath
        self.itemInfo = itemInfo
        self.wasteBin = wasteBin

    def getType(self) -> str:
        return self.type

    def setType(self, type):
        self.type = type

    def getImagePath(self) -> str:
        return self.imagePath

    def setImagePath(self, path):
        self.imagePath = path

    def displayInfo(self) -> str:
        return self.itemInfo

    def setItemInfo(self, itemInfo):
        self.itemInfo = itemInfo

    def getWasteBin(self) -> WasteBin:
        return self.wasteBin

    def setWasteBin(self, wasteBin):
        self.wasteBin = wasteBin
