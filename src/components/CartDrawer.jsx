import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";

export default function CartDrawer({ open, onClose, items = [], increment, decrement, removeItem, total = 0, formatCurrency }) {
  return (
    <div className={`fixed inset-0 z-40 ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md transform bg-white shadow-xl transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-full flex-col">
          <header className="flex items-center justify-between border-b px-4 py-4">
            <div className="flex items-center gap-2">
              <ShoppingCart size={20} className="text-emerald-700" />
              <h3 className="text-lg font-bold">سبد خرید</h3>
            </div>
            <button onClick={onClose} className="rounded-lg px-3 py-1 text-sm hover:bg-neutral-100">بستن</button>
          </header>

          <div className="flex-1 overflow-y-auto px-4 py-3">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center text-neutral-500">
                <ShoppingCart className="mb-3" />
                <p>سبد خرید شما خالی است.</p>
                <p className="text-xs">برای شروع، از منو یک غذا اضافه کنید.</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="h-16 w-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold leading-tight">{item.name}</p>
                          <p className="text-xs text-neutral-500">{formatCurrency(item.price)}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="rounded-lg p-1 text-neutral-500 hover:bg-neutral-100 hover:text-red-600"
                          aria-label={`حذف ${item.name}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <div className="inline-flex items-center gap-2 rounded-lg border px-1 py-0.5">
                          <button
                            onClick={() => decrement(item.id)}
                            className="rounded-md p-1 hover:bg-neutral-100"
                            aria-label="کاهش"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="min-w-[2ch] text-center text-sm tabular-nums">{item.qty}</span>
                          <button
                            onClick={() => increment(item.id)}
                            className="rounded-md p-1 hover:bg-neutral-100"
                            aria-label="افزایش"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <p className="text-sm font-semibold">
                          {formatCurrency(item.qty * item.price)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <footer className="border-t p-4">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="text-neutral-600">مبلغ کل</span>
              <span className="font-extrabold">{formatCurrency(total)}</span>
            </div>
            <button
              disabled={items.length === 0}
              className="w-full rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-neutral-300"
            >
              ثبت نهایی سفارش
            </button>
            <p className="mt-2 text-center text-xs text-neutral-500">پرداخت در محل یا آنلاین • زمان‌بندی ارسال هنگام ثبت نهایی</p>
          </footer>
        </div>
      </aside>
    </div>
  );
}
