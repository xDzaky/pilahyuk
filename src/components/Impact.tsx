import { Card } from "@/components/ui/card";
import { TreePine, Droplets, Zap, Leaf } from "lucide-react";

const impacts = [
  {
    icon: TreePine,
    value: "50,000+",
    label: "Pohon Diselamatkan",
    description: "Setara dengan hutan seluas 10 hektar",
  },
  {
    icon: Droplets,
    value: "2 Juta",
    label: "Liter Air Dihemat",
    description: "Cukup untuk 1000 keluarga selama sebulan",
  },
  {
    icon: Zap,
    value: "100K",
    label: "kWh Energi Dihemat",
    description: "Mengurangi emisi CO₂ hingga 50 ton",
  },
  {
    icon: Leaf,
    value: "50 Ton",
    label: "Sampah Terdaur",
    description: "Dan terus bertambah setiap hari",
  },
];

const Impact = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
            Dampak Nyata untuk <span className="text-primary-foreground/90">Bumi</span>
          </h2>
          <p className="text-xl text-primary-foreground/80">
            Bersama komunitas PilahYuk, kita telah menciptakan perubahan yang signifikan
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-4xl font-bold text-primary-foreground mb-2">
                    {impact.value}
                  </div>
                  <div className="text-lg font-semibold text-primary-foreground mb-2">
                    {impact.label}
                  </div>
                  <p className="text-sm text-primary-foreground/70">
                    {impact.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Setiap kontribusi Anda, sekecil apapun, membuat perbedaan besar untuk planet kita. Mari bersama-sama menciptakan masa depan yang lebih hijau! 🌱
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
