// "use client";
import React, { useState, ReactNode } from "react";
// import "@/styles/styles.css";
// import Link from "next/link";

interface HeaderProps {
  signUpButton: ReactNode; // This specifies that signUpButton is a React node
}

const Header: React.FC<HeaderProps> = ({ signUpButton }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mb-4">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
          {/* <a href="/" aria-label="Company" title="Company" className="inline-flex items-center mr-8">
            <svg className="w-8 text-deep-purple-accent-400" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Company</span>
          </a> */}
          <p className="flex items-center hidden space-x-8 lg:flex">
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Product
            </a>

            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Features
            </a>

            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Pricing
            </a>

            <a
              href="/"
              aria-label="About us"
              title="About us"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              About us
            </a>
          </p>
        </div>
        <p className="flex items-center hidden space-x-8 lg:flex">
          <a
            href="/"
            aria-label="Sign in"
            title="Sign in"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Sign in
          </a>

          <button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#ff595a]  focus:shadow-outline focus:outline-none">
            {signUpButton}
          </button>
        </p>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
              <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
              <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a href="/" aria-label="Company" title="Company" className="inline-flex items-center">
                      <svg
                        className="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Company</span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <p className="space-y-4">
                    <a
                      href="/"
                      aria-label="Our product"
                      title="Our product"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Product
                    </a>

                    <a
                      href="/"
                      aria-label="Our product"
                      title="Our product"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Features
                    </a>

                    <a
                      href="/"
                      aria-label="Product pricing"
                      title="Product pricing"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Pricing
                    </a>

                    <a
                      href="/"
                      aria-label="About us"
                      title="About us"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      About us
                    </a>

                    <a
                      href="/"
                      aria-label="Sign in"
                      title="Sign in"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Sign in
                    </a>

                    <button
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      {signUpButton}
                    </button>
                  </p>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

// const Header: React.FC<HeaderProps> = ({ signUpButton }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   const menuHeight = menuOpen ? "auto" : "0"; // Set it to 'auto' when open

//   const menuStyle = {
//     height: menuHeight,
//     overflow: "hidden",
//     transition: "height 0.3s ease", // Transition the height property
//   };
//   const linkStyles = {
//     display: "flex",
//     fontWeight: 500,
//     alignItems: "center",
//     color: "#333",
//     marginTop: "14px",
//     justifyContent: "center",
//   };
//   return (
//     <header className=" body-font fixed w-full z-50">
//       <div className="custom-container">
//         <div className="text-[#1F1F1F] body-font">
//           <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//             <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-4">
//               <Link className="mr-5 hover:text-[#FF595A]" href="/">
//                 Home
//               </Link>
//               <Link className="mr-5 hover:text-[#FF595A]" href="/about">
//                 About
//               </Link>
//               <Link className="mr-5 hover:text-[#FF595A]" href="/features">
//                 Features
//               </Link>
//               <Link className="mr-5 hover:text-[#FF595A]" href="/pricing">
//                 Pricing
//               </Link>
//             </nav>
//             <Link href="/auth/signin">
//               {" "}
//               <button
//                 className="inline-flex items-centerborder-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
//                 style={{ marginRight: "10px" }}
//               >
//                 Sign in
//               </button>
//             </Link>

//             <Link href="/auth/signup">
//               {" "}
//               <button
//                 className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-[#fe5000] rounded text-base mt-4 md:mt-0"
//                 style={{ backgroundColor: "rgb(255, 89, 90)", color: "white" }}
//               >
//                 {signUpButton}
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div id="header">
//         <div style={linkStyles} id="divs">
//           <span className=" text-[#FF595A] text-2xl font-bold cursor-pointer" style={{ marginRight: "70px" }}>
//             OvaSite
//           </span>

//           <div>
//             <Link
//               className="hover:text-[#fe5000] cursor-pointer text-[#1F1F1F]"
//               href="/auth/signin"
//               onClick={closeMenu}
//             >
//               Sign In
//             </Link>
//           </div>
//           <div>
//             <Link href="/auth/signup">
//               <button
//                 style={{ marginRight: "30px" }}
//                 className="items-center bg-[#FF595A] border-0 py-2 px-6 focus:outline-none
//     hover:bg-[#fe5000] rounded text-[#001233]  font-bold"
//                 onClick={closeMenu}
//               >
//                 Get Started
//                 {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
//       <path d="M5 12h14M12 5l7 7-7 7"></path>
//     </svg>*/}
//               </button>
//             </Link>
//           </div>
//         </div>{" "}
//         <span id="span" onClick={toggleMenu}>
//           &#9776;
//         </span>
//       </div>

//       <div>
//         <ul id="ul" style={menuStyle}>
//           <li>
//             <Link className="hover:text-[#fe5000] cursor-pointer text-[#1F1F1F]" href="/home" onClick={closeMenu}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link className="hover:text-[#fe5000] cursor-pointer text-[#1F1F1F]" href="/About" onClick={closeMenu}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link className="hover:text-[#fe5000] cursor-pointer text-[#1F1F1F]" href="/features" onClick={closeMenu}>
//               Features
//             </Link>
//           </li>
//           <li>
//             {" "}
//             <Link className="hover:text-[#fe5000]  cursor-pointer text-[#1F1F1F]" href="/pricing" onClick={closeMenu}>
//               Pricing
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;
