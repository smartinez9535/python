import pet
class Ninja:
    def __init__(self, first_name , last_name , treats , pet_food , pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet

    def walk(self, pet):
        print(f"{self.first_name} walks {self.pet.name}")
        self.pet.play()

    def feed(self, pet, pet_food):
        print(f"{self.first_name} feeds {self.pet.name} {pet_food}")
        self.pet.eat(pet_food)

    def bathe(self, pet):
        print(f"{self.first_name} cleans {self.pet.name}")
        self.pet.noise()

ninja1 = Ninja("John", "Doe", "Bone", "Kibble", pet.Pet("Fido", "Beagle", "Fetch"))
ninja1.feed(ninja1.pet, ninja1.pet_food)
ninja1.walk(ninja1.pet)
ninja1.bathe(ninja1.pet)
