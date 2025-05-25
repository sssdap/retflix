import PlansComponent from '../../components/Plans';
import type { Plan } from '../../types/plan';

const Plans = () => {
  // Mock plans data
  const plans: Plan[] = [
    {
      id: 'basic',
      title: 'Basic',
      price: 9.99,
      period: 'month',
      features: [
        'HD available',
        'Watch on 1 screen at a time',
        'Cancel anytime'
      ],
      buttonText: 'Subscribe Now',
      buttonVariant: 'outline'
    },
    {
      id: 'standard',
      title: 'Standard',
      price: 13.99,
      period: 'month',
      features: [
        'HD available',
        'Watch on 2 screens at the same time',
        'Cancel anytime',
        'First month free'
      ],
      isPopular: true,
      buttonText: 'Try 1 Month Free',
      buttonVariant: 'primary'
    },
    {
      id: 'premium',
      title: 'Premium',
      price: 17.99,
      period: 'month',
      features: [
        '4K + HDR',
        'Watch on 4 screens at the same time',
        'Cancel anytime',
        'First month free',
        'All our movies and TV shows'
      ],
      buttonText: 'Try 1 Month Free',
      buttonVariant: 'outline'
    }
  ];
  
  return (
    <div className="plans-page">
      <PlansComponent 
        plans={plans} 
        title="Choose Your Plan"
        className="plans-page-section"
        showTitle={true}
      />

      <section className="section">
        <h2>Payment Information</h2>
        <div className="payment-form">
          <div className="card-preview">
            <div className="card-logo">VISA</div>
            <div className="card-number">•••• •••• •••• 1234</div>
            <div className="card-details">
              <div className="card-name">YOUR NAME</div>
              <div className="card-expiry">MM/YY</div>
            </div>
          </div>
          
          <form>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input 
                type="text" 
                id="cardNumber" 
                placeholder="1234 5678 9012 3456" 
                maxLength={19}
                pattern="[0-9\s]{13,19}"
                inputMode="numeric"
                autoComplete="cc-number"
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiration Date</label>
                <input 
                  type="text" 
                  id="expiryDate" 
                  placeholder="MM/YY" 
                  maxLength={5}
                  pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                  inputMode="numeric"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="cvv">
                  CVV
                  <span className="info-tooltip" title="3 or 4 digit code on the back of your card">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  </span>
                </label>
                <input 
                  type="password" 
                  id="cvv" 
                  placeholder="•••" 
                  maxLength={4}
                  pattern="[0-9]{3,4}"
                  inputMode="numeric"
                  autoComplete="cc-csc"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="cardName">Name on Card</label>
              <input 
                type="text" 
                id="cardName" 
                placeholder="John Doe" 
                autoComplete="cc-name"
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-block" 
              disabled
              aria-label="Complete payment"
            >
              Complete Payment
              <span className="btn-icon">→</span>
            </button>
            
            <div className="payment-security">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>Secure payment with SSL encryption</span>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Plans