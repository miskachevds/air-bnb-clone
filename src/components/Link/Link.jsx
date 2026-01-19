import styles from './Link.module.scss';

const Link = ({ text, style, icon }) => {
  return (
    <a 
      href='#'
      className={`${styles.link} ${style === 'light' ? styles['link--light'] : ''}`}  // Используем отдельный класс
    >
      {icon && <img src={icon} alt="" />}
      {text}
    </a>
  );
};


export default Link;