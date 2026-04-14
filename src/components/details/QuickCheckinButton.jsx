function QuickCheckinButton({ icon: Icon, imageSrc, imageAlt, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-2xl border border-slate-200 bg-white px-6 py-7 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-[#d5dfda] hover:bg-[#f8fbfa]"
    >
      {imageSrc ? (
        <img src={imageSrc} alt={imageAlt || ''} className="mx-auto h-10 w-10 object-contain" />
      ) : (
        <Icon className="mx-auto text-4xl text-slate-700" />
      )}
      <p className="mt-4 text-2xl font-medium text-slate-800">{label}</p>
    </button>
  );
}

export default QuickCheckinButton;
