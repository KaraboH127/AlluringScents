import { useMemo, useRef, useState } from 'react';

const faqItems = [
  {
    question: 'How long does delivery take?',
    answer: 'Standard delivery usually takes 2-5 business days depending on your location in South Africa. Major cities often receive orders sooner.'
  },
  {
    question: 'Where do you deliver?',
    answer: 'We deliver nationwide across South Africa, using courier options and the PAXI network where suitable.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept EFT, cash deposits, and instant EFT. Payment details are shared once your order is confirmed.'
  },
  {
    question: 'How do I place an order?',
    answer: 'Send us a message with the perfume you want. We confirm availability, share the total, and then guide you through payment and delivery.'
  },
  {
    question: 'Do you offer PAXI delivery?',
    answer: "Yes. PAXI delivery is available and is charged at the client's own cost. We share details once the order is confirmed."
  },
  {
    question: 'Can I exchange or return a product?',
    answer: 'If there is a damaged or incorrect item, contact us within 48 hours with photos so we can assist promptly. Opened perfume items cannot usually be returned unless there is a product fault.'
  },
  {
    question: 'Can I get help choosing a fragrance?',
    answer: 'Absolutely. Tell us whether you prefer floral, woody, musky, fresh, gourmand, or citrus profiles and we will recommend a fit.'
  }
];

// FAQ accordion section for the order page.
function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  const strongRules = useMemo(
    () => ({
      0: ['2-5 business days'],
      1: ['nationwide across South Africa'],
      2: ['EFT', 'cash deposits', 'instant EFT'],
      4: ['PAXI delivery is available'],
      5: ['48 hours']
    }),
    []
  );

  const renderAnswer = (answer, index) => {
    const strongPhrases = strongRules[index] ?? [];
    if (!strongPhrases.length) {
      return answer;
    }

    let result = answer;
    strongPhrases.forEach((phrase) => {
      result = result.replace(phrase, `<strong>${phrase}</strong>`);
    });

    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-sidebar-text reveal">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently asked <em>questions</em></h2>
            <p>Everything you need to know before placing an order. If you still need clarity, message us directly.</p>
            <a href="https://wa.me/27671761716?text=Hi!%20I%20have%20a%20question%20about%20Alluring%20Scents." rel="noopener noreferrer" target="_blank" className="btn btn-green btn-md btn-inline mt-28">Ask Us Directly</a>
          </div>

          <div className="reveal">
            {faqItems.map((item, index) => {
              const answerId = `faq-answer-${index + 1}`;
              const isOpen = index === openIndex;

              return (
                <div key={item.question} className={`faq-item ${isOpen ? 'open' : ''}`.trim()}>
                  <button
                    className="faq-question"
                    data-faq={index}
                    type="button"
                    aria-controls={answerId}
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                  >
                    {item.question}
                    <span className="faq-icon">+</span>
                  </button>
                  <div
                    ref={(element) => {
                      answerRefs.current[index] = element;
                    }}
                    className="faq-answer"
                    id={answerId}
                    aria-hidden={!isOpen}
                    style={{
                      maxHeight: isOpen ? `${answerRefs.current[index]?.scrollHeight ?? 0}px` : undefined
                    }}
                  >
                    <div className="faq-answer-inner">{renderAnswer(item.answer, index)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
