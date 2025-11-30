import { Leaf, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">PilahYuk</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Beranda
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Cara Kerja
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">
              Harga
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Tentang
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Beranda
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Cara Kerja
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">
                Harga
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Tentang
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
