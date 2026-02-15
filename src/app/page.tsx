import { HeroSection } from "@/components/landing/HeroSection";
import { OperationalGrid } from "@/components/landing/OperationalGrid";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { ComplianceVault } from "@/components/landing/ComplianceVault";
import { LeadCapture } from "@/components/landing/LeadCapture";
import { LocationModule } from "@/components/landing/LocationModule";
import { NewsUpdates } from "@/components/landing/NewsUpdates";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <OperationalGrid />
      <ProductShowcase />
      <ComplianceVault />
      <LeadCapture />
      <LocationModule />
      <NewsUpdates />
    </div>
  );
}
