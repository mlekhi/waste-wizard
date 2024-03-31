class Avatar:
    def __init__(self, avatar_id=None, cost=None, name=None):
        self._avatarID = avatar_id  # integer
        self._cost = cost  # integer
        self._name = name  # boolean

    def get_cost(self):
        return self._cost

    def get_name(self):
        return self._name