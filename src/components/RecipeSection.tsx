
import styles from '@/styles/recipe.module.css';
import Recipe from './Recipe';

const RecipeSection = () => {
  const sample = [
    {
      srcImage: "/images/sample-image.jpg",
      title: "Recipe 1",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typese"
    },
    {
      srcImage: "/images/sample-image.jpg",
      title: "Recipe 2",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typese"
    },
    {
      srcImage: "/images/sample-image.jpg",
      title: "Recipe 3",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typese"
    }
  ]
  return (
    <div className={`${styles["recipe-section"]}`}>
      <div className={`${styles["recipe-section-container"]}`}>
        {sample.map((d) => (
          <Recipe 
            srcImage={d.srcImage}
            title={d.title}
            description={d.description}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeSection;