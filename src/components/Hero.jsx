import { ChefHat } from "lucide-react";

export default function Hero({ onOrderNow }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 to-transparent" />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-xs text-emerald-700">
              <ChefHat size={16} />
              امروز تازه و آماده ارسال
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              سفارش آنلاین غذاهای خانگی برای دورهمی و مراسم
            </h1>
            <p className="text-neutral-600 md:text-lg">
              از پیش‌غذا تا دسر، همه با مواد اولیه تازه و با کیفیت. با چند کلیک سفارش دهید و در زمان دلخواه تحویل بگیرید.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOrderNow}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold hover:bg-emerald-700"
              >
                مشاهده منو و سفارش
              </button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-semibold hover:border-emerald-300 hover:bg-emerald-50"
              >
                مشاوره برای مراسم
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"
                alt="Catering dishes"
                className="h-72 w-full object-cover md:h-[420px]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block h-24 w-24 rounded-2xl bg-emerald-200/60 blur-2xl" />
            <div className="absolute -top-6 -right-6 hidden md:block h-24 w-24 rounded-full bg-emerald-300/50 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
