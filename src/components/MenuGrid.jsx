import { Plus } from "lucide-react";

export default function MenuGrid({ menu = [], onAdd, formatCurrency }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {menu.map((dish) => (
        <article
          key={dish.id}
          className="group relative overflow-hidden rounded-2xl border bg-white transition hover:shadow-lg"
        >
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img
              src={dish.image}
              alt={dish.name}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold leading-tight">{dish.name}</h3>
              <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                {formatCurrency(dish.price)}
              </span>
            </div>
            <p className="mt-2 line-clamp-2 text-sm text-neutral-600">{dish.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {dish.tags?.map((t) => (
                <span key={t} className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-end">
              <button
                onClick={() => onAdd(dish)}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                <Plus size={16} /> افزودن به سبد
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
