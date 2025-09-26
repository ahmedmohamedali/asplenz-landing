
export default function Footer(){
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <div>© {new Date().getFullYear()} Asplenz — Enterprise Governance Stack</div>
        <div className="flex items-center gap-4">
          <a href="mailto:founders@asplenz.com" className="hover:text-white">founders@asplenz.com</a>
          <a href="https://www.linkedin.com" target="_blank" className="hover:text-white" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
