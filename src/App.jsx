import image_web_desc from "../public/images/image-web-3-desktop.jpg";
import image_web_mob from "../public/images/image-web-3-mobile.jpg";
import img1 from "../public/images/image-retro-pcs.jpg";
import img2 from "../public/images/image-top-laptops.jpg";
import img3 from "../public/images/image-gaming-growth.jpg";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="primary-header">
        <div className="nav-container">
          <a href="">
            <svg width="65" height="40" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.016 39.2c.317 0 .574-.093.77-.28.196-.187.294-.457.294-.812v-1.82c0-.448.033-.84.098-1.176.065-.336.145-.663.238-.98l5.09-18.122 4.822 18.57c.112.384.193.682.243.895l.023.099c.047.215.07.453.07.714v1.82c0 .355.098.625.294.812.196.187.453.28.77.28h10.696c.299 0 .55-.093.756-.28.205-.187.308-.457.308-.812v-1.82c0-.373.023-.705.07-.994.047-.29.135-.677.266-1.162L54.04 7.224c.299-1.25.765-2.254 1.4-3.01.635-.756 1.363-1.311 2.184-1.666l.672-.308c.336-.168.574-.331.714-.49.14-.159.21-.369.21-.63 0-.336-.117-.607-.35-.812C58.637.103 58.287 0 57.82 0h-8.904c-.467 0-.817.103-1.05.308-.233.205-.35.476-.35.812 0 .261.06.471.182.63.121.159.313.303.574.434l.616.224c1.12.41 1.871.999 2.254 1.764s.453 1.661.21 2.688l-5.535 23.486-6.477-25.81c-.133-.58-.17-1.018-.11-1.31l.026-.104c.093-.29.317-.49.672-.602l1.232-.336c.299-.112.518-.257.658-.434a.986.986 0 0 0 .21-.63c0-.355-.112-.63-.336-.826C41.468.098 41.122 0 40.656 0H24.78c-.448 0-.789.098-1.022.294-.233.196-.35.471-.35.826 0 .224.06.415.182.574.121.159.322.294.602.406l1.176.42c.261.093.462.243.602.448.14.205.294.607.462 1.204l1.751 6.742-5.553 19.475L16.128 4.48c-.147-.49-.194-.898-.14-1.223l.028-.135c.093-.345.327-.574.7-.686l1.456-.336c.504-.168.756-.504.756-1.008 0-.336-.112-.602-.336-.798C18.368.098 18.022 0 17.556 0H1.344C.896 0 .56.098.336.294.112.49 0 .756 0 1.092c0 .224.056.434.168.63.112.196.29.35.532.462l1.232.392c.355.13.625.308.812.532.187.224.345.579.476 1.064l7.84 30.408c.112.43.191.751.238.966.047.215.07.462.07.742v1.82c0 .355.103.625.308.812.205.187.467.28.784.28h10.556Zm34.804.7c1.195 0 2.263-.29 3.206-.868a6.338 6.338 0 0 0 2.24-2.338c.55-.98.826-2.04.826-3.178 0-1.157-.275-2.212-.826-3.164a6.325 6.325 0 0 0-2.24-2.282c-.943-.57-2.011-.854-3.206-.854-1.157 0-2.207.285-3.15.854a6.325 6.325 0 0 0-2.24 2.282c-.55.952-.826 2.007-.826 3.164 0 1.139.275 2.198.826 3.178.55.98 1.297 1.76 2.24 2.338.943.579 1.993.868 3.15.868Z"
                fill="#00001A"
              />
            </svg>
          </a>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="mobile-nav-toggle"
            aria-expanded={`${isOpen}`}
            aria-controls="primary-navigation"
          >
            <span className="visually-hidden">Menu</span>
          </button>
          <nav>
            <ul
              data-visible={`${isOpen}`}
              id="primary-navigation"
              className="primary-navigation"
            >
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">New</a>
              </li>
              <li>
                <a href="">Popular</a>
              </li>
              <li>
                <a href="">Trending</a>
              </li>
              <li>
                <a href="">Categories</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="grid">
          <div className="grid-item1">
            <picture className="picture">
              <source media="(min-width: 35em)" srcset={image_web_desc} />
              <img src={image_web_mob} alt="" />
            </picture>
            <div className="bright-future-text">
              <p className="text">The Bright Future of Web 3.0?</p>
            </div>
            <div className="read-more">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="button">read more</button>
            </div>
          </div>
          <div className="grid-item2">
            <h1>New</h1>
            <div className="group underline">
              <p className="color-white">Hydrogen VS Electric Cars</p>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className="group underline">
              <p className="color-white">The Downsides of AI Artistry</p>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="group">
              <p className="color-white">Is VC Funding Drying Up?</p>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </section>
        <section className="flex">
          <div className="flex-group">
            <img src={img1} alt="" />
            <div>
              <h1>01</h1>
              <h3>Reviving Retro PCs</h3>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className="flex-group">
            <img src={img2} alt="" />
            <div>
              <h1>02</h1>
              <h3>Top 10 Laptops of 2022</h3>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>
          <div className="flex-group">
            <img src={img3} alt="" />
            <div>
              <h1>03</h1>
              <h3>The Growth of Gaming</h3>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
