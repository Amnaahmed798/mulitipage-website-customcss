import styles from './Faq.module.css';

const FAQ = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unused and unopened items. Please contact our support team for more details.",
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping usually takes 5-7 business days. Delivery times may vary based on location and availability.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to many countries. Please check our shipping policy for a full list of available destinations.",
    },
    {
      question: "Can I track my order?",
      answer: "Yes, once your order ships, you will receive an email with a tracking number. You can use this to track your package online.",
    },
    {
      question: "How can I contact customer service?",
      answer: "You can reach our customer service team via email at support@example.com or call us at 1-800-123-4567.",
    },
  ];

  return (
    <div className={styles.faq}>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((item, index) => (
        <div key={index} className={styles.faqItem}>
          <h2 className={styles.question}>{item.question}</h2>
          <p className={styles.answer}>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
