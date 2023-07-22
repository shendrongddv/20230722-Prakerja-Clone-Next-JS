import FooterWrapper from "@/components/footer/footer-wrapper";
import HeaderWrapper from "@/components/navbar/header-wrapper";

interface HomepageLayoutProps {
  children: React.ReactNode;
}

export default function HomepageLayout({ children }: HomepageLayoutProps) {
  return (
    <>
      <HeaderWrapper />
      <main>{children}</main>
      <FooterWrapper />
    </>
  );
}
