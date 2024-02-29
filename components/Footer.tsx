import { footerLinks } from "@/constant/footerLinks";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <section className="flexStart footer">
    <div className="flex flex-col gap-12 w-full">
      <div className="flex items-start flex-col">
        <Image src="/Dribbble-Logo.png" width={116} height={38} alt="logo" />

        <p className="text-start text-sm font-normal mt-5 max-w-xs">
          Dribble is a community for developers to share project, and get hired.
        </p>
      </div>
        <div className="flex flex-wrap gap-12">
          {footerLinks.map((link) => (
            <Link href={link.link} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
    </div>
  </section>
);

export default Footer;
