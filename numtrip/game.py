from turtle import color
import random
import math
import json

gamedata = {}
gamedata_path = "./gamedata.json"

# DEBUG
my_board = [[2, 32, 8, 16],
            [2, 4, 8, 32],
            [2, 4, 32, 64],
            [2, 32, 64, 128]]


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
    """Validate and return user input to select a field"""
    field_xy = input("Feld Auswählen: ").split(" ")
    try:
        field_xy = [int(i) - 1 for i in field_xy]  # Convert coordinates to integers
        field_xy.reverse()
        return field_xy
    except:
        print("Invalid user input")
        user_input(board)


def field_exists(board, field_xy):
    """Check if field_xy exists"""
    field_x = field_xy[0]
    field_y = field_xy[1]

    if not -1 < field_x < len(board):
        return False
    elif not -1 < field_x < len(board):
        return False
    else:
        return True


def field_has_same_value_neighbours(board, field_xy):
    target_value = board[field_xy[0]][field_xy[1]]
    stack = []
    if field_exists(board, [field_xy[0], field_xy[1] + 1]):
        stack.append([field_xy[0], field_xy[1] + 1])
    if field_exists(board, [field_xy[0], field_xy[1] - 1]):
        stack.append([field_xy[0], field_xy[1] - 1])
    if field_exists(board, [field_xy[0] + 1, field_xy[1]]):
        stack.append([field_xy[0] + 1, field_xy[1]])
    if field_exists(board, [field_xy[0] - 1, field_xy[1]]):
        stack.append([field_xy[0] - 1, field_xy[1]])
    for field in stack:
        if board[field[0]][field[1]] == target_value:
            return True
    return False


def mark_neighbours(board, selected_field: list):
    """Mark all connected fields with the same number with -1 and double the value of the selected field"""
    stack = [selected_field]
    target_number = int(board[selected_field[0]][selected_field[1]])
    while not len(stack) == 0:
        current_field = stack.pop()
        if board[current_field[0]][current_field[1]] == target_number and field_exists(board, current_field):
            board[current_field[0]][current_field[1]] = -1
            if field_exists(board, [current_field[0], current_field[1] + 1]):
                stack.append([current_field[0], current_field[1] + 1])
            if field_exists(board, [current_field[0], current_field[1] - 1]):
                stack.append([current_field[0], current_field[1] - 1])
            if field_exists(board, [current_field[0] + 1, current_field[1]]):
                stack.append([current_field[0] + 1, current_field[1]])
            if field_exists(board, [current_field[0] - 1, current_field[1]]):
                stack.append([current_field[0] - 1, current_field[1]])

    board[selected_field[0]][selected_field[1]] = target_number * 2


def fill_baord(board):
    """Fill all empty spaces in a gameboard"""

    # TODO Not the most elegant solution
    columns = [[board[j][i] for j in range(len(board))] for i in range(len(board[0]))]

    for column in columns:
        if -1 in column:
            for i in range(column.count(-1)):
                column.remove(-1)
                column.append(2 ** random.randint(1, 3))
            column.reverse()

    return [[columns[j][i] for j in range(len(columns))] for i in range(len(columns[0]))]


def save_gamedata(board):
    """Save game data to .json file"""
    gamedata['game_board'] = board
    with open(gamedata_path, 'w') as f:
        json.dump(gamedata, f)


def load_gamedata(board):
    """Load game data from .json file"""
    with open(gamedata_path, 'r') as f:
        gamedata = json.load(f)
        board = gamedata['game_board']


def gameloop(board):
    while True:
        print_board(board)
        selected_field = user_input(board)
        mark_neighbours(board, selected_field)
        board = fill_baord(board)


# gameloop(randomboard(5))

gameloop(my_board)
