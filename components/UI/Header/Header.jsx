import React from "react";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import TopBar from "./TopBar/TopBar";
export default function Header() {
  return (
    <>
      <TopBar />
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}
