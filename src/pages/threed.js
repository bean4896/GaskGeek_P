import Navbar from "../components/navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
function threed() {
  return (
    <div>
      <Navbar />
      <div className="body-container mt-10">
        {/* Side bar*/}
        <div className="flex flex-auto flex-shrink-0 flex-col mt-10">
          <div className="fixed top-[9em] z-10 flex w-14 flex-col rounded-lg bg-white border-gray-200 border-[1px] dark:bg-dmbgblackie dark:border-neutral-500 dark:border-[1px] shadow-xl transition-all duration-300 hover:w-15 md:w-60">
            <div className="flex md:px-3 flex-grow flex-col justify-between overflow-y-auto overflow-x-hidden">
              <ul className="flex flex-col space-y-1 py-4">
                <li>
                  <AnchorLink href="#Model" className="group sidebar-row">
                    <span className="ml-4 inline-flex items-center justify-center">
                      <svg
                        className="sidebar-icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                      </svg>
                    </span>
                    <span className="sidebar-text">Model</span>
                    <span className="countnum">4</span>
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#Texture" className="group sidebar-row">
                    <span className="ml-4 inline-flex items-center justify-center">
                      <svg
                        className="sidebar-icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="sidebar-text">Texture</span>
                    <span className="countnum">4</span>
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#Render" className="group sidebar-row">
                    <span className="ml-4 inline-flex items-center justify-center">
                      <svg
                        className="sidebar-icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path d="M13 7H7v6h6V7z" />
                        <path
                          fillRule="evenodd"
                          d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                          clipRule="evenodd"
                        />
                      </svg>{" "}
                    </span>
                    <span className="sidebar-text">Render</span>
                    <span className="countnum">4</span>
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#Artists" className="group sidebar-row">
                    <span className="ml-4 inline-flex items-center justify-center">
                      <svg
                        className="sidebar-icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          fillRule="evenodd"
                          d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                          clipRule="evenodd"
                        />
                      </svg>{" "}
                    </span>
                    <span className="sidebar-text">Artists</span>
                    <span className="countnum">6</span>
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#Plugins" className="group sidebar-row">
                    <span className="ml-4 inline-flex items-center justify-center">
                      <svg
                        className="sidebar-icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          fillRule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>{" "}
                    </span>
                    <span className="sidebar-text">Plugins</span>
                    <span className="countnum">4</span>
                  </AnchorLink>
                </li>
              </ul>
            </div>
          </div>
          {/* Right side*/}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            layout
            className="ml-14 mb-10 h-full md:ml-64"
          >
            <h1 className="pagetitle ml-6">3D Resources</h1>

            {/* Model box*/}

            <div className="rightbar-container ml-2">
              <div className="pt-10" id="Model"></div>
              <div className="py-10">
                <h2 className="subtitle font-bold my-4 ml-4">Model</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 pl-4 gap-4">
                  <a
                    href="https://sketchfab.com/3d-models/popular"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-sketchfab.png"
                        alt="SketchFab icon"
                      ></img>
                      <h3 className="threed-title">SketchFab</h3>
                    </div>
                    <p className="threed-content">
                      A very active and good 3D community with a lot of creative
                      3D assets.
                    </p>
                  </a>

                  <a
                    href="https://thehappytoolbox.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-happytoolbox.png"
                        alt="Happy Tool Box icon"
                      ></img>
                      <h3 className="threed-title">Happy Tool Box</h3>
                    </div>
                    <p className="threed-content">
                      High-quality Softedge models.
                    </p>
                  </a>

                  <a
                    href="https://dimensiva.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-dimensiva.png"
                        alt="Dimensiva icon"
                      ></img>
                      <h3 className="threed-title">Dimensiva</h3>
                    </div>
                    <p className="threed-content">
                      A good site to find high-quality furnitures models.
                    </p>
                  </a>

                  <a
                    href="https://www.cgtrader.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-cgtrader.png"
                        alt="CGtrader icon"
                      ></img>
                      <h3 className="threed-title">CG Trader</h3>
                    </div>
                    <p className="threed-content">
                      Largest 3D model marketplace.
                    </p>
                  </a>
                </div>
              </div>

              {/*Texture box*/}
              <div className="pt-10" id="Texture"></div>
              <div className="py-10">
                <h1 className="subtitle font-bold my-4 ml-4">Texture</h1>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 pl-4 gap-4">
                  <a
                    href="https://quixel.com/megascans/"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-megascan.png"
                        alt="MegaScans icon"
                      ></img>
                      <h3 className="threed-title">MegaScans</h3>
                    </div>
                    <p className="threed-content">
                      Camera scanned realistic Textures.
                    </p>
                  </a>

                  <a
                    href="https://www.cgbookcase.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-cgbookcase.png"
                        alt="CG bookcase icon"
                      ></img>
                      <h3 className="threed-title">CG bookcase</h3>
                    </div>
                    <p className="threed-content">Free PBR Textures.</p>
                  </a>

                  <a
                    href="https://polyhaven.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-polyheaven.png"
                        alt="Poly Heaven icon"
                      ></img>
                      <h3 className="threed-title">Poly Heaven</h3>
                    </div>
                    <p className="threed-content">
                      Create a new project from a variety of starting templates.
                    </p>
                  </a>

                  <a
                    href="https://www.poliigon.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-poliigon.jpg"
                        alt="poliigon icon"
                      ></img>
                      <h3 className="threed-title">Poliigon</h3>
                    </div>
                    <p className="threed-content">
                      Poliigon provides high quality 3D assets that support the
                      world's leading 3D artists.
                    </p>
                  </a>
                </div>
              </div>

              {/* Render box*/}
              <div className="pt-10" id="Render"></div>
              <div className="py-10">
                <h1 className="subtitle font-bold my-4 ml-4">Render</h1>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 pl-4 gap-4">
                  <a
                    href="https://home.otoy.com/render/octane-render/"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-corona.jpg"
                        alt="corona icon"
                      ></img>
                      <h3 className="threed-title">Corona</h3>
                    </div>
                    <p className="threed-content">
                      Corona delivers high-quality, physically based shading for
                      production rendering.
                    </p>
                  </a>

                  <a
                    href="https://home.otoy.com/render/octane-render/"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-otoy.png"
                        alt="octane icon"
                      ></img>
                      <h3 className="threed-title">Octane</h3>
                    </div>
                    <p className="threed-content">
                      Create a new project from a variety of starting templates.
                    </p>
                  </a>

                  <a
                    href="https://www.maxon.net/en/redshift"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-redshift.webp"
                        alt="redshift icon"
                      ></img>
                      <h3 className="threed-title">Redshift</h3>
                    </div>
                    <p className="threed-content">
                      GPU Rendering—World's Fastest Biased Renderer.
                    </p>
                  </a>

                  <a
                    href="https://www.chaos.com/vray/collection"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-vray.jpg"
                        alt="Vray icon"
                      ></img>
                      <h3 className="threed-title">Vray</h3>
                    </div>
                    <p className="threed-content">
                      Spectrally correct GPU render engine.
                    </p>
                  </a>
                </div>
              </div>

              {/* Artists box*/}
              <div id="Artists" className="pt-10"></div>
              <div className="py-10">
                <h1 className="subtitle font-bold my-4 ml-4">
                  Artists and Teams
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 pl-4 gap-4">
                  <a
                    href="https://sixnfive.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-sixnfive.png"
                        alt="Six N. Five icon"
                      ></img>
                      <h3 className="threed-title">Six N. Five</h3>
                    </div>
                    <p className="threed-content">
                      Multidisciplinary design studio, designed Windows 11.
                    </p>
                  </a>

                  <a
                    href="https://www.zarki.net/"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-zarki.jpg"
                        alt="Six N. Five icon"
                      ></img>
                      <h3 className="threed-title">Tim Zarki</h3>
                    </div>
                    <p className="threed-content">
                      3D artist and multidisciplinary designer working with Meta
                      Reality Labs.
                    </p>
                  </a>

                  <a
                    href="https://www.behance.net/zaoeyo"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-zaoeyo.jpg"
                        alt="Zaoeyo icon"
                      ></img>
                      <h3 className="threed-title">Zaoeyo</h3>
                    </div>
                    <p className="threed-content">
                      A self-taught Visual Designer, one of the leader of 3D
                      industry in China.
                    </p>
                  </a>

                  <a
                    href="https://mvsm.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-mvsm.png"
                        alt="Six N. Five icon"
                      ></img>
                      <h3 className="threed-title">Man VS Machine</h3>
                    </div>
                    <p className="threed-content">
                      World class multidimensional creative studio.
                    </p>
                  </a>

                  <a
                    href="https://buck.co/"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-buck.jpg"
                        alt="Six N. Five icon"
                      ></img>
                      <h3 className="threed-title">Buck</h3>
                    </div>
                    <p className="threed-content">
                      World class multidimensional creative studio.
                    </p>
                  </a>

                  <a
                    href="https://dribbble.com/omaraqildesign"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-omara.webp"
                        alt="Omara icon"
                      ></img>
                      <h3 className="threed-title">Omara</h3>
                    </div>
                    <p className="threed-content">Imagine Picasso in 3D.</p>
                  </a>
                </div>
              </div>

              {/* Plugin box*/}
              <div id="Plugins" className="pt-10"></div>
              <div className="py-10">
                <h1 className="subtitle font-bold my-4 ml-4">Plugins</h1>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 pl-4">
                  <a
                    href="https://greyscalegorilla.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-gorilla.png"
                        alt="Greyscale Gorilla icon"
                      ></img>
                      <h3 className="threed-title">Greyscale Gorilla</h3>
                    </div>
                    <p className="threed-content">
                      Full and instant access to our Materials libraries.
                    </p>
                  </a>

                  <a
                    href="https://insydium.ltd/products/x-particles/"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-xparticles.png"
                        alt="xparticles icon"
                      ></img>
                      <h3 className="threed-title">X Particles</h3>
                    </div>
                    <p className="threed-content">
                      The solution to satisfy all your particle needs: Cloth,
                      Smoke, Fire, Fluids, Grains and Dynamics.
                    </p>
                  </a>

                  <a
                    href="https://www.alphapixel.net/trypogen-c4d/"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-tryogen.jpg"
                        alt="Trypogen icon"
                      ></img>
                      <h3 className="threed-title">Trypogen</h3>
                    </div>
                    <p className="threed-content">
                      An object generator plugin that creates abstract geometry
                      from objects in Cinema 4D.
                    </p>
                  </a>

                  <a
                    href="https://www.3dquakers.com/forester-for-cinema-4d/"
                    target="_blank"
                    rel="noreferrer"
                    className="group threed-box"
                  >
                    <div className="items-center">
                      <img
                        className="max-w-[2.5rem] rounded-3xl mb-2"
                        src="./images/3d-forester.png"
                        alt="forester icon"
                      ></img>
                      <h3 className="threed-title">Forester</h3>
                    </div>
                    <p className="threed-content">
                      Creation of natural elements such as trees, plants, rocks.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default threed;
