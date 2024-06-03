import { editorLocalization } from "../editorLocalization";

var germanTranslation = {
  //survey templates
  survey: {
    edit: "Bearbeiten",
    externalHelpLink: "Schauen Sie sich an, wie Sie Umfragen erstellen können",
    externalHelpLinkUrl:
      "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Frage bitte hier platzieren.",
    addLogicItem: "Eine Regel erstellen, um den Fluss der Umfrage anzupassen.",
    copy: "Kopieren",
    addToToolbox: "Zur Werkzeugleiste hinzufügen",
    deletePanel: "Panel löschen",
    deleteQuestion: "Frage löschen",
    convertTo: "Konvertieren zu",
    drag: "Element ziehen",
  },
  //questionTypes
  qt: {
    default: "Standard",
    checkbox: "Auswahl",
    comment: "Kommentar",
    imagepicker: "Bildauswahl",
    image: "Bild",
    dropdown: "Dropdown",
    file: "Datei",
    html: "HTML",
    matrix: "Matrix (einfache Auswahl)",
    matrixdropdown: "Matrix (mehrfache Auswahl)",
    matrixdynamic: "Matrix (dynamische Zeilen)",
    multipletext: "Text (mehrzeilig)",
    panel: "Panel",
    paneldynamic: "Panel (dynamisch)",
    radiogroup: "Option",
    rating: "Bewertung",
    text: "Text",
    boolean: "Wahrheitswert",
    expression: "Ausdruck (schreibgeschützt)",
    signaturepad: "Unterschrift",
    flowpanel: "Panel (fließend)",
  },
  //Strings in Editor
  ed: {
    defaultLocale: "Standard ({0})",
    survey: "Umfrage",
    settings: "Umfrageeinstellungen",
    settingsTooltip: "Umfrageeinstellungen öffnen",
    opjectPropertiesHeader: "Erweitert",
    showObjectProperties: "Objekteigenschaften anzeigen",
    hideObjectProperties: "Objekteigenschaften verstecken",
    showPanel: "Panel anzeigen",
    hidePanel: "Panel verstecken",
    editSurvey: "Umfrage bearbeiten",
    addNewPage: "Neue Seite hinzufügen",
    moveRight: "Nach rechts scrollen",
    moveLeft: "Nach links scrollen",
    deletePage: "Seite löschen",
    editPage: "Seite bearbeiten",
    edit: "Bearbeiten",
    newPageName: "Seite",
    newQuestionName: "Frage",
    newPanelName: "Panel",
    newTextItemName: "Text",
    testSurvey: "Umfrage testen",
    testSurveyAgain: "Testumfrage wiederholen",
    testSurveyWidth: "Umfragebreite: ",
    navigateToMsg: "Sie werden weitergeleitet: ",
    logic: "Umfragelogik",
    embedSurvey: "Umfrage einfügen",
    translation: "Übersetzungen",
    saveSurvey: "Umfrage speichern",
    saveSurveyTooltip: "Umfrage speichern",
    designer: "Umfrage entwerfen",
    jsonEditor: "JSON",
    undo: "Rückgängig",
    redo: "Wiederherstellen",
    undoTooltip: "Letzte Änderung rückgängig machen",
    redoTooltip: "Letzte Änderung wiederherstellen",
    copy: "Kopieren",
    cut: "Ausschneiden",
    paste: "Einfügen",
    copyTooltip: "Auswahl in die Zwischenablage kopieren",
    cutTooltip: "Auswahl ausschneiden",
    pasteTooltip: "Aus der Zwischenablage einfügen",
    options: "Optionen",
    generateValidJSON: "Generiere gültiges JSON",
    generateReadableJSON: "Generiere lesbares JSON",
    toolbox: "Werkzeugleiste",
    "property-grid": "Eigenschaften",
    toolboxGeneralCategory: "Allgemein",
    delSelObject: "Lösche markiertes Objekt",
    editSelObject: "Bearbeite markiertes Objekt",
    correctJSON: "Bitte JSON korrigieren.",
    surveyResults: "Umfrageergebnis: ",
    surveyResultsTable: "Als Tabelle",
    surveyResultsJson: "Als JSON",
    resultsTitle: "Titel der Frage",
    resultsName: "Name der Frage",
    resultsValue: "Wert der Antwort",
    resultsDisplayValue: "Anzeigewert",
    modified: "Modifiziert",
    saving: "Speichern",
    saved: "Gespeichert",
    propertyEditorError: "Fehler:",
    saveError: "Fehler! Der Inhalt des Editors wurde nicht gespeichert.",
    translationAddLanguage: "Wählen Sie eine Sprache aus",
    translationShowAllStrings: "Alle Texte anzeigen",
    translationShowAllPages: "Alle Seiten anzeigen",
    translationNoStrings:
      "Keine Texte zum Übersetzen. Bitte den Filter anpassen.",
    translationExportToSCVButton: "Export (CSV)",
    translationImportFromSCVButton: "Import (CSV)",
    translationMergeLocaleWithDefault:
      "Verschmelze {0} mit der Standardsprache",
    bold: "Fett",
    italic: "Kursiv",
    underline: "Unterstrichen",
    fpAddQuestion: "Frage hinzufügen ...",
    completedHtmlOnConditionItemText: "Zeige wenn:",
  },
  lg: {
    //Logic tab strings
    ge_visibilityName: "Seitensichtbarkeit",
    panel_visibilityName: "Panelsichtbarkeit",
    panel_enableName: "Panel aktivieren/deaktivieren",
    question_visibilityName: "Fragensichtbarkeit",
    question_enableName: "Frage aktivieren/deaktivieren",
    question_requireName: "Frage optional/erforderlich",
    trigger_completeName: "Umfrage abschließen",
    trigger_setvalueName: "Setze Fragenwert",
    trigger_copyvalueName: "Kopiere Fragenwert",
    trigger_skipName: "Gehe zur nächsten Frage",
    trigger_runExpressionName: "Benutzerdefinierten Ausdruck ausführen",
    completedHtmlOnConditionName:
      "Benutzerdefinierte Seite nach Abschluss der Umfrage",

    page_visibilityDescription:
      "Mache die Seite sichtbar, wenn der logische Ausdruck wahr ergibt. Andernfalls lass sie unsichtbar.",
    panel_visibilityDescription:
      "Mache das Panel sichtbar, wenn der logische Ausdruck wahr ergibt. Andernfalls lass es unsichtbar.",
    panel_enableDescription:
      "Aktiviere das Panel zusammen mit all seinen Elementen, wenn der logische Ausdruck wahr ergibt. Andernfalls lass sie deaktiviert.",
    question_visibilityDescription:
      "Mache die Frage sichtbar, wenn der logische Ausdruck wahr ergibt. Andernfalls lass sie unsichtbar.",
    question_enableDescription:
      "Aktiviere die Frage, wenn der logische Ausdruck wahr ergibt. Andernfalls lass sie deaktiviert.",
    question_requireDescription:
      "Frage wird erforderlich, wenn der logische Ausdruck wahr ergibt.",
    trigger_completeDescription:
      "Wenn der logische Ausdruck wahr ergibt, wir die Umfrage abgeschlossen und der Benutzer sieht die Abschlussseite der Umfrage.",
    trigger_setvalueDescription:
      "Wenn Werte, die im logischen Ausdruck verwendet werden, geändert werden und der logische Ausdruck wahr ergibt, dann wird der Wert in die ausgewählte Frage eingesetzt.",
    trigger_copyvalueDescription:
      "Wenn Werte, die im logischen Ausdruck verwendet werden, geändert werden und der logische Ausdruck wahr ergibt, dann wird der Wert einer ausgewählte Fragen kopiert und in eine andere ausgewählte Frage eingesetzt.",
    trigger_skipDescription:
      "Wenn der logische Ausdruck wahr ergibt, springt die Umfrage zur ausgewählten Frage.",
    trigger_runExpressionDescription:
      "Wenn der logische Ausdruck wahr ergibt, wird die benutzerdefinierte Anweisung ausgeführt. Sie können optional das Ergebnis der Anweisung in die ausgewählte Frage einsetzen.",
    completedHtmlOnConditionDescription:
      "Wenn der logische Ausdruck wahr ergibt, dann wird der Standardtext der Abschlussseite der Umfrage mit dem gegebenen Text ersetzt.",

    itemExpressionText: "Wenn der Ausdruck '{0}' wahr ergibt:", // {0} - the expression
    page_visibilityText: "Mache die Seite {0} sichtbar", // {0} page name
    panel_visibilityText: "Mache das Panel {0} sichtbar", // {0} panel name
    panel_enableText: "Aktiviere das Panel {0}", // {0} panel name
    question_visibilityText: "Mache die Frage {0} sichtbar", // {0} question name
    question_enableText: "Aktiviere die Frage {0}", // {0} question name
    question_requireText: "Mache die Frage {0} erforderlich", // {0} question name
    trigger_completeText: "Umfrage abschließen",
    trigger_setvalueText: "Setze in Frage {0} den Wert {1} ein", // {0} question name, {1} setValue
    trigger_copyvalueText: "Kopiere in Frage {0} den Wert von Frage {1}", // {0} and {1} question names
    trigger_skipText: "Gehe zu Frage {0}", // {0} question name
    trigger_runExpressionText1: "Führe folgenden Ausdruck aus: '{0}'", // {0} the expression
    trigger_runExpressionText2: " und setze das Ergebnis in Frage {0} ein", // {0} question name
    completedHtmlOnConditionText:
      "Zeigen Sie einen benutzerdefinierten Text auf der Abschlussseite der Umfrage an.",

    conditions: "Bedingungen",
    actions: "Aktionen",
    expressionEditorTitle: "Definiere Bedingungen",
    actionsEditorTitle: "Definiere Aktionen",

    deleteAction: "Aktion löschen",
    addNewAction: "Aktion hinzufügen",
    selectedActionCaption: "Aktion zum Hinzufügen auswählen ...",

    expressionInvalid:
      "Der logische Ausdruck ist leer oder ungültig. Bitte korrigieren Sie ihn.",
    noActionError: "Bitte fügen Sie mindestens eine Aktion hinzu.",
    actionInvalid:
      "Bitte beheben Sie die bestehenden Probleme in Ihren Aktionen.",
    expressionSetup: "",
    actionsSetup: "",
  },
  //Property names in table headers
  pel: {
    isRequired: "Erforderlich?",
  },
  //Property Editors
  pe: {
    apply: "Anwenden",
    ok: "OK",
    save: "Speichern",
    saveTooltip: "Speichern",
    cancel: "Abbrechen",
    reset: "Zurücksetzen",
    refresh: "Neu laden",
    close: "Schliessen",
    delete: "Löschen",
    add: "Hinzufügen",
    addNew: "Neues Element hinzufügen",
    addItem: "Klicken, um ein Element hinzuzufügen ...",
    addOther: "Weiteres Element",
    addSelectAll: "Alle Elemente auswählen hinzufügen",
    addNone: "Alle Elemente abwählen hinzufügen",
    removeAll: "Alle löschen",
    edit: "Bearbeiten",
    back: "Zurück ohne zu speichern",
    backTooltip: "Zurück ohne zu speichern",
    saveAndBack: "Speichern und zurück",
    saveAndBackTooltip: "Speichern und zurück",
    itemValueEdit: "Sichtbar wenn",
    editChoices: "Auswahlmöglichkeiten bearbeiten",
    showChoices: "Auswahlmöglichkeiten anzeigen",
    move: "Verschieben",
    empty: "<leer>",
    notEmpty: "<bearbeiten>",
    fastEntry: "Schnelleintrag",
    formEntry: "Formulareintrag",
    testService: "Service testen",
    itemSelectorEmpty: "Bitte ein Element auswählen",
    conditionActionEmpty: "Bitte eine Aktion auswählen",
    conditionSelectQuestion: "Frage auswählen ...",
    conditionSelectPage: "Seite auswählen ...",
    conditionSelectPanel: "Panel auswählen ...",
    conditionValueQuestionTitle: "Bitte den Wert eingeben oder auswählen",
    conditionHelp:
      "Bitte geben Sie einen booleschen Ausdruck ein. Dieser muss 'true' zurückgeben, um die Frage/Seite anzuzeigen. Beispiel: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp:
      'Bitte geben Sie eine Anweisung ein. Sie können geschweifte Klammern verwenden, um Zugriff auf die Werte der Fragen zu bekommen: "{question1} + {question2}", "({price} * {quantity}) * (100 - {discount})"',
    aceEditorHelp:
      "Bitte drücken Sie Strg+Leertaste, um Vervollständigungsvorschläge für den Ausdruck zu erhalten",
    aceEditorRowTitle: "Aktuelle Zeile",
    aceEditorPanelTitle: "Aktuelles Panel",
    showMore: "Weitere Informationen finden Sie in der Dokumentation",
    conditionShowMoreUrl:
      "https://surveyjs.io/Documentation/LibraryParameter?id=QuestionBase&parameter=visibleIf",
    assistantTitle: "Verfügbare Fragen:",
    cellsEmptyRowsColumns: "Es sollte mindestens eine Spalte oder Zeile geben",

    propertyIsEmpty: "Bitte geben Sie einen Wert ein",
    propertyNameIsNotUnique: "Bitte geben Sie einen eindeutigen Wert ein",
    listIsEmpty: "Neues Element hinzufügen",
    expressionIsEmpty: "Ausdruck ist leer",
    value: "Wert",
    text: "Text",
    rowid: "Zeilen-ID",
    imageLink: "Link auf das Bild",
    columnEdit: "Spalte bearbeiten: {0}",
    itemEdit: "Element bearbeiten: {0}",

    url: "URL",
    path: "Pfad",
    valueName: "Name der Antwort",
    titleName: "Name des Titels",
    titlePlaceholder: "Titel eingeben",
    surveyTitlePlaceholder: "Umfragetitel hier eingeben",
    pageTitlePlaceholder: "Seitenbeschreibung hier eingeben",
    descriptionPlaceholder: "Beschreibung eingeben",
    surveyDescriptionPlaceholder: "Umfragebeschreibung eingeben",
    pageDescriptionPlaceholder: "Seitenbeschreibung eingeben",

    showOtherItem: "Sonstiges auswählbar?",
    otherText: "Text für Sonstiges",
    otherPlaceHolder: "Platzhalter für Sonstiges",
    showClearButton: "Button anzeigen, der es erlaubt die Auswahl zu leeren",
    allowEmptyResponse: "Keine Antwort erlauben",
    showNoneItem: "Alle Elemente abwählbar?",
    noneText: "Text für die Abwahl aller Elemente",
    hasSelectAll: "Alle Elemente auswählbar?",
    selectAllText: "Text für die Auswahl aller Elemente",
    choicesMin: "Minimaler Wert für automatisch erzeugte Elemente",
    choicesMax: "Maximaler Wert für automatisch erzeugte Elemente",
    choicesStep: "Schrittgröße für automatisch erzeugte Elemente",
    showOptionsCaption: "Überschrift der Auswahlmöglichkeiten anzeigen",
    name: "Name",
    title: "Titel",
    cellType: "Zellentyp",
    colCount: "Spaltenanzahl",
    choicesOrder: "Auswahlreihenfolge",
    visible: "Sichtbar?",
    isRequired: "Erforderlich?",
    isAllRowRequired: "Ist eine Antwort für alle Zeilen erforderlich?",
    requiredErrorText:
      "Fehlermeldung bei nicht beantworteten erforderlichen Fragen",
    startWithNewLine: "In neuer Zeile beginnen?",
    rows: "Zeilenanzahl",
    cols: "Spaltenanzahl",
    placeholder: "Platzhalter",
    showPreview: "Wird eine Bildvorschau angezeigt?",
    storeDataAsText: "Speicher Dateininhalt des JSON-Resultats als Text",
    maxSize: "Maximale Dateigröße in Bytes",
    imageHeight: "Bildhöhe",
    imageWidth: "Bildbreite",
    rowCount: "Zeilenanzahl",
    columnLayout: "Spaltenlayout",
    addRowLocation: "Zeilenknopfposition hinzufügen",
    addRowText: "Zeilenknopftext hinzufügen",
    removeRowText: "Zeilenknopftext löschen",
    rateMin: "Minimal",
    rateMax: "Maximal",
    rateStep: "Bewertungsschritte",
    minRateDescription: "Bewertungsbeschreibung für minimale Bewertung",
    maxRateDescription: "Bewertungsbeschreibung für maximale Bewertung",
    inputType: "Eingabetyp",
    optionsCaption: "Auswahlbeschriftung",
    defaultValue: "Standardantwort",
    cellsDefaultRow: "Standardzellentext",

    surveyEditorTitle: "Umfrageeinstellungen bearbeiten",
    qEditorTitle: "Frage bearbeiten: {0}",

    maxLength: "Maximale Länge",

    buildExpression: "Baukasten",
    editExpression: "Bearbeiten",
    and: "und",
    or: "oder",
    remove: "Entfernen",
    addCondition: "Bedingung hinzufügen",

    showTitle: "Titel anzeigen",
    locale: "Standardsprache",
    simulator: "Gerät auswählen",
    landscapeOrientation: "Querformat",
    mode: "Modus (editierbar/schreibgeschützt)",
    clearInvisibleValues: "Alle unsichtbaren Werte leeren",
    cookieName:
      "Cookie-Name (um zu unterdrücken, dass die Umfrage lokal zwei Mal ausgefüllt werden kann)",
    sendResultOnPageNext:
      "Sende Umfrageergebnisse beim Betreten der nächsten Seite",
    storeOthersAsComment: "Speichere andere Werte als Kommentar",
    showPageTitles: "Seitenbeschreibung anzeigen",
    showPageNumbers: "Seitennummern anzeigen",
    pagePrevText: "Text des Buttons für die vorherige Seite",
    pageNextText: "Text des Buttons für die nächste Seite",
    completeText: "Text des Abschließenbuttons",
    previewText: "Text des Vorschaubuttons",
    editText: "Text des Bearbeitenbuttons",
    startSurveyText: "Text des Startbuttons",
    showNavigationButtons: "Anzeige der Navigationsbuttons",
    showPrevButton:
      "Button für die vorherige Seite anzeigen (Benutzer können auf die vorherige Seite zurückkehren)",
    firstPageIsStarted: "Die erste Seite der Umfrage ist die Startseite",
    showCompletedPage: "Nach Abschluss die ausgefüllte Umfrage anzeigen",
    goNextPageAutomatic:
      "Wenn alle Fragen auf einer Seite beantwortet sind, gehe automatisch zur nächsten Seiten",
    showProgressBar: "Fortschrittsbalken anzeigen",
    questionTitleLocation: "Position des Fragentitels",
    requiredText: "Symbol für erforderliche Fragen",
    questionStartIndex: 'Startindex der Fragen (bspw. "1", "A", "a", ...)',
    showQuestionNumbers: "Fragennummern anzeigen",
    textUpdateMode: "Text aktualisieren",
    questionTitleTemplate:
      'Template für den Fragentitel. Standard ist: "{no}. {require} {title}"',
    questionErrorLocation: "Position der Fehlermeldungen",
    focusFirstQuestionAutomatic:
      "Fokussiere die erste Frage, wenn die Seite verändert wird",
    questionsOrder: "Reihenfolge der Elemente auf der Seite",
    maxTextLength: "Maximale Textlänge",
    maxOtherLength: "Maximale weitere Länge",
    maxOthersLength: "Maximale weitere Länge",
    maxTimeToFinish: "Maximale Zeit, um die Umfrage zu beenden",
    maxTimeToFinishPage: "Maximale Zeit, um eine Seite der Umfrage zu beenden",
    showTimerPanel: "Position des Timers",
    showTimerPanelMode: "Modus des Timers",
    renderMode: "Anzeigemodus",
    allowAddPanel: "Erlaube das Hinzufügen eines Paneltexts",
    allowRemovePanel: "Erlaube das Entfernen eines Paneltexts",
    panelAddText: "Paneltext hinzufügen",
    panelRemoveText: "Paneltext entfernen",
    isSinglePage: "Alle Elemente auf einer Seite anzeigen",
    html: "HTML",
    expression: "Ausdruck",

    minValue: "Minimaler Wert",
    maxValue: "Maximaler Wert",
    minLength: "Minimale Länge",
    allowDigits: "Ziffern erlaubt",
    minCount: "Minimale Anzahl",
    maxCount: "Maximale Anzahl",
    regex: "Regulärer Ausdruck",

    totalText: "Text (total)",
    totalType: "Typ (total)",
    totalExpression: "Ausdruck (total)",
    totalDisplayStyle: "Anzeigestil (total)",
    totalCurrency: "Währung (total)",
    totalFormat: "Format (total)",

    logoPosition: "Logoposition",
    addLogo: "Logo hinzufügen ...",
    changeLogo: "Logo bearbeiten ...",
    logoPositions: {
      none: "ausblenden",
      left: "links",
      right: "rechts",
      top: "oben",
      bottom: "unten",
    },

    tabs: {
      general: "Allgemein",
      fileOptions: "Optionen",
      html: "Html Editor",
      columns: "Spalten",
      rows: "Zeilen",
      choices: "Auswahlmöglichkeiten",
      items: "Elemente",
      visibleIf: "Sichtbar wenn ...",
      enableIf: "Aktiviert wenn ...",
      requiredIf: "Erforderlich wenn ...",
      hideIfChoicesEmpty: "Verstecken, wenn Auswahlmöglichkeiten leer sind",
      choicesVisibleIf: "Auswahlmöglichkeiten sichtbar wenn ...",
      choicesEnableIf: "Auswahlmöglichkeiten aktiviert wenn ...",
      choicesEnabledIf: "Auswahlmöglichkeiten aktiviert wenn ...",
      rateValues: "Bewertungsskala",
      choicesByUrl: "Auswahlmöglichkeiten aus dem Internet",
      matrixChoices: "Standardauswahl",
      multipleTextItems: "Texteingabe",
      numbering: "Nummerierung",
      validators: "Überprüfung",
      navigation: "Navigation",
      question: "Fragen",
      completedHtml: "Benutzerdefinierte Seite nach Abschluss der Umfrage",
      completedHtmlOnCondition:
        "Bedingung dafür, dass eine benutzerdefiniterte Seite nach Abschluss der Umfrage angezeigt wird",
      loadingHtml: "Wird geladen",
      timer: "Timer",
      calculatedValues: "Berechnete Werte",
      triggers: "Trigger",
      templateTitle: "Titeltemplate",
      totals: "Summen",
      logic: "Logik",
      layout: "Layout",
      data: "Daten",
      validation: "Validierung",
      cells: "Zellen",
      showOnCompleted: "Abschluss",
      logo: "Logo im Umfragetitel",
      others: "Weiteres",
    },
    editProperty: "Eigenschaft bearbeiten '{0}'",
    items: "[ Gegenstand: {0} ]",

    enterNewValue: "Bitte einen Wert eingeben.",
    noquestions: "Die Umfrage enthält keine Frage.",
    createtrigger: "Bitte einen Trigger eingeben.",
    keyboardAdornerTip:
      "Drücken Sie ENTER, um das Element zu bearbeiten, ENTFERNEN, um das Element zu entfernen, STRG + PFEIL NACH OBEN/UNTEN, um das Element zu verschieben",
    triggerOn: "Ein",
    triggerMakePagesVisible: "Seiten sichtbar machen:",
    triggerMakeQuestionsVisible: "Elemente sichtbar machen:",
    triggerCompleteText: "Bei Erfolg die Umfrage abschliessen.",
    triggerNotSet: "Trigger ist nicht gesetzt",
    triggerRunIf: "Ausführen wenn ...",
    setToName: "Setze den Wert von ...",
    fromName: "als Kopie von ...",
    runExpression: "Anweisung",
    setValue: "auf ...",
    gotoName: "Gehe zu Frage ...",
    triggerIsVariable: "Variable nicht im Umfrageergebnis einbinden.",
    runExpressionEmpty: "Bitte geben Sie einen gültigen Ausdruck ein",
  },
  //Property values
  pv: {
    true: "wahr",
    false: "falsch",
    inherit: "vererbt",
    show: "anzeigen",
    hide: "verstecken",
    default: "Standard",
    initial: "initial",
    random: "zufällig",
    collapsed: "eingeklappt",
    expanded: "ausgeklappt",
    none: "/",
    asc: "aufsteigend",
    desc: "absteigend",
    indeterminate: "unentschieden",
    decimal: "Dezimal",
    currency: "Währung",
    percent: "Prozent",
    firstExpanded: "ausgeklappt (erstes Element)",
    off: "aus",
    onPanel: "Panel",
    onSurvey: "Umfrage",
    list: "Liste",
    progressTop: "oben (Fortschritt)",
    progressBottom: "unten (Fortschritt)",
    progressTopBottom: "oben und unten (Fortschritt)",
    horizontal: "horizontal",
    vertical: "vertikal",
    top: "oben",
    bottom: "unten",
    topBottom: "oben und unten",
    both: "beides",
    left: "links",
    color: "Farbe",
    date: "Datum",
    datetime: "Datum und Uhrzeit",
    "datetime-local": "Datum und Uhrzeit (lokal)",
    email: "E-Mail",
    month: "Monat",
    number: "Nummer",
    password: "Passwort",
    range: "Spanne",
    tel: "Telefonnummer",
    text: "Text",
    time: "Uhrzeit",
    url: "URL",
    week: "Woche",
    hidden: "versteckt",
    on: "an",
    onPage: "an (unabhängig für jede Seite)",
    underTitle: "Unterhalb des Titels",
    underInput: "Unterhalb des Eingabefelds",
    edit: "Bearbeiten",
    display: "Anzeigen",
    onComplete: "Wenn die Umfrage abgeschlossen wurde",
    onHidden: "Wenn die Umfrage versteckt wurde",
    onBlur: "Wenn das Eingabefeld verlassen wird",
    onTyping: "Wenn in das Eingabefeld getippt wird",
    all: "Alle",
    page: "Seite",
    pages: "Seiten",
    questions: "Fragen",
    correctQuestions: "Richtig beantwortete Fragen",
    survey: "Umfrage",
    onNextPage: "Wenn die Seite gewechselt wurde",
    onValueChanged: "Wenn ein Wert geändert wurde",
    singlePage: "Alle Fragen auf eine Seite",
    standard: "Standard",
    questionPerPage: "Alle Fragen auf eine eigene Seite",
    noPreview: "Keine Vorschau",
    showAllQuestions: "Vorschau mit allen Fragen anzeigen",
    showAnsweredQuestions: "Vorschau mit beantworteten Fragen anzeigen",
    image: "Bild",
    video: "Video",
    contain: "beinhalten",
    cover: "bedecken",
    fill: "füllen",
  },
  //Operators
  op: {
    empty: "ist leer",
    notempty: "ist nicht leer",
    equal: "ist gleich",
    notequal: "ist ungleich",
    contains: "enthält",
    notcontains: "enthält nicht",
    anyof: "eins aus",
    allof: "alle aus",
    greater: "größer als",
    less: "kleiner als",
    greaterorequal: "größer oder gleich als",
    lessorequal: "kleiner oder gleich als",
    and: "und",
    or: "oder",
  },
  //Embed window
  ew: {
    angular: "Angular-Version benutzen",
    jquery: "jQuery-Version benutzen",
    knockout: "Knockout-Version benutzen",
    react: "React-Version benutzen",
    vue: "Vue-Version benutzen",
    bootstrap: "Als Bootstrap Framework",
    standard: "Kein Bootstrap",
    showOnPage: "Umfrage auf Seite anzeigen",
    showInWindow: "Umfrage als Fenster anzeigen",
    loadFromServer: "Lade Umfrage als JSON vom Server",
    titleScript: "Skripte und Styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript",
  },
  //Test Survey
  ts: {
    selectPage: "Seite:",
    showInvisibleElements: "Unsichtbare Elemente anzeigen",
  },
  validators: {
    answercountvalidator: "Antwortanzahl",
    emailvalidator: "E-Mail",
    expressionvalidator: "Ausdruck",
    numericvalidator: "Zahl",
    regexvalidator: "Regulärer Ausdruck",
    textvalidator: "Text",
  },
  triggers: {
    completetrigger: "Umfrage abschließen",
    setvaluetrigger: "Wert setzen",
    copyvaluetrigger: "Wert kopieren",
    skiptrigger: "Frage wechseln",
    runexpressiontrigger: "Anweisung ausführen",
    visibletrigger: "Sichtbarkeit ändern (deprecated)",
  },
  //Properties
  p: {
    name: "Name",
    title: {
      name: "Titel",
      title: 'Bitte leer lassen, falls gleich wie "Name"',
    },

    navigationButtonsVisibility: "Sichtbarkeit der Navigationsbuttons",
    questionsOrder: "Reihenfolge der Fragen",
    maxTimeToFinish: "Maximale Zeit, um die Umfrage abzuschließen",

    visible: "Sichtbar",
    visibleIf: "Sichtbar wenn ...",
    questionTitleLocation: "Position der Fragentitel",
    questionDescriptionLocation: "Position der Fragenbeschreibung",
    description: "Beschreibung",
    state: "Status",
    isRequired: "Ist erforderlich",
    requiredIf: "Erforderlich wenn ...",
    choicesVisibleIf: "Auswahlmöglichkeiten sichtbar wenn ...",
    choicesEnableIf: "Auswahlmöglichkeiten aktiviert wenn ...",
    choicesEnabledIf: "Auswahlmöglichkeiten aktiviert wenn ...",
    rowsVisibleIf: "Zeilen sichtbar wenn ...",
    columnsVisibleIf: "Spalten sichtbar wenn ...",
    indent: "Einzug",
    requiredErrorText:
      "Fehlermeldung bei nicht beantworteten erforderlichen Fragen",
    startWithNewLine: "Starte mit neuer Zeile",
    innerIndent: "Innerer Einzug",
    page: "Seite",

    width: "Breite",

    commentText: "Kommentarbeschreibung",
    valueName: "Name der Antwort",
    enableIf: "Aktiviert wenn ...",
    defaultValue: "Standardantwort",
    correctAnswer: "Richtige Antwort",
    readOnly: "Schreibgeschützt?",
    validators: "Validierungen",
    titleLocation: "Position des Titels",
    descriptionLocation: "Position der Beschreibung",
    useDisplayValuesInDynamicTexts: "Verwende Anzeigewerte im Titel",

    hasComment: "Kommentare erlaubt?",
    showOtherItem: "Sonstiges auswählbar?",
    selectAllText: "Text für die Auswahl aller Elemente",
    choices: "Auswahlmöglichkeiten",
    choicesOrder: "Auswahlreihenfolge",
    choicesByUrl: "Auswahlreihenfolge nach URL",
    otherText: "Text",
    otherPlaceHolder: "Platzhalter",
    otherErrorText: "Fehlermeldung",
    storeOthersAsComment: "Speichere andere Werte als Kommentar",

    label: "Label",
    labelTrue: 'Anzeigewert für "Ja"',
    labelFalse: 'Anzeigewert für "Nein"',
    showTitle: "Titel anzeigen",
    showHeader: "Spaltennamen anzeigen",
    valueTrue: 'Wert für "Ja"',
    valueFalse: 'Wert für "Nein"',

    multiSelect: "Mehrfachauswahl",
    contentMode: "Modus",
    imageFit: "Bilddarstellung",
    showLabel: "Wert anzeigen",

    cols: "Spalten",
    rows: "Zeilen",
    placeholder: "Platzhalter",

    optionsCaption: "Auswahlbeschriftung",

    expression: "Ausdruck",
    format: "Format",
    displayStyle: "Anzeigestil",
    currency: "Währung",
    useGrouping: "Gruppierung verwenden",

    showPreview: "Vorschau anzeigen",
    allowMultiple: "Mehrere Antworten erlauben",
    imageHeight: "Bildhöhe",
    imageWidth: "Bildbreite",
    storeDataAsText: "Daten als Text speichern",
    maxSize: "Maximale Größe",

    html: "HTML",

    columns: "Spalten",
    cells: "Zellen",
    isAllRowRequired: "Sind alle Zeilen erforderlich?",

    horizontalScroll: "Horizontales Scrollen",
    cellType: "Zelltyp",
    columnsLayout: "Spaltenlayout",
    columnColCount: "Spaltenanzahl",
    columnMinWidth: "Minimale Spaltenbreite",

    rowCount: "Zeilenanzahl",
    minRowCount: "Minimale Zeilenanzahl",
    maxRowCount: "Maximale Spaltenanzahl",
    keyName: "Schlüsselname",
    keyDuplicationError: "Fehlermeldung für doppelten Schlüssel",
    confirmDelete: "Bestätigung der Löschung",
    confirmDeleteText: "Text für Bestätigung der Löschung",
    addRowLocation: "Zeilenknopfposition hinzufügen",
    addRowText: "Zeilenknopftext hinzufügen",
    removeRowText: "Zeilenknopftext löschen",

    items: "Elemente",
    itemSize: "Elementgröße",
    colCount: "Spaltenanzahl",

    templateTitle: "Template für den Titel",
    templateDescription: "Template für die Beschreibung",
    allowAddPanel: "Erlaube das Hinzufügen eines Paneltexts",
    allowRemovePanel: "Erlaube das Entfernen eines Paneltexts",
    panelCount: "Panelanzahl",
    minPanelCount: "Minimale Panelanzahl",
    maxPanelCount: "Maximale Panelanzahl",
    panelsState: "Panelzustand",
    panelAddText: "Text für das Hinzufügen eines Panels",
    panelRemoveText: "Text für das Entfernen eines Panels",
    panelPrevText: "Text für die Navigation zum vorherigen Panel",
    panelNextText: "Text für die Navigation zum nächsten Panel",
    showQuestionNumbers: "Fragenummern anzeigen",
    textUpdateMode: "Text aktualisieren",
    showRangeInProgress: "Fortschrittsbalken anzeigen",
    renderMode: "Anzeigemodus",
    templateTitleLocation: "Template für die Titelposition",

    rateValues: "Bewertungsskala",
    rateMin: "Minimal",
    rateMax: "Maximal",
    rateStep: "Bewertungsschritte",
    minRateDescription: "Bewertungsbeschreibung für minimale Bewertung",
    maxRateDescription: "Bewertungsbeschreibung für maximale Bewertung",

    inputType: "Eingabetyp",
    size: "Größe",

    locale: "Sprache",
    focusFirstQuestionAutomatic: "Fokussiere automatisch die erste Frage",
    completedHtml:
      "Inhalt, der nach Abschluss der Umfrage angezeigt wird (HTML)",
    completedBeforeHtml:
      "Inhalt, der vor Abschluss der Umfrage angezeigt wird (HTML)",
    loadingHtml: "Inhalt, der beim Laden der Umfrage angezeigt wird (HTML)",
    triggers: "Trigger",
    calculatedValues: "Berechnete Werte",
    includeIntoResult: "Variable im Umfrageergebnis einbinden",
    cookieName: "Cookiename",
    sendResultOnPageNext:
      "Sende Umfrageergebnisse beim Betreten der nächsten Seite",
    showNavigationButtons: "Anzeige der Navigationsbuttons",
    showPrevButton:
      "Button für die vorherige Seite anzeigen (Benutzer können auf die vorherige Seite zurückkehren)",
    showPageTitles: "Seitenbeschreibung anzeigen",
    navigateToUrl: "Weiterleitung (URL)",
    navigateToUrlOnCondition: "Bedingte Weiterleitung (URL)",
    showCompletedPage: "Nach Abschluss die ausgefüllte Umfrage anzeigen",
    showPageNumbers: "Seitennummern anzeigen",
    questionErrorLocation: "Position der Fehlermeldungen",
    showProgressBar: "Fortschrittsbalken anzeigen",
    progressBarType: "Fortschrittsbalkentyp",
    questionsOnPageMode: "Aufteilung auf Seiten",
    mode: "Modus (editierbar/schreibgeschützt)",
    goNextPageAutomatic:
      "Wenn alle Fragen auf einer Seite beantwortet sind, gehe automatisch zur nächsten Seiten",
    focusOnFirstError: "Fokussiere den ersten Fehler",
    checkErrorsMode: "Wann werden Fehler überprüft?",
    clearInvisibleValues: "Alle unsichtbaren Werte leeren",
    startSurveyText: "Text des Startbuttons",
    pagePrevText: "Text des Buttons für die vorherige Seite",
    pageNextText: "Text des Buttons für die nächste Seite",
    completeText: "Text des Abschließenbuttons",
    requiredText: "Symbol für erforderliche Fragen",
    questionStartIndex: 'Startindex der Fragen (bspw. "1", "A", "a", ...)',
    questionTitleTemplate:
      'Template für den Fragentitel. Standard ist: "{no}. {require} {title}"',
    firstPageIsStarted: "Die erste Seite der Umfrage ist die Startseite",
    isSinglePage: "Alle Elemente auf einer Seite anzeigen",
    maxTimeToFinishPage: "Maximale Zeit, um eine Seite der Umfrage zu beenden",
    showTimerPanel: "Timerpanelposition",
    showTimerPanelMode: "Timerpanelmodus",
    hideIfChoicesEmpty: "Verstecken, wenn Auswahlmöglichkeiten leer sind",

    defaultPanelValue: "Standardwert für Panels",
    defaultRowValue: "Standardwert für Zeilen",
    defaultValueFromLastPanel: "Standardwert vom letzten Panel",
    showNoneItem: "Alle Elemente abwählbar?",
    noneText: "Text",
    rowsOrder: "Zeilensortierung",

    text: "Text",
  },
};

editorLocalization.locales["de"] = germanTranslation;