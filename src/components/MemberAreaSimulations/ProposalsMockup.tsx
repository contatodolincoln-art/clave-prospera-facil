import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Clock, User } from 'lucide-react';

const ProposalsMockup = () => {
  return (
    <Card className="bg-white border shadow-soft max-w-sm mx-auto">
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
          <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
            <MessageSquare size={20} className="text-secondary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-foreground">Propostas</h3>
            <p className="text-xs text-muted-foreground">3 novas mensagens</p>
          </div>
        </div>

        {/* Proposals list */}
        <div className="space-y-3">
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <User size={12} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-xs font-medium text-foreground">Ana Silva</p>
                  <span className="text-xs text-green-600 bg-green-100 px-1 rounded">NOVA</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  "Gostaria de aulas de piano para iniciante..."
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock size={10} className="mr-1" />
                  2h atrás
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <User size={12} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-xs font-medium text-foreground">Carlos Lima</p>
                  <span className="text-xs text-blue-600 bg-blue-100 px-1 rounded">NOVA</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  "Preciso aprender violão popular..."
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock size={10} className="mr-1" />
                  4h atrás
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                <User size={12} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-xs font-medium text-foreground">Maria Santos</p>
                  <span className="text-xs text-gray-600">lida</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  "Obrigada pela aula! Quando..."
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock size={10} className="mr-1" />
                  1 dia atrás
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between text-center">
          <div>
            <p className="text-lg font-bold text-primary">12</p>
            <p className="text-xs text-muted-foreground">Esta semana</p>
          </div>
          <div>
            <p className="text-lg font-bold text-secondary">47</p>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProposalsMockup;