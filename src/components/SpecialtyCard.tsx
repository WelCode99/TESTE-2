import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Microscope,
  Heart,
  Brain,
  Baby
} from 'lucide-react';
import { Specialty } from '../types/specialty';

const iconMap = {
  'virus': Microscope, // Changed from Virus to Microscope as it's a better alternative
  'heart': Heart,
  'brain': Brain,
  'baby': Baby,
};

interface SpecialtyCardProps {
  specialty: Specialty;
}

export const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ specialty }) => {
  const Icon = iconMap[specialty.icon as keyof typeof iconMap];

  return (
    <Link
      to={`/chat/${specialty.id}`}
      className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-blue-50 rounded-full">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{specialty.name}</h3>
          <p className="text-sm text-gray-600">{specialty.description}</p>
        </div>
      </div>
    </Link>
  );
};