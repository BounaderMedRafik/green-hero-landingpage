const steps = [
  {
    title: "Scan",
    desc: "Point your camera at any waste item. Our AI identifies it in milliseconds.",
    icon: "📸",
  },
  {
    title: "Decide",
    desc: "Choose to Recycle via local guides or Reuse with creative DIY ideas.",
    icon: "💡",
  },
  {
    title: "Earn",
    desc: "Complete actions to earn Eco-Points and track your CO2 reduction.",
    icon: "💰",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Become a Hero in 3 Steps</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
