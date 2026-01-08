const categories = [
  { name: "Organic Seeds", color: "bg-green-100" },
  { name: "Solar Energy", color: "bg-yellow-100" },
  { name: "Eco Tools", color: "bg-blue-100" },
  { name: "Bio-Compost", color: "bg-orange-100" },
];

export function MarketPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold">Spend your Eco-Points</h2>
            <p className="text-slate-600 mt-2">
              Trade your earned credits for sustainable goods.
            </p>
          </div>
          <button className="text-green-600 font-bold mt-4 md:mt-0">
            Browse Marketplace →
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`${cat.color} aspect-video rounded-2xl flex items-center justify-center font-bold text-slate-800`}
            >
              {cat.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
