"use server";

import { Meal } from "@/models/meal";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

function isInvalidText(text: string) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState: any, formData: any) {
  const meal: Meal = {
    title: formData.get("title"),
    creator_email: formData.get("email"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    slug: "",
    id: "",
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "Invalid Input" };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  // To all pages
  // revalidatePath( "/", "layout");
  redirect("/meals");
}
