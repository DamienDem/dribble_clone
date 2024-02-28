import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar';
import '@testing-library/jest-dom'


describe('Navbar Component', () => {
  const navLinks = [
    { href: '/inspiration', text: 'Inspiration' },
    { href: '/projects', text: 'Find Projects' },
    { href: '/development', text: 'Learn Development' },
    { href: '/career', text: 'Career' },
    { href: '/hiring', text: 'Find Developers' },
  ];

  beforeEach(() => {
    render(<Navbar />);
  });

  test('display logo', () => {
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  test('display links', () => {
    navLinks.forEach(link => {
      const navLink = screen.getByText(link.text);
      expect(navLink).toBeInTheDocument();
    });
  });

  test('navigation links have correct href attributes', () => {
    navLinks.forEach(link => {
      const navLink = screen.getByText(link.text);
      expect(navLink).toHaveAttribute('href', link.href);
    });
  });
});