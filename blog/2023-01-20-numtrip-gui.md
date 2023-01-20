# Weiterarbeit an NumTrip
## 16.01.2023

Als erstes habe ich heute viel Zeit damit verbracht, das Feld fehlerfrei auf dem Fenster darzustellen. Nach langer mühsamer Fehlersuche stellte sich schliessliche heraus, dass ich aus flüchtigkeit die list.index() funktion an einer Stelle benutzte, an welcher sie nicht das gewünschte Ergebnis zurück gibt. Das führte dazu, dass nicht nur das Feld lückenhaft dargestellt wurde, sondern vertauschte auch während des Spiels scheinbar zufällige Felder. Nun war der Fehler jedoch behoben und ein fehlerfreies NumTrip game war mit einer grafischen Benutzeroberfläche spielbar.

Als zweiten Schritt habe ich noch den unterschiedlichen Werten der Felder unterschiedliche Farben zugeweisen, was das Spielerlebnis bunt und lustig macht. Dazu habe ich alle Farbwerte in einer Liste gespeichert. Den index, welche Farbe ein bestimmtes Feld haben soll, wird dann einfach mit dem log2 des Wertes berechnet.