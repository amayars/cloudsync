import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Success = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full bg-card p-8 rounded-2xl shadow-lg text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">Payment Successful 🎉</h2>
        <p className="text-muted-foreground mb-6">
          Thank you for subscribing to <span className="font-semibold">CloudSync</span>.  
          Your storage is now upgraded!
        </p>

        <Button asChild>
          <Link to="/">Go to Dashboard</Link>
        </Button>
      </div>
    </section>
  );
};

export default Success;
