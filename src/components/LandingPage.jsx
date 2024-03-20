import React from "react";
import Menu from "./Navbar";
import Shop from "./Shop";

const LandingPage = () => {
    // const flavors = [
    //     'Dark Chocolate + Sea Salt',
    //     'Dark Chocolate + Blueberries',
    //     'Dark Chocolate + Cherries',
    //     'Dark Chocolate + Pumpkin Spice',
    //     'Dark Chocolate + Pomegranate',
    //     'Milk Chocolate',
    //     'Milk Chocolate + Cherries',
    //     'Milk Chocolate + Currants',
    //     'Milk Chocolate Sampler',
    //     'Dark Chocolate Sampler',
    //     'Variety Sampler',
    // ];


    return (
        <div>
            <Menu />
            <Shop />
        </div>
    );
}

export default LandingPage;