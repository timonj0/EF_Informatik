import timeit
from random import shuffle
from copy import deepcopy

n = 100
i = 100


def merge(lower, upper):
    sorted = []
    while len(lower) > 0 and len(upper) > 0:
        if lower[0] < upper[0]:
            sorted.append(lower.pop(0))
        else:
            sorted.append(upper.pop(0))
    if len(lower) > 0:
        sorted.extend(lower)  # liste lower an sorted anhängen
    elif len(upper) > 0:
        sorted.extend(upper)  # liste upper an sorted anhängen

    return sorted


def merge_sort(data):
    if len(data) <= 1:
        return data
    else:
        middle = len(data) // 2
        left = data[0: middle]
        right = data[middle: len(data)]
        left = merge_sort(left)
        right = merge_sort(right)
        return merge(left, right)


def measure(n, i):
    to_sort = list(range(n))
    shuffle(to_sort)

    exec_time = timeit.timeit(
        lambda: merge_sort(deepcopy(to_sort)), number=i)
    print(
        f'Merge Sort. Sorted {n} numbers {i} times. Execution time: {exec_time / i}')


measure(100, 100)
measure(1000, 50)
measure(10000, 5)
measure(15000, 5)
measure(20000, 5)
