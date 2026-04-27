export default function PageHeader() {
  return (
    <div
      id="pageheader-container"
      className="flex items-center justify-between px-6 py-8 font-instrument"
    >
      <div id="pageheader-left" className="flex flex-col">
        <h2 id="pageheader-title" className="text-2xl font-bold text-[var(--color-teks)]">
          Dashboard
        </h2>
        <div
          id="breadcrumb-links"
          className="flex items-center space-x-2 mt-1.5 text-xs font-medium"
        >
          <span id="breadcrumb-home" className="text-[var(--color-teks-samping)] hover:text-[var(--color-biru)] cursor-pointer transition-colors">
            Dashboard
          </span>
          <span id="breadcrumb-separator" className="text-[var(--color-garis)]">
            /
          </span>
          <span id="breadcrumb-current" className="text-[var(--color-teks-samping)] opacity-70">
            Order List
          </span>
        </div>
      </div>
      
      <div id="action-button">
        <button
          id="add-button"
          className="bg-[var(--color-hijau)] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-green-100 hover:opacity-90 transition-all transform active:scale-95"
        >
          + Add Button
        </button>
      </div>
    </div>
  );
}