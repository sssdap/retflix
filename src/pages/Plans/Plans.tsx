import PlanCard from '../../components/PlanCard'
import { plans } from '../../data/movies'

const Plans = () => {
  return (
    <div className="plans-page">
      <section className="section">
        <h2>Choose Your Plan</h2>
        <div className="plans-container">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Payment Information</h2>
        <div className="payment-form">
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" placeholder="1234 5678 9012 3456" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Expiration Date</label>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input type="text" placeholder="123" />
            </div>
          </div>
          <div className="form-group">
            <label>Name on Card</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <button className="btn btn-block" disabled>
            Complete Payment
          </button>
        </div>
      </section>
    </div>
  )
}

export default Plans