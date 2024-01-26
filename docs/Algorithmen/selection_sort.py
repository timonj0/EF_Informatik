import timeit
from random import shuffle
from copy import deepcopy


def selection_sort(a):
    for j in range(len(a) - 1):
        key = a[j]
        index = j
        for i in range(j + 1, len(a)):
            if a[i] < a[index]:
                index = i
        a[j] = a[index]
        a[index] = key
    return a


def measure(n, i):
    to_sort = list(range(n))
    shuffle(to_sort)

    exec_time = timeit.timeit(
        lambda: selection_sort(deepcopy(to_sort)), number=i)
    print(
        f'Selection Sort. Sorted {n} numbers {i} times. Execution time: {exec_time / i}')


measure(100, 100)
measure(1000, 50)
measure(10000, 5)
measure(15000, 5)
measure(20000, 5)
