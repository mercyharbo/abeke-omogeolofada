import { meals } from "./data";
import { FullMenuPricing } from "./full-menu-pricing";
import { MealCard } from "./meal-card";
import { SectionHeading } from "./section-heading";

export function PopularMealsSection() {
  return (
    <section id="menu" className="bg-[#FFF8DF] px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <SectionHeading eyebrow="Customer Favorites" title="Popular Meals" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-5">
          {meals.map((meal) => (
            <MealCard key={meal.name} meal={meal} />
          ))}
        </div>
        <FullMenuPricing />
      </div>
    </section>
  );
}
