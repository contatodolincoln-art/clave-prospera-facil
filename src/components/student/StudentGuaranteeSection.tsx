import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Phone } from 'lucide-react';

const StudentGuaranteeSection = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Garantia de 7 dias",
      description: "Se não ficar satisfeito nas primeiras aulas, devolvemos 100% do seu dinheiro."
    },
    {
      icon: Lock,
      title: "Pagamento Seguro",
      description: "Seus dados são protegidos com criptografia bancária. Aceitamos todos os cartões e PIX."
    },
    {
      icon: Phone,
      title: "Suporte 7 dias por semana",
      description: "Nossa equipe está sempre disponível para ajudar no que precisar."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-young-serif font-normal text-foreground">
            Garantia e Segurança
          </h2>
          <p className="text-xl text-muted-foreground">
            Sua tranquilidade é nossa prioridade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <guarantee.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {guarantee.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {guarantee.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentGuaranteeSection;