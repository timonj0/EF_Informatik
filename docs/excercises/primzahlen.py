numbers = []
for i in range(100):
    numbers.append(i)
for i in [2, 3, 5, 7]:
    for a in range(round(100/i+1)):
        if a*i in numbers:
            numbers.remove(a*i)
print(numbers)
