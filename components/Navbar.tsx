import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constant/navLinks";

const Navbar = () => {
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/Dribbble-Logo.png" width={116} height={43} alt="logo" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        <Link href="/create-project">
          <button className='flexCenter gap-3 px-4 py-3'> Share project</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
