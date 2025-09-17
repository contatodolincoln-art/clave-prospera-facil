import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const StudentFAQSection = () => {
  const faqs = [
    {
      question: "Como funciona a primeira aula grátis?",
      answer: "Você escolhe o professor, agenda um horário e tem 30 minutos para conhecer a metodologia. Sem compromisso!"
    },
    {
      question: "Preciso ter instrumento em casa?",
      answer: "Depende do que você quer aprender. Para violão, piano e canto, sim. Para teoria musical, não é necessário no início."
    },
    {
      question: "E se eu não gostar do professor?",
      answer: "Pode trocar quando quiser! Temos dezenas de professores para cada instrumento."
    },
    {
      question: "Como funcionam os pagamentos?",
      answer: "Você paga apenas pelas aulas que agendar. Aceitamos cartão, PIX e boleto."
    },
    {
      question: "As aulas ficam gravadas?",
      answer: "Sim! Você recebe a gravação de cada aula para revisar quantas vezes quiser."
    },
    {
      question: "Posso cancelar uma aula?",
      answer: "Sim, até 2 horas antes do horário agendado, sem cobrança."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-young-serif font-normal text-foreground">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre como funciona
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium text-foreground">
                    ❓ {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default StudentFAQSection;