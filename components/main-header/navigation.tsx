"use client";
import Link from "next/link";
import classes from "./navigation.module.css";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link
            href="/meals"
            className={path.startsWith("meals") ? classes.active : undefined}
          >
            Browse Meals
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            className={path === "community" ? classes.active : undefined}
          >
            Foodies Community
          </Link>
        </li>
      </ul>
    </nav>
  );
}
