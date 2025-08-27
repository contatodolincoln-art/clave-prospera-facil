import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, TrendingUp, Calendar, CreditCard } from 'lucide-react';

const EarningsMockup = () => {
  return (
    <Card className="bg-white border shadow-soft max-w-sm mx-auto">
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <DollarSign size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-foreground">Meus Ganhos</h3>
            <p className="text-xs text-muted-foreground">Novembro 2024</p>
          </div>
        </div>

        {/* Main earnings */}
        <div className="text-center mb-4 p-4 bg-green-50 rounded-lg">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp size={16} className="text-green-600" />
            <span className="text-xs text-green-600 font-medium">GANHOS DO MÊS</span>
          </div>
          <p className="text-3xl font-bold text-green-700 mb-1">R$ 2.760,00</p>
          <p className="text-xs text-green-600">+12% vs mês anterior</p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 bg-blue-50 rounded-lg text-center">
            <div className="flex items-center justify-center mb-1">
              <Calendar size={12} className="text-blue-600 mr-1" />
              <span className="text-xs text-blue-600 font-medium">AULAS</span>
            </div>
            <p className="text-xl font-bold text-blue-700">88</p>
            <p className="text-xs text-blue-600">realizadas</p>
          </div>

          <div className="p-3 bg-purple-50 rounded-lg text-center">
            <div className="flex items-center justify-center mb-1">
              <TrendingUp size={12} className="text-purple-600 mr-1" />
              <span className="text-xs text-purple-600 font-medium">MÉDIA</span>
            </div>
            <p className="text-xl font-bold text-purple-700">R$ 31,25</p>
            <p className="text-xs text-purple-600">por hora</p>
          </div>
        </div>

        {/* Recent transactions */}
        <div className="space-y-2">
          <h4 className="text-xs font-medium text-muted-foreground mb-2">Recebimentos recentes</h4>
          
          <div className="flex items-center justify-between p-2 bg-green-50 rounded border-l-4 border-green-400">
            <div className="flex items-center gap-2">
              <CreditCard size={12} className="text-green-600" />
              <div>
                <p className="text-xs font-medium text-foreground">Pagamento processado</p>
                <p className="text-xs text-muted-foreground">21 Nov, 14:30</p>
              </div>
            </div>
            <span className="text-xs font-bold text-green-600">+R$ 125,00</span>
          </div>

          <div className="flex items-center justify-between p-2 bg-green-50 rounded border-l-4 border-green-400">
            <div className="flex items-center gap-2">
              <CreditCard size={12} className="text-green-600" />
              <div>
                <p className="text-xs font-medium text-foreground">Pagamento processado</p>
                <p className="text-xs text-muted-foreground">20 Nov, 09:15</p>
              </div>
            </div>
            <span className="text-xs font-bold text-green-600">+R$ 93,75</span>
          </div>

          <div className="flex items-center justify-between p-2 bg-yellow-50 rounded border-l-4 border-yellow-400">
            <div className="flex items-center gap-2">
              <Calendar size={12} className="text-yellow-600" />
              <div>
                <p className="text-xs font-medium text-foreground">Processando</p>
                <p className="text-xs text-muted-foreground">19 Nov, 16:00</p>
              </div>
            </div>
            <span className="text-xs font-bold text-yellow-600">R$ 62,50</span>
          </div>
        </div>

        {/* Next payment */}
        <div className="mt-4 pt-3 border-t border-gray-100 text-center">
          <p className="text-xs text-muted-foreground mb-1">Próximo pagamento em</p>
          <p className="text-sm font-bold text-primary">2 dias</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EarningsMockup;