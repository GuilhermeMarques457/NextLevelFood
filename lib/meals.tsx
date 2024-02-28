import { Meal } from "@/models/meal";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  // throw new Error("Loading meals fails T-T");
  // const deleteStatement = db.prepare("DELETE FROM meals WHERE id = ?");
  // const result = deleteStatement.run(9);

  return db.prepare("SELECT * FROM meals w").all();
}

export async function getMeal(slug: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal: Meal) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) throw new Error("Saving image failed!");
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
      (title, slug, image, summary, creator, creator_email, instructions)
    VALUES
      (@title, @slug, @image, @summary, @creator, @creator_email, @instructions)
  `
  ).run(meal);
}
