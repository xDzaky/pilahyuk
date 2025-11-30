import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Sparkles, TrendingUp, Users, ClipboardList, Info } from "lucide-react";

const promoStats = [
  {
    label: "Warga mau pakai tier Gratis",
    value: "93%",
    description: "Preferensi riset RW 05",
    icon: Users,
  },
  {
    label: "Tertarik upgrade ke Reguler",
    value: "67%",
    description: "Setelah 1 bulan pakai",
    icon: TrendingUp,
  },
  {
    label: "Riset interview langsung",
    value: "15",
    description: "Menggunakan metode MOM Test",
    icon: ClipboardList,
  },
];

const pricingTiers = [
  {
    name: "Gratis",
    badge: "Freemium",
    price: "Rp 0",
    priceNote: "Selamanya gratis",
    priceDaily: "",
    interest: { label: "Tingkat minat warga", value: "93%", percent: "93%" },
    features: [
      "Penjemputan 2x/bulan",
      "Maks 10 kg anorganik",
      "Poin reward normal (Rp 2.500–4.000/kg)",
      "Jadwal tetap sesuai zona",
    ],
    cta: "Paket Saat Ini",
    highlighted: false,
    note: "Cocok untuk warga baru yang ingin mencoba layanan",
  },
  {
    name: "Reguler",
    badge: "Paling Populer",
    price: "Rp 29.000",
    priceNote: "≈ Rp 950/hari",
    priceDaily: "",
    interest: { label: "Minat upgrade", value: "67%", percent: "67%" },
    features: [
      "Penjemputan 4x/bulan",
      "Maks 30 kg/bulan",
      "Reward naik 25% (Rp 3.500–5.600/kg)",
      "Bebas pilih jadwal via app",
    ],
    cta: "Upgrade Sekarang",
    highlighted: true,
    note: "Hemat ±Rp 18.000/bulan dari tambahan reward",
  },
  {
    name: "Premium",
    badge: "Zero Waste Hero",
    price: "Rp 69.000",
    priceNote: "≈ Rp 2.300/hari",
    priceDaily: "",
    interest: { label: "Minat komunitas", value: "27%", percent: "27%" },
    features: [
      "Penjemputan UNLIMITED",
      "Maks 100 kg/bulan",
      "Reward naik 50% (Rp 4.500–7.000/kg)",
      "Bebas pilih jadwal via app",
    ],
    cta: "Jadi Premium",
    highlighted: false,
    note: "Nilai total ±Rp 114.000/bulan dari reward",
  },
];

const comparisonTiers = [
  {
    badge: "Populer",
    name: "Dasar",
    description: "Sempurna untuk memulai perjalanan hijau Anda",
    price: "GRATIS",
    features: [
      "Penjemputan 1x per bulan (min. 3kg)",
      "Panduan pemilahan sampah",
      "Penukaran poin rate dasar (Rp 500/kg)",
      "Laporan dampak lingkungan sederhana",
      "Akses komunitas PilahYuk",
    ],
  },
  {
    badge: "Terbaik",
    name: "Pro Planet",
    description: "Untuk keluarga yang peduli lingkungan",
    price: "Rp 25.000/bulan",
    features: [
      "Penjemputan 4x per bulan",
      "Semua fitur Dasar",
      "Rate poin 50% lebih tinggi (Rp 750/kg)",
      "Jadwal penjemputan fleksibel",
      "Laporan dampak detail & akses program khusus",
    ],
  },
  {
    badge: "B2B",
    name: "Mitra",
    description: "Solusi untuk bisnis dan institusi",
    price: "Rp 150.000/bulan",
    features: [
      "Penjemputan 2-5x per minggu",
      "Semua fitur Pro Planet",
      "Laporan ESG & branding 'Mitra Hijau'",
      "Konsultasi pengurangan sampah",
      "Dashboard analitik & account manager",
    ],
  },
];

const faqItems = [
  {
    question: "Kapan mulai bayar?",
    answer: "Setelah 3 bulan pertama (gratis) selama promo launching berlaku hingga 31 Maret 2026.",
  },
  {
    question: "Bisa downgrade?",
    answer: "Bisa kapan saja tanpa penalti—cukup ubah paket melalui aplikasi sebelum siklus berikutnya.",
  },
  {
    question: "Reward masuk kemana?",
    answer: "Reward dapat dicairkan ke GoPay, OVO, atau langsung memotong tagihan penjemputan.",
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-background" id="pricing">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start mb-10">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
              Pilih Paket Terbaik untuk Anda
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Data paket terbaru berdasarkan riset warga Surabaya 2025
            </h2>
            <p className="text-lg text-muted-foreground">
              Gunakan paket yang paling cocok hari ini, lalu upgrade kapan saja setelah periode promo 3 bulan
              gratis berakhir.
            </p>
          </div>
          <Card className="p-6 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border-primary/20 shadow-glow">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-primary/20 text-primary p-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase text-primary">Promo Launching!</p>
                <h3 className="text-2xl font-bold mb-1">3 Bulan Pertama GRATIS untuk Semua Tier!</h3>
                <p className="text-sm text-muted-foreground">Berlaku hingga 31 Maret 2026.</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {promoStats.map((stat) => (
            <Card key={stat.label} className="p-5 flex items-center gap-4">
              <div className="rounded-xl bg-muted p-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-3xl font-bold leading-tight">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground/80">{stat.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative p-6 flex flex-col justify-between border-2 ${
                tier.highlighted
                  ? "border-emerald-400 shadow-glow bg-gradient-to-b from-emerald-50 via-white to-white"
                  : "border-border hover:shadow-soft"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs uppercase text-muted-foreground">{tier.badge}</p>
                    <h3 className="text-2xl font-bold">{tier.name}</h3>
                  </div>
                  {tier.highlighted && <Badge className="bg-primary text-primary-foreground">Paling Laris</Badge>}
                </div>
                <div className="mb-4">
                  <div className="text-3xl font-bold leading-none">{tier.price}</div>
                  <p className="text-sm text-muted-foreground">{tier.priceNote}</p>
                </div>
                {tier.interest && (
                  <div className="mb-5">
                    <div className="flex items-center justify-between text-xs font-medium text-muted-foreground mb-2">
                      <span>{tier.interest.label}</span>
                      <span>{tier.interest.value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: tier.interest.percent }}
                      />
                    </div>
                  </div>
                )}
                <div className="space-y-3">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                {tier.note && <p className="mt-4 text-sm font-semibold text-emerald-600">{tier.note}</p>}
              </div>
              <Button className="mt-6" variant={tier.highlighted ? "hero" : "outline"} size="lg">
                {tier.cta}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <a href="#comparison" className="inline-flex items-center gap-2 text-primary font-semibold">
            Lihat Perbandingan Lengkap
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <Card className="p-6 flex-1 bg-muted/40">
            <div className="flex items-start gap-3 mb-4">
              <div className="rounded-xl bg-primary/10 p-2">
                <Info className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary">Berdasarkan Riset Langsung</p>
                <h3 className="text-xl font-semibold">MOM Test 15 warga Surabaya</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Harga ini diriset dari interview 15 warga Surabaya menggunakan metode MOM Test. 67% responden
              bersedia membayar Rp29.000/bulan karena nilai reward hampir menutup biaya langganan.
            </p>
            <p className="text-sm text-muted-foreground">
              Insight tambahan: warga lebih nyaman ketika reward dapat langsung dipakai untuk potong tagihan atau
              dikirim ke dompet digital.
            </p>
          </Card>
          <Card className="flex-1 p-6">
            <h3 className="text-xl font-semibold mb-4">Pertanyaan Umum</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* <div id="comparison" className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Detail Paket</p>
            <h3 className="text-3xl font-bold">Perbandingan Lengkap Paket PilahYuk</h3>
            <p className="text-sm text-muted-foreground">
              Data ini diambil dari dokumen "pilih-paket.md" untuk memudahkan presentasi ke warga dan mitra bisnis.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {comparisonTiers.map((tier) => (
              <Card key={tier.name} className="p-5 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{tier.badge}</Badge>
                  <h4 className="text-xl font-semibold">{tier.name}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{tier.description}</p>
                <p className="text-2xl font-bold mb-4">{tier.price}</p>
                <div className="space-y-2 text-sm text-foreground flex-1">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;
