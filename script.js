// Word data with extended information
const wordsData = [
    {
        id: 1,
        spanish: "como - cómo",
        polish: "jako, jak",
        description: "Używane do porównań i pytań 'jak?'",
        examples: [
            { spanish: "Como una manzana.", polish: "Jem jabłko." },
            { spanish: "¿Cómo estás?", polish: "Jak się masz?" },
            { spanish: "Es como mi hermano.", polish: "Jest jak mój brat." }
        ]
    },
    {
        id: 2,
        spanish: "yo",
        polish: "ja",
        description: "Zaimek osobowy pierwszej osoby liczby pojedynczej",
        examples: [
            { spanish: "Yo soy estudiante.", polish: "Ja jestem studentem." },
            { spanish: "Yo tengo un perro.", polish: "Ja mam psa." },
            { spanish: "Yo vivo en Madrid.", polish: "Ja mieszkam w Madrycie." }
        ]
    },
    {
        id: 3,
        spanish: "su - sus",
        polish: "jego, jej, ich, Pana/Pani",
        description: "Zaimek dzierżawczy trzeciej osoby",
        examples: [
            { spanish: "Su casa es grande.", polish: "Jego dom jest duży." },
            { spanish: "Sus libros están aquí.", polish: "Jego książki są tutaj." },
            { spanish: "¿Cuál es su nombre?", polish: "Jakie jest Pana/Pani imię?" }
        ]
    },
    {
        id: 4,
        spanish: "que",
        polish: "że, który, co",
        description: "Spójnik i zaimek względny",
        examples: [
            { spanish: "Creo que es verdad.", polish: "Myślę, że to prawda." },
            { spanish: "El libro que leo.", polish: "Książka, którą czytam." },
            { spanish: "¿Qué haces?", polish: "Co robisz?" }
        ]
    },
    {
        id: 5,
        spanish: "él",
        polish: "on",
        description: "Zaimek osobowy trzeciej osoby rodzaju męskiego",
        examples: [
            { spanish: "Él es mi amigo.", polish: "On jest moim przyjacielem." },
            { spanish: "Él trabaja aquí.", polish: "On pracuje tutaj." },
            { spanish: "Él habla español.", polish: "On mówi po hiszpańsku." }
        ]
    },
    {
        id: 6,
        spanish: "era - eras - éramos - eran",
        polish: "byłem/byłam, był/była",
        description: "Przeszły czas niedokonany czasownika 'ser' (być)",
        examples: [
            { spanish: "Yo era joven.", polish: "Byłem młody." },
            { spanish: "Ella era profesora.", polish: "Ona była nauczycielką." },
            { spanish: "Éramos felices.", polish: "Byliśmy szczęśliwi." }
        ]
    },
    {
        id: 7,
        spanish: "para",
        polish: "dla, żeby, w celu",
        description: "Przyimek oznaczający cel lub przeznaczenie",
        examples: [
            { spanish: "Este regalo es para ti.", polish: "Ten prezent jest dla ciebie." },
            { spanish: "Estudio para aprender.", polish: "Uczę się, żeby się nauczyć." },
            { spanish: "Salgo para Madrid.", polish: "Wyjeżdżam do Madrytu." }
        ]
    },
    {
        id: 8,
        spanish: "en",
        polish: "w, na",
        description: "Przyimek miejsca i czasu",
        examples: [
            { spanish: "Estoy en casa.", polish: "Jestem w domu." },
            { spanish: "El libro está en la mesa.", polish: "Książka jest na stole." },
            { spanish: "En verano hace calor.", polish: "Latem jest gorąco." }
        ]
    },
    {
        id: 9,
        spanish: "son",
        polish: "są",
        description: "Trzecia osoba liczby mnogiej czasownika 'ser' (być)",
        examples: [
            { spanish: "Ellos son estudiantes.", polish: "Oni są studentami." },
            { spanish: "Son las tres.", polish: "Jest trzecia (godzina)." },
            { spanish: "Son importantes.", polish: "Są ważne." }
        ]
    },
    {
        id: 10,
        spanish: "con",
        polish: "z",
        description: "Przyimek oznaczający towarzystwo lub narzędzie",
        examples: [
            { spanish: "Voy con mi amigo.", polish: "Idę z moim przyjacielem." },
            { spanish: "Café con leche.", polish: "Kawa z mlekiem." },
            { spanish: "Escribo con un lápiz.", polish: "Piszę ołówkiem." }
        ]
    },
    {
        id: 11,
        spanish: "ellos - ellas",
        polish: "oni, one",
        description: "Zaimek osobowy trzeciej osoby liczby mnogiej",
        examples: [
            { spanish: "Ellos viven aquí.", polish: "Oni mieszkają tutaj." },
            { spanish: "¿Dónde están ellos?", polish: "Gdzie oni są?" },
            { spanish: "Ellos son amigos.", polish: "Oni są przyjaciółmi." }
        ]
    },
    {
        id: 12,
        spanish: "ser",
        polish: "być",
        description: "Czasownik 'być' w formie bezokolicznika",
        examples: [
            { spanish: "Quiero ser médico.", polish: "Chcę być lekarzem." },
            { spanish: "Es difícil ser feliz.", polish: "Trudno jest być szczęśliwym." },
            { spanish: "Puede ser verdad.", polish: "To może być prawda." }
        ]
    },
    {
        id: 13,
        spanish: "en",
        polish: "przy, u",
        description: "Przyimek miejsca",
        examples: [
            { spanish: "Estoy en la puerta.", polish: "Jestem przy drzwiach." },
            { spanish: "En mi opinión.", polish: "W mojej opinii." },
            { spanish: "En la escuela.", polish: "W szkole." }
        ]
    },
    {
        id: 14,
        spanish: "uno - una",
        polish: "jeden, jedna",
        description: "Liczebnik główny oznaczający liczbę 1",
        examples: [
            { spanish: "Tengo un libro.", polish: "Mam jedną książkę." },
            { spanish: "Es uno de mis amigos.", polish: "To jeden z moich przyjaciół." },
            { spanish: "Una persona vino.", polish: "Jedna osoba przyszła." }
        ]
    },
    {
        id: 15,
        spanish: "tener",
        polish: "mieć",
        description: "Czasownik 'mieć' w formie bezokolicznika",
        examples: [
            { spanish: "Tengo un coche.", polish: "Mam samochód." },
            { spanish: "Ella tiene razón.", polish: "Ona ma rację." },
            { spanish: "¿Tienes tiempo?", polish: "Masz czas?" }
        ]
    },
    {
        id: 16,
        spanish: "este - esta - estos - estas",
        polish: "ten, ta, ci, te",
        description: "Zaimek wskazujący bliski",
        examples: [
            { spanish: "Este libro es mío.", polish: "Ta książka jest moja." },
            { spanish: "Esta casa es grande.", polish: "Ten dom jest duży." },
            { spanish: "Estos niños juegan.", polish: "Te dzieci bawią się." }
        ]
    },
    {
        id: 17,
        spanish: "desde",
        polish: "od, z",
        description: "Przyimek oznaczający początek w czasie lub przestrzeni",
        examples: [
            { spanish: "Desde aquí se ve bien.", polish: "Stąd dobrze widać." },
            { spanish: "Trabajo desde las 9.", polish: "Pracuję od dziewiątej." },
            { spanish: "Desde Madrid a Barcelona.", polish: "Z Madrytu do Barcelony." }
        ]
    },
    {
        id: 18,
        spanish: "por",
        polish: "przez, za, po",
        description: "Przyimek wielofunkcyjny",
        examples: [
            { spanish: "Paso por aquí.", polish: "Przechodzę tędy." },
            { spanish: "Gracias por todo.", polish: "Dziękuję za wszystko." },
            { spanish: "Por la mañana.", polish: "Rano." }
        ]
    },
    {
        id: 19,
        spanish: "caliente",
        polish: "gorący",
        description: "Przymiotnik opisujący wysoką temperaturę",
        examples: [
            { spanish: "El café está caliente.", polish: "Kawa jest gorąca." },
            { spanish: "Hace un día caliente.", polish: "Jest gorący dzień." },
            { spanish: "Agua caliente.", polish: "Gorąca woda." }
        ]
    },
    {
        id: 20,
        spanish: "palabra",
        polish: "słowo",
        description: "Rzeczownik oznaczający jednostkę mowy",
        examples: [
            { spanish: "No entiendo esta palabra.", polish: "Nie rozumiem tego słowa." },
            { spanish: "Es una palabra difícil.", polish: "To trudne słowo." },
            { spanish: "Palabras bonitas.", polish: "Piękne słowa." }
        ]
    },
    {
        id: 21,
        spanish: "pero",
        polish: "ale, lecz",
        description: "Spójnik przeciwstawny",
        examples: [
            { spanish: "Quiero ir, pero no puedo.", polish: "Chcę iść, ale nie mogę." },
            { spanish: "Es difícil pero importante.", polish: "Jest trudne, ale ważne." },
            { spanish: "Pequeño pero fuerte.", polish: "Mały, ale silny." }
        ]
    },
    {
        id: 22,
        spanish: "qué",
        polish: "co, jaki",
        description: "Zaimek pytający",
        examples: [
            { spanish: "¿Qué quieres?", polish: "Co chcesz?" },
            { spanish: "¿Qué hora es?", polish: "Która godzina?" },
            { spanish: "¿Qué bonito!", polish: "Jakie piękne!" }
        ]
    },
    {
        id: 23,
        spanish: "algunos - algunas",
        polish: "kilka, niektóre",
        description: "Zaimek nieokreślony liczby mnogiej",
        examples: [
            { spanish: "Algunos estudiantes llegaron.", polish: "Kilku studentów przyszło." },
            { spanish: "Tengo algunas ideas.", polish: "Mam kilka pomysłów." },
            { spanish: "Algunas veces sí.", polish: "Czasami tak." }
        ]
    },
    {
        id: 24,
        spanish: "es",
        polish: "jest",
        description: "Trzecia osoba liczby pojedynczej czasownika 'ser' (być)",
        examples: [
            { spanish: "Es importante.", polish: "To jest ważne." },
            { spanish: "Ella es alta.", polish: "Ona jest wysoka." },
            { spanish: "Es la verdad.", polish: "To jest prawda." }
        ]
    },
    {
        id: 25,
        spanish: "lo",
        polish: "to, go",
        description: "Zaimek osobowy dopełnienia rodzaju nijakiego",
        examples: [
            { spanish: "Lo sé.", polish: "Wiem o tym." },
            { spanish: "No lo entiendo.", polish: "Nie rozumiem tego." },
            { spanish: "Lo vi ayer.", polish: "Widziałem go wczoraj." }
        ]
    },
    {
        id: 26,
        spanish: "usted - ustedes",
        polish: "Pan, Pani, Państwo",
        description: "Forma grzecznościowa zaimka 'ty'",
        examples: [
            { spanish: "¿Cómo está usted?", polish: "Jak się Pan/Pani ma?" },
            { spanish: "Usted es muy amable.", polish: "Jest Pan/Pani bardzo miły/miła." },
            { spanish: "¿Ustedes hablan español?", polish: "Czy Państwo mówią po hiszpańsku?" }
        ]
    },
    {
        id: 27,
        spanish: "o",
        polish: "lub, albo",
        description: "Spójnik łączący alternatywy",
        examples: [
            { spanish: "¿Té o café?", polish: "Herbata czy kawa?" },
            { spanish: "Hoy o mañana.", polish: "Dziś lub jutro." },
            { spanish: "Blanco o negro.", polish: "Białe lub czarne." }
        ]
    },
    {
        id: 28,
        spanish: "tenido",
        polish: "miany, posiadany",
        description: "Imiesłów czasu przeszłego od 'tener'",
        examples: [
            { spanish: "He tenido suerte.", polish: "Miałem szczęście." },
            { spanish: "Has tenido razón.", polish: "Miałeś rację." },
            { spanish: "Hemos tenido problemas.", polish: "Mieliśmy problemy." }
        ]
    },
    {
        id: 29,
        spanish: "la",
        polish: "przedimek określony żeński",
        description: "Rodzajnik określony rodzaju żeńskiego",
        examples: [
            { spanish: "La casa es grande.", polish: "Dom jest duży." },
            { spanish: "La comida está lista.", polish: "Jedzenie jest gotowe." },
            { spanish: "La verdad duele.", polish: "Prawda boli." }
        ]
    },
    {
        id: 30,
        spanish: "de",
        polish: "z, od",
        description: "Przyimek oznaczający pochodzenie lub przynależność",
        examples: [
            { spanish: "Soy de Polonia.", polish: "Jestem z Polski." },
            { spanish: "El libro de María.", polish: "Książka Marii." },
            { spanish: "Una taza de café.", polish: "Filiżanka kawy." }
        ]
    },
    {
        id: 31,
        spanish: "a",
        polish: "do, na",
        description: "Przyimek kierunku i celownika osobowego",
        examples: [
            { spanish: "Voy a casa.", polish: "Idę do domu." },
            { spanish: "A las tres.", polish: "O trzeciej." },
            { spanish: "Se lo doy a él.", polish: "Daję mu to." }
        ]
    },
    {
        id: 32,
        spanish: "y",
        polish: "i",
        description: "Spójnik łączący",
        examples: [
            { spanish: "Tú y yo.", polish: "Ty i ja." },
            { spanish: "Pan y agua.", polish: "Chleb i woda." },
            { spanish: "Grande y bonito.", polish: "Duże i ładne." }
        ]
    },
    {
        id: 33,
        spanish: "un - una",
        polish: "jeden, jakaś, pewien",
        description: "Rodzajnik nieokreślony",
        examples: [
            { spanish: "Un hombre camina.", polish: "Jakiś mężczyzna idzie." },
            { spanish: "Una mujer canta.", polish: "Jakaś kobieta śpiewa." },
            { spanish: "Un día feliz.", polish: "Szczęśliwy dzień." }
        ]
    },
    {
        id: 34,
        spanish: "en",
        polish: "w, we",
        description: "Przyimek miejsca",
        examples: [
            { spanish: "En España.", polish: "W Hiszpanii." },
            { spanish: "En el coche.", polish: "W samochodzie." },
            { spanish: "En mi casa.", polish: "W moim domu." }
        ]
    },
    {
        id: 35,
        spanish: "nos",
        polish: "nas, nam",
        description: "Zaimek osobowy dopełnienia pierwszej osoby liczby mnogiej",
        examples: [
            { spanish: "Nos gusta el café.", polish: "Lubimy kawę." },
            { spanish: "Él nos ve.", polish: "On nas widzi." },
            { spanish: "Nos vemos mañana.", polish: "Widzimy się jutro." }
        ]
    },
    {
        id: 36,
        spanish: "lata",
        polish: "puszka, puszka konserwowa",
        description: "Rzeczownik oznaczający metalowe pudełko",
        examples: [
            { spanish: "Una lata de cerveza.", polish: "Puszka piwa." },
            { spanish: "Compro latas.", polish: "Kupuję puszki." },
            { spanish: "Abre la lata.", polish: "Otwórz puszkę." }
        ]
    },
    {
        id: 37,
        spanish: "fuera",
        polish: "na zewnątrz, poza",
        description: "Przysłówek miejsca oznaczający miejsce zewnętrzne",
        examples: [
            { spanish: "Voy fuera.", polish: "Idę na zewnątrz." },
            { spanish: "Fuera de casa.", polish: "Poza domem." },
            { spanish: "Está fuera.", polish: "Jest na zewnątrz." }
        ]
    },
    {
        id: 38,
        spanish: "otros - otras",
        polish: "inni, inne",
        description: "Zaimek nieokreślony oznaczający pozostałe obiekty",
        examples: [
            { spanish: "Los otros estudiantes.", polish: "Pozostali studenci." },
            { spanish: "Otras personas.", polish: "Inne osoby." },
            { spanish: "Otro día.", polish: "Inny dzień." }
        ]
    },
    {
        id: 39,
        spanish: "eran",
        polish: "byli, były",
        description: "Trzecia osoba liczby mnogiej czasownika 'ser' w czasie przeszłym",
        examples: [
            { spanish: "Ellos eran amigos.", polish: "Oni byli przyjaciółmi." },
            { spanish: "Eran tiempos difíciles.", polish: "To były trudne czasy." },
            { spanish: "Las casas eran grandes.", polish: "Domy były duże." }
        ]
    },
    {
        id: 40,
        spanish: "que",
        polish: "który, która, które",
        description: "Zaimek względny",
        examples: [
            { spanish: "El hombre que vive aquí.", polish: "Mężczyzna, który tu mieszka." },
            { spanish: "La casa que compré.", polish: "Dom, który kupiłem." },
            { spanish: "Los libros que leo.", polish: "Książki, które czytam." }
        ]
    },
    {
        id: 41,
        spanish: "hacer",
        polish: "robić, czynić",
        description: "Czasownik 'robić' w formie bezokolicznika",
        examples: [
            { spanish: "¿Qué haces?", polish: "Co robisz?" },
            { spanish: "Voy a hacer la tarea.", polish: "Zrobię zadanie." },
            { spanish: "Hace frío.", polish: "Jest zimno." }
        ]
    },
    {
        id: 42,
        spanish: "su - sus",
        polish: "ich",
        description: "Zaimek dzierżawczy trzeciej osoby liczby mnogiej",
        examples: [
            { spanish: "Su libro.", polish: "Ich książka." },
            { spanish: "Sus hijos.", polish: "Ich dzieci." },
            { spanish: "Es su casa.", polish: "To ich dom." }
        ]
    },
    {
        id: 43,
        spanish: "tiempo",
        polish: "czas, pogoda",
        description: "Rzeczownik oznaczający czas lub pogodę",
        examples: [
            { spanish: "No tengo tiempo.", polish: "Nie mam czasu." },
            { spanish: "¿Qué tiempo hace?", polish: "Jaka jest pogoda?" },
            { spanish: "Hace mucho tiempo.", polish: "Dawno temu." }
        ]
    },
    {
        id: 44,
        spanish: "si",
        polish: "jeśli, czy",
        description: "Spójnik warunkowy",
        examples: [
            { spanish: "Si llueve, me quedo.", polish: "Jeśli będzie padać, zostaję." },
            { spanish: "No sé si viene.", polish: "Nie wiem, czy przyjdzie." },
            { spanish: "Si quieres.", polish: "Jeśli chcesz." }
        ]
    },
    {
        id: 45,
        spanish: "lo hará",
        polish: "zrobi to",
        description: "Forma przyszła czasownika 'hacer'",
        examples: [
            { spanish: "Él lo hará mañana.", polish: "On zrobi to jutro." },
            { spanish: "¿Quién lo hará?", polish: "Kto to zrobi?" },
            { spanish: "Lo hará bien.", polish: "Zrobi to dobrze." }
        ]
    },
    {
        id: 46,
        spanish: "cómo",
        polish: "jak",
        description: "Przysłówek pytający o sposób",
        examples: [
            { spanish: "¿Cómo estás?", polish: "Jak się masz?" },
            { spanish: "¿Cómo se dice?", polish: "Jak się mówi?" },
            { spanish: "No sé cómo hacerlo.", polish: "Nie wiem, jak to zrobić." }
        ]
    },
    {
        id: 47,
        spanish: "dicho",
        polish: "powiedziane",
        description: "Imiesłów czasu przeszłego od 'decir'",
        examples: [
            { spanish: "He dicho la verdad.", polish: "Powiedziałem prawdę." },
            { spanish: "Como ya he dicho.", polish: "Jak już powiedziałem." },
            { spanish: "Bien dicho.", polish: "Dobrze powiedziane." }
        ]
    },
    {
        id: 48,
        spanish: "un - una",
        polish: "jakiś, jakaś",
        description: "Rodzajnik nieokreślony",
        examples: [
            { spanish: "Es un problema.", polish: "To jakiś problem." },
            { spanish: "Veo una luz.", polish: "Widzę jakieś światło." },
            { spanish: "Hay un hombre.", polish: "Jest tam jakiś mężczyzna." }
        ]
    },
    {
        id: 49,
        spanish: "cada",
        polish: "każdy, każda",
        description: "Zaimek nieokreślony oznaczający wszystkie jednostki",
        examples: [
            { spanish: "Cada día.", polish: "Każdego dnia." },
            { spanish: "Cada persona es diferente.", polish: "Każda osoba jest inna." },
            { spanish: "Cada uno tiene su opinión.", polish: "Każdy ma swoją opinię." }
        ]
    },
    {
        id: 50,
        spanish: "decir",
        polish: "mówić, powiedzieć",
        description: "Czasownik 'mówić' w formie bezokolicznika",
        examples: [
            { spanish: "Quiero decir algo.", polish: "Chcę coś powiedzieć." },
            { spanish: "¿Qué quieres decir?", polish: "Co chcesz powiedzieć?" },
            { spanish: "Se dice que...", polish: "Mówi się, że..." }
        ]
    },
    {
        id: 51,
        spanish: "hace",
        polish: "robi, czyni",
        description: "Trzecia osoba liczby pojedynczej czasownika 'hacer'",
        examples: [
            { spanish: "Él hace su trabajo.", polish: "On robi swoją pracę." },
            { spanish: "Hace mucho frío.", polish: "Jest bardzo zimno." },
            { spanish: "Ella hace ejercicio.", polish: "Ona ćwiczy." }
        ]
    },
    {
        id: 52,
        spanish: "conjunto",
        polish: "zestaw, zbiór",
        description: "Rzeczownik oznaczający grupę przedmiotów",
        examples: [
            { spanish: "Un conjunto de herramientas.", polish: "Zestaw narzędzi." },
            { spanish: "El conjunto musical.", polish: "Zespół muzyczny." },
            { spanish: "Todo el conjunto.", polish: "Cały zestaw." }
        ]
    },
    {
        id: 53,
        spanish: "tres",
        polish: "trzy",
        description: "Liczebnik główny oznaczający liczbę 3",
        examples: [
            { spanish: "Tengo tres hermanos.", polish: "Mam trzech braci." },
            { spanish: "Son las tres.", polish: "Jest trzecia (godzina)." },
            { spanish: "Tres días.", polish: "Trzy dni." }
        ]
    },
    {
        id: 54,
        spanish: "querer",
        polish: "chcieć",
        description: "Czasownik 'chcieć' w formie bezokolicznika",
        examples: [
            { spanish: "Quiero aprender español.", polish: "Chcę nauczyć się hiszpańskiego." },
            { spanish: "¿Qué quieres?", polish: "Czego chcesz?" },
            { spanish: "Ella quiere viajar.", polish: "Ona chce podróżować." }
        ]
    },
    {
        id: 55,
        spanish: "aire",
        polish: "powietrze",
        description: "Rzeczownik oznaczający atmosferę",
        examples: [
            { spanish: "Necesito aire fresco.", polish: "Potrzebuję świeżego powietrza." },
            { spanish: "El aire está limpio.", polish: "Powietrze jest czyste." },
            { spanish: "Al aire libre.", polish: "Na świeżym powietrzu." }
        ]
    },
    {
        id: 56,
        spanish: "así",
        polish: "tak, w ten sposób",
        description: "Przysłówek sposobu",
        examples: [
            { spanish: "Hazlo así.", polish: "Zrób to tak." },
            { spanish: "Así es la vida.", polish: "Tak jest życie." },
            { spanish: "Así que...", polish: "Więc..." }
        ]
    },
    {
        id: 57,
        spanish: "también",
        polish: "również, także",
        description: "Przysłówek dodający informację",
        examples: [
            { spanish: "Yo también voy.", polish: "Ja też idę." },
            { spanish: "También es importante.", polish: "To również jest ważne." },
            { spanish: "A mí también.", polish: "Mnie też." }
        ]
    },
    {
        id: 58,
        spanish: "jugar",
        polish: "grać, bawić się",
        description: "Czasownik oznaczający zabawę lub grę",
        examples: [
            { spanish: "Los niños juegan.", polish: "Dzieci się bawią." },
            { spanish: "Juego al fútbol.", polish: "Gram w piłkę nożną." },
            { spanish: "¿Quieres jugar?", polish: "Chcesz zagrać?" }
        ]
    },
    {
        id: 59,
        spanish: "pequeño - pequeña",
        polish: "mały, mała",
        description: "Przymiotnik oznaczający niewielki rozmiar",
        examples: [
            { spanish: "Una casa pequeña.", polish: "Mały dom." },
            { spanish: "El niño es pequeño.", polish: "Chłopiec jest mały." },
            { spanish: "Problemas pequeños.", polish: "Małe problemy." }
        ]
    },
    {
        id: 60,
        spanish: "fin",
        polish: "koniec",
        description: "Rzeczownik oznaczający zakończenie",
        examples: [
            { spanish: "El fin de la historia.", polish: "Koniec historii." },
            { spanish: "Al fin llegamos.", polish: "Wreszcie dotarliśmy." },
            { spanish: "El fin de semana.", polish: "Weekend." }
        ]
    },
    {
        id: 61,
        spanish: "poner",
        polish: "położyć, umieścić",
        description: "Czasownik oznaczający umieszczanie",
        examples: [
            { spanish: "Poner la mesa.", polish: "Nakryć do stołu." },
            { spanish: "¿Dónde lo pongo?", polish: "Gdzie to położyć?" },
            { spanish: "Ponte el abrigo.", polish: "Załóż płaszcz." }
        ]
    },
    {
        id: 62,
        spanish: "casa",
        polish: "dom",
        description: "Rzeczownik oznaczający miejsce zamieszkania",
        examples: [
            { spanish: "Mi casa es grande.", polish: "Mój dom jest duży." },
            { spanish: "Voy a casa.", polish: "Idę do domu." },
            { spanish: "Estoy en casa.", polish: "Jestem w domu." }
        ]
    },
    {
        id: 63,
        spanish: "leer",
        polish: "czytać",
        description: "Czasownik oznaczający czytanie",
        examples: [
            { spanish: "Leo un libro.", polish: "Czytam książkę." },
            { spanish: "Me gusta leer.", polish: "Lubię czytać." },
            { spanish: "¿Sabes leer?", polish: "Umiesz czytać?" }
        ]
    },
    {
        id: 64,
        spanish: "mano",
        polish: "ręka",
        description: "Rzeczownik oznaczający część ciała",
        examples: [
            { spanish: "Dame la mano.", polish: "Daj mi rękę." },
            { spanish: "Tengo algo en la mano.", polish: "Mam coś w ręce." },
            { spanish: "A mano derecha.", polish: "Po prawej ręce." }
        ]
    },
    {
        id: 65,
        spanish: "puerto",
        polish: "port",
        description: "Rzeczownik oznaczający port morski",
        examples: [
            { spanish: "El puerto está cerca.", polish: "Port jest blisko." },
            { spanish: "Llegamos al puerto.", polish: "Dotarliśmy do portu." },
            { spanish: "Puerto de Barcelona.", polish: "Port w Barcelonie." }
        ]
    },
    {
        id: 66,
        spanish: "grande",
        polish: "duży, wielki",
        description: "Przymiotnik oznaczający znaczny rozmiar",
        examples: [
            { spanish: "Una casa grande.", polish: "Duży dom." },
            { spanish: "Es muy grande.", polish: "Jest bardzo duży." },
            { spanish: "Un gran hombre.", polish: "Wielki człowiek." }
        ]
    },
    {
        id: 67,
        spanish: "deletrear",
        polish: "literować",
        description: "Czasownik oznaczający wymawianie liter",
        examples: [
            { spanish: "¿Puedes deletrear tu nombre?", polish: "Czy możesz przeliterować swoje imię?" },
            { spanish: "Deletrea despacio.", polish: "Literuj powoli." },
            { spanish: "No sé deletrearlo.", polish: "Nie umiem tego przeliterować." }
        ]
    },
    {
        id: 68,
        spanish: "añadir",
        polish: "dodać",
        description: "Czasownik oznaczający dołączanie",
        examples: [
            { spanish: "Añade más sal.", polish: "Dodaj więcej soli." },
            { spanish: "Voy a añadir algo.", polish: "Dodam coś." },
            { spanish: "¿Puedo añadir?", polish: "Czy mogę dodać?" }
        ]
    },
    {
        id: 69,
        spanish: "incluso",
        polish: "nawet",
        description: "Przysłówek wzmacniający",
        examples: [
            { spanish: "Incluso yo puedo hacerlo.", polish: "Nawet ja mogę to zrobić." },
            { spanish: "Incluso en invierno.", polish: "Nawet zimą." },
            { spanish: "Incluso si llueve.", polish: "Nawet jeśli pada." }
        ]
    },
    {
        id: 70,
        spanish: "tierra",
        polish: "ziemia, grunt",
        description: "Rzeczownik oznaczający powierzchnię",
        examples: [
            { spanish: "La tierra es fértil.", polish: "Ziemia jest żyzna." },
            { spanish: "Cayó a tierra.", polish: "Upadł na ziemię." },
            { spanish: "Tierra y agua.", polish: "Ziemia i woda." }
        ]
    },
    {
        id: 71,
        spanish: "aquí",
        polish: "tu, tutaj",
        description: "Przysłówek miejsca oznaczający bliskość",
        examples: [
            { spanish: "Estoy aquí.", polish: "Jestem tutaj." },
            { spanish: "Ven aquí.", polish: "Chodź tu." },
            { spanish: "Aquí vivo.", polish: "Tu mieszkam." }
        ]
    },
    {
        id: 72,
        spanish: "debe",
        polish: "powinien, musi",
        description: "Trzecia osoba liczby pojedynczej czasownika 'deber'",
        examples: [
            { spanish: "Él debe estudiar.", polish: "On powinien się uczyć." },
            { spanish: "Debe ser verdad.", polish: "To musi być prawda." },
            { spanish: "No debe hacerlo.", polish: "Nie powinien tego robić." }
        ]
    },
    {
        id: 73,
        spanish: "grande",
        polish: "wielki",
        description: "Przymiotnik oznaczający znaczny rozmiar lub ważność",
        examples: [
            { spanish: "Una gran idea.", polish: "Wspaniały pomysł." },
            { spanish: "Es un gran día.", polish: "To wielki dzień." },
            { spanish: "Un hombre grande.", polish: "Wielki człowiek." }
        ]
    },
    {
        id: 74,
        spanish: "alto - alta",
        polish: "wysoki, wysoka",
        description: "Przymiotnik oznaczający znaczną wysokość",
        examples: [
            { spanish: "Una montaña alta.", polish: "Wysoka góra." },
            { spanish: "Él es muy alto.", polish: "On jest bardzo wysoki." },
            { spanish: "Voz alta.", polish: "Głośny głos." }
        ]
    },
    {
        id: 75,
        spanish: "tal",
        polish: "taki, taka",
        description: "Zaimek wskazujący",
        examples: [
            { spanish: "Tal vez.", polish: "Może." },
            { spanish: "No hay tal cosa.", polish: "Nie ma takiej rzeczy." },
            { spanish: "¿Tal cual?", polish: "Takie jakie?" }
        ]
    },
    {
        id: 76,
        spanish: "siga",
        polish: "niech kontynuuje, śledź",
        description: "Forma rozkazująca czasownika 'seguir'",
        examples: [
            { spanish: "Siga adelante.", polish: "Proszę iść dalej." },
            { spanish: "Siga las instrucciones.", polish: "Proszę podążać za instrukcjami." },
            { spanish: "Siga recto.", polish: "Proszę iść prosto." }
        ]
    },
    {
        id: 77,
        spanish: "acto",
        polish: "akt, czyn",
        description: "Rzeczownik oznaczający działanie",
        examples: [
            { spanish: "Un acto de bondad.", polish: "Akt dobroci." },
            { spanish: "En el acto.", polish: "Natychmiast." },
            { spanish: "El tercer acto.", polish: "Trzeci akt." }
        ]
    },
    {
        id: 78,
        spanish: "por qué",
        polish: "dlaczego",
        description: "Przysłówek pytający o przyczynę",
        examples: [
            { spanish: "¿Por qué no vienes?", polish: "Dlaczego nie przychodzisz?" },
            { spanish: "No sé por qué.", polish: "Nie wiem dlaczego." },
            { spanish: "¿Por qué lloras?", polish: "Dlaczego płaczesz?" }
        ]
    },
    {
        id: 79,
        spanish: "preguntar",
        polish: "pytać",
        description: "Czasownik oznaczający zadawanie pytań",
        examples: [
            { spanish: "Quiero preguntar algo.", polish: "Chcę coś zapytać." },
            { spanish: "No preguntes.", polish: "Nie pytaj." },
            { spanish: "Voy a preguntar.", polish: "Zapytam." }
        ]
    },
    {
        id: 80,
        spanish: "hombres",
        polish: "mężczyźni",
        description: "Rzeczownik w liczbie mnogiej oznaczający mężczyzn",
        examples: [
            { spanish: "Los hombres trabajan.", polish: "Mężczyźni pracują." },
            { spanish: "Dos hombres llegaron.", polish: "Dwóch mężczyzn przybyło." },
            { spanish: "Hombres y mujeres.", polish: "Mężczyźni i kobiety." }
        ]
    },
    {
        id: 81,
        spanish: "cambio",
        polish: "zmiana",
        description: "Rzeczownik oznaczający przemianę",
        examples: [
            { spanish: "Un gran cambio.", polish: "Wielka zmiana." },
            { spanish: "Cambio de planes.", polish: "Zmiana planów." },
            { spanish: "Necesito cambio.", polish: "Potrzebuję reszty (pieniędzy)." }
        ]
    },
    {
        id: 82,
        spanish: "se fue",
        polish: "poszedł, wyszedł",
        description: "Czas przeszły czasownika 'irse' (odejść)",
        examples: [
            { spanish: "Él se fue ayer.", polish: "On wyszedł wczoraj." },
            { spanish: "Se fue sin decir adiós.", polish: "Wyszedł nie mówiąc do widzenia." },
            { spanish: "Ya se fue.", polish: "Już wyszedł." }
        ]
    },
    {
        id: 83,
        spanish: "luz",
        polish: "światło",
        description: "Rzeczownik oznaczający oświetlenie",
        examples: [
            { spanish: "La luz del sol.", polish: "Światło słońca." },
            { spanish: "Enciende la luz.", polish: "Włącz światło." },
            { spanish: "No hay luz.", polish: "Nie ma światła." }
        ]
    },
    {
        id: 84,
        spanish: "tipo",
        polish: "typ, rodzaj",
        description: "Rzeczownik oznaczający kategorię",
        examples: [
            { spanish: "¿Qué tipo de música?", polish: "Jaki rodzaj muzyki?" },
            { spanish: "Es un tipo raro.", polish: "To dziwny facet." },
            { spanish: "Todo tipo de cosas.", polish: "Wszystkie rodzaje rzeczy." }
        ]
    },
    {
        id: 85,
        spanish: "fuera",
        polish: "poza, był(by)",
        description: "Przysłówek miejsca lub forma trybu łączącego 'ser'",
        examples: [
            { spanish: "Está fuera.", polish: "Jest na zewnątrz." },
            { spanish: "Si fuera rico...", polish: "Gdybym był bogaty..." },
            { spanish: "Fuera de aquí.", polish: "Stąd precz." }
        ]
    },
    {
        id: 86,
        spanish: "necesitará",
        polish: "będzie potrzebować",
        description: "Forma przyszła czasownika 'necesitar'",
        examples: [
            { spanish: "Necesitará ayuda.", polish: "Będzie potrzebować pomocy." },
            { spanish: "¿Qué necesitará?", polish: "Czego będzie potrzebować?" },
            { spanish: "No necesitará nada.", polish: "Niczego nie będzie potrzebować." }
        ]
    },
    {
        id: 87,
        spanish: "casa",
        polish: "dom, mieszkanie",
        description: "Rzeczownik oznaczający miejsce zamieszkania",
        examples: [
            { spanish: "Vuelvo a casa.", polish: "Wracam do domu." },
            { spanish: "En casa de Pedro.", polish: "W domu Piotra." },
            { spanish: "Casa nueva.", polish: "Nowy dom." }
        ]
    },
    {
        id: 88,
        spanish: "imagen",
        polish: "obraz, wizerunek",
        description: "Rzeczownik oznaczający przedstawienie",
        examples: [
            { spanish: "Una imagen bonita.", polish: "Piękny obraz." },
            { spanish: "La imagen es clara.", polish: "Obraz jest wyraźny." },
            { spanish: "Su imagen pública.", polish: "Jego publiczny wizerunek." }
        ]
    },
    {
        id: 89,
        spanish: "tratar",
        polish: "próbować, traktować",
        description: "Czasownik oznaczający próbę lub sposób traktowania",
        examples: [
            { spanish: "Trato de ayudar.", polish: "Próbuję pomóc." },
            { spanish: "¿De qué se trata?", polish: "O co chodzi?" },
            { spanish: "Me trata bien.", polish: "Traktuje mnie dobrze." }
        ]
    },
    {
        id: 90,
        spanish: "nosotros - nosotras",
        polish: "my",
        description: "Zaimek osobowy pierwszej osoby liczby mnogiej",
        examples: [
            { spanish: "Nosotros vamos.", polish: "My idziemy." },
            { spanish: "Nosotros estudiamos.", polish: "My się uczymy." },
            { spanish: "Es para nosotros.", polish: "To dla nas." }
        ]
    },
    {
        id: 91,
        spanish: "de nuevo",
        polish: "ponownie, znowu",
        description: "Wyrażenie przysłówkowe oznaczające powtórzenie",
        examples: [
            { spanish: "Hazlo de nuevo.", polish: "Zrób to ponownie." },
            { spanish: "Vuelve de nuevo.", polish: "Wróć znowu." },
            { spanish: "De nuevo lo mismo.", polish: "Znowu to samo." }
        ]
    },
    {
        id: 92,
        spanish: "animal",
        polish: "zwierzę",
        description: "Rzeczownik oznaczający istotę żywą",
        examples: [
            { spanish: "Un animal salvaje.", polish: "Dzikie zwierzę." },
            { spanish: "Los animales del zoo.", polish: "Zwierzęta w zoo." },
            { spanish: "Mi animal favorito.", polish: "Moje ulubione zwierzę." }
        ]
    },
    {
        id: 93,
        spanish: "punto",
        polish: "punkt, kropka",
        description: "Rzeczownik oznaczający miejsce lub znak interpunkcyjny",
        examples: [
            { spanish: "Un punto importante.", polish: "Ważny punkt." },
            { spanish: "Punto final.", polish: "Kropka (koniec)." },
            { spanish: "El punto de encuentro.", polish: "Punkt spotkania." }
        ]
    },
    {
        id: 94,
        spanish: "madre",
        polish: "matka",
        description: "Rzeczownik oznaczający rodzicielkę",
        examples: [
            { spanish: "Mi madre es médica.", polish: "Moja matka jest lekarką." },
            { spanish: "La madre de Juan.", polish: "Matka Juana." },
            { spanish: "¡Madre mía!", polish: "Mój Boże!" }
        ]
    },
    {
        id: 95,
        spanish: "mundo",
        polish: "świat",
        description: "Rzeczownik oznaczający planetę lub społeczeństwo",
        examples: [
            { spanish: "El mundo es grande.", polish: "Świat jest wielki." },
            { spanish: "Todo el mundo.", polish: "Wszyscy." },
            { spanish: "Viajo por el mundo.", polish: "Podróżuję po świecie." }
        ]
    },
    {
        id: 96,
        spanish: "cerca",
        polish: "blisko",
        description: "Przysłówek miejsca oznaczający niewielką odległość",
        examples: [
            { spanish: "Vivo cerca.", polish: "Mieszkam blisko." },
            { spanish: "Está muy cerca.", polish: "Jest bardzo blisko." },
            { spanish: "Cerca de aquí.", polish: "Blisko stąd." }
        ]
    },
    {
        id: 97,
        spanish: "construir",
        polish: "budować",
        description: "Czasownik oznaczający wznoszenie",
        examples: [
            { spanish: "Voy a construir una casa.", polish: "Zbuduję dom." },
            { spanish: "Construir un puente.", polish: "Zbudować most." },
            { spanish: "Es difícil construir.", polish: "Trudno jest budować." }
        ]
    },
    {
        id: 98,
        spanish: "auto",
        polish: "samo, auto",
        description: "Przedrostek lub rzeczownik oznaczający samochód",
        examples: [
            { spanish: "Mi auto es viejo.", polish: "Moje auto jest stare." },
            { spanish: "Auto-control.", polish: "Samokontrola." },
            { spanish: "Voy en auto.", polish: "Jadę autem." }
        ]
    },
    {
        id: 99,
        spanish: "tierra",
        polish: "Ziemia (planeta)",
        description: "Rzeczownik oznaczający planetę",
        examples: [
            { spanish: "La Tierra es redonda.", polish: "Ziemia jest okrągła." },
            { spanish: "Vivimos en la Tierra.", polish: "Żyjemy na Ziemi." },
            { spanish: "Planeta Tierra.", polish: "Planeta Ziemia." }
        ]
    },
    {
        id: 100,
        spanish: "padre",
        polish: "ojciec",
        description: "Rzeczownik oznaczający rodzica",
        examples: [
            { spanish: "Mi padre trabaja.", polish: "Mój ojciec pracuje." },
            { spanish: "El padre de Ana.", polish: "Ojciec Anny." },
            { spanish: "Mis padres.", polish: "Moi rodzice." }
        ]
    },
    {
        id: 101,
        spanish: "cualquier",
        polish: "jakikolwiek, dowolny",
        description: "Zaimek nieokreślony oznaczający dowolność",
        examples: [
            { spanish: "Cualquier día.", polish: "Dowolny dzień." },
            { spanish: "En cualquier momento.", polish: "W każdej chwili." },
            { spanish: "Cualquier persona puede.", polish: "Ktokolwiek może." }
        ]
    },
    {
        id: 102,
        spanish: "nuevo - nueva",
        polish: "nowy, nowa",
        description: "Przymiotnik oznaczający świeżość",
        examples: [
            { spanish: "Un coche nuevo.", polish: "Nowy samochód." },
            { spanish: "Una casa nueva.", polish: "Nowy dom." },
            { spanish: "Año nuevo.", polish: "Nowy rok." }
        ]
    },
    {
        id: 103,
        spanish: "trabajo",
        polish: "praca",
        description: "Rzeczownik oznaczający zatrudnienie lub wysiłek",
        examples: [
            { spanish: "Mi trabajo es difícil.", polish: "Moja praca jest trudna." },
            { spanish: "Voy al trabajo.", polish: "Idę do pracy." },
            { spanish: "Buen trabajo.", polish: "Dobra robota." }
        ]
    },
    {
        id: 104,
        spanish: "parte",
        polish: "część",
        description: "Rzeczownik oznaczający fragment",
        examples: [
            { spanish: "Una parte del libro.", polish: "Część książki." },
            { spanish: "En otra parte.", polish: "W innym miejscu." },
            { spanish: "La mayor parte.", polish: "Większa część." }
        ]
    },
    {
        id: 105,
        spanish: "tomar",
        polish: "brać, wziąć",
        description: "Czasownik oznaczający zabieranie",
        examples: [
            { spanish: "Tomo café.", polish: "Piję kawę." },
            { spanish: "Toma tu tiempo.", polish: "Weź swój czas." },
            { spanish: "Voy a tomar el bus.", polish: "Wezmę autobus." }
        ]
    },
    {
        id: 106,
        spanish: "conseguir",
        polish: "zdobyć, uzyskać",
        description: "Czasownik oznaczający uzyskiwanie",
        examples: [
            { spanish: "Conseguí el trabajo.", polish: "Zdobyłem pracę." },
            { spanish: "¿Dónde lo conseguiste?", polish: "Gdzie to zdobyłeś?" },
            { spanish: "Es difícil conseguir.", polish: "Trudno zdobyć." }
        ]
    },
    {
        id: 107,
        spanish: "lugar",
        polish: "miejsce",
        description: "Rzeczownik oznaczający lokalizację",
        examples: [
            { spanish: "Este es mi lugar.", polish: "To jest moje miejsce." },
            { spanish: "Un lugar bonito.", polish: "Piękne miejsce." },
            { spanish: "En primer lugar.", polish: "Po pierwsze." }
        ]
    },
    {
        id: 108,
        spanish: "hecho",
        polish: "zrobiony, fakt",
        description: "Imiesłów czasu przeszłego od 'hacer' lub rzeczownik",
        examples: [
            { spanish: "Está hecho.", polish: "Jest zrobione." },
            { spanish: "Un hecho importante.", polish: "Ważny fakt." },
            { spanish: "De hecho.", polish: "Faktycznie." }
        ]
    },
    {
        id: 109,
        spanish: "vivir",
        polish: "żyć, mieszkać",
        description: "Czasownik oznaczający życie lub miejsce zamieszkania",
        examples: [
            { spanish: "Vivo en Madrid.", polish: "Mieszkam w Madrycie." },
            { spanish: "Quiero vivir aquí.", polish: "Chcę tu mieszkać." },
            { spanish: "Vivir la vida.", polish: "Żyć życiem." }
        ]
    },
    {
        id: 110,
        spanish: "donde",
        polish: "gdzie",
        description: "Przysłówek miejsca",
        examples: [
            { spanish: "¿Dónde vives?", polish: "Gdzie mieszkasz?" },
            { spanish: "El lugar donde trabajo.", polish: "Miejsce, gdzie pracuję." },
            { spanish: "No sé dónde está.", polish: "Nie wiem, gdzie jest." }
        ]
    },
    {
        id: 111,
        spanish: "después",
        polish: "potem, później",
        description: "Przysłówek czasu oznaczający następstwo",
        examples: [
            { spanish: "Después de comer.", polish: "Po jedzeniu." },
            { spanish: "Lo haré después.", polish: "Zrobię to później." },
            { spanish: "Hasta después.", polish: "Do zobaczenia później." }
        ]
    },
    {
        id: 112,
        spanish: "espalda",
        polish: "plecy, tył",
        description: "Rzeczownik oznaczający tylną część ciała",
        examples: [
            { spanish: "Me duele la espalda.", polish: "Boli mnie plecy." },
            { spanish: "A mi espalda.", polish: "Za moimi plecami." },
            { spanish: "Dale la espalda.", polish: "Odwróć się do niego plecami." }
        ]
    },
    {
        id: 113,
        spanish: "poco - poca",
        polish: "mało, niewiele",
        description: "Przysłówek lub przymiotnik oznaczający małą ilość",
        examples: [
            { spanish: "Tengo poco tiempo.", polish: "Mam mało czasu." },
            { spanish: "Un poco de agua.", polish: "Trochę wody." },
            { spanish: "Poca gente.", polish: "Mało ludzi." }
        ]
    },
    {
        id: 114,
        spanish: "sólo - solo",
        polish: "tylko, jedynie",
        description: "Przysłówek ograniczający",
        examples: [
            { spanish: "Sólo quiero ayudar.", polish: "Tylko chcę pomóc." },
            { spanish: "Estoy solo.", polish: "Jestem sam." },
            { spanish: "Sólo tú.", polish: "Tylko ty." }
        ]
    },
    {
        id: 115,
        spanish: "ronda",
        polish: "runda, obchód",
        description: "Rzeczownik oznaczający okrągły kształt lub cykl",
        examples: [
            { spanish: "La primera ronda.", polish: "Pierwsza runda." },
            { spanish: "Hacer la ronda.", polish: "Robić obchód." },
            { spanish: "Una ronda de bebidas.", polish: "Kolejka drinków." }
        ]
    },
    {
        id: 116,
        spanish: "hombre",
        polish: "mężczyzna, człowiek",
        description: "Rzeczownik oznaczający osobę płci męskiej",
        examples: [
            { spanish: "Un hombre alto.", polish: "Wysoki mężczyzna." },
            { spanish: "El hombre es fuerte.", polish: "Mężczyzna jest silny." },
            { spanish: "Hombre de negocios.", polish: "Biznesmen." }
        ]
    },
    {
        id: 117,
        spanish: "años",
        polish: "lata",
        description: "Rzeczownik w liczbie mnogiej oznaczający lata",
        examples: [
            { spanish: "Tengo 20 años.", polish: "Mam 20 lat." },
            { spanish: "Hace años.", polish: "Lata temu." },
            { spanish: "Todos los años.", polish: "Każdego roku." }
        ]
    },
    {
        id: 118,
        spanish: "vino",
        polish: "przyszedł, przyszła",
        description: "Czas przeszły czasownika 'venir' (przychodzić)",
        examples: [
            { spanish: "Él vino ayer.", polish: "On przyszedł wczoraj." },
            { spanish: "Vino a visitarme.", polish: "Przyszedł mnie odwiedzić." },
            { spanish: "¿Quién vino?", polish: "Kto przyszedł?" }
        ]
    },
    {
        id: 119,
        spanish: "show",
        polish: "pokaz, show",
        description: "Rzeczownik zapożyczony z angielskiego oznaczający występ",
        examples: [
            { spanish: "El show fue increíble.", polish: "Pokaz był niesamowity." },
            { spanish: "Un gran show.", polish: "Wielki show." },
            { spanish: "Show de televisión.", polish: "Program telewizyjny." }
        ]
    },
    {
        id: 120,
        spanish: "cada",
        polish: "każdy",
        description: "Zaimek oznaczający wszystkie jednostki",
        examples: [
            { spanish: "Cada mañana.", polish: "Każdego ranka." },
            { spanish: "Cada vez más.", polish: "Coraz więcej." },
            { spanish: "Cada quien.", polish: "Każdy z nich." }
        ]
    },
    {
        id: 121,
        spanish: "buena - bueno",
        polish: "dobra, dobry",
        description: "Przymiotnik oznaczający jakość",
        examples: [
            { spanish: "Una buena idea.", polish: "Dobry pomysł." },
            { spanish: "Es bueno.", polish: "Jest dobry." },
            { spanish: "Buenos días.", polish: "Dzień dobry." }
        ]
    },
    {
        id: 122,
        spanish: "me",
        polish: "mnie, mi",
        description: "Zaimek osobowy dopełnienia pierwszej osoby",
        examples: [
            { spanish: "Me gusta.", polish: "Podoba mi się." },
            { spanish: "Dame.", polish: "Daj mi." },
            { spanish: "Me voy.", polish: "Idę (odchodzę)." }
        ]
    },
    {
        id: 123,
        spanish: "dar",
        polish: "dawać",
        description: "Czasownik oznaczający przekazywanie",
        examples: [
            { spanish: "Dame el libro.", polish: "Daj mi książkę." },
            { spanish: "Voy a dar un paseo.", polish: "Idę na spacer." },
            { spanish: "Dar las gracias.", polish: "Podziękować." }
        ]
    },
    {
        id: 124,
        spanish: "nuestro - nuestra",
        polish: "nasz, nasza",
        description: "Zaimek dzierżawczy pierwszej osoby liczby mnogiej",
        examples: [
            { spanish: "Nuestra casa.", polish: "Nasz dom." },
            { spanish: "Nuestro país.", polish: "Nasz kraj." },
            { spanish: "Es nuestro.", polish: "To nasze." }
        ]
    },
    {
        id: 125,
        spanish: "bajo",
        polish: "pod",
        description: "Przyimek miejsca oznaczający pozycję poniżej",
        examples: [
            { spanish: "Bajo la mesa.", polish: "Pod stołem." },
            { spanish: "Bajo el agua.", polish: "Pod wodą." },
            { spanish: "Bajo presión.", polish: "Pod presją." }
        ]
    },
    {
        id: 126,
        spanish: "nombre",
        polish: "imię, nazwa",
        description: "Rzeczownik oznaczający określenie",
        examples: [
            { spanish: "Mi nombre es Juan.", polish: "Mam na imię Juan." },
            { spanish: "¿Cuál es tu nombre?", polish: "Jak masz na imię?" },
            { spanish: "El nombre de la calle.", polish: "Nazwa ulicy." }
        ]
    },
    {
        id: 127,
        spanish: "muy",
        polish: "bardzo",
        description: "Przysłówek wzmacniający",
        examples: [
            { spanish: "Muy bien.", polish: "Bardzo dobrze." },
            { spanish: "Es muy alto.", polish: "Jest bardzo wysoki." },
            { spanish: "Muy bonito.", polish: "Bardzo ładne." }
        ]
    },
    {
        id: 128,
        spanish: "a través de",
        polish: "przez",
        description: "Wyrażenie przyimkowe oznaczające przejście",
        examples: [
            { spanish: "A través de la ventana.", polish: "Przez okno." },
            { spanish: "A través del tiempo.", polish: "Poprzez czas." },
            { spanish: "Pasó a través del túnel.", polish: "Przeszedł przez tunel." }
        ]
    },
    {
        id: 129,
        spanish: "sólo - solo",
        polish: "właśnie, po prostu",
        description: "Przysłówek oznaczający dokładność",
        examples: [
            { spanish: "Sólo eso.", polish: "Tylko to." },
            { spanish: "Sólo un momento.", polish: "Tylko chwilę." },
            { spanish: "Es solo una pregunta.", polish: "To tylko pytanie." }
        ]
    },
    {
        id: 130,
        spanish: "forma",
        polish: "forma, kształt",
        description: "Rzeczownik oznaczający ukształtowanie",
        examples: [
            { spanish: "La forma del círculo.", polish: "Kształt koła." },
            { spanish: "De esta forma.", polish: "W ten sposób." },
            { spanish: "Forma física.", polish: "Kondycja fizyczna." }
        ]
    },
    {
        id: 131,
        spanish: "frase",
        polish: "zdanie, fraza",
        description: "Rzeczownik oznaczający wyrażenie językowe",
        examples: [
            { spanish: "Una frase bonita.", polish: "Piękne zdanie." },
            { spanish: "Frase completa.", polish: "Pełne zdanie." },
            { spanish: "Escribe una frase.", polish: "Napisz zdanie." }
        ]
    },
    {
        id: 132,
        spanish: "gran - grande",
        polish: "wielki, wspaniały",
        description: "Przymiotnik oznaczający wielkość lub wartość",
        examples: [
            { spanish: "Un gran hombre.", polish: "Wielki człowiek." },
            { spanish: "Una gran ciudad.", polish: "Wielkie miasto." },
            { spanish: "Gran trabajo.", polish: "Świetna robota." }
        ]
    },
    {
        id: 133,
        spanish: "pensar",
        polish: "myśleć",
        description: "Czasownik oznaczający procesy myślowe",
        examples: [
            { spanish: "Pienso que sí.", polish: "Myślę, że tak." },
            { spanish: "¿Qué piensas?", polish: "Co myślisz?" },
            { spanish: "Pienso en ti.", polish: "Myślę o tobie." }
        ]
    },
    {
        id: 134,
        spanish: "decir",
        polish: "powiedzieć, mówić",
        description: "Czasownik mówienia",
        examples: [
            { spanish: "¿Qué dices?", polish: "Co mówisz?" },
            { spanish: "Dicen que...", polish: "Mówią, że..." },
            { spanish: "Quiero decirte algo.", polish: "Chcę ci coś powiedzieć." }
        ]
    },
    {
        id: 135,
        spanish: "ayudar",
        polish: "pomagać",
        description: "Czasownik oznaczający wsparcie",
        examples: [
            { spanish: "Quiero ayudar.", polish: "Chcę pomóc." },
            { spanish: "¿Puedes ayudarme?", polish: "Czy możesz mi pomóc?" },
            { spanish: "Ayuda a tu hermano.", polish: "Pomóż swojemu bratu." }
        ]
    },
    {
        id: 136,
        spanish: "bajo - baja",
        polish: "niski, niska",
        description: "Przymiotnik oznaczający małą wysokość",
        examples: [
            { spanish: "Una mesa baja.", polish: "Niski stół." },
            { spanish: "Es muy bajo.", polish: "Jest bardzo niski." },
            { spanish: "Voz baja.", polish: "Cichy głos." }
        ]
    },
    {
        id: 137,
        spanish: "línea",
        polish: "linia",
        description: "Rzeczownik oznaczający kreską lub szereg",
        examples: [
            { spanish: "Una línea recta.", polish: "Prosta linia." },
            { spanish: "La línea del tren.", polish: "Linia kolejowa." },
            { spanish: "En línea.", polish: "Online." }
        ]
    },
    {
        id: 138,
        spanish: "ser distinto",
        polish: "różnić się",
        description: "Wyrażenie czasownikowe oznaczające odmienność",
        examples: [
            { spanish: "Eso es distinto.", polish: "To jest inne." },
            { spanish: "Somos distintos.", polish: "Jesteśmy różni." },
            { spanish: "Es muy distinto.", polish: "To bardzo się różni." }
        ]
    },
    {
        id: 139,
        spanish: "a su vez",
        polish: "z kolei",
        description: "Wyrażenie przysłówkowe oznaczające kolejność",
        examples: [
            { spanish: "Y tú, a su vez.", polish: "A ty z kolei." },
            { spanish: "Él, a su vez, dijo.", polish: "On z kolei powiedział." },
            { spanish: "A su vez, es importante.", polish: "Z kolei to jest ważne." }
        ]
    },
    {
        id: 140,
        spanish: "causa",
        polish: "przyczyna, powód",
        description: "Rzeczownik oznaczający źródło czegoś",
        examples: [
            { spanish: "La causa del problema.", polish: "Przyczyna problemu." },
            { spanish: "¿Cuál es la causa?", polish: "Jaka jest przyczyna?" },
            { spanish: "Por una buena causa.", polish: "W dobrej sprawie." }
        ]
    },
    {
        id: 141,
        spanish: "mucho - mucha",
        polish: "dużo, wiele",
        description: "Przysłówek lub przymiotnik oznaczający dużą ilość",
        examples: [
            { spanish: "Mucho tiempo.", polish: "Dużo czasu." },
            { spanish: "Mucha gente.", polish: "Wielu ludzi." },
            { spanish: "Me gusta mucho.", polish: "Bardzo mi się podoba." }
        ]
    },
    {
        id: 142,
        spanish: "significará",
        polish: "będzie znaczyć",
        description: "Forma przyszła czasownika 'significar'",
        examples: [
            { spanish: "Eso significará mucho.", polish: "To będzie wiele znaczyć." },
            { spanish: "¿Qué significará?", polish: "Co to będzie znaczyć?" },
            { spanish: "No significará nada.", polish: "Nic to nie będzie znaczyć." }
        ]
    },
    {
        id: 143,
        spanish: "antes",
        polish: "wcześniej, przedtem",
        description: "Przysłówek czasu oznaczający uprzedniość",
        examples: [
            { spanish: "Antes de comer.", polish: "Przed jedzeniem." },
            { spanish: "Lo hice antes.", polish: "Zrobiłem to wcześniej." },
            { spanish: "Antes que nada.", polish: "Przede wszystkim." }
        ]
    },
    {
        id: 144,
        spanish: "movimiento",
        polish: "ruch, ruszanie się",
        description: "Rzeczownik oznaczający przemieszczanie",
        examples: [
            { spanish: "Un movimiento rápido.", polish: "Szybki ruch." },
            { spanish: "El movimiento del coche.", polish: "Ruch samochodu." },
            { spanish: "Movimiento social.", polish: "Ruch społeczny." }
        ]
    },
    {
        id: 145,
        spanish: "derecho - derecha",
        polish: "prawy, prawa, prawo",
        description: "Przymiotnik lub rzeczownik oznaczający stronę lub uprawnienie",
        examples: [
            { spanish: "A la derecha.", polish: "Na prawo." },
            { spanish: "Tengo derecho.", polish: "Mam prawo." },
            { spanish: "El lado derecho.", polish: "Prawa strona." }
        ]
    },
    {
        id: 146,
        spanish: "niño",
        polish: "chłopiec, dziecko",
        description: "Rzeczownik oznaczający młodą osobę",
        examples: [
            { spanish: "Un niño pequeño.", polish: "Mały chłopiec." },
            { spanish: "Los niños juegan.", polish: "Dzieci się bawią." },
            { spanish: "Cuando era niño.", polish: "Kiedy byłem dzieckiem." }
        ]
    },
    {
        id: 147,
        spanish: "viejo - vieja",
        polish: "stary, stara",
        description: "Przymiotnik oznaczający wiek",
        examples: [
            { spanish: "Un hombre viejo.", polish: "Stary człowiek." },
            { spanish: "Una casa vieja.", polish: "Stary dom." },
            { spanish: "Mi viejo amigo.", polish: "Mój stary przyjaciel." }
        ]
    },
    {
        id: 148,
        spanish: "demasiado",
        polish: "za dużo, zbyt",
        description: "Przysłówek oznaczający nadmiar",
        examples: [
            { spanish: "Es demasiado caro.", polish: "To jest za drogie." },
            { spanish: "Demasiado tarde.", polish: "Za późno." },
            { spanish: "Hablas demasiado.", polish: "Mówisz za dużo." }
        ]
    },
    {
        id: 149,
        spanish: "misma - mismo",
        polish: "ta sama, ten sam",
        description: "Przymiotnik oznaczający identyczność",
        examples: [
            { spanish: "La misma cosa.", polish: "Ta sama rzecz." },
            { spanish: "El mismo día.", polish: "Tego samego dnia." },
            { spanish: "Es lo mismo.", polish: "To to samo." }
        ]
    },
    {
        id: 150,
        spanish: "ella",
        polish: "ona",
        description: "Zaimek osobowy trzeciej osoby rodzaju żeńskiego",
        examples: [
            { spanish: "Ella es mi amiga.", polish: "Ona jest moją przyjaciółką." },
            { spanish: "Ella trabaja aquí.", polish: "Ona pracuje tutaj." },
            { spanish: "Ella habla español.", polish: "Ona mówi po hiszpańsku." }
        ]
    },
    {
        id: 151,
        spanish: "todo - toda",
        polish: "wszystko, cały",
        description: "Zaimek lub przymiotnik oznaczający całość",
        examples: [
            { spanish: "Todo el día.", polish: "Cały dzień." },
            { spanish: "Lo sé todo.", polish: "Wiem wszystko." },
            { spanish: "Toda la gente.", polish: "Wszyscy ludzie." }
        ]
    },
    {
        id: 152,
        spanish: "hay",
        polish: "jest, są",
        description: "Forma bezosobowa czasownika 'haber' (być, istnieć)",
        examples: [
            { spanish: "Hay un problema.", polish: "Jest problem." },
            { spanish: "No hay nadie.", polish: "Nie ma nikogo." },
            { spanish: "¿Hay café?", polish: "Czy jest kawa?" }
        ]
    },
    {
        id: 153,
        spanish: "cuando",
        polish: "kiedy",
        description: "Przysłówek pytający lub spójnik czasu",
        examples: [
            { spanish: "¿Cuándo llegas?", polish: "Kiedy przyjedziesz?" },
            { spanish: "Cuando era joven.", polish: "Kiedy byłem młody." },
            { spanish: "No sé cuándo.", polish: "Nie wiem kiedy." }
        ]
    },
    {
        id: 154,
        spanish: "hasta",
        polish: "aż do, do",
        description: "Przyimek oznaczający limit czasowy lub przestrzenny",
        examples: [
            { spanish: "Hasta mañana.", polish: "Do jutra." },
            { spanish: "Hasta aquí.", polish: "Do tego miejsca." },
            { spanish: "Hasta las tres.", polish: "Do trzeciej." }
        ]
    },
    {
        id: 155,
        spanish: "uso",
        polish: "użycie, zastosowanie",
        description: "Rzeczownik oznaczający wykorzystanie",
        examples: [
            { spanish: "El uso de la tecnología.", polish: "Użycie technologii." },
            { spanish: "Instrucciones de uso.", polish: "Instrukcja użycia." },
            { spanish: "Uso diario.", polish: "Codzienne użycie." }
        ]
    },
    {
        id: 156,
        spanish: "su - sus",
        polish: "twój, twoja, twoje",
        description: "Zaimek dzierżawczy (forma grzecznościowa)",
        examples: [
            { spanish: "Su nombre, por favor.", polish: "Pana/Pani imię, proszę." },
            { spanish: "¿Dónde está su coche?", polish: "Gdzie jest Pana samochód?" },
            { spanish: "Sus documentos.", polish: "Pana dokumenty." }
        ]
    },
    {
        id: 157,
        spanish: "camino",
        polish: "droga, ścieżka",
        description: "Rzeczownik oznaczający trasę",
        examples: [
            { spanish: "El camino es largo.", polish: "Droga jest długa." },
            { spanish: "Voy por este camino.", polish: "Idę tą drogą." },
            { spanish: "Camino a casa.", polish: "W drodze do domu." }
        ]
    },
    {
        id: 158,
        spanish: "acerca",
        polish: "o, na temat",
        description: "Przyimek oznaczający temat",
        examples: [
            { spanish: "Acerca de ti.", polish: "O tobie." },
            { spanish: "Hablamos acerca del trabajo.", polish: "Rozmawiamy o pracy." },
            { spanish: "¿Qué sabes acerca de eso?", polish: "Co wiesz na ten temat?" }
        ]
    },
    {
        id: 159,
        spanish: "muchos - muchas",
        polish: "wielu, wiele",
        description: "Przymiotnik w liczbie mnogiej oznaczający dużą liczbę",
        examples: [
            { spanish: "Muchas personas.", polish: "Wiele osób." },
            { spanish: "Tengo muchos amigos.", polish: "Mam wielu przyjaciół." },
            { spanish: "Muchas gracias.", polish: "Dziękuję bardzo." }
        ]
    },
    {
        id: 160,
        spanish: "entonces",
        polish: "wtedy, więc",
        description: "Przysłówek czasu lub spójnik",
        examples: [
            { spanish: "Entonces era joven.", polish: "Wtedy byłem młody." },
            { spanish: "Entonces, ¿qué hacemos?", polish: "Więc co robimy?" },
            { spanish: "Hasta entonces.", polish: "Do tego czasu." }
        ]
    },
    {
        id: 161,
        spanish: "ellos - ellas",
        polish: "oni, one (dopełnienie)",
        description: "Zaimek osobowy dopełnienia trzeciej osoby liczby mnogiej",
        examples: [
            { spanish: "Los veo a ellos.", polish: "Widzę ich." },
            { spanish: "Es para ellos.", polish: "To dla nich." },
            { spanish: "Hablo de ellos.", polish: "Mówię o nich." }
        ]
    },
    {
        id: 162,
        spanish: "escribir",
        polish: "pisać",
        description: "Czasownik oznaczający tworzenie tekstu",
        examples: [
            { spanish: "Me gusta escribir.", polish: "Lubię pisać." },
            { spanish: "Voy a escribir una carta.", polish: "Napiszę list." },
            { spanish: "¿Sabes escribir?", polish: "Umiesz pisać?" }
        ]
    },
    {
        id: 163,
        spanish: "haría",
        polish: "zrobiłby, zrobiłbym",
        description: "Tryb warunkowy czasownika 'hacer'",
        examples: [
            { spanish: "Yo haría lo mismo.", polish: "Zrobiłbym to samo." },
            { spanish: "¿Qué harías?", polish: "Co byś zrobił?" },
            { spanish: "Él haría cualquier cosa.", polish: "On zrobiłby cokolwiek." }
        ]
    },
    {
        id: 164,
        spanish: "como",
        polish: "jak, podobnie",
        description: "Przysłówek porównawczy",
        examples: [
            { spanish: "Es como tú.", polish: "Jest jak ty." },
            { spanish: "Como siempre.", polish: "Jak zawsze." },
            { spanish: "Trabaja como profesor.", polish: "Pracuje jako nauczyciel." }
        ]
    },
    {
        id: 165,
        spanish: "así",
        polish: "tak, więc",
        description: "Przysłówek sposobu lub następstwa",
        examples: [
            { spanish: "Así es.", polish: "Tak jest." },
            { spanish: "Así que vine.", polish: "Więc przyszedłem." },
            { spanish: "No es así.", polish: "Nie jest tak." }
        ]
    },
    {
        id: 166,
        spanish: "éstos - éstas",
        polish: "ci, te",
        description: "Zaimek wskazujący w liczbie mnogiej",
        examples: [
            { spanish: "Éstos son mis libros.", polish: "To są moje książki." },
            { spanish: "Éstas son buenas.", polish: "Te są dobre." },
            { spanish: "¿Éstos o aquéllos?", polish: "Te czy tamte?" }
        ]
    },
    {
        id: 167,
        spanish: "su - sus",
        polish: "jej",
        description: "Zaimek dzierżawczy trzeciej osoby rodzaju żeńskiego",
        examples: [
            { spanish: "Su hermana.", polish: "Jej siostra." },
            { spanish: "Sus cosas.", polish: "Jej rzeczy." },
            { spanish: "Es su decisión.", polish: "To jej decyzja." }
        ]
    },
    {
        id: 168,
        spanish: "largo - larga",
        polish: "długi, długa",
        description: "Przymiotnik oznaczający znaczną długość",
        examples: [
            { spanish: "Un camino largo.", polish: "Długa droga." },
            { spanish: "Pelo largo.", polish: "Długie włosy." },
            { spanish: "Es muy largo.", polish: "Jest bardzo długi." }
        ]
    },
    {
        id: 169,
        spanish: "hacer",
        polish: "tworzyć, sprawiać",
        description: "Czasownik oznaczający tworzenie lub działanie",
        examples: [
            { spanish: "Hacer amigos.", polish: "Zaprzyjaźniać się." },
            { spanish: "Hacer daño.", polish: "Wyrządzić szkodę." },
            { spanish: "Hacer ruido.", polish: "Robić hałas." }
        ]
    },
    {
        id: 170,
        spanish: "cosa",
        polish: "rzecz",
        description: "Rzeczownik oznaczający przedmiot lub zagadnienie",
        examples: [
            { spanish: "Una cosa importante.", polish: "Ważna rzecz." },
            { spanish: "Muchas cosas.", polish: "Wiele rzeczy." },
            { spanish: "¿Qué cosa?", polish: "Co takiego?" }
        ]
    },
    {
        id: 171,
        spanish: "ver",
        polish: "widzieć",
        description: "Czasownik oznaczający percepcję wzrokową",
        examples: [
            { spanish: "Veo la casa.", polish: "Widzę dom." },
            { spanish: "¿Puedes ver?", polish: "Czy widzisz?" },
            { spanish: "Vamos a ver.", polish: "Zobaczymy." }
        ]
    },
    {
        id: 172,
        spanish: "él",
        polish: "jego, go",
        description: "Zaimek osobowy dopełnienia trzeciej osoby rodzaju męskiego",
        examples: [
            { spanish: "Lo veo a él.", polish: "Widzę go." },
            { spanish: "Es de él.", polish: "To jest jego." },
            { spanish: "Hablo de él.", polish: "Mówię o nim." }
        ]
    },
    {
        id: 173,
        spanish: "dos",
        polish: "dwa",
        description: "Liczebnik główny oznaczający liczbę 2",
        examples: [
            { spanish: "Tengo dos hermanos.", polish: "Mam dwóch braci." },
            { spanish: "Son las dos.", polish: "Jest druga (godzina)." },
            { spanish: "Dos días.", polish: "Dwa dni." }
        ]
    },
    {
        id: 174,
        spanish: "tiene",
        polish: "ma",
        description: "Trzecia osoba liczby pojedynczej czasownika 'tener'",
        examples: [
            { spanish: "Él tiene un coche.", polish: "On ma samochód." },
            { spanish: "Tiene razón.", polish: "Ma rację." },
            { spanish: "¿Qué tiene?", polish: "Co ma?" }
        ]
    },
    {
        id: 175,
        spanish: "buscar",
        polish: "szukać",
        description: "Czasownik oznaczający poszukiwanie",
        examples: [
            { spanish: "Busco mis llaves.", polish: "Szukam moich kluczy." },
            { spanish: "Voy a buscar ayuda.", polish: "Poszukam pomocy." },
            { spanish: "¿Qué buscas?", polish: "Czego szukasz?" }
        ]
    },
    {
        id: 176,
        spanish: "más",
        polish: "więcej",
        description: "Przysłówek lub przymiotnik porównawczy",
        examples: [
            { spanish: "Quiero más.", polish: "Chcę więcej." },
            { spanish: "Más tarde.", polish: "Później." },
            { spanish: "Es más grande.", polish: "Jest większy." }
        ]
    },
    {
        id: 177,
        spanish: "día",
        polish: "dzień",
        description: "Rzeczownik oznaczający okres 24 godzin",
        examples: [
            { spanish: "Un día bonito.", polish: "Piękny dzień." },
            { spanish: "Todos los días.", polish: "Codziennie." },
            { spanish: "Buenos días.", polish: "Dzień dobry." }
        ]
    },
    {
        id: 178,
        spanish: "podía",
        polish: "mógł, mogłem",
        description: "Czas przeszły niedokonany czasownika 'poder'",
        examples: [
            { spanish: "Yo podía hacerlo.", polish: "Mogłem to zrobić." },
            { spanish: "No podía dormir.", polish: "Nie mogłem spać." },
            { spanish: "Él podía venir.", polish: "On mógł przyjść." }
        ]
    },
    {
        id: 179,
        spanish: "ir",
        polish: "iść, jechać",
        description: "Czasownik oznaczający przemieszczanie się",
        examples: [
            { spanish: "Voy a casa.", polish: "Idę do domu." },
            { spanish: "¿Adónde vas?", polish: "Dokąd idziesz?" },
            { spanish: "Vamos juntos.", polish: "Idziemy razem." }
        ]
    },
    {
        id: 180,
        spanish: "venir",
        polish: "przychodzić",
        description: "Czasownik oznaczający przybycie",
        examples: [
            { spanish: "Ven aquí.", polish: "Chodź tutaj." },
            { spanish: "Vengo mañana.", polish: "Przyjdę jutro." },
            { spanish: "¿Vienes conmigo?", polish: "Idziesz ze mną?" }
        ]
    },
    {
        id: 181,
        spanish: "hizo",
        polish: "zrobił, zrobiła",
        description: "Czas przeszły czasownika 'hacer'",
        examples: [
            { spanish: "Él hizo la tarea.", polish: "On zrobił zadanie." },
            { spanish: "¿Quién hizo esto?", polish: "Kto to zrobił?" },
            { spanish: "Hizo mucho frío.", polish: "Było bardzo zimno." }
        ]
    },
    {
        id: 182,
        spanish: "número",
        polish: "numer, liczba",
        description: "Rzeczownik oznaczający wartość liczbową",
        examples: [
            { spanish: "Mi número de teléfono.", polish: "Mój numer telefonu." },
            { spanish: "Un gran número.", polish: "Duża liczba." },
            { spanish: "Número uno.", polish: "Numer jeden." }
        ]
    },
    {
        id: 183,
        spanish: "sonar",
        polish: "brzmieć, dzwonić",
        description: "Czasownik oznaczający wywoływanie dźwięku",
        examples: [
            { spanish: "El teléfono suena.", polish: "Telefon dzwoni." },
            { spanish: "Suena bien.", polish: "Brzmi dobrze." },
            { spanish: "Sonó la alarma.", polish: "Zabrzmiał alarm." }
        ]
    },
    {
        id: 184,
        spanish: "no",
        polish: "nie",
        description: "Przysłówek przeczący",
        examples: [
            { spanish: "No quiero.", polish: "Nie chcę." },
            { spanish: "No está aquí.", polish: "Nie ma go tutaj." },
            { spanish: "No, gracias.", polish: "Nie, dziękuję." }
        ]
    },
    {
        id: 185,
        spanish: "más",
        polish: "najbardziej",
        description: "Stopień najwyższy przysłówka",
        examples: [
            { spanish: "El más grande.", polish: "Największy." },
            { spanish: "Lo que más me gusta.", polish: "To, co lubię najbardziej." },
            { spanish: "El más importante.", polish: "Najważniejszy." }
        ]
    },
    {
        id: 186,
        spanish: "personas",
        polish: "osoby, ludzie",
        description: "Rzeczownik w liczbie mnogiej oznaczający ludzi",
        examples: [
            { spanish: "Muchas personas.", polish: "Wiele osób." },
            { spanish: "Las personas aquí.", polish: "Ludzie tutaj." },
            { spanish: "Personas importantes.", polish: "Ważne osoby." }
        ]
    },
    {
        id: 187,
        spanish: "mi - mis",
        polish: "mój, moja, moje",
        description: "Zaimek dzierżawczy pierwszej osoby",
        examples: [
            { spanish: "Mi casa.", polish: "Mój dom." },
            { spanish: "Mis amigos.", polish: "Moi przyjaciele." },
            { spanish: "Es mi libro.", polish: "To moja książka." }
        ]
    },
    {
        id: 188,
        spanish: "sobre",
        polish: "nad, o",
        description: "Przyimek miejsca lub tematu",
        examples: [
            { spanish: "Sobre la mesa.", polish: "Na stole." },
            { spanish: "Hablamos sobre ti.", polish: "Rozmawiamy o tobie." },
            { spanish: "Vuela sobre la ciudad.", polish: "Lata nad miastem." }
        ]
    },
    {
        id: 189,
        spanish: "saber",
        polish: "wiedzieć, umieć",
        description: "Czasownik oznaczający posiadanie wiedzy",
        examples: [
            { spanish: "No sé.", polish: "Nie wiem." },
            { spanish: "¿Sabes nadar?", polish: "Umiesz pływać?" },
            { spanish: "Quiero saber.", polish: "Chcę wiedzieć." }
        ]
    },
    {
        id: 190,
        spanish: "agua",
        polish: "woda",
        description: "Rzeczownik oznaczający płyn",
        examples: [
            { spanish: "Un vaso de agua.", polish: "Szklanka wody." },
            { spanish: "El agua está fría.", polish: "Woda jest zimna." },
            { spanish: "Bebo agua.", polish: "Piję wodę." }
        ]
    },
    {
        id: 191,
        spanish: "que",
        polish: "niż",
        description: "Spójnik porównawczy",
        examples: [
            { spanish: "Más grande que tú.", polish: "Większy niż ty." },
            { spanish: "Mejor que antes.", polish: "Lepiej niż wcześniej." },
            { spanish: "Menos que yo.", polish: "Mniej niż ja." }
        ]
    },
    {
        id: 192,
        spanish: "llamada",
        polish: "połączenie, telefon",
        description: "Rzeczownik oznaczający kontakt telefoniczny",
        examples: [
            { spanish: "Una llamada telefónica.", polish: "Połączenie telefoniczne." },
            { spanish: "Tengo una llamada.", polish: "Mam telefon." },
            { spanish: "Llamada perdida.", polish: "Nieodebrane połączenie." }
        ]
    },
    {
        id: 193,
        spanish: "primero - primera",
        polish: "pierwszy, pierwsza",
        description: "Liczebnik porządkowy oznaczający pozycję",
        examples: [
            { spanish: "El primer día.", polish: "Pierwszy dzień." },
            { spanish: "La primera vez.", polish: "Pierwszy raz." },
            { spanish: "En primer lugar.", polish: "Po pierwsze." }
        ]
    },
    {
        id: 194,
        spanish: "que",
        polish: "kto",
        description: "Zaimek pytający o osobę",
        examples: [
            { spanish: "¿Quién es?", polish: "Kto to jest?" },
            { spanish: "La persona que vino.", polish: "Osoba, która przyszła." },
            { spanish: "¿Con quién hablas?", polish: "Z kim rozmawiasz?" }
        ]
    },
    {
        id: 195,
        spanish: "puede",
        polish: "może",
        description: "Trzecia osoba liczby pojedynczej czasownika 'poder'",
        examples: [
            { spanish: "Él puede hacerlo.", polish: "On może to zrobić." },
            { spanish: "Puede ser.", polish: "Może być." },
            { spanish: "¿Puede ayudar?", polish: "Czy może pomóc?" }
        ]
    },
    {
        id: 196,
        spanish: "abajo",
        polish: "w dół, na dole",
        description: "Przysłówek miejsca oznaczający niższą pozycję",
        examples: [
            { spanish: "Voy abajo.", polish: "Idę w dół." },
            { spanish: "Está abajo.", polish: "Jest na dole." },
            { spanish: "Mira abajo.", polish: "Spójrz w dół." }
        ]
    },
    {
        id: 197,
        spanish: "lado",
        polish: "strona, bok",
        description: "Rzeczownik oznaczający pozycję boczną",
        examples: [
            { spanish: "Al lado de la casa.", polish: "Obok domu." },
            { spanish: "Este lado.", polish: "Ta strona." },
            { spanish: "Por todos lados.", polish: "Ze wszystkich stron." }
        ]
    },
    {
        id: 198,
        spanish: "estado",
        polish: "był, były",
        description: "Imiesłów czasownika 'estar' (być)",
        examples: [
            { spanish: "He estado aquí.", polish: "Byłem tutaj." },
            { spanish: "Has estado enfermo.", polish: "Byłeś chory." },
            { spanish: "Han estado juntos.", polish: "Byli razem." }
        ]
    },
    {
        id: 199,
        spanish: "ahora",
        polish: "teraz",
        description: "Przysłówek czasu oznaczający aktualny moment",
        examples: [
            { spanish: "Ahora voy.", polish: "Idę teraz." },
            { spanish: "¿Qué haces ahora?", polish: "Co robisz teraz?" },
            { spanish: "Ahora no puedo.", polish: "Teraz nie mogę." }
        ]
    },
    {
        id: 200,
        spanish: "encontrar",
        polish: "znajdować",
        description: "Czasownik oznaczający odkrywanie",
        examples: [
            { spanish: "No puedo encontrarlo.", polish: "Nie mogę tego znaleźć." },
            { spanish: "Voy a encontrar la solución.", polish: "Znajdę rozwiązanie." },
            { spanish: "¿Dónde lo encontraste?", polish: "Gdzie to znalazłeś?" }
        ]
    },
    {
        id: 201,
        spanish: "cabeza",
        polish: "głowa",
        description: "Rzeczownik oznaczający część ciała",
        examples: [
            { spanish: "Me duele la cabeza.", polish: "Boli mnie głowa." },
            { spanish: "Cabeza arriba.", polish: "Głowa do góry." },
            { spanish: "Usa la cabeza.", polish: "Użyj głowy (rozumu)." }
        ]
    },
    {
        id: 202,
        spanish: "de pie",
        polish: "stojący, na stojąco",
        description: "Wyrażenie oznaczające pozycję pionową",
        examples: [
            { spanish: "Estoy de pie.", polish: "Stoję." },
            { spanish: "Ponte de pie.", polish: "Wstań." },
            { spanish: "De pie durante horas.", polish: "Na stojąco przez godziny." }
        ]
    },
    {
        id: 203,
        spanish: "propio - propia",
        polish: "własny, własna",
        description: "Przymiotnik oznaczający przynależność",
        examples: [
            { spanish: "Mi propia casa.", polish: "Mój własny dom." },
            { spanish: "Su propio coche.", polish: "Jego własny samochód." },
            { spanish: "Por mi propia cuenta.", polish: "Na własny rachunek." }
        ]
    },
    {
        id: 204,
        spanish: "página",
        polish: "strona",
        description: "Rzeczownik oznaczający kartę w książce",
        examples: [
            { spanish: "La página 10.", polish: "Strona 10." },
            { spanish: "Lee la página.", polish: "Przeczytaj stronę." },
            { spanish: "Primera página.", polish: "Pierwsza strona." }
        ]
    },
    {
        id: 205,
        spanish: "debería",
        polish: "powinienem, powinieneś",
        description: "Tryb warunkowy czasownika 'deber'",
        examples: [
            { spanish: "Deberías estudiar.", polish: "Powinieneś się uczyć." },
            { spanish: "Debería ir.", polish: "Powinienem iść." },
            { spanish: "¿Qué debería hacer?", polish: "Co powinienem zrobić?" }
        ]
    },
    {
        id: 206,
        spanish: "país",
        polish: "kraj",
        description: "Rzeczownik oznaczający państwo",
        examples: [
            { spanish: "Mi país es Polonia.", polish: "Mój kraj to Polska." },
            { spanish: "Un país hermoso.", polish: "Piękny kraj." },
            { spanish: "Viajar por el país.", polish: "Podróżować po kraju." }
        ]
    },
    {
        id: 207,
        spanish: "encontrado",
        polish: "znaleziony",
        description: "Imiesłów czasu przeszłego od 'encontrar'",
        examples: [
            { spanish: "He encontrado la clave.", polish: "Znalazłem klucz." },
            { spanish: "¿Lo has encontrado?", polish: "Czy to znalazłeś?" },
            { spanish: "Hemos encontrado el problema.", polish: "Znaleźliśmy problem." }
        ]
    },
    {
        id: 208,
        spanish: "respuesta",
        polish: "odpowiedź",
        description: "Rzeczownik oznaczający reakcję lub rozwiązanie",
        examples: [
            { spanish: "La respuesta correcta.", polish: "Poprawna odpowiedź." },
            { spanish: "Dame una respuesta.", polish: "Daj mi odpowiedź." },
            { spanish: "Sin respuesta.", polish: "Bez odpowiedzi." }
        ]
    },
    {
        id: 209,
        spanish: "escuela",
        polish: "szkoła",
        description: "Rzeczownik oznaczający placówkę edukacyjną",
        examples: [
            { spanish: "Voy a la escuela.", polish: "Idę do szkoły." },
            { spanish: "Mi escuela es grande.", polish: "Moja szkoła jest duża." },
            { spanish: "Escuela primaria.", polish: "Szkoła podstawowa." }
        ]
    },
    {
        id: 210,
        spanish: "crecer",
        polish: "rosnąć",
        description: "Czasownik oznaczający wzrost",
        examples: [
            { spanish: "Los niños crecen rápido.", polish: "Dzieci szybko rosną." },
            { spanish: "Las plantas crecen.", polish: "Rośliny rosną." },
            { spanish: "Crecer como persona.", polish: "Rozwijać się jako osoba." }
        ]
    },
    {
        id: 211,
        spanish: "estudio",
        polish: "nauka, studiowanie",
        description: "Rzeczownik oznaczający proces uczenia się",
        examples: [
            { spanish: "El estudio es importante.", polish: "Nauka jest ważna." },
            { spanish: "Horas de estudio.", polish: "Godziny nauki." },
            { spanish: "Mi estudio favorito.", polish: "Mój ulubiony przedmiot." }
        ]
    },
    {
        id: 212,
        spanish: "todavía",
        polish: "jeszcze, nadal",
        description: "Przysłówek oznaczający kontynuację",
        examples: [
            { spanish: "Todavía no.", polish: "Jeszcze nie." },
            { spanish: "Todavía está aquí.", polish: "Nadal tu jest." },
            { spanish: "Todavía te amo.", polish: "Nadal cię kocham." }
        ]
    },
    {
        id: 213,
        spanish: "aprender",
        polish: "uczyć się",
        description: "Czasownik oznaczający zdobywanie wiedzy",
        examples: [
            { spanish: "Quiero aprender español.", polish: "Chcę nauczyć się hiszpańskiego." },
            { spanish: "Aprender es importante.", polish: "Uczenie się jest ważne." },
            { spanish: "¿Qué aprendes?", polish: "Czego się uczysz?" }
        ]
    },
    {
        id: 214,
        spanish: "planta",
        polish: "roślina",
        description: "Rzeczownik oznaczający organizm roślinny",
        examples: [
            { spanish: "Una planta verde.", polish: "Zielona roślina." },
            { spanish: "Riego las plantas.", polish: "Podlewam rośliny." },
            { spanish: "Planta medicinal.", polish: "Roślina lecznicza." }
        ]
    },
    {
        id: 215,
        spanish: "cubierta",
        polish: "przykrycie, pokrywa",
        description: "Rzeczownik oznaczający nakrycie",
        examples: [
            { spanish: "La cubierta del libro.", polish: "Okładka książki." },
            { spanish: "Cubierta de mesa.", polish: "Obrus." },
            { spanish: "Bajo cubierta.", polish: "Pod dachem." }
        ]
    },
    {
        id: 216,
        spanish: "alimentos",
        polish: "żywność, jedzenie",
        description: "Rzeczownik w liczbie mnogiej oznaczający pożywienie",
        examples: [
            { spanish: "Comprar alimentos.", polish: "Kupować jedzenie." },
            { spanish: "Alimentos frescos.", polish: "Świeża żywność." },
            { spanish: "Alimentos saludables.", polish: "Zdrowe jedzenie." }
        ]
    },
    {
        id: 217,
        spanish: "sol",
        polish: "słońce",
        description: "Rzeczownik oznaczający gwiazdę",
        examples: [
            { spanish: "El sol brilla.", polish: "Słońce świeci." },
            { spanish: "Tomar el sol.", polish: "Opalać się." },
            { spanish: "Bajo el sol.", polish: "Pod słońcem." }
        ]
    },
    {
        id: 218,
        spanish: "cuatro",
        polish: "cztery",
        description: "Liczebnik główny oznaczający liczbę 4",
        examples: [
            { spanish: "Tengo cuatro hermanos.", polish: "Mam czterech braci." },
            { spanish: "Son las cuatro.", polish: "Jest czwarta (godzina)." },
            { spanish: "Cuatro días.", polish: "Cztery dni." }
        ]
    },
    {
        id: 219,
        spanish: "entre",
        polish: "między, pomiędzy",
        description: "Przyimek oznaczający pozycję środkową",
        examples: [
            { spanish: "Entre tú y yo.", polish: "Między tobą a mną." },
            { spanish: "Entre las casas.", polish: "Między domami." },
            { spanish: "Entre amigos.", polish: "Między przyjaciółmi." }
        ]
    },
    {
        id: 220,
        spanish: "estado",
        polish: "stan",
        description: "Rzeczownik oznaczający sytuację lub państwo",
        examples: [
            { spanish: "En buen estado.", polish: "W dobrym stanie." },
            { spanish: "Estado de ánimo.", polish: "Stan ducha." },
            { spanish: "Los Estados Unidos.", polish: "Stany Zjednoczone." }
        ]
    },
    {
        id: 221,
        spanish: "mantener",
        polish: "utrzymywać",
        description: "Czasownik oznaczający zachowanie stanu",
        examples: [
            { spanish: "Mantener la calma.", polish: "Zachować spokój." },
            { spanish: "Mantener limpio.", polish: "Utrzymywać w czystości." },
            { spanish: "Mantener contacto.", polish: "Utrzymywać kontakt." }
        ]
    },
    {
        id: 222,
        spanish: "ojo",
        polish: "oko",
        description: "Rzeczownik oznaczający organ wzroku",
        examples: [
            { spanish: "Tengo dolor de ojos.", polish: "Bolą mnie oczy." },
            { spanish: "Ojos azules.", polish: "Niebieskie oczy." },
            { spanish: "Cierra los ojos.", polish: "Zamknij oczy." }
        ]
    },
    {
        id: 223,
        spanish: "nunca",
        polish: "nigdy",
        description: "Przysłówek oznaczający przeczenie czasowe",
        examples: [
            { spanish: "Nunca lo haré.", polish: "Nigdy tego nie zrobię." },
            { spanish: "Nunca más.", polish: "Nigdy więcej." },
            { spanish: "Nunca he estado allí.", polish: "Nigdy tam nie byłem." }
        ]
    },
    {
        id: 224,
        spanish: "último - última",
        polish: "ostatni, ostatnia",
        description: "Przymiotnik oznaczający końcową pozycję",
        examples: [
            { spanish: "El último día.", polish: "Ostatni dzień." },
            { spanish: "La última vez.", polish: "Ostatni raz." },
            { spanish: "Por último.", polish: "Na końcu." }
        ]
    },
    {
        id: 225,
        spanish: "dejar",
        polish: "zostawić, pozwolić",
        description: "Czasownik oznaczający pozostawienie",
        examples: [
            { spanish: "Déjame en paz.", polish: "Zostaw mnie w spokoju." },
            { spanish: "Dejar la puerta abierta.", polish: "Zostawić drzwi otwarte." },
            { spanish: "Dejar de fumar.", polish: "Przestać palić." }
        ]
    },
    {
        id: 226,
        spanish: "pensado",
        polish: "pomyślany, myślany",
        description: "Imiesłów czasu przeszłego od 'pensar'",
        examples: [
            { spanish: "He pensado en ti.", polish: "Myślałem o tobie." },
            { spanish: "Bien pensado.", polish: "Dobrze przemyślane." },
            { spanish: "No lo había pensado.", polish: "Nie pomyślałem o tym." }
        ]
    },
    {
        id: 227,
        spanish: "ciudad",
        polish: "miasto",
        description: "Rzeczownik oznaczający ośrodek miejski",
        examples: [
            { spanish: "Vivo en la ciudad.", polish: "Mieszkam w mieście." },
            { spanish: "Una ciudad grande.", polish: "Duże miasto." },
            { spanish: "Ciudad bonita.", polish: "Piękne miasto." }
        ]
    },
    {
        id: 228,
        spanish: "árbol",
        polish: "drzewo",
        description: "Rzeczownik oznaczający roślinę drzewiastą",
        examples: [
            { spanish: "Un árbol alto.", polish: "Wysokie drzewo." },
            { spanish: "Plantar árboles.", polish: "Sadzić drzewa." },
            { spanish: "Bajo el árbol.", polish: "Pod drzewem." }
        ]
    },
    {
        id: 229,
        spanish: "cruzar",
        polish: "przekraczać, przechodzić",
        description: "Czasownik oznaczający przemieszczanie się przez coś",
        examples: [
            { spanish: "Cruzar la calle.", polish: "Przejść przez ulicę." },
            { spanish: "Cruzar el río.", polish: "Przepłynąć rzekę." },
            { spanish: "Cruzar la frontera.", polish: "Przekroczyć granicę." }
        ]
    },
    {
        id: 230,
        spanish: "granja",
        polish: "farma, gospodarstwo",
        description: "Rzeczownik oznaczający gospodarstwo rolne",
        examples: [
            { spanish: "Vivo en una granja.", polish: "Mieszkam na farmie." },
            { spanish: "Granja de animales.", polish: "Gospodarstwo ze zwierzętami." },
            { spanish: "Trabajar en la granja.", polish: "Pracować na farmie." }
        ]
    },
    {
        id: 231,
        spanish: "duro - dura",
        polish: "twardy, trudny",
        description: "Przymiotnik oznaczający sztywność lub trudność",
        examples: [
            { spanish: "Pan duro.", polish: "Twardy chleb." },
            { spanish: "Trabajo duro.", polish: "Ciężka praca." },
            { spanish: "Es muy duro.", polish: "Jest bardzo trudne." }
        ]
    },
    {
        id: 232,
        spanish: "inicio",
        polish: "początek, start",
        description: "Rzeczownik oznaczający rozpoczęcie",
        examples: [
            { spanish: "El inicio del día.", polish: "Początek dnia." },
            { spanish: "Desde el inicio.", polish: "Od początku." },
            { spanish: "Buen inicio.", polish: "Dobry start." }
        ]
    },
    {
        id: 233,
        spanish: "podría",
        polish: "mógłby, mógłbym",
        description: "Tryb warunkowy czasownika 'poder'",
        examples: [
            { spanish: "Podría ayudar.", polish: "Mógłbym pomóc." },
            { spanish: "¿Qué podrías hacer?", polish: "Co mógłbyś zrobić?" },
            { spanish: "Podría ser.", polish: "Mogłoby być." }
        ]
    },
    {
        id: 234,
        spanish: "historia",
        polish: "historia, opowieść",
        description: "Rzeczownik oznaczający przeszłość lub narrację",
        examples: [
            { spanish: "La historia de España.", polish: "Historia Hiszpanii." },
            { spanish: "Una historia interesante.", polish: "Ciekawa opowieść." },
            { spanish: "Contar una historia.", polish: "Opowiadać historię." }
        ]
    },
    {
        id: 235,
        spanish: "sierra",
        polish: "piła, pasmo górskie",
        description: "Rzeczownik oznaczający narzędzie lub góry",
        examples: [
            { spanish: "Usar la sierra.", polish: "Użyć piły." },
            { spanish: "La Sierra Nevada.", polish: "Sierra Nevada." },
            { spanish: "Sierra de montañas.", polish: "Pasmo górskie." }
        ]
    },
    {
        id: 236,
        spanish: "ahora",
        polish: "daleko",
        description: "Przysłówek oznaczający dużą odległość",
        examples: [
            { spanish: "Está muy lejos.", polish: "Jest bardzo daleko." },
            { spanish: "Lejos de aquí.", polish: "Daleko stąd." },
            { spanish: "No tan lejos.", polish: "Nie tak daleko." }
        ]
    },
    {
        id: 237,
        spanish: "mar",
        polish: "morze",
        description: "Rzeczownik oznaczający zbiornik wodny",
        examples: [
            { spanish: "El mar está tranquilo.", polish: "Morze jest spokojne." },
            { spanish: "Voy al mar.", polish: "Idę nad morze." },
            { spanish: "Mar azul.", polish: "Niebieskie morze." }
        ]
    },
    {
        id: 238,
        spanish: "dibujar",
        polish: "rysować",
        description: "Czasownik oznaczający tworzenie obrazów",
        examples: [
            { spanish: "Me gusta dibujar.", polish: "Lubię rysować." },
            { spanish: "Dibujar un círculo.", polish: "Narysować koło." },
            { spanish: "Saber dibujar.", polish: "Umieć rysować." }
        ]
    },
    {
        id: 239,
        spanish: "izquierda",
        polish: "lewa, lewo",
        description: "Rzeczownik lub przymiotnik oznaczający stronę",
        examples: [
            { spanish: "A la izquierda.", polish: "Na lewo." },
            { spanish: "Mano izquierda.", polish: "Lewa ręka." },
            { spanish: "Gira a la izquierda.", polish: "Skręć w lewo." }
        ]
    },
    {
        id: 240,
        spanish: "tarde",
        polish: "późno",
        description: "Przysłówek oznaczający późną porę",
        examples: [
            { spanish: "Es muy tarde.", polish: "Jest bardzo późno." },
            { spanish: "Llego tarde.", polish: "Spóźniam się." },
            { spanish: "Más tarde.", polish: "Później." }
        ]
    },
    {
        id: 241,
        spanish: "ejecutar",
        polish: "wykonać, uruchomić",
        description: "Czasownik oznaczający przeprowadzenie akcji",
        examples: [
            { spanish: "Ejecutar un programa.", polish: "Uruchomić program." },
            { spanish: "Ejecutar la tarea.", polish: "Wykonać zadanie." },
            { spanish: "Ejecutar el plan.", polish: "Zrealizować plan." }
        ]
    },
    {
        id: 242,
        spanish: "no",
        polish: "nie (skrót)",
        description: "Skrócona forma przecząca",
        examples: [
            { spanish: "No lo hagas.", polish: "Nie rób tego." },
            { spanish: "No tengo.", polish: "Nie mam." },
            { spanish: "No sé.", polish: "Nie wiem." }
        ]
    },
    {
        id: 243,
        spanish: "mientras",
        polish: "podczas gdy",
        description: "Spójnik czasu",
        examples: [
            { spanish: "Mientras comes.", polish: "Podczas gdy jesz." },
            { spanish: "Mientras tanto.", polish: "W międzyczasie." },
            { spanish: "Mientras espero.", polish: "Podczas gdy czekam." }
        ]
    },
    {
        id: 244,
        spanish: "prensa",
        polish: "prasa",
        description: "Rzeczownik oznaczający media drukowane",
        examples: [
            { spanish: "La prensa diaria.", polish: "Prasa codzienna." },
            { spanish: "Lee la prensa.", polish: "Czytaj prasę." },
            { spanish: "Libertad de prensa.", polish: "Wolność prasy." }
        ]
    },
    {
        id: 245,
        spanish: "Cerrar",
        polish: "zamykać",
        description: "Czasownik oznaczający domknięcie",
        examples: [
            { spanish: "Cerrar la puerta.", polish: "Zamknąć drzwi." },
            { spanish: "Cierra los ojos.", polish: "Zamknij oczy." },
            { spanish: "Cerrar el libro.", polish: "Zamknąć książkę." }
        ]
    },
    {
        id: 246,
        spanish: "noche",
        polish: "noc",
        description: "Rzeczownik oznaczający porę doby",
        examples: [
            { spanish: "Buenas noches.", polish: "Dobranoc." },
            { spanish: "Esta noche.", polish: "Tej nocy." },
            { spanish: "De noche.", polish: "Nocą." }
        ]
    },
    {
        id: 247,
        spanish: "reales",
        polish: "prawdziwy, rzeczywisty",
        description: "Przymiotnik oznaczający autentyczność",
        examples: [
            { spanish: "Cosas reales.", polish: "Prawdziwe rzeczy." },
            { spanish: "Es real.", polish: "To jest prawdziwe." },
            { spanish: "Mundo real.", polish: "Prawdziwy świat." }
        ]
    },
    {
        id: 248,
        spanish: "vida",
        polish: "życie",
        description: "Rzeczownik oznaczający istnienie",
        examples: [
            { spanish: "La vida es bella.", polish: "Życie jest piękne." },
            { spanish: "Mi vida.", polish: "Moje życie." },
            { spanish: "Vida feliz.", polish: "Szczęśliwe życie." }
        ]
    },
    {
        id: 249,
        spanish: "pocos - pocas",
        polish: "nieliczni, niewiele",
        description: "Przymiotnik w liczbie mnogiej oznaczający małą liczbę",
        examples: [
            { spanish: "Pocos días.", polish: "Kilka dni." },
            { spanish: "Pocas personas.", polish: "Niewiele osób." },
            { spanish: "Unos pocos.", polish: "Kilku." }
        ]
    },
    {
        id: 250,
        spanish: "norte",
        polish: "północ",
        description: "Rzeczownik oznaczający kierunek",
        examples: [
            { spanish: "Al norte de España.", polish: "Na północy Hiszpanii." },
            { spanish: "Viento del norte.", polish: "Wiatr z północy." },
            { spanish: "Hacia el norte.", polish: "W kierunku północnym." }
        ]
    },
    {
        id: 251,
        spanish: "libro",
        polish: "książka",
        description: "Rzeczownik oznaczający publikację",
        examples: [
            { spanish: "Leo un libro.", polish: "Czytam książkę." },
            { spanish: "Mi libro favorito.", polish: "Moja ulubiona książka." },
            { spanish: "Libro interesante.", polish: "Ciekawa książka." }
        ]
    },
    {
        id: 252,
        spanish: "llevar",
        polish: "nosić, nieść",
        description: "Czasownik oznaczający przenoszenie",
        examples: [
            { spanish: "Llevo una maleta.", polish: "Niosę walizkę." },
            { spanish: "Llevar ropa.", polish: "Nosić ubranie." },
            { spanish: "Te llevo a casa.", polish: "Zawiozę cię do domu." }
        ]
    },
    {
        id: 253,
        spanish: "tomó",
        polish: "wziął, wzi ęła",
        description: "Czas przeszły czasownika 'tomar'",
        examples: [
            { spanish: "Tomó el libro.", polish: "Wziął książkę." },
            { spanish: "Él tomó café.", polish: "On wypił kawę." },
            { spanish: "Tomó una decisión.", polish: "Podjął decyzję." }
        ]
    },
    {
        id: 254,
        spanish: "ciencia",
        polish: "nauka",
        description: "Rzeczownik oznaczający dziedzinę wiedzy",
        examples: [
            { spanish: "La ciencia es importante.", polish: "Nauka jest ważna." },
            { spanish: "Ciencia ficción.", polish: "Fantastyka naukowa." },
            { spanish: "Estudiar ciencias.", polish: "Studiować nauki ścisłe." }
        ]
    },
    {
        id: 255,
        spanish: "comer",
        polish: "jeść",
        description: "Czasownik oznaczający spożywanie pokarmu",
        examples: [
            { spanish: "Voy a comer.", polish: "Idę jeść." },
            { spanish: "Me gusta comer.", polish: "Lubię jeść." },
            { spanish: "¿Qué comes?", polish: "Co jesz?" }
        ]
    },
    {
        id: 256,
        spanish: "habitación",
        polish: "pokój",
        description: "Rzeczownik oznaczający pomieszczenie",
        examples: [
            { spanish: "Mi habitación.", polish: "Mój pokój." },
            { spanish: "Habitación grande.", polish: "Duży pokój." },
            { spanish: "Limpiar la habitación.", polish: "Posprzątać pokój." }
        ]
    },
    {
        id: 257,
        spanish: "amigo",
        polish: "przyjaciel",
        description: "Rzeczownik oznaczający osobę bliską",
        examples: [
            { spanish: "Mi mejor amigo.", polish: "Mój najlepszy przyjaciel." },
            { spanish: "Tengo muchos amigos.", polish: "Mam wielu przyjaciół." },
            { spanish: "Amigo de infancia.", polish: "Przyjaciel z dzieciństwa." }
        ]
    },
    {
        id: 258,
        spanish: "comenzó",
        polish: "zaczął, zaczęła",
        description: "Czas przeszły czasownika 'comenzar'",
        examples: [
            { spanish: "Comenzó a llover.", polish: "Zaczęło padać." },
            { spanish: "La clase comenzó.", polish: "Lekcja się zaczęła." },
            { spanish: "Él comenzó el trabajo.", polish: "On rozpoczął pracę." }
        ]
    },
    {
        id: 259,
        spanish: "gusta",
        polish: "podoba się",
        description: "Forma czasownika 'gustar' (lubić)",
        examples: [
            { spanish: "Me gusta el chocolate.", polish: "Lubię czekoladę." },
            { spanish: "¿Te gusta?", polish: "Czy ci się podoba?" },
            { spanish: "Le gusta leer.", polish: "On lubi czytać." }
        ]
    },
    {
        id: 260,
        spanish: "peces",
        polish: "ryby",
        description: "Rzeczownik w liczbie mnogiej oznaczający ryby",
        examples: [
            { spanish: "Los peces nadan.", polish: "Ryby pływają." },
            { spanish: "Peces de colores.", polish: "Kolorowe rybki." },
            { spanish: "Pescar peces.", polish: "Łowić ryby." }
        ]
    },
    {
        id: 261,
        spanish: "montaña",
        polish: "góra",
        description: "Rzeczownik oznaczający wzniesienie",
        examples: [
            { spanish: "Una montaña alta.", polish: "Wysoka góra." },
            { spanish: "Subir la montaña.", polish: "Wchodzić na górę." },
            { spanish: "En la montaña.", polish: "W górach." }
        ]
    },
    {
        id: 262,
        spanish: "Deténgase",
        polish: "zatrzymać się",
        description: "Forma rozkazująca czasownika 'detenerse'",
        examples: [
            { spanish: "Deténgase aquí.", polish: "Proszę się zatrzymać tutaj." },
            { spanish: "Deténgase un momento.", polish: "Zatrzymaj się na chwilę." },
            { spanish: "El coche se detuvo.", polish: "Samochód się zatrzymał." }
        ]
    },
    {
        id: 263,
        spanish: "una vez",
        polish: "raz, kiedyś",
        description: "Wyrażenie oznaczające jednostkowe zdarzenie",
        examples: [
            { spanish: "Una vez más.", polish: "Jeszcze raz." },
            { spanish: "Una vez al día.", polish: "Raz dziennie." },
            { spanish: "Érase una vez.", polish: "Było sobie kiedyś." }
        ]
    },
    {
        id: 264,
        spanish: "base de",
        polish: "podstawa",
        description: "Rzeczownik oznaczający fundament",
        examples: [
            { spanish: "La base de datos.", polish: "Baza danych." },
            { spanish: "Base sólida.", polish: "Solidna podstawa." },
            { spanish: "Base militar.", polish: "Baza wojskowa." }
        ]
    },
    {
        id: 265,
        spanish: "escuchar",
        polish: "słuchać",
        description: "Czasownik oznaczający percepcję słuchową",
        examples: [
            { spanish: "Escuchar música.", polish: "Słuchać muzyki." },
            { spanish: "Escúchame.", polish: "Posłuchaj mnie." },
            { spanish: "Me gusta escuchar.", polish: "Lubię słuchać." }
        ]
    },
    {
        id: 266,
        spanish: "caballo",
        polish: "koń",
        description: "Rzeczownik oznaczający zwierzę",
        examples: [
            { spanish: "Montar a caballo.", polish: "Jeździć konno." },
            { spanish: "Un caballo blanco.", polish: "Biały koń." },
            { spanish: "El caballo corre.", polish: "Koń biegnie." }
        ]
    },
    {
        id: 267,
        spanish: "cortada",
        polish: "cięcie, skaleczeń",
        description: "Rzeczownik lub przymiotnik oznaczający przecięcie",
        examples: [
            { spanish: "Una herida cortada.", polish: "Rana cięta." },
            { spanish: "Calle cortada.", polish: "Zamknięta ulica." },
            { spanish: "Tela cortada.", polish: "Przecięta tkanina." }
        ]
    },
    {
        id: 268,
        spanish: "seguro - segura",
        polish: "pewny, bezpieczny",
        description: "Przymiotnik oznaczający brak zagrożenia",
        examples: [
            { spanish: "Estoy seguro.", polish: "Jestem pewny." },
            { spanish: "Un lugar seguro.", polish: "Bezpieczne miejsce." },
            { spanish: "Seguro de ti mismo.", polish: "Pewny siebie." }
        ]
    },
    {
        id: 269,
        spanish: "ver",
        polish: "oglądać",
        description: "Czasownik oznaczający obserwowanie",
        examples: [
            { spanish: "Ver la televisión.", polish: "Oglądać telewizję." },
            { spanish: "Ver una película.", polish: "Obejrzeć film." },
            { spanish: "A ver.", polish: "Zobaczmy." }
        ]
    },
    {
        id: 270,
        spanish: "colores",
        polish: "kolory",
        description: "Rzeczownik w liczbie mnogiej oznaczający barwy",
        examples: [
            { spanish: "Muchos colores.", polish: "Wiele kolorów." },
            { spanish: "Colores brillantes.", polish: "Jasne kolory." },
            { spanish: "Me gustan los colores.", polish: "Lubię kolory." }
        ]
    },
    {
        id: 271,
        spanish: "cara",
        polish: "twarz",
        description: "Rzeczownik oznaczający część ciała",
        examples: [
            { spanish: "Una cara bonita.", polish: "Ładna twarz." },
            { spanish: "Lavar la cara.", polish: "Umyć twarz." },
            { spanish: "Cara a cara.", polish: "Twarzą w twarz." }
        ]
    },
    {
        id: 272,
        spanish: "madera",
        polish: "drewno",
        description: "Rzeczownik oznaczający materiał",
        examples: [
            { spanish: "Mesa de madera.", polish: "Stół drewniany." },
            { spanish: "Madera dura.", polish: "Twarde drewno." },
            { spanish: "Cortar madera.", polish: "Ciąć drewno." }
        ]
    },
    {
        id: 273,
        spanish: "principal",
        polish: "główny",
        description: "Przymiotnik oznaczający najważniejszy",
        examples: [
            { spanish: "La calle principal.", polish: "Główna ulica." },
            { spanish: "El personaje principal.", polish: "Główna postać." },
            { spanish: "Problema principal.", polish: "Główny problem." }
        ]
    },
    {
        id: 274,
        spanish: "abierta - abierto",
        polish: "otwarty, otwarta",
        description: "Przymiotnik oznaczający brak zamknięcia",
        examples: [
            { spanish: "La puerta está abierta.", polish: "Drzwi są otwarte." },
            { spanish: "Ventana abierta.", polish: "Otwarte okno." },
            { spanish: "Mente abierta.", polish: "Otwarty umysł." }
        ]
    },
    {
        id: 275,
        spanish: "parecer",
        polish: "wydawać się",
        description: "Czasownik oznaczający wrażenie",
        examples: [
            { spanish: "Parece fácil.", polish: "Wydaje się łatwe." },
            { spanish: "¿Qué te parece?", polish: "Co o tym sądzisz?" },
            { spanish: "Parece que llueve.", polish: "Wygląda na to, że pada." }
        ]
    },
    {
        id: 276,
        spanish: "juntos - juntas",
        polish: "razem",
        description: "Przysłówek lub przymiotnik oznaczający wspólność",
        examples: [
            { spanish: "Vamos juntos.", polish: "Idziemy razem." },
            { spanish: "Estar juntos.", polish: "Być razem." },
            { spanish: "Trabajar juntos.", polish: "Pracować razem." }
        ]
    },
    {
        id: 277,
        spanish: "próximo - próxima",
        polish: "następny, najbliższy",
        description: "Przymiotnik oznaczający kolejność",
        examples: [
            { spanish: "La próxima vez.", polish: "Następnym razem." },
            { spanish: "El próximo año.", polish: "Przyszły rok." },
            { spanish: "La estación próxima.", polish: "Najbliższa stacja." }
        ]
    },
    {
        id: 278,
        spanish: "blanco - blanca",
        polish: "biały, biała",
        description: "Przymiotnik oznaczający kolor",
        examples: [
            { spanish: "Nieve blanca.", polish: "Biały śnieg." },
            { spanish: "Un gato blanco.", polish: "Biały kot." },
            { spanish: "Papel en blanco.", polish: "Biały papier." }
        ]
    },
    {
        id: 279,
        spanish: "niños",
        polish: "dzieci",
        description: "Rzeczownik w liczbie mnogiej oznaczający młode osoby",
        examples: [
            { spanish: "Los niños juegan.", polish: "Dzieci się bawią." },
            { spanish: "Niños pequeños.", polish: "Małe dzieci." },
            { spanish: "Cuidar a los niños.", polish: "Opiekować się dziećmi." }
        ]
    },
    {
        id: 280,
        spanish: "comenzar",
        polish: "zaczynać",
        description: "Czasownik oznaczający rozpoczynanie",
        examples: [
            { spanish: "Voy a comenzar.", polish: "Zacznę." },
            { spanish: "Comenzar de nuevo.", polish: "Zacząć od nowa." },
            { spanish: "¿Cuándo comenzamos?", polish: "Kiedy zaczynamy?" }
        ]
    },
    {
        id: 281,
        spanish: "conseguido",
        polish: "osiągnięty, zdobyty",
        description: "Imiesłów czasu przeszłego od 'conseguir'",
        examples: [
            { spanish: "He conseguido mi meta.", polish: "Osiągnąłem mój cel." },
            { spanish: "Has conseguido el trabajo.", polish: "Zdobyłeś pracę." },
            { spanish: "Lo hemos conseguido.", polish: "Udało nam się." }
        ]
    },
    {
        id: 282,
        spanish: "caminar",
        polish: "chodzić, spacerować",
        description: "Czasownik oznaczający poruszanie się pieszo",
        examples: [
            { spanish: "Me gusta caminar.", polish: "Lubię spacerować." },
            { spanish: "Caminar por el parque.", polish: "Spacerować po parku." },
            { spanish: "Caminamos juntos.", polish: "Chodzimy razem." }
        ]
    },
    {
        id: 283,
        spanish: "ejemplo",
        polish: "przykład",
        description: "Rzeczownik oznaczający wzór",
        examples: [
            { spanish: "Por ejemplo.", polish: "Na przykład." },
            { spanish: "Un buen ejemplo.", polish: "Dobry przykład." },
            { spanish: "Dar un ejemplo.", polish: "Podać przykład." }
        ]
    },
    {
        id: 284,
        spanish: "aliviar",
        polish: "łagodzić, ulżyć",
        description: "Czasownik oznaczający przyniesienie ulgi",
        examples: [
            { spanish: "Aliviar el dolor.", polish: "Uśmierzyć ból." },
            { spanish: "Esto te aliviará.", polish: "To ci ulży." },
            { spanish: "Aliviar el estrés.", polish: "Złagodzić stres." }
        ]
    },
    {
        id: 285,
        spanish: "papel",
        polish: "papier",
        description: "Rzeczownik oznaczający materiał",
        examples: [
            { spanish: "Hoja de papel.", polish: "Kartka papieru." },
            { spanish: "Papel blanco.", polish: "Biały papier." },
            { spanish: "Escribir en papel.", polish: "Pisać na papierze." }
        ]
    },
    {
        id: 286,
        spanish: "grupo",
        polish: "grupa",
        description: "Rzeczownik oznaczający zbiór osób",
        examples: [
            { spanish: "Un grupo de amigos.", polish: "Grupa przyjaciół." },
            { spanish: "Grupo musical.", polish: "Grupa muzyczna." },
            { spanish: "Trabajar en grupo.", polish: "Pracować w grupie." }
        ]
    },
    {
        id: 287,
        spanish: "siempre",
        polish: "zawsze",
        description: "Przysłówek oznaczający stałość",
        examples: [
            { spanish: "Siempre estoy aquí.", polish: "Zawsze tu jestem." },
            { spanish: "Como siempre.", polish: "Jak zawsze." },
            { spanish: "Para siempre.", polish: "Na zawsze." }
        ]
    },
    {
        id: 288,
        spanish: "música",
        polish: "muzyka",
        description: "Rzeczownik oznaczający dźwięki",
        examples: [
            { spanish: "Me gusta la música.", polish: "Lubię muzykę." },
            { spanish: "Escuchar música.", polish: "Słuchać muzyki." },
            { spanish: "Música clásica.", polish: "Muzyka klasyczna." }
        ]
    },
    {
        id: 289,
        spanish: "los - las",
        polish: "ci, te, tamci",
        description: "Zaimek wskazujący w liczbie mnogiej",
        examples: [
            { spanish: "Los que están allí.", polish: "Ci, którzy tam są." },
            { spanish: "Las que compré.", polish: "Te, które kupiłem." },
            { spanish: "Los mejores.", polish: "Najlepsi." }
        ]
    },
    {
        id: 290,
        spanish: "ambos - ambas",
        polish: "obaj, obie",
        description: "Zaimek oznaczający dwa obiekty razem",
        examples: [
            { spanish: "Ambos son buenos.", polish: "Obaj są dobrzy." },
            { spanish: "Ambas opciones.", polish: "Obie opcje." },
            { spanish: "Los conocemos ambos.", polish: "Znamy ich oboje." }
        ]
    },
    {
        id: 291,
        spanish: "marca",
        polish: "marka, znak",
        description: "Rzeczownik oznaczający oznaczenie",
        examples: [
            { spanish: "Una buena marca.", polish: "Dobra marka." },
            { spanish: "Marca registrada.", polish: "Zarejestrowana marka." },
            { spanish: "Dejar una marca.", polish: "Zostawić znak." }
        ]
    },
    {
        id: 292,
        spanish: "menudo",
        polish: "często",
        description: "Przysłówek oznaczający częstotliwość",
        examples: [
            { spanish: "A menudo voy allí.", polish: "Często tam chodzę." },
            { spanish: "Lo veo a menudo.", polish: "Często go widzę." },
            { spanish: "Sucede a menudo.", polish: "Często się zdarza." }
        ]
    },
    {
        id: 293,
        spanish: "carta",
        polish: "list",
        description: "Rzeczownik oznaczający pismo",
        examples: [
            { spanish: "Escribir una carta.", polish: "Napisać list." },
            { spanish: "Recibí tu carta.", polish: "Otrzymałem twój list." },
            { spanish: "Carta de amor.", polish: "List miłosny." }
        ]
    },
    {
        id: 294,
        spanish: "hasta",
        polish: "aż, dopóki",
        description: "Spójnik lub przyimek czasu",
        examples: [
            { spanish: "Hasta que vuelvas.", polish: "Dopóki nie wrócisz." },
            { spanish: "Espera hasta mañana.", polish: "Poczekaj do jutra." },
            { spanish: "Hasta luego.", polish: "Do zobaczenia." }
        ]
    },
    {
        id: 295,
        spanish: "milla",
        polish: "mila",
        description: "Rzeczownik oznaczający jednostkę odległości",
        examples: [
            { spanish: "Una milla de distancia.", polish: "Milę odległości." },
            { spanish: "Caminar una milla.", polish: "Przejść milę." },
            { spanish: "Milla náutica.", polish: "Mila morska." }
        ]
    },
    {
        id: 296,
        spanish: "río",
        polish: "rzeka",
        description: "Rzeczownik oznaczający ciek wodny",
        examples: [
            { spanish: "El río fluye.", polish: "Rzeka płynie." },
            { spanish: "Cruzar el río.", polish: "Przeprawić się przez rzekę." },
            { spanish: "Río grande.", polish: "Wielka rzeka." }
        ]
    },
    {
        id: 297,
        spanish: "coche",
        polish: "samochód",
        description: "Rzeczownik oznaczający pojazd",
        examples: [
            { spanish: "Mi coche es rojo.", polish: "Mój samochód jest czerwony." },
            { spanish: "Conducir el coche.", polish: "Prowadzić samochód." },
            { spanish: "Coche nuevo.", polish: "Nowy samochód." }
        ]
    },
    {
        id: 298,
        spanish: "pies",
        polish: "stopy",
        description: "Rzeczownik w liczbie mnogiej oznaczający części ciała",
        examples: [
            { spanish: "Me duelen los pies.", polish: "Bolą mnie stopy." },
            { spanish: "Pies grandes.", polish: "Duże stopy." },
            { spanish: "De pie.", polish: "Na stojąco." }
        ]
    },
    {
        id: 299,
        spanish: "cuidado",
        polish: "ostrożność, opieka",
        description: "Rzeczownik oznaczający uwagę",
        examples: [
            { spanish: "¡Ten cuidado!", polish: "Uważaj!" },
            { spanish: "Con cuidado.", polish: "Ostrożnie." },
            { spanish: "Cuidado médico.", polish: "Opieka medyczna." }
        ]
    },
    {
        id: 300,
        spanish: "segundo - segunda",
        polish: "drugi, druga",
        description: "Liczebnik porządkowy oznaczający pozycję",
        examples: [
            { spanish: "El segundo día.", polish: "Drugi dzień." },
            { spanish: "La segunda vez.", polish: "Drugi raz." },
            { spanish: "En segundo lugar.", polish: "Po drugie." }
        ]
    },
    {
        id: 301,
        spanish: "suficiente",
        polish: "wystarczający, dosyć",
        description: "Przymiotnik lub przysłówek oznaczający odpowiednią ilość",
        examples: [
            { spanish: "Es suficiente.", polish: "To wystarczy." },
            { spanish: "Tengo suficiente tiempo.", polish: "Mam wystarczająco czasu." },
            { spanish: "No es suficiente.", polish: "To nie wystarczy." }
        ]
    },
    {
        id: 302,
        spanish: "llano",
        polish: "płaski, równina",
        description: "Przymiotnik lub rzeczownik oznaczający płaską powierzchnię",
        examples: [
            { spanish: "Terreno llano.", polish: "Płaski teren." },
            { spanish: "El llano es grande.", polish: "Równina jest duża." },
            { spanish: "Superficie llana.", polish: "Płaska powierzchnia." }
        ]
    },
    {
        id: 303,
        spanish: "chica",
        polish: "dziewczyna",
        description: "Rzeczownik oznaczający młodą kobietę",
        examples: [
            { spanish: "Una chica bonita.", polish: "Ładna dziewczyna." },
            { spanish: "La chica lee.", polish: "Dziewczyna czyta." },
            { spanish: "Chica joven.", polish: "Młoda dziewczyna." }
        ]
    },
    {
        id: 304,
        spanish: "habitual",
        polish: "zwykły, zwyczajny",
        description: "Przymiotnik oznaczający coś regularnego",
        examples: [
            { spanish: "Es habitual.", polish: "To zwyczajne." },
            { spanish: "Cliente habitual.", polish: "Stały klient." },
            { spanish: "Rutina habitual.", polish: "Zwykła rutyna." }
        ]
    },
    {
        id: 305,
        spanish: "joven",
        polish: "młody, młoda",
        description: "Przymiotnik oznaczający wiek",
        examples: [
            { spanish: "Un hombre joven.", polish: "Młody mężczyzna." },
            { spanish: "Es muy joven.", polish: "Jest bardzo młody." },
            { spanish: "Gente joven.", polish: "Młodzi ludzie." }
        ]
    },
    {
        id: 306,
        spanish: "listo - lista",
        polish: "gotowy, gotowa",
        description: "Przymiotnik oznaczający stan przygotowania",
        examples: [
            { spanish: "Estoy listo.", polish: "Jestem gotowy." },
            { spanish: "La cena está lista.", polish: "Kolacja jest gotowa." },
            { spanish: "¿Estás lista?", polish: "Czy jesteś gotowa?" }
        ]
    },
    {
        id: 307,
        spanish: "por encima de",
        polish: "nad, ponad",
        description: "Wyrażenie przyimkowe oznaczające wyższą pozycję",
        examples: [
            { spanish: "Por encima de la mesa.", polish: "Nad stołem." },
            { spanish: "Vuela por encima.", polish: "Lata nad." },
            { spanish: "Por encima de todo.", polish: "Ponad wszystko." }
        ]
    },
    {
        id: 308,
        spanish: "nunca",
        polish: "kiedykolwiek",
        description: "Przysłówek czasu w pytaniach",
        examples: [
            { spanish: "¿Has estado alguna vez?", polish: "Czy byłeś kiedykolwiek?" },
            { spanish: "Mejor que nunca.", polish: "Lepiej niż kiedykolwiek." },
            { spanish: "Por siempre jamás.", polish: "Na zawsze." }
        ]
    },
    {
        id: 309,
        spanish: "rojo - roja",
        polish: "czerwony, czerwona",
        description: "Przymiotnik oznaczający kolor",
        examples: [
            { spanish: "Una rosa roja.", polish: "Czerwona róża." },
            { spanish: "Coche rojo.", polish: "Czerwony samochód." },
            { spanish: "Color rojo.", polish: "Kolor czerwony." }
        ]
    },
    {
        id: 310,
        spanish: "lista",
        polish: "lista",
        description: "Rzeczownik oznaczający wykaz",
        examples: [
            { spanish: "Hacer una lista.", polish: "Zrobić listę." },
            { spanish: "Lista de compras.", polish: "Lista zakupów." },
            { spanish: "Primera en la lista.", polish: "Pierwsza na liście." }
        ]
    },
    {
        id: 311,
        spanish: "aunque",
        polish: "chociaż, mimo że",
        description: "Spójnik przeciwstawny",
        examples: [
            { spanish: "Aunque llueve, voy.", polish: "Chociaż pada, idę." },
            { spanish: "Aunque es difícil.", polish: "Mimo że to trudne." },
            { spanish: "Aunque no quieras.", polish: "Chociaż nie chcesz." }
        ]
    },
    {
        id: 312,
        spanish: "sentir",
        polish: "czuć, odczuwać",
        description: "Czasownik oznaczający doznawanie emocji",
        examples: [
            { spanish: "Siento frío.", polish: "Czuję zimno." },
            { spanish: "¿Qué sientes?", polish: "Co czujesz?" },
            { spanish: "Lo siento.", polish: "Przepraszam." }
        ]
    },
    {
        id: 313,
        spanish: "charla",
        polish: "rozmowa, pogawędka",
        description: "Rzeczownik oznaczający nieformalną konwersację",
        examples: [
            { spanish: "Una charla agradable.", polish: "Przyjemna rozmowa." },
            { spanish: "Tener una charla.", polish: "Pogadać." },
            { spanish: "Charla informal.", polish: "Nieformalna rozmowa." }
        ]
    },
    {
        id: 314,
        spanish: "pájaro",
        polish: "ptak",
        description: "Rzeczownik oznaczający zwierzę latające",
        examples: [
            { spanish: "Un pájaro canta.", polish: "Ptak śpiewa." },
            { spanish: "Pájaros en el árbol.", polish: "Ptaki na drzewie." },
            { spanish: "Pájaro azul.", polish: "Niebieski ptak." }
        ]
    },
    {
        id: 315,
        spanish: "pronto",
        polish: "wkrótce, szybko",
        description: "Przysłówek czasu oznaczający bliskość",
        examples: [
            { spanish: "Hasta pronto.", polish: "Do zobaczenia wkrótce." },
            { spanish: "Volveré pronto.", polish: "Wrócę wkrótce." },
            { spanish: "Lo más pronto posible.", polish: "Jak najszybciej." }
        ]
    },
    {
        id: 316,
        spanish: "cuerpo",
        polish: "ciało",
        description: "Rzeczownik oznaczający fizyczną formę",
        examples: [
            { spanish: "El cuerpo humano.", polish: "Ciało ludzkie." },
            { spanish: "Cuidar el cuerpo.", polish: "Dbać o ciało." },
            { spanish: "Cuerpo sano.", polish: "Zdrowe ciało." }
        ]
    },
    {
        id: 317,
        spanish: "perro",
        polish: "pies",
        description: "Rzeczownik oznaczający zwierzę domowe",
        examples: [
            { spanish: "Tengo un perro.", polish: "Mam psa." },
            { spanish: "El perro ladra.", polish: "Pies szczeka." },
            { spanish: "Perro grande.", polish: "Duży pies." }
        ]
    },
    {
        id: 318,
        spanish: "familia",
        polish: "rodzina",
        description: "Rzeczownik oznaczający grupę krewnych",
        examples: [
            { spanish: "Mi familia.", polish: "Moja rodzina." },
            { spanish: "Familia grande.", polish: "Duża rodzina." },
            { spanish: "Amor de familia.", polish: "Miłość rodzinna." }
        ]
    },
    {
        id: 319,
        spanish: "directa - directo",
        polish: "bezpośredni, bezpośrednia",
        description: "Przymiotnik oznaczający prostą drogę",
        examples: [
            { spanish: "Vuelo directo.", polish: "Lot bezpośredni." },
            { spanish: "Respuesta directa.", polish: "Bezpośrednia odpowiedź." },
            { spanish: "Ir directo.", polish: "Iść prosto." }
        ]
    },
    {
        id: 320,
        spanish: "plantear",
        polish: "stawiać, przedstawiać",
        description: "Czasownik oznaczający prezentację problemu",
        examples: [
            { spanish: "Plantear una pregunta.", polish: "Postawić pytanie." },
            { spanish: "Plantear un problema.", polish: "Przedstawić problem." },
            { spanish: "Plantear dudas.", polish: "Zgłosić wątpliwości." }
        ]
    },
    {
        id: 321,
        spanish: "dejar",
        polish: "wyjechać, opuścić",
        description: "Czasownik oznaczający odejście",
        examples: [
            { spanish: "Voy a dejar la ciudad.", polish: "Opuszczę miasto." },
            { spanish: "Dejar el trabajo.", polish: "Odejść z pracy." },
            { spanish: "No quiero dejar.", polish: "Nie chcę wyjeżdżać." }
        ]
    },
    {
        id: 322,
        spanish: "canción",
        polish: "piosenka",
        description: "Rzeczownik oznaczający utwór muzyczny",
        examples: [
            { spanish: "Una canción bonita.", polish: "Piękna piosenka." },
            { spanish: "Cantar una canción.", polish: "Zaśpiewać piosenkę." },
            { spanish: "Mi canción favorita.", polish: "Moja ulubiona piosenka." }
        ]
    },
    {
        id: 323,
        spanish: "medir",
        polish: "mierzyć",
        description: "Czasownik oznaczający określanie wielkości",
        examples: [
            { spanish: "Medir la distancia.", polish: "Zmierzyć odległość." },
            { spanish: "Medir la temperatura.", polish: "Zmierzyć temperaturę." },
            { spanish: "¿Cuánto mide?", polish: "Ile to mierzy?" }
        ]
    },
    {
        id: 324,
        spanish: "puerta",
        polish: "drzwi",
        description: "Rzeczownik oznaczający wejście",
        examples: [
            { spanish: "Abre la puerta.", polish: "Otwórz drzwi." },
            { spanish: "La puerta está cerrada.", polish: "Drzwi są zamknięte." },
            { spanish: "Puerta principal.", polish: "Główne drzwi." }
        ]
    },
    {
        id: 325,
        spanish: "producto",
        polish: "produkt",
        description: "Rzeczownik oznaczający towar",
        examples: [
            { spanish: "Comprar productos.", polish: "Kupować produkty." },
            { spanish: "Producto nuevo.", polish: "Nowy produkt." },
            { spanish: "Producto de calidad.", polish: "Produkt wysokiej jakości." }
        ]
    },
    {
        id: 326,
        spanish: "negro - negra",
        polish: "czarny, czarna",
        description: "Przymiotnik oznaczający kolor",
        examples: [
            { spanish: "Gato negro.", polish: "Czarny kot." },
            { spanish: "Ropa negra.", polish: "Czarne ubranie." },
            { spanish: "Noche negra.", polish: "Czarna noc." }
        ]
    },
    {
        id: 327,
        spanish: "corto - corta",
        polish: "krótki, krótka",
        description: "Przymiotnik oznaczający małą długość",
        examples: [
            { spanish: "Pelo corto.", polish: "Krótkie włosy." },
            { spanish: "Camino corto.", polish: "Krótka droga." },
            { spanish: "Tiempo corto.", polish: "Krótki czas." }
        ]
    },
    {
        id: 328,
        spanish: "numeral",
        polish: "liczebnik",
        description: "Rzeczownik oznaczający liczbę",
        examples: [
            { spanish: "Numeral cardinal.", polish: "Liczebnik główny." },
            { spanish: "Escribir numerales.", polish: "Pisać liczebniki." },
            { spanish: "Sistema numeral.", polish: "System liczbowy." }
        ]
    },
    {
        id: 329,
        spanish: "clase",
        polish: "klasa, lekcja",
        description: "Rzeczownik oznaczający zajęcia lub kategorię",
        examples: [
            { spanish: "Voy a clase.", polish: "Idę na lekcję." },
            { spanish: "Primera clase.", polish: "Pierwsza klasa." },
            { spanish: "Clase de español.", polish: "Lekcja hiszpańskiego." }
        ]
    },
    {
        id: 330,
        spanish: "viento",
        polish: "wiatr",
        description: "Rzeczownik oznaczający ruch powietrza",
        examples: [
            { spanish: "Hace viento.", polish: "Wieje wiatr." },
            { spanish: "Viento fuerte.", polish: "Silny wiatr." },
            { spanish: "Contra el viento.", polish: "Pod wiatr." }
        ]
    },
    {
        id: 331,
        spanish: "pregunta",
        polish: "pytanie",
        description: "Rzeczownik oznaczający zapytanie",
        examples: [
            { spanish: "Tengo una pregunta.", polish: "Mam pytanie." },
            { spanish: "Hacer una pregunta.", polish: "Zadać pytanie." },
            { spanish: "Pregunta difícil.", polish: "Trudne pytanie." }
        ]
    },
    {
        id: 332,
        spanish: "suceder",
        polish: "zdarzać się, dziać się",
        description: "Czasownik oznaczający występowanie wydarzeń",
        examples: [
            { spanish: "¿Qué sucede?", polish: "Co się dzieje?" },
            { spanish: "Puede suceder.", polish: "Może się zdarzyć." },
            { spanish: "Sucedió ayer.", polish: "Zdarzyło się wczoraj." }
        ]
    },
    {
        id: 333,
        spanish: "completo - completa",
        polish: "kompletny, pełny",
        description: "Przymiotnik oznaczający całość",
        examples: [
            { spanish: "Trabajo completo.", polish: "Pełna praca." },
            { spanish: "Nombre completo.", polish: "Pełne imię." },
            { spanish: "Está completo.", polish: "Jest kompletne." }
        ]
    },
    {
        id: 334,
        spanish: "buque",
        polish: "statek",
        description: "Rzeczownik oznaczający duży pojazd wodny",
        examples: [
            { spanish: "Un buque grande.", polish: "Duży statek." },
            { spanish: "Buque de guerra.", polish: "Okręt wojenny." },
            { spanish: "Viajar en buque.", polish: "Podróżować statkiem." }
        ]
    },
    {
        id: 335,
        spanish: "zona",
        polish: "strefa, obszar",
        description: "Rzeczownik oznaczający region",
        examples: [
            { spanish: "Zona peligrosa.", polish: "Niebezpieczna strefa." },
            { spanish: "Esta zona.", polish: "Ten obszar." },
            { spanish: "Zona verde.", polish: "Teren zielony." }
        ]
    },
    {
        id: 336,
        spanish: "medio - media",
        polish: "połowa, pół",
        description: "Rzeczownik lub przymiotnik oznaczający połowę",
        examples: [
            { spanish: "Media hora.", polish: "Pół godziny." },
            { spanish: "En medio.", polish: "W środku." },
            { spanish: "Medio día.", polish: "Południe." }
        ]
    },
    {
        id: 337,
        spanish: "roca",
        polish: "skała",
        description: "Rzeczownik oznaczający kamienną formację",
        examples: [
            { spanish: "Una roca grande.", polish: "Duża skała." },
            { spanish: "Roca dura.", polish: "Twarda skała." },
            { spanish: "Escalar la roca.", polish: "Wspinać się na skałę." }
        ]
    },
    {
        id: 338,
        spanish: "orden",
        polish: "porządek, rozkaz",
        description: "Rzeczownik oznaczający układ lub polecenie",
        examples: [
            { spanish: "Orden alfabético.", polish: "Porządek alfabetyczny." },
            { spanish: "Dar una orden.", polish: "Wydać rozkaz." },
            { spanish: "En orden.", polish: "W porządku." }
        ]
    },
    {
        id: 339,
        spanish: "fuego",
        polish: "ogień",
        description: "Rzeczownik oznaczający płomienie",
        examples: [
            { spanish: "Hacer fuego.", polish: "Rozpalić ogień." },
            { spanish: "Fuego caliente.", polish: "Gorący ogień." },
            { spanish: "¡Fuego!", polish: "Ogień! (Pali się!)" }
        ]
    },
    {
        id: 340,
        spanish: "sur",
        polish: "południe",
        description: "Rzeczownik oznaczający kierunek",
        examples: [
            { spanish: "Al sur de España.", polish: "Na południu Hiszpanii." },
            { spanish: "Viento del sur.", polish: "Wiatr południowy." },
            { spanish: "Hacia el sur.", polish: "W kierunku południowym." }
        ]
    },
    {
        id: 341,
        spanish: "problema",
        polish: "problem",
        description: "Rzeczownik oznaczający trudność",
        examples: [
            { spanish: "Tengo un problema.", polish: "Mam problem." },
            { spanish: "Resolver el problema.", polish: "Rozwiązać problem." },
            { spanish: "Problema grave.", polish: "Poważny problem." }
        ]
    },
    {
        id: 342,
        spanish: "pieza",
        polish: "część, kawałek",
        description: "Rzeczownik oznaczający fragment",
        examples: [
            { spanish: "Una pieza del puzzle.", polish: "Część układanki." },
            { spanish: "Pieza de música.", polish: "Utwór muzyczny." },
            { spanish: "Pieza importante.", polish: "Ważna część." }
        ]
    },
    {
        id: 343,
        spanish: "dicho",
        polish: "powiedzenie",
        description: "Rzeczownik oznaczający przysłowie",
        examples: [
            { spanish: "Un dicho popular.", polish: "Popularne powiedzenie." },
            { spanish: "Como dice el dicho.", polish: "Jak mówi przysłowie." },
            { spanish: "Dicho antiguo.", polish: "Stare powiedzenie." }
        ]
    },
    {
        id: 344,
        spanish: "sabía",
        polish: "wiedział, wiedziała",
        description: "Czas przeszły niedokonany czasownika 'saber'",
        examples: [
            { spanish: "Yo sabía la verdad.", polish: "Wiedziałem prawdę." },
            { spanish: "Ella sabía todo.", polish: "Ona wiedziała wszystko." },
            { spanish: "No sabía nada.", polish: "Nic nie wiedziałem." }
        ]
    },
    {
        id: 345,
        spanish: "pasar",
        polish: "przechodzić, mijać",
        description: "Czasownik oznaczający przemieszczanie się lub upływ czasu",
        examples: [
            { spanish: "Pasar por aquí.", polish: "Przechodzić tędy." },
            { spanish: "El tiempo pasa.", polish: "Czas mija." },
            { spanish: "¿Qué pasa?", polish: "Co się dzieje?" }
        ]
    },
    {
        id: 346,
        spanish: "desde",
        polish: "odkąd",
        description: "Przyimek lub spójnik czasu",
        examples: [
            { spanish: "Desde que llegué.", polish: "Odkąd przyjechałem." },
            { spanish: "Desde entonces.", polish: "Od tamtej pory." },
            { spanish: "Desde siempre.", polish: "Od zawsze." }
        ]
    },
    {
        id: 347,
        spanish: "cima",
        polish: "szczyt, wierzchołek",
        description: "Rzeczownik oznaczający najwyższy punkt",
        examples: [
            { spanish: "La cima de la montaña.", polish: "Szczyt góry." },
            { spanish: "Llegar a la cima.", polish: "Dotrzeć na szczyt." },
            { spanish: "En la cima.", polish: "Na szczycie." }
        ]
    },
    {
        id: 348,
        spanish: "todo - toda",
        polish: "cały, cała",
        description: "Przymiotnik oznaczający całość",
        examples: [
            { spanish: "Todo el mundo.", polish: "Cały świat." },
            { spanish: "Toda la noche.", polish: "Całą noc." },
            { spanish: "Todo el tiempo.", polish: "Cały czas." }
        ]
    },
    {
        id: 349,
        spanish: "rey",
        polish: "król",
        description: "Rzeczownik oznaczający władcę",
        examples: [
            { spanish: "El rey de España.", polish: "Król Hiszpanii." },
            { spanish: "Rey y reina.", polish: "Król i królowa." },
            { spanish: "Palacio del rey.", polish: "Pałac króla." }
        ]
    },
    {
        id: 350,
        spanish: "calle",
        polish: "ulica",
        description: "Rzeczownik oznaczający drogę miejską",
        examples: [
            { spanish: "Vivo en esta calle.", polish: "Mieszkam na tej ulicy." },
            { spanish: "Calle principal.", polish: "Główna ulica." },
            { spanish: "Cruzar la calle.", polish: "Przejść przez ulicę." }
        ]
    },
    {
        id: 351,
        spanish: "pulgadas",
        polish: "cal, cale",
        description: "Rzeczownik oznaczający jednostkę miary",
        examples: [
            { spanish: "Mide 10 pulgadas.", polish: "Ma 10 cali." },
            { spanish: "Televisión de 50 pulgadas.", polish: "Telewizor 50-calowy." },
            { spanish: "Una pulgada.", polish: "Jeden cal." }
        ]
    },
    {
        id: 352,
        spanish: "multiplicar",
        polish: "mnożyć",
        description: "Czasownik oznaczający operację matematyczną",
        examples: [
            { spanish: "Multiplicar por dos.", polish: "Mnożyć przez dwa." },
            { spanish: "Saber multiplicar.", polish: "Umieć mnożyć." },
            { spanish: "Multiplicar números.", polish: "Mnożyć liczby." }
        ]
    },
    {
        id: 353,
        spanish: "nada",
        polish: "nic",
        description: "Zaimek przeczący",
        examples: [
            { spanish: "No tengo nada.", polish: "Nie mam nic." },
            { spanish: "Nada más.", polish: "Nic więcej." },
            { spanish: "De nada.", polish: "Nie ma za co." }
        ]
    },
    {
        id: 354,
        spanish: "curso",
        polish: "kurs, bieg",
        description: "Rzeczownik oznaczający zajęcia lub przebieg",
        examples: [
            { spanish: "Curso de español.", polish: "Kurs hiszpańskiego." },
            { spanish: "En curso.", polish: "W toku." },
            { spanish: "Curso académico.", polish: "Rok akademicki." }
        ]
    },
    {
        id: 355,
        spanish: "quedarse",
        polish: "zostać, pozostać",
        description: "Czasownik oznaczający pozostanie w miejscu",
        examples: [
            { spanish: "Me quedo aquí.", polish: "Zostaję tutaj." },
            { spanish: "Quédate conmigo.", polish: "Zostań ze mną." },
            { spanish: "Se quedó en casa.", polish: "Został w domu." }
        ]
    },
    {
        id: 356,
        spanish: "rueda",
        polish: "koło",
        description: "Rzeczownik oznaczający okrągły obiekt",
        examples: [
            { spanish: "Rueda del coche.", polish: "Koło samochodu." },
            { spanish: "La rueda gira.", polish: "Koło się kręci." },
            { spanish: "Rueda grande.", polish: "Duże koło." }
        ]
    },
    {
        id: 357,
        spanish: "completo - completa",
        polish: "pełny, pełna",
        description: "Przymiotnik oznaczający całość",
        examples: [
            { spanish: "Día completo.", polish: "Pełny dzień." },
            { spanish: "Trabajo a tiempo completo.", polish: "Praca na pełen etat." },
            { spanish: "Historia completa.", polish: "Pełna historia." }
        ]
    },
    {
        id: 358,
        spanish: "fuerza",
        polish: "siła",
        description: "Rzeczownik oznaczający moc",
        examples: [
            { spanish: "Mucha fuerza.", polish: "Dużo siły." },
            { spanish: "Fuerza física.", polish: "Siła fizyczna." },
            { spanish: "Con fuerza.", polish: "Z siłą." }
        ]
    },
    {
        id: 359,
        spanish: "azul",
        polish: "niebieski",
        description: "Przymiotnik oznaczający kolor",
        examples: [
            { spanish: "Cielo azul.", polish: "Niebieskie niebo." },
            { spanish: "Ojos azules.", polish: "Niebieskie oczy." },
            { spanish: "Color azul.", polish: "Kolor niebieski." }
        ]
    },
    {
        id: 360,
        spanish: "objeto",
        polish: "obiekt, przedmiot",
        description: "Rzeczownik oznaczający rzecz",
        examples: [
            { spanish: "Un objeto extraño.", polish: "Dziwny przedmiot." },
            { spanish: "Objeto perdido.", polish: "Zgubiony przedmiot." },
            { spanish: "El objeto principal.", polish: "Główny obiekt." }
        ]
    },
    {
        id: 361,
        spanish: "decidir",
        polish: "decydować",
        description: "Czasownik oznaczający podejmowanie decyzji",
        examples: [
            { spanish: "Voy a decidir.", polish: "Zdecyduję." },
            { spanish: "¿Qué decides?", polish: "Co postanawiasz?" },
            { spanish: "Es difícil decidir.", polish: "Trudno się zdecydować." }
        ]
    },
    {
        id: 362,
        spanish: "superficie",
        polish: "powierzchnia",
        description: "Rzeczownik oznaczający zewnętrzną warstwę",
        examples: [
            { spanish: "Superficie plana.", polish: "Płaska powierzchnia." },
            { spanish: "La superficie del agua.", polish: "Powierzchnia wody." },
            { spanish: "Superficie grande.", polish: "Duża powierzchnia." }
        ]
    },
    {
        id: 363,
        spanish: "profunda - profundo",
        polish: "głęboki, głęboka",
        description: "Przymiotnik oznaczający dużą głębokość",
        examples: [
            { spanish: "Agua profunda.", polish: "Głęboka woda." },
            { spanish: "Pensamiento profundo.", polish: "Głęboka myśl." },
            { spanish: "Es muy profundo.", polish: "Jest bardzo głębokie." }
        ]
    },
    {
        id: 364,
        spanish: "luna",
        polish: "księżyc",
        description: "Rzeczownik oznaczający satelitę Ziemi",
        examples: [
            { spanish: "La luna brilla.", polish: "Księżyc świeci." },
            { spanish: "Luna llena.", polish: "Pełnia księżyca." },
            { spanish: "Luz de luna.", polish: "Światło księżyca." }
        ]
    },
    {
        id: 365,
        spanish: "isla",
        polish: "wyspa",
        description: "Rzeczownik oznaczający ląd otoczony wodą",
        examples: [
            { spanish: "Una isla tropical.", polish: "Tropikalna wyspa." },
            { spanish: "Vivir en una isla.", polish: "Mieszkać na wyspie." },
            { spanish: "Isla bonita.", polish: "Piękna wyspa." }
        ]
    },
    {
        id: 366,
        spanish: "pie",
        polish: "stopa (miara)",
        description: "Rzeczownik oznaczający jednostkę długości",
        examples: [
            { spanish: "Mide seis pies.", polish: "Mierzy sześć stóp." },
            { spanish: "A pie.", polish: "Pieszo." },
            { spanish: "Pie cuadrado.", polish: "Stopa kwadratowa." }
        ]
    },
    {
        id: 367,
        spanish: "sistema",
        polish: "system",
        description: "Rzeczownik oznaczający zorganizowaną strukturę",
        examples: [
            { spanish: "Sistema operativo.", polish: "System operacyjny." },
            { spanish: "Sistema solar.", polish: "Układ słoneczny." },
            { spanish: "Un buen sistema.", polish: "Dobry system." }
        ]
    },
    {
        id: 368,
        spanish: "ocupado - ocupada",
        polish: "zajęty, zajęta",
        description: "Przymiotnik oznaczający brak czasu",
        examples: [
            { spanish: "Estoy ocupado.", polish: "Jestem zajęty." },
            { spanish: "Línea ocupada.", polish: "Linia zajęta." },
            { spanish: "Muy ocupado.", polish: "Bardzo zajęty." }
        ]
    },
    {
        id: 369,
        spanish: "prueba",
        polish: "próba, test",
        description: "Rzeczownik oznaczający sprawdzian",
        examples: [
            { spanish: "Hacer una prueba.", polish: "Przeprowadzić test." },
            { spanish: "Prueba de matemáticas.", polish: "Test z matematyki." },
            { spanish: "Prueba difícil.", polish: "Trudna próba." }
        ]
    },
    {
        id: 370,
        spanish: "registro",
        polish: "rejestr, zapis",
        description: "Rzeczownik oznaczający ewidencję",
        examples: [
            { spanish: "Llevar un registro.", polish: "Prowadzić rejestr." },
            { spanish: "Registro oficial.", polish: "Oficjalny rejestr." },
            { spanish: "Registro de datos.", polish: "Rejestr danych." }
        ]
    },
    {
        id: 371,
        spanish: "barco",
        polish: "łódź, statek",
        description: "Rzeczownik oznaczający pojazd wodny",
        examples: [
            { spanish: "Viajar en barco.", polish: "Podróżować łodzią." },
            { spanish: "Un barco grande.", polish: "Duży statek." },
            { spanish: "Barco de pesca.", polish: "Łódź rybacka." }
        ]
    },
    {
        id: 372,
        spanish: "común",
        polish: "wspólny, powszechny",
        description: "Przymiotnik oznaczający zwyczajność",
        examples: [
            { spanish: "Interés común.", polish: "Wspólny interes." },
            { spanish: "Es muy común.", polish: "To bardzo powszechne." },
            { spanish: "Sentido común.", polish: "Zdrowy rozsądek." }
        ]
    },
    {
        id: 373,
        spanish: "oro",
        polish: "złoto",
        description: "Rzeczownik oznaczający metal szlachetny",
        examples: [
            { spanish: "Anillo de oro.", polish: "Złoty pierścionek." },
            { spanish: "Oro puro.", polish: "Czyste złoto." },
            { spanish: "Medalla de oro.", polish: "Złoty medal." }
        ]
    },
    {
        id: 374,
        spanish: "posible",
        polish: "możliwy",
        description: "Przymiotnik oznaczający wykonalność",
        examples: [
            { spanish: "Es posible.", polish: "To możliwe." },
            { spanish: "Todo es posible.", polish: "Wszystko jest możliwe." },
            { spanish: "Lo más posible.", polish: "Najbardziej jak to możliwe." }
        ]
    },
    {
        id: 375,
        spanish: "plano",
        polish: "płaski, plan",
        description: "Przymiotnik lub rzeczownik oznaczający płaską powierzchnię lub mapę",
        examples: [
            { spanish: "Superficie plana.", polish: "Płaska powierzchnia." },
            { spanish: "Plano de la ciudad.", polish: "Plan miasta." },
            { spanish: "Terreno plano.", polish: "Płaski teren." }
        ]
    },
    {
        id: 376,
        spanish: "lugar",
        polish: "miejsce zamiast",
        description: "Rzeczownik w znaczeniu zastępstwa",
        examples: [
            { spanish: "En lugar de eso.", polish: "Zamiast tego." },
            { spanish: "En su lugar.", polish: "W jego miejsce." },
            { spanish: "Tomar el lugar.", polish: "Zająć miejsce." }
        ]
    },
    {
        id: 377,
        spanish: "seco - seca",
        polish: "suchy, sucha",
        description: "Przymiotnik oznaczający brak wilgoci",
        examples: [
            { spanish: "Tierra seca.", polish: "Sucha ziemia." },
            { spanish: "Ropa seca.", polish: "Suche ubranie." },
            { spanish: "Clima seco.", polish: "Suchy klimat." }
        ]
    },
    {
        id: 378,
        spanish: "maravilla",
        polish: "cud, cudo",
        description: "Rzeczownik oznaczający coś cudownego",
        examples: [
            { spanish: "Es una maravilla.", polish: "To cud." },
            { spanish: "Maravillas del mundo.", polish: "Cuda świata." },
            { spanish: "¡Qué maravilla!", polish: "Jakie cudowne!" }
        ]
    },
    {
        id: 379,
        spanish: "risa",
        polish: "śmiech",
        description: "Rzeczownik oznaczający reakcję wesołą",
        examples: [
            { spanish: "Ataque de risa.", polish: "Atak śmiechu." },
            { spanish: "Risa contagiosa.", polish: "Zaraźliwy śmiech." },
            { spanish: "Me da risa.", polish: "To mnie śmieszy." }
        ]
    },
    {
        id: 380,
        spanish: "mil",
        polish: "tysiąc",
        description: "Liczebnik oznaczający 1000",
        examples: [
            { spanish: "Mil personas.", polish: "Tysiąc osób." },
            { spanish: "Dos mil.", polish: "Dwa tysiące." },
            { spanish: "Mil gracias.", polish: "Tysiąc podziękowań." }
        ]
    },
    {
        id: 381,
        spanish: "hace",
        polish: "temu",
        description: "Wyrażenie czasowe oznaczające przeszłość",
        examples: [
            { spanish: "Hace un año.", polish: "Rok temu." },
            { spanish: "Hace mucho tiempo.", polish: "Dawno temu." },
            { spanish: "Hace dos días.", polish: "Dwa dni temu." }
        ]
    },
    {
        id: 382,
        spanish: "corrió",
        polish: "biegł, biegła",
        description: "Czas przeszły czasownika 'correr'",
        examples: [
            { spanish: "Él corrió rápido.", polish: "On biegł szybko." },
            { spanish: "Corrió hacia mí.", polish: "Pobiegł do mnie." },
            { spanish: "El agua corrió.", polish: "Woda płynęła." }
        ]
    },
    {
        id: 383,
        spanish: "comprobar",
        polish: "sprawdzać",
        description: "Czasownik oznaczający weryfikację",
        examples: [
            { spanish: "Comprobar los datos.", polish: "Sprawdzić dane." },
            { spanish: "Voy a comprobar.", polish: "Sprawdzę." },
            { spanish: "Comprobar la verdad.", polish: "Zweryfikować prawdę." }
        ]
    },
    {
        id: 384,
        spanish: "juego",
        polish: "gra, zabawa",
        description: "Rzeczownik oznaczający rozrywkę",
        examples: [
            { spanish: "Un juego divertido.", polish: "Zabawna gra." },
            { spanish: "Juego de mesa.", polish: "Gra planszowa." },
            { spanish: "Juego de niños.", polish: "Zabawa dziecięca." }
        ]
    },
    {
        id: 385,
        spanish: "forma",
        polish: "kształt",
        description: "Rzeczownik oznaczający postać",
        examples: [
            { spanish: "La forma del círculo.", polish: "Kształt koła." },
            { spanish: "Forma geométrica.", polish: "Kształt geometryczny." },
            { spanish: "Tomar forma.", polish: "Nabierać kształtu." }
        ]
    },
    {
        id: 386,
        spanish: "equiparar",
        polish: "zrównać, porównać",
        description: "Czasownik oznaczający zrównanie",
        examples: [
            { spanish: "Equiparar precios.", polish: "Zrównać ceny." },
            { spanish: "Equiparar resultados.", polish: "Porównać wyniki." },
            { spanish: "No se puede equiparar.", polish: "Nie można porównać." }
        ]
    },
    {
        id: 387,
        spanish: "caliente",
        polish: "ciepły",
        description: "Przymiotnik oznaczający podwyższoną temperaturę",
        examples: [
            { spanish: "Sopa caliente.", polish: "Ciepła zupa." },
            { spanish: "Hace caliente.", polish: "Jest ciepło." },
            { spanish: "Pan caliente.", polish: "Ciepły chleb." }
        ]
    },
    {
        id: 388,
        spanish: "señorita",
        polish: "panna",
        description: "Rzeczownik oznaczający niezamężną kobietę (forma grzecznościowa)",
        examples: [
            { spanish: "Buenos días, señorita.", polish: "Dzień dobry, panno." },
            { spanish: "La señorita López.", polish: "Panna López." },
            { spanish: "¿Señorita?", polish: "Pani?" }
        ]
    },
    {
        id: 389,
        spanish: "traído",
        polish: "przyniesiony",
        description: "Imiesłów czasu przeszłego od 'traer'",
        examples: [
            { spanish: "He traído el libro.", polish: "Przyniosłem książkę." },
            { spanish: "¿Qué has traído?", polish: "Co przyniosłeś?" },
            { spanish: "Han traído comida.", polish: "Przynieśli jedzenie." }
        ]
    },
    {
        id: 390,
        spanish: "calor",
        polish: "ciepło, gorąco",
        description: "Rzeczownik oznaczający wysoką temperaturę",
        examples: [
            { spanish: "Hace calor.", polish: "Jest gorąco." },
            { spanish: "Mucho calor.", polish: "Bardzo gorąco." },
            { spanish: "Calor del verano.", polish: "Letnie gorąco." }
        ]
    },
    {
        id: 391,
        spanish: "nieve",
        polish: "śnieg",
        description: "Rzeczownik oznaczający opad atmosferyczny",
        examples: [
            { spanish: "Cae nieve.", polish: "Pada śnieg." },
            { spanish: "Nieve blanca.", polish: "Biały śnieg." },
            { spanish: "Jugar con nieve.", polish: "Bawić się śniegiem." }
        ]
    },
    {
        id: 392,
        spanish: "neumáticos",
        polish: "opony",
        description: "Rzeczownik w liczbie mnogiej oznaczający części samochodu",
        examples: [
            { spanish: "Cambiar neumáticos.", polish: "Zmienić opony." },
            { spanish: "Neumáticos nuevos.", polish: "Nowe opony." },
            { spanish: "Presión de neumáticos.", polish: "Ciśnienie w oponach." }
        ]
    },
    {
        id: 393,
        spanish: "traer",
        polish: "przynosić",
        description: "Czasownik oznaczający przynoszenie",
        examples: [
            { spanish: "Trae el libro.", polish: "Przynieś książkę." },
            { spanish: "Voy a traer comida.", polish: "Przyniosę jedzenie." },
            { spanish: "¿Qué traes?", polish: "Co przynosisz?" }
        ]
    },
    {
        id: 394,
        spanish: "sí",
        polish: "tak",
        description: "Przysłówek potwierdzający",
        examples: [
            { spanish: "Sí, quiero.", polish: "Tak, chcę." },
            { spanish: "¡Sí!", polish: "Tak!" },
            { spanish: "Digo que sí.", polish: "Mówię, że tak." }
        ]
    },
    {
        id: 395,
        spanish: "distante",
        polish: "odległy",
        description: "Przymiotnik oznaczający dużą odległość",
        examples: [
            { spanish: "Lugar distante.", polish: "Odległe miejsce." },
            { spanish: "Muy distante.", polish: "Bardzo odległy." },
            { spanish: "País distante.", polish: "Odległy kraj." }
        ]
    },
    {
        id: 396,
        spanish: "llenar",
        polish: "napełniać",
        description: "Czasownik oznaczający wypełnianie",
        examples: [
            { spanish: "Llenar el vaso.", polish: "Napełnić szklankę." },
            { spanish: "Llenar el formulario.", polish: "Wypełnić formularz." },
            { spanish: "Está lleno.", polish: "Jest pełne." }
        ]
    },
    {
        id: 397,
        spanish: "al este",
        polish: "na wschód",
        description: "Wyrażenie oznaczające kierunek",
        examples: [
            { spanish: "Viajar al este.", polish: "Podróżować na wschód." },
            { spanish: "Al este de Madrid.", polish: "Na wschód od Madrytu." },
            { spanish: "Ir al este.", polish: "Iść na wschód." }
        ]
    },
    {
        id: 398,
        spanish: "pintar",
        polish: "malować",
        description: "Czasownik oznaczający nanoszenie farby",
        examples: [
            { spanish: "Pintar la casa.", polish: "Malować dom." },
            { spanish: "Me gusta pintar.", polish: "Lubię malować." },
            { spanish: "Pintar un cuadro.", polish: "Namalować obraz." }
        ]
    },
    {
        id: 399,
        spanish: "idioma",
        polish: "język",
        description: "Rzeczownik oznaczający system komunikacji",
        examples: [
            { spanish: "Aprender un idioma.", polish: "Uczyć się języka." },
            { spanish: "Idioma español.", polish: "Język hiszpański." },
            { spanish: "Hablar idiomas.", polish: "Mówić językami." }
        ]
    },
    {
        id: 400,
        spanish: "entre",
        polish: "pomiędzy, wśród",
        description: "Przyimek oznaczający pozycję w grupie",
        examples: [
            { spanish: "Entre amigos.", polish: "Wśród przyjaciół." },
            { spanish: "Entre nosotros.", polish: "Między nami." },
            { spanish: "Elegir entre dos.", polish: "Wybrać spośród dwóch." }
        ]
    },
    {
        id: 401,
        spanish: "unidad",
        polish: "jednostka, jedność",
        description: "Rzeczownik oznaczający całość lub element systemu",
        examples: [
            { spanish: "Una unidad de medida.", polish: "Jednostka miary." },
            { spanish: "La unidad familiar.", polish: "Jedność rodzinna." },
            { spanish: "Trabajar en unidad.", polish: "Pracować w jedności." }
        ]
    },
    {
        id: 402,
        spanish: "potencia",
        polish: "moc, potęga",
        description: "Rzeczownik oznaczający siłę lub wpływ",
        examples: [
            { spanish: "La potencia del motor.", polish: "Moc silnika." },
            { spanish: "Una gran potencia.", polish: "Wielka potęga." },
            { spanish: "Potencia mundial.", polish: "Światowa potęga." }
        ]
    },
    {
        id: 403,
        spanish: "ciudad",
        polish: "miasto",
        description: "Rzeczownik oznaczający dużą miejscowość",
        examples: [
            { spanish: "Vivo en la ciudad.", polish: "Mieszkam w mieście." },
            { spanish: "Una ciudad grande.", polish: "Duże miasto." },
            { spanish: "Centro de la ciudad.", polish: "Centrum miasta." }
        ]
    },
    {
        id: 404,
        spanish: "fina - fino",
        polish: "cienki, delikatny",
        description: "Przymiotnik oznaczający niewielką grubość",
        examples: [
            { spanish: "Una línea fina.", polish: "Cienka linia." },
            { spanish: "Papel fino.", polish: "Cienki papier." },
            { spanish: "Trabajo fino.", polish: "Delikatna praca." }
        ]
    },
    {
        id: 405,
        spanish: "cierto - cierta",
        polish: "pewny, pewien",
        description: "Przymiotnik oznaczający pewność lub określoną ilość",
        examples: [
            { spanish: "Es cierto.", polish: "To prawda." },
            { spanish: "Cierta cantidad.", polish: "Pewna ilość." },
            { spanish: "En cierto modo.", polish: "W pewien sposób." }
        ]
    },
    {
        id: 406,
        spanish: "volar",
        polish: "latać",
        description: "Czasownik oznaczający poruszanie się w powietrzu",
        examples: [
            { spanish: "Los pájaros vuelan.", polish: "Ptaki latają." },
            { spanish: "Volar en avión.", polish: "Lecieć samolotem." },
            { spanish: "Me gusta volar.", polish: "Lubię latać." }
        ]
    },
    {
        id: 407,
        spanish: "caer",
        polish: "spadać, upaść",
        description: "Czasownik oznaczający ruch w dół",
        examples: [
            { spanish: "Caer al suelo.", polish: "Upaść na ziemię." },
            { spanish: "La lluvia cae.", polish: "Pada deszcz." },
            { spanish: "No quiero caer.", polish: "Nie chcę upaść." }
        ]
    },
    {
        id: 408,
        spanish: "conducir",
        polish: "prowadzić, kierować",
        description: "Czasownik oznaczający sterowanie pojazdem lub prowadzenie",
        examples: [
            { spanish: "Conducir un coche.", polish: "Prowadzić samochód." },
            { spanish: "Sabe conducir.", polish: "Umie prowadzić." },
            { spanish: "Conducir a casa.", polish: "Jechać do domu." }
        ]
    },
    {
        id: 409,
        spanish: "grito",
        polish: "krzyk",
        description: "Rzeczownik oznaczający głośny okrzyk",
        examples: [
            { spanish: "Un grito de dolor.", polish: "Krzyk bólu." },
            { spanish: "Dar un grito.", polish: "Wydać krzyk." },
            { spanish: "Oír un grito.", polish: "Usłyszeć krzyk." }
        ]
    },
    {
        id: 410,
        spanish: "oscuro - oscura",
        polish: "ciemny",
        description: "Przymiotnik oznaczający brak światła",
        examples: [
            { spanish: "Un cuarto oscuro.", polish: "Ciemny pokój." },
            { spanish: "Color oscuro.", polish: "Ciemny kolor." },
            { spanish: "Está oscuro afuera.", polish: "Jest ciemno na zewnątrz." }
        ]
    },
    {
        id: 411,
        spanish: "máquina",
        polish: "maszyna",
        description: "Rzeczownik oznaczający urządzenie mechaniczne",
        examples: [
            { spanish: "Una máquina de coser.", polish: "Maszyna do szycia." },
            { spanish: "La máquina funciona.", polish: "Maszyna działa." },
            { spanish: "Reparar la máquina.", polish: "Naprawić maszynę." }
        ]
    },
    {
        id: 412,
        spanish: "nota",
        polish: "notatka, ocena",
        description: "Rzeczownik oznaczający zapis lub stopień",
        examples: [
            { spanish: "Tomar notas.", polish: "Robić notatki." },
            { spanish: "Una buena nota.", polish: "Dobra ocena." },
            { spanish: "Dejar una nota.", polish: "Zostawić notatkę." }
        ]
    },
    {
        id: 413,
        spanish: "esperar",
        polish: "czekać, spodziewać się",
        description: "Czasownik oznaczający oczekiwanie",
        examples: [
            { spanish: "Esperar el autobús.", polish: "Czekać na autobus." },
            { spanish: "Espero que sí.", polish: "Mam nadzieję, że tak." },
            { spanish: "No puedo esperar.", polish: "Nie mogę się doczekać." }
        ]
    },
    {
        id: 414,
        spanish: "plan",
        polish: "plan",
        description: "Rzeczownik oznaczający zamierzenie lub projekt",
        examples: [
            { spanish: "Hacer un plan.", polish: "Stworzyć plan." },
            { spanish: "El plan funciona.", polish: "Plan działa." },
            { spanish: "Cambiar de plan.", polish: "Zmienić plan." }
        ]
    },
    {
        id: 415,
        spanish: "figura",
        polish: "figura, postać",
        description: "Rzeczownik oznaczający kształt lub osobę",
        examples: [
            { spanish: "Una figura geométrica.", polish: "Figura geometryczna." },
            { spanish: "Figura importante.", polish: "Ważna postać." },
            { spanish: "Mantener la figura.", polish: "Zachować figurę." }
        ]
    },
    {
        id: 416,
        spanish: "estrella",
        polish: "gwiazda",
        description: "Rzeczownik oznaczający ciało niebieskie lub gwiazdę",
        examples: [
            { spanish: "Las estrellas brillan.", polish: "Gwiazdy świecą." },
            { spanish: "Una estrella de cine.", polish: "Gwiazda filmowa." },
            { spanish: "Mirar las estrellas.", polish: "Patrzeć na gwiazdy." }
        ]
    },
    {
        id: 417,
        spanish: "caja",
        polish: "pudełko, skrzynka",
        description: "Rzeczownik oznaczający pojemnik",
        examples: [
            { spanish: "Una caja de cartón.", polish: "Kartonowe pudełko." },
            { spanish: "Abrir la caja.", polish: "Otworzyć pudełko." },
            { spanish: "Caja registradora.", polish: "Kasa fiskalna." }
        ]
    },
    {
        id: 418,
        spanish: "sustantivo",
        polish: "rzeczownik",
        description: "Rzeczownik gramatyczny oznaczający część mowy",
        examples: [
            { spanish: "Es un sustantivo.", polish: "To jest rzeczownik." },
            { spanish: "Sustantivo común.", polish: "Rzeczownik pospolity." },
            { spanish: "Usar sustantivos.", polish: "Używać rzeczowników." }
        ]
    },
    {
        id: 419,
        spanish: "campo",
        polish: "pole, dziedzina",
        description: "Rzeczownik oznaczający obszar lub specjalizację",
        examples: [
            { spanish: "Trabajar en el campo.", polish: "Pracować w polu." },
            { spanish: "Campo de estudio.", polish: "Dziedzina studiów." },
            { spanish: "Campo de fútbol.", polish: "Boisko piłkarskie." }
        ]
    },
    {
        id: 420,
        spanish: "resto",
        polish: "reszta, pozostałość",
        description: "Rzeczownik oznaczający to co zostało",
        examples: [
            { spanish: "El resto del día.", polish: "Reszta dnia." },
            { spanish: "Comer el resto.", polish: "Zjeść resztę." },
            { spanish: "El resto es fácil.", polish: "Reszta jest łatwa." }
        ]
    },
    {
        id: 421,
        spanish: "correcta - correcto",
        polish: "poprawny",
        description: "Przymiotnik oznaczający zgodność z normą",
        examples: [
            { spanish: "Respuesta correcta.", polish: "Poprawna odpowiedź." },
            { spanish: "Es correcto.", polish: "To jest poprawne." },
            { spanish: "Forma correcta.", polish: "Poprawna forma." }
        ]
    },
    {
        id: 422,
        spanish: "capaz",
        polish: "zdolny, zdolna",
        description: "Przymiotnik oznaczający umiejętność",
        examples: [
            { spanish: "Es capaz de hacerlo.", polish: "Jest w stanie to zrobić." },
            { spanish: "Muy capaz.", polish: "Bardzo zdolny." },
            { spanish: "No soy capaz.", polish: "Nie jestem w stanie." }
        ]
    },
    {
        id: 423,
        spanish: "libra",
        polish: "funt",
        description: "Rzeczownik oznaczający jednostkę wagi lub waluty",
        examples: [
            { spanish: "Una libra de carne.", polish: "Funt mięsa." },
            { spanish: "Libra esterlina.", polish: "Funt szterling." },
            { spanish: "Pesa dos libras.", polish: "Waży dwa funty." }
        ]
    },
    {
        id: 424,
        spanish: "hecho",
        polish: "zrobiony, fakt",
        description: "Imiesłów lub rzeczownik oznaczający wykonanie lub wydarzenie",
        examples: [
            { spanish: "Está hecho.", polish: "Jest zrobione." },
            { spanish: "Un hecho real.", polish: "Prawdziwy fakt." },
            { spanish: "Hecho a mano.", polish: "Zrobione ręcznie." }
        ]
    },
    {
        id: 425,
        spanish: "belleza",
        polish: "piękno",
        description: "Rzeczownik oznaczający urodę",
        examples: [
            { spanish: "La belleza natural.", polish: "Naturalne piękno." },
            { spanish: "Salón de belleza.", polish: "Salon piękności." },
            { spanish: "Admirar la belleza.", polish: "Podziwiać piękno." }
        ]
    },
    {
        id: 426,
        spanish: "impulso",
        polish: "impuls, napęd",
        description: "Rzeczownik oznaczający siłę napędową",
        examples: [
            { spanish: "Actuar por impulso.", polish: "Działać pod wpływem impulsu." },
            { spanish: "Dar impulso.", polish: "Dać impuls." },
            { spanish: "Impulso inicial.", polish: "Początkowy impuls." }
        ]
    },
    {
        id: 427,
        spanish: "destacado - destacada",
        polish: "wyróżniający się",
        description: "Przymiotnik oznaczający wyjątkowość",
        examples: [
            { spanish: "Alumno destacado.", polish: "Wyróżniający się uczeń." },
            { spanish: "Papel destacado.", polish: "Wyróżniająca się rola." },
            { spanish: "Es muy destacado.", polish: "Jest bardzo wyróżniający się." }
        ]
    },
    {
        id: 428,
        spanish: "contener",
        polish: "zawierać",
        description: "Czasownik oznaczający mieścić w sobie",
        examples: [
            { spanish: "Contener agua.", polish: "Zawierać wodę." },
            { spanish: "La caja contiene libros.", polish: "Pudełko zawiera książki." },
            { spanish: "No puede contener más.", polish: "Nie może zawierać więcej." }
        ]
    },
    {
        id: 429,
        spanish: "delante",
        polish: "z przodu, przed",
        description: "Przysłówek oznaczający pozycję przednią",
        examples: [
            { spanish: "Está delante de mí.", polish: "Jest przede mną." },
            { spanish: "Caminar delante.", polish: "Iść z przodu." },
            { spanish: "Sentarse delante.", polish: "Usiąść z przodu." }
        ]
    },
    {
        id: 430,
        spanish: "enseñar",
        polish: "uczyć, pokazywać",
        description: "Czasownik oznaczający przekazywanie wiedzy",
        examples: [
            { spanish: "Enseñar español.", polish: "Uczyć hiszpańskiego." },
            { spanish: "Me enseñó el camino.", polish: "Pokazał mi drogę." },
            { spanish: "Quiero enseñarte.", polish: "Chcę cię nauczyć." }
        ]
    },
    {
        id: 431,
        spanish: "semana",
        polish: "tydzień",
        description: "Rzeczownik oznaczający okres siedmiu dni",
        examples: [
            { spanish: "La próxima semana.", polish: "Następny tydzień." },
            { spanish: "Fin de semana.", polish: "Weekend." },
            { spanish: "Una semana entera.", polish: "Cały tydzień." }
        ]
    },
    {
        id: 432,
        spanish: "último - última",
        polish: "ostatni, końcowy",
        description: "Przymiotnik oznaczający pozycję na końcu",
        examples: [
            { spanish: "El último día.", polish: "Ostatni dzień." },
            { spanish: "Por último.", polish: "Na koniec." },
            { spanish: "La última vez.", polish: "Ostatni raz." }
        ]
    },
    {
        id: 433,
        spanish: "dio",
        polish: "dał, dała",
        description: "Czasownik 'dar' w czasie przeszłym (3. osoba)",
        examples: [
            { spanish: "Me dio un regalo.", polish: "Dał mi prezent." },
            { spanish: "Ella dio permiso.", polish: "Ona dała pozwolenie." },
            { spanish: "Él dio todo.", polish: "On dał wszystko." }
        ]
    },
    {
        id: 434,
        spanish: "verde",
        polish: "zielony",
        description: "Przymiotnik oznaczający kolor",
        examples: [
            { spanish: "Color verde.", polish: "Zielony kolor." },
            { spanish: "Luz verde.", polish: "Zielone światło." },
            { spanish: "Un parque verde.", polish: "Zielony park." }
        ]
    },
    {
        id: 435,
        spanish: "oh",
        polish: "och",
        description: "Wykrzyknik wyrażający emocje",
        examples: [
            { spanish: "¡Oh, no!", polish: "Och, nie!" },
            { spanish: "¡Oh, qué bonito!", polish: "Och, jak ładne!" },
            { spanish: "Oh, entiendo.", polish: "Och, rozumiem." }
        ]
    },
    {
        id: 436,
        spanish: "rápido - rápida",
        polish: "szybki",
        description: "Przymiotnik oznaczający dużą prędkość",
        examples: [
            { spanish: "Un coche rápido.", polish: "Szybki samochód." },
            { spanish: "Caminar rápido.", polish: "Chodzić szybko." },
            { spanish: "Respuesta rápida.", polish: "Szybka odpowiedź." }
        ]
    },
    {
        id: 437,
        spanish: "desarrollar",
        polish: "rozwijać",
        description: "Czasownik oznaczający wzrost lub tworzenie",
        examples: [
            { spanish: "Desarrollar software.", polish: "Rozwijać oprogramowanie." },
            { spanish: "Desarrollar habilidades.", polish: "Rozwijać umiejętności." },
            { spanish: "El país se desarrolla.", polish: "Kraj się rozwija." }
        ]
    },
    {
        id: 438,
        spanish: "océano",
        polish: "ocean",
        description: "Rzeczownik oznaczający wielki akwen wodny",
        examples: [
            { spanish: "El océano Atlántico.", polish: "Ocean Atlantycki." },
            { spanish: "Cruzar el océano.", polish: "Przekroczyć ocean." },
            { spanish: "Agua del océano.", polish: "Woda oceanu." }
        ]
    },
    {
        id: 439,
        spanish: "caliente",
        polish: "gorący, ciepły",
        description: "Przymiotnik oznaczający wysoką temperaturę",
        examples: [
            { spanish: "Agua caliente.", polish: "Gorąca woda." },
            { spanish: "Hace caliente.", polish: "Jest gorąco." },
            { spanish: "Café caliente.", polish: "Gorąca kawa." }
        ]
    },
    {
        id: 440,
        spanish: "libre",
        polish: "wolny",
        description: "Przymiotnik oznaczający swobodę lub dostępność",
        examples: [
            { spanish: "Tiempo libre.", polish: "Wolny czas." },
            { spanish: "Ser libre.", polish: "Być wolnym." },
            { spanish: "Asiento libre.", polish: "Wolne miejsce." }
        ]
    },
    {
        id: 441,
        spanish: "minuto",
        polish: "minuta",
        description: "Rzeczownik oznaczający jednostkę czasu",
        examples: [
            { spanish: "Un minuto, por favor.", polish: "Chwileczkę, proszę." },
            { spanish: "Cinco minutos.", polish: "Pięć minut." },
            { spanish: "Espera un minuto.", polish: "Poczekaj minutę." }
        ]
    },
    {
        id: 442,
        spanish: "fuerte",
        polish: "silny, mocny",
        description: "Przymiotnik oznaczający dużą siłę",
        examples: [
            { spanish: "Un hombre fuerte.", polish: "Silny mężczyzna." },
            { spanish: "Viento fuerte.", polish: "Silny wiatr." },
            { spanish: "Café fuerte.", polish: "Mocna kawa." }
        ]
    },
    {
        id: 443,
        spanish: "especial",
        polish: "specjalny",
        description: "Przymiotnik oznaczający wyjątkowość",
        examples: [
            { spanish: "Un día especial.", polish: "Specjalny dzień." },
            { spanish: "Oferta especial.", polish: "Specjalna oferta." },
            { spanish: "Eres especial.", polish: "Jesteś wyjątkowy." }
        ]
    },
    {
        id: 444,
        spanish: "mente",
        polish: "umysł",
        description: "Rzeczownik oznaczający świadomość",
        examples: [
            { spanish: "En mi mente.", polish: "W moim umyśle." },
            { spanish: "Cambiar de mente.", polish: "Zmienić zdanie." },
            { spanish: "Mente clara.", polish: "Jasny umysł." }
        ]
    },
    {
        id: 445,
        spanish: "detrás",
        polish: "za, z tyłu",
        description: "Przysłówek oznaczający pozycję tylną",
        examples: [
            { spanish: "Detrás de la casa.", polish: "Za domem." },
            { spanish: "Mirar detrás.", polish: "Spojrzeć do tyłu." },
            { spanish: "Quedarse detrás.", polish: "Zostać z tyłu." }
        ]
    },
    {
        id: 446,
        spanish: "claro - clara",
        polish: "jasny, oczywisty",
        description: "Przymiotnik oznaczający brak ciemności lub zrozumiałość",
        examples: [
            { spanish: "Un día claro.", polish: "Jasny dzień." },
            { spanish: "Está claro.", polish: "To jest jasne." },
            { spanish: "Agua clara.", polish: "Czysta woda." }
        ]
    },
    {
        id: 447,
        spanish: "cola",
        polish: "ogon, kolejka",
        description: "Rzeczownik oznaczający tylną część lub szereg",
        examples: [
            { spanish: "La cola del perro.", polish: "Ogon psa." },
            { spanish: "Hacer cola.", polish: "Stać w kolejce." },
            { spanish: "Al final de la cola.", polish: "Na końcu kolejki." }
        ]
    },
    {
        id: 448,
        spanish: "producir",
        polish: "produkować, wytwarzać",
        description: "Czasownik oznaczający tworzenie",
        examples: [
            { spanish: "Producir alimentos.", polish: "Produkować żywność." },
            { spanish: "Producir energía.", polish: "Wytwarzać energię." },
            { spanish: "La fábrica produce coches.", polish: "Fabryka produkuje samochody." }
        ]
    },
    {
        id: 449,
        spanish: "hecho",
        polish: "fakt",
        description: "Rzeczownik oznaczający zdarzenie lub prawdę",
        examples: [
            { spanish: "Es un hecho.", polish: "To fakt." },
            { spanish: "Hecho histórico.", polish: "Fakt historyczny." },
            { spanish: "Basado en hechos.", polish: "Oparty na faktach." }
        ]
    },
    {
        id: 450,
        spanish: "espacio",
        polish: "przestrzeń, miejsce",
        description: "Rzeczownik oznaczający obszar",
        examples: [
            { spanish: "Espacio vacío.", polish: "Pusta przestrzeń." },
            { spanish: "El espacio exterior.", polish: "Przestrzeń kosmiczna." },
            { spanish: "No hay espacio.", polish: "Nie ma miejsca." }
        ]
    },
    {
        id: 451,
        spanish: "oído",
        polish: "słuch, usłyszany",
        description: "Rzeczownik lub imiesłów oznaczający zmysł lub percepcję",
        examples: [
            { spanish: "Tengo buen oído.", polish: "Mam dobry słuch." },
            { spanish: "He oído la noticia.", polish: "Usłyszałem wiadomość." },
            { spanish: "Dolor de oído.", polish: "Ból ucha." }
        ]
    },
    {
        id: 452,
        spanish: "mejor",
        polish: "najlepszy",
        description: "Przymiotnik w stopniu najwyższym",
        examples: [
            { spanish: "El mejor momento.", polish: "Najlepszy moment." },
            { spanish: "Mi mejor amigo.", polish: "Mój najlepszy przyjaciel." },
            { spanish: "Lo mejor de todo.", polish: "Najlepsze ze wszystkiego." }
        ]
    },
    {
        id: 453,
        spanish: "hora",
        polish: "godzina",
        description: "Rzeczownik oznaczający jednostkę czasu",
        examples: [
            { spanish: "¿Qué hora es?", polish: "Która godzina?" },
            { spanish: "Una hora más.", polish: "Jeszcze godzina." },
            { spanish: "A esta hora.", polish: "O tej godzinie." }
        ]
    },
    {
        id: 454,
        spanish: "mejor",
        polish: "lepszy, lepiej",
        description: "Przymiotnik lub przysłówek w stopniu wyższym",
        examples: [
            { spanish: "Es mejor así.", polish: "Jest lepiej w ten sposób." },
            { spanish: "Cada vez mejor.", polish: "Coraz lepiej." },
            { spanish: "Mucho mejor.", polish: "Dużo lepiej." }
        ]
    },
    {
        id: 455,
        spanish: "verdadero - verdadera",
        polish: "prawdziwy",
        description: "Przymiotnik oznaczający prawdę lub autentyczność",
        examples: [
            { spanish: "Un amigo verdadero.", polish: "Prawdziwy przyjaciel." },
            { spanish: "Historia verdadera.", polish: "Prawdziwa historia." },
            { spanish: "Es verdadero.", polish: "To jest prawdziwe." }
        ]
    },
    {
        id: 456,
        spanish: "durante",
        polish: "podczas, w trakcie",
        description: "Przyimek oznaczający okres czasu",
        examples: [
            { spanish: "Durante el día.", polish: "Podczas dnia." },
            { spanish: "Durante años.", polish: "Przez lata." },
            { spanish: "Durante la noche.", polish: "W trakcie nocy." }
        ]
    },
    {
        id: 457,
        spanish: "cien",
        polish: "sto",
        description: "Liczebnik oznaczający 100",
        examples: [
            { spanish: "Cien personas.", polish: "Sto osób." },
            { spanish: "Cien por ciento.", polish: "Sto procent." },
            { spanish: "Más de cien.", polish: "Więcej niż sto." }
        ]
    },
    {
        id: 458,
        spanish: "cinco",
        polish: "pięć",
        description: "Liczebnik oznaczający 5",
        examples: [
            { spanish: "Cinco días.", polish: "Pięć dni." },
            { spanish: "Tengo cinco años.", polish: "Mam pięć lat." },
            { spanish: "Son las cinco.", polish: "Jest piąta." }
        ]
    },
    {
        id: 459,
        spanish: "recordar",
        polish: "pamiętać, przypominać",
        description: "Czasownik oznaczający przywołanie wspomnień",
        examples: [
            { spanish: "No puedo recordar.", polish: "Nie mogę sobie przypomnieć." },
            { spanish: "Recordar el pasado.", polish: "Pamiętać przeszłość." },
            { spanish: "Me recuerdas a alguien.", polish: "Przypominasz mi kogoś." }
        ]
    },
    {
        id: 460,
        spanish: "paso",
        polish: "krok",
        description: "Rzeczownik oznaczający ruch nogi lub etap",
        examples: [
            { spanish: "Dar un paso.", polish: "Zrobić krok." },
            { spanish: "Paso a paso.", polish: "Krok po kroku." },
            { spanish: "El primer paso.", polish: "Pierwszy krok." }
        ]
    },
    {
        id: 461,
        spanish: "temprana - temprano",
        polish: "wczesny, wcześnie",
        description: "Przymiotnik lub przysłówek oznaczający początek",
        examples: [
            { spanish: "Hora temprana.", polish: "Wczesna godzina." },
            { spanish: "Levantarse temprano.", polish: "Wstać wcześnie." },
            { spanish: "Es temprano.", polish: "Jest wcześnie." }
        ]
    },
    {
        id: 462,
        spanish: "mantener",
        polish: "utrzymywać, zachować",
        description: "Czasownik oznaczający podtrzymywanie stanu",
        examples: [
            { spanish: "Mantener la calma.", polish: "Zachować spokój." },
            { spanish: "Mantener limpio.", polish: "Utrzymywać w czystości." },
            { spanish: "Mantener contacto.", polish: "Utrzymywać kontakt." }
        ]
    },
    {
        id: 463,
        spanish: "oeste",
        polish: "zachód",
        description: "Rzeczownik oznaczający kierunek lub stronę świata",
        examples: [
            { spanish: "Al oeste.", polish: "Na zachód." },
            { spanish: "Viento del oeste.", polish: "Wiatr zachodni." },
            { spanish: "Costa oeste.", polish: "Zachodnie wybrzeże." }
        ]
    },
    {
        id: 464,
        spanish: "suelo",
        polish: "ziemia, podłoga",
        description: "Rzeczownik oznaczający powierzchnię",
        examples: [
            { spanish: "Caer al suelo.", polish: "Upaść na ziemię." },
            { spanish: "Limpiar el suelo.", polish: "Czyścić podłogę." },
            { spanish: "En el suelo.", polish: "Na podłodze." }
        ]
    },
    {
        id: 465,
        spanish: "interés",
        polish: "zainteresowanie, procent",
        description: "Rzeczownik oznaczający uwagę lub zysk finansowy",
        examples: [
            { spanish: "Mostrar interés.", polish: "Okazać zainteresowanie." },
            { spanish: "Tasa de interés.", polish: "Stopa procentowa." },
            { spanish: "Es de mi interés.", polish: "Jest w moim interesie." }
        ]
    },
    {
        id: 466,
        spanish: "llegar",
        polish: "przybyć, dotrzeć",
        description: "Czasownik oznaczający osiągnięcie miejsca",
        examples: [
            { spanish: "Llegar a casa.", polish: "Dotrzeć do domu." },
            { spanish: "Acabo de llegar.", polish: "Właśnie przybyłem." },
            { spanish: "Llegar temprano.", polish: "Przyjść wcześnie." }
        ]
    },
    {
        id: 467,
        spanish: "rápido",
        polish: "szybko",
        description: "Przysłówek oznaczający dużą prędkość",
        examples: [
            { spanish: "Correr rápido.", polish: "Biec szybko." },
            { spanish: "Hazlo rápido.", polish: "Zrób to szybko." },
            { spanish: "Muy rápido.", polish: "Bardzo szybko." }
        ]
    },
    {
        id: 468,
        spanish: "verbo",
        polish: "czasownik",
        description: "Rzeczownik gramatyczny oznaczający część mowy",
        examples: [
            { spanish: "Conjugar un verbo.", polish: "Odmieniać czasownik." },
            { spanish: "Verbo irregular.", polish: "Czasownik nieregularny." },
            { spanish: "El verbo 'ser'.", polish: "Czasownik 'być'." }
        ]
    },
    {
        id: 469,
        spanish: "cantar",
        polish: "śpiewać",
        description: "Czasownik oznaczający wykonywanie muzyki głosem",
        examples: [
            { spanish: "Me gusta cantar.", polish: "Lubię śpiewać." },
            { spanish: "Cantar una canción.", polish: "Zaśpiewać piosenkę." },
            { spanish: "Cantar en público.", polish: "Śpiewać publicznie." }
        ]
    },
    {
        id: 470,
        spanish: "escuchar",
        polish: "słuchać",
        description: "Czasownik oznaczający percepcję dźwięków",
        examples: [
            { spanish: "Escuchar música.", polish: "Słuchać muzyki." },
            { spanish: "Escúchame bien.", polish: "Posłuchaj mnie uważnie." },
            { spanish: "No puedo escuchar.", polish: "Nie mogę słyszeć." }
        ]
    },
    {
        id: 471,
        spanish: "seis",
        polish: "sześć",
        description: "Liczebnik oznaczający 6",
        examples: [
            { spanish: "Seis meses.", polish: "Sześć miesięcy." },
            { spanish: "Son las seis.", polish: "Jest szósta." },
            { spanish: "Tengo seis hermanos.", polish: "Mam sześcioro rodzeństwa." }
        ]
    },
    {
        id: 472,
        spanish: "mesa",
        polish: "stół",
        description: "Rzeczownik oznaczający mebel",
        examples: [
            { spanish: "Poner la mesa.", polish: "Nakryć do stołu." },
            { spanish: "Mesa de comedor.", polish: "Stół jadalny." },
            { spanish: "Sentarse a la mesa.", polish: "Usiąść do stołu." }
        ]
    },
    {
        id: 473,
        spanish: "viajar",
        polish: "podróżować",
        description: "Czasownik oznaczający przemieszczanie się",
        examples: [
            { spanish: "Me gusta viajar.", polish: "Lubię podróżować." },
            { spanish: "Viajar al extranjero.", polish: "Podróżować za granicę." },
            { spanish: "Viajar en tren.", polish: "Podróżować pociągiem." }
        ]
    },
    {
        id: 474,
        spanish: "menos",
        polish: "mniej",
        description: "Przysłówek lub przyimek oznaczający mniejszą ilość",
        examples: [
            { spanish: "Menos dinero.", polish: "Mniej pieniędzy." },
            { spanish: "Más o menos.", polish: "Mniej więcej." },
            { spanish: "Al menos.", polish: "Przynajmniej." }
        ]
    },
    {
        id: 475,
        spanish: "mañana",
        polish: "rano, jutro",
        description: "Rzeczownik lub przysłówek oznaczający porę dnia lub kolejny dzień",
        examples: [
            { spanish: "Por la mañana.", polish: "Rano." },
            { spanish: "Hasta mañana.", polish: "Do jutra." },
            { spanish: "Mañana temprano.", polish: "Jutro rano." }
        ]
    },
    {
        id: 476,
        spanish: "diez",
        polish: "dziesięć",
        description: "Liczebnik oznaczający 10",
        examples: [
            { spanish: "Diez años.", polish: "Dziesięć lat." },
            { spanish: "Son las diez.", polish: "Jest dziesiąta." },
            { spanish: "Diez minutos.", polish: "Dziesięć minut." }
        ]
    },
    {
        id: 477,
        spanish: "sencilla - sencillo",
        polish: "prosty",
        description: "Przymiotnik oznaczający łatwość lub brak komplikacji",
        examples: [
            { spanish: "Una vida sencilla.", polish: "Proste życie." },
            { spanish: "Es muy sencillo.", polish: "To bardzo proste." },
            { spanish: "Solución sencilla.", polish: "Proste rozwiązanie." }
        ]
    },
    {
        id: 478,
        spanish: "varios - varias",
        polish: "kilka, różne",
        description: "Przymiotnik oznaczający liczbę lub różnorodność",
        examples: [
            { spanish: "Varios días.", polish: "Kilka dni." },
            { spanish: "Varias opciones.", polish: "Kilka opcji." },
            { spanish: "Hay varios.", polish: "Jest kilka." }
        ]
    },
    {
        id: 479,
        spanish: "vocal",
        polish: "samogłoska",
        description: "Rzeczownik gramatyczny oznaczający dźwięk mowy",
        examples: [
            { spanish: "Las cinco vocales.", polish: "Pięć samogłosek." },
            { spanish: "Vocal abierta.", polish: "Otwarta samogłoska." },
            { spanish: "Pronunciar la vocal.", polish: "Wymówić samogłoskę." }
        ]
    },
    {
        id: 480,
        spanish: "hacia",
        polish: "w kierunku",
        description: "Przyimek oznaczający kierunek",
        examples: [
            { spanish: "Ir hacia el norte.", polish: "Iść na północ." },
            { spanish: "Mirar hacia arriba.", polish: "Patrzeć w górę." },
            { spanish: "Hacia adelante.", polish: "Do przodu." }
        ]
    },
    {
        id: 481,
        spanish: "guerra",
        polish: "wojna",
        description: "Rzeczownik oznaczający konflikt zbrojny",
        examples: [
            { spanish: "La guerra mundial.", polish: "Wojna światowa." },
            { spanish: "Declarar la guerra.", polish: "Wypowiedzieć wojnę." },
            { spanish: "Después de la guerra.", polish: "Po wojnie." }
        ]
    },
    {
        id: 482,
        spanish: "poner",
        polish: "położyć, umieścić",
        description: "Czasownik oznaczający umieszczanie",
        examples: [
            { spanish: "Poner la mesa.", polish: "Nakryć do stołu." },
            { spanish: "Poner atención.", polish: "Zwracać uwagę." },
            { spanish: "Poner aquí.", polish: "Umieścić tutaj." }
        ]
    },
    {
        id: 483,
        spanish: "contra",
        polish: "przeciw, przeciwko",
        description: "Przyimek oznaczający opozycję",
        examples: [
            { spanish: "Contra la pared.", polish: "Przy ścianie." },
            { spanish: "Luchar contra.", polish: "Walczyć przeciwko." },
            { spanish: "En contra de.", polish: "Przeciwko." }
        ]
    },
    {
        id: 484,
        spanish: "patrón",
        polish: "wzór, pracodawca",
        description: "Rzeczownik oznaczający szablon lub zwierzchnika",
        examples: [
            { spanish: "Seguir un patrón.", polish: "Podążać za wzorem." },
            { spanish: "Mi patrón es justo.", polish: "Mój pracodawca jest sprawiedliwy." },
            { spanish: "Patrón de diseño.", polish: "Wzór projektowy." }
        ]
    },
    {
        id: 485,
        spanish: "lenta - lento",
        polish: "wolny, powolny",
        description: "Przymiotnik oznaczający małą prędkość",
        examples: [
            { spanish: "Un proceso lento.", polish: "Powolny proces." },
            { spanish: "Caminar lento.", polish: "Chodzić wolno." },
            { spanish: "Conexión lenta.", polish: "Wolne połączenie." }
        ]
    },
    {
        id: 486,
        spanish: "centro",
        polish: "centrum",
        description: "Rzeczownik oznaczający punkt środkowy",
        examples: [
            { spanish: "En el centro.", polish: "W centrum." },
            { spanish: "Centro comercial.", polish: "Centrum handlowe." },
            { spanish: "Centro de la ciudad.", polish: "Centrum miasta." }
        ]
    },
    {
        id: 487,
        spanish: "amar",
        polish: "kochać",
        description: "Czasownik oznaczający uczucie miłości",
        examples: [
            { spanish: "Amar a alguien.", polish: "Kochać kogoś." },
            { spanish: "Te amo.", polish: "Kocham cię." },
            { spanish: "Amar la vida.", polish: "Kochać życie." }
        ]
    },
    {
        id: 488,
        spanish: "persona",
        polish: "osoba",
        description: "Rzeczownik oznaczający człowieka",
        examples: [
            { spanish: "Una buena persona.", polish: "Dobra osoba." },
            { spanish: "Persona importante.", polish: "Ważna osoba." },
            { spanish: "Muchas personas.", polish: "Wiele osób." }
        ]
    },
    {
        id: 489,
        spanish: "dinero",
        polish: "pieniądze",
        description: "Rzeczownik oznaczający walutę",
        examples: [
            { spanish: "Ganar dinero.", polish: "Zarabiać pieniądze." },
            { spanish: "No tengo dinero.", polish: "Nie mam pieniędzy." },
            { spanish: "Ahorrar dinero.", polish: "Oszczędzać pieniądze." }
        ]
    },
    {
        id: 490,
        spanish: "servir",
        polish: "służyć, serwować",
        description: "Czasownik oznaczający użyteczność lub obsługę",
        examples: [
            { spanish: "Servir comida.", polish: "Serwować jedzenie." },
            { spanish: "Servir para algo.", polish: "Służyć do czegoś." },
            { spanish: "¿En qué puedo servirle?", polish: "W czym mogę służyć?" }
        ]
    },
    {
        id: 491,
        spanish: "aparecer",
        polish: "pojawić się",
        description: "Czasownik oznaczający stawanie się widocznym",
        examples: [
            { spanish: "Aparecer de repente.", polish: "Pojawić się nagle." },
            { spanish: "No apareció.", polish: "Nie pojawił się." },
            { spanish: "Aparecer en público.", polish: "Pojawić się publicznie." }
        ]
    },
    {
        id: 492,
        spanish: "carretera",
        polish: "droga, szosa",
        description: "Rzeczownik oznaczający trasę komunikacyjną",
        examples: [
            { spanish: "Conducir por la carretera.", polish: "Jechać drogą." },
            { spanish: "Carretera principal.", polish: "Główna droga." },
            { spanish: "Accidente en la carretera.", polish: "Wypadek na drodze." }
        ]
    },
    {
        id: 493,
        spanish: "mapa",
        polish: "mapa",
        description: "Rzeczownik oznaczający reprezentację geograficzną",
        examples: [
            { spanish: "Ver el mapa.", polish: "Zobaczyć mapę." },
            { spanish: "Mapa del mundo.", polish: "Mapa świata." },
            { spanish: "Consultar el mapa.", polish: "Sprawdzić mapę." }
        ]
    },
    {
        id: 494,
        spanish: "lluvia",
        polish: "deszcz",
        description: "Rzeczownik oznaczający opad atmosferyczny",
        examples: [
            { spanish: "Caer la lluvia.", polish: "Padać deszcz." },
            { spanish: "Día de lluvia.", polish: "Deszczowy dzień." },
            { spanish: "Lluvia intensa.", polish: "Intensywny deszcz." }
        ]
    },
    {
        id: 495,
        spanish: "regla",
        polish: "zasada, linijka",
        description: "Rzeczownik oznaczający normę lub narzędzie",
        examples: [
            { spanish: "Seguir las reglas.", polish: "Przestrzegać zasad." },
            { spanish: "Regla de oro.", polish: "Złota zasada." },
            { spanish: "Medir con regla.", polish: "Mierzyć linijką." }
        ]
    },
    {
        id: 496,
        spanish: "gobernar",
        polish: "rządzić",
        description: "Czasownik oznaczający sprawowanie władzy",
        examples: [
            { spanish: "Gobernar un país.", polish: "Rządzić krajem." },
            { spanish: "Gobernar con justicia.", polish: "Rządzić sprawiedliwie." },
            { spanish: "El presidente gobierna.", polish: "Prezydent rządzi." }
        ]
    },
    {
        id: 497,
        spanish: "jalar",
        polish: "ciągnąć",
        description: "Czasownik oznaczający przyciąganie",
        examples: [
            { spanish: "Jalar la puerta.", polish: "Ciągnąć drzwi." },
            { spanish: "No jales.", polish: "Nie ciągnij." },
            { spanish: "Jalar la cuerda.", polish: "Ciągnąć linę." }
        ]
    },
    {
        id: 498,
        spanish: "frío - fría",
        polish: "zimny, chłodny",
        description: "Przymiotnik oznaczający niską temperaturę",
        examples: [
            { spanish: "Agua fría.", polish: "Zimna woda." },
            { spanish: "Hace frío.", polish: "Jest zimno." },
            { spanish: "Viento frío.", polish: "Zimny wiatr." }
        ]
    },
    {
        id: 499,
        spanish: "aviso",
        polish: "ogłoszenie, ostrzeżenie",
        description: "Rzeczownik oznaczający komunikat",
        examples: [
            { spanish: "Aviso importante.", polish: "Ważne ogłoszenie." },
            { spanish: "Sin previo aviso.", polish: "Bez uprzedzenia." },
            { spanish: "Dar aviso.", polish: "Dać znać." }
        ]
    },
    {
        id: 500,
        spanish: "voz",
        polish: "głos",
        description: "Rzeczownik oznaczający dźwięk mowy",
        examples: [
            { spanish: "Levantar la voz.", polish: "Podnieść głos." },
            { spanish: "Voz baja.", polish: "Cichy głos." },
            { spanish: "Reconocer la voz.", polish: "Rozpoznać głos." }
        ]
    },
    {
        id: 501,
        spanish: "energía",
        polish: "energia",
        description: "Rzeczownik oznaczający siłę lub moc",
        examples: [
            { spanish: "Tengo mucha energía.", polish: "Mam dużo energii." },
            { spanish: "Energía solar.", polish: "Energia słoneczna." },
            { spanish: "Ahorrar energía.", polish: "Oszczędzać energię." }
        ]
    },
    {
        id: 502,
        spanish: "caza",
        polish: "polowanie",
        description: "Rzeczownik oznaczający łowy",
        examples: [
            { spanish: "Ir de caza.", polish: "Iść na polowanie." },
            { spanish: "La caza del zorro.", polish: "Polowanie na lisa." },
            { spanish: "Temporada de caza.", polish: "Sezon polowań." }
        ]
    },
    {
        id: 503,
        spanish: "probable",
        polish: "prawdopodobny",
        description: "Przymiotnik oznaczający możliwość",
        examples: [
            { spanish: "Es muy probable.", polish: "To bardzo prawdopodobne." },
            { spanish: "Resultado probable.", polish: "Prawdopodobny wynik." },
            { spanish: "Lo más probable.", polish: "Najbardziej prawdopodobne." }
        ]
    },
    {
        id: 504,
        spanish: "cama",
        polish: "łóżko",
        description: "Rzeczownik oznaczający mebel do spania",
        examples: [
            { spanish: "Ir a la cama.", polish: "Iść do łóżka." },
            { spanish: "Hacer la cama.", polish: "Pościelić łóżko." },
            { spanish: "Una cama grande.", polish: "Duże łóżko." }
        ]
    },
    {
        id: 505,
        spanish: "hermano",
        polish: "brat",
        description: "Rzeczownik oznaczający męskiego rodzeństwo",
        examples: [
            { spanish: "Mi hermano mayor.", polish: "Mój starszy brat." },
            { spanish: "Tengo dos hermanos.", polish: "Mam dwóch braci." },
            { spanish: "Hermano pequeño.", polish: "Młodszy brat." }
        ]
    },
    {
        id: 506,
        spanish: "huevo",
        polish: "jajko",
        description: "Rzeczownik oznaczający produkt kurzy",
        examples: [
            { spanish: "Un huevo frito.", polish: "Jajko sadzone." },
            { spanish: "Huevos revueltos.", polish: "Jajecznica." },
            { spanish: "Comer huevos.", polish: "Jeść jajka." }
        ]
    },
    {
        id: 507,
        spanish: "paseo",
        polish: "spacer, przejażdżka",
        description: "Rzeczownik oznaczający rekreacyjną podróż",
        examples: [
            { spanish: "Dar un paseo.", polish: "Pójść na spacer." },
            { spanish: "Paseo en bicicleta.", polish: "Przejażdżka rowerem." },
            { spanish: "Paseo por el parque.", polish: "Spacer po parku." }
        ]
    },
    {
        id: 508,
        spanish: "celular",
        polish: "komórka, telefon",
        description: "Rzeczownik oznaczający telefon komórkowy",
        examples: [
            { spanish: "Mi teléfono celular.", polish: "Mój telefon komórkowy." },
            { spanish: "Llamar al celular.", polish: "Zadzwonić na komórkę." },
            { spanish: "Celular nuevo.", polish: "Nowy telefon." }
        ]
    },
    {
        id: 509,
        spanish: "creer",
        polish: "wierzyć",
        description: "Czasownik oznaczający przekonanie",
        examples: [
            { spanish: "Creo que sí.", polish: "Myślę, że tak." },
            { spanish: "No puedo creerlo.", polish: "Nie mogę w to uwierzyć." },
            { spanish: "Creer en algo.", polish: "Wierzyć w coś." }
        ]
    },
    {
        id: 510,
        spanish: "quizás",
        polish: "może, być może",
        description: "Przysłówek oznaczający możliwość",
        examples: [
            { spanish: "Quizás mañana.", polish: "Może jutro." },
            { spanish: "Quizás tengas razón.", polish: "Być może masz rację." },
            { spanish: "Quizás llueva.", polish: "Może będzie padać." }
        ]
    },
    {
        id: 511,
        spanish: "recoger",
        polish: "zbierać, podnosić",
        description: "Czasownik oznaczający podnoszenie lub zbieranie",
        examples: [
            { spanish: "Recoger los juguetes.", polish: "Pozbierać zabawki." },
            { spanish: "Recoger flores.", polish: "Zbierać kwiaty." },
            { spanish: "Voy a recogerte.", polish: "Przyjadę po ciebie." }
        ]
    },
    {
        id: 512,
        spanish: "repentina - repentino",
        polish: "nagły",
        description: "Przymiotnik oznaczający brak ostrzeżenia",
        examples: [
            { spanish: "Un cambio repentino.", polish: "Nagła zmiana." },
            { spanish: "Muerte repentina.", polish: "Nagła śmierć." },
            { spanish: "De manera repentina.", polish: "W nagły sposób." }
        ]
    },
    {
        id: 513,
        spanish: "contar",
        polish: "liczyć, opowiadać",
        description: "Czasownik oznaczający liczenie lub narrację",
        examples: [
            { spanish: "Contar dinero.", polish: "Liczyć pieniądze." },
            { spanish: "Contar una historia.", polish: "Opowiedzieć historię." },
            { spanish: "Saber contar.", polish: "Umieć liczyć." }
        ]
    },
    {
        id: 514,
        spanish: "plaza",
        polish: "plac",
        description: "Rzeczownik oznaczający miejsce publiczne",
        examples: [
            { spanish: "La plaza principal.", polish: "Główny plac." },
            { spanish: "Plaza de toros.", polish: "Arena walk byków." },
            { spanish: "Caminar por la plaza.", polish: "Spacerować po placu." }
        ]
    },
    {
        id: 515,
        spanish: "razón",
        polish: "powód, racja",
        description: "Rzeczownik oznaczający przyczynę lub słuszność",
        examples: [
            { spanish: "Tienes razón.", polish: "Masz rację." },
            { spanish: "¿Cuál es la razón?", polish: "Jaki jest powód?" },
            { spanish: "Por esa razón.", polish: "Z tego powodu." }
        ]
    },
    {
        id: 516,
        spanish: "longitud",
        polish: "długość",
        description: "Rzeczownik oznaczający wymiar",
        examples: [
            { spanish: "La longitud del río.", polish: "Długość rzeki." },
            { spanish: "Medir la longitud.", polish: "Zmierzyć długość." },
            { spanish: "Longitud y anchura.", polish: "Długość i szerokość." }
        ]
    },
    {
        id: 517,
        spanish: "representar",
        polish: "reprezentować",
        description: "Czasownik oznaczający reprezentację",
        examples: [
            { spanish: "Representar a mi país.", polish: "Reprezentować mój kraj." },
            { spanish: "Representar un papel.", polish: "Grać rolę." },
            { spanish: "¿Qué representa esto?", polish: "Co to reprezentuje?" }
        ]
    },
    {
        id: 518,
        spanish: "arte",
        polish: "sztuka",
        description: "Rzeczownik oznaczający twórczość artystyczną",
        examples: [
            { spanish: "Obra de arte.", polish: "Dzieło sztuki." },
            { spanish: "Arte moderno.", polish: "Sztuka nowoczesna." },
            { spanish: "Museo de arte.", polish: "Muzeum sztuki." }
        ]
    },
    {
        id: 519,
        spanish: "sujeto",
        polish: "podmiot, osoba",
        description: "Rzeczownik oznaczający osobę lub podmiot gramatyczny",
        examples: [
            { spanish: "El sujeto de la oración.", polish: "Podmiot zdania." },
            { spanish: "Un sujeto sospechoso.", polish: "Podejrzana osoba." },
            { spanish: "Sujeto desconocido.", polish: "Nieznana osoba." }
        ]
    },
    {
        id: 520,
        spanish: "región",
        polish: "region",
        description: "Rzeczownik oznaczający obszar geograficzny",
        examples: [
            { spanish: "La región del norte.", polish: "Region północny." },
            { spanish: "Región montañosa.", polish: "Region górzysty." },
            { spanish: "Visitar la región.", polish: "Odwiedzić region." }
        ]
    },
    {
        id: 521,
        spanish: "tamaño",
        polish: "rozmiar",
        description: "Rzeczownik oznaczający wielkość",
        examples: [
            { spanish: "¿Qué tamaño?", polish: "Jaki rozmiar?" },
            { spanish: "Tamaño grande.", polish: "Duży rozmiar." },
            { spanish: "El tamaño importa.", polish: "Rozmiar ma znaczenie." }
        ]
    },
    {
        id: 522,
        spanish: "variar",
        polish: "różnić się, zmieniać",
        description: "Czasownik oznaczający zmienność",
        examples: [
            { spanish: "Los precios varían.", polish: "Ceny się różnią." },
            { spanish: "Puede variar.", polish: "Może się różnić." },
            { spanish: "Variar la dieta.", polish: "Urozmaicić dietę." }
        ]
    },
    {
        id: 523,
        spanish: "resolver",
        polish: "rozwiązać",
        description: "Czasownik oznaczający znalezienie rozwiązania",
        examples: [
            { spanish: "Resolver un problema.", polish: "Rozwiązać problem." },
            { spanish: "No puedo resolverlo.", polish: "Nie mogę tego rozwiązać." },
            { spanish: "Resolver conflictos.", polish: "Rozwiązywać konflikty." }
        ]
    },
    {
        id: 524,
        spanish: "hablar",
        polish: "mówić",
        description: "Czasownik oznaczający komunikację werbalną",
        examples: [
            { spanish: "Hablar español.", polish: "Mówić po hiszpańsku." },
            { spanish: "Necesito hablar contigo.", polish: "Muszę z tobą porozmawiać." },
            { spanish: "Hablar en voz alta.", polish: "Mówić głośno." }
        ]
    },
    {
        id: 525,
        spanish: "peso",
        polish: "waga, ciężar",
        description: "Rzeczownik oznaczający masę",
        examples: [
            { spanish: "Perder peso.", polish: "Stracić na wadze." },
            { spanish: "El peso del paquete.", polish: "Waga paczki." },
            { spanish: "Peso ideal.", polish: "Idealna waga." }
        ]
    },
    {
        id: 526,
        spanish: "general",
        polish: "ogólny, generał",
        description: "Przymiotnik oznaczający powszechność lub rzeczownik wojskowy",
        examples: [
            { spanish: "En general.", polish: "Ogólnie rzecz biorąc." },
            { spanish: "Conocimiento general.", polish: "Wiedza ogólna." },
            { spanish: "El general del ejército.", polish: "Generał armii." }
        ]
    },
    {
        id: 527,
        spanish: "hielo",
        polish: "lód",
        description: "Rzeczownik oznaczający zamarzniętą wodę",
        examples: [
            { spanish: "Cubos de hielo.", polish: "Kostki lodu." },
            { spanish: "Patinar sobre hielo.", polish: "Jeździć na łyżwach." },
            { spanish: "Romper el hielo.", polish: "Przełamać lody." }
        ]
    },
    {
        id: 528,
        spanish: "materia",
        polish: "materia, przedmiot",
        description: "Rzeczownik oznaczający substancję lub temat",
        examples: [
            { spanish: "Materia escolar.", polish: "Przedmiot szkolny." },
            { spanish: "Materia prima.", polish: "Surowiec." },
            { spanish: "En esta materia.", polish: "W tej kwestii." }
        ]
    },
    {
        id: 529,
        spanish: "círculo",
        polish: "okrąg, koło",
        description: "Rzeczownik oznaczający figurę geometryczną",
        examples: [
            { spanish: "Formar un círculo.", polish: "Utworzyć koło." },
            { spanish: "Círculo vicioso.", polish: "Błędne koło." },
            { spanish: "Dibujar un círculo.", polish: "Narysować okrąg." }
        ]
    },
    {
        id: 530,
        spanish: "par",
        polish: "para",
        description: "Rzeczownik oznaczający dwa elementy",
        examples: [
            { spanish: "Un par de zapatos.", polish: "Para butów." },
            { spanish: "Par de días.", polish: "Kilka dni." },
            { spanish: "Número par.", polish: "Liczba parzysta." }
        ]
    },
    {
        id: 531,
        spanish: "incluir",
        polish: "zawierać, włączać",
        description: "Czasownik oznaczający dodanie do całości",
        examples: [
            { spanish: "Incluir a todos.", polish: "Włączyć wszystkich." },
            { spanish: "El precio incluye...", polish: "Cena zawiera..." },
            { spanish: "Sin incluir impuestos.", polish: "Bez podatków." }
        ]
    },
    {
        id: 532,
        spanish: "brecha",
        polish: "luka, szczelina",
        description: "Rzeczownik oznaczający otwór lub różnicę",
        examples: [
            { spanish: "Brecha generacional.", polish: "Przepaść pokoleniowa." },
            { spanish: "Una brecha en la pared.", polish: "Szczelina w ścianie." },
            { spanish: "Cerrar la brecha.", polish: "Zamknąć lukę." }
        ]
    },
    {
        id: 533,
        spanish: "sílaba",
        polish: "sylaba",
        description: "Rzeczownik oznaczający jednostkę fonologiczną",
        examples: [
            { spanish: "Dividir en sílabas.", polish: "Podzielić na sylaby." },
            { spanish: "Tres sílabas.", polish: "Trzy sylaby." },
            { spanish: "Sílaba tónica.", polish: "Sylaba akcentowana." }
        ]
    },
    {
        id: 534,
        spanish: "sentir",
        polish: "czuć",
        description: "Czasownik oznaczający doznawanie uczuć",
        examples: [
            { spanish: "Sentir dolor.", polish: "Czuć ból." },
            { spanish: "Me siento bien.", polish: "Czuję się dobrze." },
            { spanish: "Lo siento.", polish: "Przepraszam." }
        ]
    },
    {
        id: 535,
        spanish: "gran - grande",
        polish: "wielki, duży",
        description: "Przymiotnik oznaczający wielkość",
        examples: [
            { spanish: "Un gran hombre.", polish: "Wielki człowiek." },
            { spanish: "Una casa grande.", polish: "Duży dom." },
            { spanish: "Gran idea.", polish: "Świetny pomysł." }
        ]
    },
    {
        id: 536,
        spanish: "bola",
        polish: "piłka, kula",
        description: "Rzeczownik oznaczający okrągły przedmiot",
        examples: [
            { spanish: "Jugar con la bola.", polish: "Bawić się piłką." },
            { spanish: "Bola de nieve.", polish: "Kula śnieżna." },
            { spanish: "Una bola grande.", polish: "Duża kula." }
        ]
    },
    {
        id: 537,
        spanish: "aún",
        polish: "jeszcze, nadal",
        description: "Przysłówek oznaczający kontynuację",
        examples: [
            { spanish: "Aún no.", polish: "Jeszcze nie." },
            { spanish: "Aún estoy aquí.", polish: "Nadal tu jestem." },
            { spanish: "Aún más.", polish: "Jeszcze więcej." }
        ]
    },
    {
        id: 538,
        spanish: "ola",
        polish: "fala",
        description: "Rzeczownik oznaczający ruch wody",
        examples: [
            { spanish: "Las olas del mar.", polish: "Fale morza." },
            { spanish: "Surfear las olas.", polish: "Surfować na falach." },
            { spanish: "Ola de calor.", polish: "Fala upałów." }
        ]
    },
    {
        id: 539,
        spanish: "caer",
        polish: "upuścić, spadać",
        description: "Czasownik oznaczający spadanie lub upuszczenie",
        examples: [
            { spanish: "Dejar caer.", polish: "Upuścić." },
            { spanish: "Caer del árbol.", polish: "Spaść z drzewa." },
            { spanish: "Se cayó.", polish: "Upadło." }
        ]
    },
    {
        id: 540,
        spanish: "corazón",
        polish: "serce",
        description: "Rzeczownik oznaczający organ lub uczucia",
        examples: [
            { spanish: "De todo corazón.", polish: "Z całego serca." },
            { spanish: "El corazón late.", polish: "Serce bije." },
            { spanish: "Ataque al corazón.", polish: "Atak serca." }
        ]
    },
    {
        id: 541,
        spanish: "soy",
        polish: "jestem",
        description: "Czasownik 'ser' w pierwszej osobie",
        examples: [
            { spanish: "Soy estudiante.", polish: "Jestem studentem." },
            { spanish: "Soy de España.", polish: "Jestem z Hiszpanii." },
            { spanish: "Soy feliz.", polish: "Jestem szczęśliwy." }
        ]
    },
    {
        id: 542,
        spanish: "presente",
        polish: "obecny, obecność",
        description: "Przymiotnik lub rzeczownik oznaczający teraźniejszość",
        examples: [
            { spanish: "Estar presente.", polish: "Być obecnym." },
            { spanish: "El tiempo presente.", polish: "Czas teraźniejszy." },
            { spanish: "Un regalo presente.", polish: "Prezent." }
        ]
    },
    {
        id: 543,
        spanish: "pesada - pesado",
        polish: "ciężki",
        description: "Przymiotnik oznaczający dużą wagę",
        examples: [
            { spanish: "Una carga pesada.", polish: "Ciężki ładunek." },
            { spanish: "Libro pesado.", polish: "Ciężka książka." },
            { spanish: "Es muy pesado.", polish: "Jest bardzo ciężki." }
        ]
    },
    {
        id: 544,
        spanish: "danza",
        polish: "taniec",
        description: "Rzeczownik oznaczający ruch do muzyki",
        examples: [
            { spanish: "Clase de danza.", polish: "Lekcja tańca." },
            { spanish: "Danza tradicional.", polish: "Tradycyjny taniec." },
            { spanish: "Escuela de danza.", polish: "Szkoła tańca." }
        ]
    },
    {
        id: 545,
        spanish: "motor",
        polish: "silnik",
        description: "Rzeczownik oznaczający mechanizm napędowy",
        examples: [
            { spanish: "El motor del coche.", polish: "Silnik samochodu." },
            { spanish: "Motor eléctrico.", polish: "Silnik elektryczny." },
            { spanish: "Arrancar el motor.", polish: "Uruchomić silnik." }
        ]
    },
    {
        id: 546,
        spanish: "posición",
        polish: "pozycja",
        description: "Rzeczownik oznaczający miejsce lub stanowisko",
        examples: [
            { spanish: "Cambiar de posición.", polish: "Zmienić pozycję." },
            { spanish: "En primera posición.", polish: "Na pierwszej pozycji." },
            { spanish: "Posición cómoda.", polish: "Wygodna pozycja." }
        ]
    },
    {
        id: 547,
        spanish: "brazo",
        polish: "ramię",
        description: "Rzeczownik oznaczający część ciała",
        examples: [
            { spanish: "Levantar el brazo.", polish: "Podnieść ramię." },
            { spanish: "Dolor en el brazo.", polish: "Ból w ramieniu." },
            { spanish: "Brazos fuertes.", polish: "Silne ramiona." }
        ]
    },
    {
        id: 548,
        spanish: "amplio - amplia",
        polish: "szeroki, przestronny",
        description: "Przymiotnik oznaczający dużą przestrzeń",
        examples: [
            { spanish: "Una sala amplia.", polish: "Przestronna sala." },
            { spanish: "Conocimiento amplio.", polish: "Szeroka wiedza." },
            { spanish: "Espacio amplio.", polish: "Szeroka przestrzeń." }
        ]
    },
    {
        id: 549,
        spanish: "vela",
        polish: "świeca, żagiel",
        description: "Rzeczownik oznaczający źródło światła lub element statku",
        examples: [
            { spanish: "Encender una vela.", polish: "Zapalić świecę." },
            { spanish: "Barco de vela.", polish: "Żaglówka." },
            { spanish: "Velas de cumpleaños.", polish: "Świeczki urodzinowe." }
        ]
    },
    {
        id: 550,
        spanish: "material",
        polish: "materiał",
        description: "Rzeczownik oznaczający substancję lub tworzywo",
        examples: [
            { spanish: "Material de construcción.", polish: "Materiał budowlany." },
            { spanish: "Material escolar.", polish: "Materiały szkolne." },
            { spanish: "¿De qué material es?", polish: "Z jakiego materiału to jest?" }
        ]
    },
    {
        id: 551,
        spanish: "fracción",
        polish: "ułamek, część",
        description: "Rzeczownik oznaczający część całości",
        examples: [
            { spanish: "Una fracción del precio.", polish: "Ułamek ceny." },
            { spanish: "Fracción matemática.", polish: "Ułamek matematyczny." },
            { spanish: "En una fracción de segundo.", polish: "W ułamku sekundy." }
        ]
    },
    {
        id: 552,
        spanish: "bosque",
        polish: "las",
        description: "Rzeczownik oznaczający obszar leśny",
        examples: [
            { spanish: "Caminar por el bosque.", polish: "Spacerować po lesie." },
            { spanish: "Bosque tropical.", polish: "Las tropikalny." },
            { spanish: "Animales del bosque.", polish: "Zwierzęta lasu." }
        ]
    },
    {
        id: 553,
        spanish: "sentarse",
        polish: "usiąść",
        description: "Czasownik zwrotny oznaczający zajęcie miejsca",
        examples: [
            { spanish: "Sentarse aquí.", polish: "Usiąść tutaj." },
            { spanish: "Por favor, siéntese.", polish: "Proszę usiąść." },
            { spanish: "Me siento cómodo.", polish: "Siedzę wygodnie." }
        ]
    },
    {
        id: 554,
        spanish: "carrera",
        polish: "wyścig, kariera",
        description: "Rzeczownik oznaczający bieg lub zawód",
        examples: [
            { spanish: "Carrera de coches.", polish: "Wyścig samochodów." },
            { spanish: "Mi carrera profesional.", polish: "Moja kariera zawodowa." },
            { spanish: "Estudiar una carrera.", polish: "Studiować kierunek." }
        ]
    },
    {
        id: 555,
        spanish: "ventana",
        polish: "okno",
        description: "Rzeczownik oznaczający otwór w ścianie",
        examples: [
            { spanish: "Abrir la ventana.", polish: "Otworzyć okno." },
            { spanish: "Mirar por la ventana.", polish: "Patrzeć przez okno." },
            { spanish: "Ventana rota.", polish: "Zbite okno." }
        ]
    },
    {
        id: 556,
        spanish: "tienda",
        polish: "sklep",
        description: "Rzeczownik oznaczający miejsce handlu",
        examples: [
            { spanish: "Ir a la tienda.", polish: "Iść do sklepu." },
            { spanish: "Tienda de ropa.", polish: "Sklep odzieżowy." },
            { spanish: "Abrir una tienda.", polish: "Otworzyć sklep." }
        ]
    },
    {
        id: 557,
        spanish: "verano",
        polish: "lato",
        description: "Rzeczownik oznaczający porę roku",
        examples: [
            { spanish: "En verano.", polish: "Latem." },
            { spanish: "Vacaciones de verano.", polish: "Wakacje letnie." },
            { spanish: "El verano pasado.", polish: "Zeszłego lata." }
        ]
    },
    {
        id: 558,
        spanish: "tren",
        polish: "pociąg",
        description: "Rzeczownik oznaczający pojazd szynowy",
        examples: [
            { spanish: "Viajar en tren.", polish: "Podróżować pociągiem." },
            { spanish: "Estación de tren.", polish: "Dworzec kolejowy." },
            { spanish: "Perder el tren.", polish: "Spóźnić się na pociąg." }
        ]
    },
    {
        id: 559,
        spanish: "sueño",
        polish: "sen, marzenie",
        description: "Rzeczownik oznaczający stan spoczynku lub pragnienie",
        examples: [
            { spanish: "Tengo sueño.", polish: "Jestem śpiący." },
            { spanish: "Un sueño bonito.", polish: "Piękny sen." },
            { spanish: "Mi sueño es viajar.", polish: "Moim marzeniem jest podróżowanie." }
        ]
    },
    {
        id: 560,
        spanish: "demostrar",
        polish: "udowodnić, pokazać",
        description: "Czasownik oznaczający prezentację dowodu",
        examples: [
            { spanish: "Demostrar la verdad.", polish: "Udowodnić prawdę." },
            { spanish: "Te lo voy a demostrar.", polish: "Pokażę ci to." },
            { spanish: "Demostrar habilidades.", polish: "Pokazać umiejętności." }
        ]
    },
    {
        id: 561,
        spanish: "solitario - solitaria",
        polish: "samotny",
        description: "Przymiotnik oznaczający odosobnienie",
        examples: [
            { spanish: "Un lugar solitario.", polish: "Samotne miejsce." },
            { spanish: "Me siento solitario.", polish: "Czuję się samotny." },
            { spanish: "Vida solitaria.", polish: "Samotne życie." }
        ]
    },
    {
        id: 562,
        spanish: "pierna",
        polish: "noga",
        description: "Rzeczownik oznaczający część ciała",
        examples: [
            { spanish: "Dolor en la pierna.", polish: "Ból w nodze." },
            { spanish: "Cruzar las piernas.", polish: "Skrzyżować nogi." },
            { spanish: "Pierna rota.", polish: "Złamana noga." }
        ]
    },
    {
        id: 563,
        spanish: "ejercicio",
        polish: "ćwiczenie",
        description: "Rzeczownik oznaczający aktywność fizyczną lub zadanie",
        examples: [
            { spanish: "Hacer ejercicio.", polish: "Ćwiczyć." },
            { spanish: "Ejercicio físico.", polish: "Ćwiczenie fizyczne." },
            { spanish: "Ejercicio de matemáticas.", polish: "Zadanie z matematyki." }
        ]
    },
    {
        id: 564,
        spanish: "pared",
        polish: "ściana",
        description: "Rzeczownik oznaczający element budynku",
        examples: [
            { spanish: "Pintar la pared.", polish: "Malować ścianę." },
            { spanish: "Pared blanca.", polish: "Biała ściana." },
            { spanish: "Colgar en la pared.", polish: "Powiesić na ścianie." }
        ]
    },
    {
        id: 565,
        spanish: "capturar",
        polish: "złapać, schwytać",
        description: "Czasownik oznaczający pojmanie",
        examples: [
            { spanish: "Capturar al ladrón.", polish: "Złapać złodzieja." },
            { spanish: "Capturar una imagen.", polish: "Uchwycić obraz." },
            { spanish: "Capturar la atención.", polish: "Przyciągnąć uwagę." }
        ]
    },
    {
        id: 566,
        spanish: "monte",
        polish: "góra, wzgórze",
        description: "Rzeczownik oznaczający wzniesienie",
        examples: [
            { spanish: "Subir al monte.", polish: "Wspinać się na górę." },
            { spanish: "Monte alto.", polish: "Wysoka góra." },
            { spanish: "Casa en el monte.", polish: "Dom w górach." }
        ]
    },
    {
        id: 567,
        spanish: "desear",
        polish: "życzyć, pragnąć",
        description: "Czasownik oznaczający pragnienie",
        examples: [
            { spanish: "Desear buena suerte.", polish: "Życzyć powodzenia." },
            { spanish: "¿Qué deseas?", polish: "Czego pragniesz?" },
            { spanish: "Desear felicidad.", polish: "Życzyć szczęścia." }
        ]
    },
    {
        id: 568,
        spanish: "cielo",
        polish: "niebo",
        description: "Rzeczownik oznaczający przestrzeń nad ziemią",
        examples: [
            { spanish: "Mirar al cielo.", polish: "Patrzeć w niebo." },
            { spanish: "Cielo azul.", polish: "Niebieskie niebo." },
            { spanish: "Cielo estrellado.", polish: "Gwiaździste niebo." }
        ]
    },
    {
        id: 569,
        spanish: "bordo",
        polish: "burt, pokład",
        description: "Rzeczownik oznaczający część statku",
        examples: [
            { spanish: "A bordo del barco.", polish: "Na pokładzie statku." },
            { spanish: "Subir a bordo.", polish: "Wejść na pokład." },
            { spanish: "Diario de bordo.", polish: "Dziennik pokładowy." }
        ]
    },
    {
        id: 570,
        spanish: "alegría",
        polish: "radość",
        description: "Rzeczownik oznaczający uczucie szczęścia",
        examples: [
            { spanish: "Saltar de alegría.", polish: "Skakać z radości." },
            { spanish: "Gran alegría.", polish: "Wielka radość." },
            { spanish: "Sentir alegría.", polish: "Czuć radość." }
        ]
    },
    {
        id: 571,
        spanish: "invierno",
        polish: "zima",
        description: "Rzeczownik oznaczający porę roku",
        examples: [
            { spanish: "En invierno.", polish: "Zimą." },
            { spanish: "El invierno pasado.", polish: "Zeszłej zimy." },
            { spanish: "Ropa de invierno.", polish: "Zimowe ubrania." }
        ]
    },
    {
        id: 572,
        spanish: "sentarse",
        polish: "usiąść, siadać",
        description: "Czasownik zwrotny oznaczający zajęcie pozycji siedzącej",
        examples: [
            { spanish: "Voy a sentarme.", polish: "Zamierzam usiąść." },
            { spanish: "Sentarse en la silla.", polish: "Usiąść na krześle." },
            { spanish: "Se sentó tranquilo.", polish: "Usiadł spokojnie." }
        ]
    },
    {
        id: 573,
        spanish: "escrito - escrita",
        polish: "napisany",
        description: "Imiesłów czasownika 'escribir'",
        examples: [
            { spanish: "Está escrito aquí.", polish: "Jest tutaj napisane." },
            { spanish: "Carta escrita a mano.", polish: "List napisany ręcznie." },
            { spanish: "Texto escrito.", polish: "Napisany tekst." }
        ]
    },
    {
        id: 574,
        spanish: "salvaje",
        polish: "dziki",
        description: "Przymiotnik oznaczający dziką naturę",
        examples: [
            { spanish: "Animal salvaje.", polish: "Dzikie zwierzę." },
            { spanish: "Naturaleza salvaje.", polish: "Dzika przyroda." },
            { spanish: "Vida salvaje.", polish: "Dzikie życie." }
        ]
    },
    {
        id: 575,
        spanish: "instrumento",
        polish: "instrument",
        description: "Rzeczownik oznaczający narzędzie lub instrument muzyczny",
        examples: [
            { spanish: "Tocar un instrumento.", polish: "Grać na instrumencie." },
            { spanish: "Instrumento musical.", polish: "Instrument muzyczny." },
            { spanish: "Instrumento de medición.", polish: "Przyrząd pomiarowy." }
        ]
    },
    {
        id: 576,
        spanish: "guardado - guardada",
        polish: "przechowywany",
        description: "Imiesłów czasownika 'guardar'",
        examples: [
            { spanish: "Está guardado en el cajón.", polish: "Jest przechowywany w szufladzie." },
            { spanish: "Información guardada.", polish: "Zapisane informacje." },
            { spanish: "Secreto bien guardado.", polish: "Dobrze strzeżony sekret." }
        ]
    },
    {
        id: 577,
        spanish: "vidrio",
        polish: "szkło",
        description: "Rzeczownik oznaczający materiał przezroczysty",
        examples: [
            { spanish: "Vaso de vidrio.", polish: "Szklanka." },
            { spanish: "Ventana de vidrio.", polish: "Szklane okno." },
            { spanish: "Vidrio roto.", polish: "Zbite szkło." }
        ]
    },
    {
        id: 578,
        spanish: "hierba",
        polish: "trawa, ziele",
        description: "Rzeczownik oznaczający roślinę",
        examples: [
            { spanish: "Cortar la hierba.", polish: "Kosić trawę." },
            { spanish: "Hierba verde.", polish: "Zielona trawa." },
            { spanish: "Hierba medicinal.", polish: "Ziele lecznicze." }
        ]
    },
    {
        id: 579,
        spanish: "vaca",
        polish: "krowa",
        description: "Rzeczownik oznaczający zwierzę hodowlane",
        examples: [
            { spanish: "Leche de vaca.", polish: "Mleko krowie." },
            { spanish: "Una vaca en el campo.", polish: "Krowa na polu." },
            { spanish: "Cuidar vacas.", polish: "Opiekować się krowami." }
        ]
    },
    {
        id: 580,
        spanish: "trabajo",
        polish: "praca, zadanie",
        description: "Rzeczownik oznaczający zatrudnienie lub wykonanie",
        examples: [
            { spanish: "Ir al trabajo.", polish: "Iść do pracy." },
            { spanish: "Trabajo difícil.", polish: "Trudna praca." },
            { spanish: "Buscar trabajo.", polish: "Szukać pracy." }
        ]
    },
    {
        id: 581,
        spanish: "borde",
        polish: "krawędź, brzeg",
        description: "Rzeczownik oznaczający kraniec",
        examples: [
            { spanish: "Al borde del río.", polish: "Na brzegu rzeki." },
            { spanish: "Borde de la mesa.", polish: "Krawędź stołu." },
            { spanish: "Estar al borde.", polish: "Być na krawędzi." }
        ]
    },
    {
        id: 582,
        spanish: "signo",
        polish: "znak",
        description: "Rzeczownik oznaczający symbol",
        examples: [
            { spanish: "Signo de interrogación.", polish: "Znak zapytania." },
            { spanish: "Signo del zodíaco.", polish: "Znak zodiaku." },
            { spanish: "Un buen signo.", polish: "Dobry znak." }
        ]
    },
    {
        id: 583,
        spanish: "visita",
        polish: "wizyta",
        description: "Rzeczownik oznaczający odwiedziny",
        examples: [
            { spanish: "Recibir una visita.", polish: "Przyjąć gościa." },
            { spanish: "Visita al médico.", polish: "Wizyta u lekarza." },
            { spanish: "Hacer una visita.", polish: "Złożyć wizytę." }
        ]
    },
    {
        id: 584,
        spanish: "pasado",
        polish: "przeszłość, miniony",
        description: "Rzeczownik lub przymiotnik oznaczający czas który minął",
        examples: [
            { spanish: "En el pasado.", polish: "W przeszłości." },
            { spanish: "El año pasado.", polish: "Zeszły rok." },
            { spanish: "Olvidar el pasado.", polish: "Zapomnieć o przeszłości." }
        ]
    },
    {
        id: 585,
        spanish: "suave",
        polish: "miękki, gładki",
        description: "Przymiotnik oznaczający delikatność",
        examples: [
            { spanish: "Piel suave.", polish: "Miękka skóra." },
            { spanish: "Voz suave.", polish: "Łagodny głos." },
            { spanish: "Tela suave.", polish: "Gładka tkanina." }
        ]
    },
    {
        id: 586,
        spanish: "diversión",
        polish: "zabawa",
        description: "Rzeczownik oznaczający rozrywkę",
        examples: [
            { spanish: "Parque de diversiones.", polish: "Park rozrywki." },
            { spanish: "Para mi diversión.", polish: "Dla mojej zabawy." },
            { spanish: "Buscar diversión.", polish: "Szukać rozrywki." }
        ]
    },
    {
        id: 587,
        spanish: "brillante",
        polish: "błyszczący, jasny",
        description: "Przymiotnik oznaczający świecenie",
        examples: [
            { spanish: "Luz brillante.", polish: "Jasne światło." },
            { spanish: "Idea brillante.", polish: "Świetny pomysł." },
            { spanish: "Color brillante.", polish: "Jaskrawy kolor." }
        ]
    },
    {
        id: 588,
        spanish: "gas",
        polish: "gaz",
        description: "Rzeczownik oznaczający stan skupienia",
        examples: [
            { spanish: "Gas natural.", polish: "Gaz ziemny." },
            { spanish: "Cocina de gas.", polish: "Kuchenka gazowa." },
            { spanish: "Estación de gas.", polish: "Stacja benzynowa." }
        ]
    },
    {
        id: 589,
        spanish: "tiempo",
        polish: "pogoda",
        description: "Rzeczownik oznaczający warunki atmosferyczne",
        examples: [
            { spanish: "Buen tiempo.", polish: "Dobra pogoda." },
            { spanish: "¿Qué tiempo hace?", polish: "Jaka jest pogoda?" },
            { spanish: "Tiempo lluvioso.", polish: "Deszczowa pogoda." }
        ]
    },
    {
        id: 590,
        spanish: "mes",
        polish: "miesiąc",
        description: "Rzeczownik oznaczający jednostkę czasu",
        examples: [
            { spanish: "El próximo mes.", polish: "Następny miesiąc." },
            { spanish: "Tres meses.", polish: "Trzy miesiące." },
            { spanish: "Mes de enero.", polish: "Miesiąc styczeń." }
        ]
    },
    {
        id: 591,
        spanish: "millones",
        polish: "miliony",
        description: "Liczebnik oznaczający dużą ilość",
        examples: [
            { spanish: "Millones de personas.", polish: "Miliony ludzi." },
            { spanish: "Dos millones.", polish: "Dwa miliony." },
            { spanish: "Millones de dólares.", polish: "Miliony dolarów." }
        ]
    },
    {
        id: 592,
        spanish: "soportar",
        polish: "znieść, wytrzymać",
        description: "Czasownik oznaczający tolerowanie",
        examples: [
            { spanish: "No puedo soportarlo.", polish: "Nie mogę tego znieść." },
            { spanish: "Soportar el dolor.", polish: "Wytrzymać ból." },
            { spanish: "Soportar presión.", polish: "Znieść presję." }
        ]
    },
    {
        id: 593,
        spanish: "acabar",
        polish: "skończyć",
        description: "Czasownik oznaczający zakończenie",
        examples: [
            { spanish: "Acabar el trabajo.", polish: "Skończyć pracę." },
            { spanish: "Acabo de llegar.", polish: "Właśnie przybyłem." },
            { spanish: "Se acabó.", polish: "Skończyło się." }
        ]
    },
    {
        id: 594,
        spanish: "feliz",
        polish: "szczęśliwy",
        description: "Przymiotnik oznaczający radość",
        examples: [
            { spanish: "Soy muy feliz.", polish: "Jestem bardzo szczęśliwy." },
            { spanish: "Cumpleaños feliz.", polish: "Szczęśliwe urodziny." },
            { spanish: "Vida feliz.", polish: "Szczęśliwe życie." }
        ]
    },
    {
        id: 595,
        spanish: "esperanza",
        polish: "nadzieja",
        description: "Rzeczownik oznaczający nadzieję",
        examples: [
            { spanish: "Perder la esperanza.", polish: "Stracić nadzieję." },
            { spanish: "Tener esperanza.", polish: "Mieć nadzieję." },
            { spanish: "Esperanza de vida.", polish: "Oczekiwana długość życia." }
        ]
    },
    {
        id: 596,
        spanish: "flor",
        polish: "kwiat",
        description: "Rzeczownik oznaczający część rośliny",
        examples: [
            { spanish: "Una flor bonita.", polish: "Ładny kwiat." },
            { spanish: "Ramo de flores.", polish: "Bukiet kwiatów." },
            { spanish: "Flor roja.", polish: "Czerwony kwiat." }
        ]
    },
    {
        id: 597,
        spanish: "vestir",
        polish: "ubierać",
        description: "Czasownik oznaczający zakładanie ubrań",
        examples: [
            { spanish: "Vestir elegante.", polish: "Ubierać się elegancko." },
            { spanish: "Vestir a los niños.", polish: "Ubierać dzieci." },
            { spanish: "Se viste rápido.", polish: "Ubiera się szybko." }
        ]
    },
    {
        id: 598,
        spanish: "extraño - extraña",
        polish: "dziwny, obcy",
        description: "Przymiotnik oznaczający niezwykłość",
        examples: [
            { spanish: "Algo extraño.", polish: "Coś dziwnego." },
            { spanish: "Persona extraña.", polish: "Obca osoba." },
            { spanish: "Muy extraño.", polish: "Bardzo dziwne." }
        ]
    },
    {
        id: 599,
        spanish: "irse",
        polish: "odejść, wyjść",
        description: "Czasownik zwrotny oznaczający opuszczenie miejsca",
        examples: [
            { spanish: "Ya se ha ido.", polish: "Już wyszedł." },
            { spanish: "Me voy ahora.", polish: "Wychodzę teraz." },
            { spanish: "Se fue lejos.", polish: "Odjechał daleko." }
        ]
    },
    {
        id: 600,
        spanish: "comercio",
        polish: "handel",
        description: "Rzeczownik oznaczający wymianę handlową",
        examples: [
            { spanish: "Comercio internacional.", polish: "Handel międzynarodowy." },
            { spanish: "Centro de comercio.", polish: "Centrum handlowe." },
            { spanish: "Zona de comercio.", polish: "Strefa handlowa." }
        ]
    },
    {
        id: 601,
        spanish: "melodía",
        polish: "melodia",
        description: "Rzeczownik oznaczający sekwencję muzyczną",
        examples: [
            { spanish: "Una melodía bonita.", polish: "Piękna melodia." },
            { spanish: "Tocar una melodía.", polish: "Grać melodię." },
            { spanish: "Melodía pegadiza.", polish: "Chwytliwa melodia." }
        ]
    },
    {
        id: 602,
        spanish: "viaje",
        polish: "podróż",
        description: "Rzeczownik oznaczający wyjazd",
        examples: [
            { spanish: "Hacer un viaje.", polish: "Odbyć podróż." },
            { spanish: "Buen viaje.", polish: "Dobrej podróży." },
            { spanish: "Viaje de negocios.", polish: "Podróż służbowa." }
        ]
    },
    {
        id: 603,
        spanish: "oficina",
        polish: "biuro",
        description: "Rzeczownik oznaczający miejsce pracy",
        examples: [
            { spanish: "Ir a la oficina.", polish: "Iść do biura." },
            { spanish: "Oficina central.", polish: "Centrala." },
            { spanish: "Trabajar en oficina.", polish: "Pracować w biurze." }
        ]
    },
    {
        id: 604,
        spanish: "recibir",
        polish: "otrzymać, przyjąć",
        description: "Czasownik oznaczający przyjęcie czegoś",
        examples: [
            { spanish: "Recibir un regalo.", polish: "Otrzymać prezent." },
            { spanish: "Recibir noticias.", polish: "Otrzymać wiadomości." },
            { spanish: "Recibir visitas.", polish: "Przyjmować gości." }
        ]
    },
    {
        id: 605,
        spanish: "fila",
        polish: "rząd, kolejka",
        description: "Rzeczownik oznaczający szereg",
        examples: [
            { spanish: "Hacer fila.", polish: "Stać w kolejce." },
            { spanish: "Primera fila.", polish: "Pierwszy rząd." },
            { spanish: "En fila.", polish: "W szeregu." }
        ]
    },
    {
        id: 606,
        spanish: "boca",
        polish: "usta",
        description: "Rzeczownik oznaczający część ciała",
        examples: [
            { spanish: "Abrir la boca.", polish: "Otworzyć usta." },
            { spanish: "Boca cerrada.", polish: "Zamknięte usta." },
            { spanish: "Hablar con la boca llena.", polish: "Mówić z pełnymi ustami." }
        ]
    },
    {
        id: 607,
        spanish: "exacta - exacto",
        polish: "dokładny",
        description: "Przymiotnik oznaczający precyzję",
        examples: [
            { spanish: "Hora exacta.", polish: "Dokładna godzina." },
            { spanish: "Respuesta exacta.", polish: "Dokładna odpowiedź." },
            { spanish: "Ser exacto.", polish: "Być dokładnym." }
        ]
    },
    {
        id: 608,
        spanish: "símbolo",
        polish: "symbol",
        description: "Rzeczownik oznaczający znak reprezentujący coś",
        examples: [
            { spanish: "Símbolo nacional.", polish: "Symbol narodowy." },
            { spanish: "Símbolo matemático.", polish: "Symbol matematyczny." },
            { spanish: "Usar un símbolo.", polish: "Używać symbolu." }
        ]
    },
    {
        id: 609,
        spanish: "morir",
        polish: "umrzeć",
        description: "Czasownik oznaczający śmierć",
        examples: [
            { spanish: "Morir de viejo.", polish: "Umrzeć ze starości." },
            { spanish: "No quiero morir.", polish: "Nie chcę umrzeć." },
            { spanish: "Morir en paz.", polish: "Umrzeć w spokoju." }
        ]
    },
    {
        id: 610,
        spanish: "menos",
        polish: "najmniej",
        description: "Przysłówek w stopniu najwyższym",
        examples: [
            { spanish: "Lo menos posible.", polish: "Jak najmniej." },
            { spanish: "El menos importante.", polish: "Najmniej ważny." },
            { spanish: "Por lo menos.", polish: "Przynajmniej." }
        ]
    },
    {
        id: 611,
        spanish: "problema",
        polish: "kłopot, problem",
        description: "Rzeczownik oznaczający trudność",
        examples: [
            { spanish: "Tener un problema.", polish: "Mieć problem." },
            { spanish: "Causar problemas.", polish: "Sprawiać kłopoty." },
            { spanish: "Sin problemas.", polish: "Bez problemów." }
        ]
    },
    {
        id: 612,
        spanish: "gritar",
        polish: "krzyczeć",
        description: "Czasownik oznaczający głośne mówienie",
        examples: [
            { spanish: "Gritar de dolor.", polish: "Krzyczeć z bólu." },
            { spanish: "No grites.", polish: "Nie krzycz." },
            { spanish: "Gritar ayuda.", polish: "Krzyczeć o pomoc." }
        ]
    },
    {
        id: 613,
        spanish: "excepto",
        polish: "oprócz, z wyjątkiem",
        description: "Przyimek oznaczający wykluczenie",
        examples: [
            { spanish: "Todos excepto yo.", polish: "Wszyscy oprócz mnie." },
            { spanish: "Excepto los domingos.", polish: "Z wyjątkiem niedziel." },
            { spanish: "Nada excepto eso.", polish: "Nic oprócz tego." }
        ]
    },
    {
        id: 614,
        spanish: "escribir",
        polish: "pisać",
        description: "Czasownik oznaczający tworzenie tekstu",
        examples: [
            { spanish: "Escribir una carta.", polish: "Napisać list." },
            { spanish: "Saber escribir.", polish: "Umieć pisać." },
            { spanish: "Escribir en español.", polish: "Pisać po hiszpańsku." }
        ]
    },
    {
        id: 615,
        spanish: "semilla",
        polish: "nasiono",
        description: "Rzeczownik oznaczający zarodek rośliny",
        examples: [
            { spanish: "Plantar semillas.", polish: "Sadzić nasiona." },
            { spanish: "Semilla de girasol.", polish: "Nasiono słonecznika." },
            { spanish: "Semilla germina.", polish: "Nasiono kiełkuje." }
        ]
    },
    {
        id: 616,
        spanish: "tono",
        polish: "ton",
        description: "Rzeczownik oznaczający barwę dźwięku",
        examples: [
            { spanish: "Tono de voz.", polish: "Ton głosu." },
            { spanish: "Cambiar de tono.", polish: "Zmienić ton." },
            { spanish: "Tono amable.", polish: "Przyjazny ton." }
        ]
    },
    {
        id: 617,
        spanish: "unirse",
        polish: "dołączyć, połączyć się",
        description: "Czasownik zwrotny oznaczający połączenie",
        examples: [
            { spanish: "Unirse al grupo.", polish: "Dołączyć do grupy." },
            { spanish: "Unirse en matrimonio.", polish: "Połączyć się w małżeństwie." },
            { spanish: "Quiero unirme.", polish: "Chcę się przyłączyć." }
        ]
    },
    {
        id: 618,
        spanish: "sugerir",
        polish: "zasugerować",
        description: "Czasownik oznaczający propozycję",
        examples: [
            { spanish: "Sugerir una idea.", polish: "Zasugerować pomysł." },
            { spanish: "¿Qué sugieres?", polish: "Co sugerujesz?" },
            { spanish: "Te sugiero que esperes.", polish: "Sugeruję, żebyś poczekał." }
        ]
    },
    {
        id: 619,
        spanish: "limpia - limpio",
        polish: "czysty",
        description: "Przymiotnik oznaczający brak brudu",
        examples: [
            { spanish: "Casa limpia.", polish: "Czysty dom." },
            { spanish: "Agua limpia.", polish: "Czysta woda." },
            { spanish: "Mantener limpio.", polish: "Utrzymywać w czystości." }
        ]
    },
    {
        id: 620,
        spanish: "rotura",
        polish: "złamanie, pęknięcie",
        description: "Rzeczownik oznaczający uszkodzenie",
        examples: [
            { spanish: "Rotura de hueso.", polish: "Złamanie kości." },
            { spanish: "Rotura del vidrio.", polish: "Pęknięcie szkła." },
            { spanish: "Causar una rotura.", polish: "Spowodować pęknięcie." }
        ]
    },
    {
        id: 621,
        spanish: "dama",
        polish: "dama, pani",
        description: "Rzeczownik oznaczający kobietę",
        examples: [
            { spanish: "Una dama elegante.", polish: "Elegancka dama." },
            { spanish: "Damas y caballeros.", polish: "Panie i panowie." },
            { spanish: "Ser toda una dama.", polish: "Być prawdziwą damą." }
        ]
    },
    {
        id: 622,
        spanish: "patio",
        polish: "podwórze, dziedziniec",
        description: "Rzeczownik oznaczający przestrzeń zewnętrzną",
        examples: [
            { spanish: "Jugar en el patio.", polish: "Bawić się na podwórzu." },
            { spanish: "Patio interior.", polish: "Wewnętrzny dziedziniec." },
            { spanish: "Limpiar el patio.", polish: "Sprzątać podwórze." }
        ]
    },
    {
        id: 623,
        spanish: "aumentar",
        polish: "wzrastać, zwiększać",
        description: "Czasownik oznaczający wzrost",
        examples: [
            { spanish: "Aumentar el precio.", polish: "Zwiększyć cenę." },
            { spanish: "Los precios aumentan.", polish: "Ceny rosną." },
            { spanish: "Aumentar la velocidad.", polish: "Zwiększyć prędkość." }
        ]
    },
    {
        id: 624,
        spanish: "mal - malo",
        polish: "zły, źle",
        description: "Przymiotnik lub przysłówek oznaczający negatyw",
        examples: [
            { spanish: "Sentirse mal.", polish: "Czuć się źle." },
            { spanish: "Un hombre malo.", polish: "Zły człowiek." },
            { spanish: "Mal tiempo.", polish: "Zła pogoda." }
        ]
    },
    {
        id: 625,
        spanish: "golpe",
        polish: "uderzenie, cios",
        description: "Rzeczownik oznaczający uderzenie",
        examples: [
            { spanish: "Dar un golpe.", polish: "Zadać cios." },
            { spanish: "Golpe fuerte.", polish: "Silne uderzenie." },
            { spanish: "Recibir un golpe.", polish: "Otrzymać cios." }
        ]
    },
    {
        id: 626,
        spanish: "aceite",
        polish: "olej",
        description: "Rzeczownik oznaczający tłuszcz płynny",
        examples: [
            { spanish: "Aceite de oliva.", polish: "Oliwa z oliwek." },
            { spanish: "Freír con aceite.", polish: "Smażyć na oleju." },
            { spanish: "Cambiar el aceite.", polish: "Wymienić olej." }
        ]
    },
    {
        id: 627,
        spanish: "sangre",
        polish: "krew",
        description: "Rzeczownik oznaczający płyn ustrojowy",
        examples: [
            { spanish: "Donar sangre.", polish: "Oddać krew." },
            { spanish: "Sangre roja.", polish: "Czerwona krew." },
            { spanish: "Análisis de sangre.", polish: "Badanie krwi." }
        ]
    },
    {
        id: 628,
        spanish: "tocar",
        polish: "dotykać, grać",
        description: "Czasownik oznaczający kontakt fizyczny lub grę na instrumencie",
        examples: [
            { spanish: "Tocar la puerta.", polish: "Pukać do drzwi." },
            { spanish: "Tocar el piano.", polish: "Grać na pianinie." },
            { spanish: "No toques.", polish: "Nie dotykaj." }
        ]
    },
    {
        id: 629,
        spanish: "crecer",
        polish: "rosnąć",
        description: "Czasownik oznaczający wzrost",
        examples: [
            { spanish: "Los niños crecen.", polish: "Dzieci rosną." },
            { spanish: "Crecer rápido.", polish: "Rosnąć szybko." },
            { spanish: "Dejar crecer.", polish: "Pozwolić rosnąć." }
        ]
    },
    {
        id: 630,
        spanish: "ciento",
        polish: "sto, procent",
        description: "Liczebnik lub rzeczownik",
        examples: [
            { spanish: "Ciento cincuenta.", polish: "Sto pięćdziesiąt." },
            { spanish: "Por ciento.", polish: "Procent." },
            { spanish: "Un ciento de personas.", polish: "Sto osób." }
        ]
    },
    {
        id: 631,
        spanish: "mezclar",
        polish: "mieszać",
        description: "Czasownik oznaczający łączenie",
        examples: [
            { spanish: "Mezclar ingredientes.", polish: "Mieszać składniki." },
            { spanish: "Mezclar colores.", polish: "Mieszać kolory." },
            { spanish: "Bien mezclado.", polish: "Dobrze wymieszane." }
        ]
    },
    {
        id: 632,
        spanish: "equipo",
        polish: "zespół, drużyna",
        description: "Rzeczownik oznaczający grupę",
        examples: [
            { spanish: "Equipo de fútbol.", polish: "Drużyna piłkarska." },
            { spanish: "Trabajar en equipo.", polish: "Pracować w zespole." },
            { spanish: "Nuestro equipo.", polish: "Nasz zespół." }
        ]
    },
    {
        id: 633,
        spanish: "alambre",
        polish: "drut",
        description: "Rzeczownik oznaczający cienki metal",
        examples: [
            { spanish: "Alambre de acero.", polish: "Drut stalowy." },
            { spanish: "Cortar el alambre.", polish: "Przeciąć drut." },
            { spanish: "Cerca de alambre.", polish: "Ogrodzenie z drutu." }
        ]
    },
    {
        id: 634,
        spanish: "costo",
        polish: "koszt",
        description: "Rzeczownik oznaczający cenę",
        examples: [
            { spanish: "El costo total.", polish: "Całkowity koszt." },
            { spanish: "Costo de vida.", polish: "Koszty utrzymania." },
            { spanish: "Reducir costos.", polish: "Zmniejszyć koszty." }
        ]
    },
    {
        id: 635,
        spanish: "perdido - perdida",
        polish: "zgubiony, stracony",
        description: "Imiesłów czasownika 'perder'",
        examples: [
            { spanish: "Objeto perdido.", polish: "Zgubiony przedmiot." },
            { spanish: "Estar perdido.", polish: "Być zgubionym." },
            { spanish: "Tiempo perdido.", polish: "Stracony czas." }
        ]
    },
    {
        id: 636,
        spanish: "marrón",
        polish: "brązowy",
        description: "Przymiotnik oznaczający kolor",
        examples: [
            { spanish: "Color marrón.", polish: "Brązowy kolor." },
            { spanish: "Ojos marrones.", polish: "Brązowe oczy." },
            { spanish: "Zapatos marrones.", polish: "Brązowe buty." }
        ]
    },
    {
        id: 637,
        spanish: "desgaste",
        polish: "zużycie, znoszenie",
        description: "Rzeczownik oznaczający niszczenie przez użytkowanie",
        examples: [
            { spanish: "Desgaste natural.", polish: "Naturalne zużycie." },
            { spanish: "Resistente al desgaste.", polish: "Odporny na zużycie." },
            { spanish: "Mostrar desgaste.", polish: "Pokazywać zużycie." }
        ]
    },
    {
        id: 638,
        spanish: "jardín",
        polish: "ogród",
        description: "Rzeczownik oznaczający teren z roślinami",
        examples: [
            { spanish: "Jardín de flores.", polish: "Ogród kwiatowy." },
            { spanish: "Cuidar el jardín.", polish: "Opiekować się ogrodem." },
            { spanish: "Jugar en el jardín.", polish: "Bawić się w ogrodzie." }
        ]
    },
    {
        id: 639,
        spanish: "igual",
        polish: "równy, taki sam",
        description: "Przymiotnik oznaczający jednakość",
        examples: [
            { spanish: "Son iguales.", polish: "Są takie same." },
            { spanish: "Me da igual.", polish: "Jest mi wszystko jedno." },
            { spanish: "Por igual.", polish: "Równo." }
        ]
    },
    {
        id: 640,
        spanish: "enviado - enviada",
        polish: "wysłany",
        description: "Imiesłów czasownika 'enviar'",
        examples: [
            { spanish: "Mensaje enviado.", polish: "Wysłana wiadomość." },
            { spanish: "Ya fue enviado.", polish: "Już został wysłany." },
            { spanish: "Paquete enviado.", polish: "Wysłana paczka." }
        ]
    },
    {
        id: 641,
        spanish: "elegir",
        polish: "wybierać",
        description: "Czasownik oznaczający dokonanie wyboru",
        examples: [
            { spanish: "Elegir una opción.", polish: "Wybrać opcję." },
            { spanish: "Difícil de elegir.", polish: "Trudne do wyboru." },
            { spanish: "Puedes elegir.", polish: "Możesz wybrać." }
        ]
    },
    {
        id: 642,
        spanish: "caer",
        polish: "upaść",
        description: "Czasownik oznaczający spadanie",
        examples: [
            { spanish: "Cayó al suelo.", polish: "Upadł na ziemię." },
            { spanish: "Dejar caer.", polish: "Upuścić." },
            { spanish: "Caer de la silla.", polish: "Spaść z krzesła." }
        ]
    },
    {
        id: 643,
        spanish: "encajar",
        polish: "pasować",
        description: "Czasownik oznaczający dopasowanie",
        examples: [
            { spanish: "Encajar perfectamente.", polish: "Pasować idealnie." },
            { spanish: "No encaja.", polish: "Nie pasuje." },
            { spanish: "Hacer encajar.", polish: "Sprawić, żeby pasowało." }
        ]
    },
    {
        id: 644,
        spanish: "fluir",
        polish: "płynąć",
        description: "Czasownik oznaczający przepływ",
        examples: [
            { spanish: "El agua fluye.", polish: "Woda płynie." },
            { spanish: "Fluir naturalmente.", polish: "Płynąć naturalnie." },
            { spanish: "Dejar fluir.", polish: "Pozwolić płynąć." }
        ]
    },
    {
        id: 645,
        spanish: "justo - justa",
        polish: "sprawiedliwy",
        description: "Przymiotnik oznaczający uczciwość",
        examples: [
            { spanish: "Ser justo.", polish: "Być sprawiedliwym." },
            { spanish: "Precio justo.", polish: "Uczciwa cena." },
            { spanish: "Justo a tiempo.", polish: "W samą porę." }
        ]
    },
    {
        id: 646,
        spanish: "banco",
        polish: "bank, ławka",
        description: "Rzeczownik oznaczający instytucję lub siedzisko",
        examples: [
            { spanish: "Ir al banco.", polish: "Iść do banku." },
            { spanish: "Sentarse en el banco.", polish: "Usiąść na ławce." },
            { spanish: "Cuenta de banco.", polish: "Konto bankowe." }
        ]
    },
    {
        id: 647,
        spanish: "recoger",
        polish: "zbierać",
        description: "Czasownik oznaczający gromadzenie",
        examples: [
            { spanish: "Recoger basura.", polish: "Zbierać śmieci." },
            { spanish: "Recoger la mesa.", polish: "Posprzątać ze stołu." },
            { spanish: "Recoger información.", polish: "Zbierać informacje." }
        ]
    },
    {
        id: 648,
        spanish: "guardar",
        polish: "zapisać, zachować",
        description: "Czasownik oznaczający przechowywanie",
        examples: [
            { spanish: "Guardar un archivo.", polish: "Zapisać plik." },
            { spanish: "Guardar silencio.", polish: "Zachować milczenie." },
            { spanish: "Guardar un secreto.", polish: "Zachować tajemnicę." }
        ]
    },
    {
        id: 649,
        spanish: "control",
        polish: "kontrola",
        description: "Rzeczownik oznaczający nadzór",
        examples: [
            { spanish: "Perder el control.", polish: "Stracić kontrolę." },
            { spanish: "Control remoto.", polish: "Pilot." },
            { spanish: "Bajo control.", polish: "Pod kontrolą." }
        ]
    },
    {
        id: 650,
        spanish: "decimal",
        polish: "dziesiętny",
        description: "Przymiotnik dotyczący systemu liczbowego",
        examples: [
            { spanish: "Número decimal.", polish: "Liczba dziesiętna." },
            { spanish: "Sistema decimal.", polish: "System dziesiętny." },
            { spanish: "Punto decimal.", polish: "Przecinek dziesiętny." }
        ]
    },
    {
        id: 651,
        spanish: "oído",
        polish: "ucho",
        description: "Rzeczownik oznaczający narząd słuchu",
        examples: [
            { spanish: "Dolor de oído.", polish: "Ból ucha." },
            { spanish: "Al oído.", polish: "Do ucha." },
            { spanish: "Tener buen oído.", polish: "Mieć dobry słuch." }
        ]
    },
    {
        id: 652,
        spanish: "demás",
        polish: "inni, reszta",
        description: "Zaimek oznaczający pozostałych",
        examples: [
            { spanish: "Los demás.", polish: "Pozostali." },
            { spanish: "Y lo demás.", polish: "I reszta." },
            { spanish: "Por lo demás.", polish: "Co do reszty." }
        ]
    },
    {
        id: 653,
        spanish: "bastante",
        polish: "dość, wystarczająco",
        description: "Przysłówek oznaczający odpowiednią ilość",
        examples: [
            { spanish: "Es bastante bueno.", polish: "Jest dość dobry." },
            { spanish: "Bastante grande.", polish: "Wystarczająco duży." },
            { spanish: "Tengo bastante.", polish: "Mam dość." }
        ]
    },
    {
        id: 654,
        spanish: "romper",
        polish: "złamać, zepsuć",
        description: "Czasownik oznaczający uszkodzenie",
        examples: [
            { spanish: "Romper un vaso.", polish: "Zbić szklankę." },
            { spanish: "Se rompió.", polish: "Się zepsuło." },
            { spanish: "Romper el hielo.", polish: "Przełamać lody." }
        ]
    },
    {
        id: 655,
        spanish: "caso",
        polish: "przypadek, sprawa",
        description: "Rzeczownik oznaczający sytuację",
        examples: [
            { spanish: "En caso de emergencia.", polish: "W przypadku awarii." },
            { spanish: "Cada caso.", polish: "Każdy przypadek." },
            { spanish: "Hacer caso.", polish: "Słuchać." }
        ]
    },
    {
        id: 656,
        spanish: "medio - media",
        polish: "środkowy, połowa",
        description: "Przymiotnik lub rzeczownik oznaczający centrum",
        examples: [
            { spanish: "En medio.", polish: "W środku." },
            { spanish: "Media hora.", polish: "Pół godziny." },
            { spanish: "Medio día.", polish: "Południe." }
        ]
    },
    {
        id: 657,
        spanish: "matar",
        polish: "zabić",
        description: "Czasownik oznaczający pozbawienie życia",
        examples: [
            { spanish: "Matar un insecto.", polish: "Zabić owada." },
            { spanish: "No matarás.", polish: "Nie zabijaj." },
            { spanish: "Matar el tiempo.", polish: "Zabijać czas." }
        ]
    },
    {
        id: 658,
        spanish: "hijo",
        polish: "syn",
        description: "Rzeczownik oznaczający męskie dziecko",
        examples: [
            { spanish: "Mi hijo mayor.", polish: "Mój starszy syn." },
            { spanish: "Tengo un hijo.", polish: "Mam syna." },
            { spanish: "Hijo único.", polish: "Jedynak." }
        ]
    },
    {
        id: 659,
        spanish: "lago",
        polish: "jezioro",
        description: "Rzeczownik oznaczający zbiornik wodny",
        examples: [
            { spanish: "Orilla del lago.", polish: "Brzeg jeziora." },
            { spanish: "Lago grande.", polish: "Duże jezioro." },
            { spanish: "Nadar en el lago.", polish: "Pływać w jeziorze." }
        ]
    },
    {
        id: 660,
        spanish: "momento",
        polish: "moment, chwila",
        description: "Rzeczownik oznaczający krótki okres czasu",
        examples: [
            { spanish: "Un momento, por favor.", polish: "Chwileczkę, proszę." },
            { spanish: "En este momento.", polish: "W tej chwili." },
            { spanish: "El mejor momento.", polish: "Najlepszy moment." }
        ]
    },
    {
        id: 661,
        spanish: "escala",
        polish: "skala, drabina",
        description: "Rzeczownik oznaczający system pomiarowy lub narzędzie",
        examples: [
            { spanish: "Escala de valores.", polish: "Skala wartości." },
            { spanish: "A gran escala.", polish: "Na dużą skalę." },
            { spanish: "Subir la escala.", polish: "Wejść po drabinie." }
        ]
    },
    {
        id: 662,
        spanish: "fuerte",
        polish: "głośny",
        description: "Przymiotnik oznaczający wysoką głośność",
        examples: [
            { spanish: "Música fuerte.", polish: "Głośna muzyka." },
            { spanish: "Hablar fuerte.", polish: "Mówić głośno." },
            { spanish: "Ruido fuerte.", polish: "Głośny hałas." }
        ]
    },
    {
        id: 663,
        spanish: "primavera",
        polish: "wiosna",
        description: "Rzeczownik oznaczający porę roku",
        examples: [
            { spanish: "En primavera.", polish: "Wiosną." },
            { spanish: "La primavera pasada.", polish: "Zeszłej wiosny." },
            { spanish: "Flores de primavera.", polish: "Wiosenne kwiaty." }
        ]
    },
    {
        id: 664,
        spanish: "observar",
        polish: "obserwować",
        description: "Czasownik oznaczający przyglądanie się",
        examples: [
            { spanish: "Observar la naturaleza.", polish: "Obserwować przyrodę." },
            { spanish: "Observar con cuidado.", polish: "Obserwować uważnie." },
            { spanish: "Me gusta observar.", polish: "Lubię obserwować." }
        ]
    },
    {
        id: 665,
        spanish: "niño",
        polish: "dziecko, chłopiec",
        description: "Rzeczownik oznaczający młodą osobę",
        examples: [
            { spanish: "Un niño pequeño.", polish: "Małe dziecko." },
            { spanish: "Niños y niñas.", polish: "Chłopcy i dziewczynki." },
            { spanish: "Cuidar niños.", polish: "Opiekować się dziećmi." }
        ]
    },
    {
        id: 666,
        spanish: "recta - recto",
        polish: "prosty",
        description: "Przymiotnik oznaczający brak krzywizny",
        examples: [
            { spanish: "Línea recta.", polish: "Prosta linia." },
            { spanish: "Camino recto.", polish: "Prosta droga." },
            { spanish: "Todo recto.", polish: "Prosto." }
        ]
    },
    {
        id: 667,
        spanish: "consonante",
        polish: "spółgłoska",
        description: "Rzeczownik gramatyczny",
        examples: [
            { spanish: "Letra consonante.", polish: "Litera spółgłoskowa." },
            { spanish: "Sonido consonante.", polish: "Dźwięk spółgłoski." },
            { spanish: "Escribir consonantes.", polish: "Pisać spółgłoski." }
        ]
    },
    {
        id: 668,
        spanish: "nación",
        polish: "naród",
        description: "Rzeczownik oznaczający państwo",
        examples: [
            { spanish: "Himno nacional.", polish: "Hymn narodowy." },
            { spanish: "Nuestra nación.", polish: "Nasz naród." },
            { spanish: "Naciones Unidas.", polish: "Narody Zjednoczone." }
        ]
    },
    {
        id: 669,
        spanish: "diccionario",
        polish: "słownik",
        description: "Rzeczownik oznaczający książkę z definicjami",
        examples: [
            { spanish: "Buscar en el diccionario.", polish: "Szukać w słowniku." },
            { spanish: "Diccionario español.", polish: "Słownik hiszpański." },
            { spanish: "Consultar el diccionario.", polish: "Sprawdzić w słowniku." }
        ]
    },
    {
        id: 670,
        spanish: "leche",
        polish: "mleko",
        description: "Rzeczownik oznaczający napój",
        examples: [
            { spanish: "Tomar leche.", polish: "Pić mleko." },
            { spanish: "Leche fresca.", polish: "Świeże mleko." },
            { spanish: "Café con leche.", polish: "Kawa z mlekiem." }
        ]
    },
    {
        id: 671,
        spanish: "velocidad",
        polish: "prędkość",
        description: "Rzeczownik oznaczający szybkość",
        examples: [
            { spanish: "Alta velocidad.", polish: "Duża prędkość." },
            { spanish: "Límite de velocidad.", polish: "Ograniczenie prędkości." },
            { spanish: "Aumentar la velocidad.", polish: "Zwiększyć prędkość." }
        ]
    },
    {
        id: 672,
        spanish: "método",
        polish: "metoda",
        description: "Rzeczownik oznaczający sposób",
        examples: [
            { spanish: "Método eficaz.", polish: "Skuteczna metoda." },
            { spanish: "Usar un método.", polish: "Używać metody." },
            { spanish: "Método científico.", polish: "Metoda naukowa." }
        ]
    },
    {
        id: 673,
        spanish: "órgano",
        polish: "organ",
        description: "Rzeczownik oznaczający część ciała lub instrument",
        examples: [
            { spanish: "Órgano vital.", polish: "Organ życiowy." },
            { spanish: "Tocar el órgano.", polish: "Grać na organach." },
            { spanish: "Donación de órganos.", polish: "Dawstwo organów." }
        ]
    },
    {
        id: 674,
        spanish: "pagar",
        polish: "płacić",
        description: "Czasownik oznaczający dokonanie płatności",
        examples: [
            { spanish: "Pagar la cuenta.", polish: "Zapłacić rachunek." },
            { spanish: "¿Cuánto hay que pagar?", polish: "Ile trzeba zapłacić?" },
            { spanish: "Pagar en efectivo.", polish: "Płacić gotówką." }
        ]
    },
    {
        id: 675,
        spanish: "edad",
        polish: "wiek",
        description: "Rzeczownik oznaczający liczbę lat",
        examples: [
            { spanish: "¿Qué edad tienes?", polish: "Ile masz lat?" },
            { spanish: "A mi edad.", polish: "W moim wieku." },
            { spanish: "Edad avanzada.", polish: "Podeszły wiek." }
        ]
    },
    {
        id: 676,
        spanish: "sección",
        polish: "sekcja",
        description: "Rzeczownik oznaczający część",
        examples: [
            { spanish: "Esta sección.", polish: "Ta sekcja." },
            { spanish: "Sección de deportes.", polish: "Dział sportowy." },
            { spanish: "Dividir en secciones.", polish: "Podzielić na sekcje." }
        ]
    },
    {
        id: 677,
        spanish: "vestido",
        polish: "sukienka",
        description: "Rzeczownik oznaczający ubranie",
        examples: [
            { spanish: "Un vestido bonito.", polish: "Ładna sukienka." },
            { spanish: "Vestido de novia.", polish: "Suknia ślubna." },
            { spanish: "Llevar un vestido.", polish: "Nosić sukienkę." }
        ]
    },
    {
        id: 678,
        spanish: "nube",
        polish: "chmura",
        description: "Rzeczownik oznaczający skupisko pary wodnej",
        examples: [
            { spanish: "Nubes blancas.", polish: "Białe chmury." },
            { spanish: "Cielo con nubes.", polish: "Pochmurne niebo." },
            { spanish: "Las nubes pasan.", polish: "Chmury przechodzą." }
        ]
    },
    {
        id: 679,
        spanish: "sorpresa",
        polish: "niespodzianka",
        description: "Rzeczownik oznaczający niespodziewane wydarzenie",
        examples: [
            { spanish: "¡Qué sorpresa!", polish: "Co za niespodzianka!" },
            { spanish: "Fiesta sorpresa.", polish: "Impreza niespodzianka." },
            { spanish: "Dar una sorpresa.", polish: "Sprawić niespodziankę." }
        ]
    },
    {
        id: 680,
        spanish: "tranquila - tranquilo",
        polish: "spokojny",
        description: "Przymiotnik oznaczający brak hałasu",
        examples: [
            { spanish: "Un lugar tranquilo.", polish: "Spokojne miejsce." },
            { spanish: "Estar tranquilo.", polish: "Być spokojnym." },
            { spanish: "Vida tranquila.", polish: "Spokojne życie." }
        ]
    },
    {
        id: 681,
        spanish: "piedra",
        polish: "kamień",
        description: "Rzeczownik oznaczający twardy materiał",
        examples: [
            { spanish: "Una piedra grande.", polish: "Duży kamień." },
            { spanish: "Tirar piedras.", polish: "Rzucać kamieniami." },
            { spanish: "Casa de piedra.", polish: "Kamienny dom." }
        ]
    },
    {
        id: 682,
        spanish: "pequeño - pequeña",
        polish: "maleńki, malutki",
        description: "Przymiotnik oznaczający bardzo małą wielkość",
        examples: [
            { spanish: "Un niño pequeñito.", polish: "Malutkie dziecko." },
            { spanish: "Cosa pequeña.", polish: "Mała rzecz." },
            { spanish: "Muy pequeño.", polish: "Bardzo mały." }
        ]
    },
    {
        id: 683,
        spanish: "ascenso",
        polish: "wspinaczka, awans",
        description: "Rzeczownik oznaczający ruch w górę",
        examples: [
            { spanish: "Ascenso a la montaña.", polish: "Wspinaczka na górę." },
            { spanish: "Ascenso laboral.", polish: "Awans zawodowy." },
            { spanish: "Ascenso difícil.", polish: "Trudna wspinaczka." }
        ]
    },
    {
        id: 684,
        spanish: "fresco - fresca",
        polish: "świeży, chłodny",
        description: "Przymiotnik oznaczający niską temperaturę lub świeżość",
        examples: [
            { spanish: "Aire fresco.", polish: "Świeże powietrze." },
            { spanish: "Pan fresco.", polish: "Świeży chleb." },
            { spanish: "Hace fresco.", polish: "Jest chłodno." }
        ]
    },
    {
        id: 685,
        spanish: "diseño",
        polish: "projekt, wzór",
        description: "Rzeczownik oznaczający plan lub wzór",
        examples: [
            { spanish: "Diseño gráfico.", polish: "Projekt graficzny." },
            { spanish: "Diseño moderno.", polish: "Nowoczesny projekt." },
            { spanish: "Hacer un diseño.", polish: "Stworzyć projekt." }
        ]
    },
    {
        id: 686,
        spanish: "pobre",
        polish: "biedny",
        description: "Przymiotnik oznaczający brak zasobów",
        examples: [
            { spanish: "Gente pobre.", polish: "Biedni ludzie." },
            { spanish: "País pobre.", polish: "Biedny kraj." },
            { spanish: "Pobre hombre.", polish: "Biedny człowiek." }
        ]
    },
    {
        id: 687,
        spanish: "mucho",
        polish: "dużo, wiele",
        description: "Przysłówek oznaczający dużą ilość",
        examples: [
            { spanish: "Mucho dinero.", polish: "Dużo pieniędzy." },
            { spanish: "Tengo mucho.", polish: "Mam dużo." },
            { spanish: "Mucho mejor.", polish: "Dużo lepiej." }
        ]
    },
    {
        id: 688,
        spanish: "experimento",
        polish: "eksperyment",
        description: "Rzeczownik oznaczający próbę naukową",
        examples: [
            { spanish: "Hacer un experimento.", polish: "Przeprowadzić eksperyment." },
            { spanish: "Experimento científico.", polish: "Eksperyment naukowy." },
            { spanish: "Resultado del experimento.", polish: "Wynik eksperymentu." }
        ]
    },
    {
        id: 689,
        spanish: "inferior",
        polish: "dolny, niższy",
        description: "Przymiotnik oznaczający niższą pozycję",
        examples: [
            { spanish: "Parte inferior.", polish: "Dolna część." },
            { spanish: "Nivel inferior.", polish: "Niższy poziom." },
            { spanish: "Calidad inferior.", polish: "Gorsza jakość." }
        ]
    },
    {
        id: 690,
        spanish: "clave",
        polish: "klucz, kluczowy",
        description: "Rzeczownik lub przymiotnik oznaczający istotność",
        examples: [
            { spanish: "Palabra clave.", polish: "Słowo kluczowe." },
            { spanish: "Punto clave.", polish: "Kluczowy punkt." },
            { spanish: "La clave del éxito.", polish: "Klucz do sukcesu." }
        ]
    },
    {
        id: 691,
        spanish: "hierro",
        polish: "żelazo",
        description: "Rzeczownik oznaczający metal",
        examples: [
            { spanish: "Barra de hierro.", polish: "Sztaba żelaza." },
            { spanish: "Hierro fundido.", polish: "Żeliwo." },
            { spanish: "Fuerte como el hierro.", polish: "Mocny jak żelazo." }
        ]
    },
    {
        id: 692,
        spanish: "sola - solo",
        polish: "pojedynczy, sam",
        description: "Przymiotnik oznaczający odosobnienie",
        examples: [
            { spanish: "Una sola vez.", polish: "Tylko raz." },
            { spanish: "Estar solo.", polish: "Być samemu." },
            { spanish: "Solo yo.", polish: "Tylko ja." }
        ]
    },
    {
        id: 693,
        spanish: "palo",
        polish: "kij, patyk",
        description: "Rzeczownik oznaczający kawałek drewna",
        examples: [
            { spanish: "Un palo largo.", polish: "Długi kij." },
            { spanish: "Palo de madera.", polish: "Drewniany patyk." },
            { spanish: "Golpear con un palo.", polish: "Uderzyć kijem." }
        ]
    },
    {
        id: 694,
        spanish: "plana - plano",
        polish: "płaski",
        description: "Przymiotnik oznaczający równą powierzchnię",
        examples: [
            { spanish: "Superficie plana.", polish: "Płaska powierzchnia." },
            { spanish: "Tierra plana.", polish: "Płaska ziemia." },
            { spanish: "Zapatos planos.", polish: "Płaskie buty." }
        ]
    },
    {
        id: 695,
        spanish: "veinte",
        polish: "dwadzieścia",
        description: "Liczebnik oznaczający 20",
        examples: [
            { spanish: "Veinte años.", polish: "Dwadzieścia lat." },
            { spanish: "Veinte personas.", polish: "Dwadzieścia osób." },
            { spanish: "Son las veinte.", polish: "Jest dwudziesta." }
        ]
    },
    {
        id: 696,
        spanish: "piel",
        polish: "skóra",
        description: "Rzeczownik oznaczający powłokę ciała",
        examples: [
            { spanish: "Piel suave.", polish: "Miękka skóra." },
            { spanish: "Cuidar la piel.", polish: "Dbać o skórę." },
            { spanish: "Piel sensible.", polish: "Wrażliwa skóra." }
        ]
    },
    {
        id: 697,
        spanish: "sonrisa",
        polish: "uśmiech",
        description: "Rzeczownik oznaczający wyraz twarzy",
        examples: [
            { spanish: "Una sonrisa bonita.", polish: "Ładny uśmiech." },
            { spanish: "Sonreír con una sonrisa.", polish: "Uśmiechać się." },
            { spanish: "Sonrisa alegre.", polish: "Radosny uśmiech." }
        ]
    },
    {
        id: 698,
        spanish: "pliegue",
        polish: "fałda, zagięcie",
        description: "Rzeczownik oznaczający złożenie",
        examples: [
            { spanish: "Pliegue de la tela.", polish: "Fałda tkaniny." },
            { spanish: "Hacer un pliegue.", polish: "Zrobić zagięcie." },
            { spanish: "Sin pliegues.", polish: "Bez fałd." }
        ]
    },
    {
        id: 699,
        spanish: "agujero",
        polish: "dziura, otwór",
        description: "Rzeczownik oznaczający pustkę w materiale",
        examples: [
            { spanish: "Un agujero en la pared.", polish: "Dziura w ścianie." },
            { spanish: "Tapar el agujero.", polish: "Zatkać dziurę." },
            { spanish: "Agujero negro.", polish: "Czarna dziura." }
        ]
    },
    {
        id: 700,
        spanish: "saltar",
        polish: "skakać",
        description: "Czasownik oznaczający wyskok",
        examples: [
            { spanish: "Saltar de alegría.", polish: "Skakać z radości." },
            { spanish: "Saltar alto.", polish: "Skakać wysoko." },
            { spanish: "Saltar la cuerda.", polish: "Skakać przez skakankę." }
        ]
    },
    {
        id: 701,
        spanish: "bebé",
        polish: "niemowlę",
        description: "Rzeczownik oznaczający małe dziecko",
        examples: [
            { spanish: "Un bebé recién nacido.", polish: "Noworodek." },
            { spanish: "Cuidar al bebé.", polish: "Opiekować się niemowlęciem." },
            { spanish: "El bebé llora.", polish: "Niemowlę płacze." }
        ]
    },
    {
        id: 702,
        spanish: "ocho",
        polish: "osiem",
        description: "Liczebnik oznaczający 8",
        examples: [
            { spanish: "Ocho días.", polish: "Osiem dni." },
            { spanish: "Son las ocho.", polish: "Jest ósma." },
            { spanish: "Tengo ocho años.", polish: "Mam osiem lat." }
        ]
    },
    {
        id: 703,
        spanish: "pueblo",
        polish: "wioska, lud",
        description: "Rzeczownik oznaczający małą miejscowość lub społeczność",
        examples: [
            { spanish: "Un pueblo pequeño.", polish: "Mała wioska." },
            { spanish: "El pueblo español.", polish: "Naród hiszpański." },
            { spanish: "Vivir en el pueblo.", polish: "Mieszkać na wsi." }
        ]
    },
    {
        id: 704,
        spanish: "reunirse",
        polish: "spotykać się",
        description: "Czasownik zwrotny oznaczający zgromadzenie",
        examples: [
            { spanish: "Reunirse con amigos.", polish: "Spotykać się z przyjaciółmi." },
            { spanish: "Nos reunimos mañana.", polish: "Spotykamy się jutro." },
            { spanish: "Reunirse en la oficina.", polish: "Spotkać się w biurze." }
        ]
    },
    {
        id: 705,
        spanish: "raíz",
        polish: "korzeń",
        description: "Rzeczownik oznaczający część rośliny",
        examples: [
            { spanish: "La raíz del árbol.", polish: "Korzeń drzewa." },
            { spanish: "Raíz cuadrada.", polish: "Pierwiastek kwadratowy." },
            { spanish: "De raíz.", polish: "Od podstaw." }
        ]
    },
    {
        id: 706,
        spanish: "comprar",
        polish: "kupować",
        description: "Czasownik oznaczający nabycie",
        examples: [
            { spanish: "Comprar comida.", polish: "Kupować jedzenie." },
            { spanish: "Ir a comprar.", polish: "Iść na zakupy." },
            { spanish: "Comprar un regalo.", polish: "Kupić prezent." }
        ]
    },
    {
        id: 707,
        spanish: "elevar",
        polish: "podnosić, wznosić",
        description: "Czasownik oznaczający podnoszenie",
        examples: [
            { spanish: "Elevar la mano.", polish: "Podnieść rękę." },
            { spanish: "Elevar el precio.", polish: "Podnieść cenę." },
            { spanish: "Elevar el nivel.", polish: "Podnieść poziom." }
        ]
    },
    {
        id: 708,
        spanish: "resolver",
        polish: "rozwiązywać",
        description: "Czasownik oznaczający znajdowanie rozwiązań",
        examples: [
            { spanish: "Resolver ecuaciones.", polish: "Rozwiązywać równania." },
            { spanish: "Resolver dudas.", polish: "Rozwiązać wątpliwości." },
            { spanish: "Problema resuelto.", polish: "Problem rozwiązany." }
        ]
    },
    {
        id: 709,
        spanish: "metal",
        polish: "metal",
        description: "Rzeczownik oznaczający materiał",
        examples: [
            { spanish: "Objeto de metal.", polish: "Przedmiot z metalu." },
            { spanish: "Metal pesado.", polish: "Ciężki metal." },
            { spanish: "Trabajar con metal.", polish: "Pracować z metalem." }
        ]
    },
    {
        id: 710,
        spanish: "si",
        polish: "czy",
        description: "Spójnik wprowadzający pytanie",
        examples: [
            { spanish: "No sé si vendrá.", polish: "Nie wiem, czy przyjdzie." },
            { spanish: "Pregunta si es cierto.", polish: "Zapytaj, czy to prawda." },
            { spanish: "Dime si puedes.", polish: "Powiedz mi, czy możesz." }
        ]
    },
    {
        id: 711,
        spanish: "empujar",
        polish: "pchać",
        description: "Czasownik oznaczający nacisk",
        examples: [
            { spanish: "Empujar la puerta.", polish: "Pchnąć drzwi." },
            { spanish: "No empujes.", polish: "Nie pchaj." },
            { spanish: "Empujar el coche.", polish: "Popychać samochód." }
        ]
    },
    {
        id: 712,
        spanish: "siete",
        polish: "siedem",
        description: "Liczebnik oznaczający 7",
        examples: [
            { spanish: "Siete días.", polish: "Siedem dni." },
            { spanish: "Son las siete.", polish: "Jest siódma." },
            { spanish: "Siete hermanos.", polish: "Siedmioro rodzeństwa." }
        ]
    },
    {
        id: 713,
        spanish: "párrafo",
        polish: "akapit",
        description: "Rzeczownik oznaczający część tekstu",
        examples: [
            { spanish: "El primer párrafo.", polish: "Pierwszy akapit." },
            { spanish: "Leer un párrafo.", polish: "Przeczytać akapit." },
            { spanish: "Nuevo párrafo.", polish: "Nowy akapit." }
        ]
    },
    {
        id: 714,
        spanish: "tercero - tercera",
        polish: "trzeci",
        description: "Liczebnik porządkowy",
        examples: [
            { spanish: "El tercer día.", polish: "Trzeci dzień." },
            { spanish: "En tercer lugar.", polish: "Na trzecim miejscu." },
            { spanish: "La tercera vez.", polish: "Trzeci raz." }
        ]
    },
    {
        id: 715,
        spanish: "deber",
        polish: "powinien, musieć",
        description: "Czasownik modalny oznaczający obowiązek",
        examples: [
            { spanish: "Debes estudiar.", polish: "Powinieneś się uczyć." },
            { spanish: "Debo ir.", polish: "Muszę iść." },
            { spanish: "Debería hacerlo.", polish: "Powinienem to zrobić." }
        ]
    },
    {
        id: 716,
        spanish: "sostener",
        polish: "trzymać",
        description: "Czasownik oznaczający przytrzymywanie",
        examples: [
            { spanish: "Sostener la puerta.", polish: "Przytrzymać drzwi." },
            { spanish: "Sostener un bebé.", polish: "Trzymać niemowlę." },
            { spanish: "Sostener la mirada.", polish: "Wytrzymać spojrzenie." }
        ]
    },
    {
        id: 717,
        spanish: "pelo",
        polish: "włosy",
        description: "Rzeczownik oznaczający włosienie",
        examples: [
            { spanish: "Cortarse el pelo.", polish: "Obciąć włosy." },
            { spanish: "Pelo largo.", polish: "Długie włosy." },
            { spanish: "Lavarse el pelo.", polish: "Umyć włosy." }
        ]
    },
    {
        id: 718,
        spanish: "describir",
        polish: "opisywać",
        description: "Czasownik oznaczający przedstawienie",
        examples: [
            { spanish: "Describir una escena.", polish: "Opisać scenę." },
            { spanish: "Difícil de describir.", polish: "Trudne do opisania." },
            { spanish: "Describir sentimientos.", polish: "Opisać uczucia." }
        ]
    },
    {
        id: 719,
        spanish: "cocinero - cocinera",
        polish: "kucharz",
        description: "Rzeczownik oznaczający osobę gotującą",
        examples: [
            { spanish: "Un buen cocinero.", polish: "Dobry kucharz." },
            { spanish: "Trabajar de cocinero.", polish: "Pracować jako kucharz." },
            { spanish: "Cocinero profesional.", polish: "Profesjonalny kucharz." }
        ]
    },
    {
        id: 720,
        spanish: "piso",
        polish: "piętro, podłoga",
        description: "Rzeczownik oznaczający kondygnację lub powierzchnię",
        examples: [
            { spanish: "Segundo piso.", polish: "Drugie piętro." },
            { spanish: "Limpiar el piso.", polish: "Czyścić podłogę." },
            { spanish: "Vivir en el piso de arriba.", polish: "Mieszkać na górze." }
        ]
    },
    {
        id: 721,
        spanish: "cualquiera",
        polish: "którykolwiek, każdy",
        description: "Zaimek oznaczający brak preferencji",
        examples: [
            { spanish: "Cualquier día.", polish: "Każdego dnia." },
            { spanish: "Cualquiera puede hacerlo.", polish: "Każdy może to zrobić." },
            { spanish: "En cualquier lugar.", polish: "W każdym miejscu." }
        ]
    },
    {
        id: 722,
        spanish: "resultado",
        polish: "wynik",
        description: "Rzeczownik oznaczający efekt",
        examples: [
            { spanish: "El resultado final.", polish: "Końcowy wynik." },
            { spanish: "Ver los resultados.", polish: "Zobaczyć wyniki." },
            { spanish: "Buen resultado.", polish: "Dobry wynik." }
        ]
    },
    {
        id: 723,
        spanish: "quemar",
        polish: "palić, spalić",
        description: "Czasownik oznaczający niszczenie ogniem",
        examples: [
            { spanish: "Quemar madera.", polish: "Palić drewno." },
            { spanish: "Se quemó.", polish: "Spaliło się." },
            { spanish: "Quemar calorías.", polish: "Spalać kalorie." }
        ]
    },
    {
        id: 724,
        spanish: "colina",
        polish: "wzgórze",
        description: "Rzeczownik oznaczający wzniesienie",
        examples: [
            { spanish: "Subir la colina.", polish: "Wspinać się na wzgórze." },
            { spanish: "Una colina verde.", polish: "Zielone wzgórze." },
            { spanish: "Bajar la colina.", polish: "Schodzić ze wzgórza." }
        ]
    },
    {
        id: 725,
        spanish: "seguro - segura",
        polish: "bezpieczny",
        description: "Przymiotnik oznaczający ochronę",
        examples: [
            { spanish: "Lugar seguro.", polish: "Bezpieczne miejsce." },
            { spanish: "Estar seguro.", polish: "Być bezpiecznym." },
            { spanish: "Viaje seguro.", polish: "Bezpieczna podróż." }
        ]
    },
    {
        id: 726,
        spanish: "gato",
        polish: "kot",
        description: "Rzeczownik oznaczający zwierzę domowe",
        examples: [
            { spanish: "Un gato negro.", polish: "Czarny kot." },
            { spanish: "Alimentar al gato.", polish: "Karmić kota." },
            { spanish: "Mi gato duerme.", polish: "Mój kot śpi." }
        ]
    },
    {
        id: 727,
        spanish: "siglo",
        polish: "wiek, stulecie",
        description: "Rzeczownik oznaczający okres stu lat",
        examples: [
            { spanish: "Siglo XXI.", polish: "XXI wiek." },
            { spanish: "Hace un siglo.", polish: "Wiek temu." },
            { spanish: "El siglo pasado.", polish: "Ubiegły wiek." }
        ]
    },
    {
        id: 728,
        spanish: "considerar",
        polish: "rozważać",
        description: "Czasownik oznaczający przemyślenie",
        examples: [
            { spanish: "Considerar opciones.", polish: "Rozważać opcje." },
            { spanish: "Debo considerarlo.", polish: "Muszę to rozważyć." },
            { spanish: "Considerar importante.", polish: "Uznać za ważne." }
        ]
    },
    {
        id: 729,
        spanish: "tipo",
        polish: "typ, rodzaj",
        description: "Rzeczownik oznaczający kategorię",
        examples: [
            { spanish: "¿Qué tipo?", polish: "Jaki typ?" },
            { spanish: "Todo tipo de cosas.", polish: "Wszystkie rodzaje rzeczy." },
            { spanish: "Tipo de persona.", polish: "Rodzaj osoby." }
        ]
    },
    {
        id: 730,
        spanish: "ley",
        polish: "prawo",
        description: "Rzeczownik oznaczający przepis",
        examples: [
            { spanish: "Cumplir la ley.", polish: "Przestrzegać prawa." },
            { spanish: "Ley nueva.", polish: "Nowe prawo." },
            { spanish: "Contra la ley.", polish: "Wbrew prawu." }
        ]
    },
    {
        id: 731,
        spanish: "poco",
        polish: "trochę, odrobina",
        description: "Przysłówek oznaczający małą ilość",
        examples: [
            { spanish: "Un poco de agua.", polish: "Trochę wody." },
            { spanish: "Poco a poco.", polish: "Powoli." },
            { spanish: "Muy poco.", polish: "Bardzo mało." }
        ]
    },
    {
        id: 732,
        spanish: "costa",
        polish: "wybrzeże",
        description: "Rzeczownik oznaczający brzeg morza",
        examples: [
            { spanish: "La costa del mar.", polish: "Wybrzeże morza." },
            { spanish: "Vivir en la costa.", polish: "Mieszkać na wybrzeżu." },
            { spanish: "Costa mediterránea.", polish: "Wybrzeże śródziemnomorskie." }
        ]
    },
    {
        id: 733,
        spanish: "copia",
        polish: "kopia",
        description: "Rzeczownik oznaczający duplikat",
        examples: [
            { spanish: "Hacer una copia.", polish: "Zrobić kopię." },
            { spanish: "Copia del documento.", polish: "Kopia dokumentu." },
            { spanish: "Copia exacta.", polish: "Dokładna kopia." }
        ]
    },
    {
        id: 734,
        spanish: "frase",
        polish: "zdanie, fraza",
        description: "Rzeczownik oznaczający wypowiedź",
        examples: [
            { spanish: "Una frase bonita.", polish: "Ładne zdanie." },
            { spanish: "Frase completa.", polish: "Pełne zdanie." },
            { spanish: "Repetir la frase.", polish: "Powtórzyć zdanie." }
        ]
    },
    {
        id: 735,
        spanish: "silencio",
        polish: "cisza",
        description: "Rzeczownik oznaczający brak dźwięku",
        examples: [
            { spanish: "Guardar silencio.", polish: "Zachować ciszę." },
            { spanish: "Silencio total.", polish: "Całkowita cisza." },
            { spanish: "En silencio.", polish: "W ciszy." }
        ]
    },
    {
        id: 736,
        spanish: "alto - alta",
        polish: "wysoki",
        description: "Przymiotnik oznaczający dużą wysokość",
        examples: [
            { spanish: "Un edificio alto.", polish: "Wysoki budynek." },
            { spanish: "Persona alta.", polish: "Wysoka osoba." },
            { spanish: "Montaña alta.", polish: "Wysoka góra." }
        ]
    },
    {
        id: 737,
        spanish: "arena",
        polish: "piasek",
        description: "Rzeczownik oznaczający drobne ziarna",
        examples: [
            { spanish: "Playa de arena.", polish: "Piaszczysta plaża." },
            { spanish: "Castillo de arena.", polish: "Zamek z piasku." },
            { spanish: "Arena fina.", polish: "Drobny piasek." }
        ]
    },
    {
        id: 738,
        spanish: "suelo",
        polish: "gleba",
        description: "Rzeczownik oznaczający warstwę ziemi",
        examples: [
            { spanish: "Suelo fértil.", polish: "Żyzna gleba." },
            { spanish: "Cultivar el suelo.", polish: "Uprawiać glebę." },
            { spanish: "Suelo arenoso.", polish: "Piaszczysta gleba." }
        ]
    },
    {
        id: 739,
        spanish: "rollo",
        polish: "rolka, zwój",
        description: "Rzeczownik oznaczający zwinięty przedmiot",
        examples: [
            { spanish: "Un rollo de papel.", polish: "Rolka papieru." },
            { spanish: "Rollo de fotos.", polish: "Film fotograficzny." },
            { spanish: "Desenrollar el rollo.", polish: "Rozwinąć rolkę." }
        ]
    },
    {
        id: 740,
        spanish: "temperatura",
        polish: "temperatura",
        description: "Rzeczownik oznaczający ciepło",
        examples: [
            { spanish: "Temperatura alta.", polish: "Wysoka temperatura." },
            { spanish: "Medir la temperatura.", polish: "Zmierzyć temperaturę." },
            { spanish: "Temperatura ambiente.", polish: "Temperatura pokojowa." }
        ]
    },
    {
        id: 741,
        spanish: "dedo",
        polish: "palec",
        description: "Rzeczownik oznaczający część ręki",
        examples: [
            { spanish: "Dedo de la mano.", polish: "Palec u ręki." },
            { spanish: "Cortarse el dedo.", polish: "Skaleczyć palec." },
            { spanish: "Señalar con el dedo.", polish: "Wskazywać palcem." }
        ]
    },
    {
        id: 742,
        spanish: "industria",
        polish: "przemysł",
        description: "Rzeczownik oznaczający produkcję",
        examples: [
            { spanish: "Industria automotriz.", polish: "Przemysł samochodowy." },
            { spanish: "Sector industrial.", polish: "Sektor przemysłowy." },
            { spanish: "Desarrollo de la industria.", polish: "Rozwój przemysłu." }
        ]
    },
    {
        id: 743,
        spanish: "valor",
        polish: "wartość",
        description: "Rzeczownik oznaczający cenę lub znaczenie",
        examples: [
            { spanish: "Valor sentimental.", polish: "Wartość sentymentalna." },
            { spanish: "Gran valor.", polish: "Wielka wartość." },
            { spanish: "Sin valor.", polish: "Bez wartości." }
        ]
    },
    {
        id: 744,
        spanish: "lucha",
        polish: "walka",
        description: "Rzeczownik oznaczający starcie",
        examples: [
            { spanish: "Lucha libre.", polish: "Zapasy." },
            { spanish: "Luchar por algo.", polish: "Walczyć o coś." },
            { spanish: "Lucha constante.", polish: "Ciągła walka." }
        ]
    },
    {
        id: 745,
        spanish: "mentira",
        polish: "kłamstwo",
        description: "Rzeczownik oznaczający nieprawdę",
        examples: [
            { spanish: "Decir una mentira.", polish: "Powiedzieć kłamstwo." },
            { spanish: "Es una mentira.", polish: "To kłamstwo." },
            { spanish: "Mentira piadosa.", polish: "Kłamstwo w dobrej wierze." }
        ]
    },
    {
        id: 746,
        spanish: "batir",
        polish: "ubijać, bić",
        description: "Czasownik oznaczający mieszanie lub pokonanie",
        examples: [
            { spanish: "Batir huevos.", polish: "Ubijać jajka." },
            { spanish: "Batir un récord.", polish: "Pobić rekord." },
            { spanish: "Batir la crema.", polish: "Ubić śmietanę." }
        ]
    },
    {
        id: 747,
        spanish: "emocionar",
        polish: "ekscytować",
        description: "Czasownik oznaczający wzbudzenie emocji",
        examples: [
            { spanish: "Me emociona mucho.", polish: "Bardzo mnie to ekscytuje." },
            { spanish: "Noticia emocionante.", polish: "Ekscytująca wiadomość." },
            { spanish: "Estar emocionado.", polish: "Być podekscytowanym." }
        ]
    },
    {
        id: 748,
        spanish: "natural",
        polish: "naturalny",
        description: "Przymiotnik oznaczający pochodzenie z natury",
        examples: [
            { spanish: "Producto natural.", polish: "Naturalny produkt." },
            { spanish: "Belleza natural.", polish: "Naturalne piękno." },
            { spanish: "Es natural.", polish: "To naturalne." }
        ]
    },
    {
        id: 749,
        spanish: "vista",
        polish: "widok, wzrok",
        description: "Rzeczownik oznaczający panoramę lub zmysł",
        examples: [
            { spanish: "Una vista bonita.", polish: "Ładny widok." },
            { spanish: "Perder la vista.", polish: "Stracić wzrok." },
            { spanish: "A primera vista.", polish: "Na pierwszy rzut oka." }
        ]
    },
    {
        id: 750,
        spanish: "sentido",
        polish: "zmysł, sens",
        description: "Rzeczownik oznaczający percepcję lub znaczenie",
        examples: [
            { spanish: "Los cinco sentidos.", polish: "Pięć zmysłów." },
            { spanish: "Tiene sentido.", polish: "Ma sens." },
            { spanish: "Sentido común.", polish: "Zdrowy rozsądek." }
        ]
    },
    {
        id: 751,
        spanish: "capital",
        polish: "stolica, kapitał",
        description: "Rzeczownik oznaczający główne miasto lub fundusze",
        examples: [
            { spanish: "Capital de España.", polish: "Stolica Hiszpanii." },
            { spanish: "Capital inicial.", polish: "Kapitał początkowy." },
            { spanish: "Ciudad capital.", polish: "Miasto stołeczne." }
        ]
    },
    {
        id: 752,
        spanish: "no",
        polish: "nie będzie",
        description: "Przeczenie w czasie przyszłym",
        examples: [
            { spanish: "No vendrá.", polish: "Nie przyjdzie." },
            { spanish: "No lo haré.", polish: "Nie zrobię tego." },
            { spanish: "No funciona.", polish: "Nie działa." }
        ]
    },
    {
        id: 753,
        spanish: "silla",
        polish: "krzesło",
        description: "Rzeczownik oznaczający mebel do siedzenia",
        examples: [
            { spanish: "Sentarse en la silla.", polish: "Usiąść na krześle." },
            { spanish: "Una silla cómoda.", polish: "Wygodne krzesło." },
            { spanish: "Silla de madera.", polish: "Drewniane krzesło." }
        ]
    },
    {
        id: 754,
        spanish: "peligro",
        polish: "niebezpieczeństwo",
        description: "Rzeczownik oznaczający zagrożenie",
        examples: [
            { spanish: "Estar en peligro.", polish: "Być w niebezpieczeństwie." },
            { spanish: "Peligro de muerte.", polish: "Niebezpieczeństwo śmierci." },
            { spanish: "Sin peligro.", polish: "Bez niebezpieczeństwa." }
        ]
    },
    {
        id: 755,
        spanish: "fruta",
        polish: "owoc",
        description: "Rzeczownik oznaczający jadalne owoce",
        examples: [
            { spanish: "Comer fruta.", polish: "Jeść owoce." },
            { spanish: "Fruta fresca.", polish: "Świeże owoce." },
            { spanish: "Jugo de fruta.", polish: "Sok owocowy." }
        ]
    },
    {
        id: 756,
        spanish: "rica - rico",
        polish: "bogaty",
        description: "Przymiotnik oznaczający zamożność lub smak",
        examples: [
            { spanish: "Persona rica.", polish: "Bogata osoba." },
            { spanish: "Comida rica.", polish: "Smaczne jedzenie." },
            { spanish: "País rico.", polish: "Bogaty kraj." }
        ]
    },
    {
        id: 757,
        spanish: "grueso - gruesa",
        polish: "gruby",
        description: "Przymiotnik oznaczający dużą szerokość",
        examples: [
            { spanish: "Libro grueso.", polish: "Gruba książka." },
            { spanish: "Pared gruesa.", polish: "Gruba ściana." },
            { spanish: "Muy grueso.", polish: "Bardzo gruby." }
        ]
    },
    {
        id: 758,
        spanish: "soldado",
        polish: "żołnierz",
        description: "Rzeczownik oznaczający osobę w wojsku",
        examples: [
            { spanish: "Soldado valiente.", polish: "Odważny żołnierz." },
            { spanish: "Ser soldado.", polish: "Być żołnierzem." },
            { spanish: "Soldados en marcha.", polish: "Żołnierze w marszu." }
        ]
    },
    {
        id: 759,
        spanish: "proceso",
        polish: "proces",
        description: "Rzeczownik oznaczający przebieg",
        examples: [
            { spanish: "Proceso de fabricación.", polish: "Proces produkcji." },
            { spanish: "En proceso.", polish: "W trakcie." },
            { spanish: "Proceso largo.", polish: "Długi proces." }
        ]
    },
    {
        id: 760,
        spanish: "operar",
        polish: "operować",
        description: "Czasownik oznaczający przeprowadzenie zabiegu lub działanie",
        examples: [
            { spanish: "Operar a un paciente.", polish: "Operować pacjenta." },
            { spanish: "Operar una máquina.", polish: "Obsługiwać maszynę." },
            { spanish: "Ser operado.", polish: "Być operowanym." }
        ]
    },
    {
        id: 761,
        spanish: "práctica",
        polish: "praktyka, ćwiczenie",
        description: "Rzeczownik oznaczający zastosowanie lub trening",
        examples: [
            { spanish: "Práctica hace maestro.", polish: "Praktyka czyni mistrza." },
            { spanish: "En la práctica.", polish: "W praktyce." },
            { spanish: "Hacer práctica.", polish: "Ćwiczyć." }
        ]
    },
    {
        id: 762,
        spanish: "separada - separado",
        polish: "oddzielny",
        description: "Przymiotnik oznaczający rozłączenie",
        examples: [
            { spanish: "Habitación separada.", polish: "Oddzielny pokój." },
            { spanish: "Vivir separados.", polish: "Mieszkać oddzielnie." },
            { spanish: "Cuentas separadas.", polish: "Osobne rachunki." }
        ]
    },
    {
        id: 763,
        spanish: "difícil",
        polish: "trudny",
        description: "Przymiotnik oznaczający złożoność",
        examples: [
            { spanish: "Tarea difícil.", polish: "Trudne zadanie." },
            { spanish: "Es muy difícil.", polish: "To bardzo trudne." },
            { spanish: "Problema difícil.", polish: "Trudny problem." }
        ]
    },
    {
        id: 764,
        spanish: "médico - médica",
        polish: "lekarz",
        description: "Rzeczownik oznaczający osobę wykonującą zawód medyczny",
        examples: [
            { spanish: "Ir al médico.", polish: "Iść do lekarza." },
            { spanish: "Médico de familia.", polish: "Lekarz rodzinny." },
            { spanish: "Consulta médica.", polish: "Wizyta lekarska." }
        ]
    },
    {
        id: 765,
        spanish: "por favor",
        polish: "proszę",
        description: "Wyrażenie grzecznościowe",
        examples: [
            { spanish: "Agua, por favor.", polish: "Wodę, proszę." },
            { spanish: "Por favor, ayúdame.", polish: "Proszę, pomóż mi." },
            { spanish: "Espere, por favor.", polish: "Proszę czekać." }
        ]
    },
    {
        id: 766,
        spanish: "proteger",
        polish: "chronić",
        description: "Czasownik oznaczający ochronę",
        examples: [
            { spanish: "Proteger el medio ambiente.", polish: "Chronić środowisko." },
            { spanish: "Proteger a los niños.", polish: "Chronić dzieci." },
            { spanish: "Protegerse del sol.", polish: "Chronić się przed słońcem." }
        ]
    },
    {
        id: 767,
        spanish: "mediodía",
        polish: "południe",
        description: "Rzeczownik oznaczający porę dnia",
        examples: [
            { spanish: "Al mediodía.", polish: "W południe." },
            { spanish: "Comida del mediodía.", polish: "Obiad." },
            { spanish: "Es mediodía.", polish: "Jest południe." }
        ]
    },
    {
        id: 768,
        spanish: "cultivo",
        polish: "uprawa",
        description: "Rzeczownik oznaczający hodowlę roślin",
        examples: [
            { spanish: "Cultivo de trigo.", polish: "Uprawa pszenicy." },
            { spanish: "Tierra de cultivo.", polish: "Ziemia uprawna." },
            { spanish: "Técnicas de cultivo.", polish: "Techniki uprawy." }
        ]
    },
    {
        id: 769,
        spanish: "moderno - moderna",
        polish: "nowoczesny",
        description: "Przymiotnik oznaczający współczesność",
        examples: [
            { spanish: "Arte moderno.", polish: "Sztuka nowoczesna." },
            { spanish: "Tecnología moderna.", polish: "Nowoczesna technologia." },
            { spanish: "Estilo moderno.", polish: "Nowoczesny styl." }
        ]
    },
    {
        id: 770,
        spanish: "elemento",
        polish: "element",
        description: "Rzeczownik oznaczający składnik",
        examples: [
            { spanish: "Elemento químico.", polish: "Pierwiastek chemiczny." },
            { spanish: "Elementos esenciales.", polish: "Podstawowe elementy." },
            { spanish: "Un elemento importante.", polish: "Ważny element." }
        ]
    },
    {
        id: 771,
        spanish: "golpear",
        polish: "uderzyć",
        description: "Czasownik oznaczający uderzenie",
        examples: [
            { spanish: "Golpear la puerta.", polish: "Uderzyć w drzwi." },
            { spanish: "Golpear la pelota.", polish: "Uderzyć piłkę." },
            { spanish: "No golpees.", polish: "Nie bij." }
        ]
    },
    {
        id: 772,
        spanish: "estudiante",
        polish: "student, uczeń",
        description: "Rzeczownik oznaczający osobę uczącą się",
        examples: [
            { spanish: "Estudiante universitario.", polish: "Student uniwersytetu." },
            { spanish: "Buen estudiante.", polish: "Dobry uczeń." },
            { spanish: "Ser estudiante.", polish: "Być studentem." }
        ]
    },
    {
        id: 773,
        spanish: "esquina",
        polish: "róg, narożnik",
        description: "Rzeczownik oznaczający miejsce spotkania powierzchni",
        examples: [
            { spanish: "En la esquina.", polish: "Na rogu." },
            { spanish: "Doblar la esquina.", polish: "Skręcić za róg." },
            { spanish: "Esquina de la calle.", polish: "Róg ulicy." }
        ]
    },
    {
        id: 774,
        spanish: "partido",
        polish: "mecz, partia",
        description: "Rzeczownik oznaczający zawody lub ugrupowanie",
        examples: [
            { spanish: "Partido de fútbol.", polish: "Mecz piłki nożnej." },
            { spanish: "Partido político.", polish: "Partia polityczna." },
            { spanish: "Ganar el partido.", polish: "Wygrać mecz." }
        ]
    },
    {
        id: 775,
        spanish: "suministro",
        polish: "dostawa, zapas",
        description: "Rzeczownik oznaczający dostawę",
        examples: [
            { spanish: "Suministro de agua.", polish: "Dostawa wody." },
            { spanish: "Suministros médicos.", polish: "Zaopatrzenie medyczne." },
            { spanish: "Garantizar el suministro.", polish: "Zagwarantować dostawę." }
        ]
    },
    {
        id: 776,
        spanish: "cuyo - cuya",
        polish: "którego, której",
        description: "Zaimek dzierżawczy",
        examples: [
            { spanish: "Persona cuyo nombre.", polish: "Osoba, której imię." },
            { spanish: "Casa cuya puerta.", polish: "Dom, którego drzwi." },
            { spanish: "El libro cuyo autor.", polish: "Książka, której autor." }
        ]
    },
    {
        id: 777,
        spanish: "localizar",
        polish: "zlokalizować",
        description: "Czasownik oznaczający znalezienie miejsca",
        examples: [
            { spanish: "Localizar una dirección.", polish: "Zlokalizować adres." },
            { spanish: "No puedo localizarlo.", polish: "Nie mogę go zlokalizować." },
            { spanish: "Localizar el problema.", polish: "Zlokalizować problem." }
        ]
    },
    {
        id: 778,
        spanish: "anillo",
        polish: "pierścień",
        description: "Rzeczownik oznaczający obręcz",
        examples: [
            { spanish: "Anillo de bodas.", polish: "Obrączka ślubna." },
            { spanish: "Anillo de oro.", polish: "Złoty pierścień." },
            { spanish: "Llevar un anillo.", polish: "Nosić pierścień." }
        ]
    },
    {
        id: 779,
        spanish: "carácter",
        polish: "charakter",
        description: "Rzeczownik oznaczający osobowość",
        examples: [
            { spanish: "Buen carácter.", polish: "Dobry charakter." },
            { spanish: "Carácter fuerte.", polish: "Silny charakter." },
            { spanish: "Tener carácter.", polish: "Mieć charakter." }
        ]
    },
    {
        id: 780,
        spanish: "insecto",
        polish: "owad",
        description: "Rzeczownik oznaczający bezkręgowca",
        examples: [
            { spanish: "Matar un insecto.", polish: "Zabić owada." },
            { spanish: "Insecto volador.", polish: "Latający owad." },
            { spanish: "Picadura de insecto.", polish: "Ukąszenie owada." }
        ]
    },
    {
        id: 781,
        spanish: "capturado - capturada",
        polish: "złapany",
        description: "Imiesłów czasownika 'capturar'",
        examples: [
            { spanish: "Animal capturado.", polish: "Złapane zwierzę." },
            { spanish: "Fue capturado.", polish: "Został złapany." },
            { spanish: "Imagen capturada.", polish: "Uchwycony obraz." }
        ]
    },
    {
        id: 782,
        spanish: "período",
        polish: "okres",
        description: "Rzeczownik oznaczający czas trwania",
        examples: [
            { spanish: "Período de tiempo.", polish: "Okres czasu." },
            { spanish: "Período escolar.", polish: "Rok szkolny." },
            { spanish: "Durante este período.", polish: "W tym okresie." }
        ]
    },
    {
        id: 783,
        spanish: "indicar",
        polish: "wskazywać",
        description: "Czasownik oznaczający pokazywanie",
        examples: [
            { spanish: "Indicar el camino.", polish: "Wskazać drogę." },
            { spanish: "Indicar con el dedo.", polish: "Wskazać palcem." },
            { spanish: "Indicar la dirección.", polish: "Wskazać kierunek." }
        ]
    },
    {
        id: 784,
        spanish: "radio",
        polish: "radio",
        description: "Rzeczownik oznaczający urządzenie lub fale",
        examples: [
            { spanish: "Escuchar la radio.", polish: "Słuchać radia." },
            { spanish: "Programa de radio.", polish: "Program radiowy." },
            { spanish: "Radio FM.", polish: "Radio FM." }
        ]
    },
    {
        id: 785,
        spanish: "hablar",
        polish: "mówił, mówiła",
        description: "Czasownik 'hablar' w czasie przeszłym",
        examples: [
            { spanish: "Habló con ella.", polish: "Rozmawiał z nią." },
            { spanish: "Nunca habló de eso.", polish: "Nigdy o tym nie mówił." },
            { spanish: "Habló en público.", polish: "Przemawiał publicznie." }
        ]
    },
    {
        id: 786,
        spanish: "átomo",
        polish: "atom",
        description: "Rzeczownik oznaczający najmniejszą cząstkę",
        examples: [
            { spanish: "Átomo de hidrógeno.", polish: "Atom wodoru." },
            { spanish: "Estructura del átomo.", polish: "Struktura atomu." },
            { spanish: "Energía atómica.", polish: "Energia atomowa." }
        ]
    },
    {
        id: 787,
        spanish: "humano - humana",
        polish: "ludzki",
        description: "Przymiotnik oznaczający przynależność do ludzi",
        examples: [
            { spanish: "Ser humano.", polish: "Istota ludzka." },
            { spanish: "Naturaleza humana.", polish: "Natura ludzka." },
            { spanish: "Cuerpo humano.", polish: "Ciało ludzkie." }
        ]
    },
    {
        id: 788,
        spanish: "historia",
        polish: "historia",
        description: "Rzeczownik oznaczający przeszłość lub opowieść",
        examples: [
            { spanish: "Estudiar historia.", polish: "Studiować historię." },
            { spanish: "Contar una historia.", polish: "Opowiedzieć historię." },
            { spanish: "Historia antigua.", polish: "Historia starożytna." }
        ]
    },
    {
        id: 789,
        spanish: "efecto",
        polish: "efekt",
        description: "Rzeczownik oznaczający wynik",
        examples: [
            { spanish: "Efecto secundario.", polish: "Efekt uboczny." },
            { spanish: "Tener efecto.", polish: "Mieć efekt." },
            { spanish: "Efecto visual.", polish: "Efekt wizualny." }
        ]
    },
    {
        id: 790,
        spanish: "eléctrica - eléctrico",
        polish: "elektryczny",
        description: "Przymiotnik oznaczający związek z elektrycznością",
        examples: [
            { spanish: "Coche eléctrico.", polish: "Samochód elektryczny." },
            { spanish: "Corriente eléctrica.", polish: "Prąd elektryczny." },
            { spanish: "Energía eléctrica.", polish: "Energia elektryczna." }
        ]
    },
    {
        id: 791,
        spanish: "esperar",
        polish: "oczekiwać",
        description: "Czasownik oznaczający spodziewanie się",
        examples: [
            { spanish: "Esperar lo mejor.", polish: "Oczekiwać najlepszego." },
            { spanish: "No espero nada.", polish: "Niczego nie oczekuję." },
            { spanish: "Esperar un bebé.", polish: "Spodziewać się dziecka." }
        ]
    },
    {
        id: 792,
        spanish: "hueso",
        polish: "kość",
        description: "Rzeczownik oznaczający część szkieletu",
        examples: [
            { spanish: "Romperse un hueso.", polish: "Złamać kość." },
            { spanish: "Hueso fuerte.", polish: "Mocna kość." },
            { spanish: "Dolor de huesos.", polish: "Ból kości." }
        ]
    },
    {
        id: 793,
        spanish: "ferrocarril",
        polish: "kolej",
        description: "Rzeczownik oznaczający transport kolejowy",
        examples: [
            { spanish: "Estación de ferrocarril.", polish: "Dworzec kolejowy." },
            { spanish: "Viajar por ferrocarril.", polish: "Podróżować koleją." },
            { spanish: "Línea de ferrocarril.", polish: "Linia kolejowa." }
        ]
    },
    {
        id: 794,
        spanish: "imaginar",
        polish: "wyobrażać sobie",
        description: "Czasownik oznaczający tworzenie obrazów w umyśle",
        examples: [
            { spanish: "Imaginar el futuro.", polish: "Wyobrażać sobie przyszłość." },
            { spanish: "No puedo imaginarlo.", polish: "Nie mogę sobie tego wyobrazić." },
            { spanish: "Imagina que...", polish: "Wyobraź sobie, że..." }
        ]
    },
    {
        id: 795,
        spanish: "proporcionar",
        polish: "dostarczyć",
        description: "Czasownik oznaczający zapewnienie",
        examples: [
            { spanish: "Proporcionar información.", polish: "Dostarczyć informacje." },
            { spanish: "Proporcionar ayuda.", polish: "Zapewnić pomoc." },
            { spanish: "Proporcionar recursos.", polish: "Dostarczyć zasoby." }
        ]
    },
    {
        id: 796,
        spanish: "acuerdo",
        polish: "zgoda, umowa",
        description: "Rzeczownik oznaczający porozumienie",
        examples: [
            { spanish: "Estar de acuerdo.", polish: "Zgadzać się." },
            { spanish: "Firmar un acuerdo.", polish: "Podpisać umowę." },
            { spanish: "Acuerdo mutuo.", polish: "Obopólna zgoda." }
        ]
    },
    {
        id: 797,
        spanish: "por lo tanto",
        polish: "dlatego, zatem",
        description: "Wyrażenie wprowadzające wniosek",
        examples: [
            { spanish: "Por lo tanto, voy.", polish: "Dlatego idę." },
            { spanish: "Es tarde, por lo tanto me voy.", polish: "Jest późno, dlatego wychodzę." },
            { spanish: "Por lo tanto es importante.", polish: "Zatem jest to ważne." }
        ]
    },
    {
        id: 798,
        spanish: "suave",
        polish: "łagodny, delikatny",
        description: "Przymiotnik oznaczający łagodność",
        examples: [
            { spanish: "Trato suave.", polish: "Łagodne traktowanie." },
            { spanish: "Voz suave.", polish: "Łagodny głos." },
            { spanish: "Carácter suave.", polish: "Łagodny charakter." }
        ]
    },
    {
        id: 799,
        spanish: "mujer",
        polish: "kobieta",
        description: "Rzeczownik oznaczający osobę płci żeńskiej",
        examples: [
            { spanish: "Una mujer fuerte.", polish: "Silna kobieta." },
            { spanish: "Mujer trabajadora.", polish: "Pracująca kobieta." },
            { spanish: "Derechos de la mujer.", polish: "Prawa kobiet." }
        ]
    },
    {
        id: 800,
        spanish: "capitán",
        polish: "kapitan",
        description: "Rzeczownik oznaczający dowódcę",
        examples: [
            { spanish: "Capitán del barco.", polish: "Kapitan statku." },
            { spanish: "Capitán del equipo.", polish: "Kapitan drużyny." },
            { spanish: "Ser capitán.", polish: "Być kapitanem." }
        ]
    },
    {
        id: 801,
        spanish: "adivinar",
        polish: "zgadywać",
        description: "Czasownik oznaczający próbę odgadnięcia",
        examples: [
            { spanish: "Adivinar la respuesta.", polish: "Zgadnąć odpowiedź." },
            { spanish: "No puedo adivinar.", polish: "Nie mogę zgadnąć." },
            { spanish: "Intenta adivinar.", polish: "Spróbuj zgadnąć." }
        ]
    },
    {
        id: 802,
        spanish: "necesario - necesaria",
        polish: "konieczny, potrzebny",
        description: "Przymiotnik oznaczający coś niezbędnego",
        examples: [
            { spanish: "Es necesario estudiar.", polish: "Konieczne jest studiowanie." },
            { spanish: "Información necesaria.", polish: "Niezbędne informacje." },
            { spanish: "Algo necesario.", polish: "Coś koniecznego." }
        ]
    },
    {
        id: 803,
        spanish: "agudo - aguda",
        polish: "ostry, bystry",
        description: "Przymiotnik oznaczający coś ostrego lub przenikliwego",
        examples: [
            { spanish: "Dolor agudo.", polish: "Ostry ból." },
            { spanish: "Mente aguda.", polish: "Bystry umysł." },
            { spanish: "Sonido agudo.", polish: "Ostry dźwięk." }
        ]
    },
    {
        id: 804,
        spanish: "ala",
        polish: "skrzydło",
        description: "Rzeczownik oznaczający część ciała ptaka",
        examples: [
            { spanish: "Ala de pájaro.", polish: "Skrzydło ptaka." },
            { spanish: "Batir las alas.", polish: "Machać skrzydłami." },
            { spanish: "Ala del avión.", polish: "Skrzydło samolotu." }
        ]
    },
    {
        id: 805,
        spanish: "crear",
        polish: "tworzyć",
        description: "Czasownik oznaczający tworzenie czegoś",
        examples: [
            { spanish: "Crear algo nuevo.", polish: "Stworzyć coś nowego." },
            { spanish: "Crear una empresa.", polish: "Założyć firmę." },
            { spanish: "Crear arte.", polish: "Tworzyć sztukę." }
        ]
    },
    {
        id: 806,
        spanish: "vecino - vecina",
        polish: "sąsiad",
        description: "Rzeczownik oznaczający osobę mieszkającą obok",
        examples: [
            { spanish: "Mi vecino es amable.", polish: "Mój sąsiad jest miły." },
            { spanish: "Vecinos del barrio.", polish: "Sąsiedzi z dzielnicy." },
            { spanish: "Hablar con el vecino.", polish: "Rozmawiać z sąsiadem." }
        ]
    },
    {
        id: 807,
        spanish: "lavado",
        polish: "mycie, pranie",
        description: "Rzeczownik oznaczający czynność czyszczenia",
        examples: [
            { spanish: "Lavado de ropa.", polish: "Pranie ubrań." },
            { spanish: "Lavado de coches.", polish: "Mycie samochodów." },
            { spanish: "Después del lavado.", polish: "Po praniu." }
        ]
    },
    {
        id: 808,
        spanish: "bate",
        polish: "kij bejsbolowy",
        description: "Rzeczownik oznaczający narzędzie sportowe",
        examples: [
            { spanish: "Bate de béisbol.", polish: "Kij bejsbolowy." },
            { spanish: "Golpear con el bate.", polish: "Uderzyć kijem." },
            { spanish: "Comprar un bate.", polish: "Kupić kij." }
        ]
    },
    {
        id: 809,
        spanish: "más bien",
        polish: "raczej",
        description: "Przysłówek oznaczający preferencję lub korektę",
        examples: [
            { spanish: "Más bien prefiero café.", polish: "Raczej wolę kawę." },
            { spanish: "Es más bien pequeño.", polish: "Jest raczej mały." },
            { spanish: "Más bien difícil.", polish: "Raczej trudne." }
        ]
    },
    {
        id: 810,
        spanish: "multitud",
        polish: "tłum",
        description: "Rzeczownik oznaczający dużą grupę ludzi",
        examples: [
            { spanish: "Una multitud de personas.", polish: "Tłum ludzi." },
            { spanish: "La multitud grita.", polish: "Tłum krzyczy." },
            { spanish: "Entre la multitud.", polish: "Wśród tłumu." }
        ]
    },
    {
        id: 811,
        spanish: "maíz",
        polish: "kukurydza",
        description: "Rzeczownik oznaczający roślinę zbożową",
        examples: [
            { spanish: "Campo de maíz.", polish: "Pole kukurydzy." },
            { spanish: "Comer maíz.", polish: "Jeść kukurydzę." },
            { spanish: "Maíz dulce.", polish: "Słodka kukurydza." }
        ]
    },
    {
        id: 812,
        spanish: "comparar",
        polish: "porównywać",
        description: "Czasownik oznaczający zestawianie ze sobą",
        examples: [
            { spanish: "Comparar precios.", polish: "Porównać ceny." },
            { spanish: "No se puede comparar.", polish: "Nie można porównać." },
            { spanish: "Comparar resultados.", polish: "Porównać wyniki." }
        ]
    },
    {
        id: 813,
        spanish: "poema",
        polish: "wiersz",
        description: "Rzeczownik oznaczający utwór poetycki",
        examples: [
            { spanish: "Escribir un poema.", polish: "Napisać wiersz." },
            { spanish: "Leer poemas.", polish: "Czytać wiersze." },
            { spanish: "Poema de amor.", polish: "Wiersz miłosny." }
        ]
    },
    {
        id: 814,
        spanish: "cadena",
        polish: "łańcuch, sieć",
        description: "Rzeczownik oznaczający połączone ogniwa lub sieć",
        examples: [
            { spanish: "Cadena de oro.", polish: "Złoty łańcuch." },
            { spanish: "Cadena de televisión.", polish: "Sieć telewizyjna." },
            { spanish: "Romper la cadena.", polish: "Zerwać łańcuch." }
        ]
    },
    {
        id: 815,
        spanish: "campana",
        polish: "dzwonek",
        description: "Rzeczownik oznaczający metalowe narzędzie dźwiękowe",
        examples: [
            { spanish: "Sonar la campana.", polish: "Dzwonek dzwoni." },
            { spanish: "Campana de iglesia.", polish: "Dzwon kościelny." },
            { spanish: "Toque de campana.", polish: "Uderzenie dzwonu." }
        ]
    },
    {
        id: 816,
        spanish: "depender",
        polish: "zależeć",
        description: "Czasownik oznaczający uzależnienie od czegoś",
        examples: [
            { spanish: "Depende de ti.", polish: "Zależy od ciebie." },
            { spanish: "Todo depende.", polish: "Wszystko zależy." },
            { spanish: "Depender del tiempo.", polish: "Zależeć od pogody." }
        ]
    },
    {
        id: 817,
        spanish: "carne",
        polish: "mięso",
        description: "Rzeczownik oznaczający pokarm pochodzenia zwierzęcego",
        examples: [
            { spanish: "Comer carne.", polish: "Jeść mięso." },
            { spanish: "Carne de res.", polish: "Wołowina." },
            { spanish: "Carne asada.", polish: "Pieczone mięso." }
        ]
    },
    {
        id: 818,
        spanish: "frotar",
        polish: "trzeć, pocierać",
        description: "Czasownik oznaczający tarcie powierzchni",
        examples: [
            { spanish: "Frotar las manos.", polish: "Trzeć ręce." },
            { spanish: "Frotar con un trapo.", polish: "Pocierać szmatą." },
            { spanish: "Frotar suavemente.", polish: "Delikatnie pocierać." }
        ]
    },
    {
        id: 819,
        spanish: "tubo",
        polish: "rura, tuba",
        description: "Rzeczownik oznaczający cylindryczny pojemnik",
        examples: [
            { spanish: "Tubo de agua.", polish: "Rura wodna." },
            { spanish: "Tubo de ensayo.", polish: "Probówka." },
            { spanish: "Tubo de pasta.", polish: "Tubka pasty." }
        ]
    },
    {
        id: 820,
        spanish: "famoso - famosa",
        polish: "sławny",
        description: "Przymiotnik oznaczający znaną osobę lub rzecz",
        examples: [
            { spanish: "Actor famoso.", polish: "Sławny aktor." },
            { spanish: "Ser famoso.", polish: "Być sławnym." },
            { spanish: "Lugar famoso.", polish: "Słynne miejsce." }
        ]
    },
    {
        id: 821,
        spanish: "dólar",
        polish: "dolar",
        description: "Rzeczownik oznaczający walutę amerykańską",
        examples: [
            { spanish: "Cuesta diez dólares.", polish: "Kosztuje dziesięć dolarów." },
            { spanish: "Cambiar dólares.", polish: "Wymienić dolary." },
            { spanish: "Precio en dólares.", polish: "Cena w dolarach." }
        ]
    },
    {
        id: 822,
        spanish: "corriente",
        polish: "strumień, prąd",
        description: "Rzeczownik oznaczający płynący ruch",
        examples: [
            { spanish: "Corriente de agua.", polish: "Strumień wody." },
            { spanish: "Corriente eléctrica.", polish: "Prąd elektryczny." },
            { spanish: "Nadar contra la corriente.", polish: "Płynąć pod prąd." }
        ]
    },
    {
        id: 823,
        spanish: "miedo",
        polish: "strach",
        description: "Rzeczownik oznaczający uczucie lęku",
        examples: [
            { spanish: "Tener miedo.", polish: "Mieć strach." },
            { spanish: "Miedo a la oscuridad.", polish: "Strach przed ciemnością." },
            { spanish: "Sin miedo.", polish: "Bez strachu." }
        ]
    },
    {
        id: 824,
        spanish: "vista",
        polish: "wzrok, widok",
        description: "Rzeczownik oznaczający zdolność widzenia lub panoramę",
        examples: [
            { spanish: "Perder la vista.", polish: "Stracić wzrok." },
            { spanish: "Bella vista.", polish: "Piękny widok." },
            { spanish: "A primera vista.", polish: "Na pierwszy rzut oka." }
        ]
    },
    {
        id: 825,
        spanish: "delgado - delgada",
        polish: "chudy, szczupły",
        description: "Przymiotnik oznaczający niską wagę",
        examples: [
            { spanish: "Una persona delgada.", polish: "Szczupła osoba." },
            { spanish: "Muy delgado.", polish: "Bardzo chudy." },
            { spanish: "Mantenerse delgado.", polish: "Utrzymać szczupłą sylwetkę." }
        ]
    },
    {
        id: 826,
        spanish: "triángulo",
        polish: "trójkąt",
        description: "Rzeczownik oznaczający figurę geometryczną",
        examples: [
            { spanish: "Dibujar un triángulo.", polish: "Narysować trójkąt." },
            { spanish: "Triángulo equilátero.", polish: "Trójkąt równoboczny." },
            { spanish: "Forma de triángulo.", polish: "Kształt trójkąta." }
        ]
    },
    {
        id: 827,
        spanish: "planeta",
        polish: "planeta",
        description: "Rzeczownik oznaczający ciało niebieskie",
        examples: [
            { spanish: "Nuestro planeta.", polish: "Nasza planeta." },
            { spanish: "Planeta Tierra.", polish: "Planeta Ziemia." },
            { spanish: "Explorar planetas.", polish: "Eksplorować planety." }
        ]
    },
    {
        id: 828,
        spanish: "prisa",
        polish: "pośpiech",
        description: "Rzeczownik oznaczający szybkość działania",
        examples: [
            { spanish: "Tengo prisa.", polish: "Spieszę się." },
            { spanish: "Sin prisa.", polish: "Bez pośpiechu." },
            { spanish: "Darse prisa.", polish: "Pośpieszyć się." }
        ]
    },
    {
        id: 829,
        spanish: "jefe - jefa",
        polish: "szef",
        description: "Rzeczownik oznaczający przełożonego",
        examples: [
            { spanish: "Mi jefe es estricto.", polish: "Mój szef jest surowy." },
            { spanish: "Hablar con el jefe.", polish: "Rozmawiać z szefem." },
            { spanish: "Jefe de proyecto.", polish: "Kierownik projektu." }
        ]
    },
    {
        id: 830,
        spanish: "colonia",
        polish: "kolonia",
        description: "Rzeczownik oznaczający osadę lub perfumy",
        examples: [
            { spanish: "Colonia española.", polish: "Hiszpańska kolonia." },
            { spanish: "Agua de colonia.", polish: "Woda kolońska." },
            { spanish: "Colonia de vacaciones.", polish: "Kolonia wakacyjna." }
        ]
    },
    {
        id: 831,
        spanish: "reloj",
        polish: "zegar, zegarek",
        description: "Rzeczownik oznaczający urządzenie mierzące czas",
        examples: [
            { spanish: "Mi reloj está roto.", polish: "Mój zegarek jest zepsuty." },
            { spanish: "Reloj de pared.", polish: "Zegar ścienny." },
            { spanish: "Mirar el reloj.", polish: "Spojrzeć na zegarek." }
        ]
    },
    {
        id: 832,
        spanish: "mina",
        polish: "kopalnia",
        description: "Rzeczownik oznaczający miejsce wydobycia",
        examples: [
            { spanish: "Mina de oro.", polish: "Kopalnia złota." },
            { spanish: "Trabajar en la mina.", polish: "Pracować w kopalni." },
            { spanish: "Mina de carbón.", polish: "Kopalnia węgla." }
        ]
    },
    {
        id: 833,
        spanish: "empate",
        polish: "remis",
        description: "Rzeczownik oznaczający równy wynik",
        examples: [
            { spanish: "El partido terminó en empate.", polish: "Mecz zakończył się remisem." },
            { spanish: "Empate a cero.", polish: "Remis zero-zero." },
            { spanish: "Romper el empate.", polish: "Przełamać remis." }
        ]
    },
    {
        id: 834,
        spanish: "entrar",
        polish: "wchodzić",
        description: "Czasownik oznaczający wejście do środka",
        examples: [
            { spanish: "Entrar en la casa.", polish: "Wejść do domu." },
            { spanish: "Puedo entrar?", polish: "Czy mogę wejść?" },
            { spanish: "Entrar al cine.", polish: "Wejść do kina." }
        ]
    },
    {
        id: 835,
        spanish: "importante",
        polish: "ważny, główny",
        description: "Przymiotnik oznaczający znaczącą rzecz",
        examples: [
            { spanish: "Algo importante.", polish: "Coś ważnego." },
            { spanish: "Papel importante.", polish: "Ważna rola." },
            { spanish: "Decisión importante.", polish: "Ważna decyzja." }
        ]
    },
    {
        id: 836,
        spanish: "fresco - fresca",
        polish: "świeży",
        description: "Przymiotnik oznaczający coś niedawnego lub chłodnego",
        examples: [
            { spanish: "Pan fresco.", polish: "Świeży chleb." },
            { spanish: "Aire fresco.", polish: "Świeże powietrze." },
            { spanish: "Fruta fresca.", polish: "Świeże owoce." }
        ]
    },
    {
        id: 837,
        spanish: "búsqueda",
        polish: "poszukiwanie",
        description: "Rzeczownik oznaczający szukanie czegoś",
        examples: [
            { spanish: "Búsqueda de trabajo.", polish: "Poszukiwanie pracy." },
            { spanish: "En búsqueda de.", polish: "W poszukiwaniu." },
            { spanish: "Iniciar la búsqueda.", polish: "Rozpocząć poszukiwanie." }
        ]
    },
    {
        id: 838,
        spanish: "enviar",
        polish: "wysyłać",
        description: "Czasownik oznaczający przesłanie czegoś",
        examples: [
            { spanish: "Enviar un mensaje.", polish: "Wysłać wiadomość." },
            { spanish: "Enviar por correo.", polish: "Wysłać pocztą." },
            { spanish: "Enviar un regalo.", polish: "Wysłać prezent." }
        ]
    },
    {
        id: 839,
        spanish: "amarillo - amarilla",
        polish: "żółty",
        description: "Przymiotnik oznaczający kolor",
        examples: [
            { spanish: "Color amarillo.", polish: "Kolor żółty." },
            { spanish: "Flor amarilla.", polish: "Żółty kwiat." },
            { spanish: "Luz amarilla.", polish: "Żółte światło." }
        ]
    },
    {
        id: 840,
        spanish: "pistola",
        polish: "pistolet",
        description: "Rzeczownik oznaczający broń palną",
        examples: [
            { spanish: "Pistola de agua.", polish: "Pistolet na wodę." },
            { spanish: "Guardar la pistola.", polish: "Schować pistolet." },
            { spanish: "Disparo de pistola.", polish: "Strzał z pistoletu." }
        ]
    },
    {
        id: 841,
        spanish: "permitir",
        polish: "pozwalać",
        description: "Czasownik oznaczający dawanie zgody",
        examples: [
            { spanish: "Permitir la entrada.", polish: "Pozwolić na wejście." },
            { spanish: "No está permitido.", polish: "Nie jest dozwolone." },
            { spanish: "Permitir hablar.", polish: "Pozwolić mówić." }
        ]
    },
    {
        id: 842,
        spanish: "imprimir",
        polish: "drukować",
        description: "Czasownik oznaczający wydruk dokumentu",
        examples: [
            { spanish: "Imprimir un documento.", polish: "Wydrukować dokument." },
            { spanish: "Necesito imprimir.", polish: "Muszę wydrukować." },
            { spanish: "Imprimir en color.", polish: "Drukować w kolorze." }
        ]
    },
    {
        id: 843,
        spanish: "muerto - muerta",
        polish: "martwy",
        description: "Przymiotnik oznaczający brak życia",
        examples: [
            { spanish: "Está muerto.", polish: "Jest martwy." },
            { spanish: "Naturaleza muerta.", polish: "Martwa natura." },
            { spanish: "Ciudad muerta.", polish: "Martwe miasto." }
        ]
    },
    {
        id: 844,
        spanish: "lugar",
        polish: "miejsce, punkt",
        description: "Rzeczownik oznaczający lokalizację",
        examples: [
            { spanish: "Un buen lugar.", polish: "Dobre miejsce." },
            { spanish: "Lugar favorito.", polish: "Ulubione miejsce." },
            { spanish: "En este lugar.", polish: "W tym miejscu." }
        ]
    },
    {
        id: 845,
        spanish: "desierto",
        polish: "pustynia",
        description: "Rzeczownik oznaczający suchy teren",
        examples: [
            { spanish: "Desierto del Sahara.", polish: "Pustynia Sahara." },
            { spanish: "Cruzar el desierto.", polish: "Przekroczyć pustynię." },
            { spanish: "Clima de desierto.", polish: "Klimat pustynny." }
        ]
    },
    {
        id: 846,
        spanish: "traje",
        polish: "garnitur, kostium",
        description: "Rzeczownik oznaczający komplet ubrań",
        examples: [
            { spanish: "Traje de negocios.", polish: "Garnitur biznesowy." },
            { spanish: "Traje de baño.", polish: "Kostium kąpielowy." },
            { spanish: "Llevar un traje.", polish: "Nosić garnitur." }
        ]
    },
    {
        id: 847,
        spanish: "actual",
        polish: "aktualny, obecny",
        description: "Przymiotnik oznaczający teraźniejszość",
        examples: [
            { spanish: "Situación actual.", polish: "Aktualna sytuacja." },
            { spanish: "El año actual.", polish: "Bieżący rok." },
            { spanish: "Presidente actual.", polish: "Obecny prezydent." }
        ]
    },
    {
        id: 848,
        spanish: "ascensor",
        polish: "winda",
        description: "Rzeczownik oznaczający urządzenie transportowe",
        examples: [
            { spanish: "Subir en ascensor.", polish: "Wjechać windą." },
            { spanish: "Ascensor roto.", polish: "Zepsuta winda." },
            { spanish: "Llamar al ascensor.", polish: "Przywołać windę." }
        ]
    },
    {
        id: 849,
        spanish: "rosa",
        polish: "róża, różowy",
        description: "Rzeczownik oznaczający kwiat lub kolor różowy",
        examples: [
            { spanish: "Una rosa roja.", polish: "Czerwona róża." },
            { spanish: "Color rosa.", polish: "Kolor różowy." },
            { spanish: "Ramo de rosas.", polish: "Bukiet róż." }
        ]
    },
    {
        id: 850,
        spanish: "llegar",
        polish: "przybyć, dotrzeć",
        description: "Czasownik oznaczający dojście do celu",
        examples: [
            { spanish: "Llegar a casa.", polish: "Dotrzeć do domu." },
            { spanish: "Llegar tarde.", polish: "Przyjść późno." },
            { spanish: "Llegar a tiempo.", polish: "Przybyć na czas." }
        ]
    },
    {
        id: 851,
        spanish: "maestro - maestra",
        polish: "mistrz, nauczyciel",
        description: "Rzeczownik oznaczający eksperta lub pedagoga",
        examples: [
            { spanish: "Maestro de escuela.", polish: "Nauczyciel szkolny." },
            { spanish: "Ser un maestro.", polish: "Być mistrzem." },
            { spanish: "Obra maestra.", polish: "Arcydzieło." }
        ]
    },
    {
        id: 852,
        spanish: "pista",
        polish: "trop, tor",
        description: "Rzeczownik oznaczający ślad lub ścieżkę",
        examples: [
            { spanish: "Seguir la pista.", polish: "Podążać tropem." },
            { spanish: "Pista de baile.", polish: "Parkiet taneczny." },
            { spanish: "Pista de atletismo.", polish: "Bieżnia lekkoatletyczna." }
        ]
    },
    {
        id: 853,
        spanish: "padre - madre",
        polish: "rodzic",
        description: "Rzeczownik oznaczający opiekuna",
        examples: [
            { spanish: "Mis padres.", polish: "Moi rodzice." },
            { spanish: "Ser padre.", polish: "Być rodzicem." },
            { spanish: "Padres y maestros.", polish: "Rodzice i nauczyciele." }
        ]
    },
    {
        id: 854,
        spanish: "orilla",
        polish: "brzeg",
        description: "Rzeczownik oznaczający krawędź wody",
        examples: [
            { spanish: "Orilla del río.", polish: "Brzeg rzeki." },
            { spanish: "A orillas del mar.", polish: "Na brzegu morza." },
            { spanish: "Caminar por la orilla.", polish: "Spacerować brzegiem." }
        ]
    },
    {
        id: 855,
        spanish: "división",
        polish: "podział, dzielenie",
        description: "Rzeczownik oznaczający rozdzielenie",
        examples: [
            { spanish: "División del trabajo.", polish: "Podział pracy." },
            { spanish: "División matemática.", polish: "Dzielenie matematyczne." },
            { spanish: "Primera división.", polish: "Pierwsza liga." }
        ]
    },
    {
        id: 856,
        spanish: "hoja",
        polish: "liść, kartka",
        description: "Rzeczownik oznaczający element rośliny lub papieru",
        examples: [
            { spanish: "Hoja de papel.", polish: "Kartka papieru." },
            { spanish: "Hoja de árbol.", polish: "Liść drzewa." },
            { spanish: "Hojas verdes.", polish: "Zielone liście." }
        ]
    },
    {
        id: 857,
        spanish: "sustancia",
        polish: "substancja",
        description: "Rzeczownik oznaczający materiał lub istotę",
        examples: [
            { spanish: "Sustancia química.", polish: "Substancja chemiczna." },
            { spanish: "Sustancia desconocida.", polish: "Nieznana substancja." },
            { spanish: "Sustancia nutritiva.", polish: "Substancja odżywcza." }
        ]
    },
    {
        id: 858,
        spanish: "favorecer",
        polish: "sprzyjać, faworyzować",
        description: "Czasownik oznaczający popieranie",
        examples: [
            { spanish: "Favorecer el desarrollo.", polish: "Sprzyjać rozwojowi." },
            { spanish: "Este color te favorece.", polish: "Ten kolor ci służy." },
            { spanish: "Favorecer a alguien.", polish: "Faworyzować kogoś." }
        ]
    },
    {
        id: 859,
        spanish: "conectar",
        polish: "łączyć, podłączać",
        description: "Czasownik oznaczający łączenie ze sobą",
        examples: [
            { spanish: "Conectar a internet.", polish: "Podłączyć do internetu." },
            { spanish: "Conectar ideas.", polish: "Łączyć pomysły." },
            { spanish: "Conectar dispositivos.", polish: "Podłączyć urządzenia." }
        ]
    },
    {
        id: 860,
        spanish: "mensaje",
        polish: "wiadomość, post",
        description: "Rzeczownik oznaczający komunikat",
        examples: [
            { spanish: "Enviar un mensaje.", polish: "Wysłać wiadomość." },
            { spanish: "Mensaje de texto.", polish: "Wiadomość tekstowa." },
            { spanish: "Recibir mensajes.", polish: "Otrzymywać wiadomości." }
        ]
    },
    {
        id: 861,
        spanish: "pasar",
        polish: "spędzić, przejść",
        description: "Czasownik oznaczający przebywanie lub przemieszczanie",
        examples: [
            { spanish: "Pasar tiempo.", polish: "Spędzić czas." },
            { spanish: "Pasar por aquí.", polish: "Przejść tędy." },
            { spanish: "Pasar las vacaciones.", polish: "Spędzić wakacje." }
        ]
    },
    {
        id: 862,
        spanish: "acorde",
        polish: "akord",
        description: "Rzeczownik oznaczający współbrzmienie w muzyce",
        examples: [
            { spanish: "Tocar un acorde.", polish: "Zagrać akord." },
            { spanish: "Acorde de guitarra.", polish: "Akord gitarowy." },
            { spanish: "Cambiar de acorde.", polish: "Zmienić akord." }
        ]
    },
    {
        id: 863,
        spanish: "grasa",
        polish: "tłuszcz",
        description: "Rzeczownik oznaczający substancję tłustą",
        examples: [
            { spanish: "Grasa animal.", polish: "Tłuszcz zwierzęcy." },
            { spanish: "Sin grasa.", polish: "Bez tłuszczu." },
            { spanish: "Eliminar la grasa.", polish: "Usunąć tłuszcz." }
        ]
    },
    {
        id: 864,
        spanish: "contento - contenta",
        polish: "zadowolony",
        description: "Przymiotnik oznaczający szczęście",
        examples: [
            { spanish: "Estoy muy contento.", polish: "Jestem bardzo zadowolony." },
            { spanish: "Cara contenta.", polish: "Zadowolona twarz." },
            { spanish: "Sentirse contento.", polish: "Czuć się zadowolonym." }
        ]
    },
    {
        id: 865,
        spanish: "original",
        polish: "oryginalny",
        description: "Przymiotnik oznaczający autentyczność",
        examples: [
            { spanish: "Idea original.", polish: "Oryginalny pomysł." },
            { spanish: "Versión original.", polish: "Oryginalna wersja." },
            { spanish: "Muy original.", polish: "Bardzo oryginalne." }
        ]
    },
    {
        id: 866,
        spanish: "cuota",
        polish: "udział, składka",
        description: "Rzeczownik oznaczający część lub opłatę",
        examples: [
            { spanish: "Cuota mensual.", polish: "Miesięczna składka." },
            { spanish: "Pagar la cuota.", polish: "Zapłacić opłatę." },
            { spanish: "Cuota de mercado.", polish: "Udział w rynku." }
        ]
    },
    {
        id: 867,
        spanish: "estación",
        polish: "stacja, pora roku",
        description: "Rzeczownik oznaczający przystanek lub sezon",
        examples: [
            { spanish: "Estación de tren.", polish: "Stacja kolejowa." },
            { spanish: "Estación del año.", polish: "Pora roku." },
            { spanish: "Estación de radio.", polish: "Stacja radiowa." }
        ]
    },
    {
        id: 868,
        spanish: "papá",
        polish: "tata",
        description: "Rzeczownik oznaczający ojca w sposób nieformalny",
        examples: [
            { spanish: "Mi papá es bueno.", polish: "Mój tata jest dobry." },
            { spanish: "Hola papá.", polish: "Cześć tato." },
            { spanish: "Papá e hijo.", polish: "Tata i syn." }
        ]
    },
    {
        id: 869,
        spanish: "pan",
        polish: "chleb",
        description: "Rzeczownik oznaczający podstawowy produkt spożywczy",
        examples: [
            { spanish: "Comprar pan.", polish: "Kupić chleb." },
            { spanish: "Pan fresco.", polish: "Świeży chleb." },
            { spanish: "Comer pan.", polish: "Jeść chleb." }
        ]
    },
    {
        id: 870,
        spanish: "cobrar",
        polish: "pobierać opłatę, inkasować",
        description: "Czasownik oznaczający otrzymywanie pieniędzy",
        examples: [
            { spanish: "Cobrar el sueldo.", polish: "Otrzymać pensję." },
            { spanish: "¿Cuánto cobran?", polish: "Ile pobieracie?" },
            { spanish: "Cobrar una deuda.", polish: "Ściągnąć dług." }
        ]
    },
    {
        id: 871,
        spanish: "adecuado - adecuada",
        polish: "odpowiedni",
        description: "Przymiotnik oznaczający właściwy, stosowny",
        examples: [
            { spanish: "Comportamiento adecuado.", polish: "Odpowiednie zachowanie." },
            { spanish: "Momento adecuado.", polish: "Odpowiedni moment." },
            { spanish: "Ropa adecuada.", polish: "Odpowiednie ubranie." }
        ]
    },
    {
        id: 872,
        spanish: "barra",
        polish: "pręt, bar",
        description: "Rzeczownik oznaczający długi element lub lokal",
        examples: [
            { spanish: "Barra de hierro.", polish: "Żelazny pręt." },
            { spanish: "Barra de bar.", polish: "Bar (lada)." },
            { spanish: "Barra de pan.", polish: "Bagietka." }
        ]
    },
    {
        id: 873,
        spanish: "oferta",
        polish: "oferta",
        description: "Rzeczownik oznaczający propozycję lub promocję",
        examples: [
            { spanish: "Oferta de trabajo.", polish: "Oferta pracy." },
            { spanish: "Oferta especial.", polish: "Specjalna oferta." },
            { spanish: "Hacer una oferta.", polish: "Złożyć ofertę." }
        ]
    },
    {
        id: 874,
        spanish: "segmento",
        polish: "segment",
        description: "Rzeczownik oznaczający część całości",
        examples: [
            { spanish: "Segmento de mercado.", polish: "Segment rynku." },
            { spanish: "Dividir en segmentos.", polish: "Podzielić na segmenty." },
            { spanish: "Segmento de línea.", polish: "Odcinek linii." }
        ]
    },
    {
        id: 875,
        spanish: "esclavo - esclava",
        polish: "niewolnik",
        description: "Rzeczownik oznaczający osobę pozbawioną wolności",
        examples: [
            { spanish: "Esclavo liberado.", polish: "Wyzwolony niewolnik." },
            { spanish: "Historia de esclavos.", polish: "Historia niewolników." },
            { spanish: "Ser esclavo de.", polish: "Być niewolnikiem czegoś." }
        ]
    },
    {
        id: 876,
        spanish: "pato - pata",
        polish: "kaczka",
        description: "Rzeczownik oznaczający ptaka wodnego",
        examples: [
            { spanish: "Un pato en el lago.", polish: "Kaczka w jeziorze." },
            { spanish: "Pato salvaje.", polish: "Dzika kaczka." },
            { spanish: "Carne de pato.", polish: "Mięso kaczki." }
        ]
    },
    {
        id: 877,
        spanish: "instantánea",
        polish: "chwila, moment",
        description: "Rzeczownik oznaczający krótki moment",
        examples: [
            { spanish: "En una instantánea.", polish: "W jednej chwili." },
            { spanish: "Fotografía instantánea.", polish: "Zdjęcie momentalne." },
            { spanish: "Café instantáneo.", polish: "Kawa rozpuszczalna." }
        ]
    },
    {
        id: 878,
        spanish: "mercado",
        polish: "rynek, targ",
        description: "Rzeczownik oznaczający miejsce handlu",
        examples: [
            { spanish: "Ir al mercado.", polish: "Iść na targ." },
            { spanish: "Mercado de valores.", polish: "Giełda papierów wartościowych." },
            { spanish: "Estudio de mercado.", polish: "Badanie rynku." }
        ]
    },
    {
        id: 879,
        spanish: "grado",
        polish: "stopień",
        description: "Rzeczownik oznaczający poziom lub jednostkę",
        examples: [
            { spanish: "Grado de temperatura.", polish: "Stopień temperatury." },
            { spanish: "Tercer grado.", polish: "Trzeci stopień." },
            { spanish: "Grado universitario.", polish: "Stopień uniwersytecki." }
        ]
    },
    {
        id: 880,
        spanish: "poblar",
        polish: "zaludniać",
        description: "Czasownik oznaczający osiedlanie się",
        examples: [
            { spanish: "Poblar una región.", polish: "Zaludnić region." },
            { spanish: "Poblar el territorio.", polish: "Zaludnić terytorium." },
            { spanish: "Zona poblada.", polish: "Obszar zaludniony." }
        ]
    },
    {
        id: 881,
        spanish: "polluelo",
        polish: "pisklę",
        description: "Rzeczownik oznaczający młode ptaka",
        examples: [
            { spanish: "Polluelo de gallina.", polish: "Pisklę kurczaka." },
            { spanish: "Nacimiento de polluelos.", polish: "Narodziny piskląt." },
            { spanish: "Polluelo hambriento.", polish: "Głodne pisklę." }
        ]
    },
    {
        id: 882,
        spanish: "querido - querida",
        polish: "drogi, ukochany",
        description: "Przymiotnik oznaczający ukochaną osobę",
        examples: [
            { spanish: "Querido amigo.", polish: "Drogi przyjacielu." },
            { spanish: "Persona querida.", polish: "Ukochana osoba." },
            { spanish: "Muy querido.", polish: "Bardzo kochany." }
        ]
    },
    {
        id: 883,
        spanish: "enemigo - enemiga",
        polish: "wróg",
        description: "Rzeczownik oznaczający przeciwnika",
        examples: [
            { spanish: "Enemigo común.", polish: "Wspólny wróg." },
            { spanish: "Hacerse enemigos.", polish: "Stać się wrogami." },
            { spanish: "Enemigo mortal.", polish: "Śmiertelny wróg." }
        ]
    },
    {
        id: 884,
        spanish: "responder",
        polish: "odpowiadać",
        description: "Czasownik oznaczający udzielenie odpowiedzi",
        examples: [
            { spanish: "Responder a una pregunta.", polish: "Odpowiedzieć na pytanie." },
            { spanish: "Responder rápidamente.", polish: "Odpowiedzieć szybko." },
            { spanish: "No responder.", polish: "Nie odpowiadać." }
        ]
    },
    {
        id: 885,
        spanish: "bebida",
        polish: "napój",
        description: "Rzeczownik oznaczający płyn do picia",
        examples: [
            { spanish: "Bebida fría.", polish: "Zimny napój." },
            { spanish: "Bebida alcohólica.", polish: "Napój alkoholowy." },
            { spanish: "Pedir una bebida.", polish: "Zamówić napój." }
        ]
    },
    {
        id: 886,
        spanish: "producirse",
        polish: "występować, zdarzać się",
        description: "Czasownik oznaczający wydarzenie lub powstanie",
        examples: [
            { spanish: "Se produjo un accidente.", polish: "Zdarzył się wypadek." },
            { spanish: "Producirse cambios.", polish: "Następują zmiany." },
            { spanish: "Se produce naturalmente.", polish: "Występuje naturalnie." }
        ]
    },
    {
        id: 887,
        spanish: "apoyo",
        polish: "wsparcie",
        description: "Rzeczownik oznaczający pomoc",
        examples: [
            { spanish: "Necesito apoyo.", polish: "Potrzebuję wsparcia." },
            { spanish: "Apoyo emocional.", polish: "Wsparcie emocjonalne." },
            { spanish: "Dar apoyo.", polish: "Udzielić wsparcia." }
        ]
    },
    {
        id: 888,
        spanish: "discurso",
        polish: "przemówienie",
        description: "Rzeczownik oznaczający publiczne wystąpienie",
        examples: [
            { spanish: "Dar un discurso.", polish: "Wygłosić przemówienie." },
            { spanish: "Discurso político.", polish: "Przemówienie polityczne." },
            { spanish: "Escribir un discurso.", polish: "Napisać przemówienie." }
        ]
    },
    {
        id: 889,
        spanish: "naturaleza",
        polish: "natura",
        description: "Rzeczownik oznaczający świat przyrody",
        examples: [
            { spanish: "Amor a la naturaleza.", polish: "Miłość do natury." },
            { spanish: "Naturaleza salvaje.", polish: "Dzika natura." },
            { spanish: "En la naturaleza.", polish: "W naturze." }
        ]
    },
    {
        id: 890,
        spanish: "alcance",
        polish: "zasięg",
        description: "Rzeczownik oznaczający zakres lub dystans",
        examples: [
            { spanish: "Fuera de alcance.", polish: "Poza zasięgiem." },
            { spanish: "Alcance global.", polish: "Globalny zasięg." },
            { spanish: "Estar al alcance.", polish: "Być w zasięgu." }
        ]
    },
    {
        id: 891,
        spanish: "vapor",
        polish: "para",
        description: "Rzeczownik oznaczający gazowy stan wody",
        examples: [
            { spanish: "Vapor de agua.", polish: "Para wodna." },
            { spanish: "Máquina de vapor.", polish: "Maszyna parowa." },
            { spanish: "Cocinar al vapor.", polish: "Gotować na parze." }
        ]
    },
    {
        id: 892,
        spanish: "movimiento",
        polish: "ruch",
        description: "Rzeczownik oznaczający przemieszczenie",
        examples: [
            { spanish: "Movimiento rápido.", polish: "Szybki ruch." },
            { spanish: "Libertad de movimiento.", polish: "Wolność ruchu." },
            { spanish: "Movimiento social.", polish: "Ruch społeczny." }
        ]
    },
    {
        id: 893,
        spanish: "camino",
        polish: "droga, ścieżka",
        description: "Rzeczownik oznaczający trasę lub sposób",
        examples: [
            { spanish: "Camino largo.", polish: "Długa droga." },
            { spanish: "En el camino.", polish: "W drodze." },
            { spanish: "Camino correcto.", polish: "Właściwa ścieżka." }
        ]
    },
    {
        id: 894,
        spanish: "líquido",
        polish: "płyn, ciecz",
        description: "Rzeczownik oznaczający stan skupienia",
        examples: [
            { spanish: "Líquido transparente.", polish: "Przezroczysty płyn." },
            { spanish: "Beber líquidos.", polish: "Pić płyny." },
            { spanish: "Estado líquido.", polish: "Stan ciekły." }
        ]
    },
    {
        id: 895,
        spanish: "registro",
        polish: "rejestr, zapis",
        description: "Rzeczownik oznaczający ewidencję",
        examples: [
            { spanish: "Registro de datos.", polish: "Rejestr danych." },
            { spanish: "Llevar un registro.", polish: "Prowadzić rejestr." },
            { spanish: "Registro oficial.", polish: "Oficjalny zapis." }
        ]
    },
    {
        id: 896,
        spanish: "significado",
        polish: "znaczenie",
        description: "Rzeczownik oznaczający sens",
        examples: [
            { spanish: "Significado profundo.", polish: "Głębokie znaczenie." },
            { spanish: "Sin significado.", polish: "Bez znaczenia." },
            { spanish: "Buscar el significado.", polish: "Szukać znaczenia." }
        ]
    },
    {
        id: 897,
        spanish: "cociente",
        polish: "iloraz",
        description: "Rzeczownik oznaczający wynik dzielenia",
        examples: [
            { spanish: "Cociente de división.", polish: "Iloraz dzielenia." },
            { spanish: "Calcular el cociente.", polish: "Obliczyć iloraz." },
            { spanish: "Cociente intelectual.", polish: "Iloraz inteligencji." }
        ]
    },
    {
        id: 898,
        spanish: "dientes",
        polish: "zęby",
        description: "Rzeczownik oznaczający części jamy ustnej",
        examples: [
            { spanish: "Cepillar los dientes.", polish: "Myć zęby." },
            { spanish: "Dientes blancos.", polish: "Białe zęby." },
            { spanish: "Dolor de dientes.", polish: "Ból zębów." }
        ]
    },
    {
        id: 899,
        spanish: "concha",
        polish: "muszla",
        description: "Rzeczownik oznaczający skorupę mięczaka",
        examples: [
            { spanish: "Concha de mar.", polish: "Muszla morska." },
            { spanish: "Recoger conchas.", polish: "Zbierać muszle." },
            { spanish: "Concha hermosa.", polish: "Piękna muszla." }
        ]
    },
    {
        id: 900,
        spanish: "cuello",
        polish: "szyja",
        description: "Rzeczownik oznaczający część ciała",
        examples: [
            { spanish: "Dolor de cuello.", polish: "Ból szyi." },
            { spanish: "Cuello largo.", polish: "Długa szyja." },
            { spanish: "Girar el cuello.", polish: "Obrócić szyję." }
        ]
    },
    {
        id: 901,
        spanish: "oxígeno",
        polish: "tlen",
        description: "Rzeczownik oznaczający pierwiastek chemiczny",
        examples: [
            { spanish: "Necesitamos oxígeno.", polish: "Potrzebujemy tlenu." },
            { spanish: "Falta de oxígeno.", polish: "Brak tlenu." },
            { spanish: "Respirar oxígeno.", polish: "Oddychać tlenem." }
        ]
    },
    {
        id: 902,
        spanish: "azúcar",
        polish: "cukier",
        description: "Rzeczownik oznaczający słodką substancję",
        examples: [
            { spanish: "Azúcar blanco.", polish: "Biały cukier." },
            { spanish: "Sin azúcar.", polish: "Bez cukru." },
            { spanish: "Añadir azúcar.", polish: "Dodać cukier." }
        ]
    },
    {
        id: 903,
        spanish: "muerte",
        polish: "śmierć",
        description: "Rzeczownik oznaczający koniec życia",
        examples: [
            { spanish: "La muerte es inevitable.", polish: "Śmierć jest nieunikniona." },
            { spanish: "Pena de muerte.", polish: "Kara śmierci." },
            { spanish: "Después de la muerte.", polish: "Po śmierci." }
        ]
    },
    {
        id: 904,
        spanish: "bastante",
        polish: "dość, wystarczająco",
        description: "Przysłówek oznaczający odpowiednią ilość",
        examples: [
            { spanish: "Es bastante grande.", polish: "Jest dość duży." },
            { spanish: "Bastante bien.", polish: "Całkiem dobrze." },
            { spanish: "Tengo bastante.", polish: "Mam wystarczająco." }
        ]
    },
    {
        id: 905,
        spanish: "habilidad",
        polish: "umiejętność",
        description: "Rzeczownik oznaczający zdolność wykonania czegoś",
        examples: [
            { spanish: "Habilidad especial.", polish: "Specjalna umiejętność." },
            { spanish: "Desarrollar habilidades.", polish: "Rozwijać umiejętności." },
            { spanish: "Habilidad para hablar.", polish: "Umiejętność mówienia." }
        ]
    },
    {
        id: 906,
        spanish: "mujeres",
        polish: "kobiety",
        description: "Rzeczownik oznaczający wiele kobiet",
        examples: [
            { spanish: "Mujeres fuertes.", polish: "Silne kobiety." },
            { spanish: "Grupo de mujeres.", polish: "Grupa kobiet." },
            { spanish: "Derechos de las mujeres.", polish: "Prawa kobiet." }
        ]
    },
    {
        id: 907,
        spanish: "temporada",
        polish: "sezon",
        description: "Rzeczownik oznaczający okres czasu",
        examples: [
            { spanish: "Temporada de verano.", polish: "Sezon letni." },
            { spanish: "Nueva temporada.", polish: "Nowy sezon." },
            { spanish: "Temporada alta.", polish: "Wysoki sezon." }
        ]
    },
    {
        id: 908,
        spanish: "solución",
        polish: "rozwiązanie",
        description: "Rzeczownik oznaczający odpowiedź na problem",
        examples: [
            { spanish: "Buscar una solución.", polish: "Szukać rozwiązania." },
            { spanish: "Solución perfecta.", polish: "Doskonałe rozwiązanie." },
            { spanish: "Encontrar solución.", polish: "Znaleźć rozwiązanie." }
        ]
    },
    {
        id: 909,
        spanish: "imán",
        polish: "magnes",
        description: "Rzeczownik oznaczający przyciągający obiekt",
        examples: [
            { spanish: "Imán fuerte.", polish: "Silny magnes." },
            { spanish: "Atraer con imán.", polish: "Przyciągać magnesem." },
            { spanish: "Poder del imán.", polish: "Siła magnesu." }
        ]
    },
    {
        id: 910,
        spanish: "plata",
        polish: "srebro",
        description: "Rzeczownik oznaczający metal szlachetny",
        examples: [
            { spanish: "Anillo de plata.", polish: "Srebrny pierścionek." },
            { spanish: "Mina de plata.", polish: "Kopalnia srebra." },
            { spanish: "Plata pura.", polish: "Czyste srebro." }
        ]
    },
    {
        id: 911,
        spanish: "gracias",
        polish: "dziękuję",
        description: "Wyrażenie oznaczające podziękowanie",
        examples: [
            { spanish: "Muchas gracias.", polish: "Dziękuję bardzo." },
            { spanish: "Gracias por todo.", polish: "Dziękuję za wszystko." },
            { spanish: "Dar las gracias.", polish: "Podziękować." }
        ]
    },
    {
        id: 912,
        spanish: "rama",
        polish: "gałąź",
        description: "Rzeczownik oznaczający część drzewa",
        examples: [
            { spanish: "Rama de árbol.", polish: "Gałąź drzewa." },
            { spanish: "Cortar la rama.", polish: "Ciąć gałąź." },
            { spanish: "Rama seca.", polish: "Sucha gałąź." }
        ]
    },
    {
        id: 913,
        spanish: "partido",
        polish: "mecz, partia",
        description: "Rzeczownik oznaczający grę sportową lub grupę polityczną",
        examples: [
            { spanish: "Partido de fútbol.", polish: "Mecz piłkarski." },
            { spanish: "Partido político.", polish: "Partia polityczna." },
            { spanish: "Ganar el partido.", polish: "Wygrać mecz." }
        ]
    },
    {
        id: 914,
        spanish: "sufijo",
        polish: "przyrostek",
        description: "Rzeczownik oznaczający końcówkę słowa",
        examples: [
            { spanish: "Añadir sufijo.", polish: "Dodać przyrostek." },
            { spanish: "Sufijo verbal.", polish: "Przyrostek czasownikowy." },
            { spanish: "Estudiar sufijos.", polish: "Studiować przyrostki." }
        ]
    },
    {
        id: 915,
        spanish: "especialmente",
        polish: "szczególnie",
        description: "Przysłówek oznaczający wyjątkowy sposób",
        examples: [
            { spanish: "Especialmente importante.", polish: "Szczególnie ważne." },
            { spanish: "Me gusta especialmente.", polish: "Szczególnie mi się podoba." },
            { spanish: "Especialmente para ti.", polish: "Specjalnie dla ciebie." }
        ]
    },
    {
        id: 916,
        spanish: "higo",
        polish: "figa",
        description: "Rzeczownik oznaczający owoc",
        examples: [
            { spanish: "Comer higos.", polish: "Jeść figi." },
            { spanish: "Higo maduro.", polish: "Dojrzała figa." },
            { spanish: "Árbol de higo.", polish: "Drzewo figowe." }
        ]
    },
    {
        id: 917,
        spanish: "miedo",
        polish: "przestraszony",
        description: "Przymiotnik oznaczający uczucie strachu",
        examples: [
            { spanish: "Estar con miedo.", polish: "Być przestraszonym." },
            { spanish: "Sentir miedo.", polish: "Odczuwać strach." },
            { spanish: "No tengo miedo.", polish: "Nie boję się." }
        ]
    },
    {
        id: 918,
        spanish: "enorme",
        polish: "ogromny",
        description: "Przymiotnik oznaczający bardzo duży rozmiar",
        examples: [
            { spanish: "Casa enorme.", polish: "Ogromny dom." },
            { spanish: "Problema enorme.", polish: "Ogromny problem." },
            { spanish: "Éxito enorme.", polish: "Ogromny sukces." }
        ]
    },
    {
        id: 919,
        spanish: "hermana",
        polish: "siostra",
        description: "Rzeczownik oznaczający krewną płci żeńskiej",
        examples: [
            { spanish: "Mi hermana mayor.", polish: "Moja starsza siostra." },
            { spanish: "Hermana pequeña.", polish: "Młodsza siostra." },
            { spanish: "Quiero a mi hermana.", polish: "Kocham moją siostrę." }
        ]
    },
    {
        id: 920,
        spanish: "acero",
        polish: "stal",
        description: "Rzeczownik oznaczający metal",
        examples: [
            { spanish: "Acero inoxidable.", polish: "Stal nierdzewna." },
            { spanish: "Puerta de acero.", polish: "Stalowe drzwi." },
            { spanish: "Industria del acero.", polish: "Przemysł stalowy." }
        ]
    },
    {
        id: 921,
        spanish: "discutir",
        polish: "dyskutować",
        description: "Czasownik oznaczający rozmowę na temat",
        examples: [
            { spanish: "Discutir el tema.", polish: "Dyskutować na temat." },
            { spanish: "Vamos a discutir.", polish: "Przedyskutujmy to." },
            { spanish: "Discutir opciones.", polish: "Dyskutować o opcjach." }
        ]
    },
    {
        id: 922,
        spanish: "adelante",
        polish: "do przodu",
        description: "Przysłówek oznaczający kierunek",
        examples: [
            { spanish: "Ir adelante.", polish: "Iść do przodu." },
            { spanish: "Seguir adelante.", polish: "Kontynuować naprzód." },
            { spanish: "Más adelante.", polish: "Dalej, później." }
        ]
    },
    {
        id: 923,
        spanish: "similar",
        polish: "podobny",
        description: "Przymiotnik oznaczający zbieżność",
        examples: [
            { spanish: "Muy similar.", polish: "Bardzo podobne." },
            { spanish: "Caso similar.", polish: "Podobny przypadek." },
            { spanish: "Ideas similares.", polish: "Podobne pomysły." }
        ]
    },
    {
        id: 924,
        spanish: "guiar",
        polish: "prowadzić",
        description: "Czasownik oznaczający wskazywanie drogi",
        examples: [
            { spanish: "Guiar el camino.", polish: "Prowadzić drogę." },
            { spanish: "Guiar a alguien.", polish: "Prowadzić kogoś." },
            { spanish: "Guiar un grupo.", polish: "Prowadzić grupę." }
        ]
    },
    {
        id: 925,
        spanish: "experiencia",
        polish: "doświadczenie",
        description: "Rzeczownik oznaczający przeżyte zdarzenia",
        examples: [
            { spanish: "Gran experiencia.", polish: "Wielkie doświadczenie." },
            { spanish: "Experiencia laboral.", polish: "Doświadczenie zawodowe." },
            { spanish: "Ganar experiencia.", polish: "Zdobyć doświadczenie." }
        ]
    },
    {
        id: 926,
        spanish: "puntuación",
        polish: "wynik, punktacja",
        description: "Rzeczownik oznaczający liczbę punktów",
        examples: [
            { spanish: "Puntuación alta.", polish: "Wysoki wynik." },
            { spanish: "Tabla de puntuación.", polish: "Tabela wyników." },
            { spanish: "Mejorar la puntuación.", polish: "Poprawić wynik." }
        ]
    },
    {
        id: 927,
        spanish: "manzana",
        polish: "jabłko",
        description: "Rzeczownik oznaczający owoc",
        examples: [
            { spanish: "Comer una manzana.", polish: "Jeść jabłko." },
            { spanish: "Manzana roja.", polish: "Czerwone jabłko." },
            { spanish: "Jugo de manzana.", polish: "Sok jabłkowy." }
        ]
    },
    {
        id: 928,
        spanish: "comprado",
        polish: "kupiony",
        description: "Imiesłów oznaczający zakup w przeszłości",
        examples: [
            { spanish: "Ya comprado.", polish: "Już kupione." },
            { spanish: "Boleto comprado.", polish: "Kupiony bilet." },
            { spanish: "He comprado pan.", polish: "Kupiłem chleb." }
        ]
    },
    {
        id: 929,
        spanish: "llevado",
        polish: "prowadzony, zabrany",
        description: "Imiesłów oznaczający przyniesienie",
        examples: [
            { spanish: "Han llevado todo.", polish: "Zabrali wszystko." },
            { spanish: "Llevado al hospital.", polish: "Zabrany do szpitala." },
            { spanish: "He llevado el libro.", polish: "Przyniosłem książkę." }
        ]
    },
    {
        id: 930,
        spanish: "tono",
        polish: "ton, wysokość dźwięku",
        description: "Rzeczownik oznaczający brzmienie",
        examples: [
            { spanish: "Tono de voz.", polish: "Ton głosu." },
            { spanish: "Cambiar el tono.", polish: "Zmienić ton." },
            { spanish: "Tono amable.", polish: "Przyjazny ton." }
        ]
    },
    {
        id: 931,
        spanish: "abrigo",
        polish: "płaszcz",
        description: "Rzeczownik oznaczający okrycie wierzchnie",
        examples: [
            { spanish: "Abrigo de invierno.", polish: "Płaszcz zimowy." },
            { spanish: "Ponerse el abrigo.", polish: "Założyć płaszcz." },
            { spanish: "Abrigo caliente.", polish: "Ciepły płaszcz." }
        ]
    },
    {
        id: 932,
        spanish: "masa",
        polish: "masa",
        description: "Rzeczownik oznaczający ilość materii",
        examples: [
            { spanish: "Masa corporal.", polish: "Masa ciała." },
            { spanish: "Masa de pan.", polish: "Ciasto chlebowe." },
            { spanish: "Gran masa.", polish: "Wielka masa." }
        ]
    },
    {
        id: 933,
        spanish: "tarjeta",
        polish: "karta",
        description: "Rzeczownik oznaczający plastikowy dokument",
        examples: [
            { spanish: "Tarjeta de crédito.", polish: "Karta kredytowa." },
            { spanish: "Tarjeta postal.", polish: "Pocztówka." },
            { spanish: "Mostrar la tarjeta.", polish: "Pokazać kartę." }
        ]
    },
    {
        id: 934,
        spanish: "banda",
        polish: "zespół, banda",
        description: "Rzeczownik oznaczający grupę",
        examples: [
            { spanish: "Banda de música.", polish: "Zespół muzyczny." },
            { spanish: "Banda criminal.", polish: "Przestępcza banda." },
            { spanish: "Tocar en una banda.", polish: "Grać w zespole." }
        ]
    },
    {
        id: 935,
        spanish: "cuerda",
        polish: "sznur, lina",
        description: "Rzeczownik oznaczający elastyczny element",
        examples: [
            { spanish: "Cuerda gruesa.", polish: "Gruby sznur." },
            { spanish: "Saltar la cuerda.", polish: "Skakać na skakance." },
            { spanish: "Atar con cuerda.", polish: "Związać sznurem." }
        ]
    },
    {
        id: 936,
        spanish: "deslizamiento",
        polish: "poślizg",
        description: "Rzeczownik oznaczający ślizganie się",
        examples: [
            { spanish: "Deslizamiento de tierra.", polish: "Osuwisko ziemi." },
            { spanish: "Prevenir deslizamiento.", polish: "Zapobiec poślizgowi." },
            { spanish: "Deslizamiento peligroso.", polish: "Niebezpieczny poślizg." }
        ]
    },
    {
        id: 937,
        spanish: "ganar",
        polish: "wygrywać",
        description: "Czasownik oznaczający zdobycie zwycięstwa",
        examples: [
            { spanish: "Ganar el partido.", polish: "Wygrać mecz." },
            { spanish: "Quiero ganar.", polish: "Chcę wygrać." },
            { spanish: "Ganar dinero.", polish: "Zarabiać pieniądze." }
        ]
    },
    {
        id: 938,
        spanish: "soñar",
        polish: "śnić, marzyć",
        description: "Czasownik oznaczający marzenie",
        examples: [
            { spanish: "Soñar despierto.", polish: "Marzyć na jawie." },
            { spanish: "Soñar con algo.", polish: "Śnić o czymś." },
            { spanish: "Me gusta soñar.", polish: "Lubię marzyć." }
        ]
    },
    {
        id: 939,
        spanish: "noche",
        polish: "wieczór, noc",
        description: "Rzeczownik oznaczający porę dnia",
        examples: [
            { spanish: "Buenas noches.", polish: "Dobry wieczór." },
            { spanish: "Por la noche.", polish: "Wieczorem." },
            { spanish: "Noche oscura.", polish: "Ciemna noc." }
        ]
    },
    {
        id: 940,
        spanish: "condición",
        polish: "warunek",
        description: "Rzeczownik oznaczający wymaganie",
        examples: [
            { spanish: "Condición necesaria.", polish: "Niezbędny warunek." },
            { spanish: "En buena condición.", polish: "W dobrym stanie." },
            { spanish: "Bajo condición.", polish: "Pod warunkiem." }
        ]
    },
    {
        id: 941,
        spanish: "pienso",
        polish: "karma, myślę",
        description: "Rzeczownik oznaczający pokarm dla zwierząt lub forma czasownika myśleć",
        examples: [
            { spanish: "Pienso para perros.", polish: "Karma dla psów." },
            { spanish: "Pienso que sí.", polish: "Myślę, że tak." },
            { spanish: "Comprar pienso.", polish: "Kupić karmę." }
        ]
    },
    {
        id: 942,
        spanish: "herramienta",
        polish: "narzędzie",
        description: "Rzeczownik oznaczający przedmiot do pracy",
        examples: [
            { spanish: "Herramienta útil.", polish: "Użyteczne narzędzie." },
            { spanish: "Caja de herramientas.", polish: "Skrzynka z narzędziami." },
            { spanish: "Usar herramientas.", polish: "Używać narzędzi." }
        ]
    },
    {
        id: 943,
        spanish: "total",
        polish: "całkowity, suma",
        description: "Przymiotnik lub rzeczownik oznaczający sumę",
        examples: [
            { spanish: "Total general.", polish: "Suma całkowita." },
            { spanish: "En total.", polish: "W sumie." },
            { spanish: "Precio total.", polish: "Cena całkowita." }
        ]
    },
    {
        id: 944,
        spanish: "básico - básica",
        polish: "podstawowy",
        description: "Przymiotnik oznaczający fundamentalny",
        examples: [
            { spanish: "Conocimiento básico.", polish: "Podstawowa wiedza." },
            { spanish: "Nivel básico.", polish: "Poziom podstawowy." },
            { spanish: "Necesidad básica.", polish: "Podstawowa potrzeba." }
        ]
    },
    {
        id: 945,
        spanish: "olor",
        polish: "zapach",
        description: "Rzeczownik oznaczający woń",
        examples: [
            { spanish: "Olor agradable.", polish: "Przyjemny zapach." },
            { spanish: "Mal olor.", polish: "Nieprzyjemny zapach." },
            { spanish: "Sentir el olor.", polish: "Poczuć zapach." }
        ]
    },
    {
        id: 946,
        spanish: "valle",
        polish: "dolina",
        description: "Rzeczownik oznaczający obniżenie terenu",
        examples: [
            { spanish: "Valle hermoso.", polish: "Piękna dolina." },
            { spanish: "Valle profundo.", polish: "Głęboka dolina." },
            { spanish: "Vivir en el valle.", polish: "Mieszkać w dolinie." }
        ]
    },
    {
        id: 947,
        spanish: "ni",
        polish: "ani",
        description: "Spójnik oznaczający negację",
        examples: [
            { spanish: "Ni tú ni yo.", polish: "Ani ty, ani ja." },
            { spanish: "No tengo ni idea.", polish: "Nie mam pojęcia." },
            { spanish: "Ni siquiera.", polish: "Nawet nie." }
        ]
    },
    {
        id: 948,
        spanish: "doble",
        polish: "podwójny",
        description: "Przymiotnik oznaczający dwa razy większy",
        examples: [
            { spanish: "Precio doble.", polish: "Podwójna cena." },
            { spanish: "Habitación doble.", polish: "Pokój dwuosobowy." },
            { spanish: "Doble porción.", polish: "Podwójna porcja." }
        ]
    },
    {
        id: 949,
        spanish: "asiento",
        polish: "siedzenie",
        description: "Rzeczownik oznaczający miejsce do siedzenia",
        examples: [
            { spanish: "Tomar asiento.", polish: "Zająć miejsce." },
            { spanish: "Asiento cómodo.", polish: "Wygodne siedzenie." },
            { spanish: "Reservar un asiento.", polish: "Zarezerwować miejsce." }
        ]
    },
    {
        id: 950,
        spanish: "continuar",
        polish: "kontynuować",
        description: "Czasownik oznaczający dalsze działanie",
        examples: [
            { spanish: "Continuar trabajando.", polish: "Kontynuować pracę." },
            { spanish: "Vamos a continuar.", polish: "Będziemy kontynuować." },
            { spanish: "Continuar el viaje.", polish: "Kontynuować podróż." }
        ]
    },
    {
        id: 951,
        spanish: "bloque",
        polish: "blok",
        description: "Rzeczownik oznaczający bryłę materiału",
        examples: [
            { spanish: "Bloque de hielo.", polish: "Blok lodu." },
            { spanish: "Bloque de piedra.", polish: "Blok kamienia." },
            { spanish: "Bloque de apartamentos.", polish: "Blok mieszkalny." }
        ]
    },
    {
        id: 952,
        spanish: "tabla",
        polish: "tablica, wykres",
        description: "Rzeczownik oznaczający schemat",
        examples: [
            { spanish: "Tabla de datos.", polish: "Tabela danych." },
            { spanish: "Consultar la tabla.", polish: "Sprawdzić tabelę." },
            { spanish: "Tabla periódica.", polish: "Tablica okresowa." }
        ]
    },
    {
        id: 953,
        spanish: "sombrero",
        polish: "kapelusz",
        description: "Rzeczownik oznaczający nakrycie głowy",
        examples: [
            { spanish: "Llevar sombrero.", polish: "Nosić kapelusz." },
            { spanish: "Sombrero grande.", polish: "Duży kapelusz." },
            { spanish: "Ponerse el sombrero.", polish: "Założyć kapelusz." }
        ]
    },
    {
        id: 954,
        spanish: "vender",
        polish: "sprzedawać",
        description: "Czasownik oznaczający handel",
        examples: [
            { spanish: "Vender la casa.", polish: "Sprzedać dom." },
            { spanish: "Vender productos.", polish: "Sprzedawać produkty." },
            { spanish: "Quiero vender.", polish: "Chcę sprzedać." }
        ]
    },
    {
        id: 955,
        spanish: "éxito",
        polish: "sukces",
        description: "Rzeczownik oznaczający osiągnięcie",
        examples: [
            { spanish: "Gran éxito.", polish: "Wielki sukces." },
            { spanish: "Tener éxito.", polish: "Odnieść sukces." },
            { spanish: "Historia de éxito.", polish: "Historia sukcesu." }
        ]
    },
    {
        id: 956,
        spanish: "empresa",
        polish: "firma, przedsiębiorstwo",
        description: "Rzeczownik oznaczający organizację biznesową",
        examples: [
            { spanish: "Trabajar en una empresa.", polish: "Pracować w firmie." },
            { spanish: "Empresa grande.", polish: "Duża firma." },
            { spanish: "Crear una empresa.", polish: "Założyć firmę." }
        ]
    },
    {
        id: 957,
        spanish: "restar",
        polish: "odejmować",
        description: "Czasownik oznaczający odejmowanie",
        examples: [
            { spanish: "Restar números.", polish: "Odejmować liczby." },
            { spanish: "Cinco menos tres.", polish: "Pięć minus trzy." },
            { spanish: "Aprender a restar.", polish: "Nauczyć się odejmowania." }
        ]
    },
    {
        id: 958,
        spanish: "evento",
        polish: "wydarzenie",
        description: "Rzeczownik oznaczający zdarzenie",
        examples: [
            { spanish: "Evento importante.", polish: "Ważne wydarzenie." },
            { spanish: "Organizar un evento.", polish: "Zorganizować wydarzenie." },
            { spanish: "Asistir al evento.", polish: "Uczestniczyć w wydarzeniu." }
        ]
    },
    {
        id: 959,
        spanish: "particular",
        polish: "szczególny",
        description: "Przymiotnik oznaczający specjalny",
        examples: [
            { spanish: "Caso particular.", polish: "Szczególny przypadek." },
            { spanish: "Nada en particular.", polish: "Nic szczególnego." },
            { spanish: "Algo particular.", polish: "Coś szczególnego." }
        ]
    },
    {
        id: 960,
        spanish: "acuerdo",
        polish: "umowa, zgoda",
        description: "Rzeczownik oznaczający porozumienie",
        examples: [
            { spanish: "Llegar a un acuerdo.", polish: "Dojść do porozumienia." },
            { spanish: "Acuerdo comercial.", polish: "Umowa handlowa." },
            { spanish: "De acuerdo.", polish: "Zgoda." }
        ]
    },
    {
        id: 961,
        spanish: "nadar",
        polish: "pływać",
        description: "Czasownik oznaczający ruch w wodzie",
        examples: [
            { spanish: "Nadar en el mar.", polish: "Pływać w morzu." },
            { spanish: "Aprender a nadar.", polish: "Nauczyć się pływać." },
            { spanish: "Me gusta nadar.", polish: "Lubię pływać." }
        ]
    },
    {
        id: 962,
        spanish: "plazo",
        polish: "termin",
        description: "Rzeczownik oznaczający okres czasu",
        examples: [
            { spanish: "Plazo de entrega.", polish: "Termin dostawy." },
            { spanish: "Cumplir el plazo.", polish: "Dotrzymać terminu." },
            { spanish: "Plazo límite.", polish: "Termin ostateczny." }
        ]
    },
    {
        id: 963,
        spanish: "opuesta - opuesto",
        polish: "przeciwny",
        description: "Przymiotnik oznaczający odwrotny",
        examples: [
            { spanish: "Dirección opuesta.", polish: "Przeciwny kierunek." },
            { spanish: "Lado opuesto.", polish: "Przeciwna strona." },
            { spanish: "Opinión opuesta.", polish: "Przeciwna opinia." }
        ]
    },
    {
        id: 964,
        spanish: "esposa",
        polish: "żona",
        description: "Rzeczownik oznaczający partnerkę małżeńską",
        examples: [
            { spanish: "Mi esposa.", polish: "Moja żona." },
            { spanish: "Amar a mi esposa.", polish: "Kochać moją żonę." },
            { spanish: "Esposa e hijos.", polish: "Żona i dzieci." }
        ]
    },
    {
        id: 965,
        spanish: "zapato",
        polish: "but",
        description: "Rzeczownik oznaczający obuwie",
        examples: [
            { spanish: "Zapatos nuevos.", polish: "Nowe buty." },
            { spanish: "Ponerse los zapatos.", polish: "Założyć buty." },
            { spanish: "Par de zapatos.", polish: "Para butów." }
        ]
    },
    {
        id: 966,
        spanish: "hombro",
        polish: "ramię (bark)",
        description: "Rzeczownik oznaczający część ciała",
        examples: [
            { spanish: "Dolor de hombro.", polish: "Ból ramienia." },
            { spanish: "Llevar al hombro.", polish: "Nieść na ramieniu." },
            { spanish: "Hombros anchos.", polish: "Szerokie ramiona." }
        ]
    },
    {
        id: 967,
        spanish: "propagación",
        polish: "rozprzestrzenianie",
        description: "Rzeczownik oznaczający rozszerzanie się",
        examples: [
            { spanish: "Propagación de virus.", polish: "Rozprzestrzenianie wirusa." },
            { spanish: "Evitar propagación.", polish: "Uniknąć rozprzestrzeniania." },
            { spanish: "Propagación rápida.", polish: "Szybkie rozprzestrzenianie." }
        ]
    },
    {
        id: 968,
        spanish: "organizar",
        polish: "organizować",
        description: "Czasownik oznaczający układanie",
        examples: [
            { spanish: "Organizar un evento.", polish: "Zorganizować wydarzenie." },
            { spanish: "Organizar papeles.", polish: "Uporządkować papiery." },
            { spanish: "Bien organizado.", polish: "Dobrze zorganizowane." }
        ]
    },
    {
        id: 969,
        spanish: "campamento",
        polish: "obóz",
        description: "Rzeczownik oznaczający miejsce biwakowania",
        examples: [
            { spanish: "Campamento de verano.", polish: "Obóz letni." },
            { spanish: "Montar campamento.", polish: "Rozbić obóz." },
            { spanish: "Ir de campamento.", polish: "Jechać na obóz." }
        ]
    },
    {
        id: 970,
        spanish: "inventar",
        polish: "wynaleźć",
        description: "Czasownik oznaczający tworzenie czegoś nowego",
        examples: [
            { spanish: "Inventar algo nuevo.", polish: "Wynaleźć coś nowego." },
            { spanish: "Inventar una historia.", polish: "Wymyślić historię." },
            { spanish: "Quién inventó esto?", polish: "Kto to wynalazł?" }
        ]
    },
    {
        id: 971,
        spanish: "algodón",
        polish: "bawełna",
        description: "Rzeczownik oznaczający materiał",
        examples: [
            { spanish: "Camisa de algodón.", polish: "Koszula bawełniana." },
            { spanish: "Campo de algodón.", polish: "Pole bawełny." },
            { spanish: "Algodón puro.", polish: "Czysta bawełna." }
        ]
    },
    {
        id: 972,
        spanish: "nacido - nacida",
        polish: "urodzony",
        description: "Imiesłów oznaczający narodziny",
        examples: [
            { spanish: "Recién nacido.", polish: "Nowonarodzony." },
            { spanish: "Nacido en España.", polish: "Urodzony w Hiszpanii." },
            { spanish: "Bebé nacido.", polish: "Urodzone dziecko." }
        ]
    },
    {
        id: 973,
        spanish: "determinar",
        polish: "określać, ustalać",
        description: "Czasownik oznaczający ustalenie",
        examples: [
            { spanish: "Determinar la causa.", polish: "Ustalić przyczynę." },
            { spanish: "Determinar el precio.", polish: "Określić cenę." },
            { spanish: "Determinar resultados.", polish: "Ustalić wyniki." }
        ]
    },
    {
        id: 974,
        spanish: "cuarto de galón",
        polish: "kwarta (miara)",
        description: "Rzeczownik oznaczający jednostkę objętości",
        examples: [
            { spanish: "Un cuarto de galón.", polish: "Jedna kwarta." },
            { spanish: "Medir en cuartos.", polish: "Mierzyć w kwartach." },
            { spanish: "Comprar un cuarto.", polish: "Kupić kwartę." }
        ]
    },
    {
        id: 975,
        spanish: "nueve",
        polish: "dziewięć",
        description: "Liczebnik oznaczający liczbę 9",
        examples: [
            { spanish: "Son las nueve.", polish: "Jest dziewiąta." },
            { spanish: "Nueve personas.", polish: "Dziewięć osób." },
            { spanish: "Número nueve.", polish: "Numer dziewięć." }
        ]
    },
    {
        id: 976,
        spanish: "camión",
        polish: "ciężarówka",
        description: "Rzeczownik oznaczający pojazd ciężarowy",
        examples: [
            { spanish: "Conducir un camión.", polish: "Prowadzić ciężarówkę." },
            { spanish: "Camión grande.", polish: "Duża ciężarówka." },
            { spanish: "Camión de carga.", polish: "Ciężarówka z ładunkiem." }
        ]
    },
    {
        id: 977,
        spanish: "ruido",
        polish: "hałas",
        description: "Rzeczownik oznaczający dźwięk",
        examples: [
            { spanish: "Mucho ruido.", polish: "Dużo hałasu." },
            { spanish: "Hacer ruido.", polish: "Hałasować." },
            { spanish: "Ruido molesto.", polish: "Irytujący hałas." }
        ]
    },
    {
        id: 978,
        spanish: "nivel",
        polish: "poziom",
        description: "Rzeczownik oznaczający stopień",
        examples: [
            { spanish: "Nivel avanzado.", polish: "Zaawansowany poziom." },
            { spanish: "Subir de nivel.", polish: "Awansować poziom." },
            { spanish: "Nivel del agua.", polish: "Poziom wody." }
        ]
    },
    {
        id: 979,
        spanish: "oportunidad",
        polish: "szansa, okazja",
        description: "Rzeczownik oznaczający możliwość",
        examples: [
            { spanish: "Buena oportunidad.", polish: "Dobra okazja." },
            { spanish: "Dar una oportunidad.", polish: "Dać szansę." },
            { spanish: "Aprovechar la oportunidad.", polish: "Wykorzystać okazję." }
        ]
    },
    {
        id: 980,
        spanish: "reunir",
        polish: "zbierać, gromadzić",
        description: "Czasownik oznaczający gromadzenie",
        examples: [
            { spanish: "Reunir información.", polish: "Zbierać informacje." },
            { spanish: "Reunir a la familia.", polish: "Zebrać rodzinę." },
            { spanish: "Reunir fondos.", polish: "Zbierać fundusze." }
        ]
    },
    {
        id: 981,
        spanish: "tienda",
        polish: "sklep",
        description: "Rzeczownik oznaczający miejsce handlu",
        examples: [
            { spanish: "Ir a la tienda.", polish: "Iść do sklepu." },
            { spanish: "Tienda de ropa.", polish: "Sklep odzieżowy." },
            { spanish: "Abrir una tienda.", polish: "Otworzyć sklep." }
        ]
    },
    {
        id: 982,
        spanish: "tramo",
        polish: "odcinek",
        description: "Rzeczownik oznaczający część drogi",
        examples: [
            { spanish: "Tramo de carretera.", polish: "Odcinek drogi." },
            { spanish: "Último tramo.", polish: "Ostatni odcinek." },
            { spanish: "Tramo difícil.", polish: "Trudny odcinek." }
        ]
    },
    {
        id: 983,
        spanish: "lanzar",
        polish: "rzucać",
        description: "Czasownik oznaczający rzucanie",
        examples: [
            { spanish: "Lanzar la pelota.", polish: "Rzucić piłkę." },
            { spanish: "Lanzar un producto.", polish: "Wypuścić produkt." },
            { spanish: "Lanzar al aire.", polish: "Rzucić w powietrze." }
        ]
    },
    {
        id: 984,
        spanish: "brillo",
        polish: "blask",
        description: "Rzeczownik oznaczający światło",
        examples: [
            { spanish: "Brillo del sol.", polish: "Blask słońca." },
            { spanish: "Con brillo.", polish: "Z blaskiem." },
            { spanish: "Brillo intenso.", polish: "Intensywny blask." }
        ]
    },
    {
        id: 985,
        spanish: "propiedad",
        polish: "własność",
        description: "Rzeczownik oznaczający mienie",
        examples: [
            { spanish: "Propiedad privada.", polish: "Własność prywatna." },
            { spanish: "Comprar una propiedad.", polish: "Kupić nieruchomość." },
            { spanish: "Derecho de propiedad.", polish: "Prawo własności." }
        ]
    },
    {
        id: 986,
        spanish: "columna",
        polish: "kolumna",
        description: "Rzeczownik oznaczający słup",
        examples: [
            { spanish: "Columna vertebral.", polish: "Kręgosłup." },
            { spanish: "Columna de piedra.", polish: "Kamienna kolumna." },
            { spanish: "Columna de texto.", polish: "Kolumna tekstu." }
        ]
    },
    {
        id: 987,
        spanish: "molécula",
        polish: "cząsteczka",
        description: "Rzeczownik oznaczający najmniejszą część substancji",
        examples: [
            { spanish: "Molécula de agua.", polish: "Cząsteczka wody." },
            { spanish: "Estudiar moléculas.", polish: "Studiować cząsteczki." },
            { spanish: "Molécula orgánica.", polish: "Cząsteczka organiczna." }
        ]
    },
    {
        id: 988,
        spanish: "seleccionar",
        polish: "wybierać",
        description: "Czasownik oznaczający dokonywanie wyboru",
        examples: [
            { spanish: "Seleccionar una opción.", polish: "Wybrać opcję." },
            { spanish: "Seleccionar candidatos.", polish: "Wybierać kandydatów." },
            { spanish: "Seleccionar con cuidado.", polish: "Wybierać ostrożnie." }
        ]
    },
    {
        id: 989,
        spanish: "mal",
        polish: "źle, błędnie",
        description: "Przysłówek lub przymiotnik oznaczający nieprawidłowość",
        examples: [
            { spanish: "Hacer algo mal.", polish: "Zrobić coś źle." },
            { spanish: "Sentirse mal.", polish: "Czuć się źle." },
            { spanish: "Está mal.", polish: "To jest złe." }
        ]
    },
    {
        id: 990,
        spanish: "gris",
        polish: "szary",
        description: "Przymiotnik oznaczający kolor",
        examples: [
            { spanish: "Cielo gris.", polish: "Szare niebo." },
            { spanish: "Color gris.", polish: "Kolor szary." },
            { spanish: "Zona gris.", polish: "Szara strefa." }
        ]
    },
    {
        id: 991,
        spanish: "repetir",
        polish: "powtarzać",
        description: "Czasownik oznaczający robienie ponownie",
        examples: [
            { spanish: "Repetir la lección.", polish: "Powtórzyć lekcję." },
            { spanish: "Puedes repetir?", polish: "Możesz powtórzyć?" },
            { spanish: "Repetir un error.", polish: "Powtórzyć błąd." }
        ]
    },
    {
        id: 992,
        spanish: "exigir",
        polish: "wymagać",
        description: "Czasownik oznaczający żądanie",
        examples: [
            { spanish: "Exigir respeto.", polish: "Wymagać szacunku." },
            { spanish: "Exigir calidad.", polish: "Wymagać jakości." },
            { spanish: "Trabajo que exige.", polish: "Praca, która wymaga." }
        ]
    },
    {
        id: 993,
        spanish: "amplio - amplia",
        polish: "szeroki",
        description: "Przymiotnik oznaczający dużą przestrzeń",
        examples: [
            { spanish: "Espacio amplio.", polish: "Szeroka przestrzeń." },
            { spanish: "Gama amplia.", polish: "Szeroka gama." },
            { spanish: "Conocimiento amplio.", polish: "Szeroka wiedza." }
        ]
    },
    {
        id: 994,
        spanish: "preparar",
        polish: "przygotowywać",
        description: "Czasownik oznaczający robienie gotowym",
        examples: [
            { spanish: "Preparar la comida.", polish: "Przygotować jedzenie." },
            { spanish: "Preparar un examen.", polish: "Przygotować się do egzaminu." },
            { spanish: "Estar preparado.", polish: "Być przygotowanym." }
        ]
    },
    {
        id: 995,
        spanish: "sal",
        polish: "sól",
        description: "Rzeczownik oznaczający przyprawa",
        examples: [
            { spanish: "Añadir sal.", polish: "Dodać soli." },
            { spanish: "Sal marina.", polish: "Sól morska." },
            { spanish: "Poca sal.", polish: "Mało soli." }
        ]
    },
    {
        id: 996,
        spanish: "nariz",
        polish: "nos",
        description: "Rzeczownik oznaczający część twarzy",
        examples: [
            { spanish: "Nariz grande.", polish: "Duży nos." },
            { spanish: "Tocarse la nariz.", polish: "Dotknąć nosa." },
            { spanish: "Dolor de nariz.", polish: "Ból nosa." }
        ]
    },
    {
        id: 997,
        spanish: "plural",
        polish: "liczba mnoga",
        description: "Rzeczownik oznaczający formę gramatyczną",
        examples: [
            { spanish: "Forma plural.", polish: "Forma mnoga." },
            { spanish: "Escribir en plural.", polish: "Pisać w liczbie mnogiej." },
            { spanish: "Plurales irregulares.", polish: "Nieregularne liczby mnogie." }
        ]
    },
    {
        id: 998,
        spanish: "cólera",
        polish: "gniew, cholera",
        description: "Rzeczownik oznaczający złość lub chorobę",
        examples: [
            { spanish: "Sentir cólera.", polish: "Odczuwać gniew." },
            { spanish: "Epidemia de cólera.", polish: "Epidemia cholery." },
            { spanish: "Controlar la cólera.", polish: "Kontrolować gniew." }
        ]
    },
    {
        id: 999,
        spanish: "reclamación",
        polish: "reklamacja, roszczenie",
        description: "Rzeczownik oznaczający żądanie",
        examples: [
            { spanish: "Hacer una reclamación.", polish: "Złożyć reklamację." },
            { spanish: "Reclamación justa.", polish: "Sprawiedliwe roszczenie." },
            { spanish: "Presentar reclamación.", polish: "Zgłosić reklamację." }
        ]
    },
    {
        id: 1000,
        spanish: "continente",
        polish: "kontynent",
        description: "Rzeczownik oznaczający wielki obszar lądowy",
        examples: [
            { spanish: "Continente africano.", polish: "Kontynent afrykański." },
            { spanish: "Explorar continentes.", polish: "Eksplorować kontynenty." },
            { spanish: "Siete continentes.", polish: "Siedem kontynentów." }
        ]
    }
];

// Application state
let currentWordIndex = 0;
let memorizedWords = new Set();
let currentView = 'flashcard';
let quizWords = [];
let currentQuizIndex = 0;
let quizScore = 0;

// Load data from localStorage
function loadProgress() {
    const saved = localStorage.getItem('spanishProgress');
    if (saved) {
        const data = JSON.parse(saved);
        currentWordIndex = data.currentWordIndex || 0;
        memorizedWords = new Set(data.memorizedWords || []);
    }
}

// Save data to localStorage
function saveProgress() {
    const data = {
        currentWordIndex: currentWordIndex,
        memorizedWords: Array.from(memorizedWords)
    };
    localStorage.setItem('spanishProgress', JSON.stringify(data));
}

// Display current flashcard
function displayFlashcard() {
    const word = wordsData[currentWordIndex];
    if (!word) return;

    document.getElementById('wordNumber').textContent = `${currentWordIndex + 1}/1000`;
    document.getElementById('spanishWord').textContent = word.spanish;
    document.getElementById('polishTranslation').textContent = word.polish;
    document.getElementById('description').textContent = word.description;

    // Display examples
    word.examples.forEach((example, index) => {
        const exampleDiv = document.getElementById(`example${index + 1}`);
        if (exampleDiv) {
            exampleDiv.querySelector('.example-spanish').textContent = example.spanish;
            exampleDiv.querySelector('.example-polish').textContent = example.polish;
        }
    });

    // Update remember button
    const btnRemember = document.getElementById('btnRemember');
    if (memorizedWords.has(word.id)) {
        btnRemember.classList.add('memorized');
    } else {
        btnRemember.classList.remove('memorized');
    }

    updateStats();
}

// Update statistics
function updateStats() {
    document.getElementById('progressText').textContent = `${memorizedWords.size}/1000`;

    const progressPercent = (memorizedWords.size / 1000) * 100;
    document.getElementById('progressFill').style.width = `${progressPercent}%`;
}

// Handle "Remember" button
function handleRemember() {
    const word = wordsData[currentWordIndex];
    if (memorizedWords.has(word.id)) {
        memorizedWords.delete(word.id);
    } else {
        memorizedWords.add(word.id);
    }
    saveProgress();
    displayFlashcard();
}

// Handle "Previous" button
function handlePrevious() {
    currentWordIndex = currentWordIndex - 1;
    if (currentWordIndex < 0) {
        currentWordIndex = wordsData.length - 1;
    }
    saveProgress();
    displayFlashcard();
}

// Handle "Next" button
function handleNext() {
    currentWordIndex = (currentWordIndex + 1) % wordsData.length;
    saveProgress();
    displayFlashcard();
}

// Start quiz
function startQuiz() {
    const memorizedArray = Array.from(memorizedWords);
    if (memorizedArray.length < 4) {
        alert('Zapamiętaj przynajmniej 4 słowa, aby rozpocząć quiz!');
        return;
    }

    // Select up to 10 random memorized words
    const quizCount = Math.min(10, memorizedArray.length);
    quizWords = [];
    const shuffled = [...memorizedArray].sort(() => Math.random() - 0.5);
    for (let i = 0; i < quizCount; i++) {
        const wordId = shuffled[i];
        const word = wordsData.find(w => w.id === wordId);
        if (word) {
            quizWords.push(word);
        }
    }

    currentQuizIndex = 0;
    quizScore = 0;

    showView('quiz');
    displayQuizQuestion();
}

// Display quiz question
function displayQuizQuestion() {
    if (currentQuizIndex >= quizWords.length) {
        showQuizResults();
        return;
    }

    const word = quizWords[currentQuizIndex];
    document.getElementById('quizQuestion').textContent = word.spanish;
    document.getElementById('quizScore').textContent = quizScore;
    document.getElementById('quizTotal').textContent = quizWords.length;

    // Generate options (1 correct + 3 wrong)
    const options = [word.polish];
    const otherWords = wordsData.filter(w => w.id !== word.id);

    while (options.length < 4 && otherWords.length > 0) {
        const randomIndex = Math.floor(Math.random() * otherWords.length);
        const randomWord = otherWords[randomIndex];
        if (!options.includes(randomWord.polish)) {
            options.push(randomWord.polish);
        }
        otherWords.splice(randomIndex, 1);
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    // Display options
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';

    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = option;
        button.onclick = () => checkQuizAnswer(option, word.polish);
        optionsContainer.appendChild(button);
    });
}

// Check quiz answer
function checkQuizAnswer(selected, correct) {
    const options = document.querySelectorAll('.quiz-option');

    options.forEach(option => {
        option.classList.add('disabled');
        if (option.textContent === correct) {
            option.classList.add('correct');
        } else if (option.textContent === selected && selected !== correct) {
            option.classList.add('incorrect');
        }
    });

    if (selected === correct) {
        quizScore++;
        document.getElementById('quizScore').textContent = quizScore;
    }

    setTimeout(() => {
        currentQuizIndex++;
        displayQuizQuestion();
    }, 1500);
}

// Show quiz results
function showQuizResults() {
    const percentage = Math.round((quizScore / quizWords.length) * 100);
    let message = '';

    if (percentage === 100) {
        message = '¡Perfecto! Doskonale znasz te słowa!';
    } else if (percentage >= 80) {
        message = '¡Muy bien! Świetna robota!';
    } else if (percentage >= 60) {
        message = '¡Bien! Dobry wynik!';
    } else {
        message = 'Trzeba jeszcze popracować. ¡Ánimo!';
    }

    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `
        <div class="quiz-result">
            <h3>${message}</h3>
            <p>Wynik: ${quizScore}/${quizWords.length} (${percentage}%)</p>
            <button class="btn btn-next" id="btnBackToFlashcards">Powrót do fiszek</button>
        </div>
    `;

    // Add event listener to the button
    document.getElementById('btnBackToFlashcards').addEventListener('click', quitQuiz);
}

// Quit quiz
function quitQuiz() {
    showView('flashcard');
}

// Show view
function showView(viewName) {
    document.getElementById('flashcardView').classList.remove('active');
    document.getElementById('quizView').classList.remove('active');

    if (viewName === 'flashcard') {
        document.getElementById('flashcardView').classList.add('active');
        displayFlashcard();
    } else if (viewName === 'quiz') {
        document.getElementById('quizView').classList.add('active');
    }
}

// Handle welcome screen
function startApp() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.classList.remove('active');
    localStorage.setItem('appStarted', 'true');
}

// Check if app was already started
function checkAppStarted() {
    const appStarted = localStorage.getItem('appStarted');
    if (appStarted === 'true') {
        document.getElementById('welcomeScreen').classList.remove('active');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    checkAppStarted();
    loadProgress();
    displayFlashcard();

    document.getElementById('btnStart').addEventListener('click', startApp);
    document.getElementById('btnRemember').addEventListener('click', handleRemember);
    document.getElementById('btnPrevious').addEventListener('click', handlePrevious);
    document.getElementById('btnNext').addEventListener('click', handleNext);
    document.getElementById('btnStartQuiz').addEventListener('click', startQuiz);
    document.getElementById('btnQuitQuiz').addEventListener('click', quitQuiz);
});
