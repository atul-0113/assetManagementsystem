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
      <img src={image ||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dAr4nnYucbZaV3JyyKl_htTZUwmyk-h9fYh33dwBDA&s"} alt={"title"} className={classes.image} />
      <div className={classes.text}>
        <p className={classes.title}>{title}</p>
        <p className={classes.subtitle}>{department}</p>
        <p className={classes.subtitle}>{role}</p>
      </div>
    </div>
    )
}