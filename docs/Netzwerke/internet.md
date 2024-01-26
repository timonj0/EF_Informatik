# Internet
## Internetgeräte
### Switch
Ein Switch verbindet mehere Hosts in mit dem Stern-System. Er kennt den Host von jedem angeschlossenen Ports.

Der Switch beherrscht nur 3 Operationen:
    Learn: Lernt, welche Adresse an welchem Port angeschlossen ist
    Flood: Forwardet die erhaltenen Daten an alle Ports, wenn die Zieladresse nicht bekannt ist
    Forward: Leitet die erhaltenen Daten an die Zieladresse weiter.
### Router
Ein Router verbindet LANs miteinander. Er dient als Gateway aus dem und in das LAN.
Damit der Router weiss, wo welches Netzwerk ist, benutzt er Routing Tables. Diese enthalten drei Arten von Netzwerkrouten (Wege, die zu einem Netzwerk fürhen):
    Directly Connected (DC): Direkt verbundene Netzwerke
    Static Routes (SR): Von Hand eingetragene Routen
    Dynamic Routes (DR): Die Router tauschen eigenständig Informationen über die ihnen bekannten Netzwerken aus.

Fun Fact: Router sind an mehrere Netzwerke gleichzeitig angeschlossen und haben in jedem Netzwerk eine IP und MAC Adresse-

## Internetsachen
### IP-Adresse
IP-Adressen sind genau was der Name sagt, Adressen. Sie bestehen aus dem Netzwerkteil und dem Hostteil.
`Netwerkteil` Der vordere Teil der IP-Adresse. Grundadresse aller Geräte in einem Netzwerk.
`Hostteil` Hinterer Teil der IP-Adresse. Für jedes Gerät unterschiedlich.

### ARP
ARP, Adress Resolution Protocol, ist ein Protokoll um Layer 4 Adressen Layer 3 Adressen zuzuordnen.