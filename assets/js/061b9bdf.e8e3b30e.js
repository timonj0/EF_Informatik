"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[7846],{7384:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/03/10/api-mit-nodered","metadata":{"permalink":"/EF_Informatik/2023/03/10/api-mit-nodered","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2023-03-10-api-mit-nodered.md","source":"@site/blog/2023-03-10-api-mit-nodered.md","title":"API mit nodeRED erstellen","description":"Anleitung","date":"2023-03-10T00:00:00.000Z","formattedDate":"10. M\xe4rz 2023","tags":[],"readingTime":1.45,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"nextItem":{"title":"NumTrip","permalink":"/EF_Informatik/2023/01/23/final"}},"content":"## Anleitung\\nUm eine simple API auf nodRED zu erstellen, mussn als ersten eine neue http in node erstellt werden. In der http in node kann dann die URL definiert werden, unter der die API erreichbar ist. Zum beispiel `/api`.\\n\\nDanach kann ein Skript angef\xfcgt werden, wo die Daten verarbeitet werden. Was mit den empfangenen Daten angefangen wird, ist frei w\xe4hlbar. Zur Demonstration kann ein Skript angef\xfcgt werden, welches nur die Zeile `retunr msg;` enth\xe4lt. Dieses Skript leitet einfach die empfangenen Daten weiter.\\n\\nAls letzes wird eine http response node angef\xfcgt, welche auf die Anfrage mit den Datenm, welches das Skript ausgiebt, antwortet. In unserem beispiel mit dem `return msg;` Skript werden also einfach die Daten, welche wir an die API gesendet haben, wieder zur\xfcckgesendet.\\n\\nHier eine Visualisierung der simplen API in NodeRED:\\n![](images/nodered_api.png)\\n\\n## Erkl\xe4rung\\nUnsere API kommuniziert via HTTP. Der Client sendet eine Anfrage an die API-Endpunkt-URL. Die Anfrage kann verschiedene Arten von Informationen enthalten, wie z.B. eine Anfrage-Methode wie `GET`, `POST`, `PUT` oder `DELETE`, Parameter, Header-Informationen und manchmal auch einen Anfrage-Body, der Daten enth\xe4lt, die an die API gesendet werden sollen.\\n\\nDie API empf\xe4ngt die Anfrage und verarbeitet sie, indem sie die notwendigen Daten aus der Anfrage extrahiert, in unserem Fall die Daten manipuliert, um eine Antwort zu generieren. Die Antwort wird dann als HTTP-Antwort zur\xfcck an den Client gesendet, die in der Regel einen Statuscode, Header-Informationen und manchmal auch einen Antwort-Body enth\xe4lt, der die Daten enth\xe4lt, die an den Client zur\xfcckgesendet werden.\\n\\n## Erfahrungen \\nMeine Erfahrungen mit dem Erstellen einer eigenen API mit NodeRED waren durchaus positiv. Das Erstellen geschieht durch die simple Natur von NodeRED mit grosser M\xfchelosigkeit. Trotzdem denke ich, dass mit NodeRED ganz sch\xf6n n\xfctzliche und vielleicht sogar m\xe4chtige APIs erstellt werden k\xf6nnen."},{"id":"/2023/01/23/final","metadata":{"permalink":"/EF_Informatik/2023/01/23/final","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2023-01-23-final.md","source":"@site/blog/2023-01-23-final.md","title":"NumTrip","description":"Konsolen- und Fensterbasiert","date":"2023-01-23T00:00:00.000Z","formattedDate":"23. Januar 2023","tags":[],"readingTime":2.385,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"API mit nodeRED erstellen","permalink":"/EF_Informatik/2023/03/10/api-mit-nodered"},"nextItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2023/01/22/weiterarbeit-an-numtrip"}},"content":"## Konsolen- und Fensterbasiert\\n\\n![](images/numtrip_screenshots.png)\\n\\n### Ziel des spiels\\nIm Spiel NumTrip k\xf6nnen in einem Spielfeld Felder, welche einen Wert besitzen, kombiniert werden. Dabei werden alle Nachbarfelder absorbiert, welche den selben Wert haben wie das ausgew\xe4hlte Feld. Das Ziel des Spiels ist es, bis zum erreichen eines Feldes mit dem Wert 1024 einen m\xf6glichst hohen Score zu erzielen, ohne Game Over zu gehen. Game Over ist man, wenn keine Felder mehr kombiniert werden k\xf6nnen und der Score wird berechnet, indem die Anzahl im Zug absorbierter Felder mit dem Wert des resultierenden Feldes multipliziert und zu dem vorherigen Score addiert wird.\\n\\n### Top-Down Entwurf\\nDer Top-Down Entwurf meines NumTrip Spiels sieht wiefolgt aus:\\n![](images/numtrip_topdown.png)\\n\\n### Auff\xfcllen des Spielfelds\\nDas Auff\xfcllen des Spielfeldes habe ich auf eine meiner Meinung nach naheliegende und doch kreative Art gel\xf6st. Der Ablauf ist ziemlich simpel und beinhaltet nur wenige Schritte. Das Spielfeld ist bei der \xdcbergabe in die Funktion als zweidimensionale Liste Zeile um Zeile gespeichert. Im ersten Schritt wird das Spielfeld quasi rotiert, so dass das Spielfeld nun Spalte um Spalte in der Liste gespeichert ist.\\n\\n    columns = [[board[j][i] for j in range(len(board))] for i in range(len(board[0]))]\\n\\nDanach wird durch jede Spalte iteriert und \xfcberpr\xfcft, ob sich in ihr Felder mit dem Wert -1 befinden. Ist dies der Fall, wird die Liste mit der Spalte umgekehrt, damit sie die Felder in der Reihenfolge unten -> oben enth\xe4lt. F\xfcr jedes Feld mit dem Wert -1 in der Spalte wird nun eben dieses Feld entfernt und ein neues Feld mit einem zuf\xe4lligen Wert 2, 4, oder 8 hinzugef\xfcgt. Die Liste wird am Schluss erneut umgekehrt, damit sie die Felder wieder in der urspr\xfcnglichen Anordnung enth\xe4lt.\\n\\n    if -1 in column:\\n        column.reverse()\\n        for i in range(column.count(-1)):\\n            column.pop(column.index(-1))\\n            column.append(2 ** random.randint(1, 3))\\n        column.reverse()\\n\\nDieses Vorgehen macht das Prinzip der \\"Gravitation\\", welche in dem Spiel implementiert ist, ganz nat\xfcrlich, da die Felder mit dem Wert -1 aus beliebigen Positionen entfernt werden, die neuen Felder aber immer an der obersten Position angef\xfcgt werden.\\n\\nSchlussendlich wird das Spielfeld zur\xfcck in seine ursp\xfcngliche From rotiert und zur\xfcckgegeben.\\n\\n    return [[columns[j][i] for j in range(len(columns))] for i in range(len(columns[0]))]\\n\\n### Herausforderungen und Tipps\\nDie gr\xf6sste Herausforderung, die mir beim Entwickeln des Spiels in den Weg kam, war, oft simple aber daf\xfcr umso hartn\xe4ckigere Fehler zu finden. Syntaxfehler oder fehlender Code sind schnell zu beheben, bei tief sitzenden Logikfehlern oder un\xfcberlegtem gebrauchen von Funktionen, wie bei mir die list.index() Funktion, sind oftmals schwierig zu finden, da man ihnen zu wenig Beachtung schenkt oder sich nicht gut genug mit ihnen besch\xe4ftigt. Es lohnt sich also, auch kleine Details in seinem Code zu \xfcberdenken und zu hinterfragen, ob man wirklich versteht was er macht. Um Logikfehler schnell zu finden und sogar vorzubeugen ist es ratsam, einen sehr genauen Plan zu haben, was man \xfcberhaupt programmieren will. Wildes Drauflosschreiben f\xfchrt sehr schnell zu einem sehr grossen Chaos."},{"id":"/2023/01/22/weiterarbeit-an-numtrip","metadata":{"permalink":"/EF_Informatik/2023/01/22/weiterarbeit-an-numtrip","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2023-01-22-weiterarbeit-an-numtrip.md","source":"@site/blog/2023-01-22-weiterarbeit-an-numtrip.md","title":"Weiterarbeit an NumTrip","description":"22.01.2023","date":"2023-01-22T00:00:00.000Z","formattedDate":"22. Januar 2023","tags":[],"readingTime":0.11,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"NumTrip","permalink":"/EF_Informatik/2023/01/23/final"},"nextItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2023/01/21/weiterarbeit-an-numtrip"}},"content":"## 22.01.2023\\n\\nHeute habe ich noch letzte Details wie Win- und Game-Over-Nachrichten in das Spiel implementiert, wodurch es nun vollumf\xe4nglich spielbar ist."},{"id":"/2023/01/21/weiterarbeit-an-numtrip","metadata":{"permalink":"/EF_Informatik/2023/01/21/weiterarbeit-an-numtrip","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2023-01-21-weiterarbeit-an-numtrip.md","source":"@site/blog/2023-01-21-weiterarbeit-an-numtrip.md","title":"Weiterarbeit an NumTrip","description":"21.01.2023","date":"2023-01-21T00:00:00.000Z","formattedDate":"21. Januar 2023","tags":[],"readingTime":0.485,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2023/01/22/weiterarbeit-an-numtrip"},"nextItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2023/01/20/numtrip-gui"}},"content":"## 21.01.2023\\n\\nHeute habe ich als erstes einen simplem score-counter implementier. Der score wird berechnet, indem die anzahl fusionierter Felder mit dem Wert des daraus entstheneden Feldes multipliziert wird. Das sollte es attraktiv machen, m\xf6glichs viele Felder aufs mal zu fusionieren.\\n\\nDes weiteren habe ich den score in der PyGame-basierten Version des Spiels noch auf den Fenster anzeigen lassen. Die challenge des Spiels besteht mit den eingestellten Konstanten (Feldgr\xf6sse = 4x4 und Spielende beim Erreichen des 1024 Feldes) nun darin, eine m\xf6glichst grosse Punktzahl vor dem erreichen des 1024 Feldes zu erreichen, ohne game over zu gehen."},{"id":"/2023/01/20/numtrip-gui","metadata":{"permalink":"/EF_Informatik/2023/01/20/numtrip-gui","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2023-01-20-numtrip-gui.md","source":"@site/blog/2023-01-20-numtrip-gui.md","title":"Weiterarbeit an NumTrip","description":"16.01.2023","date":"2023-01-20T00:00:00.000Z","formattedDate":"20. Januar 2023","tags":[],"readingTime":0.655,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2023/01/21/weiterarbeit-an-numtrip"},"nextItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2023/01/16/numtrip-gui"}},"content":"## 16.01.2023\\n\\nAls erstes habe ich heute viel Zeit damit verbracht, das Feld fehlerfrei auf dem Fenster darzustellen. Nach langer m\xfchsamer Fehlersuche stellte sich schliessliche heraus, dass ich aus fl\xfcchtigkeit die list.index() funktion an einer Stelle benutzte, an welcher sie nicht das gew\xfcnschte Ergebnis zur\xfcck gibt. Das f\xfchrte dazu, dass nicht nur das Feld l\xfcckenhaft dargestellt wurde, sondern vertauschte auch w\xe4hrend des Spiels scheinbar zuf\xe4llige Felder. Nun war der Fehler jedoch behoben und ein fehlerfreies NumTrip game war mit einer grafischen Benutzeroberfl\xe4che spielbar.\\n\\nAls zweiten Schritt habe ich noch den unterschiedlichen Werten der Felder unterschiedliche Farben zugeweisen, was das Spielerlebnis bunt und lustig macht. Dazu habe ich alle Farbwerte in einer Liste gespeichert. Den index, welche Farbe ein bestimmtes Feld haben soll, wird dann einfach mit dem log2 des Wertes berechnet."},{"id":"/2023/01/16/numtrip-gui","metadata":{"permalink":"/EF_Informatik/2023/01/16/numtrip-gui","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2023-01-16-numtrip-gui.md","source":"@site/blog/2023-01-16-numtrip-gui.md","title":"Weiterarbeit an NumTrip","description":"16.01.2023","date":"2023-01-16T00:00:00.000Z","formattedDate":"16. Januar 2023","tags":[],"readingTime":0.555,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2023/01/20/numtrip-gui"},"nextItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2023/01/13/weiterarbeit-an-numtrip"}},"content":"## 16.01.2023\\n\\nIch habe mich aus langeweile entschieden, mein nun mehr oder weniger fertiggestelltes NumTrip Spiel mithilfe einer grafischen Benutzeroberfl\xe4che auf die n\xe4chste Stufe zu bringen. Ich habe also PyGame installiert, die initialisierung implementiert und das Spielfeld in einem simplen Fenster dargestellt. Das Spielfeld wird jedoch massiv fehlerhaft dargestellt, da scheinbar zuf\xe4llige Felder einfach fehlen.\\n\\nCode zur darstellung des Spielfelds:\\n\\n    for row in board:\\n            for field in row:\\n                field_x = row.index(field) * 100 + 5\\n                field_y = board.index(row) * 100 + 5\\n                text = FONT.render(str(field), True, (255, 255, 255), FIELD_COLOR)\\n                textRect = text.get_rect()\\n                textRect.center = (field_x + 45, field_y + 45)\\n    \\n                pg.draw.rect(surface=screen, color=FIELD_COLOR, rect=pg.Rect(field_x, field_y, 90, 90), border_radius=4)\\n                screen.blit(text, textRect)\\n    \\n        pg.display.flip()"},{"id":"/2023/01/13/weiterarbeit-an-numtrip","metadata":{"permalink":"/EF_Informatik/2023/01/13/weiterarbeit-an-numtrip","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2023-01-13-weiterarbeit-an-numtrip.md","source":"@site/blog/2023-01-13-weiterarbeit-an-numtrip.md","title":"Weiterarbeit an NumTrip","description":"12.01.2023","date":"2023-01-13T00:00:00.000Z","formattedDate":"13. Januar 2023","tags":[],"readingTime":0.185,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2023/01/16/numtrip-gui"},"nextItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2022/12/23/weiterarbeit-an-numtrip"}},"content":"## 12.01.2023\\n\\nIn dieser kurzen aber effektiven Arbeitssequenz habe ich den Code mehr oder weniger abgabefertig gemacht. Heisst, ich habe die 3 letzten Bugs, welche noch in dem Spiel waren, gefixt, den code aufger\xe4umt und leserlicher gemacht."},{"id":"/2022/12/23/weiterarbeit-an-numtrip","metadata":{"permalink":"/EF_Informatik/2022/12/23/weiterarbeit-an-numtrip","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2022-12-23-weiterarbeit-an-numtrip.md","source":"@site/blog/2022-12-23-weiterarbeit-an-numtrip.md","title":"Weiterarbeit an NumTrip","description":"23.12.2022","date":"2022-12-23T00:00:00.000Z","formattedDate":"23. Dezember 2022","tags":[],"readingTime":0.34,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2023/01/13/weiterarbeit-an-numtrip"},"nextItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2022/12/09/weiterarbeit-an-numtrip"}},"content":"## 23.12.2022\\n\\nIch startete heute damit, das Spiel kurz zu testen und implementierte daraufhin die erste fehlende Funktion die mir aufgefallen ist; das Game-Over.\\nDanach hatte ich ein mentales Breakdown, weil ich einen scheinbar absolut unerkl\xe4rlichen Fehler nicht finden konnte. Nachdem der extrem kleine aber Folgenschwere Fehler gefunden war, hatte ich bereits das n\xe4chste mentale Breakdown, weil auf einmal irgendwelche Zahlen ohne ersichtlichen Grund im Spielfeld vertauscht wurden."},{"id":"/2022/12/09/weiterarbeit-an-numtrip","metadata":{"permalink":"/EF_Informatik/2022/12/09/weiterarbeit-an-numtrip","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2022-12-09-weiterarbeit-an-numtrip.md","source":"@site/blog/2022-12-09-weiterarbeit-an-numtrip.md","title":"Weiterarbeit an NumTrip","description":"09.12.2022","date":"2022-12-09T00:00:00.000Z","formattedDate":"9. Dezember 2022","tags":[],"readingTime":0.2,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2022/12/23/weiterarbeit-an-numtrip"},"nextItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2022/12/08/weiterarbeit-an-numtrip"}},"content":"## 09.12.2022\\n\\nIn der kurzen Arbeitsphase habe ich nur die Spielregel implementiert, dass keine Felder ohne Nachbarn mit dem selben Wert ausgew\xe4hlt werden k\xf6nnen. Ausserdem habe ich das Spiel nun, da es mehr oder weniger vollst\xe4ndig spielbar ist, ausgiebig getestet."},{"id":"/2022/12/08/weiterarbeit-an-numtrip","metadata":{"permalink":"/EF_Informatik/2022/12/08/weiterarbeit-an-numtrip","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2022-12-08-weiterarbeit-an-numtrip.md","source":"@site/blog/2022-12-08-weiterarbeit-an-numtrip.md","title":"Weiterarbeit an NumTrip","description":"08.12.2022","date":"2022-12-08T00:00:00.000Z","formattedDate":"8. Dezember 2022","tags":[],"readingTime":0.195,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2022/12/09/weiterarbeit-an-numtrip"},"nextItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2022/12/02/weiterarbeit-an-numtrip"}},"content":"## 08.12.2022\\n\\nAls erstes habe ich mit neuer Kreativit\xe4t die kleinen aber fatalen logik-Fehler in mark_neighbours() und fill_board() korrigiert.\\nDanach habe noch die einfache und viel zu lange aufgeschobene Aufgabe erledigt, das unkonventionelle input-Format y/x zu x/y zu \xe4ndern."},{"id":"/2022/12/02/weiterarbeit-an-numtrip","metadata":{"permalink":"/EF_Informatik/2022/12/02/weiterarbeit-an-numtrip","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2022-12-02-weiterarbeit-an-numtrip.md","source":"@site/blog/2022-12-02-weiterarbeit-an-numtrip.md","title":"Weiterarbeit an NumTrip","description":"02.12.2022","date":"2022-12-02T00:00:00.000Z","formattedDate":"2. Dezember 2022","tags":[],"readingTime":0.22,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2022/12/08/weiterarbeit-an-numtrip"},"nextItem":{"title":"User Input in NumTrip","permalink":"/EF_Informatik/2022/11/18/user-input"}},"content":"## 02.12.2022\\n\\nDie heutige Arbeit bestand g\xe4nzlich aus mehrfachem Neuschreiben des Algorithmus zum Zusammenschieben der Felder und extrem anstregneder Fehlersuche. Das Resultat ist nun ein Algroithmus der zwar noch nicht immer das tut was er soll, das Spiel st\xfcrtzt jedoch immerhin nicht mehr ab."},{"id":"/2022/11/18/user-input","metadata":{"permalink":"/EF_Informatik/2022/11/18/user-input","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2022-11-18-user-input.md","source":"@site/blog/2022-11-18-user-input.md","title":"User Input in NumTrip","description":"Eingabe erhalten und Feld markieren","date":"2022-11-18T00:00:00.000Z","formattedDate":"18. November 2022","tags":[],"readingTime":0.23,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2022/12/02/weiterarbeit-an-numtrip"},"nextItem":{"title":"Wiedereinstieg in Python","permalink":"/EF_Informatik/2022/08/26/wiedereinstieg-in-python"}},"content":"## Eingabe erhalten und Feld markieren\\nIn einem ersten Schritt gibt der Spieler das Feld an, dieses Feld wird lokalisiert und mit \'-1\' markiert.\\n\\n## Gameloop Implementation\\nIn einem zweiten Schritt habe ich eine Gameloop-Funktion implementiert, welche in einem loop die \\"print_board\\" und \\"user_input\\" Funktionen aufruft."},{"id":"/2022/08/26/wiedereinstieg-in-python","metadata":{"permalink":"/EF_Informatik/2022/08/26/wiedereinstieg-in-python","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2022-08-26-wiedereinstieg-in-python.md","source":"@site/blog/2022-08-26-wiedereinstieg-in-python.md","title":"Wiedereinstieg in Python","description":"Der Wiedereinstieg ist mir eher leich gefallen. Seltsamerweise hatte ich bei fast jeder Aufgabe ein D\xe9ja-vu Erlebnis, durch welches mir das L\xf6sen erleichtert wurde. Fehler habe ich nat\xfcrlich dennoch gemacht, ich habe schliesslich eine ganze Weile kein Python mehr benutzt weshalb die sprachspeifischen Syntaxkentnisse etwas eingerostet waren. Dank der selbsterkl\xe4renden Natur der Aufgaben stellte dies aber kein allzu grosses Problem dar.","date":"2022-08-26T00:00:00.000Z","formattedDate":"26. August 2022","tags":[],"readingTime":0.305,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"User Input in NumTrip","permalink":"/EF_Informatik/2022/11/18/user-input"}},"content":"Der Wiedereinstieg ist mir eher leich gefallen. Seltsamerweise hatte ich bei fast jeder Aufgabe ein D\xe9ja-vu Erlebnis, durch welches mir das L\xf6sen erleichtert wurde. Fehler habe ich nat\xfcrlich dennoch gemacht, ich habe schliesslich eine ganze Weile kein Python mehr benutzt weshalb die sprachspeifischen Syntaxkentnisse etwas eingerostet waren. Dank der selbsterkl\xe4renden Natur der Aufgaben stellte dies aber kein allzu grosses Problem dar."}]}')}}]);