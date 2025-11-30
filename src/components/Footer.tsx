import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">PilahYuk</span>
            </div>
            <p className="text-sm text-background/70 mb-4">
              Platform pengelolaan sampah yang mengubah limbah menjadi berkah untuk lingkungan.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Tentang Kami</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#install" className="hover:text-primary transition-colors">Install Sekarang</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tim Kami</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Karir</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#pricing" className="hover:text-primary transition-colors">Harga</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mitra B2B</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bantuan</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>hello@PilahYuk.id</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© 2024 PilahYuk. Semua hak dilindungi.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
