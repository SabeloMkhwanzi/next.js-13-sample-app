import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Sabelo's Project</Link>
        </div>
        <div className="links">
          <Link href="/">About</Link>
          <Link href="/about/team">Our Team</Link>
          <Link href="/code/repos">Code</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
