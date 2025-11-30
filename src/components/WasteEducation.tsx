import { Card } from "@/components/ui/card";
import { Recycle, CheckCircle2, XCircle } from "lucide-react";

const wasteTypes = [
  {
    type: "Plastik",
    icon: "🍾",
    accepted: ["Botol plastik", "Kantong plastik bersih", "Kemasan makanan", "Wadah plastik"],
    rejected: ["Plastik kotor berminyak", "Styrofoam", "Plastik berlaminasi"],
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    type: "Kertas",
    icon: "📰",
    accepted: ["Koran & majalah", "Kardus", "Kertas kantor", "Buku bekas"],
    rejected: ["Kertas tisu", "Kertas berlaminasi", "Kertas berminyak"],
    color: "from-amber-500/10 to-amber-600/5",
  },
  {
    type: "Kaleng & Logam",
    icon: "🥫",
    accepted: ["Kaleng minuman", "Kaleng makanan", "Tutup botol", "Kemasan alumunium"],
    rejected: ["Kaleng cat", "Kaleng beracun", "Logam berkarat"],
    color: "from-slate-500/10 to-slate-600/5",
  },
];

const WasteEducation = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Recycle className="w-4 h-4" />
            <span className="text-sm font-medium">Panduan Pemilahan</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Jenis <span className="text-primary">Sampah</span> yang Kami Terima
          </h2>
          <p className="text-xl text-muted-foreground">
            Pelajari cara memilah sampah dengan benar untuk hasil maksimal dan reward lebih tinggi
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {wasteTypes.map((waste, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-border/50 hover:shadow-soft transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${waste.color} rounded-bl-full -mr-8 -mt-8`} />
              
              <div className="relative">
                <div className="text-5xl mb-4">{waste.icon}</div>
                <h3 className="text-2xl font-bold mb-6">{waste.type}</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-sm">Diterima:</span>
                    </div>
                    <ul className="space-y-2 ml-7">
                      {waste.accepted.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle className="w-5 h-5 text-destructive" />
                      <span className="font-semibold text-sm">Tidak Diterima:</span>
                    </div>
                    <ul className="space-y-2 ml-7">
                      {waste.rejected.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-2xl max-w-4xl mx-auto">
          <p className="text-center text-sm text-foreground">
            <strong>💡 Tips:</strong> Bersihkan dan keringkan sampah sebelum disetor untuk mendapat rate poin terbaik!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WasteEducation;
