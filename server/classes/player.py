from classes.avatar import *
import csv


class Player:
    def __init__(self):
        self._name = None                    # String
        self._userID = None                  # String
        self._userPassword = None            # String
        self._currentAvatar = None           # Avatar Object
        self._coins = None                  # Int
        self._isTeacher = None          # Boolean
        self._isDeveloper = None      # Boolean
        self._inventory = None          # Inventory Object
        self._totalScore = 0        # Integer
        self._lastLevel = None          # Integer

    def update_accounts_csv(self):
        with open('game-data/accounts.csv', 'a', newline='') as csvfile:
            fieldnames = ['Name', 'UserID', 'Password', 'AvatarID', 'Coins',
                          'IsTeacher', 'IsDeveloper', 'Inventory', 'LastLevel', 'TotalScore']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

            # Write the player's information to the CSV file
            writer.writerow({
                'Name': self._name,
                'UserID': self._userID,
                'Password': self._userPassword,
                'AvatarID': self._currentAvatar,
                'Coins': self._coins,
                'IsTeacher': self._isTeacher,
                'IsDeveloper': self._isDeveloper,
                'Inventory': self._inventory,
                'LastLevel': self._lastLevel,
                'TotalScore': self._totalScore,
            })

    def login(self, username, password) -> bool:
        count = 2
        with open('game-data/accounts.csv', newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                if row['userID'] == username and row['userPassword'] == password:
                    # Initialize the current Player object with the matched credentials
                    self._name = row['name']
                    self._userID = row['userID']
                    self._userPassword = row['userPassword']
                    # self._currentAvatar = Avatar(row['AvatarPath'], int(row['AvatarID']), int(row['AvatarCost']), bool(row['Owned']))
                    self._coins = int(row['coins'])
                    self._isTeacher = row['isTeacher'].lower() == 'true'
                    self._isDeveloper = row['isDeveloper'].lower() == 'true'
                    self._inventory = row['inventory']
                    self._totalScore = int(row['totalScore'])
                    self._lastLevel = int(row['lastLevel'])
                    return True
                count += 1

          # If the loop completes without finding a matching user, add new entry at the bottom
        with open('game-data/accounts.csv', 'a', newline='') as csvfile:
            fieldnames = ['userID', 'userPassword', 'name', 'AvatarPath', 'coins',
                          'isTeacher', 'isDeveloper', 'inventory', 'totalScore', 'lastLevel']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writerow({
                'userID': username,
                'userPassword': password,
                'name': f'User{count}',
                'AvatarPath': None,
                'coins': 0,
                'isTeacher': False,
                'isDeveloper': False,
                'inventory': None,
                'totalScore': 0,
                'lastLevel': 0
            })
        return False

    def logout(self):
        rows = []
        updated = False

        # Read the CSV file and locate the row to update
        with open('game-data/accounts.csv', 'r', newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                if row['userID'] == self._userID and row['userPassword'] == self._userPassword:
                    # Update the row with new data
                    row.update({'name': self._name, 'AvatarPath': self._currentAvatar, 'coins': self._coins, 'isTeacher': self._isTeacher,
                               'isDeveloper': self._isDeveloper, 'inventory': self._inventory, 'totalScore': self._totalScore, 'lastLevel': self._lastLevel})
                    updated = True
                rows.append(row)

        # Write the updated data back to the CSV file
        with open('game-data/accounts.csv', 'w', newline='') as csvfile:
            fieldnames = ['userID', 'userPassword', 'name', 'AvatarPath', 'coins',
                          # Update fieldnames as per your CSV
                          'isTeacher', 'isDeveloper', 'inventory', 'totalScore', 'lastLevel']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(rows)

        return updated

    def purchaseItem(self, item, price):
        # needs to be implemented
        # coins take away price
        # add the item to the inventory object
        return True

    def get_playerType(self):
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
        self.update_accounts_csv()

    # Getter and setter for userID
    def get_userID(self):
        return self._userID

    def set_userID(self, userID):
        self._userID = userID
        self.update_accounts_csv()

    # Getter and setter for userPassword
    def get_userPassword(self):
        return self._userPassword

    def set_userPassword(self, userPassword: str):
        self._userPassword = userPassword
        self.update_accounts_csv()

    # Getter and setter for currentAvatar
    def get_currentAvatar(self):
        return self._currentAvatar

    def set_currentAvatar(self, newAvatar: Avatar):
        self._currentAvatar = newAvatar
        self.update_accounts_csv()

    # Getter and setter for coins
    def get_coins(self):
        return self._coins

    def set_coins(self, coins: int):
        self._coins = coins
        self.update_accounts_csv()

    # Getter and setter for isTeacher
    def is_teacher(self):
        return self._isTeacher

    def set_isTeacher(self, isTeacher: bool):
        self._isTeacher = isTeacher
        self.update_accounts_csv()

    # Getter and setter for isDeveloper
    def is_developer(self):
        return self._isDeveloper

    def set_isDeveloper(self, isDeveloper: bool):
        self._isDeveloper = isDeveloper
        self.update_accounts_csv()

    # Getter and setter for inventory
    def get_inventory(self):
        return self._inventory

    def set_inventory(self, inventory):
        self._inventory = inventory
        self.update_accounts_csv()

    # Getter and setter for lastLevel
    def get_lastLevel(self):
        return self._lastLevel

    def set_lastLevel(self, lastLevel):
        self._lastLevel = lastLevel
        self.update_accounts_csv()

    # Getter and setter for totalScore
    def get_totalScore(self):
        return self._totalScore

    def set_totalScore(self, totalScore):
        self._totalScore = totalScore
        self.update_accounts_csv()


player_instance = Player()
player = player_instance.login("mlekhi", "password")
if player:
    print("Login successful")
