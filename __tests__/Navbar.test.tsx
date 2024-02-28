import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";
import "@testing-library/jest-dom";
import { navLinks } from "@/constant/navLinks";

describe("Navbar Component", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test("display logo", () => {
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  test("display links", () => {
    navLinks.forEach((link) => {
      const navLink = screen.getByText(link.text);
      expect(navLink).toBeInTheDocument();
    });
  });

  test("navigation links have correct href attributes", () => {
    navLinks.forEach((link) => {
      const navLink = screen.getByText(link.text);
      expect(navLink).toHaveAttribute("href", link.href);
    });
  });
});
