import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./components/App";
import theme from './theme';

import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />,
    </ThemeProvider>,
document.getElementById("root"));
