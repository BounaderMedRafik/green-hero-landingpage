export function InstallGuide() {
  return (
    <section className="py-16 bg-green-900 text-white rounded-[3rem] mx-4 mb-20 overflow-hidden">
      <div className="container mx-auto px-8 lg:flex items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-6">How to Install GreenHero</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="bg-green-700 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                1
              </span>
              <p>
                Download the <strong>green-hero.apk</strong> file to your
                device.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="bg-green-700 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                2
              </span>
              <p>
                Open the file. If prompted, allow installation from{" "}
                <strong>"Unknown Sources"</strong> in your settings.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="bg-green-700 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                3
              </span>
              <p>
                Launch the app, create your Hero profile, and start scanning!
              </p>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center opacity-50">
          {/* You can put an icon or a screenshot of the android settings here */}
          <div className="border-4 border-green-700 p-6 rounded-2xl">
            <p className="text-xs font-mono uppercase tracking-widest">
              Security Settings &gt; Allow Installation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
