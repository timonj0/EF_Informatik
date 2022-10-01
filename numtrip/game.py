from turtle import color
import colorama
import random
import math
from colorama import Fore, Back, Style
colorama.init()

colors = [Back.GREEN, Back.BLUE, Back.GREEN, Back.RED, Back.YELLOW, Back.CYAN, Back.WHITE, Back.MAGENTA]

# Create a random gameboard
def randomboard(size: int):
    return [
        [2**random.randint(2, i+j) for i in range(1, size+1)] for j in range(1, size+1)
    ] 

# Print a pretty board
def print_board(board: list):
    max_len = 1
    size = len(board)

    # Get the length of the longest number on the board
    for l in board:
        for i in l:
            if len(str(i)) > max_len:
                max_len = len(str(i))

    # Print board
    for line in board:
        for i in line:
            print("+-----", end='')
        print("+")
        for i in line:
            print("|     ", end='')
        print("|")
        for i in line:
            spaces = 5-len(str(i))
            spaces_l = math.floor(spaces/2)
            spaces_r = math.ceil(spaces/2)
            for i in range(spaces_l):
                print(" ", end='')
            print(str(i), end='')
            for i in range(spaces_r):
                print(" ", end='')
        print(" ")

        
board = randomboard(4)
print(board)
print_board(board)
                


""" for n in line:
            spaces = max_len - len(str(n))
            print(colors[int(math.log2(n))-1] + str(n), end='')
            print(colorama.Style.RESET_ALL, end='')
            for i in range(3 + spaces):
                print(" ", end='')
        print(" ")
 """
