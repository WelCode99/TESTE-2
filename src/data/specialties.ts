import { Specialty } from '../types/specialty';

export const specialties: Specialty[] = [
  {
    id: 'infectious-diseases',
    name: 'Doenças Infecciosas',
    description: 'Especialista em diagnóstico e tratamento de doenças causadas por microorganismos',
    icon: 'virus'
  },
  {
    id: 'cardiology',
    name: 'Cardiologia',
    description: 'Especialista em doenças do coração e sistema circulatório',
    icon: 'heart'
  },
  {
    id: 'neurology',
    name: 'Neurologia',
    description: 'Especialista em distúrbios do sistema nervoso',
    icon: 'brain'
  },
  {
    id: 'pediatrics',
    name: 'Pediatria',
    description: 'Especialista em saúde infantil e desenvolvimento',
    icon: 'baby'
  }
];