import React, { useState } from 'react';
import Faq from 'react-faq-component';
import './FAQ.css'; // Import CSS file for additional styling

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to keep track of the active FAQ item

  const data = {
    rows: [
      {
        title: 'Как я могу подать заявку на ипотеку?',
        content: `Подать заявку можно онлайн, <a href="https://api.whatsapp.com/send?phone=${+79841925069}">здесь</a>.`,
      },
      {
        title: 'Какие документы необходимы для подачи заявки на ипотеку?',
        content: `
          <ul>
            <li>Паспорт (скан всех страниц, включая пустые)</li>
            <li>СНИЛС</li>
            <li>Заверенная копия трудовой книжки</li>
            <li>Справка о доходах (2НДФЛ или по форме банка)</li>
            <li>Военный билет для мужчин, не достигших 27-летнего возраста.</li>
          </ul>
          <p>Срок действия справок о доходах и заверенной копии трудовой книжки составляет 30 календарных дней с даты выдачи.</p>
        `,
      },
      {
        title: 'Какой минимальный первоначальный взнос возможен по ипотеке?',
        content: 'ATARI  предлагает возможность подачи заявки на ипотеку без первоначального взноса.',
      },
      {
        title: 'А если у меня нет первоначального взноса по ипотеке?',
        content: `
          Специально для таких случаев мы придумали выход. Он поможет собрать первый взнос по ипотеке — это 9% годовых на сумму внесенных средств, а также бонус в виде скидки до 350 000 ₽ на покупку квартиры от Самолет. А пока вы копите, для тех кто использует Целепорт, можно бесплатно забронировать квартиру. Это сэкономит до 10% в год от её стоимости.
        `,
      },
      {
        title: 'Могу ли я использовать материнский семейный капитал для покупки квартиры?',
        content: 'Использовать материнский семейный капитал возможно для приобретения квартиры, как в качестве первоначального взноса, так и в качестве частично досрочного погашения.',
      },
      {
        title: 'Могу ли я использовать материнский семейный капитал для покупки квартиры?',
        content: 'Да, конечно, такой вариант возможен. Вы можете воспользоваться нашей услугой.',
      },
    ],
  };

  const styles = {
    titleTextColor: '#007bff',
    rowTitleColor: '#007bff',
    rowContentColor: 'grey',
    rowContentTextSize: '16px',
    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingRight: '10px',
    rowContentPaddingLeft: '10px',
    arrowColor: 'black',
    rowContentBackgroud: '#fff',
  };

  // Function to handle click on FAQ item
  const handleItemClick = (index) => {
    if (activeIndex === index) {
      // If clicked on the active item, close it
      setActiveIndex(null);
    } else {
      // If clicked on a different item, toggle it
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <h1>Часто задаваемые вопросы</h1>
      <Faq
        data={data}
        styles={styles}
        onItemClick={handleItemClick} // Pass the click handler function to the FAQ component
        active={activeIndex} // Pass the active index to the FAQ component
      />
    </div>
  );
};

export default FAQ;
