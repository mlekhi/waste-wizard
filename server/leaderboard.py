class Leaderboard:
    def __init__(self, playerList):
        # this player list is always meant to be sorted by high score
        self._playerList = playerList
        self._currentPage = 1  # Starting from the first page

    # updates the ordered list of the players by high score using bubble sort
    def updateLeaderboard(self):
        n = len(self._playerList)
        for i in range(n):
            for j in range(0, n-i-1):
                if self._playerList[j].highScore > self._playerList[j+1].highScore:
                    self._playerList[j], self._playerList[j +
                                                          1] = self._playerList[j+1], self._playerList[j]

    def nextPage(self):
        if self._currentPage < self.totalPages():
            self._currentPage += 1

    def pastPage(self):
        if self._currentPage > 1:
            self._currentPage -= 1

    def totalPages(self):
        # Assuming 10 players per page
        return (len(self._playerList) + 9) // 10
