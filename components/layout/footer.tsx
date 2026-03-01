export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 mt-auto">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          <p className="font-medium text-center md:text-left">
            © {new Date().getFullYear()} ML Core v4.2 Enterprise. Built for high-scale intelligence.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <a href="#" className="hover:text-blue-600 transition-colors font-semibold">
              Documentation
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors font-semibold">
              Security
            </a>
            <a
              href="https://github.com/Mochrks"
              className="group flex items-center gap-2 font-bold text-slate-900 dark:text-white"
            >
              <span className="p-1 px-2 bg-blue-600/10 text-blue-600 rounded">OSS</span>
              <span className="group-hover:underline underline-offset-4">@mochrks</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
