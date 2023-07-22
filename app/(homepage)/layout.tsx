// Components
import HeaderWrapper from "@/components/navbar/header-wrapper";
import FooterWrapper from "@/components/footer/footer-wrapper";
import { CTAFooter } from "@/components/call-to-actions";

interface HomepageLayoutProps {
  children: React.ReactNode;
}

export default function HomepageLayout({ children }: HomepageLayoutProps) {
  return (
    <>
      <HeaderWrapper />
      <main className="flex flex-col">{children}</main>
      <CTAFooter />
      <FooterWrapper />
    </>
  );
}
