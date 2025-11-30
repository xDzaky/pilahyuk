import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-background" id="install">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl lg:max-w-7xl mx-auto bg-gradient-card rounded-[32px] shadow-glow overflow-hidden border border-primary/20">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-stretch p-8 md:p-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Install <span className="text-primary">PilahYuk</span> Sekarang
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-xl">
                Dapatkan pengingat penjemputan, lacak reward, dan rasakan jadwal jemput yang lebih teratur lewat aplikasi Google Play.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <Button variant="hero" size="lg" className="text-lg" asChild>
                  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                    <Smartphone className="mr-2 w-5 h-5" />
                    Install Sekarang
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-lg">
                  Lihat Demo Aplikasi
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Tersedia gratis di Google Play Store. iOS coming soon!
              </p>
              
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <div className="text-2xl font-bold">4.8/5</div>
                  <div className="text-sm text-muted-foreground">Rating Pengguna</div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm text-muted-foreground">Download</div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-muted-foreground">Kepuasan</div>
                </div>
              </div>
            </div>
            
            <div className="relative h-full">
              <div className="rounded-3xl bg-gradient-hero opacity-20 absolute inset-0 blur-3xl" />
              <div className="relative h-full bg-muted/40 rounded-3xl p-8 backdrop-blur-sm border border-border flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm">Real-time tracking penjemputan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "0.5s" }} />
                    <span className="text-sm">Notifikasi reward instant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: "1s" }} />
                    <span className="text-sm">Dashboard impact lingkungan</span>
                  </div>
                  <div className="mt-8 p-4 bg-primary/10 rounded-xl">
                    <div className="text-sm text-muted-foreground mb-1">Bonus untuk pendaftar baru:</div>
                    <div className="text-2xl font-bold text-primary">+ 1000 Poin Gratis!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
