import classes from "./travels.module.css";
import { Card } from "../UI/card";
const Data_tours=[
    {
        id: 't1',
        name:'Shundarban',
        describe: 'It is the worlds largest mangrove',
        price: 1000,
    },
    {
        id: 't2',
        name:'Bandarban',
        describe: 'It is situated in Bangladesh',
        price: 1200,
    },
];

export const Availableseats=()=>{
const TourList=Data_tours.map(t=><li key={t.id}>{t.name}</li>);
return(
<section className={classes.tours}>
   <Card>
    <ul>
    
        {TourList}

    </ul>
    </Card>
</section>
);
};