
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface HealthTipDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tip: {
    id: number;
    category: string;
    title: string;
    description: string;
    content: string;
    level: string;
    timeNeeded: string;
    trend?: string;  // Made the trend property optional
  } | null;
  getLevelColor: (level: string) => string;
  getTimeNeededColor: (time: string) => string;
  getTrendIcon?: (trend: string) => string;  // Made the getTrendIcon property optional
}

const HealthTipDialog = ({ 
  open, 
  onOpenChange, 
  tip,
  getLevelColor,
  getTimeNeededColor
}: HealthTipDialogProps) => {
  if (!tip) return null;
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900 flex items-center justify-between">
            {tip.title}
            <span className="px-2 py-1 text-xs font-medium rounded text-white" style={{backgroundColor: '#ea384c'}}>
              {tip.category}
            </span>
          </DialogTitle>
          <DialogDescription className="text-base text-gray-700 mt-2">
            {tip.description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2 text-gray-800">
          <p>{tip.content}</p>
          
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-700">Poziom trudności</span>
              <div className="flex items-center mt-1">
                <span className={`inline-block w-2 h-2 ${getLevelColor(tip.level)} rounded-full mr-1`}></span>
                <span className="capitalize">{tip.level}</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-700">Nakład czasu</span>
              <div className="flex items-center mt-1">
                <span className={`inline-block w-2 h-2 ${getTimeNeededColor(tip.timeNeeded)} rounded-full mr-1`}></span>
                <span className="capitalize">{tip.timeNeeded}</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HealthTipDialog;
