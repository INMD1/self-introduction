import React from "react";
const NavBar = () => {
  return (
    <>
      <nav style={{ backgroundColor: "rgb(254, 253, 237, 0.8)" }}>
        <div className=" flex  md:justify-around  justify-start p-4">
          <a href="/" className="flex space-x-3">
            <span
              className="self-center text-xl font-semibold whitespace-nowrap"
              style={{ fontWeight: "bold" }}
            >
              INMD1의 나른한곳
            </span>
          </a>
          {/* PC 부분 */}
          <div className="mobile_hidden font-bold">
            <ul className="flex">
              <li>
                <a
                  href="#home"
                  className="block py-2 px-3 "
                  aria-current="page"
                >
                  Home&About
                </a>
              </li>
              <li>
                <a href="#skill" className="block py-2 px-3">
                  Skill
                </a>
              </li>
              <li>
                <a href="#project" className="block py-2 px-3 ">
                  Project
                </a>
              </li>
              <li>
                <a href="#!" className="block py-2 px-3   ">
                  More?
                </a>
              </li>
            </ul>
          </div>
          {/* 모바일일 부분 */}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
