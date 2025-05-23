import { createRoot } from "react-dom/client";
// import TailwindCSS from "./Tailwind.CSS";
import './tailwind.css';
import frameworkData from "./framework.json";
import FrameworkList from "./FrameworkList.jsx";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter.jsx";
import Responsive from "./ResponsiveDesign.jsx";
import products from "./products1.jsx";

createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkList/> */}
            {/* <FrameworkListSearchFilter/> */}
            <products/>
            <Responsive/>
        </div>
    )