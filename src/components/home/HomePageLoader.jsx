function HomePageLoader() {
  return (
    <section className="content-shell py-16 sm:py-24">
      <div className="rounded-[32px] border border-slate-200 bg-white/70 px-6 py-20 text-center shadow-sm">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-[#d3ddd8] border-t-[#2d5d50]" />
        <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">Loading your friendships</h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-[#6c7a93] sm:text-lg">
          Pulling in your friend list and dashboard stats from JSON.
        </p>
      </div>
    </section>
  );
}

export default HomePageLoader;

