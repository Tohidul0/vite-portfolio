import React from 'react';
import { FaReact } from "react-icons/fa6";
import "./Teckstack.css";

function Teckstack(props) {
    return (
        <div className="teckStack Education" id="TeckStack">
            <h1 className="ED">TeckStack</h1>
            <div className="row row-cols-2 row-cols-md-4 g-4">
            

            <div class="timg col d-flex justify-content-center">
                <img src="/src/assets/Images/skill/vscode-icons_file-type-html.svg" alt=""/>
            </div>
            <div class="timg col d-flex justify-content-center">
                <img src="/src/assets/Images/skill/vscode-icons_file-type-css.svg" alt=""/>
            </div>
            <div class="timg col d-flex justify-content-center">
                <img src="/src/assets/Images/skill/vscode-icons_file-type-js-official.svg" alt=""/>
            </div>
            <div class="timg col d-flex justify-content-center">
                <img src="/src/assets/Images/skill/logos_bootstrap.svg" alt=""/>
            </div>
            <div class="timg col d-flex justify-content-center">
                <img src="/src/assets/Images/skill/vscode-icons_file-type-tailwind.svg" alt=""/>
            </div>
            <div class="timg col d-flex justify-content-center">
                <img src="/src/assets/Images/skill/vscode-icons_file-type-vscode.svg" alt=""/>
            </div>
            <div class="timg col d-flex justify-content-center">
                <img src="/src/assets/Images/skill/c--logo-icon-17.png" alt=""/>
            </div>
           

        </div>
        

    </div>
    );
}

export default Teckstack;