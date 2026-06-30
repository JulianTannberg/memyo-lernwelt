const SUBJECTS = [
  {
    id: 'mathe', name: 'Mathe', icon: '∑', color: '#94bbd9', description: 'Rechnen, Geometrie, Daten und Größen',
    topics: [
      timesTableTopic(1, '1er-Reihe', 1),
      timesTableTopic(2, '2er-Reihe', 1),
      timesTableTopic(5, '5er-Reihe', 1),
      timesTableTopic(10, '10er-Reihe', 1),
      timesTableTopic(3, '3er-Reihe', 2),
      timesTableTopic(4, '4er-Reihe', 2),
      timesTableTopic(6, '6er-Reihe', 2),
      timesTableTopic(9, '9er-Reihe', 2),
      timesTableTopic(8, '8er-Reihe', 3),
      timesTableTopic(7, '7er-Reihe', 3),
      mixedTimesTopic('mal-gemischt-leicht', 'Gemischt · leichte Reihen', [1, 2, 5, 10], 1, 20),
      mixedTimesTopic('mal-gemischt-mittel', 'Gemischt · mittlere Reihen', [3, 4, 6, 9], 2, 20),
      mixedTimesTopic('mal-gemischt-alle', 'Gemischt · alle Reihen', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 30),
      topic('ganze-zahlen', 'Ganze Zahlen', ['Positive und negative Zahlen einordnen.', 'Mit Vorzeichen rechnen.', 'Ergebnisse überschlagen und prüfen.'], [
        choice('m-gz-1', '−7 + 12 = ?', ['−19', '−5', '5', '19'], '5', 'Von −7 gehst du 12 Schritte nach rechts.'),
        choice('m-gz-2', '15 − 22 = ?', ['7', '−7', '−37', '37'], '−7', '22 ist um 7 größer als 15.'),
        choice('m-gz-3', 'Welche Zahl ist am kleinsten?', ['−2', '0', '−9', '4'], '−9', 'Auf dem Zahlenstrahl liegt −9 am weitesten links.'),
        choice('m-gz-4', '|−13| = ?', ['−13', '0', '13', '26'], '13', 'Der Betrag ist der Abstand von 0.')
      ]),
      topic('brueche', 'Brüche & Dezimalzahlen', ['Brüche vergleichen und kürzen.', 'Brüche und Dezimalzahlen ineinander umwandeln.', 'Mit Brüchen und Dezimalzahlen rechnen.'], [
        choice('m-br-1', 'Welcher Bruch ist gleich 0,5?', ['1/4', '1/2', '2/5', '3/4'], '1/2', '0,5 bedeutet fünf Zehntel – gekürzt ein Halb.'),
        choice('m-br-2', '1/4 + 2/4 = ?', ['2/8', '3/4', '3/8', '1/2'], '3/4', 'Bei gleichen Nennern werden die Zähler addiert.'),
        choice('m-br-3', '2,4 + 0,75 = ?', ['2,115', '3,05', '3,15', '3,25'], '3,15', 'Kommas untereinander schreiben.'),
        choice('m-br-4', 'Welcher Bruch ist vollständig gekürzt?', ['6/8', '4/10', '3/7', '9/12'], '3/7', '3 und 7 haben keinen gemeinsamen Teiler außer 1.')
      ]),
      topic('prozent', 'Prozentrechnung', ['Prozentwert, Grundwert und Prozentsatz unterscheiden.', 'Prozentangaben im Alltag berechnen.', 'Ergebnisse auf Plausibilität prüfen.'], [
        choice('m-pr-1', '25 % von 80 sind …', ['20', '25', '32', '40'], '20', '25 % sind ein Viertel. Ein Viertel von 80 ist 20.'),
        choice('m-pr-2', '50 von 200 entsprechen …', ['10 %', '20 %', '25 %', '40 %'], '25 %', '50 ist ein Viertel von 200.'),
        choice('m-pr-3', 'Ein Pullover kostet 60 €. 10 % Rabatt sind …', ['3 €', '6 €', '10 €', '54 €'], '6 €', '10 % von 60 sind 6.'),
        choice('m-pr-4', '75 % entsprechen welchem Bruch?', ['1/4', '1/2', '3/4', '4/3'], '3/4', '75 von 100 lässt sich zu 3/4 kürzen.')
      ]),
      topic('geometrie', 'Winkel & Figuren', ['Winkelarten unterscheiden.', 'Dreiecke und Vierecke beschreiben.', 'Umfang und Flächeninhalt berechnen.'], [
        choice('m-ge-1', 'Ein rechter Winkel hat …', ['45°', '90°', '180°', '360°'], '90°', 'Ein rechter Winkel misst 90 Grad.'),
        choice('m-ge-2', 'Fläche eines Rechtecks: 8 cm · 5 cm = ?', ['13 cm²', '26 cm²', '40 cm²', '80 cm²'], '40 cm²', 'Länge mal Breite.'),
        choice('m-ge-3', 'Wie viele Seiten hat ein Sechseck?', ['5', '6', '7', '8'], '6', '„Sechs“ steckt schon im Namen.'),
        choice('m-ge-4', 'Ein gestreckter Winkel hat …', ['90°', '120°', '180°', '360°'], '180°', 'Er bildet eine gerade Linie.')
      ]),
      topic('koordinaten', 'Koordinaten & Symmetrie', ['Punkte im Koordinatensystem lesen.', 'Figuren spiegeln und verschieben.', 'Symmetrieachsen erkennen.'], [
        choice('m-ko-1', 'Welcher Punkt liegt 3 nach rechts und 2 nach oben?', ['(2|3)', '(3|2)', '(−3|2)', '(3|−2)'], '(3|2)', 'Zuerst wird die x-Koordinate, dann die y-Koordinate genannt.'),
        choice('m-ko-2', 'Spiegelung von (4|−2) an der y-Achse:', ['(−4|−2)', '(4|2)', '(−2|4)', '(2|−4)'], '(−4|−2)', 'Beim Spiegeln an der y-Achse ändert sich das Vorzeichen von x.'),
        choice('m-ko-3', 'Wie viele Symmetrieachsen hat ein Quadrat?', ['1', '2', '3', '4'], '4', 'Zwei Mittellinien und zwei Diagonalen.'),
        choice('m-ko-4', 'Der Ursprung hat die Koordinaten …', ['(1|1)', '(0|1)', '(1|0)', '(0|0)'], '(0|0)', 'Dort schneiden sich die Achsen.')
      ]),
      topic('daten', 'Daten & Wahrscheinlichkeit', ['Tabellen und Diagramme auswerten.', 'Häufigkeiten vergleichen.', 'Einfache Wahrscheinlichkeiten bestimmen.'], [
        choice('m-da-1', 'Beim fairen Würfel: Wahrscheinlichkeit für eine 6?', ['1/2', '1/3', '1/6', '6/1'], '1/6', 'Eine von sechs Seiten zeigt die 6.'),
        choice('m-da-2', 'Der Mittelwert von 4, 6 und 8 ist …', ['5', '6', '7', '18'], '6', '(4 + 6 + 8) : 3 = 6.'),
        choice('m-da-3', 'Welche Darstellung eignet sich für eine Entwicklung über mehrere Monate?', ['Liniendiagramm', 'Wortliste', 'Zahlenstrahl', 'Mindmap'], 'Liniendiagramm', 'Eine Linie macht Veränderungen über die Zeit gut sichtbar.'),
        choice('m-da-4', 'Münzwurf: „Kopf oder Zahl“ – wie viele mögliche Ergebnisse?', ['1', '2', '4', '6'], '2', 'Es gibt Kopf und Zahl.')
      ]),
      topic('koerper', 'Körper, Oberfläche & Volumen', ['Netze und Körper zuordnen.', 'Oberflächen aus Teilflächen bestimmen.', 'Volumen von Quadern berechnen.'], [
        choice('m-kp-1', 'Volumen eines Quaders: 4 cm · 3 cm · 2 cm = ?', ['9 cm³', '12 cm³', '18 cm³', '24 cm³'], '24 cm³', 'Länge mal Breite mal Höhe.'),
        choice('m-kp-2', 'Wie viele Flächen hat ein Würfel?', ['4', '6', '8', '12'], '6', 'Ein Würfel hat sechs quadratische Flächen.'),
        choice('m-kp-3', 'Welche Einheit passt zum Volumen?', ['cm', 'cm²', 'cm³', '°'], 'cm³', 'Volumen wird in Kubikeinheiten angegeben.'),
        choice('m-kp-4', 'Ein Würfelnetz besteht aus … Quadraten.', ['4', '5', '6', '8'], '6', 'Jede Würfelfläche braucht ein Quadrat.')
      ])
    ]
  },
  {
    id: 'deutsch', name: 'Deutsch', icon: 'Aa', color: '#d9a6af', description: 'Wortarten, Rechtschreibung und Sätze',
    topics: [
      topic('wortarten', 'Wortarten', ['Nomen, Verben und Adjektive erkennen.', 'Pronomen und Artikel unterscheiden.', 'Wörter nach ihrer Funktion untersuchen.'], [
        choice('d-wo-1', 'Welche Wortart ist „laufen“?', ['Nomen', 'Verb', 'Adjektiv', 'Pronomen'], 'Verb', '„laufen“ bezeichnet eine Tätigkeit.'),
        choice('d-wo-2', 'Welche Wortart ist „freundlich“?', ['Adjektiv', 'Verb', 'Artikel', 'Nomen'], 'Adjektiv', 'Es beschreibt eine Eigenschaft.'),
        choice('d-wo-3', 'Welches Wort ist ein Pronomen?', ['Haus', 'sie', 'grün', 'springen'], 'sie', 'Pronomen stehen für Nomen.'),
        choice('d-wo-4', 'Welches Wort ist ein Nomen?', ['leise', 'denken', 'Freundschaft', 'wir'], 'Freundschaft', 'Nomen werden großgeschrieben.')
      ]),
      topic('grossschreibung', 'Groß- & Kleinschreibung', ['Nomen großschreiben.', 'Nominalisierungen erkennen.', 'Satzanfänge und Anredeformen beachten.'], [
        choice('d-gr-1', 'Welche Schreibweise ist richtig?', ['das schwimmen', 'das Schwimmen', 'Das schwimmen', 'das SCHWIMMEN'], 'das Schwimmen', 'Nach dem Artikel „das“ wird das Verb zum Nomen.'),
        choice('d-gr-2', 'Wähle die richtige Form: „Wir treffen uns am …“', ['montag', 'Montag', 'MONtag', 'monTag'], 'Montag', 'Wochentage sind Nomen.'),
        choice('d-gr-3', 'Welcher Satz ist richtig?', ['heute regnet es.', 'Heute regnet es.', 'Heute Regnet es.', 'heute Regnet Es.'], 'Heute regnet es.', 'Der Satzanfang wird großgeschrieben.'),
        choice('d-gr-4', '„Beim ___ lernte sie viel.“', ['lesen', 'Lesen', 'LESEN', 'LeSen'], 'Lesen', '„Beim“ zeigt eine Nominalisierung an.')
      ]),
      topic('zeitformen', 'Zeitformen', ['Präsens, Präteritum und Perfekt unterscheiden.', 'Verben passend verändern.', 'Zeitformen in Texten einheitlich verwenden.'], [
        choice('d-ze-1', 'Präteritum von „gehen“:', ['geht', 'ging', 'ist gegangen', 'gegangen'], 'ging', '„ging“ ist die einfache Vergangenheit.'),
        choice('d-ze-2', 'Perfekt von „spielen“:', ['spielte', 'spielt', 'hat gespielt', 'wird spielen'], 'hat gespielt', 'Perfekt: Hilfsverb + Partizip II.'),
        choice('d-ze-3', '„Ich lese.“ steht im …', ['Präsens', 'Präteritum', 'Perfekt', 'Futur'], 'Präsens', 'Die Handlung findet in der Gegenwart statt.'),
        choice('d-ze-4', 'Futur I von „lernen“:', ['lernte', 'hat gelernt', 'wird lernen', 'lernt'], 'wird lernen', 'Futur I: werden + Infinitiv.')
      ]),
      topic('saetze', 'Sätze & Satzglieder', ['Subjekt und Prädikat erkennen.', 'Satzglieder umstellen.', 'Haupt- und Nebensätze unterscheiden.'], [
        choice('d-sa-1', '„Der Hund bellt.“ – Was ist das Subjekt?', ['Der Hund', 'bellt', 'der', 'Hund bellt'], 'Der Hund', 'Das Subjekt beantwortet die Frage: Wer oder was?'),
        choice('d-sa-2', 'Welches Wort ist das Prädikat? „Mia schreibt einen Brief.“', ['Mia', 'schreibt', 'einen', 'Brief'], 'schreibt', 'Das Prädikat ist die Verbform.'),
        choice('d-sa-3', 'Welcher Satz endet mit einem Fragezeichen?', ['Aussagesatz', 'Fragesatz', 'Ausrufesatz', 'Befehlssatz'], 'Fragesatz', 'Eine direkte Frage endet mit ?'),
        choice('d-sa-4', 'Welches Satzglied antwortet auf „Wen oder was?“', ['Subjekt', 'Prädikat', 'Akkusativobjekt', 'Adverbial'], 'Akkusativobjekt', 'Das Akkusativobjekt wird mit „Wen oder was?“ erfragt.')
      ])
    ]
  },
  {
    id: 'englisch', name: 'Englisch', icon: 'EN', color: '#e7c96b', description: 'Units, Wortschatz und Grammatik',
    topics: [
      topic('home', 'Unit 1 · My home is my castle', ['Über Zuhause und Wohnorte sprechen.', 'Räume und Gegenstände benennen.', 'There is / there are verwenden.'], [
        choice('e-ho-1', '„Küche“ heißt auf Englisch …', ['kitchen', 'living room', 'garden', 'bedroom'], 'kitchen', 'The kitchen is where you cook.'),
        choice('e-ho-2', 'There ___ two windows.', ['is', 'are', 'am', 'be'], 'are', 'Bei mehreren Dingen heißt es „there are“.'),
        choice('e-ho-3', 'Which word means „Schlafzimmer“?', ['bathroom', 'bedroom', 'hall', 'roof'], 'bedroom', 'bed + room = bedroom.'),
        choice('e-ho-4', 'Choose the correct sentence.', ['There are a sofa.', 'There is two chairs.', 'There is a sofa.', 'There be a sofa.'], 'There is a sofa.', '„A sofa“ ist Einzahl.')
      ]),
      topic('london', 'Unit 2 · London', ['Orte in London benennen.', 'Nach dem Weg fragen.', 'Einfache Reiseinformationen verstehen.'], [
        choice('e-lo-1', '„Brücke“ heißt …', ['bridge', 'street', 'station', 'square'], 'bridge', 'Tower Bridge is a famous bridge.'),
        choice('e-lo-2', 'How do you ask for the way?', ['How old are you?', 'Where is the station?', 'What is your hobby?', 'When is lunch?'], 'Where is the station?', 'Mit „Where is …?“ fragst du nach einem Ort.'),
        choice('e-lo-3', 'The opposite of „left“ is …', ['right', 'straight', 'near', 'behind'], 'right', 'left ↔ right.'),
        choice('e-lo-4', '„Go straight on“ bedeutet …', ['Geh zurück.', 'Geh geradeaus.', 'Biege links ab.', 'Bleib stehen.'], 'Geh geradeaus.', 'straight on = geradeaus.')
      ]),
      topic('belong', 'Unit 3 · Where I belong', ['Über Familie, Freunde und Zugehörigkeit sprechen.', 'Gefühle und Eigenschaften beschreiben.', 'Einfache Vergleiche bilden.'], [
        choice('e-be-1', '„Freundschaft“ heißt …', ['family', 'friendship', 'feeling', 'future'], 'friendship', 'friend + ship = friendship.'),
        choice('e-be-2', 'Comparative of „happy“:', ['happyer', 'more happyer', 'happier', 'happiest'], 'happier', 'y wird zu i: happy → happier.'),
        choice('e-be-3', '„Ich gehöre dazu.“', ['I belong.', 'I am leave.', 'I do home.', 'I becoming.'], 'I belong.', 'to belong = dazugehören.'),
        choice('e-be-4', 'Which adjective is positive?', ['kind', 'angry', 'lonely', 'worried'], 'kind', 'kind = freundlich / nett.')
      ]),
      topic('adventures', 'Unit 4 · Adventures', ['Über Erlebnisse berichten.', 'Simple Past verwenden.', 'Reihenfolgen mit first, then und finally ausdrücken.'], [
        choice('e-ad-1', 'Simple Past of „go“:', ['goed', 'went', 'gone', 'goes'], 'went', 'go → went.'),
        choice('e-ad-2', '„Zuerst“ heißt …', ['finally', 'then', 'first', 'after'], 'first', 'first = zuerst.'),
        choice('e-ad-3', 'Choose the correct sentence.', ['We see a castle yesterday.', 'We saw a castle yesterday.', 'We seeing a castle yesterday.', 'We was see a castle.'], 'We saw a castle yesterday.', 'see → saw im Simple Past.'),
        choice('e-ad-4', '„exciting“ bedeutet …', ['langweilig', 'aufregend', 'gefährlich', 'ruhig'], 'aufregend', 'An adventure can be exciting.')
      ]),
      topic('celebrations', 'Unit 5 · Celebrations', ['Über Feste und Traditionen sprechen.', 'Einladungen verstehen und schreiben.', 'Daten und Monate verwenden.'], [
        choice('e-ce-1', '„Einladung“ heißt …', ['invitation', 'celebration', 'present', 'holiday'], 'invitation', 'invite → invitation.'),
        choice('e-ce-2', 'Christmas is in …', ['January', 'March', 'June', 'December'], 'December', 'Christmas is on 25 December.'),
        choice('e-ce-3', 'How do you invite someone?', ['Would you like to come?', 'Where do you live?', 'What time is it?', 'How much is it?'], 'Would you like to come?', 'Das ist eine höfliche Einladung.'),
        choice('e-ce-4', '„Geschenk“ heißt …', ['party', 'present', 'card', 'cake'], 'present', 'present = Geschenk.')
      ])
    ]
  },
  {
    id: 'natur', name: 'Natur', icon: '⌁', color: '#a8bea3', description: 'Lernplakate, Wissen und kleine Quizze',
    topics: [
      posterTopic('wasser', 'Wasserkreislauf', ['Verdunstung, Wolkenbildung und Niederschlag.', 'Wasser bewegt sich in einem Kreislauf.', 'Das Lernplakat kann später als eigene Datei ergänzt werden.']),
      posterTopic('wald', 'Ökosystem Wald', ['Produzenten, Konsumenten und Zersetzer.', 'Nahrungsketten und Lebensräume.', 'Das Lernplakat kann später als eigene Datei ergänzt werden.']),
      posterTopic('koerper', 'Der menschliche Körper', ['Organe und ihre Aufgaben.', 'Atmung, Verdauung und Blutkreislauf.', 'Das Lernplakat kann später als eigene Datei ergänzt werden.']),
      posterTopic('energie', 'Energie & Strom', ['Stromkreis, Leiter und Nichtleiter.', 'Energieformen und Energieumwandlung.', 'Das Lernplakat kann später als eigene Datei ergänzt werden.'])
    ]
  }
];

function topic(id, name, learn, questions) { return { id, name, learn, questions, poster: false }; }
function posterTopic(id, name, learn) {
  return { id, name, learn, poster: true, questions: [
    choice(`n-${id}-1`, `Welcher Satz passt zum Thema „${name}“?`, [learn[0], 'Das Thema hat keine Fachbegriffe.', 'Nur die Überschrift ist wichtig.', 'Man kann dazu nichts üben.'], learn[0], 'Die passende Kernaussage steht auch auf dem künftigen Lernplakat.'),
    choice(`n-${id}-2`, 'Was hilft beim Lernen mit einem Plakat?', ['Nur schnell ansehen', 'Überschriften und Schlüsselbegriffe erklären', 'Alles auswendig abschreiben', 'Das Plakat verdecken'], 'Überschriften und Schlüsselbegriffe erklären', 'Aktives Erklären hilft beim Verstehen.')
  ] };
}
function choice(id, q, options, correct, hint) { return { id, q, options, correct, hint }; }

function makeTimesQuestion(prefix, row, factor, number) {
  const correct = row * factor;
  const candidates = [
    row * Math.max(1, factor - 1),
    row * (factor + 1),
    (row + 1) * factor,
    Math.max(0, correct - row),
    correct + row,
    Math.max(0, correct - 1),
    correct + 1,
    correct + 10
  ];
  return choice(
    `${prefix}-${number}`,
    `${row} · ${factor} = ?`,
    uniqueOptions(correct, candidates),
    String(correct),
    `Zähle ${factor}-mal in ${row}er-Schritten.`
  );
}

function timesTableTopic(row, label, gameTier) {
  const questions = Array.from({ length: 10 }, (_, index) =>
    makeTimesQuestion(`m-mal-${row}`, row, index + 1, index + 1)
  );
  const item = topic(
    `mal-${row}`,
    `Kleines 1×1 · ${label}`,
    [
      `Übe die ${label} von 1 bis 10.`,
      'Sprich die Aufgaben und Ergebnisse möglichst laut mit.',
      'Im Übungsbereich kommt die Reihe zunächst der Reihe nach; im Spiel wird sie gemischt.'
    ],
    questions
  );
  item.gameTier = gameTier;
  item.timesTable = true;
  item.practiceLabel = `${label} der Reihe nach`;
  return item;
}

function mixedTimesTopic(id, name, rows, gameTier, count) {
  const pairs = [];
  for (const row of rows) {
    for (let factor = 1; factor <= 10; factor++) pairs.push({ row, factor });
  }
  pairs.sort((a, b) => {
    const scoreA = (a.factor * 37 + a.row * 19 + a.factor * a.row * 3) % 101;
    const scoreB = (b.factor * 37 + b.row * 19 + b.factor * b.row * 3) % 101;
    return scoreA - scoreB || a.row - b.row || a.factor - b.factor;
  });
  const selected = pairs.slice(0, Math.min(count, pairs.length));
  const questions = selected.map((pair, index) =>
    makeTimesQuestion(`m-${id}`, pair.row, pair.factor, index + 1)
  );
  const item = topic(
    id,
    `Kleines 1×1 · ${name}`,
    [
      `Rechne Aufgaben aus den Reihen ${rows.join(', ')} durcheinander.`,
      'Versuche erst im Kopf zu rechnen und wähle dann das Ergebnis.',
      'Bei jeder neuen Runde werden im Spiel zehn Aufgaben aus diesem Pool ausgewählt.'
    ],
    questions
  );
  item.gameTier = gameTier;
  item.timesTable = true;
  item.shufflePractice = true;
  item.practiceLabel = 'Reihen durcheinander';
  return item;
}

const STORAGE_KEY = 'memyo-lernwelt-progress-v10';
const SETTINGS_KEY = 'memyo-lernwelt-settings-v10';
const AVATARS = [
  { id: 'pips', name: 'Pips' },
  { id: 'hare', name: 'Hase' },
  { id: 'fox', name: 'Fuchs' },
  { id: 'deer', name: 'Reh' }
];
const ACCESSORIES = [
  { id: 'none', name: 'Ohne Extra', icon: '·', unlock: 0, desc: 'pur' },
  { id: 'starclip', name: 'Sternclip', icon: '⭐', unlock: 20, desc: 'für erste Treffer' },
  { id: 'mooncape', name: 'Mondumhang', icon: '🌙', unlock: 45, desc: 'für starke Runden' },
  { id: 'skate', name: 'Skateboard', icon: '🛹', unlock: 75, desc: 'für coole Profis' },
  { id: 'crystal', name: 'Kristallfunke', icon: '💎', unlock: 105, desc: 'für Top-Highscores' }
];

let progress = loadProgress();
let settings = loadSettings();
let view = { screen: 'home', subjectId: null, topicId: null, tab: 'game' };
let onboardingShown = false;
let practice = null;
let game = null;
let deferredInstallPrompt = null;

const app = document.querySelector('#app');
const backButton = document.querySelector('#backButton');
const brandButton = document.querySelector('#brandButton');
const resetButton = document.querySelector('#resetButton');
const installButton = document.querySelector('#installButton');
const profileButton = document.querySelector('#profileButton');
const profileOverlay = document.querySelector('#profileOverlay');
const overlay = document.querySelector('#bowlingOverlay');

function normalizeName(value) {
  return String(value || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function defaultSettings() {
  return { mode: 'school', playerName: '', avatar: 'pips', accessory: 'none', schoolProfiles: {} };
}

function loadSettings() {
  try {
    const data = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
    return {
      ...defaultSettings(),
      ...data,
      schoolProfiles: Object.fromEntries(Object.entries(data.schoolProfiles || {}).map(([key, value]) => [key, { unlockedAccessories: ['none'], selectedAccessory: 'none', ...value }]))
    };
  } catch {
    return defaultSettings();
  }
}
function saveSettings() { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); }

function loadProgress() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    if (!data.personal && !data.school) return { personal: data, school: {} };
    return { personal: data.personal || {}, school: data.school || {} };
  } catch {
    return { personal: {}, school: {} };
  }
}
function saveProgress() { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }

function currentProgressBucket() {
  if (settings.mode === 'school' && settings.playerName) {
    const key = normalizeName(settings.playerName);
    progress.school[key] = progress.school[key] || {};
    return progress.school[key];
  }
  progress.personal = progress.personal || {};
  return progress.personal;
}

function topicProgress(topic) {
  const bucket = currentProgressBucket();
  const solved = new Set(bucket[topic.id]?.solved || []);
  return Math.round((solved.size / topic.questions.length) * 100);
}
function subjectProgress(subject) {
  if (!subject.topics.length) return 0;
  return Math.round(subject.topics.reduce((sum, t) => sum + topicProgress(t), 0) / subject.topics.length);
}
function currentSubject() { return SUBJECTS.find(s => s.id === view.subjectId); }
function currentTopic() { return currentSubject()?.topics.find(t => t.id === view.topicId); }
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

function currentAvatarId() {
  return AVATARS.some(item => item.id === settings.avatar) ? settings.avatar : 'pips';
}
function currentAvatar() {
  return AVATARS.find(item => item.id === currentAvatarId()) || AVATARS[0];
}
function avatarAsset(id, pose) {
  return `assets/${id}-${pose}.png`;
}
function avatarOptionCard(avatarId) {
  const avatar = AVATARS.find(item => item.id === avatarId) || AVATARS[0];
  return `<button class="avatar-option ${currentAvatarId() === avatar.id ? 'active' : ''}" data-avatar-choice="${avatar.id}" type="button"><img src="${avatarAsset(avatar.id,'wait')}" alt=""><span>${avatar.name}</span></button>`;
}
function currentProfileKey() {
  return settings.playerName ? normalizeName(settings.playerName) : '';
}
function currentProfile() {
  const key = currentProfileKey();
  return key ? settings.schoolProfiles[key] || null : null;
}
function ensureAccessoryList(profile) {
  const base = Array.isArray(profile?.unlockedAccessories) ? profile.unlockedAccessories : ['none'];
  return base.includes('none') ? base : ['none', ...base];
}
function currentAccessoryId() {
  const profile = currentProfile();
  const saved = profile?.selectedAccessory || settings.accessory || 'none';
  const unlocked = ensureAccessoryList(profile || {});
  return unlocked.includes(saved) ? saved : 'none';
}
function currentAccessory() {
  return ACCESSORIES.find(item => item.id === currentAccessoryId()) || ACCESSORIES[0];
}
function accessoryBadge(id = currentAccessoryId()) {
  const item = ACCESSORIES.find(entry => entry.id === id) || ACCESSORIES[0];
  return item.id === 'none' ? '' : `<span class="accessory-badge accessory-${item.id}" aria-hidden="true">${item.icon}</span>`;
}
function accessoryChoiceCard(id, active) {
  const item = ACCESSORIES.find(entry => entry.id === id) || ACCESSORIES[0];
  return `<button class="accessory-option ${active ? 'active' : ''}" data-accessory-choice="${item.id}" type="button"><span class="accessory-preview">${item.icon}</span><span><strong>${item.name}</strong><small>${item.desc}</small></span></button>`;
}
function maybeUnlockAccessories(profile, score) {
  const unlocked = new Set(ensureAccessoryList(profile));
  const newly = [];
  for (const item of ACCESSORIES) {
    if (score >= item.unlock && !unlocked.has(item.id)) {
      unlocked.add(item.id);
      newly.push(item);
    }
  }
  profile.unlockedAccessories = [...unlocked];
  if (!profile.selectedAccessory || !profile.unlockedAccessories.includes(profile.selectedAccessory)) {
    profile.selectedAccessory = 'none';
  }
  return newly;
}
function getSortedSchoolProfiles() {
  return Object.values(settings.schoolProfiles || {}).sort((a, b) => (b.bestScore || 0) - (a.bestScore || 0) || a.name.localeCompare(b.name));
}
function saveCurrentProfile(name, avatarId, accessoryId = null) {
  const trimmed = String(name || '').trim();
  if (!trimmed) return { ok: false, message: 'Bitte einen Namen eingeben.' };
  const key = normalizeName(trimmed);
  const existing = settings.schoolProfiles[key] || {};
  const unlockedAccessories = ensureAccessoryList(existing);
  settings.playerName = trimmed;
  settings.avatar = avatarId || existing.avatar || 'pips';
  settings.accessory = accessoryId || existing.selectedAccessory || 'none';
  if (!unlockedAccessories.includes(settings.accessory)) settings.accessory = 'none';
  settings.schoolProfiles[key] = {
    name: trimmed,
    avatar: settings.avatar,
    bestScore: existing.bestScore || 0,
    plays: existing.plays || 0,
    lastScore: existing.lastScore || 0,
    bestTopic: existing.bestTopic || '',
    unlockedAccessories,
    selectedAccessory: settings.accessory
  };
  saveSettings();
  renderProfileButton();
  return { ok: true };
}
function rememberSchoolScore(score, topicName) {
  if (settings.mode !== 'school' || !settings.playerName) return [];
  const key = normalizeName(settings.playerName);
  const existing = settings.schoolProfiles[key] || { name: settings.playerName, avatar: currentAvatarId(), bestScore: 0, plays: 0, lastScore: 0, bestTopic: '', unlockedAccessories: ['none'], selectedAccessory: settings.accessory || 'none' };
  existing.name = settings.playerName;
  existing.avatar = currentAvatarId();
  existing.lastScore = score;
  existing.plays = (existing.plays || 0) + 1;
  if ((score || 0) >= (existing.bestScore || 0)) {
    existing.bestScore = score || 0;
    existing.bestTopic = topicName || existing.bestTopic || '';
  }
  const newlyUnlocked = maybeUnlockAccessories(existing, existing.bestScore || 0);
  settings.accessory = existing.selectedAccessory || 'none';
  settings.schoolProfiles[key] = existing;
  saveSettings();
  return newlyUnlocked;
}
function renderProfileButton() {
  const avatarId = currentAvatarId();
  const label = settings.playerName || 'Schulprofil';
  profileButton.innerHTML = `<span class="profile-avatar-wrap"><img src="${avatarAsset(avatarId,'wait')}" alt="">${accessoryBadge()}</span><span><strong>${escapeHtml(label)}</strong><small>${settings.mode === 'school' ? 'Schulmodus' : 'Zuhause'}</small></span>`;
}
function openProfileOverlay() {
  const profiles = getSortedSchoolProfiles();
  const activeProfile = currentProfile() || {};
  const activeUnlocked = ensureAccessoryList(activeProfile);
  profileOverlay.classList.remove('hidden');
  profileOverlay.setAttribute('aria-hidden', 'false');
  profileOverlay.innerHTML = `
    <div class="profile-dialog">
      <button class="close-overlay" id="closeProfileOverlay" type="button" aria-label="Schließen">×</button>
      <p class="eyebrow">Spieler wählen</p>
      <h2>Schulmodus & Figurenwahl</h2>
      <div class="mode-toggle">
        <button class="mode-pill ${settings.mode === 'school' ? 'active' : ''}" data-mode-choice="school" type="button">Schulmodus</button>
        <button class="mode-pill ${settings.mode === 'home' ? 'active' : ''}" data-mode-choice="home" type="button">Zuhause</button>
      </div>
      <p class="lead">Im Schulmodus werden keine Konten benötigt. Einfach Namen eingeben, eine Figur auswählen und loslegen. Der Highscore bleibt lokal im Browser gespeichert.</p>
      <label class="field-label">Name
        <input id="playerNameInput" class="name-input" maxlength="24" value="${escapeHtml(settings.playerName || '')}" placeholder="z. B. Lina">
      </label>
      <div class="avatar-picker">
        ${AVATARS.map(avatar => `<button class="avatar-option ${currentAvatarId() === avatar.id ? 'active' : ''}" data-avatar-choice="${avatar.id}" type="button"><img src="${avatarAsset(avatar.id,'wait')}" alt=""><span><strong>${avatar.name}</strong><small>${avatar.id === 'pips' ? 'Fledermaus' : avatar.id === 'hare' ? 'hüpft schnell' : avatar.id === 'fox' ? 'schlau & flink' : 'leicht & elegant'}</small></span></button>`).join('')}
      </div>
      <div class="accessory-section">
        <div class="section-head"><h3>Freigeschaltete Extras</h3><small>durch Highscores</small></div>
        <div class="accessory-picker">
          ${activeUnlocked.map(id => accessoryChoiceCard(id, currentAccessoryId() === id)).join('')}
        </div>
      </div>
      ${profiles.length ? `<div class="saved-profiles"><h3>Gespeicherte Namen</h3><div class="saved-profile-list">${profiles.slice(0,8).map(item => `<button class="saved-profile-chip" data-profile-name="${escapeHtml(item.name)}" data-profile-avatar="${item.avatar || 'pips'}" data-profile-accessory="${item.selectedAccessory || 'none'}" type="button"><span class="saved-avatar-wrap"><span class="saved-avatar-wrap"><img src="${avatarAsset(item.avatar || 'pips','wait')}" alt="">${accessoryBadge(item.selectedAccessory || 'none')}</span>${accessoryBadge(item.selectedAccessory || 'none')}</span><span>${escapeHtml(item.name)}</span><small>${item.bestScore || 0} Punkte</small></button>`).join('')}</div></div>` : ''}
      <div class="button-row"><button class="primary-button" id="saveProfileButton" type="button">Speichern</button><button class="secondary-button" id="closeProfileButton" type="button">Schließen</button></div>
      <p class="overlay-note" id="profileOverlayNote">Ab 20 Punkten werden erste Extras freigeschaltet.</p>
    </div>`;

  let draftAvatar = currentAvatarId();
  let draftAccessory = currentAccessoryId();

  function refreshAccessoryChoices(unlocked) {
    const picker = profileOverlay.querySelector('.accessory-picker');
    picker.innerHTML = unlocked.map(id => accessoryChoiceCard(id, draftAccessory === id)).join('');
    picker.querySelectorAll('[data-accessory-choice]').forEach(btn => btn.addEventListener('click', () => {
      draftAccessory = btn.dataset.accessoryChoice;
      picker.querySelectorAll('[data-accessory-choice]').forEach(item => item.classList.toggle('active', item.dataset.accessoryChoice === draftAccessory));
    }));
  }

  profileOverlay.querySelectorAll('[data-avatar-choice]').forEach(btn => btn.addEventListener('click', () => {
    draftAvatar = btn.dataset.avatarChoice;
    profileOverlay.querySelectorAll('[data-avatar-choice]').forEach(item => item.classList.toggle('active', item.dataset.avatarChoice === draftAvatar));
  }));
  profileOverlay.querySelectorAll('[data-profile-name]').forEach(btn => btn.addEventListener('click', () => {
    const key = normalizeName(btn.dataset.profileName);
    const profile = settings.schoolProfiles[key] || { unlockedAccessories: ['none'] };
    profileOverlay.querySelector('#playerNameInput').value = btn.dataset.profileName;
    draftAvatar = btn.dataset.profileAvatar || 'pips';
    draftAccessory = profile.selectedAccessory || 'none';
    profileOverlay.querySelectorAll('[data-avatar-choice]').forEach(item => item.classList.toggle('active', item.dataset.avatarChoice === draftAvatar));
    refreshAccessoryChoices(ensureAccessoryList(profile));
  }));
  profileOverlay.querySelectorAll('[data-mode-choice]').forEach(btn => btn.addEventListener('click', () => {
    settings.mode = btn.dataset.modeChoice;
    saveSettings();
    openProfileOverlay();
  }));
  const close = () => { profileOverlay.classList.add('hidden'); profileOverlay.setAttribute('aria-hidden', 'true'); profileOverlay.innerHTML = ''; };
  profileOverlay.querySelector('#closeProfileOverlay').addEventListener('click', close);
  profileOverlay.querySelector('#closeProfileButton').addEventListener('click', close);
  profileOverlay.onclick = event => { if (event.target === profileOverlay) close(); };
  refreshAccessoryChoices(activeUnlocked);
  profileOverlay.querySelector('#saveProfileButton').addEventListener('click', () => {
    const result = saveCurrentProfile(profileOverlay.querySelector('#playerNameInput').value, draftAvatar, draftAccessory);
    const note = profileOverlay.querySelector('#profileOverlayNote');
    if (!result.ok) {
      note.textContent = result.message;
      return;
    }
    note.textContent = 'Gespeichert.';
    render();
    setTimeout(close, 250);
  });
}

function render() {
  document.body.classList.toggle('game-mode', view.screen === 'topic');
  backButton.classList.toggle('hidden', view.screen === 'home');
  renderProfileButton();
  resetButton.textContent = settings.mode === 'school' && settings.playerName ? 'Stand für diesen Namen löschen' : 'Fortschritt zurücksetzen';
  if (view.screen === 'home') renderHome();
  if (view.screen === 'subject') renderSubject();
  if (view.screen === 'topic') renderTopic();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderHome() {
  const profiles = getSortedSchoolProfiles();
  const activeProfile = settings.playerName ? settings.schoolProfiles[normalizeName(settings.playerName)] : null;
  app.innerHTML = `
    <section class="hero">
      <div>
        <p class="eyebrow">Kostenloser Lernbereich von memyo</p>
        <h1>Lernwelt</h1>
        <p class="lead">Alle Themen sind offen. Wähle ein Fach, starte direkt im Lernspiel und löse nach jeder Aufgabe eine kleine Spielaktion.</p>
        <div class="mode-banner">
          <span class="pill strong">${settings.mode === 'school' ? 'Schulmodus' : 'Zuhause'}</span>
          <span>${settings.playerName ? `Spieler: <strong>${escapeHtml(settings.playerName)}</strong>` : 'Noch kein Name gewählt'}</span>
          <button class="secondary-button small" id="openProfileSetup" type="button">Name & Figur wählen</button>
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <span class="orbit one"></span><span class="orbit two"></span>
        <span class="symbol s1">∑</span><span class="symbol s2">Aa</span><span class="symbol s3">EN</span>
      </div>
    </section>
    <section class="school-board">
      <div class="school-card player-card">
        <div class="player-card-head">
          <span class="player-avatar-wrap"><img src="${avatarAsset(currentAvatarId(),'wait')}" alt="">${accessoryBadge()}</span>
          <div>
            <h3>${settings.playerName ? escapeHtml(settings.playerName) : 'Noch kein Profil gewählt'}</h3>
            <p>${settings.mode === 'school' ? 'Einfach Name eingeben, Figur aussuchen und losspielen.' : 'Zuhause-Modus mit gespeichertem Fortschritt.'}</p>
          </div>
        </div>
        <div class="player-card-meta">
          <div><span>Aktive Figur</span><strong>${escapeHtml(currentAvatar().name)}</strong></div><div><span>Extra</span><strong>${escapeHtml(currentAccessory().name)}</strong></div>
          <div><span>Persönlicher Highscore</span><strong>${activeProfile?.bestScore || 0}</strong></div>
          <div><span>Gespielte Runden</span><strong>${activeProfile?.plays || 0}</strong></div><div><span>Freigeschaltet</span><strong>${ensureAccessoryList(activeProfile || {}).length - 1}</strong></div>
        </div>
      </div>
      <div class="school-card score-card">
        <div class="score-card-head"><h3>Highscores im Browser</h3><p>Die Liste bleibt lokal auf diesem Gerät gespeichert.</p></div>
        ${profiles.length ? `<ol class="score-list">${profiles.slice(0,6).map(item => `<li><span class="saved-avatar-wrap"><img src="${avatarAsset(item.avatar || 'pips','wait')}" alt="">${accessoryBadge(item.selectedAccessory || 'none')}</span><strong>${escapeHtml(item.name)}</strong><span>${item.bestScore || 0} Punkte</span></li>`).join('')}</ol>` : '<p class="notice">Noch keine Highscores vorhanden.</p>'}
      </div>
    </section>
    <section aria-labelledby="subjectsTitle">
      <h2 id="subjectsTitle">Was möchtest du heute üben?</h2>
      <p class="lead">Die Prozentwerte zeigen den Stand des aktuell gewählten Profils – sie sperren keine Themen.</p>
      <div class="subject-grid">
        ${SUBJECTS.map(subjectCard).join('')}
      </div>
    </section>`;
  app.querySelectorAll('[data-subject]').forEach(btn => btn.addEventListener('click', () => openSubject(btn.dataset.subject)));
  document.querySelector('#openProfileSetup')?.addEventListener('click', openProfileOverlay);
  if (!settings.playerName && !onboardingShown) { onboardingShown = true; setTimeout(() => openProfileOverlay(), 120); }
}


function subjectCard(subject) {
  const value = subjectProgress(subject);
  const done = subject.topics.filter(t => topicProgress(t) === 100).length;
  return `<button class="subject-card" style="--accent:${subject.color}" data-subject="${subject.id}" type="button">
    <div class="subject-head"><div><h3>${subject.name}</h3><p>${subject.description}</p></div><span class="subject-icon">${subject.icon}</span></div>
    <div class="progress-row"><div class="progress-track"><div class="progress-fill" style="--progress:${value}%"></div></div><strong>${value}%</strong></div>
    <p>${done} von ${subject.topics.length} Themen abgeschlossen</p>
  </button>`;
}

function openSubject(id) { view = { screen:'subject', subjectId:id, topicId:null, tab:'game' }; render(); }
function openTopic(id) { view.screen='topic'; view.topicId=id; view.tab='game'; practice=null; game=null; render(); }

function renderSubject() {
  const subject = currentSubject();
  const value = subjectProgress(subject);
  app.innerHTML = `
    <section class="page-head" style="--accent:${subject.color}">
      <p class="crumb">memyo Lernwelt · ${subject.name}</p>
      <div class="page-head-row">
        <div><h2>${subject.name}</h2><p class="lead">Die Reihen starten bewusst mit dem kleinen 1×1 und werden danach Schritt für Schritt schwerer. Jedes Thema öffnet sofort das Lernspiel.</p></div>
        <div class="page-progress"><div class="progress-row"><div class="progress-track"><div class="progress-fill" style="--progress:${value}%;--accent:${subject.color}"></div></div><strong>${value}%</strong></div></div>
      </div>
    </section>
    <div class="topic-grid">
      ${subject.topics.map((t,i) => topicCard(subject,t,i)).join('')}
    </div>`;
  app.querySelectorAll('[data-topic]').forEach(btn => btn.addEventListener('click', () => openTopic(btn.dataset.topic)));
}

function topicCard(subject, topic, index) {
  const value = topicProgress(topic);
  return `<button class="topic-card" style="--accent:${subject.color}" data-topic="${topic.id}" type="button">
    <span class="topic-number">${String(index + 1).padStart(2,'0')}</span>
    <h3>${topic.name}</h3>
    <p>${topic.learn[0]}</p>
    <div class="topic-meta"><span class="pill">Direkt starten</span><span class="pill">${topic.questions.length} Aufgaben</span><span class="pill">Spiel nach jeder Aufgabe</span>${topic.poster ? '<span class="pill">Wissen & Quiz</span>' : ''}</div>
    <div class="progress-row"><div class="progress-track"><div class="progress-fill" style="--progress:${value}%"></div></div><strong>${value}%</strong></div>
  </button>`;
}

function renderTopic() {
  const subject = currentSubject();
  const topic = currentTopic();
  const value = topicProgress(topic);
  document.body.classList.add('game-mode');
  app.innerHTML = `
    <section class="game-page-head" style="--accent:${subject.color}">
      <div>
        <p class="crumb">${subject.name} · ${topic.name}</p>
        <h2>${topic.name}</h2>
        <p class="lead">Direktes Lernspiel: erst Aufgabe lösen, dann sofort eine Spielaktion. Keine extra Reiter – alles läuft in einem Ablauf.</p>
      </div>
      <div class="game-page-meta">
        <span class="pill strong">${topic.questions.length} Aufgaben im Pool</span>
        <span class="pill">Fortschritt ${value}%</span>
      </div>
    </section>
    <div class="topic-layout game-focus-layout" style="--accent:${subject.color}">
      <section class="panel game-panel solo-game-panel">
        <div class="game-topic-label">${escapeHtml(subject.name)} · ${escapeHtml(topic.name)}</div>
        <div id="topicContent"></div>
      </section>
    </div>`;
  renderTopicContent();
}
function tabButton(id,label) { return ''; }

function renderTopicContent() {
  if (!game) startGame();
  else renderGame();
}

function startPractice() {
  const topic = currentTopic();
  const order = topic.shufflePractice ? shuffle(topic.questions) : [...topic.questions];
  practice = { order, index:0, correct:0, attempts:0, locked:false };
  renderQuestion();
}
function renderQuestion() {
  const content = document.querySelector('#topicContent');
  const topic = currentTopic();
  if (practice.index >= practice.order.length) return renderPracticeSummary();
  const q = practice.order[practice.index];
  content.innerHTML = `<div class="question-wrap">
    <p class="question-counter">Aufgabe ${practice.index+1} von ${practice.order.length}</p>
    <div class="question">${escapeHtml(q.q)}</div>
    <div class="answers">${q.options.map(o => `<button class="answer-button" data-answer="${escapeHtml(o)}" type="button">${escapeHtml(o)}</button>`).join('')}</div>
    <div class="feedback" id="feedback" aria-live="polite"></div>
  </div>`;
  content.querySelectorAll('[data-answer]').forEach(btn => btn.addEventListener('click', () => checkPracticeAnswer(btn, q)));
}
function checkPracticeAnswer(button, q) {
  if (practice.locked) return;
  practice.attempts++;
  const feedback = document.querySelector('#feedback');
  if (button.dataset.answer === q.correct) {
    practice.locked = true; practice.correct++;
    button.classList.add('correct');
    feedback.className='feedback good'; feedback.textContent='Richtig! Gleich kommt dein Kegelwurf.';
    markSolved(currentTopic(), q.id);
    showBowling(() => { practice.index++; practice.locked=false; renderTopic(); });
  } else {
    button.classList.add('wrong');
    feedback.className='feedback try'; feedback.textContent=`Noch nicht. Tipp: ${q.hint}`;
  }
}
function markSolved(topic,id) {
  const bucket = currentProgressBucket();
  const entry = bucket[topic.id] || { solved: [] };
  if (!entry.solved.includes(id)) entry.solved.push(id);
  bucket[topic.id]=entry;
  saveProgress();
}
function renderPracticeSummary() {
  const content = document.querySelector('#topicContent');
  const pct = Math.round((practice.correct/practice.order.length)*100);
  content.innerHTML = `<div class="question-wrap"><p class="eyebrow">Runde abgeschlossen</p><h2>${pct}% richtig</h2><p class="lead">Du hast ${practice.correct} von ${practice.order.length} Aufgaben in dieser Runde richtig gelöst.</p><div class="button-row"><button class="primary-button" id="playNow" type="button">Lernspiel starten</button><button class="secondary-button" id="again" type="button">Noch einmal üben</button></div></div>`;
  document.querySelector('#playNow').addEventListener('click',()=>{view.tab='game';game=null;renderTopic();});
  document.querySelector('#again').addEventListener('click',()=>{practice=null;renderTopic();});
}

function showBowling(done) {
  overlay.classList.add('show'); overlay.setAttribute('aria-hidden','false');
  requestAnimationFrame(()=>overlay.classList.add('animate'));
  setTimeout(()=>{ overlay.classList.remove('show','animate'); overlay.setAttribute('aria-hidden','true'); done(); }, 1700);
}



function gameDifficulty(index) {
  const tier = currentTopic()?.gameTier;
  if (tier === 1) return { label: 'leicht', max: 5 };
  if (tier === 2) return { label: 'mittel', max: 10 };
  if (tier === 3) return { label: 'schwer', max: 15 };
  if (index < 4) return { label: 'leicht', max: 5 };
  if (index < 8) return { label: 'mittel', max: 10 };
  return { label: 'schwer', max: 15 };
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function createStars() {
  return [
    { x: 8,  y: 10, lit: false },
    { x: 17, y: 17, lit: false },
    { x: 26, y: 8,  lit: false },
    { x: 35, y: 15, lit: false },
    { x: 44, y: 9,  lit: false },
    { x: 53, y: 18, lit: false },
    { x: 62, y: 8,  lit: false },
    { x: 71, y: 16, lit: false },
    { x: 80, y: 9,  lit: false },
    { x: 89, y: 15, lit: false },
    { x: 48, y: 24, lit: false },
    { x: 58, y: 27, lit: false }
  ];
}

function uniqueOptions(correct, candidates) {
  const seen = new Set([String(correct)]);
  const values = [String(correct)];
  for (const candidate of candidates) {
    const value = String(candidate);
    if (!seen.has(value)) {
      seen.add(value);
      values.push(value);
    }
    if (values.length === 4) break;
  }
  while (values.length < 4) {
    const fallback = Number(correct) + values.length * 3;
    if (!seen.has(String(fallback))) values.push(String(fallback));
  }
  return shuffle(values);
}

function buildGameRounds(topic, count = 10) {
  if (currentSubject()?.id === 'mathe' && topic.id === 'ganze-zahlen') {
    const rounds = [];
    for (let i = 0; i < count; i++) {
      const isAddition = i % 2 === 0;
      const a = Math.floor(Math.random() * 31) - 15;
      const b = Math.floor(Math.random() * 18) + 3;
      const correct = isAddition ? a + b : a - b;
      const q = `${a < 0 ? '−' + Math.abs(a) : a} ${isAddition ? '+' : '−'} ${b} = ?`;
      rounds.push({
        id: `m-gz-game-${Date.now()}-${i}`,
        q,
        options: uniqueOptions(correct, [correct + 1, correct - 1, -correct, correct + 5, correct - 5]),
        correct: String(correct),
        hint: isAddition ? 'Gehe auf dem Zahlenstrahl nach rechts.' : 'Ziehe die zweite Zahl ab.'
      });
    }
    return rounds;
  }

  const source = shuffle(topic.questions);
  const rounds = [];
  while (rounds.length < count) rounds.push(...shuffle(source));
  return rounds.slice(0, count);
}

let activeGameKeyHandler = null;

function cleanupGameInput() {
  if (activeGameKeyHandler) {
    window.removeEventListener('keydown', activeGameKeyHandler);
    activeGameKeyHandler = null;
  }
  if (game?.loopId) {
    cancelAnimationFrame(game.loopId);
    game.loopId = null;
  }
}

function startGame() {
  const topic = currentTopic();
  game = {
    rounds: buildGameRounds(topic, 12),
    index: 0,
    points: 0,
    stars: createStars(),
    phase: 'question',
    pipsX: 50,
    dir: 1,
    loopId: null,
    finished: false,
    solvingErrors: 0,
    lastResult: null,
    summary: { correctAnswers: 0, totalErrors: 0 },
    scoreSaved: false,
    newUnlocks: []
  };
  renderGame();
}

function renderGame() {
  cleanupGameInput();
  const content = document.querySelector('#topicContent');

  if (game.finished) {
    const lit = game.stars.filter(star => star.lit).length;
    const maxPoints = game.rounds.reduce((sum, _, i) => sum + gameDifficulty(i).max, 0);
    if (!game.scoreSaved) {
      game.newUnlocks = rememberSchoolScore(game.points, currentTopic()?.name || '');
      game.scoreSaved = true;
    }
    const activeProfile = settings.playerName ? settings.schoolProfiles[normalizeName(settings.playerName)] : null;
    content.innerHTML = `
      <div class="game-summary-screen">
        <div class="summary-stars">${game.stars.map(star => `<span class="${star.lit ? 'lit' : ''}">★</span>`).join('')}</div>
        <p class="eyebrow">Runde abgeschlossen</p>
        <h2>${game.points} Punkte</h2>
        <p class="lead">${settings.playerName ? `${escapeHtml(settings.playerName)}, ` : ''}${lit} von ${game.stars.length} Sternen leuchten.</p>
        ${activeProfile ? `<p class="summary-highscore">Bester Stand von ${escapeHtml(activeProfile.name)}: <strong>${activeProfile.bestScore || 0} Punkte</strong></p>` : ''}
        ${game.newUnlocks?.length ? `<div class="unlock-box"><strong>Neu freigeschaltet:</strong> ${game.newUnlocks.map(item => `${item.icon} ${escapeHtml(item.name)}`).join(' · ')}</div>` : ''}
        <div class="game-summary-grid">
          <div class="summary-box"><span>Aufgaben</span><strong>${game.summary.correctAnswers}/${game.rounds.length}</strong></div>
          <div class="summary-box"><span>Sterne</span><strong>${lit}/${game.stars.length}</strong></div>
          <div class="summary-box"><span>Maximal</span><strong>${maxPoints}</strong></div>
          <div class="summary-box"><span>Lösefehler</span><strong>${game.summary.totalErrors}</strong></div>
        </div>
        <div class="button-row summary-buttons">
          <button class="primary-button" id="restartGame" type="button">Noch einmal spielen</button>
          <button class="secondary-button" id="backLearn" type="button">Zur Themenübersicht</button>
        </div>
      </div>`;
    document.querySelector('#restartGame').addEventListener('click',()=>{game=null;renderTopic();});
    document.querySelector('#backLearn').addEventListener('click',()=>{game=null; view.screen='subject'; view.topicId=null; view.tab='game'; render();});
    return;
  }

  const q = game.rounds[game.index];
  const difficulty = gameDifficulty(game.index);
  const litCount = game.stars.filter(star => star.lit).length;
  const questionVisible = game.phase === 'question';
  const runVisible = game.phase === 'run';

  content.innerHTML = `
    <div class="pips-game-shell">
      <div class="pips-stage" id="pipsStage" aria-label="Pips Sternenspiel">
        <div class="stage-sky"></div>
        <div class="game-hud">
          <span><strong>${game.points}</strong> Punkte</span>
          <span>${litCount}/${game.stars.length} Sterne</span>
          <span>${game.index + 1}/${game.rounds.length}</span>
        </div>

        <div class="stars-layer" aria-hidden="true">
          ${game.stars.map((star, i) => `
            <div class="target-star ${star.lit ? 'lit' : 'dark'}" data-star-index="${i}" style="left:${star.x}%; top:${star.y}%">
              <span class="star-glow"></span>
              <span class="star-core">★</span>
            </div>`).join('')}
        </div>

        ${questionVisible ? `
          <section class="game-question-card" aria-live="polite">
            <div class="question-topline">
              <span class="difficulty-pill">${difficulty.label}</span>
              <span>max. ${difficulty.max} Punkte</span>
            </div>
            ${game.lastResult ? `<div class="result-line ${game.lastResult.points > 0 ? 'good' : 'miss'}">${escapeHtml(game.lastResult.message)}</div>` : ''}
            <div class="game-question">${escapeHtml(q.q)}</div>
            <div class="game-answers">
              ${q.options.map(o => `<button class="game-answer-button" data-game-answer="${escapeHtml(o)}" type="button">${escapeHtml(o)}</button>`).join('')}
            </div>
            <div class="game-feedback ${game.solvingErrors ? 'show' : ''}" id="gameFeedback">${game.solvingErrors ? `Noch nicht. ${escapeHtml(q.hint)}` : ''}</div>
          </section>` : ''}

        ${runVisible ? `<div class="flight-prompt">Jetzt tippen, klicken oder Leertaste drücken!</div>` : ''}

        <div class="stage-ground"></div>
        <div id="pips" class="pips-avatar ${runVisible ? 'running' : 'waiting'}" style="left:${game.pipsX}%" aria-label="Pips">
          <img class="pips-sprite pips-wait" src="${avatarAsset(currentAvatarId(),'wait')}" alt="">
          <img class="pips-sprite pips-run-a" src="${avatarAsset(currentAvatarId(),'run-a')}" alt="">
          <img class="pips-sprite pips-run-b" src="${avatarAsset(currentAvatarId(),'run-b')}" alt="">
          <img class="pips-sprite pips-fly" src="${avatarAsset(currentAvatarId(),'fly')}" alt="">
          ${accessoryBadge()}
        </div>
      </div>
    </div>`;

  content.querySelectorAll('[data-game-answer]').forEach(btn => btn.addEventListener('click',()=>checkGameAnswer(btn,q)));
  mountPipsGame();
}

function mountPipsGame() {
  const stage = document.querySelector('#pipsStage');
  const pips = document.querySelector('#pips');
  if (!stage || !pips || !game) return;

  pips.style.left = `${game.pipsX}%`;

  if (game.phase === 'run') {
    activeGameKeyHandler = (event) => {
      if ((event.code === 'Space' || event.code === 'Enter') && game?.phase === 'run') {
        event.preventDefault();
        triggerPipsFlight();
      }
    };
    window.addEventListener('keydown', activeGameKeyHandler);
    stage.addEventListener('pointerdown', event => {
      if (game?.phase === 'run') {
        event.preventDefault();
        triggerPipsFlight();
      }
    });
    startPipsRun();
  }
}

function startPipsRun() {
  const pips = document.querySelector('#pips');
  if (!pips || !game) return;

  let last = null;
  const minX = 9;
  const maxX = 91;
  const speed = 0.062 + Math.min(game.index, 11) * 0.0025;

  const frame = (ts) => {
    if (!game || game.phase !== 'run') return;
    if (last == null) last = ts;
    const dt = Math.min(ts - last, 40);
    last = ts;
    game.pipsX += game.dir * dt * speed;
    if (game.pipsX >= maxX) { game.pipsX = maxX; game.dir = -1; pips.classList.add('facing-left'); }
    if (game.pipsX <= minX) { game.pipsX = minX; game.dir = 1; pips.classList.remove('facing-left'); }
    pips.style.left = `${game.pipsX}%`;
    game.loopId = requestAnimationFrame(frame);
  };
  game.loopId = requestAnimationFrame(frame);
}

function checkGameAnswer(button, q) {
  if (!game || game.phase !== 'question') return;
  const feedback = document.querySelector('#gameFeedback');
  if (button.dataset.gameAnswer === q.correct) {
    game.summary.correctAnswers++;
    game.solvingErrors = 0;
    game.phase = 'run';
    if (currentTopic().questions.some(item => item.id === q.id)) markSolved(currentTopic(), q.id);
    button.classList.add('correct');
    setTimeout(() => renderGame(), 180);
  } else {
    game.solvingErrors++;
    game.summary.totalErrors++;
    button.classList.add('wrong');
    if (feedback) {
      feedback.className = 'game-feedback show';
      feedback.textContent = `Noch nicht. ${q.hint}`;
    }
  }
}

function triggerPipsFlight() {
  if (!game || game.phase !== 'run') return;
  const stage = document.querySelector('#pipsStage');
  const pips = document.querySelector('#pips');
  if (!stage || !pips) return;

  game.phase = 'fly';
  cleanupGameInput();

  const difficulty = gameDifficulty(game.index);
  const stageRect = stage.getBoundingClientRect();
  const pipsCenterX = (game.pipsX / 100) * stageRect.width;
  const hitRange = Math.max(12, Math.min(20, stageRect.width * 0.026));

  const candidates = game.stars
    .map((star, index) => ({
      ...star,
      index,
      dx: Math.abs((star.x / 100) * stageRect.width - pipsCenterX)
    }))
    .filter(star => star.dx <= hitRange)
    .sort((a, b) => a.dx - b.dx || b.y - a.y);

  const target = candidates[0] || null;
  let awarded = 0;
  let message = 'Knapp daneben – dieses Mal 0 Punkte';

  if (target) {
    if (target.lit) {
      message = 'Dieser Stern leuchtet schon – versuch den nächsten!';
    } else {
      const rawPoints = target.dx <= 3.5 ? 15 : target.dx <= 7.5 ? 10 : 5;
      awarded = Math.min(rawPoints, difficulty.max);
      message = `Treffer! +${awarded} Punkte`;
    }
  }

  const flightDistance = Math.max(220, stageRect.height - 95);
  pips.classList.remove('running', 'waiting');
  pips.classList.add('flying');
  const animation = pips.animate([
    { transform: pips.classList.contains('facing-left') ? 'scaleX(-1) translateY(0)' : 'translateY(0)' },
    { transform: pips.classList.contains('facing-left') ? `scaleX(-1) translateY(-${flightDistance}px)` : `translateY(-${flightDistance}px)`, offset: .5 },
    { transform: pips.classList.contains('facing-left') ? 'scaleX(-1) translateY(0)' : 'translateY(0)' }
  ], {
    duration: 1950,
    easing: 'cubic-bezier(.32,.72,.28,1)'
  });

  setTimeout(() => {
    if (target && !target.lit && awarded > 0) {
      game.stars[target.index].lit = true;
      game.points += awarded;
      const star = document.querySelector(`[data-star-index="${target.index}"]`);
      if (star) {
        star.classList.remove('dark');
        star.classList.add('lit', 'pulse');
      }
      const burst = document.createElement('div');
      burst.className = 'score-burst';
      burst.textContent = `+${awarded}`;
      burst.style.left = `${target.x}%`;
      burst.style.top = `${target.y}%`;
      stage.appendChild(burst);
    }
    game.lastResult = { points: awarded, message };
  }, 760);

  animation.finished.catch(() => {}).then(() => {
    game.index++;
    if (game.index >= game.rounds.length) {
      game.finished = true;
    } else {
      game.phase = 'question';
      game.solvingErrors = 0;
    }
    renderGame();
  });
}

backButton.addEventListener('click', () => {
  if (view.screen === 'topic') {
    cleanupGameInput();
    game = null;
    view.screen = 'subject';
    view.topicId = null;
    view.tab = 'game';
    render();
    return;
  }
  if (view.screen === 'subject') { view={screen:'home',subjectId:null,topicId:null,tab:'game'}; render(); return; }
  render();
});
brandButton.addEventListener('click',()=>{cleanupGameInput(); game=null; view={screen:'home',subjectId:null,topicId:null,tab:'game'};render();});
profileButton.addEventListener('click', openProfileOverlay);
resetButton.addEventListener('click',()=>{
  if (settings.mode === 'school' && settings.playerName) {
    const key = normalizeName(settings.playerName);
    if (confirm(`Soll der gespeicherte Stand für ${settings.playerName} auf diesem Gerät gelöscht werden?`)) {
      delete progress.school[key];
      delete settings.schoolProfiles[key];
      settings.playerName = '';
      settings.avatar = 'pips';
      saveProgress();
      saveSettings();
      render();
    }
    return;
  }
  if(confirm('Soll der gesamte Fortschritt auf diesem Gerät wirklich gelöscht werden?')) { progress={ personal:{}, school:{} }; saveProgress(); render(); }
});

window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); deferredInstallPrompt=event; installButton.classList.remove('hidden'); });
installButton.addEventListener('click', async()=>{ if(!deferredInstallPrompt) return; deferredInstallPrompt.prompt(); await deferredInstallPrompt.userChoice; deferredInstallPrompt=null; installButton.classList.add('hidden'); });
if ('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js'));

render();
