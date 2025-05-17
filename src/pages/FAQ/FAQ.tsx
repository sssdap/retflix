import { useState } from 'react'
import { faqItems } from '../../data/movies'


const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id)
  }

  return (
    <div className="faq-page">
      <section className="section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqItems.map((item) => (
            <div key={item.id} className="faq-item">
              <button
                className={`faq-question ${activeAccordion === item.id ? 'active' : ''}`}
                onClick={() => toggleAccordion(item.id)}
              >
                {item.question}
              </button>
              {activeAccordion === item.id && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Ask a Question</h2>
        <div className="question-form">
          <div className="form-group">
            <label>Your Email</label>
            <input type="email" placeholder="your@email.com" disabled />
          </div>
          <div className="form-group">
            <label>Your Question</label>
            <textarea placeholder="Type your question here..." rows={5} disabled></textarea>
          </div>
          <button className="btn" disabled>
            Submit Question
          </button>
        </div>
      </section>
    </div>
  )
}

export default FAQ