import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState<{ 
    name?: string; 
    email?: string; 
    card?: string; 
    expiry?: string; 
    cvv?: string;
  }>({});

  // Format card as XXXX XXXX XXXX XXXX
  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    return cleaned.replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  // Format expiry as MM/YY
  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length <= 2) return cleaned;
    return cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
  };

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name = "Full name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    const cardDigits = card.replace(/\s+/g, "");
    if (!cardDigits) {
      newErrors.card = "Card number is required";
    } else if (cardDigits.length !== 16) {
      newErrors.card = "Card number must be 16 digits";
    }

    if (!expiry) {
      newErrors.expiry = "Expiry date is required";
    } else {
      const [month, year] = expiry.split("/");
      if (!month || !year || Number(month) < 1 || Number(month) > 12) {
        newErrors.expiry = "Invalid expiry date";
      }
    }

    if (!cvv) {
      newErrors.cvv = "CVV is required";
    } else if (!/^\d{3,4}$/.test(cvv)) {
      newErrors.cvv = "CVV must be 3 or 4 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (validate()) {
    // simulate payment success
    navigate("/success");
  }
};


  

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full bg-card p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Card Number
            </label>
            <input
              type="text"
              value={card}
              onChange={(e) => setCard(formatCardNumber(e.target.value))}
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.card ? "border-red-500" : ""
              }`}
              placeholder="1234 5678 9012 3456"
              maxLength={19} // 16 digits + 3 spaces
            />
            {errors.card && <p className="text-red-500 text-sm mt-1">{errors.card}</p>}
          </div>

          {/* Expiry Date + CVV */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.expiry ? "border-red-500" : ""
                }`}
                placeholder="MM/YY"
                maxLength={5}
              />
              {errors.expiry && <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                CVV
              </label>
              <input
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.cvv ? "border-red-500" : ""
                }`}
                placeholder="123"
                maxLength={4}
              />
              {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
            </div>
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full mt-4">
            Pay Now
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
