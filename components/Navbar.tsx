import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const NavLinks = [
    { href: "/inspiration", text: "Inspiration" },
    { href: "/projects", text: "Find Projects" },
    { href: "/development", text: "Learn Development" },
    { href: "/career", text: "Career" },
    { href: "/hiring", text: "Find Developers" },
  ];
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/Dribbble-Logo.png" width={116} height={43} alt="logo" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
