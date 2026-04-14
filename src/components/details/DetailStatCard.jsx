function DetailStatCard({ value, label }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm">
      <p className="text-4xl font-extrabold tracking-tight text-[#2d5d50] sm:text-5xl">{value}</p>
      <p className="mt-4 text-lg font-medium text-[#637391] sm:text-xl">{label}</p>
    </article>
  );
}

export default DetailStatCard;

