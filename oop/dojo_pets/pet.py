
class Pet:
    def __init__(self, name, type, tricks):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = 100
        self.energy = 100

    def sleep(self):
        print(f"{self.name} is sleeping.")
        self.energy += 25

    def eat(self, pet_food):
        print(f"{self.name} is eating {pet_food}.")
        self.energy += 5
        self.health += 10

    def play(self):
        print(f"{self.name} is playing.")
        self.health += 5
        self.energy -= 40

    def noise(self):
        print("Whimper")

class Cat(Pet):
    def __init__(self):
        super().__init__()
        self.type = "Cat"

    def noise(self):
        print("Meow!")


class Dog(Pet):
    def __init__(self):
        super().__init__()
        self.type = "Dog"

    def noise(self):
        print("Bark!")
