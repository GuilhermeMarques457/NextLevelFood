import Link from "next/link";
import logo from "../../assets/logo.png";
import Navigation from "./navigation";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <MainHeaderBackground></MainHeaderBackground>
      <Link href="/" className={classes.logo}>
        <Image src={logo} alt="A plate with food on it" priority />
        NextLevel Food
      </Link>
      <Navigation></Navigation>
    </header>
  );
}
