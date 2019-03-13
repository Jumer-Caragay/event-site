import React from 'react';
import styles from './faq.module.css';
import Header from './Header';
import faqQuestions from '../data/questions.json';

const FAQ = () => {
  function renderQuestions(sectionNum) {
    const { body } = faqQuestions;
    return body[sectionNum].questions.map(question => (
      <div key={question.title} className={styles.question}>
        <h2>{question.title}</h2>
        <p>{question.answer}</p>
      </div>
    ));
  }

  return (
    <div className={styles.faq}>
      <Header headerText="FAQ" />
      <div className={styles.faqContent}>
        <div className={styles.colOne}>
          {renderQuestions(0)}
        </div>
        <div className={styles.colTwo}>
          {renderQuestions(1)}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
