num1 = 42 # variable declaration, number
num2 = 2.3 # variable declaration float
boolean = True # variable declaration boolean
string = 'Hello World' #variable declaration string
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] # variable declaration initialize list
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} # variable declaration initialize dictionary
fruit = ('blueberry', 'strawberry', 'banana') # variable declaration initialize tuple
print(type(fruit)) # log statement type check
print(pizza_toppings[1]) # log statement access list value
pizza_toppings.append('Mushrooms') # add list value
print(person['name']) # log statement access dictionary value
person['name'] = 'George' # dictionary change value
person['eye_color'] = 'blue' # dictionary add value
print(fruit[2]) # log statement access tuple value

if num1 > 45: # conditional if
    print("It's greater") # log statement string
else: # conditional else
    print("It's lower") # log statement string

if len(string) < 5: # length check conditional if
    print("It's a short word!") # log statement string
elif len(string) > 15: # length check conditional elif
    print("It's a long word!") # log statement string
else: # conditional else
    print("Just right!") # log statement string

for x in range(5): # for loop start, increment 1, sequence 0 - 4
    print(x) # log statement for loop end
for x in range(2,5): # for loop start, sequence 2 - 4, increment 1
    print(x) # log statement for loop end
for x in range(2,10,3): # for loop  start, sequence 2 - 9, increment 3
    print(x) # log statement for loop end
x = 0
while(x < 5): #while loop start
    print(x) # log statement
    x += 1 # increment
    # while loop end

pizza_toppings.pop() # list delete value at end of list
pizza_toppings.pop(1) # list delete value at index 1

print(person) # log statement full dictionary
person.pop('eye_color') # dictionary delete value 'eye-color'
print(person) # log statement full dictionary

for topping in pizza_toppings: # for loop start, increment 1, sequence through pizza_toppings
    if topping == 'Pepperoni': # conditional if string
        continue # for loop continue
    print('After 1st if statement') # log statement string
    if topping == 'Olives': # conditional if string
        break # for loop break

def print_hello_ten_times(): # function name
    for num in range(10): # for loop start, increment 1, sequence num - 9
        print('Hello') # log statement string

print_hello_ten_times() #invoking function

def print_hello_x_times(x): # function name, parameter x
    for num in range(x): # for loop start, increment 1, sequence num - x
        print('Hello') # log statement string

print_hello_x_times(4) # invoking function, argument 4

def print_hello_x_or_ten_times(x = 10): # function name, parameter x or 10 if undefined
    for num in range(x):  # for loop start, increment 1, sequence num - x
        print('Hello') # log statement string


print_hello_x_or_ten_times() # invoking function
print_hello_x_or_ten_times(4) # invoking function, argument 4


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)