import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-card rounded-3xl shadow-glow overflow-hidden border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Siap Memulai Perjalanan <span className="text-primary">Hijau</span> Anda?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Bergabunglah dengan ribuan keluarga Indonesia yang sudah merasakan manfaat mengelola sampah dengan PilahYuk.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg">
                  <Smartphone className="mr-2 w-5 h-5" />
                  Download Aplikasi
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
              
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
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-hero opacity-20 absolute inset-0 blur-3xl" />
              <div className="relative bg-muted/50 rounded-2xl p-8 backdrop-blur-sm border border-border">
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
