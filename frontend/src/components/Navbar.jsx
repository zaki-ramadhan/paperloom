import { Link, useLocation } from "react-router";
import { PlusIcon } from "lucide-react";

import logo from "/paperloom-logo.svg";
import Button from "./Button";

const Navbar = ({ children = null }) => {
  const location = useLocation();

  return (
    <header>
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <Link to={"/"} >
            <img src={logo} alt="logo paperloom image" className="w-14 md:w-18" title="Logo" />
          </Link>

          {/* only show button in homepage */}
          {location.pathname === '/' ? (
            <div className="flex items-center gap-4">
              <Button isLink to="/create">
                <PlusIcon className="size-5" />
                <span>New Note</span>
              </Button>
            </div>
          ) : children}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
