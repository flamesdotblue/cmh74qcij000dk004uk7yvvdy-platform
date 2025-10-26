import { useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuGrid from "./components/MenuGrid";
import CartDrawer from "./components/CartDrawer";

const MENU = [
  {
    id: "kabob-platter",
    name: "پلت کباب",
    description: "کباب مخلوط با برنج زعفرانی، گوجه کبابی و سبزی تازه",
    price: 420000,
    image:
      "https://images.unsplash.com/photo-1604908176997-431622b3f7d5?q=80&w=1600&auto=format&fit=crop",
    tags: ["محبوب", "گوشت"]
  },
  {
    id: "chicken-barberry",
    name: "زرشک پلو با مرغ",
    description: "ران مرغ زعفرانی با سس زرشک و پلو ایرانی",
    price: 360000,
    image:
      "https://images.unsplash.com/photo-1604908554232-de6157c8b82a?q=80&w=1600&auto=format&fit=crop",
    tags: ["کلاسیک", "مرغ"]
  },
  {
    id: "veggie-stew",
    name: "خورش سبزی گیاهی",
    description: "سبزی تازه، لوبیا قرمز و لیموعمانی با چلو",
    price: 330000,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
    tags: ["گیاهی", "سالم"]
  },
  {
    id: "saffron-fish",
    name: "ماهی زعفرانی",
    description: "فیله ماهی تُرد با سس لیمو و برنج تایلندی",
    price: 480000,
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1600&auto=format&fit=crop",
    tags: ["دریایی"]
  }
];

function formatCurrency(num) {
  return new Intl.NumberFormat("fa-IR", { style: "currency", currency: "IRR" })
    .format(num)
    .replace("ریال", "تومان");
}

export default function App() {
  const [cart, setCart] = useState({});
  const [openCart, setOpenCart] = useState(false);

  const count = useMemo(
    () => Object.values(cart).reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );

  const total = useMemo(
    () => Object.values(cart).reduce((sum, item) => sum + item.qty * item.price, 0),
    [cart]
  );

  const addToCart = (dish) => {
    setCart((prev) => {
      const existing = prev[dish.id];
      const nextQty = existing ? existing.qty + 1 : 1;
      return { ...prev, [dish.id]: { ...dish, qty: nextQty } };
    });
  };

  const increment = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: { ...prev[id], qty: prev[id].qty + 1 }
    }));
  };

  const decrement = (id) => {
    setCart((prev) => {
      const current = prev[id];
      if (!current) return prev;
      const nextQty = current.qty - 1;
      const copy = { ...prev };
      if (nextQty <= 0) {
        delete copy[id];
        return copy;
      }
      copy[id] = { ...current, qty: nextQty };
      return copy;
    });
  };

  const removeItem = (id) => {
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header onOpenCart={() => setOpenCart(true)} cartCount={count} />
      <main>
        <Hero onOrderNow={() => {
          const el = document.getElementById("menu");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }} />
        <section id="menu" className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="text-2xl font-bold">منوی امروز</h2>
              <p className="text-sm text-neutral-500">قیمت‌ها به تومان</p>
            </div>
            <MenuGrid menu={MENU} onAdd={addToCart} formatCurrency={formatCurrency} />
          </div>
        </section>
      </main>

      <CartDrawer
        open={openCart}
        onClose={() => setOpenCart(false)}
        items={Object.values(cart)}
        increment={increment}
        decrement={decrement}
        removeItem={removeItem}
        total={total}
        formatCurrency={formatCurrency}
      />

      <footer className="border-t bg-white">
        <div className="container mx-auto px-4 py-6 text-sm text-neutral-600 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} کترینگ شما - کیفیت خانگی، سرعت حرفه‌ای</p>
          <p>ساعت سفارش‌گیری: هر روز ۱۰ تا ۲۲</p>
        </div>
      </footer>
    </div>
  );
}
