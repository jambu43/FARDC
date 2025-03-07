import { ReactNode } from "react";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import Link from "next/link";

type MarketingLayoutProps = {
  children: ReactNode;
};

function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      {/* Help Button */}
      <Button
        variant="default"
        className="fixed bottom-4 right-4 flex items-center gap-2 rounded-full bg-black px-6 py-2 text-white hover:bg-black/90"
      >
       <Link href={'/'}  className="flex items-center gap-2 rounded-full ">
       
       <HelpCircle className="h-5 w-5" />
       <span>Faire un bon</span>
       </Link>
      </Button>
    </>
  );
}

export default MarketingLayout;
