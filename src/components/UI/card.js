import classes from "./card.module.css";
export const Card=(props)=>{
    return (
        <Card class={`${classes.card} ${classes.chil}` }>
{props.children}
        </Card>
    );
};