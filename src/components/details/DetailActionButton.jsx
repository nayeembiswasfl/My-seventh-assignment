function DetailActionButton({ icon: Icon, label, tone = 'default' }) {
  const toneClasses =
    tone === 'danger'
      ? 'text-[#ff4b4b] hover:border-[#ffd8d8] hover:bg-[#fff5f5]'
      : 'text-slate-700 hover:border-[#d5dfda] hover:bg-[#f9fbfa]';

  return (
    <button
      type="button"
      className={`flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-xl font-semibold shadow-sm transition ${toneClasses}`}
    >
      <Icon className="text-2xl" />
      {label}
    </button>
  );
}

export default DetailActionButton;

