// Если интерфейс Plan определен в movies.ts
import type { Plan } from '../data/movies';

interface PlanCardProps {
  plan: Plan;
}

const PlanCard = ({ plan }: PlanCardProps) => {
  return (
    <div className="plan-card">
      <h3 className="plan-card-title">{plan.title}</h3>
      <div className="plan-card-price">
        ${plan.price} <span>/{plan.period}</span>
      </div>
      <ul className="plan-card-features">
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="btn" disabled>
        Select Plan
      </button>
    </div>
  );
};

export default PlanCard;