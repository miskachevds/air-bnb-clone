import styles from './Card.module.scss';

const Card = () => {
    return ( 
        <article className="card">
            <img src="./img/objects/01.jpg" srcset="./img/objects/01@2x.jpg 2x" alt="Alt" />
        </article>
     );
}
 
export default Card;