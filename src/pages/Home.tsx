import React from 'react';
import { specialties } from '../data/specialties';
import { SpecialtyCard } from '../components/SpecialtyCard';

export const Home: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Especialidades Médicas</h1>
        <p className="mt-2 text-gray-600">
          Selecione uma especialidade para iniciar uma consulta
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialties.map((specialty) => (
          <SpecialtyCard key={specialty.id} specialty={specialty} />
        ))}
      </div>
    </div>
  );
};