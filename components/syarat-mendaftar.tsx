import { CheckCircle2 } from "lucide-react";

const syaratMendaftar = [
  {
    id: 1,
    text: "WNI berusia paling rendah 18 tahun dan paling tinggi 64 tahun.",
  },
  {
    id: 2,
    text: "Tidak sedang menempuh pendidikan formal.",
  },
  {
    id: 3,
    text: "Sedang mencari kerja, pekerja/buruh yang terkena PHK, atau pekerja/buruh yang membutuhkan peningkatan kompetensi kerja, seperti pekerja/buruh yang dirumahkan dan pekerja bukan penerima upah, termasuk pelaku usaha mikro & kecil.",
  },
  {
    id: 4,
    text: "Bukan Pejabat Negara, Pimpinan dan Anggota DPRD, Aparatur Sipil Negara, Prajurit TNI, Anggota Polri, Kepala Desa dan perangkat desa dan Direksi/Komisaris/Dewan Pengawas pada BUMN atau BUMD.",
  },
  {
    id: 5,
    text: "Maksimal 2 NIK dalam 1 KK yang menjadi Penerima Kartu Prakerja.",
  },
];

const SyaratMendaftar = () => {
  const items = syaratMendaftar;

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="w-full flex border-l pb-4 last:pb-0 border-destructive-foreground last:border-none"
        >
          <div className="p-1 mr-3 -ml-[12px] bg-slate-100 h-5 w-5 rounded-full">
            <CheckCircle2 className="h-4 w-4 text-destructive-foreground" />
          </div>
          <p className="text-primary-foreground">{item.text}</p>
        </div>
      ))}
    </>
  );
};

export default SyaratMendaftar;
