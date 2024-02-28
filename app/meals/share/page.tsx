"use client";
import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import MealsFormSubmit from "@/components/shared/form-submit-button";
import { useFormState } from "react-dom";

export default function Share() {
  // If share meals is trigged the state will receive the returned value, else it's null
  const [state, formAction] = useFormState(shareMeal, null);

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              required
              rows={10}
            ></textarea>
          </p>
          <ImagePicker label="Submit your Image" name="image"></ImagePicker>
          {state ? <p>{state.message}</p> : undefined}
          <p className={classes.actions}>
            <MealsFormSubmit>Share Meal</MealsFormSubmit>
          </p>
        </form>
      </main>
    </>
  );
}
