<template>
  <div class="home-page">
    <!-- Герой-блок -->
    <section class="hero">
      <h1 class="hero-title">Ласкаво просимо до нашого магазину</h1>
      <p class="hero-subtitle">
        Переглядайте товари, додавайте їх до кошика та оформлюйте замовлення швидко та зручно.
      </p>
      <div class="hero-buttons">
        <router-link to="/categories/1" class="btn btn-primary">Перейти до категорій</router-link>
        <router-link to="/about" class="btn btn-secondary">Про нас</router-link>
      </div>
    </section>

    <!-- Презентаційні блоки -->
    <section class="features">
      <div class="feature-card" v-for="(feature, index) in features" :key="index" :style="{animationDelay: index * 0.2 + 's'}">
        <div class="feature-icon">{{ feature.icon }}</div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </section>

    <!-- Новий промо-блок -->
    <section class="promo">
      <h2 class="promo-title">🔥 Топ-пропозиції цього місяця</h2>
      <div class="promo-cards">
        <div v-for="(item, index) in promoItems" :key="item.id" class="promo-card" :style="{animationDelay: index * 0.2 + 's'}">
          <img :src="item.image" alt="" />
          <h3>{{ item.name }}</h3>
          <p>Ціна: {{ item.price }} грн</p>
          
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      features: [
        { icon: "🛒", title: "Зручний кошик", description: "Керуйте товарами та кількістю без зайвих кроків." },
        { icon: "🏷️", title: "Категорії товарів", description: "Швидкий доступ до всіх категорій та товарів." },
        { icon: "🚚", title: "Доставка", description: "Розрахунок вартості доставки по містах та типах." },
        { icon: "💻", title: "Сучасний фронтенд", description: "Використання Vue.js, компонентів та локального сховища." }
      ],
      promoItems: [
        { id: 1, name: "Ноутбук Lenovo IdeaPad 3", price: 15000, image: "/public/laptop/6.webp", categoryId: 1 },
        { id: 2, name: "iPhone 14 Pro", price: 45000, image: "/public/phone/1.png", categoryId: 2 },
        { id: 3, name: "Холодильник Samsung RB38", price: 30000, image: "/public/tech/6.avif", categoryId: 3 },
        { id: 4, name: "LG OLED55", price: 35000, image: "/public/monitor/6.webp", categoryId: 4 }
      ]
    };
  }
};
</script>

<style scoped>
.home-page {
  font-family: 'Segoe UI', Arial, sans-serif;
  color: #333;
}

/* Герой-блок */
.hero {
  text-align: center;
  background: linear-gradient(135deg, #00a046, #66cdaa);
  color: white;
  padding: 100px 20px;
  border-radius: 0 0 50px 50px;
  position: relative;
  overflow: hidden;
}
.hero-title {
  font-size: 3rem;
  margin-bottom: 20px;
  animation: fadeInDown 1s ease forwards;
}
.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 30px;
  animation: fadeIn 1.5s ease forwards;
}
.hero-buttons .btn {
  margin: 0 10px;
  padding: 10px 25px;
  font-size: 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.3s, background 0.3s;
}
.btn-primary {
  background-color: #fff;
  color: #00a046;
}
.btn-primary:hover {
  background-color: #e6ffe6;
  transform: scale(1.05);
}
.btn-secondary {
  background-color: rgba(255,255,255,0.3);
  color: #fff;
}
.btn-secondary:hover {
  background-color: rgba(255,255,255,0.5);
  transform: scale(1.05);
}

/* Фейдін анімації */
@keyframes fadeInDown {
  0% { opacity: 0; transform: translateY(-30px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* Презентаційні блоки */
.features {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 50px 20px;
  gap: 20px;
}
.feature-card {
  flex: 1 1 220px;
  background: #f0fff4;
  border-radius: 12px;
  padding: 25px 15px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  opacity: 0;
  animation: fadeInUp 0.8s forwards;
}
.feature-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}
.feature-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}
.feature-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #008836;
}
.feature-card p {
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
}

/* Анімація появи блоків */
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Промо-блок */
.promo {
  background: linear-gradient(90deg, #e0ffe0, #f0fff4);
  padding: 60px 20px;
  text-align: center;
  border-radius: 20px;
  margin: 50px 20px;
}
.promo-title {
  font-size: 2rem;
  margin-bottom: 40px;
  color: #00a046;
  animation: fadeInDown 1s ease forwards;
}
.promo-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
}
.promo-card {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  width: 220px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  opacity: 0;
  animation: fadeInUp 0.8s forwards;
}
.promo-card:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}
.promo-card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}
.promo-card h3 {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #008836;
}
.promo-card p {
  font-size: 1rem;
  margin-bottom: 15px;
}

/* Мобільні стилі */
@media (max-width: 1024px) {
  .features {
    justify-content: center;
  }
  .feature-card {
    flex: 1 1 45%; /* дві картки в ряд */
  }
  .promo-cards {
    justify-content: center;
  }
  .promo-card {
    width: 45%;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
  .hero-buttons .btn {
    margin: 5px 0;
    width: 80%;
    display: block;
  }
  .features {
    flex-direction: column;
    align-items: center;
  }
  .feature-card {
    width: 90%;
    margin-bottom: 20px;
  }
  .promo-card {
    width: 90%;
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }
  .hero-subtitle {
    font-size: 0.9rem;
  }
  .promo-title {
    font-size: 1.5rem;
  }
}


</style>
