import React from "react";
import { Download, ShieldCheck, Zap, Leaf } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
        <Leaf
          className="absolute top-10 right-10 text-green-600 rotate-12"
          size={120}
        />
        <Leaf
          className="absolute bottom-20 left-10 text-green-600 -rotate-12"
          size={80}
        />
      </div>

      <div className="container mx-auto px-6 lg:flex lg:items-center lg:gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-6">
            <ShieldCheck size={16} />
            <span>v1.0.0 Now Available for Android</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Recycle. Reuse. <br />
            <span className="text-green-600">Earn Rewards.</span>
          </h1>

          <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Join thousands of heroes saving the planet. Scan waste with AI,
            discover creative reuse ideas, and grow your Eco-Wallet with every
            action.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            {/* The APK Download Button */}
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1nOO8EIZF3WumYjzMhkhl_-iWr6IkDM3J/view?usp=sharing"
              className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-green-200 hover:scale-105"
              download
            >
              <Download size={24} />
              Download APK
            </a>

            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <Zap size={16} className="text-yellow-500" />
              <span>Direct Install • 105MB</span>
            </div>
          </div>

          {/* Social Proof / Stats */}
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 border-t border-slate-100 pt-8">
            <div>
              <p className="text-2xl font-bold text-slate-900">12.5kg</p>
              <p className="text-sm text-slate-500">CO2 Saved/User</p>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <p className="text-2xl font-bold text-slate-900">50k+</p>
              <p className="text-sm text-slate-500">Items Scanned</p>
            </div>
          </div>
        </div>

        {/* Visual Content (Mockup Placeholder) */}
        <div className="lg:w-1/2 mt-16 lg:mt-0 relative flex justify-center">
          <div className="relative w-64 h-[520px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
            {/* Simple Mockup Internal UI */}
            <div className="bg-green-600 h-1/3 p-6">
              <div className="w-10 h-10 rounded-full bg-white/20 mb-4" />
              <div className="h-4 w-3/4 bg-white/30 rounded mb-2" />
              <div className="h-8 w-1/2 bg-white rounded" />
            </div>
            <div className="p-4 space-y-4">
              <div className="h-24 w-full bg-slate-100 rounded-xl" />
              <div className="h-24 w-full bg-slate-100 rounded-xl" />
            </div>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl" />
          </div>

          {/* Floating Element */}
          <div className="absolute -bottom-6 -right-4 lg:right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-50">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Zap className="text-yellow-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">+25 Points</p>
              <p className="text-xs text-slate-500">Plastic Recycled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
