export default function Footer() {
  return (
    <footer className="bg-teal-600 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © 2025 MiniShop. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm">
          <a href="/privacy" className="hover:underline hover:text-white/80 transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline hover:text-white/80 transition">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline hover:text-white/80 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
