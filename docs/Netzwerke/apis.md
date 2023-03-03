#API CheatSheet

##API
Programm auf einem Server, welches auf Nachfrage von Clients Daten übermittelt.

##HTTP Request
- URL: Adresse
- Methode: Art des Requests
- Header: Metadaten des Requests
- Body: Daten

##HTTP Status Codes
Codes, um auf einen Request zu antworten. Jeder Code hat eine Bedeutung, z.B.:
- 404: Ressource nicht gefunden
- 200: Alles OK
- 401: Zugriff verweigert

##JSON
JavaScript Object Notation, basiert auf dem Key-Value System.
Format: { “key”: “value” }

##XML
Extensible Markup Language, basiert auf Root- und Childnodes.
Format: <rootnode><value_tag> value </value_tag> </rootnode>

##Polling
Das wiederholte Requesten eines Updates der Daten vom Client.
->Long Polling: Der Client requestet ein Update und der Server antwortet erst, wenn es ein Update gibt um effizienter zu sein.
 


