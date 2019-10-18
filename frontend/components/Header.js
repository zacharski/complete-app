import Link from 'next/link'
import React from "react";
const linkStyle = {
  color: "#006600", 
    fontfamily: "arial",
    textdecoration: "none",

  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/search">
        <a style={linkStyle}>Find A Campground</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
  )
}
