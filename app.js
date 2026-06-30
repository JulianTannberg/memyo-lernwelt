const SUBJECTS = [
  {
    id: 'mathe', name: 'Mathe', icon: '∑', color: '#94bbd9', description: 'Rechnen, Geometrie, Daten und Größen',
    topics: [
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

const STORAGE_KEY = 'memyo-lernwelt-progress-v1';
let progress = loadProgress();
let view = { screen: 'home', subjectId: null, topicId: null, tab: 'learn' };
let practice = null;
let game = null;
let deferredInstallPrompt = null;

const app = document.querySelector('#app');
const backButton = document.querySelector('#backButton');
const brandButton = document.querySelector('#brandButton');
const resetButton = document.querySelector('#resetButton');
const installButton = document.querySelector('#installButton');
const overlay = document.querySelector('#bowlingOverlay');

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function saveProgress() { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
function topicProgress(topic) {
  const solved = new Set(progress[topic.id]?.solved || []);
  return Math.round((solved.size / topic.questions.length) * 100);
}
function subjectProgress(subject) {
  if (!subject.topics.length) return 0;
  return Math.round(subject.topics.reduce((sum, t) => sum + topicProgress(t), 0) / subject.topics.length);
}
function currentSubject() { return SUBJECTS.find(s => s.id === view.subjectId); }
function currentTopic() { return currentSubject()?.topics.find(t => t.id === view.topicId); }
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

function render() {
  backButton.classList.toggle('hidden', view.screen === 'home');
  if (view.screen === 'home') renderHome();
  if (view.screen === 'subject') renderSubject();
  if (view.screen === 'topic') renderTopic();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <div>
        <p class="eyebrow">Kostenloser Lernbereich von memyo</p>
        <h1>Lernwelt</h1>
        <p class="lead">Alle Themen sind offen. Wähle aus, was gerade in der Schule gebraucht wird, sammle Fortschritt und spiele nach dem Üben.</p>
      </div>
      <div class="hero-art" aria-hidden="true">
        <span class="orbit one"></span><span class="orbit two"></span>
        <span class="symbol s1">∑</span><span class="symbol s2">Aa</span><span class="symbol s3">EN</span>
      </div>
    </section>
    <section aria-labelledby="subjectsTitle">
      <h2 id="subjectsTitle">Was möchtest du heute üben?</h2>
      <p class="lead">Die Prozentwerte zeigen deinen eigenen Stand – sie sperren keine anderen Themen.</p>
      <div class="subject-grid">
        ${SUBJECTS.map(subjectCard).join('')}
      </div>
    </section>`;
  app.querySelectorAll('[data-subject]').forEach(btn => btn.addEventListener('click', () => openSubject(btn.dataset.subject)));
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

function openSubject(id) { view = { screen:'subject', subjectId:id, topicId:null, tab:'learn' }; render(); }
function openTopic(id) { view.screen='topic'; view.topicId=id; view.tab='learn'; practice=null; game=null; render(); }

function renderSubject() {
  const subject = currentSubject();
  const value = subjectProgress(subject);
  app.innerHTML = `
    <section class="page-head" style="--accent:${subject.color}">
      <p class="crumb">memyo Lernwelt · ${subject.name}</p>
      <div class="page-head-row">
        <div><h2>${subject.name}</h2><p class="lead">Alle Themen sind geöffnet und können in beliebiger Reihenfolge bearbeitet werden.</p></div>
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
    <div class="topic-meta"><span class="pill">Lernen</span><span class="pill">Üben</span><span class="pill">Spielen</span>${topic.poster ? '<span class="pill">Lernplakat folgt</span>' : ''}</div>
    <div class="progress-row"><div class="progress-track"><div class="progress-fill" style="--progress:${value}%"></div></div><strong>${value}%</strong></div>
  </button>`;
}

function renderTopic() {
  const subject = currentSubject();
  const topic = currentTopic();
  const value = topicProgress(topic);
  app.innerHTML = `
    <section class="page-head" style="--accent:${subject.color}">
      <p class="crumb">${subject.name} · ${topic.name}</p>
      <h2>${topic.name}</h2>
    </section>
    <div class="topic-layout" style="--accent:${subject.color}">
      <section class="panel">
        <div class="tabbar" role="tablist" aria-label="Lernbereiche">
          ${tabButton('learn','Lernen')}${tabButton('practice','Üben')}${tabButton('game','Spielen')}
        </div>
        <div id="topicContent"></div>
      </section>
      <aside class="panel side-panel">
        <div class="stat-card"><span>Fortschritt</span><strong>${value}%</strong><div class="progress-track"><div class="progress-fill" style="--progress:${value}%"></div></div></div>
        <div class="stat-card"><span>Richtig gelöst</span><strong>${new Set(progress[topic.id]?.solved || []).size}/${topic.questions.length}</strong></div>
        <p class="notice">Das nächste Thema bleibt immer offen. Der Fortschritt dient nur als Orientierung.</p>
      </aside>
    </div>`;
  app.querySelectorAll('[data-tab]').forEach(btn => btn.addEventListener('click', () => { view.tab=btn.dataset.tab; if(view.tab!=='practice') practice=null; if(view.tab!=='game') game=null; renderTopic(); }));
  renderTopicContent();
}
function tabButton(id,label) { return `<button class="tab ${view.tab===id?'active':''}" data-tab="${id}" type="button">${label}</button>`; }

function renderTopicContent() {
  const content = document.querySelector('#topicContent');
  const topic = currentTopic();
  if (view.tab === 'learn') {
    content.innerHTML = `${topic.poster ? `<div class="empty-poster"><div><h3>Lernplakat wird ergänzt</h3><p>Hier kann später ein selbst erstelltes NotebookLM-Lernplakat eingefügt werden – ohne Bilder aus dem Schulbuch.</p></div></div>` : ''}
      <h3>Das lernst du hier</h3>
      <ul class="learn-list">${topic.learn.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul>
      <div class="button-row"><button class="primary-button" id="startPractice" type="button">Jetzt üben</button><button class="secondary-button" id="startGame" type="button">Direkt zum Lernspiel</button></div>`;
    document.querySelector('#startPractice').addEventListener('click', () => { view.tab='practice'; renderTopic(); });
    document.querySelector('#startGame').addEventListener('click', () => { view.tab='game'; renderTopic(); });
  } else if (view.tab === 'practice') {
    if (!practice) startPractice(); else renderQuestion();
  } else {
    if (!game) startGame(); else renderGame();
  }
}

function startPractice() {
  const topic = currentTopic();
  practice = { order: [...topic.questions], index:0, correct:0, attempts:0, locked:false };
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
  const entry = progress[topic.id] || { solved: [] };
  if (!entry.solved.includes(id)) entry.solved.push(id);
  progress[topic.id]=entry; saveProgress();
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

function startGame() {
  const topic = currentTopic();
  const rounds = Array.from({length:5}, (_,i) => topic.questions[i % topic.questions.length]);
  game = { step:0, rounds, locked:false, finished:false };
  renderGame();
}
function renderGame() {
  const content = document.querySelector('#topicContent');
  if (game.finished) {
    content.innerHTML = `<div class="question-wrap"><div class="game-stage"><div class="confetti"></div><div class="avatar" style="--accent:${currentSubject().color};left:88%"><div class="head"></div><div class="body"></div></div></div><h2>Ziel erreicht!</h2><p class="lead">Du hast den Lernpfad geschafft. Das Thema bleibt jederzeit wieder spielbar.</p><button class="primary-button" id="restartGame" type="button">Noch einmal spielen</button></div>`;
    document.querySelector('#restartGame').addEventListener('click',()=>{game=null;renderTopic();});
    return;
  }
  const q = game.rounds[game.step];
  const stones = Array.from({length:5},(_,i)=>`<span class="stone" style="left:${18+i*17}%"></span>`).join('');
  content.innerHTML = `<div class="question-wrap">
    <div class="game-status"><span>Lernpfad</span><strong>${game.step}/5 Schritte</strong></div>
    <div class="game-stage"><span class="cloud c1"></span><span class="cloud c2"></span>${stones}<div id="avatar" class="avatar" style="--accent:${currentSubject().color};left:${4+game.step*17}%"><div class="head"></div><div class="body"></div></div></div>
    <div class="question">${escapeHtml(q.q)}</div>
    <div class="answers">${q.options.map(o=>`<button class="answer-button" data-game-answer="${escapeHtml(o)}" type="button">${escapeHtml(o)}</button>`).join('')}</div>
    <div class="feedback" id="gameFeedback" aria-live="polite"></div>
  </div>`;
  content.querySelectorAll('[data-game-answer]').forEach(btn=>btn.addEventListener('click',()=>checkGameAnswer(btn,q)));
}
function checkGameAnswer(button,q) {
  if(game.locked) return;
  const feedback=document.querySelector('#gameFeedback');
  if(button.dataset.gameAnswer===q.correct) {
    game.locked=true; button.classList.add('correct'); feedback.className='feedback good'; feedback.textContent='Richtig – weiter zum nächsten Stein!';
    const avatar=document.querySelector('#avatar'); avatar.classList.add('jump');
    setTimeout(()=>{game.step++;game.locked=false;if(game.step>=5) game.finished=true;renderTopic();},700);
  } else {
    button.classList.add('wrong'); feedback.className='feedback try'; feedback.textContent=`Versuche es noch einmal. ${q.hint}`;
  }
}

backButton.addEventListener('click', () => {
  if (view.screen === 'topic') { view.screen='subject'; view.topicId=null; }
  else if (view.screen === 'subject') { view={screen:'home',subjectId:null,topicId:null,tab:'learn'}; }
  render();
});
brandButton.addEventListener('click',()=>{view={screen:'home',subjectId:null,topicId:null,tab:'learn'};render();});
resetButton.addEventListener('click',()=>{ if(confirm('Soll der gesamte Fortschritt auf diesem Gerät wirklich gelöscht werden?')) { progress={}; saveProgress(); render(); } });

window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); deferredInstallPrompt=event; installButton.classList.remove('hidden'); });
installButton.addEventListener('click', async()=>{ if(!deferredInstallPrompt) return; deferredInstallPrompt.prompt(); await deferredInstallPrompt.userChoice; deferredInstallPrompt=null; installButton.classList.add('hidden'); });
if ('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js'));

render();
