export default function ArtistsLoading() {
  return (
    <div className="pb-24">
      <div className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="h-3 w-32 rounded bg-parchment/10 animate-pulse" />
          <div className="mt-4 h-16 w-80 rounded bg-parchment/10 animate-pulse" />
          <div className="mt-5 h-4 w-96 rounded bg-parchment/10 animate-pulse" />
        </div>
      </div>
      <div className="section-pad">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 h-9 w-64 rounded bg-parchment/10 animate-pulse" />
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="overflow-hidden border border-parchment/20">
                <div className="aspect-[4/3] bg-parchment/10 animate-pulse" />
                <div className="flex items-center gap-2.5 p-3">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-parchment/10 animate-pulse" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-3 w-3/4 rounded bg-parchment/10 animate-pulse" />
                    <div className="h-2 w-1/2 rounded bg-parchment/10 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
