# Projektarchitektur
Die Architektur der Applikation wurde so konzipiert, dass sie übersichtlich, modular und wartungsfreundlich ist. Die Umsetzung erfolgt vollständig im Frontend mit React und integriert gezielt externe Dienste zur Datenverarbeitung und -darstellung. Dabei kommen etablierte Technologien wie Leaflet und die NASA EONET API zum Einsatz.

Ziel dieser Architektur ist es, eine klare Trennung zwischen Datenlogik, Benutzeroberfläche und externer Kommunikation zu schaffen. Die Komponenten sind lose gekoppelt, wiederverwendbar und logisch gruppiert. Dies erleichtert sowohl die Weiterentwicklung als auch das Testen und die Fehlersuche im Projekt.
## Überblick Projektstruktur
Die Applikation folgt einer klar strukturierten Architektur, bei der das Frontend vollständig in React umgesetzt ist und gezielt auf externe Dienste zugreift. Das nachfolgende Diagramm zeigt die Hauptbestandteile und deren Interaktionen.

Die **React App** besteht aus modular aufgebauten UI-Komponenten, die mit verschiedenen externen Ressourcen kommunizieren:
- **NASA EONET API:** Dient als Datenquelle für aktuelle und vergangene Naturereignisse.
- **Leaflet:** Wird für die Darstellung interaktiver Karten verwendet.
- **LocalStorage:** Speichert benutzerdefinierte Naturereignisse lokal im Browser.

Die React-Komponenten kapseln dabei sowohl die Datenlogik als auch die Benutzeroberfläche und interagieren direkt mit den APIs und Tools. Diese Architektur erlaubt eine einfache Wartung, Erweiterbarkeit sowie eine klare Trennung zwischen Darstellung, Datenfluss und externer Integration.

![Diagramm zur Projektarchitektur](/natural-events-tracker/docs/images/project-architecture.jpg)
## Modellkomponenten
Das folgende Diagramm gibt einen strukturierten Überblick über die zentralen Bestandteile der React-Anwendung. Es visualisiert die Aufteilung der Applikation in verschiedene Verantwortlichkeitsbereiche (Pages, Components, Context, Utils) sowie deren Abhängigkeiten und Zusammenspiel.

Die Anwendung basiert auf einer modularen Architektur:
- **Pages** definieren die Hauptseiten und kombinieren darin spezifische Komponenten.
- **Components** sind wiederverwendbare UI-Bausteine wie Buttons, Karten oder Formulare.
- **Utils** enthalten Hilfsfunktionen und externe Schnittstellen wie die EONET-API oder die LocalStorage-Anbindung.
- **Context** stellt globale Zustände bereit, z. B. für Kategorien.
- **App.jsx** bindet alles über Routing und Layout zusammen und stellt das Grundgerüst der Anwendung dar.

Durch die klare Trennung von Layout, Logik und Wiederverwendung wird ein wartbares, übersichtliches und erweiterbares Frontend ermöglicht.

![Diagramm zu den Modellkomponenten](/natural-events-tracker/docs/images/model-components.jpg)
