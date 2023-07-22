import HeaderWrapper from "@/components/navbar/header-wrapper";
// import FooterWrapper from "@/components/footer/footer-wrapper";
import { CTAFooter } from "@/components/call-to-actions";
import FooterMain from "@/components/footer/footer-main";

interface HomepageLayoutProps {
  children: React.ReactNode;
}

export default function HomepageLayout({ children }: HomepageLayoutProps) {
  return (
    <>
      <HeaderWrapper />
      <main>{children}</main>
      <CTAFooter />
      {/* <FooterWrapper /> */}
      <FooterMain />
    </>
  );
}
