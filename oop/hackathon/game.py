from classes.ninja import Ninja
from classes.pirate import Pirate

michelangelo = Ninja("Michelanglo")

jack_sparrow = Pirate("Jack Sparrow")

michelangelo.attack(jack_sparrow)
jack_sparrow.show_stats()

num = 0
# turn indicator is being ignored for some reason
def action_choice(num):
    turn_indicator = num

    if michelangelo.health <= 0:
        print("Jack Sparrow wins!")

    elif jack_sparrow.health <= 0:
        print("Michelangelo wins!")

    if turn_indicator == 0:
        print('What should the ninja do?')
        print('1: attack, 2: heal, 3: special move')
        turn_indicator = 1
        print(turn_indicator)
        x = input()

        if x == 1:
            michelangelo.attack(jack_sparrow)
            action_choice(turn_indicator)

        elif x == 2:
            michelangelo.heal()
            action_choice(turn_indicator)

        elif x == 3:
            michelangelo.special_move(jack_sparrow)
            action_choice(turn_indicator)

        elif x == 'exit':
            print("Exiting")

        else:
            print('Enter a value from 1 to 3')
            turn_indicator = 0
            action_choice(turn_indicator)

    elif turn_indicator == 1:
        print('What should the pirate do?')
        print('1: attack, 2: heal, 3: special move')
        turn_indicator = 0
        x = input()

        if x == 1:
            jack_sparrow.attack(michelangelo)
            action_choice(turn_indicator)

        elif x == 2:
            jack_sparrow.heal()
            action_choice(turn_indicator)

        elif x == 3:
            jack_sparrow.special_move(michelangelo)
            action_choice(turn_indicator)

        elif x == 'exit':
            print("Exiting")

        else:
            print('Enter a value from 1 to 3')
            turn_indicator = 0
            action_choice(turn_indicator)
    
action_choice(num)
