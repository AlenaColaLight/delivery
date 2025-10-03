<template>
  <div class="about-page">
    <h1>Про проект</h1>

    <section class="project-info">
      <h2>Мета проекту</h2>
      <p>
        Цей проект є студентською роботою, виконаною Зимовець Оленою, група 5-9з. 
        Метою проекту є створення веб-додатку для демонстрації інтернет-магазину з 
        категоріями товарів, кошиком, фільтрацією та розрахунком доставки.
      </p>
    </section>

    <section class="author-info">
      <h2>Про авторку</h2>
      <p>
        Зимовець Олена – студентка групи 5-9з. Цей проект є частиною навчальної практики
        та демонструє вміння працювати з javascript компонентами, анімаціями та
        динамічним станом додатку.
      </p>
      <p>
        В проекті використані сучасні підходи до фронтенду: компоненти, локальний стан,
        взаємодія через localStorage та адаптивний дизайн.
      </p>
    </section>

    <section class="contact-info">
      <h2>Контакти</h2>
      <p>Електронна пошта: <a href="Ladyluck4420@icloud.com">Ladyluck4420@icloud.com</a></p>
      <p>Група: 5-9з</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.about-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 20px;
  font-family: 'Segoe UI', Arial, sans-serif;
  color: #333;  
}

.about-page h1 {
  text-align: center;
  color: #00a046;
  margin-bottom: 25px;
}

.about-page h2 {
  color: #008836;
  margin-top: 20px;
  margin-bottom: 10px;
}

.about-page p {
  line-height: 1.6;
  margin-bottom: 15px;
}

.contact-info a {
  color: #00a046;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

/* Планшети */
@media (max-width: 1024px) {
  .about-page {
    padding: 25px 15px;
  }

  .about-page h1 {
    font-size: 2rem;
  }

  .about-page h2 {
    font-size: 1.4rem;
  }

  .about-page p {
    font-size: 0.95rem;
  }
}

/* Мобільні */
@media (max-width: 768px) {
  .about-page {
    padding: 20px 10px;
  }

  .about-page h1 {
    font-size: 1.8rem;
  }

  .about-page h2 {
    font-size: 1.2rem;
  }

  .about-page p {
    font-size: 0.9rem;
  }
}

/* Дуже маленькі екрани */
@media (max-width: 480px) {
  .about-page {
    padding: 15px 10px;
  }

  .about-page h1 {
    font-size: 1.5rem;
  }

  .about-page h2 {
    font-size: 1rem;
  }

  .about-page p {
    font-size: 0.85rem;
  }
}


</style>
