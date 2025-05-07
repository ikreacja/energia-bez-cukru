import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';
import FilterSection from '@/components/health-tips/FilterSection';
import HealthTipCard from '@/components/health-tips/HealthTipCard';
import HealthTipDialog from '@/components/health-tips/HealthTipDialog';
import healthTipsData, { 
  getUniqueCategories, 
  getLevelColor, 
  getTimeNeededColor, 
  HealthTip
} from '@/components/health-tips/HealthTipsData';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('wszystkie');
  const [selectedLevel, setSelectedLevel] = useState('wszystkie');
  const [selectedTimeNeeded, setSelectedTimeNeeded] = useState('wszystkie');
  const [filteredTips, setFilteredTips] = useState<HealthTip[]>(healthTipsData);
  const [selectedTip, setSelectedTip] = useState<HealthTip | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Get unique categories for filtering
  const categories = getUniqueCategories();
  
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
    
    setFilteredTips(results);
  }, [searchTerm, selectedCategory, selectedLevel, selectedTimeNeeded]);

  const handleCardClick = (tip: HealthTip) => {
    setSelectedTip(tip);
    setIsDialogOpen(true);
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
      <FilterSection 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
        selectedTimeNeeded={selectedTimeNeeded}
        setSelectedTimeNeeded={setSelectedTimeNeeded}
      />

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
                }}
              >
                Wyczyść filtry
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTips.map((tip) => (
                <HealthTipCard
                  key={tip.id}
                  tip={tip}
                  onCardClick={handleCardClick}
                  getLevelColor={getLevelColor}
                  getTimeNeededColor={getTimeNeededColor}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Detail Dialog */}
      <HealthTipDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        tip={selectedTip}
        getLevelColor={getLevelColor}
        getTimeNeededColor={getTimeNeededColor}
      />

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
