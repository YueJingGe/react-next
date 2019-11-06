import Link from "next/link";
export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <h1 className="header__title">HELLO NEXT</h1>
      </Link>
    </header>
  );
}
