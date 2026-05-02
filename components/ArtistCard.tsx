import Image from "next/image";
import Link from "next/link";

type ArtistCardProps = {
  id: string;
  name: string;
  style: string;
  image: string;
  sold: number;
  rating: number;
};

export default function ArtistCard({
  id,
  name,
  style,
  image,
  sold,
  rating,
}: ArtistCardProps) {
  return (
    <Link href={`/artist/${id}`} className="block">
      <div className="group relative min-w-[280px] bg-white rounded-3xl shadow-md p-4 overflow-hidden transition duration-300 hover:scale-[1.03] ">
        <div className="absolute top-6 right-6 z-20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 bg-black text-white text-xs px-3 py-1 rounded-full">
          ⭐ {rating}
        </div>

        {/* Image */}
        <div className="relative w-full h-56 rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="w-full aspect-square object-cover rounded-t-xl"w
          />
        </div>

        {/* Content */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{style}</p>
          <p className="text-sm mt-2 text-gray-700">{sold}+ Sold</p>
        </div>
      </div>
    </Link>
  );
}
