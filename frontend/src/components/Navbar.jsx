import { Link, useLocation } from "react-router";
import { PlusIcon } from "lucide-react";

import logo from "./../../public/paperloom-logo.svg";

const Navbar = () => {
  const location = useLocation();

  return (
    <header>
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <img src={logo} alt="logo paperloom image" className="w-14 md:w-18" />
          </Link>

          {/* only show button in homepage */}
          {location.pathname === '/' ? (
            <div className="flex items-center gap-4">
              <Link to="/create" className="btn btn-primary hover:outline-2 hover:outline-primary/50 active:outline-primary">
                <PlusIcon className="size-5" />
                <span>New Note</span>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
