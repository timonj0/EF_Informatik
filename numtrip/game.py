from turtle import color
import colorama
import random
import math
import json

gamedata = {}
gamedata_path = "./gamedata.json"


def randomboard(size: int):
    """Generate a random board"""
    return [
        [2**random.randint(2, i + j) for i in range(1, size + 1)] for j in range(1, size + 1)
    ]


def print_board(board_to_print):
    """Print a pretty board"""
    max_len = 1
    board = board_to_print

    # Get the length of the longest number on the board
    for l in board:
        for i in l:
            if len(str(i)) > max_len:
                max_len = len(str(i))

    # Print board
    # Column Numbers
    n = 1
    print(" ", end='')
    for i in board:
        print(f"+   {n}   ", end='')
        n = n + 1
    print("+")
    n = 1
    # Lines
    for line in board:
        print("+", end='')
        for i in line:
            print("+-------", end='')
        print("+")
        for i in line:
            print(" |      ", end='')
        print(" |")
        # Line numbers
        print(n, end='')
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
            print(" |      ", end='')
        print(" |")
        n = n + 1
    print("+", end='')
    for i in line:
        print("+-------", end='')
    print("+")


def user_input(board):
    """Mark the field selected by the User by changing it to '-1'"""
    field_xy = input("Feld Auswählen: ").split(" ")
    try:
        field_x = int(field_xy[0]) - 1
        field_y = int(field_xy[1]) - 1
        board[field_x][field_y] = -1
    except:
        print("Invalid user input")
        user_input(board)


def save_gamedata(board):
    gamedata['game_board'] = board
    with open(gamedata_path, 'w') as f:
        json.dump(gamedata, f)


def load_gamedata(board):
    with open(gamedata_path, 'r') as f:
        gamedata = json.load(f)
        board = gamedata['game_board']


def gameloop(board):
    while True:
        print_board(board)
        user_input(board)


gameloop(randomboard(5))
