
import { PricingPackage, FaqItem } from './types';

export const WHATSAPP_NUMBER = "556798949484";

export const PACKAGES: PricingPackage[] = [
  {
    id: "basic",
    name: "Essencial Digital",
    artsPerType: 10,
    price: 300,
    description: "Ideal para quem está começando a organizar a casa.",
    features: [
      "10 Artes para Feed",
      "10 Artes para Stories",
      "Legendas Criativas Inclusas",
      "Sugestão de Hashtags",
      "Atendimento Humanizado"
    ]
  },
  {
    id: "pro",
    name: "Presença Ativa",
    artsPerType: 20,
    price: 400,
    description: "Para quem quer se destacar da concorrência com consistência.",
    features: [
      "20 Artes para Feed",
      "20 Artes para Stories",
      "Legendas Criativas Inclusas",
      "Sugestão de Hashtags",
      "Atendimento Humanizado",
      "Suporte via WhatsApp"
    ],
    popular: true
  },
  {
    id: "premium",
    name: "Dominância Social",
    artsPerType: 30,
    price: 500,
    description: "Conteúdo para o mês inteiro. Sua vitrine sempre cheia.",
    features: [
      "30 Artes para Feed",
      "30 Artes para Stories",
      "Legendas Criativas Inclusas",
      "Sugestão de Hashtags",
      "Atendimento Humanizado",
      "Planejamento Estratégico"
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Como funciona a entrega das fotos?",
    answer: "Você pode nos enviar fotos dos seus produtos ou serviços via WhatsApp ou Google Drive. Se não tiver fotos, podemos utilizar bancos de imagens profissionais de alta qualidade que combinem com seu nicho."
  },
  {
    question: "Eu posso pedir alterações nas artes?",
    answer: "Sim! Trabalhamos com atendimento humanizado. Após o envio das prévias, você tem direito a rodadas de ajustes para garantirmos que a arte está exatamente como você imaginou."
  },
  {
    question: "As legendas já vêm prontas?",
    answer: "Sim! Em todos os nossos pacotes, além da arte visual, criamos a legenda estratégica para cada post, focada em engajamento ou venda, dependendo do seu objetivo."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "Nosso prazo médio é de 5 a 7 dias úteis após o envio de todas as informações e fotos necessárias."
  },
  {
    question: "O atendimento é por robô?",
    answer: "Jamais. Acreditamos que cada negócio é único. Você falará diretamente com um especialista que vai entender a sua dor e a identidade da sua marca."
  }
];
