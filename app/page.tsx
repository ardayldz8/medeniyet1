import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CustomerReviews } from "@/components/home/CustomerReviews";
import { StoryPreview } from "@/components/home/StoryPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { ContactCTA } from "@/components/home/ContactCTA";
import { OnlineOrderLinks } from "@/components/home/OnlineOrderLinks";
import { MenuQrSection } from "@/components/common/MenuQrSection";

export default function HomePage() {
  return (
    <main className="relative z-0">
      <Hero />
      <FeaturedProducts />
      <CustomerReviews />
      <StoryPreview />
      <GalleryPreview />
      <OnlineOrderLinks />
      <MenuQrSection />
      <ContactCTA />
    </main>
  );
}
