def countdown(num):
    countdown_list = []
    for i in range(num, -1, -1):
        countdown_list.append(i)
    return countdown_list

print(countdown(5))


def print_and_return(x):
    print(x[0])
    return x[1]

print(print_and_return([1,2]))


def first_plus_length(x):
    return (x[0] + len(x))

print(first_plus_length([1,2,3,4,5]))


def values_greater_than_second(x):
    if len(x) < 2:
        return False
    result = []
    for i in x:
        if i > x[1]:
            result.append(i)
    print(len(result))
    return result

print(values_greater_than_second([5,2,3,2,1,4]))
print(values_greater_than_second([3]))


def this_length_that_value(a,b):
    result = []
    for i in range(0, a):
        result.append(b)
    return result

print(this_length_that_value(4,7))
print(this_length_that_value(6,2))
