import { Card } from "@/components/ui/card";
import { Truck, BookOpen, Trophy, TrendingUp, Users, Calendar } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Penjemputan Mudah",
    description: "Jadwalkan penjemputan sampah anorganik langsung dari rumah. Praktis dan tepat waktu.",
    color: "text-primary",
  },
  {
    icon: BookOpen,
    title: "Edukasi Pemilahan",
    description: "Panduan visual lengkap cara memilah sampah dengan benar untuk hasil maksimal.",
    color: "text-secondary",
  },
  {
    icon: Trophy,
    title: "Sistem Reward",
    description: "Tukar sampah dengan poin yang bisa ditukar pulsa, e-wallet, atau voucher belanja.",
    color: "text-accent",
  },
  {
    icon: TrendingUp,
    title: "Tracking Impact",
    description: "Monitor kontribusi lingkungan Anda. Lihat berapa pohon yang Anda selamatkan!",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Komunitas Hijau",
    description: "Bergabung dengan ribuan keluarga Indonesia yang peduli lingkungan.",
    color: "text-secondary",
  },
  {
    icon: Calendar,
    title: "Jadwal Fleksibel",
    description: "Pilih waktu penjemputan sesuai kesibukan Anda. Kami menyesuaikan dengan Anda.",
    color: "text-accent",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kenapa Memilih <span className="text-primary">PilahYuk</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Solusi lengkap untuk pengelolaan sampah rumah tangga yang modern, mudah, dan menguntungkan.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-border/50 hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 ${feature.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
