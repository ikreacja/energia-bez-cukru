
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { toast } from '@/components/ui/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

// Health tips data
const healthTipsData = [
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
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('wszystkie');
  const [selectedLevel, setSelectedLevel] = useState('wszystkie');
  const [selectedTimeNeeded, setSelectedTimeNeeded] = useState('wszystkie');
  const [selectedTrend, setSelectedTrend] = useState('wszystkie');
  const [filteredTips, setFilteredTips] = useState(healthTipsData);
  const [selectedTip, setSelectedTip] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Get unique categories for filtering
  const categories = ['wszystkie', ...new Set(healthTipsData.map(tip => tip.category))];
  
  // Filter data based on search term and filters
  useEffect(() => {
    let results = healthTipsData;
    
    // Apply search filter
    if (searchTerm) {
      results = results.filter(tip => 
        tip.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        tip.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tip.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory !== 'wszystkie') {
      results = results.filter(tip => tip.category === selectedCategory);
    }
    
    // Apply level filter
    if (selectedLevel !== 'wszystkie') {
      results = results.filter(tip => tip.level === selectedLevel);
    }
    
    // Apply time needed filter
    if (selectedTimeNeeded !== 'wszystkie') {
      results = results.filter(tip => tip.timeNeeded === selectedTimeNeeded);
    }
    
    // Apply trend filter
    if (selectedTrend !== 'wszystkie') {
      results = results.filter(tip => tip.trend === selectedTrend);
    }
    
    setFilteredTips(results);
  }, [searchTerm, selectedCategory, selectedLevel, selectedTimeNeeded, selectedTrend]);

  const handleCardClick = (tip: any) => {
    setSelectedTip(tip);
    setIsDialogOpen(true);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'początkujący': return 'bg-green-500';
      case 'średni': return 'bg-yellow-500';
      case 'zaawansowany': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTimeNeededColor = (time: string) => {
    switch (time) {
      case 'niski': return 'bg-green-500';
      case 'średni': return 'bg-yellow-500';
      case 'wysoki': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'rosnący': return '↗️';
      case 'stabilny': return '➡️';
      case 'malejący': return '↘️';
      default: return '•';
    }
  };

  const handleApplyFilters = () => {
    toast({
      title: "Filtry zastosowane",
      description: `Znaleziono ${filteredTips.length} pasujących porad zdrowotnych.`,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                <span className="text-red-500">Zdrowe</span> Nawyki Żywieniowe
              </h1>
            </div>
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Szukaj porad..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              <Button 
                variant="outline" 
                onClick={handleApplyFilters}
                className="hidden md:flex hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                Szukaj
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Filter Section */}
      <section className="bg-gray-50 py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Filtruj porady</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Category Filter */}
            <div>
              <p className="text-sm font-medium mb-2 text-gray-700">Kategoria</p>
              <Tabs defaultValue="wszystkie" onValueChange={setSelectedCategory} className="w-full">
                <TabsList className="w-full flex flex-wrap">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="flex-1 data-[state=active]:bg-red-500 data-[state=active]:text-white"
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            
            {/* Level Filter */}
            <div>
              <p className="text-sm font-medium mb-2 text-gray-700">Poziom trudności</p>
              <ToggleGroup 
                type="single" 
                defaultValue="wszystkie" 
                onValueChange={(value) => value && setSelectedLevel(value)}
                className="justify-start flex-wrap"
              >
                <ToggleGroupItem value="wszystkie" className="data-[state=on]:bg-red-500 data-[state=on]:text-white">
                  Wszystkie
                </ToggleGroupItem>
                <ToggleGroupItem value="początkujący" className="data-[state=on]:bg-green-500 data-[state=on]:text-white">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span> 
                  Początkujący
                </ToggleGroupItem>
                <ToggleGroupItem value="średni" className="data-[state=on]:bg-yellow-500 data-[state=on]:text-white">
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-1"></span>
                  Średni
                </ToggleGroupItem>
                <ToggleGroupItem value="zaawansowany" className="data-[state=on]:bg-red-500 data-[state=on]:text-white">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-1"></span>
                  Zaawansowany
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            {/* Time Needed Filter */}
            <div>
              <p className="text-sm font-medium mb-2 text-gray-700">Nakład czasu</p>
              <ToggleGroup 
                type="single" 
                defaultValue="wszystkie" 
                onValueChange={(value) => value && setSelectedTimeNeeded(value)}
                className="justify-start flex-wrap"
              >
                <ToggleGroupItem value="wszystkie" className="data-[state=on]:bg-red-500 data-[state=on]:text-white">
                  Wszystkie
                </ToggleGroupItem>
                <ToggleGroupItem value="niski" className="data-[state=on]:bg-green-500 data-[state=on]:text-white">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  Niski
                </ToggleGroupItem>
                <ToggleGroupItem value="średni" className="data-[state=on]:bg-yellow-500 data-[state=on]:text-white">
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-1"></span>
                  Średni
                </ToggleGroupItem>
                <ToggleGroupItem value="wysoki" className="data-[state=on]:bg-red-500 data-[state=on]:text-white">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-1"></span>
                  Wysoki
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            {/* Trend Filter */}
            <div>
              <p className="text-sm font-medium mb-2 text-gray-700">Trend</p>
              <ToggleGroup 
                type="single" 
                defaultValue="wszystkie" 
                onValueChange={(value) => value && setSelectedTrend(value)}
                className="justify-start flex-wrap"
              >
                <ToggleGroupItem value="wszystkie" className="data-[state=on]:bg-red-500 data-[state=on]:text-white">
                  Wszystkie
                </ToggleGroupItem>
                <ToggleGroupItem value="rosnący" className="data-[state=on]:bg-purple-500 data-[state=on]:text-white">
                  ↗️ Rosnący
                </ToggleGroupItem>
                <ToggleGroupItem value="stabilny" className="data-[state=on]:bg-blue-500 data-[state=on]:text-white">
                  ➡️ Stabilny
                </ToggleGroupItem>
                <ToggleGroupItem value="malejący" className="data-[state=on]:bg-teal-500 data-[state=on]:text-white">
                  ↘️ Malejący
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Porady zdrowotne <span className="text-red-500">({filteredTips.length})</span>
            </h2>
          </div>

          {filteredTips.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-xl text-gray-500">Nie znaleziono porad spełniających wybrane kryteria.</p>
              <Button 
                variant="outline" 
                className="mt-4 hover:bg-red-50 hover:text-red-500 transition-colors"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('wszystkie');
                  setSelectedLevel('wszystkie');
                  setSelectedTimeNeeded('wszystkie');
                  setSelectedTrend('wszystkie');
                }}
              >
                Wyczyść filtry
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTips.map((tip) => (
                <Card 
                  key={tip.id} 
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-red-200"
                  onClick={() => handleCardClick(tip)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg font-semibold text-gray-900">{tip.title}</CardTitle>
                        <CardDescription className="text-gray-600 mt-1">
                          {tip.description}
                        </CardDescription>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium rounded text-white capitalize" style={{backgroundColor: '#ea384c'}}>
                        {tip.category}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-sm text-gray-500">
                      <div className="flex items-center">
                        <span className={`inline-block w-2 h-2 ${getLevelColor(tip.level)} rounded-full mr-1`}></span>
                        <span className="capitalize">{tip.level}</span>
                      </div>
                      <div className="flex items-center">
                        <span className={`inline-block w-2 h-2 ${getTimeNeededColor(tip.timeNeeded)} rounded-full mr-1`}></span>
                        <span className="capitalize">Nakład: {tip.timeNeeded}</span>
                      </div>
                      <div className="flex items-center">
                        <span>{getTrendIcon(tip.trend)}</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full mt-3 hover:bg-red-50 hover:text-red-500 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(tip);
                      }}
                    >
                      Czytaj więcej
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Detail Dialog */}
      {selectedTip && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-gray-900 flex items-center justify-between">
                {selectedTip.title}
                <span className="px-2 py-1 text-xs font-medium rounded text-white" style={{backgroundColor: '#ea384c'}}>
                  {selectedTip.category}
                </span>
              </DialogTitle>
              <DialogDescription className="text-base text-gray-700 mt-2">
                {selectedTip.description}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-2 text-gray-800">
              <p>{selectedTip.content}</p>
              
              <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                <div className="flex flex-col items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium text-gray-700">Poziom trudności</span>
                  <div className="flex items-center mt-1">
                    <span className={`inline-block w-2 h-2 ${getLevelColor(selectedTip.level)} rounded-full mr-1`}></span>
                    <span className="capitalize">{selectedTip.level}</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium text-gray-700">Nakład czasu</span>
                  <div className="flex items-center mt-1">
                    <span className={`inline-block w-2 h-2 ${getTimeNeededColor(selectedTip.timeNeeded)} rounded-full mr-1`}></span>
                    <span className="capitalize">{selectedTip.timeNeeded}</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium text-gray-700">Trend</span>
                  <div className="flex items-center mt-1">
                    <span>{getTrendIcon(selectedTip.trend)} {selectedTip.trend}</span>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Footer */}
      <footer className="bg-gray-50 py-6 border-t border-gray-200 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 Zdrowe Nawyki Żywieniowe. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="hover:bg-red-50 hover:text-red-500 transition-colors">
                O nas
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-red-50 hover:text-red-500 transition-colors">
                Kontakt
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-red-50 hover:text-red-500 transition-colors">
                Polityka prywatności
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
