# Projektdokumentation
>**Autor:in:** Natascha Blumer  
>**Datum:** 08.06.2025  
>**Version:** 1.0  
## Einleitung
Dies ist die Doku zu meinem Abschlussprojekt im Modul 294....
## Inhaltsverzeichnis
Hier kommt das Inhaltsverzeichnis hin
### Titelblatt
- Link


## Projektidee
Ich entwickle eine React-basierte Webapplikation, mit der Nutzer:innen aktuelle und vergangene Naturereignisse entdecken und verfolgen können. Die Daten zu globalen Naturereignissen wie Waldbränden, Stürmen oder Vulkanausbrüchen werden über die öffentlich zugängliche **NASA EONET** (*Earth Observatory Natural Event Tracker*) **API in Version 3** bezogen. Die Events werden dabei auf einer interaktiven Karte (mittels Leaflet) dargestellt und können nach Kategorien gefiltert werden.

Zusätzlich zur Visualisierung von NASA-Daten können Nutzer:innen eigene Events erfassen, bearbeiten und löschen. Diese benutzerdefinierten Einträge werden lokal gespeichert und in der App direkt sichtbar gemacht. Damit entsteht eine hybride Anwendung aus externer API-Nutzung und lokalem Datenmanagement mit vollständiger CRUD-Funktionalität.

Die Applikation ist in verschiedene Seiten unterteilt, darunter eine Startseite, eine Kartenansicht für aktuelle Events, ein durchsuchbares Archiv beendeter Ereignisse sowie ein Bereich zur Verwaltung benutzerdefinierter Events. Ziel ist es, eine informative, interaktive und benutzerfreundliche Anwendung bereitzustellen, die reale Daten sinnvoll mit eigenen Einträgen kombiniert.

## Anforderungsanalyse
Hier kommt noch einleitender text hin....
### User Stories
Hier kommt noch etwas Text hin...
- **User Story 1:** [Naturereignisse entdecken](https://github.com/Coding-Miffy/m294-natural-events-tracker/issues/4) 
- **User Story 2:** [Eigene Naturereignisse erfassen](https://github.com/Coding-Miffy/m294-natural-events-tracker/issues/5) 
- **User Story 3:** [Archiv durchstöbern](https://github.com/Coding-Miffy/m294-natural-events-tracker/issues/6)
### Kernaufgaben
Die funktionalen Anforderungen leiten sich direkt aus den User Stories ab. Sie beschreiben die zentralen Funktionen der Applikation aus Sicht der Benutzer:innen und dienen als Grundlage für die Planung, Umsetzung und spätere Überprüfung der Anwendung.
| ID | Funktionale Anforderungen |
|:---|:---|
| F1 | Anzeigen von aktuellen Naturereignissen auf einer Weltkarte mit Leaflet |
| F2 | Filtern der Ereignisse nach Kategorie |
| F3 | Anzeigen von Detailinformationen zu einem Event |
| F4 | Formular zum Erfassen von eigenen Ereignissen |
| F5 | Liste mit Cards für eigene Ereignisse inkl. Bearbeiten und Löschen |
| F6 | Speicherung eigener Ereignisse im LocalStorage |
| F7 | Ansicht für vergangene (nicht mehr aktive) Ereignisse mit Filteroptionen |
| F8 | Navigation zwischen Startseite, Karte, Archiv und "Eigene Events"-Seite (Routing) |

## Diagramm der Modell-Komponenten


## Storyboard


## Screen-Mockups


## REST-Schnittstellen
Notiz: Leaflet dokumentieren

Notiz: Zuerst wurden viel zu viele Events geladen, das System war überlastet, Hilfe von ChatGPT

## Testplan
Zur Qualitätssicherung der Applikation wurde ein strukturierter Testplan erstellt, der gezielt zentrale Komponenten der Anwendung prüft. Die ausgewählten Testfälle orientieren sich an realen Nutzungsszenarien und decken sowohl die Geschäftslogik als auch die Benutzerinteraktion im Frontend ab.

Der Fokus lag auf einfachen, aber aussagekräftigen Funktionstests, die zuverlässig prüfen, ob die Hauptfunktionen der Anwendung wie erwartet arbeiten. Dazu zählen unter anderem das Emoji-Mapping, Formularvalidierung, API-Kommunikation, Kartenanzeige und Interaktionen mit UI-Elementen wie Buttons.
### Testfälle
| Nr. | Komponente / Datei | Testziel |
|:---|:---|:---|
| 1 | `utils/categoryEmoji.js` | Gibt für eine bekannte Kategorie das richtige Emoji zurück |
| 2 | `components/custom-event-form.jsx` | Validiert korrekt, ob Pflichtfelder leer sind |
| 3 | `components/map.jsx` | Stellt sicher, dass die Karte korrekt gerendert wird |
| 4 | `utils/api.js` | `fetchLiveEventsByCategory()` gibt eine Liste von Events zurück |
| 5 | `components/Button.jsx` | Löst beim Klick korrekt das Callback `onButtonClick` aus |
## Durchführung der Tests
Zur Sicherstellung der Funktionalität und Stabilität der wichtigsten Komponenten wurden gezielt fünf Unit-Tests mit `Vitest` und `@testing-library/react` durchgeführt. Diese Tests decken sowohl funktionale Logik (z. B. Emoji-Mapping und API-Aufrufe) als auch interaktive UI-Komponenten (Formulareingabe, Button-Verhalten, Kartenanzeige) ab.

Ziel war es, kritische Pfade der Anwendung automatisiert zu prüfen, typische Fehlerquellen frühzeitig zu erkennen und die Eingaben clientseitig abzusichern. Die Testfälle basieren auf konkreten Use-Cases der Anwendung und wurden so konzipiert, dass sowohl positive als auch negative Szenarien abgedeckt werden.

Im Folgenden sind alle Tests mit Beschreibung, Eingaben und erwarteten Ausgaben dokumentiert.
### 1. `categoryEmoji.test.js` - Kategoriebasiertes Emoji-Mapping
Dieser Test prüft, ob die Funktion `categoryEmoji` für bekannte Kategorien das passende Emoji zurückgibt. Ebenso wird getestet, ob bei unbekannten oder leeren Eingaben ein Fallback-Emoji (`❓`) verwendet wird. Damit wird sichergestellt, dass die Darstellung der Events stets ein Symbol liefert – auch bei fehlerhaften oder unvollständigen Kategorien.
| Testfall | Eingabe | Erwartete Ausgabe |
|:---|:---|:---|
| Mapping von Kategorie zu Emoji | `"wildfires"` | `"🔥"` |
| Mapping von ungültiger Kategorie | `"unknown"` | `"❓"` |

**Unit-Test:**
```javascript
describe('categoryEmoji', () => {
    it('returns correct emoji for known categories', () => {
        expect(categoryEmoji('wildfires')).toBe('🔥');
        expect(categoryEmoji('severeStorms')).toBe('🌪️');
        expect(categoryEmoji('volcanoes')).toBe('🌋');
        expect(categoryEmoji('sealakeice')).toBe('🧊');
        expect(categoryEmoji('earthquakes')).toBe('🌍');
    });

    it('returns fallback for unknown category', () => {
        expect(categoryEmoji('unknownCategory')).toBe('❓');
    });

    it('handles null or empty input', () => {
        expect(categoryEmoji(null)).toBe('❓');
        expect(categoryEmoji('')).toBe('❓');
    });
});
```
### 2. `custom-event-form.test.js` - Formular-Komponente für neue Events
Dieser Test überprüft, ob das Formular zur Erstellung eines neuen Events korrekt auf fehlende Eingaben reagiert und nur bei vollständigen Eingaben ein Event erstellt. Die Validierung von Titel und Datum erfolgt clientseitig.
| Testfall | Eingabe | Erwartete Ausgabe |
|:---|:---|:---|
| Leeres Formular absenden | Kein Titel, kein Datum | Fehlermeldungen für Titel und Datum sichtbar |
| Gültige Eingabe absenden | Titel: `"Test Title"`, Datum: `"2024-01-01"` (Kategorie bleibt auf `"wildfires"`) | `onEventSubmit` wird mit `{ title, date, category }` aufgerufen |

**Unit-Test:**
```javascript
describe('CustomEventForm', () => {
    it('shows validation error when required fields are empty', () => {
        const mockSubmit = vi.fn();
        render(<CustomEventForm onEventSubmit={mockSubmit} />);
        fireEvent.click(screen.getByText('Create Event'));

        expect(screen.getByText('Enter title')).toBeInTheDocument();
        expect(screen.getByText('Choose a date')).toBeInTheDocument();
        expect(mockSubmit).not.toHaveBeenCalled();
    });

    it('submits form with valid inputs', () => {
        const mockSubmit = vi.fn();
        render(<CustomEventForm onEventSubmit={mockSubmit} />);

        fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Title' } });
        fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-01-01' } });
        fireEvent.click(screen.getByText('Create Event'));

        expect(mockSubmit).toHaveBeenCalledWith({
            title: 'Test Title',
            date: '2024-01-01',
            category: 'wildfires'
        });
    });
});
```
### 3. `map.test.js` - Leaflet-Karte für Live Events
Hier wird getestet, ob die Leaflet-Karte gerendert wird und die erwartete Klassenstruktur im DOM vorhanden ist. Dies stellt sicher, dass die visuelle Anzeige der Map korrekt initialisiert und eingebettet wird.
| Testfall | Eingabe | Erwartete Ausgabe |
|:---|:---|:---|
| Rendering der Karte (Leaflet) | `events`-Array mit einem Event (`title: "Mock Event"`, Koordinaten `[10, 20]`) | DOM enthält ein Element mit der Klasse `.leaflet-container` – d. h. die Karte wurde korrekt gerendert |

**Unit-Test:**
```javascript
describe('Map component', () => {
    it('renders without crashing and shows event marker', () => {
        const { container } = render(<Map center={[20, 0]} zoom={2} events={mockEvents} />);
        expect(container.querySelector('.leaflet-container')).toBeInTheDocument();
    });
});
```
### 4. `api.test.js` - API-Funktion `fetchLiveEventsByCategory`
Dieser Test prüft die Funktion `fetchLiveEventsByCategory` in zwei Fällen: Erfolgreicher Abruf und API-Fehler (HTTP 500). Er stellt sicher, dass die Anwendung zuverlässig Daten verarbeitet und bei Fehlern kontrolliert reagiert.
| Testfall | Eingabe | Erwartete Ausgabe |
|:---|:---|:---|
| Erfolgreicher Abruf | Kategorie: `"wildfires"`, Limit: `1` | Rückgabe eines Objekts mit `events`-Array |
| Fehler vom Server | API liefert Status 500 | Fehler: `"Failed to fetch category-filtered live events"` wird geworfen |

**Unit-Test:**
```javascript
describe('fetchLiveEventsByCategory', () => {
    it('fetches data and returns events', async () => {
        const data = await fetchLiveEventsByCategory('wildfires', 1);
        expect(data).toBeDefined();
        expect(data[0].title).toBe('Test Event');
    });

    it('throws error if fetch fails', async () => {
        fetch.mockImplementationOnce(() =>
            Promise.resolve({ ok: false, status: 500 })
        );
        await expect(fetchLiveEventsByCategory('wildfires', 1)).rejects.toThrow('Failed to fetch category-filtered live events');
    });
});
```
### 5. `button.test.jsx` - Button-Komponente
Die Button-Komponente wird auf ihre korrekte Darstellung, Funktion bei Klicks und Verhalten im deaktivierten Zustand getestet. Damit wird sichergestellt, dass Benutzerinteraktionen erwartungsgemäss funktionieren – zentrales Element in allen Views.
| Testfall | Eingabe | Erwartete Ausgabe |
|:---|:---|:---|
| Klick auf Button | Klick-Event auf Button | Aufruf der übergebenen Funktion `onButtonClick` |

**Unit-Test:**
```javascript
describe('Button component', () => {
    it('renders with text', () => {
        render(<Button text="Click me" onButtonClick={() => { }} />);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('calls function on click', () => {
        const handleClick = vi.fn();
        render(<Button text="Press" onButtonClick={handleClick} />);
        fireEvent.click(screen.getByText('Press'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('disables button if disabled is true', () => {
        render(<Button text="Disabled" disabled={true} onButtonClick={() => { }} />);
        expect(screen.getByText('Disabled')).toBeDisabled();
    });
});
```
## Installationsanleitung


## Hilfestellungen
Hier kommt noch Text für die Hilfestellungen...
### ChatGPT
>1. Zur Rechtschreibekorrektur und teilweise als Unterstützung bei Formulierungen von Text
>2. Beim strukturieren des Projekts und des Vorgehens
>3. Als Unterstützung bei der Initialisierung des Navigations-Hook in `Home.jsx`
>4. Als Unterstützung bei der Einbindung von Leaflet
>5. Als Unterstützung beim Erstellen von `CategoryContext.jsx` und `categoryEmoji.js`
>6. Beim Styling des Projekts mittels CSS
>7. Beim Verwenden von `<NavLink>` in `navigation.jsx`
>8. Unterstützend beim Verfassen der Testfälle und der Unit-Tests
>9. 
### Repositories zu M294 von JohnnyKrup
>1. Als Code-Vorlagen und zur Inspiration für die Struktur des Projekts

### SideQuests M294
>1. Als Nachschlagewerk für Installationen und Umsetzungen
