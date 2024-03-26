class Avatar:
    def __init__(self, imagePath: str, avatarID: int, cost: int, owned: bool):
        self._imagePath = imagePath     # string
        self._avatarID = avatarID       # integer
        self._cost = cost               # integer
        self._owned = owned             # boolean

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


# avatar1 = Avatar("test/path/avatar", 123, 100, True)

# print(avatar1.getImagePath())
# print(avatar1.getAvatarID())
# print(avatar1.getCost())
# print(avatar1.isOwned())
