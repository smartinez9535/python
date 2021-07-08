class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = [BankAccount(int_rate=0.02, balance=0)]

    def make_deposit(self, amount, account_number):	
        self.account[account_number].deposit(amount)
        return self	

    def make_withdrawal(self, amount, account_number):
        self.account[account_number].withdraw(amount)
        return self

    def display_user_balance(self, account_number):
        self.account[account_number].display_account_info()
        return self
        
    def add_account(self):
        self.account.append(BankAccount(int_rate=0.02, balance=0))

    def transfer_money(self, account_number, other_user, other_account_number, amount):
        other_user.account[other_account_number].deposit (amount)
        self.account[account_number].withdraw(amount)
        return self
    

class BankAccount:
    all_accounts = []
    def __init__(self, int_rate = 0.02, balance = 0): 
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
        for account in cls.all_accounts:
            account.display_account_info()


john = User("John Doe", "john@python.com")
bill = User("Bill Boe", "bill@python.com")
john.make_deposit(100, 0)
john.display_user_balance(0)
john.add_account()
john.display_user_balance(1)
john.transfer_money(0, bill, 0, 50)
bill.display_user_balance(0)