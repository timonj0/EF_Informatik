import random
import math

BOARD_SIZE = 4
WIN_SCORE = 1024

score = 0
field_counter = 0


def randomboard(size: int):
    """Generate a random board"""
    return [[2**random.randint(1, 4) for i in range(1, size + 1)] for j in range(1, size + 1)]


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
    print(f"Current score: {score}")


def user_input(board) -> list:
    """Validate and return user input to select a field"""
    valid = False
    while not valid:
        field_xy = input("Feld Auswählen (<x> <y>): ").split(" ")
        try:
            field_xy = [int(i) - 1 for i in field_xy]  # Convert coordinates to integers
            field_xy.reverse()
            if field_has_same_value_neighbours(board, field_xy):
                valid = True
                return field_xy
            else:
                raise Exception("Field has no same value neighbours")
        except:
            print("Invalid user input")


def field_exists(board, field_xy):
    """Check if field_xy exists"""
    field_x = field_xy[0]
    field_y = field_xy[1]

    if not -1 < field_x < len(board):
        return False
    elif not -1 < field_y < len(board):
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
    global score, field_counter
    stack = [selected_field]
    target_number = int(board[selected_field[0]][selected_field[1]])
    while not len(stack) == 0:
        current_field = stack.pop()
        if board[current_field[0]][current_field[1]] == target_number and field_exists(board, current_field):
            field_counter = field_counter + 1
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

    # Save individual columns in a list instead of rows, left to right, top to bottom
    columns = [[board[j][i] for j in range(len(board))] for i in range(len(board[0]))]

    for column in columns:
        if -1 in column:
            column.reverse()
            for i in range(column.count(-1)):
                column.pop(column.index(-1))
                column.append(2 ** random.randint(1, 3))
            column.reverse()

    return [[columns[j][i] for j in range(len(columns))] for i in range(len(columns[0]))]


def check_game_over(board):
    for line in board:
        for field in line:
            if field == WIN_SCORE:
                print("You won!")
                return False
    for line_number in range(len(board)):
        for field_number in range(len(board[line_number])):
            if field_has_same_value_neighbours(board, [line_number, field_number]):
                return True

    print("Game over!")
    return False


def gameloop(board):
    global field_counter, score
    game = True
    while game:
        field_counter = 0
        print_board(board)
        selected_field = user_input(board)
        mark_neighbours(board, selected_field)
        board = fill_baord(board)
        score = score + field_counter * board[selected_field[0]][selected_field[1]]

        game = check_game_over(board)

    print_board(board)


gameloop(randomboard(BOARD_SIZE))
