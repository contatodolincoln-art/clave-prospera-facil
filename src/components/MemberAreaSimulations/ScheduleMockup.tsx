import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User, Video } from 'lucide-react';

const ScheduleMockup = () => {
  return (
    <Card className="bg-white border shadow-soft max-w-sm mx-auto">
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Calendar size={20} className="text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-foreground">Minha Agenda</h3>
            <p className="text-xs text-muted-foreground">Hoje, 23 Nov</p>
          </div>
        </div>

        {/* Today's schedule */}
        <div className="space-y-3">
          <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Clock size={12} className="text-green-600" />
                <span className="text-xs font-medium text-green-700">09:00 - 09:30</span>
              </div>
              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">EM BREVE</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <User size={12} className="text-gray-500" />
              <span className="text-xs font-medium text-foreground">Ana Silva</span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">Piano - Aula de teoria</p>
            <div className="flex items-center gap-1">
              <Video size={10} className="text-blue-500" />
              <span className="text-xs text-blue-600">Aula online</span>
            </div>
          </div>

          <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Clock size={12} className="text-blue-600" />
                <span className="text-xs font-medium text-blue-700">14:30 - 15:00</span>
              </div>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">HOJE</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <User size={12} className="text-gray-500" />
              <span className="text-xs font-medium text-foreground">Carlos Lima</span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">Violão - Primeira aula</p>
            <div className="flex items-center gap-1">
              <Video size={10} className="text-blue-500" />
              <span className="text-xs text-blue-600">Aula online</span>
            </div>
          </div>

          <div className="p-3 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Clock size={12} className="text-orange-600" />
                <span className="text-xs font-medium text-orange-700">19:30 - 20:00</span>
              </div>
              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">HOJE</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <User size={12} className="text-gray-500" />
              <span className="text-xs font-medium text-foreground">João Pedro</span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">Piano - Continuação</p>
            <div className="flex items-center gap-1">
              <Video size={10} className="text-blue-500" />
              <span className="text-xs text-blue-600">Aula online</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 pt-3 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
          <div className="p-2 bg-gray-50 rounded">
            <p className="text-lg font-bold text-primary">8</p>
            <p className="text-xs text-muted-foreground">Aulas hoje</p>
          </div>
          <div className="p-2 bg-gray-50 rounded">
            <p className="text-lg font-bold text-secondary">94%</p>
            <p className="text-xs text-muted-foreground">Taxa ocupação</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScheduleMockup;