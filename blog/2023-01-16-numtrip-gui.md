# Weiterarbeit an NumTrip
## 16.01.2023

Ich habe mich aus langeweile entschieden, mein nun mehr oder weniger fertiggestelltes NumTrip Spiel mithilfe einer grafischen Benutzeroberfläche auf die nächste Stufe zu bringen. Ich habe also PyGame installiert, die initialisierung implementiert und das Spielfeld in einem simplen Fenster dargestellt. Das Spielfeld wird jedoch massiv fehlerhaft dargestellt, da scheinbar zufällige Felder einfach fehlen.

Code zur darstellung des Spielfelds:
    for row in board:
            for field in row:
                field_x = row.index(field) * 100 + 5
                field_y = board.index(row) * 100 + 5
                text = FONT.render(str(field), True, (255, 255, 255), FIELD_COLOR)
                textRect = text.get_rect()
                textRect.center = (field_x + 45, field_y + 45)
    
                pg.draw.rect(surface=screen, color=FIELD_COLOR, rect=pg.Rect(field_x, field_y, 90, 90), border_radius=4)
                screen.blit(text, textRect)
    
        pg.display.flip()
