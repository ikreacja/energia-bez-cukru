
export interface HealthTip {
  id: number;
  category: string;
  title: string;
  description: string;
  content: string;
  level: string;
  timeNeeded: string;
  trend: string;
}

// Health tips data
const healthTipsData: HealthTip[] = [
  {
    id: 1,
    category: "posiłki",
    title: "Regularne posiłki",
    description: "Spożywaj posiłki regularnie, co 3-4 godziny.",
    content: "Regularne spożywanie posiłków co 3-4 godziny pomaga utrzymać stabilny poziom cukru we krwi. Unikaj długich przerw między posiłkami, które mogą prowadzić do nadmiernego głodu i przejadania się podczas kolejnego posiłku. Staraj się jeść 4-5 mniejszych posiłków dziennie zamiast 2-3 dużych.",
    level: "początkujący",
    timeNeeded: "niski",
    trend: "rosnący"
  },
  {
    id: 2,
    category: "nawodnienie",
    title: "Odpowiednie nawodnienie",
    description: "Pij minimum 2 litry wody dziennie.",
    content: "Odpowiednie nawodnienie jest kluczowe dla prawidłowego funkcjonowania organizmu i metabolizmu. Pij minimum 2 litry wody dziennie, a w przypadku intensywnego wysiłku fizycznego lub wysokich temperatur, zwiększ ilość spożywanej wody. Unikaj słodzonych napojów, które mogą powodować skoki cukru we krwi.",
    level: "początkujący",
    timeNeeded: "niski",
    trend: "stabilny"
  },
  {
    id: 3,
    category: "białko",
    title: "Białko w każdym posiłku",
    description: "Włącz źródło białka do każdego posiłku.",
    content: "Włączenie źródła białka do każdego posiłku pomaga utrzymać uczucie sytości na dłużej i stabilizuje poziom cukru we krwi. Dobre źródła białka to: chude mięso, ryby, jaja, produkty mleczne, rośliny strączkowe czy orzechy. Staraj się, aby białko stanowiło około 20-25% każdego posiłku.",
    level: "średni",
    timeNeeded: "średni",
    trend: "rosnący"
  },
  {
    id: 4,
    category: "warzywa",
    title: "Warzywa w każdym posiłku",
    description: "Dodawaj warzywa do każdego posiłku.",
    content: "Warzywa są bogate w błonnik, witaminy i minerały, a jednocześnie mają niski indeks glikemiczny. Dodawanie warzyw do każdego posiłku pomaga w kontrolowaniu poziomu cukru we krwi i zapewnia uczucie sytości na dłużej. Staraj się, aby warzywa zajmowały przynajmniej połowę twojego talerza podczas głównych posiłków.",
    level: "początkujący",
    timeNeeded: "niski",
    trend: "stabilny"
  },
  {
    id: 5,
    category: "węglowodany",
    title: "Wybieraj złożone węglowodany",
    description: "Zastąp proste węglowodany złożonymi.",
    content: "Złożone węglowodany (pełnoziarniste produkty, brązowy ryż, komosa ryżowa, płatki owsiane) są trawione wolniej niż proste (biały chleb, biały ryż, słodycze), co powoduje mniejsze skoki cukru we krwi. Staraj się, aby większość spożywanych węglowodanów pochodziła ze źródeł pełnoziarnistych i nie przetworzonych.",
    level: "średni",
    timeNeeded: "średni",
    trend: "rosnący"
  },
  {
    id: 6,
    category: "tłuszcze",
    title: "Zdrowe tłuszcze",
    description: "Włącz zdrowe tłuszcze do diety.",
    content: "Zdrowe tłuszcze, takie jak te z awokado, oliwy z oliwek, orzechów czy ryb, spowalniają wchłanianie cukru do krwi i zapewniają uczucie sytości na dłużej. Unikaj tłuszczów trans i ogranicz spożycie tłuszczów nasyconych. Zdrowe tłuszcze powinny stanowić około 20-35% dziennego zapotrzebowania kalorycznego.",
    level: "średni",
    timeNeeded: "niski",
    trend: "stabilny"
  },
  {
    id: 7,
    category: "cukier",
    title: "Ogranicz cukier dodany",
    description: "Zmniejsz spożycie produktów z cukrem dodanym.",
    content: "Cukier dodany powoduje gwałtowne skoki poziomu glukozy we krwi, co może prowadzić do insulinooporności. Ogranicz spożycie słodyczy, słodkich napojów, deserów i ukrytych cukrów w przetworzonej żywności. Czytaj etykiety produktów, aby wykryć ukryty cukier pod różnymi nazwami (syrop glukozowo-fruktozowy, dekstroza, maltoza itp.).",
    level: "zaawansowany",
    timeNeeded: "wysoki",
    trend: "rosnący"
  },
  {
    id: 8,
    category: "posiłki",
    title: "Nie pomijaj śniadania",
    description: "Zacznij dzień od pełnowartościowego śniadania.",
    content: "Śniadanie dostarcza energii na początek dnia i pomaga utrzymać stabilny poziom cukru we krwi. Unikaj słodkich płatków śniadaniowych i białego pieczywa. Zamiast tego wybieraj posiłki bogate w białko i błonnik, takie jak jajecznica z warzywami, jogurt z orzechami i owocami, czy pełnoziarnista kanapka z pastą z awokado.",
    level: "początkujący",
    timeNeeded: "niski",
    trend: "stabilny"
  },
  {
    id: 9,
    category: "aktywność",
    title: "Aktywność fizyczna",
    description: "Bądź aktywny fizycznie przez minimum 30 minut dziennie.",
    content: "Regularna aktywność fizyczna zwiększa wrażliwość komórek na insulinę, co pomaga w kontrolowaniu poziomu cukru we krwi. Staraj się być aktywnym przez minimum 30 minut dziennie - może to być szybki spacer, jazda na rowerze, pływanie czy trening siłowy. Szczególnie korzystne jest ćwiczenie po posiłkach, które pomaga obniżyć poposiłkowy wzrost cukru we krwi.",
    level: "średni",
    timeNeeded: "średni",
    trend: "rosnący"
  },
  {
    id: 10,
    category: "sen",
    title: "Dobry sen",
    description: "Zadbaj o 7-8 godzin snu każdej nocy.",
    content: "Niewystarczająca ilość snu może zaburzać metabolizm glukozy i prowadzić do insulinooporności. Staraj się spać 7-8 godzin każdej nocy, idąc spać i wstając o regularnych porach. Dbaj o higienę snu: unikaj ekranów na godzinę przed snem, zaciemniaj sypialnię i utrzymuj w niej chłodną temperaturę.",
    level: "początkujący",
    timeNeeded: "wysoki",
    trend: "rosnący"
  },
  {
    id: 11,
    category: "stres",
    title: "Zarządzanie stresem",
    description: "Praktykuj techniki redukcji stresu.",
    content: "Przewlekły stres może podwyższać poziom kortyzolu, co z kolei wpływa na wzrost poziomu cukru we krwi. Regularne praktykowanie technik redukcji stresu, takich jak medytacja, głębokie oddychanie, joga czy tai-chi, może pomóc w utrzymaniu stabilnego poziomu cukru we krwi. Znajdź codziennie 10-15 minut na relaksację i wyciszenie umysłu.",
    level: "zaawansowany",
    timeNeeded: "średni",
    trend: "rosnący"
  },
  {
    id: 12,
    category: "posiłki",
    title: "Świadome jedzenie",
    description: "Jedz powoli i świadomie.",
    content: "Szybkie jedzenie może prowadzić do przejadania się i większych skoków cukru we krwi. Jedz powoli, dokładnie przeżuwając każdy kęs i skupiając się na smaku i teksturze jedzenia. Unikaj jedzenia przed telewizorem czy komputerem, które sprzyja nieświadomemu przejadaniu się. Staraj się poświęcić przynajmniej 20 minut na każdy posiłek.",
    level: "średni",
    timeNeeded: "niski",
    trend: "rosnący"
  },
  // Nowe porady ze wsadu dotyczącego glukozowej rewolucji
  {
    id: 13,
    category: "kolejność",
    title: "Kolejność spożywania posiłków",
    description: "Najpierw błonnik, potem białko i tłuszcze, na końcu węglowodany.",
    content: "Skup się na kolejności spożywania posiłków – najpierw błonnik (warzywa), potem białko i tłuszcze, a na końcu węglowodany. Badanie UCLA wykazało 73% mniejszy skok glukozy przy zachowaniu właściwej kolejności. Ta prosta zmiana może znacząco wpłynąć na stabilizację poziomu cukru we krwi po posiłku.",
    level: "początkujący",
    timeNeeded: "niski",
    trend: "rosnący"
  },
  {
    id: 14,
    category: "przetworzenie",
    title: "Wybieraj niskoprzetworzone produkty",
    description: "Unikaj ukrytych cukrów w produktach light i gotowych daniach.",
    content: "Wybieraj niskoprzetworzone produkty – unikaj ukrytych cukrów w produktach light i gotowych daniach. Czytaj etykiety produktów i szukaj różnych nazw cukru jak syrop glukozowo-fruktozowy, dekstroza czy maltoza. Nawet produkty reklamowane jako zdrowe mogą zawierać znaczne ilości dodanego cukru.",
    level: "średni",
    timeNeeded: "średni",
    trend: "rosnący"
  },
  {
    id: 15,
    category: "śniadanie",
    title: "Słone śniadanie",
    description: "Rozpocznij dzień od słonego śniadania zamiast słodkiego.",
    content: "Rozpocznij dzień od słonego śniadania, np. jajek z warzywami czy awokado z pełnoziarnistym chlebem. Ta zmiana pomaga zmniejszyć poranny skok kortyzolu i stabilizuje poziom glukozy do południa. Unikaj słodkich płatków śniadaniowych i białego pieczywa, które powodują gwałtowny wzrost cukru we krwi po przebudzeniu.",
    level: "początkujący",
    timeNeeded: "niski",
    trend: "stabilny"
  },
  {
    id: 16,
    category: "dodatki",
    title: "Ocet jabłkowy przed posiłkiem",
    description: "Dodaj łyżkę octu do wody przed posiłkiem.",
    content: "Dodanie 1 łyżki octu jabłkowego do szklanki wody przed śniadaniem spowalnia trawienie węglowodanów i redukuje skok glukozy o 20-30%. Ocet jabłkowy zawiera kwas octowy, który może hamować enzymy trawienne odpowiedzialne za rozkład węglowodanów, co spowalnia uwalnianie glukozy do krwiobiegu.",
    level: "średni",
    timeNeeded: "niski",
    trend: "stabilny"
  },
  {
    id: 17,
    category: "obiad",
    title: "Zaczynaj obiad od warzyw",
    description: "Jedz minimum 1 porcję warzyw przed głównym daniem.",
    content: "Zawsze zaczynaj obiad od warzyw - minimum 1 porcja surowych lub gotowanych warzyw przed głównym daniem. Błonnik zawarty w warzywach tworzy siatkę spowalniającą wchłanianie cukrów z dalszej części posiłku. To prosty sposób na znaczne obniżenie poposiłkowego skoku glukozy.",
    level: "początkujący",
    timeNeeded: "niski",
    trend: "stabilny"
  },
  {
    id: 18,
    category: "kombinacje",
    title: "Łącz węglowodany z białkiem i tłuszczem",
    description: "Nie jedz węglowodanów samodzielnie.",
    content: "Łącz węglowodany z białkiem i tłuszczem, np. makaron z kurczakiem i oliwą zamiast samego makaronu. Takie połączenie może spłaszczyć krzywą glukozową o 35-50%. Białko i tłuszcz spowalniają trawienie węglowodanów, co prowadzi do bardziej stabilnego uwalniania glukozy do krwiobiegu.",
    level: "początkujący",
    timeNeeded: "niski",
    trend: "stabilny"
  },
  {
    id: 19,
    category: "kolacja",
    title: "Kolacja 3 godziny przed snem",
    description: "Ostatni posiłek zjedz odpowiednio wcześnie.",
    content: "Kolację zjedz 3 godziny przed snem, aby uniknąć nocnych skoków insuliny. Badania pokazują, że taka praktyka poprawia wrażliwość insulinową następnego dnia. W nocy organizm powinien regenerować się, a nie pracować nad trawieniem pokarmów, co może zaburzać metabolizm glukozy.",
    level: "średni",
    timeNeeded: "średni",
    trend: "stabilny"
  },
  {
    id: 20,
    category: "desery",
    title: "Deser białkowo-tłuszczowy",
    description: "Wybieraj zdrowe alternatywy dla słodkich deserów.",
    content: "Wybierz deser białkowo-tłuszczowy, np. garść orzechów czy gorzką czekoladę >70% z masłem migdałowym. Takie desery pomagają uniknąć wieczornego skoku glukozy wpływającego na jakość snu. Białko i tłuszcz dają uczucie sytości bez negatywnych skutków dla poziomu cukru we krwi.",
    level: "średni",
    timeNeeded: "niski",
    trend: "stabilny"
  },
  {
    id: 21,
    category: "aktywność",
    title: "Spacer po posiłku",
    description: "10-minutowy spacer po jedzeniu obniża poziom cukru.",
    content: "10-minutowy spacer po posiłku aktywuje mięśnie do pobierania glukozy bez udziału insuliny, co może redukować poposiłkowy skok glukozy o 15-25%. Ta prosta aktywność fizyczna pomaga przekierować glukozę z krwiobiegu do mięśni, gdzie jest wykorzystywana jako paliwo zamiast być magazynowana jako tłuszcz.",
    level: "początkujący",
    timeNeeded: "niski",
    trend: "rosnący"
  },
  {
    id: 22,
    category: "przekąski",
    title: "Warzywa między posiłkami",
    description: "Wybieraj zdrowe przekąski zamiast słodyczy.",
    content: "Przegryzaj warzywa między posiłkami - marchew, ogórek lub papryka z hummusem zamiast słodkich przekąsek. Warzywa dostarczają błonnika i składników odżywczych bez powodowania skoków cukru we krwi, a dodatek białka i tłuszczu (np. hummus) daje uczucie sytości na dłużej.",
    level: "początkujący",
    timeNeeded: "niski",
    trend: "stabilny"
  },
  // Nowe porady dotyczące produktów spożywczych
  {
    id: 23,
    category: "warzywa",
    title: "Zielone warzywa liściaste",
    description: "Jedz codziennie szpinak, jarmuż, rukolę i inne zielone warzywa.",
    content: "Zielone warzywa liściaste takie jak szpinak, jarmuż, rukola, sałata i boćwina mają niski indeks glikemiczny (GI ~15) i są bogate w błonnik, witaminy (A, C, K) oraz minerały (magnez, potas), które poprawiają wrażliwość na insulinę. Badania pokazują, że spożywanie 1,5 porcji zielonych warzyw dziennie może zmniejszyć ryzyko cukrzycy typu 2 o 14%.",
    level: "początkujący",
    timeNeeded: "niski",
    trend: "stabilny"
  },
  {
    id: 24,
    category: "strączki",
    title: "Rośliny strączkowe",
    description: "Włącz do diety fasolę, soczewicę i ciecierzycę.",
    content: "Rośliny strączkowe jak fasola, soczewica i ciecierzyca są bogate w błonnik rozpuszczalny i skrobię oporną, które spowalniają trawienie i zapobiegają skokom glukozy. Dodanie fasoli do posiłków znacząco zmniejsza poposiłkowy wzrost cukru we krwi. Strączki są także źródłem magnezu i białka wspierających metabolizm glukozy.",
    level: "średni",
    timeNeeded: "średni",
    trend: "stabilny"
  },
  {
    id: 25,
    category: "owoce",
    title: "Jagody zamiast słodkich owoców",
    description: "Wybieraj maliny, borówki i jeżyny zamiast bananów czy winogron.",
    content: "Jagody (maliny, borówki, jeżyny, truskawki) mają niski indeks glikemiczny (<40) oraz wysoką zawartość błonnika i antyoksydantów (antocyjanów), które poprawiają wrażliwość na insulinę. Spożywanie jagód z posiłkami zmniejsza poposiłkowy poziom insuliny i glukozy u osób z predyspozycjami do cukrzycy, a zawarte w nich antocyjany chronią przed stanami zapalnymi.",
    level: "początkujący",
    timeNeeded: "niski",
    trend: "stabilny"
  },
  {
    id: 26,
    category: "tłuszcze",
    title: "Orzechy i nasiona codziennie",
    description: "Włącz garść orzechów lub nasion do codziennej diety.",
    content: "Orzechy i nasiona (migdały, orzechy włoskie, nasiona chia, siemię lniane) zawierają zdrowe tłuszcze, białko i błonnik, co spowalnia trawienie węglowodanów. Badania pokazują, że spożycie migdałów obniża poziom cukru po posiłku o 30%, a nasiona chia poprawiają wrażliwość na insulinę. Wystarczy garść dziennie, aby zauważyć korzystny wpływ na poziom glukozy.",
    level: "początkujący",
    timeNeeded: "niski",
    trend: "rosnący"
  },
  {
    id: 27,
    category: "tłuszcze",
    title: "Awokado - superżywność dla stabilnej glukozy",
    description: "Dodaj awokado do posiłków dla lepszej kontroli cukru.",
    content: "Awokado jest bogate w jednonienasycone kwasy tłuszczowe (MUFAs), które stabilizują poziom cukru we krwi i wspomagają utratę tkanki tłuszczowej. Regularne spożycie awokado poprawia metabolizm glukozy i zmniejsza ryzyko zespołu metabolicznego. To doskonały dodatek do kanapek, sałatek czy koktajli, który nie tylko dostarcza zdrowych tłuszczów, ale także pomaga kontrolować apetyt.",
    level: "początkujący",
    timeNeeded: "niski",
    trend: "rosnący"
  },
  {
    id: 28,
    category: "białko",
    title: "Tłuste ryby dwa razy w tygodniu",
    description: "Jedz łososia, makrelę lub sardynki dla lepszej kontroli glikemii.",
    content: "Tłuste ryby jak łosoś, makrela czy sardynki zawierają kwasy omega-3 (EPA i DHA), które redukują stany zapalne i poprawiają kontrolę glikemii. Spożycie tłustych ryb dwa razy w tygodniu poprawia poziom cukru po posiłkach. Białko ryb spowalnia trawienie i zapobiega przejadaniu się, co jest kluczowe dla utrzymania stabilnego poziomu glukozy.",
    level: "średni",
    timeNeeded: "średni",
    trend: "stabilny"
  },
  {
    id: 29,
    category: "węglowodany",
    title: "Owies na śniadanie",
    description: "Płatki owsiane to idealny start dnia dla stabilnej glukozy.",
    content: "Owies ma wysoką zawartość beta-glukanu, który spowalnia wchłanianie glukozy i poprawia wrażliwość na insulinę. Badania pokazują, że spożycie owsa obniża HbA1c oraz poziom glukozy na czczo, a beta-glukan zmniejsza poposiłkową odpowiedź glukozową o ponad 20%. Wybieraj nieprzetworzone płatki owsiane i łącz je z białkiem (jogurt, jajko) oraz zdrowym tłuszczem (orzechy, nasiona).",
    level: "początkujący",
    timeNeeded: "niski",
    trend: "stabilny"
  },
  {
    id: 30,
    category: "węglowodany",
    title: "Komosa ryżowa zamiast ryżu",
    description: "Zastąp biały ryż komosą dla lepszej kontroli cukru.",
    content: "Komosa ryżowa (quinoa) ma kompletny profil aminokwasowy oraz niski indeks glikemiczny, co czyni ją lepszym wyborem niż inne zboża. Wspiera kontrolę glikemii dzięki wysokiej zawartości błonnika i magnezu. To doskonała alternatywa dla ryżu czy kuskusu, która nie tylko stabilizuje poziom cukru we krwi, ale także dostarcza więcej składników odżywczych.",
    level: "średni",
    timeNeeded: "średni",
    trend: "rosnący"
  }
];

export default healthTipsData;

export const getUniqueCategories = () => {
  return ['wszystkie', ...new Set(healthTipsData.map(tip => tip.category))];
};

export const getLevelColor = (level: string) => {
  switch (level) {
    case 'początkujący': return 'bg-green-500';
    case 'średni': return 'bg-yellow-500';
    case 'zaawansowany': return 'bg-red-500';
    default: return 'bg-gray-500';
  }
};

export const getTimeNeededColor = (time: string) => {
  switch (time) {
    case 'niski': return 'bg-green-500';
    case 'średni': return 'bg-yellow-500';
    case 'wysoki': return 'bg-red-500';
    default: return 'bg-gray-500';
  }
};

export const getTrendIcon = (trend: string) => {
  switch (trend) {
    case 'rosnący': return '↗️';
    case 'stabilny': return '➡️';
    case 'malejący': return '↘️';
    default: return '•';
  }
};
