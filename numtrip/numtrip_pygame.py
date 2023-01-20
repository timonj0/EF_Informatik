import random
import math
import pygame as pg

pg.init()
pg.font.init()
pg.display.set_caption('NumTrip')

BOARD_SIZE = 5
WIN_SCORE = 1024

SCREEN_WIDTH = 500
SCREEN_HEIGHT = SCREEN_WIDTH

COLOR_PALETTE = [(255, 255, 0), (255, 200, 0), (255, 170, 0), (255, 150, 0),
                 (255, 100, 0), (255, 50, 0), (0, 255, 0), (0, 255, 50), (0, 255, 100), (0, 255, 150), (0, 255, 200), (0, 255, 255), (0, 0, 0), (0, 0, 0), (0, 0, 0), (0, 0, 0), (0, 0, 0)]

FIELD_COLOR = (240, 180, 60)
FONT = pg.font.Font('freesansbold.ttf', 32)

CLOCK = pg.time.Clock()

# Init screen
screen = pg.display.set_mode([SCREEN_WIDTH, SCREEN_HEIGHT])
screen.fill((255, 255, 255))


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

    """Print a pretty board on the window"""
    for row_idx in range(len(board)):
        for col_idx in range(len(board[row_idx])):
            field_x = col_idx * 100 + 5
            field_y = row_idx * 100 + 5
            color = COLOR_PALETTE[int(math.log2(board[row_idx][col_idx]) - 1)]
            text = FONT.render(str(board[row_idx][col_idx]), True, (255, 255, 255), color)
            textRect = text.get_rect()
            textRect.center = (field_x + 45, field_y + 45)

            pg.draw.rect(surface=screen, color=color, rect=pg.Rect(field_x, field_y, 90, 90), border_radius=4)
            screen.blit(text, textRect)
    pg.display.update()


def user_input(board, mouse_xy) -> list:
    """Calculate clicked field from cursor position"""
    field_x = math.floor(mouse_xy[0] / 100)
    field_y = math.floor(mouse_xy[1] / 100)
    field_xy = [field_y, field_x]
    if field_has_same_value_neighbours(board, field_xy):
        return [field_y, field_x]
    else:
        return -1


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
    game = True
    while game:
        print_board(board)

        for event in pg.event.get():
            if event.type == pg.MOUSEBUTTONUP:
                mouse_x, mouse_y = pg.mouse.get_pos()
                selected_field = user_input(board, [mouse_x, mouse_y])
                # TODO DEBUG
                if not selected_field == -1:
                    mark_neighbours(board, selected_field)
                    board = fill_baord(board)
                game = check_game_over(board)
            if event.type == pg.QUIT:
                game = False
        CLOCK.tick(30)
    print_board(board)


gameloop(randomboard(BOARD_SIZE))
