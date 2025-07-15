import styles from '@/styles/recipe.module.css';

interface RecipeProps {
  srcImage: string;
  title: string;
  description: string;
}

const Recipe = ({srcImage, title, description}: RecipeProps) => {
  return (
    <div className={`${styles.recipe}`}>
      <img className={`${styles["recipe-image"]}`} src={srcImage} />
      <div className={`${styles["recipe-details"]}`}>
        <span className={`${styles["recipe-details-title"]}`}>{title}</span>
        <span className={`${styles["recipe-details-description"]}`}>{description}</span>
        <a className={`${styles["recipe-details-see-more"]}`}>See more</a>
      </div>
    </div>
  );
};

export default Recipe;