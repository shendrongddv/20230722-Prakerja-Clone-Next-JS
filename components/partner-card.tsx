// Data
import { partnerProviders } from "@/data";
import Image from "next/image";

const PartnerCard = () => {
  const items = partnerProviders;

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-3xl overflow-hidden border-t-4 hover:shadow-xl border-destructive-foreground flex flex-col bg-white p-2 transition ease-linear duration-200"
        >
          {/* # */}
          <div className="text-center p-4">
            <h3 className="h3 text-primary-foreground">{item.label}</h3>
          </div>

          {/* # */}
          <div className="bg-slate-200 h-full rounded-3xl p-4 grid grid-cols-2 gap-2 grid-rows-3 max-md:last:grid-rows-2">
            {item.providers.map((subitem) => (
              <div
                key={subitem.id}
                className="overflow-hidden flex justify-center items-center group  transition ease-linear duration-200 hover:shadow-lg rounded-full bg-white"
              >
                <Image
                  src={`/partners/${subitem.img}`}
                  alt={subitem.title}
                  width={268}
                  height={100}
                  className="w-full h-auto transition ease-linear duration-200 scale-100 group-hover:scale-90 mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PartnerCard;
