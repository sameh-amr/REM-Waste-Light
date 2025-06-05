import React from 'react';
import { Skip } from '../types/skip';
import SkipCard from './SkipCard';

interface SkipsListProps {
  skips: Skip[];
  onSelectSkip: (skip: Skip) => void;
}

const SkipsList: React.FC<SkipsListProps> = ({ skips, onSelectSkip }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skips.map((skip) => (
        <SkipCard key={skip.id} skip={skip} onSelect={onSelectSkip} />
      ))}
    </div>
  );
};

export default SkipsList;