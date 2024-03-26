class Avatar:
    def __init__(self):
        self._imagePath = None     # string
        self._avatarID = None       # integer
        self._cost = None               # integer
        self._owned = None             # boolean

    def __repr__(self) -> str:
        return f"imagePath: {self._imagePath}, avatarID:{self._avatarID}, cost:{self._cost}, owned:{self._owned}"

    def getImagePath(self):
        return self._imagePath

    def setImagePath(self, path: str):
        self._imagePath = path

    def getAvatarID(self):
        return self._avatarID

    def setAvatarID(self, avatarID: int):
        self._avatarID = avatarID

    def getCost(self):
        return self._cost

    def setCost(self, cost: int):
        self._cost = cost

    def isOwned(self):
        return self._owned

    def setIsOwned(self, owned: bool):
        self._owned = owned