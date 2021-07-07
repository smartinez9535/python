class User:		# here's what we have so far
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    # adding the deposit method
    def make_deposit(self, amount):	# takes an argument that is the amount of the deposit
        self.account_balance += amount
        return self	# the specific user's account increases by the amount of the value received

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.account_balance}")
        return self

    def transfer_money(self, other_user, amount):
        other_user.account_balance += amount
        self.account_balance -= amount
        return self


guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")
john = User("John Doe", "john@python.com")

guido.make_deposit(200).make_deposit(200).make_deposit(200).make_withdrawal(350).display_user_balance()

monty.make_deposit(300).make_deposit(100).make_withdrawal(50).make_withdrawal(150).display_user_balance()

john.make_deposit(100).make_withdrawal(30).make_withdrawal(20).make_withdrawal(10).display_user_balance()

guido.transfer_money(john, 100).display_user_balance()
john.display_user_balance()



