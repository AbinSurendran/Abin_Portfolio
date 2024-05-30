import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/AbinSurendran" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/abin-s-988071258/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/abin_surendran_?igsh=YzFlbTVtdm9zaHdx" },
  { icon: <FaTwitter />, path: "" },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconsStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
