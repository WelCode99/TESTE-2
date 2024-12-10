import React from 'react';
import { useParams } from 'react-router-dom';
import { Send } from 'lucide-react';
import { specialties } from '../data/specialties';

export const Chat: React.FC = () => {
  const { specialtyId } = useParams<{ specialtyId: string }>();
  const specialty = specialties.find((s) => s.id === specialtyId);

  if (!specialty) {
    return <div>Especialidade não encontrada</div>;
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-gray-900">{specialty.name}</h2>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {/* Chat messages will go here */}
        </div>
      </div>

      <div className="p-4 border-t">
        <form className="flex space-x-4">
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};