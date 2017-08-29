// import 'promise-polyfill';
// import 'isomorphic-fetch';
import { h, render } from "preact";
import styles from "./styles";
import Provider from "preact-context-provider";

const headerLinks = [
  { link: "/about", text: "about" },
  { link: "/os", text: "open source" },
  { link: "/hire", text: "hire" },
  { link: "https://medium.com/@tahini", text: "writing", ext: true }
];

const footerLinks = [
  { link: "https://github.com/hew", text: "github", ext: true },
  { link: "https://twitter.com/tahini", text: "twitter", ext: true },
];

const links = {
  headerLinks,
  footerLinks
};

let root;
function init() {
  let App = require("./components/app").default;
  root = render(
    <Provider links={links} axs={styles}>
      <App />
    </Provider>,
    document.body,
    root
  );
}

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV === "production") {
  require("./pwa");
}

// in development, set up HMR:
if (module.hot) {
  require("preact/devtools"); // turn this on if you want to enable React DevTools!
  module.hot.accept("./components/app", () => requestAnimationFrame(init));
}

init();
