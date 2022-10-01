from turtle import color
import colorama
import random
import math
from colorama import Fore, Back, Style
colorama.init()

colors = [Back.GREEN, Back.BLUE, Back.GREEN, Back.RED, Back.YELLOW, Back.CYAN, Back.WHITE, Back.MAGENTA]


def randomboard(size: int):
    """Generate a random board"""
    return [
        [2**random.randint(2, i + j) for i in range(1, size + 1)] for j in range(1, size + 1)
    ]


def print_board(board):
    """Print a pretty board"""
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
            print("+-------", end='')
        print("+")
        for i in line:
            print("|       ", end='')
        print("|")
        for i in line:
            print("|", end='')
            spaces = 7 - len(str(i))
            spaces_l = math.floor(spaces / 2)
            spaces_r = math.ceil(spaces / 2)
            for l in range(spaces_l):
                print(" ", end='')
            print(i, end='')
            for l in range(spaces_r):
                print(" ", end='')
        print("|")
        for i in line:
            print("|       ", end='')
        print("|")
    for i in line:
        print("+-------", end='')
    print("+")


board = randomboard(4)
print(board)
print_board(board)
