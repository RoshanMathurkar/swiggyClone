const Header = () => {
  return (
    <div className="h-20 w-full shadow-md px-20 flex justify-around ">
      <img
        className="w-16 m-2 p-2"
        src="https://www.cointab.in/wp-content/uploads/2022/08/Swiggy-Logo.1.png"
        alt="logo"
      />
      <ul className="flex items-center float-right gap-14 font-bold text-gray-400">
        <li>
          <div className="hover:text-orange-400 flex items-center gap-2">
            <span>
              <img
                className="w-4 items-center hover:text-orange-400"
                src="https://cdn.iconscout.com/icon/free/png-512/free-magnifier-1439746-1214318.png?f=webp&w=256"
                alt="search-icon"
              />
            </span>
            <span>Search</span>
          </div>
        </li>
        <li className="hover:text-orange-400">
          <div className="relative hover:text-orange-400 gap-2">
            <span className="flex gap-1">
              <img
                className="w-6"
                src="https://img.icons8.com/?size=80&id=kVBdklGxyanA&format=png"
              />
              Offers
            </span>
            <span className="absolute top-[-0.5rem] text-xs text-orange-400 ml-16">
              New
            </span>
          </div>
        </li>
        <li className="hover:text-orange-400">
          <div className="hover:text-orange-400 flex items-center gap-2">
            <img
              className="w-6"
              src="https://img.icons8.com/?size=48&id=nCCnwaJeqDHI&format=png"
            />
            <span>Help</span>
          </div>
        </li>
        <li>
          <div className="hover:text-orange-400 flex items-center gap-2">
            <img
              className="w-4"
              src="https://img.icons8.com/?size=50&id=26211&format=png"
            />
            <span>Sign In</span>
          </div>
        </li>
        <li>
          <div className="hover:text-orange-400 flex items-center gap-2">
            <img
              className="w-6"
              src="https://img.icons8.com/?size=64&id=ii6Lr4KivOiE&format=png"
            />
            <span>Cart</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
