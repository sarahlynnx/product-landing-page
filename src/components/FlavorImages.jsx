import dcb1 from '../images/dcb1.svg';
import dcb2 from '../images/dcb2.svg';
import dcb3 from '../images/dcb3.svg';
import dcb4 from '../images/dcb4.png';
import dcb5 from '../images/dcb5.svg';
import dcc1 from '../images/dcc1.svg';
import dcc2 from '../images/dcc2.svg';
import dcc3 from '../images/dcc3.svg';
import dcc4 from '../images/dcc4.png';
import dcc5 from '../images/dcc5.svg';
import dcp1 from '../images/dcp1.svg';
import dcp2 from '../images/dcp2.svg';
import dcp3 from '../images/dcp3.svg';
import dcp4 from '../images/dcp4.png';
import dcsp from '../images/dcsp.svg';
import dcss1 from '../images/dcss1.svg';
import dcss2 from '../images/dcss2.svg';
import dcss3 from '../images/dcss3.svg';
import dcss4 from '../images/dcss4.png';
import dcss5 from '../images/dcss5.svg';
import mc1 from '../images/mc1.svg';
import mc2 from '../images/mc2.svg';
import mc3 from '../images/mc3.svg';
import mc4 from '../images/mc4.png';
import mc5 from '../images/mc5.svg';
import mcc1 from '../images/mcc1.svg';
import mcc2 from '../images/mcc2.svg';
import mcc3 from '../images/mcc3.svg';
import mcc4 from '../images/mcc4.svg';
import mcc5 from '../images/mcc5.svg';
import mcsp from '../images/mcsp.svg';
import vsp from '../images/vsp.svg';
import mccm1 from '../images/mccm1.svg';
import mccm2 from '../images/mccm2.svg';
import mccm3 from '../images/mccm3.svg';
import mccm4 from '../images/mccm4.png';
import dccm1 from '../images/dccm1.svg';
import dccm2 from '../images/dccm2.svg';
import dccm3 from '../images/dccm3.svg';
import dcssm1 from '../images/dcssm1.svg';
import dcssm2 from '../images/dcssm2.svg';
import dcssm3 from '../images/dcssm3.svg';
import mcm1 from '../images/mcm1.svg';
import mcm2 from '../images/mcm2.svg';
import mcm3 from '../images/mcm3.svg';


const flavorImages = {
    'DARK CHOCOLATE': {
        'DARK CHOCOLATE + SEA SALT': {
            images: [dcss1, dcss2, dcss3, dcss4, dcss5],
            backgroundGradient: '-webkit-linear-gradient(180deg, #89d1ee 5%, #47a6cb 53%, #006e99 91%)', //done
            description: 'Eight 2oz. Bags of Undercover Quinoa – Dark Chocolate + Sea Salt', //done
            ingredients: 'Dark Chocolate (Cacao Beans, Pure Cane Sugar, Cocoa Butter, Vanilla Beans), Quinoa, Sea Salt.', //done
            warning: 'Produced on shared equipment with milk chocolate.  May contain trace amounts of Milk.', //done
            price: '31.92', 
        },
        'DARK CHOCOLATE + BLUEBERRIES': {
            images: [dcb1, dcb2, dcb3, dcb4, dcb5],
            backgroundGradient: '-webkit-linear-gradient(180deg, #26A6D7 5%, #032D8E 53%, #00298D 91%)', //done
            description: 'Eight 2oz. Bags of Undercover Quinoa – Dark Chocolate + Blueberries', //done
            ingredients: 'Dark Chocolate (Fair Trade Cacao Beans, Pure Cane Sugar, Fair Trade Cocoa Butter, Vanilla Beans), Quinoa, Dried Blueberries (Blueberries, Apple Juice Concentrate, Sunflower Oil).', //done
            warning: 'Produced on shared equipment with milk chocolate.  May contain trace amounts of Milk.', //done
            price: '31.92', 
        },
        'DARK CHOCOLATE + CHERRIES': {
            images: [dcc1, dcc2, dcc3, dcc4, dcc5],
            backgroundGradient: '-webkit-linear-gradient(180deg, #D84764 5%, #C9293D 53%, #9F202A 91%)', //done
            description: 'Eight 2oz. Bags of Undercover Quinoa – Dark Chocolate + Cherries', //done
            ingredients: 'Dark Chocolate (Cacao Beans*, Pure Cane Sugar, Cocoa Butter*, Vanilla Beans), Quinoa, Cherries, Sugar, Sunflower Oil.', //done
            warning: 'Produced on shared equipment with milk chocolate.  May contain trace amounts of Milk.', //done
            price: '31.92', 
        },
        'DARK CHOCOLATE + POMEGRANATE': {
            images: [dcp1, dcp2, dcp3, dcp4],
            backgroundGradient: '-webkit-linear-gradient(180deg, #D84764 5%, #C9293D 53%, #9F202A 91%)', //done
            description: 'Eight 2oz. Bags of Undercover Quinoa – Dark Chocolate + Pomegranate Seeds', //done
            ingredients: 'Dark Chocolate (Cacao Beans*, Pure Cane Sugar, Cocoa Butter*, Vanilla Beans), Quinoa, Pomegranate Arils (Cane Sugar, Citric Acid, Pomegranate Juice Concentrate, Natural Flavor, Lemon Juice Concentrate, Sunflower Oil).', //done
            warning: 'Produced on shared equipment with milk chocolate.  May contain trace amounts of Milk.', //done
            price: '31.92', 
        },
    },
    'MILK CHOCOLATE': {
        'MILK CHOCOLATE': {
            images: [mc1, mc2, mc3, mc4, mc5],
            backgroundGradient: '-webkit-linear-gradient(180deg, #EB8B34 5%, #D16118 53%, #C74A01 91%)', //done
            description: 'Eight 2oz. Bags of Undercover Quinoa – Milk Chocolate', //done
            ingredients: 'Milk Chocolate (Pure Cane Sugar, Full Cream Milk, Cocoa Butter, Cacao Beans, Sunflower and/or Soy Lecithin, Vanilla Beans), Quinoa.', //done
            warning: 'Contains: Milk. May Contain Soy.', //done
            price: '31.92', 
        },
        'MILK CHOCOLATE + CURRANTS': {
            images: [mcc1, mcc2, mcc3, mcc4, mcc5],
            backgroundGradient: '-webkit-linear-gradient(180deg, #B769A4 5%, #8D4DA1 53%, #610D76 91%)', //done
            description: 'Eight 2oz. Bags of Undercover Quinoa – Milk Chocolate + Currants', //done
            ingredients: 'Milk Chocolate (Pure Cane Sugar, Full Cream Milk, Cocoa Butter, Cacao Beans, Sunflower and/or Soy Lecithin, Vanilla Beans), Quinoa, Dried Zante Currants, Sunflower Oil.', //done
            warning: 'Contains: Milk. May Contain Soy.', //done
            price: '31.92', 
        },  
    },
    'SAMPLER PACKS': {
        'MILK CHOCOLATE SAMPLER': {
            images: [mcsp, mc1, mc2, mc4, mc5, mcc1, mcc2, mcc4, mcc5],
            backgroundGradient: '-webkit-linear-gradient(180deg, #EB8B34 5%, #D16118 53%, #C74A01 91%)', //done
            description: 'The Undercover Quinoa Milk Chocolate Sampler Pack includes the following (8 bags total):', //done
            contents: ['Four 2oz. Bags of Undercover Quinoa – Milk Chocolate', 'Four 2oz. Bags of Undercover Quinoa – Milk Chocolate + Currants'], //done
            warning: 'Contains: Milk. May Contain Soy.', //done
            price: '31.92', 
        },
        'DARK CHOCOLATE SAMPLER': {
            images: [dcsp, dcss1, dcss2, dcss4, dcss5, dcc1, dcc2, dcc4, dcc5, dcp1, dcp2, dcp4, dcb1, dcb2, dcb4, dcb5],
            backgroundGradient: '-webkit-linear-gradient(180deg, #89d1ee 5%, #47a6cb 53%, #006e99 91%)', //done
            description: 'The Undercover Quinoa Dark Chocolate Sampler Pack includes the following (8 bags total):', //done
            contents: ['Two 2oz. Bags of Undercover Quinoa – Dark Chocolate + Sea Salt', 'Two 2oz. Bags of Undercover Quinoa – Dark Chocolate + Blueberries', 'Two 2oz. Bags of Undercover Quinoa – Dark Chocolate + Cherries', 'Two 2oz. Bags of Undercover Quinoa – Dark Chocolate + Pomegranate'], //done
            warning: 'Produced on shared equipment with milk chocolate.  May contain trace amounts of Milk.', //done
            price: '31.92', 
        },
        'VARIETY SAMPLER': {
            images: [vsp, dcss1, dcss2, dcss4, dcss5, dcp1, dcp2, dcp4, dcc1, dcc2, dcc4, dcc5, dcb1, dcb2, dcb4, dcb5, mc1, mc2, mc4, mc5, mcc1, mcc2, mcc4, mcc5],
            backgroundGradient: '-webkit-linear-gradient(180deg, #D84764 5%, #C9293D 53%, #9F202A 91%)', //done
            description: 'The Undercover Quinoa Variety Sampler Pack includes the following (8 bags total):', //done
            contents: ['Two 2oz. Bags of Undercover Quinoa – Dark Chocolate + Sea Salt', 'Two 2oz. Bags of Undercover Quinoa – Milk Chocolate', 'One 2oz. Bag of Undercover Quinoa – Milk Chocolate + Currants', 'One 2oz. Bag of Undercover Quinoa – Dark Chocolate + Blueberries', 'One 2oz. Bag of Undercover Quinoa – Dark Chocolate + Cherries', 'One 2oz. Bag of Undercover Quinoa – Dark Chocolate + Pomegranate'], //done
            warning: 'Contains: Milk. May Contain Soy.', //done
            price: '31.92', 
        },
    },
    'MINI CRISPS': {
        'DARK CHOCOLATE + SEA SALT': {
            images: [dcssm1, dcssm2, dcssm3, dcss4],
            backgroundGradient: '-webkit-linear-gradient(180deg, #89d1ee 5%, #47a6cb 53%, #006e99 91%)', //done
            description: 'Seven 3oz. Bags of Undercover Quinoa – Dark Chocolate + Sea Salt', //done
            ingredients: 'Dark Chocolate (Cacao Beans, Pure Cane Sugar, Cocoa Butter, Vanilla Beans), Quinoa, Sea Salt.', //done
            warning: 'Produced on shared equipment with milk chocolate.  May contain trace amounts of Milk.', //done
            price: '34.99', 
        },
        'DARK CHOCOLATE + CHERRIES': {
            images: [dccm1, dccm2, dccm3, dcc4],
            backgroundGradient: '-webkit-linear-gradient(180deg, #D84764 5%, #C9293D 53%, #9F202A 91%)', //done
            description: 'Seven 3oz. Bags of Undercover Quinoa – Dark Chocolate + Cherries', //done
            ingredients: 'Dark Chocolate (Cacao Beans*, Pure Cane Sugar, Cocoa Butter*, Vanilla Beans), Quinoa, Cherries, Sugar, Sunflower Oil.', //done
            warning: 'Produced on shared equipment with milk chocolate.  May contain trace amounts of Milk.', //done
            price: '34.99', 
        },
        'MILK CHOCOLATE + CHERRIES': {
            images: [mccm1, mccm2, mccm3, mccm4],
            backgroundGradient: '-webkit-linear-gradient(180deg, #D84764 5%, #C9293D 53%, #9F202A 91%)', //done
            description: 'Seven 3oz. Bags of Undercover Quinoa – Milk Chocolate + Cherries', //done
            ingredients: 'Milk Chocolate (Pure Cane Sugar, Full Cream Milk, Cocoa Butter*, Cacao Beans*, Sunflower and/or Soy Lecithin, Vanilla Beans), Quinoa, Dried Cherries (Cherries, Sugar, Sunflower Oil).', //done
            warning: 'Contains: Milk. May Contain Soy.', //done
            price: '34.99', 
        },
        'MILK CHOCOLATE': {
            images: [mcm1, mcm2, mcm3, mc4],
            backgroundGradient: '-webkit-linear-gradient(180deg, #EB8B34 5%, #D16118 53%, #C74A01 91%)', //done
            description: 'Seven 3oz. Bags of Undercover Quinoa – Milk Chocolate', //done
            ingredients: 'Milk Chocolate (Pure Cane Sugar, Full Cream Milk, Cocoa Butter, Cacao Beans, Sunflower and/or Soy Lecithin, Vanilla Beans), Quinoa.', //done
            warning: 'Contains: Milk. May Contain Soy.', //done
            price: '34.99', 
        },
    },
}

export default flavorImages;
