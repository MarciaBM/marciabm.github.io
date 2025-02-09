import React, {StrictMode} from "react";
import {BaseProvider, LightTheme} from "baseui";
import {Provider as StyletronProvider} from "styletron-react";
import {Client as Styletron} from "styletron-engine-atomic";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import "../public/assets/font-awesome/css/all.css";
import ReactDOM from "react-dom";

const engine = new Styletron();
ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>,
  document.getElementById("root")
);

// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//         <StyletronProvider value={engine}>
//             <BaseProvider theme={LightTheme}>
//                 <App/>
//             </BaseProvider>
//         </StyletronProvider>,
//     </StrictMode>,
// )

