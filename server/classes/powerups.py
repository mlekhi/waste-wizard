class Powerups:
    def __init__(self, name: str, description: str, preBought: bool, isOwned: bool):
        self.name = name
        self.description = description
        self.preBought = preBought
        self.isOwned = isOwned
        
    def isOwned(self):
        return self.isOwned

    def updatOwned(self, owned: bool):
        self.isOwned = owned
