import React, { useState } from 'react';
import { useSkips } from '../hooks/useSkips';
import SkipsList from './SkipsList';
import { Skip } from '../types/skip';
import { Loader2, Truck, AlertTriangle, Info } from 'lucide-react';

const SkipsPage: React.FC = () => {
  const { skips, loading, error } = useSkips('NR32', 'Lowestoft');
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  const handleSelectSkip = (skip: Skip) => {
    setSelectedSkip(skip);
    window.alert(`You've selected a ${skip.size} yard skip. In a real app, this would proceed to the next step.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Select Your Skip Size
          </h1>
          <p className="text-lg text-gray-400">
            Choose the perfect skip for your project in Lowestoft
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl shadow-lg border border-gray-700 p-6 mb-12">
          <div className="flex items-start gap-4 text-gray-300">
            <Info size={24} className="flex-shrink-0 mt-1 text-indigo-400" />
            <div>
              <h2 className="text-lg font-semibold text-white mb-2">
                How to Choose the Right Skip
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                  <span>Measure your waste volume to determine the ideal skip size</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                  <span>Consider access requirements and available space</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                  <span>Check if you need heavy waste disposal capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-900/50 border-l-4 border-red-500 p-4 mb-8 rounded-lg">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-400" />
              <p className="ml-3 text-red-300">{error}</p>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
            <span className="ml-3 text-lg text-gray-400">Loading available skips...</span>
          </div>
        ) : (
          <>
            <SkipsList skips={skips} onSelectSkip={handleSelectSkip} />
            
            <div className="mt-12 text-center text-sm text-gray-400">
              <p>All prices include VAT and standard {skips[0]?.hire_period_days || 14} day hire period</p>
              <p>Delivery and collection included in the displayed prices</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SkipsPage;