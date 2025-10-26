import { ChefHat, ShoppingCart } from "lucide-react";

export default function Header({ onOpenCart, cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
              <ChefHat size={20} />
            </div>
            <div>
              <p className="font-bold leading-tight">کترینگ بهار</p>
              <p className="text-xs text-neutral-500">سرو با عشق • ارسال سریع</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#menu" className="text-neutral-700 hover:text-emerald-700">منو</a>
            <a href="#about" className="text-neutral-700 hover:text-emerald-700">درباره ما</a>
            <a href="#contact" className="text-neutral-700 hover:text-emerald-700">تماس</a>
          </nav>

          <button
            onClick={onOpenCart}
            className="relative inline-flex items-center gap-2 rounded-xl border bg-white px-3 py-2 text-sm font-medium hover:border-emerald-300 hover:bg-emerald-50"
            aria-label="Cart"
          >
            <ShoppingCart size={18} />
            <span>سبد خرید</span>
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-emerald-600 px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
