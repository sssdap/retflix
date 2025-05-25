// Если интерфейс Plan определен в types/plan.ts
import type { Plan } from '../types/plan';

interface PlanCardProps {
  plan: Plan;
}

const PlanCard = ({ plan }: PlanCardProps) => {
  return (
    <div className={`plan-card ${plan.isPopular ? 'popular' : ''}`}>
      {plan.isPopular && <div className="popular-badge">Most Popular</div>}
      <h3 className="plan-card-title">{plan.title}</h3>
      <div className="plan-card-price">
        ${plan.price} <span>/{plan.period}</span>
      </div>
      <ul className="plan-card-features">
        {plan.features.map((feature, index) => (
          <li key={index}>
            <span className="feature-icon">✓</span> {feature}
          </li>
        ))}
      </ul>
      <button 
        className={`btn ${plan.buttonVariant ? `btn-${plan.buttonVariant}` : ''}`}
        disabled={!plan.buttonText}
      >
        {plan.buttonText || 'Select Plan'}
      </button>
    </div>
  );
};

export default PlanCard;