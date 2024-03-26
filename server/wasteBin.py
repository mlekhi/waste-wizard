class WasteBin:
    def __init__(self, binType: int, imagePath: str):
        self._binType = binType
        self._imagePath = imagePath

    def getBin(self) -> int:  # return the bintype
        return self._binType

    def setBinType(self, binType):  # set the bintype
        self._binType = binType

    def getImagePath(self) -> str:  # return full pat for bin image
        return self._imagePath

    def setImagePath(self, imagePath):  # set the bin image path
        self._imagePath = imagePath
