import timeit
from random import shuffle
from copy import deepcopy

n = 100
i = 100


def insertion_sort(a):
    for j in range(1, len(a)):
        key = a[j]
        i = j - 1
        while i >= 0 and a[i] > key:
            a[i + 1] = a[i]
            i = i - 1
        a[i + 1] = key
    return a


def measure(n, i):
    to_sort = list(range(n))
    shuffle(to_sort)

    exec_time = timeit.timeit(
        lambda: insertion_sort(deepcopy(to_sort)), number=i)
    print(
        f'Insertion Sort. Sorted {n} numbers {i} times. Execution time: {exec_time / i}')


measure(100, 100)
measure(1000, 50)
measure(10000, 5)
measure(15000, 5)
measure(20000, 5)
