import { useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "@/components/ContactModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigationLinks = [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "" } // handled by modal
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Brand */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-2xl font-bold text-card-foreground">CloudSync</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Your files. Anytime. Anywhere. Secure cloud storage and team collaboration made simple.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
            <nav className="flex flex-wrap justify-center md:justify-start gap-6">
              {navigationLinks.map((link) =>
                link.name === "Contact" ? (
                  <button
                    key={link.name}
                    onClick={() => setIsModalOpen(true)}
                    className="text-muted-foreground hover:text-card-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-card-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </footer>
  );
};

export default Footer;
