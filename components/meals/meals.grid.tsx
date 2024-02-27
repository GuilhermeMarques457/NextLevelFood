import { Meal } from "@/models/meal";
import classes from "./meals-grid.module.css";
import MealItem from "./meal-item";

type Props = {
  meals: Meal[];
};

export default function MealsGrid({ meals }: Props) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem meal={meal}></MealItem>
        </li>
      ))}
    </ul>
  );
}
