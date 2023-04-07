import Link from "next/link";

const Header = () => {
  return (
    <div className="border-b border-gray-300 h-20 fixed top-0 left-0 0 w-screen bg-white z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between">
        <Link href={"/"}>Strona główna</Link>
        <div className="flex">
          <div>
            <p>Zaloguj</p>
          </div>
          <div>
            <p>Dodaj ogłoszenie</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
