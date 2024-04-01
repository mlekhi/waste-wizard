"""
Represents an avatar, including its ID, cost, and name.

Attributes:
    avatarID (int): The unique identifier for the avatar.
    cost (int): The cost associated with acquiring the avatar.
    name (str): The name of the avatar.
"""

class Avatar:
    """
    Initializes a new instance of the Avatar class.
    """
    def __init__(self, avatar_id=None, cost=None, name=None):
        self._avatarID = avatar_id  # integer
        self._cost = cost  # integer
        self._name = name  # boolean

    """
    Gets the cost of the avatar

    Returns:
        int: The cost of the avatar
    """
    def get_cost(self):
        return self._cost

    """
    Gets the name of the avatar

    Returns:
        str: The name of the avatar
    """
    def get_name(self):
        return self._name

    def get_avatarID(self):
        return self._avatarID