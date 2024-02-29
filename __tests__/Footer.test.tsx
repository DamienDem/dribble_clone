import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { footerLinks } from "@/constant/footerLinks";
import Footer from "@/components/Footer";
describe("Footer Component", () => {
  test("display the logo", () => {
    render(<Footer />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  test("display the description", () => {
    render(<Footer />);
    const descriptionText = screen.getByText(
      "Dribble is a community for developers to share project, and get hired."
    );
    expect(descriptionText).toBeInTheDocument();
  });

  test("display the links with href", () => {
    render(<Footer />);
    footerLinks.forEach((link) => {
      const footerLink = screen.getByText(link.title).parentElement;

      expect(footerLink).toBeInTheDocument();
      expect(footerLink).toHaveAttribute("href", link.link);
    });
  });
});
