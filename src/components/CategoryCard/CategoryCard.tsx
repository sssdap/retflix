import { Link } from 'react-router-dom';
import '../../styles/_cards.scss';

interface CategoryCardProps {
  category: string | { name: string; id?: string | number };
  to?: string;
  className?: string;
  icon?: string;
}

const CategoryCard = ({ category, to = '/', className = '', icon }: CategoryCardProps) => {
  // Get the category name from either string or object
  const getCategoryName = () => {
    if (typeof category === 'string') return category;
    return category.name || 'Category';
  };

  // Map categories to their respective emoji icons
  const getCategoryIcon = (categoryName: string) => {
    const lowerName = categoryName.toLowerCase();
    
    if (lowerName.includes('action')) return '🚀';
    if (lowerName.includes('comedy')) return '😂';
    if (lowerName.includes('horror')) return '👻';
    if (lowerName.includes('romance')) return '❤️';
    if (lowerName.includes('sci-fi') || lowerName.includes('scifi')) return '👽';
    if (lowerName.includes('thriller')) return '🎭';
    if (lowerName.includes('drama')) return '🎬';
    if (lowerName.includes('fantasy')) return '✨';
    if (lowerName.includes('documentary')) return '🌍';
    if (lowerName.includes('adventure')) return '🧭';
    if (lowerName.includes('animation')) return '🖍️';
    if (lowerName.includes('crime')) return '🔫';
    if (lowerName.includes('mystery')) return '🕵️';
    if (lowerName.includes('sci') || lowerName.includes('science')) return '🔬';
    
    return '🎬'; // Default icon
  };
  
  const categoryName = getCategoryName();
  const categorySlug = categoryName.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link 
      to={`${to}?category=${categorySlug}`}
      className={`category-card ${className}`}
      aria-label={`Browse ${categoryName} category`}
    >
      <div className="category-icon">
        <span role="img" aria-hidden="true">
          {icon || getCategoryIcon(categoryName)}
        </span>
      </div>
      <span className="category-name">{categoryName}</span>
    </Link>
  );
};

export default CategoryCard;
