x = [ [5,2,3], [10,8,9] ] 
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

'''
x[1][0] = 15
print(x)

students[0]['last_name'] = 'Bryant'
print(students)

sports_directory['soccer'][0] = 'Andres'
print(sports_directory)

z[0]['y'] = 30
print(z)
'''


def iteratedictionary(some_list):
    for i in some_list:
        print("first_name - " + i.get('first_name') + ", last_name - " + i.get('last_name'))

iteratedictionary(students)


def iteratedictionary2(key_name, some_list):
    for i in some_list:
        print(i.get(key_name))

iteratedictionary2('first_name',students)
iteratedictionary2('last_name',students)



dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printinfo(some_dict):
    for i in some_dict:
        print(len(some_dict.get(i)), i.upper())
        for o in some_dict.get(i):
            print(o)

printinfo(dojo)