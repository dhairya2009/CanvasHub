import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-400 to-blue-600 text-white mt-24">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">CanvasHub</h2>

            <p className="text-blue-100 mt-4 text-sm leading-6">
              Discover unique handmade artworks, connect with talented artists,
              and shop premium art supplies in one creative marketplace.
            </p>

            <div className="mt-5 text-sm text-blue-100 space-y-2">
              <p>123 Creative Street, Mumbai, India</p>
              <p>+91 98765 43210</p>
              <p>support@canvashub.com</p>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-lg">Shop</h3>

            <div className="mt-4 space-y-3 text-sm text-blue-100">
              <Link
                href="/explore"
                className="block hover:text-white transition"
              >
                Explore Art
              </Link>

              <Link
                href="/supplies"
                className="block hover:text-white transition"
              >
                Art Supplies
              </Link>

              <Link href="/cart" className="block hover:text-white transition">
                Cart
              </Link>

              <Link
                href="/checkout"
                className="block hover:text-white transition"
              >
                Checkout
              </Link>
            </div>
          </div>

          {/* Artists */}
          <div>
            <h3 className="font-semibold text-lg">Artists</h3>

            <div className="mt-4 space-y-3 text-sm text-blue-100">
              <Link
                href="/artists"
                className="block hover:text-white transition"
              >
                Browse Artists
              </Link>

              <Link href="/sell" className="block hover:text-white transition">
                Become an Artist
              </Link>

              <Link
                href="/artists/top"
                className="block hover:text-white transition"
              >
                Top Rated
              </Link>

              <Link
                href="/custom-order"
                className="block hover:text-white transition"
              >
                Custom Orders
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg">Company</h3>

            <div className="mt-4 space-y-3 text-sm text-blue-100">
              <Link href="/about" className="block hover:text-white transition">
                About Us
              </Link>

              <Link
                href="/contact"
                className="block hover:text-white transition"
              >
                Contact
              </Link>

              <Link
                href="/privacy-policy"
                className="block hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link href="/terms" className="block hover:text-white transition">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-blue-100">
          <p>© 2026 CanvasHub. All rights reserved.</p>

          <div className="flex gap-6 flex-wrap">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>

            <Link href="/refund-policy" className="hover:text-white transition">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
