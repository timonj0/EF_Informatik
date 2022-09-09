import png # Paket png importieren
smiley = [
    [000, 000, 000, 000, 000, 000],
    [000, 000, 000, 000, 000, 000],
    [000, 000, 255, 255, 000, 000],
    [000, 000, 255, 255, 000, 000],
    [000, 000, 000, 000, 000, 000],
    [000, 000, 000, 000, 000, 000]
]

ZOOM = 100

new_smiley = []
for line in smiley:
    new_line = []
    for pixel in line:
        for i in range(ZOOM):
            new_line.append(pixel)
    for i in range(ZOOM):
        new_smiley.append(new_line)

# Erzeuge ein Graustufen-Bild (0=Schwarz, 255=Weiss)
png.from_array(new_smiley, 'L').save(f'small_smiley_zoom_{ZOOM}.png')