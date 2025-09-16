import { useState } from "react";
import { Button } from "@/components/ui/button";

const Demo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; company?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email format";

    if (!company.trim()) newErrors.company = "Company is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert(`Thank you ${name}! Our team will contact you for the demo.`);
      setName(""); setEmail(""); setCompany(""); setMessage("");
      // You can also redirect to another page or integrate API here
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-secondary/20 to-primary/20 px-6">
      <div className="max-w-md w-full bg-card p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center text-foreground">Book a Demo</h2>
        <p className="text-center text-muted-foreground mb-6">
          Fill in your details and our team will reach out to schedule a personalized demo.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? "border-red-500" : ""}`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? "border-red-500" : ""}`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">Company</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary ${errors.company ? "border-red-500" : ""}`}
              placeholder="Your Company"
            />
            {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">Message (optional)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Any specific requests or questions?"
            />
          </div>

          <Button type="submit" className="w-full mt-4">Book Demo</Button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
