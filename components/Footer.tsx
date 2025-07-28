import { logoutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";

const Footer = ({ user, type }: FooterProps) => {
  const handleLogout = async () => {
    await logoutAccount();
  };

  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user.firstName[0]}</p>
      </div>
      <div className={type === "mobile" ? "footer_email-mobile" : "footer_email"}>
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {user.firstName} {user.lastName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">{user.email}</p>
      </div>
      <button className={type === "mobile" ? "footer_image-mobile" : "footer_image"} onClick={handleLogout}>
        <Image src="/icons/logout.svg" fill alt="logout" />
      </button>
    </footer>
  );
};

export default Footer;
