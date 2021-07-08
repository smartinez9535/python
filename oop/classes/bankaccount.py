class BankAccount:
    # don't forget to add some default values for these parameters!
    all_accounts = []
    def __init__(self, int_rate = 0.01, balance = 0): 
        # your code here! (remember, instance attributes go here)
        # don't worry about user info here; we'll involve the User class soon
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
        else:
            print("Insufficient funds: Charging a $5 fee.")
            self.balance -= 5 #This could go under 0
        return self

    def display_account_info(self):
        print(f"Balance: ${self.balance}")
        return self

    def yield_interest(self):
        interest = 0

        if self.balance > 0:
            interest += (self.balance * self.int_rate)
        return self

    @classmethod
    def all_accounts_info(cls):
        # we use cls to refer to the class
        for account in cls.all_accounts:
            account.display_account_info()

account1 = BankAccount(0.05, 1500)
account2 = BankAccount(balance = 1000)

account1.deposit(200).deposit(150).deposit(300).withdraw(500).yield_interest().display_account_info()

account2.deposit(300).deposit(200).withdraw(200).withdraw(200).withdraw(200).withdraw(200).yield_interest().display_account_info()

BankAccount.all_accounts_info()

