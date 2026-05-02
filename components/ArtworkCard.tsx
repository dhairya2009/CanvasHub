import Image from "next/image";
import Link from "next/link";

export default function ArtworkCard({
  key,
  image,
  title,
  artist,
  style,
  price,
  rating,
}: {
  key: number;
  image: string;
  title: string;
  artist: string;
  style: string;
  price: string;
  rating: number;
}) {
  return (
    <div className="group break-inside-avoid bg-white rounded-3xl overflow-hidden border-transparent shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={700}
          className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-medium shadow-sm">
          ⭐ {rating}
        </div>

        {/* Hover Overlay Button */}
        <Link href={`/artwork/${title}`}>
          <button className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 text-xs font-medium rounded-full bg-black text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
            Quick View
          </button>
        </Link>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title + Price */}
        <div className="flex justify-between items-start gap-3">
          <div>
            <h3 className="font-semibold text-sm md:text-base leading-tight text-black">
              {title}
            </h3>

            <p className="text-xs text-gray-500 mt-1">by {artist}</p>
          </div>

          <p className="font-semibold text-sm whitespace-nowrap text-black">
            {price}
          </p>
        </div>

        {/* Style Tag */}
        <div className="mt-3">
          <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700">
            {style}
          </span>
        </div>

        {/* Bottom Buttons */}
        <div className="mt-4 flex gap-2">
          <button className="flex-1 py-2 rounded-full bg-black text-white text-xs font-medium hover:opacity-90 transition">
            Add to Cart
          </button>

          <button className="px-4 py-2 rounded-full border text-xs font-medium hover:bg-gray-100 transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
