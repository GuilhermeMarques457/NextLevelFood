type Props = {
  params: {
    mealSlug: string;
  };
};

export default function MealDetail({ params }: Props) {
  return (
    <h1 style={{ color: "white", textAlign: "center" }}>
      Meal number {params.mealSlug}
    </h1>
  );
}
