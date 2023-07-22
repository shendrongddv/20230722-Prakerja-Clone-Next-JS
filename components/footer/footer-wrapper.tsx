import Image from "next/image";
import { FooterLinks, FooterLinksBeta } from "./footer-links";

const FooterWrapper = () => {
  return (
    <footer className="px-6 pt-20 bg-[url(/bg/bg-5.svg)] bg-cover bg-center bg-no-repeat">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* ## */}
          <div className="md:w-1/4">
            <div className="flex gap-4">
              <Image
                src="/pancasila.png"
                alt="Pancasila"
                width={44}
                height={44}
                className="h-11 w-11"
              />
              <span className="text-white text-sm font-bold">
                Kementerian Koordinator Bidang Perekonomian Republik Indonesia
              </span>
            </div>
          </div>

          {/* ## */}
          <div className="md:w-3/4">
            <div className="p-6 rounded-xl bg-white/60">
              <p className="text-sm text-primary-foreground">
                Program Kartu Prakerja berlanjut pada tahun 2023 dengan skema
                normal, di mana bantuan pelatihan akan fokus kepada pengembangan
                kompetensi angkatan kerja, peningkatan produktivitas, dan daya
                saing angkatan kerja; serta pengembangan kewirausahaan.
                Pelaksanaan skema normal diatur dalam Peraturan Presiden Nomor
                113 Tahun 2022 yang aturan pelaksanaannya tertera pada Permenko
                Perekonomian Nomor 17 Tahun 2022.
              </p>
              <span className="text-xs font-medium text-primary-foreground">
                Airlangga Hartarto, Menteri Koordinator Bidang Perekonomian
                Republik Indonesia
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="container mt-20">
        <div className="flex flex-col md:flex-row md:justify-evenly gap-1">
          {/* Col */}
          <FooterLinks />
          <FooterLinksBeta />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mt-10 border-t border-white/25 py-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          {/* ## */}
          <span className="text-white text-xs">© Kartu Prakerja 2023</span>
          {/* ## */}
          <span className="text-white text-xs">© Kartu Prakerja 2023</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterWrapper;
