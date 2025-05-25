import { Link } from 'react-router-dom';
import PlanCard from '../PlanCard';
import type { Plan } from '../../types/plan';
import '../../styles/_plans.scss';

interface PlansProps {
  plans: Plan[];
  title?: string;
  className?: string;
  showTitle?: boolean;
}

const Plans = ({ 
  plans, 
  title = 'Choose Your Plan',
  className = '',
  showTitle = true
}: PlansProps) => {
  return (
    <section className={`plans-section ${className}`}>
      {showTitle && <h2 className="section-title">{title}</h2>}
      
      <div className="plans-container">
        <div className="plans-grid">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
        
        {showTitle && (
          <div className="plans-footer">
            <p className="plans-note">All plans include a 30-day money-back guarantee</p>
            <Link to="/plans" className="btn btn-outline">
              Compare all plans
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Plans;
