def obenundunten(l):
    for i in range(l):
        print("*", end="")
    print(" ")


def seite(l):
    for i in range(l):
        print("*", end="")
        for i in range(l - 2):
            print(" ", end="")
        print("*")


def sternchenrechteck(l):
    obenundunten()(l)
    seite(l)
    obenundunten()(l)


sternchenrechteck(-15)
