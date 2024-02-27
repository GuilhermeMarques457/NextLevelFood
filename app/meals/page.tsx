import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals.grid";

export default function Meals() {
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
        <MealsGrid meals={[]}></MealsGrid>
      </main>
    </>
  );
}
