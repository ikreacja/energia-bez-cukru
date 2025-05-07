
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface HealthTipCardProps {
  tip: {
    id: number;
    category: string;
    title: string;
    description: string;
    level: string;
    timeNeeded: string;
    trend: string;
  };
  onCardClick: (tip: any) => void;
  getLevelColor: (level: string) => string;
  getTimeNeededColor: (time: string) => string;
  getTrendIcon: (trend: string) => string;
}

const HealthTipCard = ({ 
  tip, 
  onCardClick,
  getLevelColor,
  getTimeNeededColor,
  getTrendIcon
}: HealthTipCardProps) => {
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-red-200"
      onClick={() => onCardClick(tip)}
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
            onCardClick(tip);
          }}
        >
          Czytaj więcej
        </Button>
      </CardContent>
    </Card>
  );
};

export default HealthTipCard;
