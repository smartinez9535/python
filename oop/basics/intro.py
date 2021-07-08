# Python
'''
#What is python
    #Programming language
        #Dynamic
        #High-level
            #Trivia: Python was written in C
    #Invented in 1991 Guido van Rossum
    #List of websites that use python for some or all of their backend
        #youtube, dropbox, google, quora, instagram, spotify, reddit, pinterest

#Why use python
    #Libraries
        #tons of resources and functionalities to accomplish different things
    #Readability
        #fairly close to english
    #Open source (free)
    #Community
        #Tons of people devs and contributors
    #Scope
        #Python is heavily used in many industries
        #scientific computing, machine learning, data analytics, game creation (pygame), web development, test automation

#Variables
    #container / stores data
    #vary / reassign data

hello = "hello there!"

#What is a valid variable name to the computer
is_this_a_valid_variable_name = "hello"
asfdsfsdfsdgsdgasdg = "hello"

# - Naming conventions
#Python naming convention for variable is: snake case
    #all lower case
    #words separated by underscores
first_name = "Shawn"
last_name = "Converse"
age = 28
#variable names need to describe the data the variable holds
hot_dog = "Monster Hunter Rise" #not descriptive, bad variable name
game = "Monster Hunter Rise" #good variable name

# Data Types

    #Primitive Types
        #Integers
            2345
        #Strings
            "hello's"
            '"there"'
        #Booleans
            True
            False
        #Floats
            3.5
            42.8

    #Composite Types/ collections / data structures
        #List / the same as JS arrays
            # 0 indexed / first index is 0
            [23, "hello", True, 3.2, ["this is a list in a list / nested list"]] # good practice is all data in a list is the same data type
        #Tuples
            # 0 indexed / just like lists
            # immutable / once made it cannot be changed
            (23, "hello", True, 3.2)
        #Dictionaries / the same as JS objects
            # Key / Value pairs
            # ALL KEYS ARE STRINGS
                # ints can be keys -> strings are best
                # tuples can be keys -> rarely if ever done
            person 1 = {
                "first_name": "Shawn",
                "last_name": "Converse",
                "age": 28,
                "interests": ["music", "games", "coding", "long walks on the beach"]
            }


# Conditionals

    if x > y:
        #do something
    elif y > x:
        #do something for the elif
    else:
        #do some default thing


# Loops

    for hot_dog in range(10): # use i for index typically
        print("hello")
'''


# Functions
    # Naming Conventions
        # functions should be snake case
    # ANY TIME YOU SEE SOMETHING FOLLOWED BY () IT IS A FUNCTION
# DEFINE
    # write the code of the function
    # this DOES NOT RUN THE FUNCTION
# Parameters
    # variables that hold the data passed to the function
def add_two_things(a, b):
    print(f"The value of a is {a}")
    print(f"The value of b is {b}")
    c = a + b
    print(c)

# CALL
    # calling will run the function
# Arguments
    # actual data passed to the function
    # arguments are assigned left to right
num1 = 432
num2 = 234
add_two_things(45, 57)
add_two_things(num1, num2)

def make_jelly_beans(sugar, water, coloring, syrup):
    jelly_beans = "Dem some gud beanz"
    return jelly_beans

make_jelly_beans("white surgar", "dirty pond water", "red coloring", "corn syrup")


# Return vs Print
print("=" * 80)

def multiply_print(spam, baked_beans):
    print(spam * baked_beans)

def multiply_return(spam, baked_beans):
    return(spam * baked_beans)

eggs = multiply_print(5, 5)
print(eggs)
eggs = multiply_return(5, 5)
print(eggs)

# Default Parameters
def greet(name = "", repeat = 2):
    print(f"Good Morning {name}!\n" * repeat)

greet()
greet("Shawn")
greet("Shawn", 5)
#greet(5, "Cody") this crashes
# Named arguments
greet(name = "Cody", repeat = 3)
greet(repeat = 17, name = "Christian")