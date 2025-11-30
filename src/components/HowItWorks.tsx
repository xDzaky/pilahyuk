import { Card } from "@/components/ui/card";
import { Smartphone, Package, Truck, Gift } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    number: "01",
    title: "Daftar & Pilah",
    description: "Download aplikasi, daftar gratis, dan mulai memilah sampah anorganik Anda (plastik, kertas, kaleng).",
  },
  {
    icon: Package,
    number: "02",
    title: "Kumpulkan Sampah",
    description: "Kumpulkan sampah yang sudah dipilah. Minimal 3kg untuk penjemputan. Ikuti panduan kami untuk hasil terbaik.",
  },
  {
    icon: Truck,
    number: "03",
    title: "Jadwalkan Jemput",
    description: "Pilih waktu penjemputan yang sesuai. Tim kami akan datang ke alamat Anda tepat waktu.",
  },
  {
    icon: Gift,
    number: "04",
    title: "Dapat Reward",
    description: "Sampah Anda ditimbang dan langsung dikonversi menjadi poin. Tukar dengan pulsa, uang, atau voucher!",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cara <span className="text-primary">Kerja</span> PilahYuk
          </h2>
          <p className="text-xl text-muted-foreground">
            Hanya 4 langkah mudah untuk mulai mengubah sampah menjadi reward
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="p-6 relative overflow-hidden bg-gradient-card border-border/50 hover:shadow-soft transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {step.number}
                </div>
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-4 shadow-soft group-hover:shadow-glow transition-all">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
