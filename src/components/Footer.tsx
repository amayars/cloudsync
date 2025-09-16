import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const navigationLinks = [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" }
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
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-card-foreground transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors duration-200 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 CloudSync. All rights reserved. Built with security and privacy in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;