import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, MapPin, Music, Award } from 'lucide-react';

const ProfileSetupMockup = () => {
  return (
    <Card className="bg-white border shadow-soft max-w-sm mx-auto">
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <User size={20} className="text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-foreground">Meu Perfil</h3>
            <p className="text-xs text-muted-foreground">Complete seus dados</p>
          </div>
        </div>

        {/* Form fields */}
        <div className="space-y-3">
          <div>
            <label className="text-xs text-muted-foreground">Nome completo</label>
            <div className="mt-1 p-2 bg-gray-50 rounded text-xs text-foreground border">
              João Silva
            </div>
          </div>

          <div>
            <label className="text-xs text-muted-foreground">Instrumentos</label>
            <div className="mt-1 flex gap-1">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs flex items-center gap-1">
                <Music size={10} />
                Violão
              </span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs flex items-center gap-1">
                <Music size={10} />
                Piano
              </span>
            </div>
          </div>

          <div>
            <label className="text-xs text-muted-foreground">Localização</label>
            <div className="mt-1 p-2 bg-gray-50 rounded text-xs text-foreground border flex items-center gap-1">
              <MapPin size={10} />
              São Paulo, SP
            </div>
          </div>

          <div>
            <label className="text-xs text-muted-foreground">Experiência</label>
            <div className="mt-1 p-2 bg-gray-50 rounded text-xs text-foreground border flex items-center gap-1">
              <Award size={10} />
              5+ anos
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-muted-foreground">Progresso do perfil</span>
            <span className="text-xs font-medium text-primary">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-primary h-1.5 rounded-full w-[90%] transition-all duration-300"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSetupMockup;