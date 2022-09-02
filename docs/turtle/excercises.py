from time import sleep
from turtle import *
from math import sin, cos, pi

def square(l):
    for i in range(4):
        forward(l)
        right(90)
    
def pythagoras_baum(size, iterations):
    if iterations > 0:
        # lengths of child trees
        length_l = size * cos(pi/6)
        length_r = size * cos(pi/3)

        square(size)
        forward(size)
        left(30)
        pythagoras_baum(length_l, iterations-1)

        right(30)
        forward(-length_r)
        right(90)
        forward(size)
        
        pythagoras_baum(length_r, iterations-1)
left(90)
pythagoras_baum(100, 3)