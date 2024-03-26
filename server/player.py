from avatar import *
import csv

class Player:
    def __init__(self, name: str, userID: str, userPassword: str, currentAvatar: Avatar, coins: int, isTeacher: bool, isDeveloper: bool,
                 inventory: str, highScore: int, lastLevel: int, totalScore: int, survivalTimeRecord: int):
        self._name = name                    # String
        self._userID = userID                # String
        self._userPassword = userPassword    # String
        self._currentAvatar = currentAvatar  # Avatar Object
        self._coins = coins                  # Int
        self._isTeacher = isTeacher          # Boolean
        self._isDeveloper = isDeveloper      # Boolean
        self._inventory = inventory          # Inventory Object
        self._highScore = highScore          # Integer
        self._totalScore = totalScore        # Integer
        self._lastLevel = lastLevel          # Integer
        # self._survivalTimeRecord = survivalTimeRecord  # Integer

    def login(self, username, password):
        if username == self._userID and password == self._password:
            return "Login successful"
        else:
            return "Login failed"

    def purchaseItem(self, item, price):
        # needs to be implemented
        # coins take away price
        # add the item to the inventory object
        return True

    def playerType(self):
        if self._isDeveloper == False and self._isTeacher == False:
            return "Student"
        elif self._isDeveloper == True and self._isTeacher == False:
            return "Developer"
        elif self._isDeveloper == False and self._isTeacher == True:
            return "Teacher"
        else:
            return "Admin"

    # Getter and setter for name

    def get_name(self):
        return self._name

    def set_name(self, name):
        self._name = name

    # Getter and setter for userID
    def get_userID(self):
        return self._userID

    def set_userID(self, userID):
        self._userID = userID

    # Getter and setter for userPassword
    def get_userPassword(self):
        return self._userPassword

    def set_userPassword(self, userPassword: str):
        self._userPassword = userPassword

    # Getter and setter for currentAvatar
    def get_currentAvatar(self):
        return self._currentAvatar

    def set_currentAvatar(self, newAvatar: Avatar):
        self._currentAvatar = newAvatar

    # Getter and setter for coins
    def get_coins(self):
        return self._coins

    def set_coins(self, coins: int):
        self._coins = coins

    # Getter and setter for isTeacher
    def is_teacher(self):
        return self._isTeacher

    def set_isTeacher(self, isTeacher: bool):
        self._isTeacher = isTeacher

    # Getter and setter for isDeveloper
    def is_developer(self):
        return self._isDeveloper

    def set_isDeveloper(self, isDeveloper: bool):
        self._isDeveloper = isDeveloper

    # Getter and setter for inventory
    def get_inventory(self):
        return self._inventory

    def set_inventory(self, inventory):
        self._inventory = inventory

    # Getter and setter for highScore
    def get_highScore(self):
        return self._highScore

    def set_highScore(self, highScore):
        self._highScore = highScore

    def update_highScore(self, highScore):
        self._highScore += highScore

    # Getter and setter for lastLevel
    def get_lastLevel(self):
        return self._lastLevel

    def set_lastLevel(self, lastLevel):
        self._lastLevel = lastLevel

    # Getter and setter for totalScore
    def get_totalScore(self):
        return self._totalScore

    def set_totalScore(self, totalScore):
        self._totalScore = totalScore

    # Getter and setter for survivalTimeRecord
    def get_survivalTimeRecord(self):
        return self._survivalTimeRecord

    def set_survivalTimeRecord(self, survivalTimeRecord):
        self._survivalTimeRecord = survivalTimeRecord


# # Example usage:
# avatar1 = Avatar("test/path/avatar", 123, 100, True)
# player1 = Player("Alice", "alice123", "password123", avatar1,
#                  100, False, False, "inventory", 0, 1, 0, 0)

# # Getters
# print(player1.get_name())
# print(player1.get_userID())
# print(player1.get_userPassword())
# print(player1.get_currentAvatar())
# print(player1.get_coins())
# print(player1.is_teacher())
# print(player1.is_developer())
# print(player1.get_inventory())
# print(player1.get_highScore())
# print(player1.get_lastLevel())
# print(player1.get_totalScore())
# print(player1.get_survivalTimeRecord())

# # Setters
# player1.set_name("Bob")
# player1.set_userID("bob123")
# player1.set_userPassword("newpassword123")
# # player1.set_currentAvatar("avatar2")
# player1.set_coins(200)
# player1.set_isTeacher(True)
# player1.set_isDeveloper(True)
# player1.set_inventory("new_inventory")
# player1.set_highScore(500)
# player1.set_lastLevel(2)
# player1.set_totalScore(1000)
# player1.set_survivalTimeRecord(120)

# # Getters
# print(player1.get_name())
# print(player1.get_userID())
# print(player1.get_userPassword())
# print(player1.get_currentAvatar())
# print(player1.get_coins())
# print(player1.is_teacher())
# print(player1.is_developer())
# print(player1.get_inventory())
# print(player1.get_highScore())
# print(player1.get_lastLevel())
# print(player1.get_totalScore())
# print(player1.get_survivalTimeRecord())
