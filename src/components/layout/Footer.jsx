export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <h3 className="font-bold text-xl">
            Kroysoft
          </h3>

          <p className="text-slate-400 text-sm mt-2">
            Modern Websites & Software Solutions
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

      <div className="text-center text-slate-500 text-sm mt-8">
        © {new Date().getFullYear()} Kroysoft. All rights reserved.
      </div>
    </footer>
  );
}