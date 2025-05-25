import { useState } from 'react';
import type { FAQItem } from '../../types/faq';
import '../../styles/_faq.scss';

interface FAQProps {
  items: FAQItem[];
  title?: string;
  className?: string;
  maxItems?: number;
}

const FAQ = ({ 
  items, 
  title = 'Frequently Asked Questions',
  className = '',
  maxItems 
}: FAQProps) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  // Limit the number of items if maxItems is provided
  const displayedItems = maxItems ? items.slice(0, maxItems) : items;

  return (
    <section className={`faq-section ${className}`}>
      <h2 className="section-title">{title}</h2>
      <div className="faq-accordion">
        {displayedItems.map((item) => (
          <div key={item.id} className="faq-item">
            <button
              className={`faq-question ${activeAccordion === item.id ? 'active' : ''}`}
              onClick={() => toggleAccordion(item.id)}
              aria-expanded={activeAccordion === item.id}
              aria-controls={`faq-answer-${item.id}`}
            >
              {item.question}
              <span className="accordion-icon">
                {activeAccordion === item.id ? '−' : '+'}
              </span>
            </button>
            <div 
              id={`faq-answer-${item.id}`}
              className={`faq-answer ${activeAccordion === item.id ? 'active' : ''}`}
              aria-hidden={activeAccordion !== item.id}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
