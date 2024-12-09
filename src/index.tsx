import ReactDOM from "react-dom";
import "./index.css";
import { RecoilRoot } from 'recoil';
import App from "./components/App";
import 'semantic-ui-css/semantic.min.css'


ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);
