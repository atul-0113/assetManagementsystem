import classes from "./UserCard.module.scss"
interface IPropsUser{
    title: string;
    department: string;
    role?:string;
    image?: string|any
}
export const UserCard = ({title,department,role,image}:IPropsUser) =>{
    return(
    <div className={classes.card}>
      <img src={image ||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dAr4nnYucbZaV3JyyKl_htTZUwmyk-h9fYh33dwBDA&s"} alt={"title"} className={classes.card__image} />
      <div className={classes.card__text}>
        <h2 className={classes.card__title}>{title}</h2>
        <p className={classes.card__subtitle}>{department}</p>
        <p className={classes.card__subtitle}>{role}</p>
      </div>
    </div>
    )
}