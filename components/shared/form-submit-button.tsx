"use client";

import { useFormStatus } from "react-dom";

export default function FormSubmitButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>{pending ? "Submitting..." : children}</button>
  );
}
