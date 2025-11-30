import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Recycle, Coins } from "lucide-react";
import heroImage from "@/assets/hero-sorting.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70 z-10" />
        <img 
          src={heroImage} 
          alt="Families sorting recyclable waste together"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">Solusi Limbah Rumah Tangga</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Kelola Sampah,
            <br />
            <span className="text-primary">Raih Reward</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Platform penjemputan sampah yang mengubah limbah anorganik Anda menjadi poin dan kontribusi nyata untuk lingkungan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="lg" className="text-lg">
              Mulai Sekarang
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              Lihat Cara Kerja
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">10K+</div>
              <div className="text-sm text-muted-foreground">Pengguna Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">50 Ton</div>
              <div className="text-sm text-muted-foreground">Sampah Terdaur</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">200+</div>
              <div className="text-sm text-muted-foreground">Mitra Daur Ulang</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default Hero;
