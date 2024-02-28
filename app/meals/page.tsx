import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals.grid";
import { getMeals } from "@/lib/meals";
import { Meal } from "@/models/meal";

import { Suspense } from "react";

async function FetchingMeals() {
  const meals = (await getMeals()) as Meal[];

  return <MealsGrid meals={meals}></MealsGrid>;
}

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community!",
};

export default async function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          {" "}
          Delicous meals, created{" "}
          <span className={classes.highlight}>by YOU</span>
        </h1>
        <p>Choose your favorite recipe and cook yourself. It is EASY and FUN</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        {/* We're telling react to show this fallback content when the child component is loading (in the case is fetching mock data) */}
        <Suspense fallback={<p className="loading">Searching for Meals...</p>}>
          <FetchingMeals></FetchingMeals>
        </Suspense>
      </main>
    </>
  );
}
