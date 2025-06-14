# Storyboard
Die nachfolgenden Szenen zeigen exemplarisch den Ablauf und die Navigation innerhalb der Webapplikation. Das Storyboard dient dazu, zentrale Benutzeraktionen sowie die visuelle Struktur der Anwendung verständlich darzustellen. Es orientiert sich an typischen Nutzungsszenarien und den geplanten Seiten der Applikation.
## Szene 1
Die Startseite dient als Einstiegspunkt in die Anwendung. Sie präsentiert den Titel und eine kurze Einleitung zur App. Über einen zentralen Button wird der Nutzer zur Hauptfunktion weitergeleitet.

![Szene 1](/natural-events-tracker/docs/images/storyboard-scene-01.jpg)

**Aktionen:**
- Klick auf **"Check it out"** → Weiterleitung zur Hauptansicht mit Live Events (Szene 2)
## Szene 2
Die Seite zeigt aktuelle Naturereignisse weltweit auf einer interaktiven Karte. Die Events werden dabei aus der NASA EONET API geladen. Eine Filterfunktion erlaubt die Eingrenzung nach Ereigniskategorie.

![Szene 2](/natural-events-tracker/docs/images/storyboard-scene-02.jpg)

**Aktionen:**
- Klick auf **Event-Marker** → Zeigt ein Popup mit Detailinformationen
- Auswahl einer **Kategorie** → Filtert angezeigte Events
- Klick auf **"Event Archive"** → Wechselt zur Archivansicht (Szene 3)
- Klick auf **"Custom Events"** → Wechselt zur Eingabemaske für eigene Events (Szene 4)

## Szene 3
Diese Ansicht zeigt abgeschlossene (nicht mehr aktive) Naturereignisse. Nutzer:innen können die Liste nach Kategorie oder Zeitraum filtern und über die Navigation zwischen den Seiten wechseln.

![Szene 3](/natural-events-tracker/docs/images/storyboard-scene-03.jpg)

**Aktionen:**
- Klick auf **Kategorie** → Filtert nach gewählter Kategorie
- Auswahl **Startdatum / Enddatum** → Filtert nach Zeitraum
- Klick auf **"Event Tracker"** → Zurück zur Live-Event-Ansicht (Szene 2)
- Klick auf **"Custom Events"** → Weiter zur Seite für eigene Ereignisse (Szene 4)
## Szene 4
Hier können eigene Naturereignisse lokal erfasst, gespeichert, bearbeitet und gelöscht werden. Die Daten verbleiben dabei im LocalStorage des Browsers. Bestehende Einträge werden in Kartenform darunter aufgelistet.

![Szene 4](/natural-events-tracker/docs/images/storyboard-scene-04.jpg)

**Aktionen:**
- Ausfüllen der **Eingabefelder** → Eingabe eines neuen Ereignisses
- Klick auf **"Save"** → Speichert das Event und zeigt es unten in der Liste
- Klick auf **"Edit"** bei einem Event → Öffnet Bearbeitungsmodus
- Klick auf **"Delete"** → Entfernt das Event aus der Liste
- Klick auf **"Event Tracker"** → Zurück zur Live-Ansicht (Szene 2)
- Klick auf **"Event Archive"** → Wechselt zur Archivseite (Szene 3)
