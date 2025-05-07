
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface FilterSectionProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  selectedTimeNeeded: string;
  setSelectedTimeNeeded: (time: string) => void;
  selectedTrend: string;
  setSelectedTrend: (trend: string) => void;
}

const FilterSection = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedLevel,
  setSelectedLevel,
  selectedTimeNeeded,
  setSelectedTimeNeeded,
  selectedTrend,
  setSelectedTrend,
}: FilterSectionProps) => {
  return (
    <section className="bg-gray-50 py-6 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Filtruj porady</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Category Filter */}
          <div>
            <p className="text-sm font-medium mb-2 text-gray-700">Kategoria</p>
            <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
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
              value={selectedLevel}
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
              value={selectedTimeNeeded}
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
              value={selectedTrend}
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
  );
};

export default FilterSection;
