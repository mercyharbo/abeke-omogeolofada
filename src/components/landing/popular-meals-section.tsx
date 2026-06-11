import { meals } from "./data";
import { FullMenuPricing } from "./full-menu-pricing";
import { MealCard } from "./meal-card";
import { SectionHeading } from "./section-heading";

export function PopularMealsSection() {
  const lgMeals = meals.slice(0, 3);
  const twoXlMeals = meals.slice(0, 4);
  const threeXlMeals = meals.slice(0, 5);

  return (
    <section id="menu" className="bg-[#FFF8DF] px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <SectionHeading eyebrow="Customer Favorites" title="Popular Meals" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:hidden">
          {lgMeals.map((meal) => (
            <MealCard key={meal.name} meal={meal} />
          ))}
        </div>
        <div className="hidden gap-5 2xl:grid 2xl:grid-cols-4 3xl:hidden">
          {twoXlMeals.map((meal) => (
            <MealCard key={meal.name} meal={meal} />
          ))}
        </div>
        <div className="hidden gap-5 3xl:grid 3xl:grid-cols-5">
          {threeXlMeals.map((meal) => (
            <MealCard key={meal.name} meal={meal} />
          ))}
        </div>
        <FullMenuPricing />
      </div>
    </section>
  );
}
