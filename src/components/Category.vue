<template>
  <div class="category-page">
    <h2>Категорія: {{ categoryName }}</h2>

    <div class="content-wrapper">
      <!-- Лівий блок: фільтр -->
      <div class="filter-panel">
        <h3>Фільтр товарів</h3>

        <!-- Фільтр ваги -->
        <div class="filter-group">
          <label>Вага (кг): {{ weightRange[0] }} - {{ weightRange[1] }}</label>
          <input 
            type="range" 
            :min="minWeight" 
            :max="maxWeight" 
            v-model.number="weightRange[0]" 
          />
          <input 
            type="range" 
            :min="weightRange[0]" 
            :max="maxWeight" 
            v-model.number="weightRange[1]" 
          />
        </div>

        <!-- Фільтр ціни -->
        <div class="filter-group">
          <label>Ціна (грн): {{ priceRange[0] }} - {{ priceRange[1] }}</label>
          <input 
            type="range" 
            :min="minPrice" 
            :max="maxPrice" 
            v-model.number="priceRange[0]" 
          />
          <input 
            type="range" 
            :min="priceRange[0]" 
            :max="maxPrice" 
            v-model.number="priceRange[1]" 
          />
        </div>
      </div>

      <!-- Правий блок: товари -->
      <div class="products-wrapper">
        <transition-group name="product-card" tag="div" class="products-grid">
          <div 
            v-for="product in filteredProducts" 
            :key="product.id" 
            class="product-card"
          >
            <img :src="product.image" alt="" class="product-image" />
            <h3>{{ product.name }}</h3>
            <p>Вага: {{ product.weight }} кг</p>
            <p>Ціна: {{ product.price }} грн</p>
            <button class="btn" @click="addToCart(product)">Додати в кошик</button>
          </div>
        </transition-group>

        <p v-if="filteredProducts.length === 0" class="no-products">
          Товара за даними характеристиками не знайдено
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import { reactive } from "vue";
export default {
  props: ["id"],
  data() {
    return {
    products: [
    // Категория 1: Ноутбуки
    { id: 1, name: "Ноутбук Lenovo IdeaPad 3", weight: 2, price: 15000, categoryId: 1, image:"/public/laptop/6.webp", },
    { id: 2, name: "Ноутбук ASUS Vivobook", weight: 2.3, price: 17000, categoryId: 1, image:"/public/laptop/5.jpg", },
    { id: 3, name: "Ноутбук HP Pavilion", weight: 2.1, price: 16000, categoryId: 1, image:"/public/laptop/4.webp", },
    { id: 4, name: "Ноутбук Acer Aspire 5", weight: 2.2, price: 15500, categoryId: 1, image:"/public/laptop/1.jpg", },
    { id: 5, name: "Ноутбук Dell Inspiron 15", weight: 2.4, price: 17500, categoryId: 1, image:"/public/laptop/2.jpg", },
    { id: 6, name: "Ноутбук Apple MacBook Air", weight: 1.3, price: 35000, categoryId: 1, image:"/public/laptop/3.jpeg", },

    // Категория 2: Смартфоны
    { id: 7, name: "iPhone 14 Pro", weight: 0.3, price: 45000, categoryId: 2, image:"/public/phone/1.png", },
    { id: 8, name: "Samsung Galaxy S23", weight: 0.31, price: 40000, categoryId: 2, image:"/public/phone/5.webp",},
    { id: 9, name: "Xiaomi Redmi Note 12", weight: 0.35, price: 12000, categoryId: 2, image:"/public/phone/3.jpg", },
    { id: 10, name: "Google Pixel 7", weight: 0.32, price: 25000, categoryId: 2, image:"/public/phone/6.jpg", },
    { id: 11, name: "OnePlus 11", weight: 0.33, price: 30000, categoryId: 2, image:"/public/phone/4.jpg", },
    { id: 12, name: "Samsung Galaxy A54", weight: 0.34, price: 15000, categoryId: 2, image:"/public/phone/2.jpg", },

    // Категория 3: Побутова техніка
    { id: 13, name: "Пральна машина Bosch Serie 6", weight: 60, price: 25000, categoryId: 3, image:"/public/tech/4.jpg", },
    { id: 14, name: "Холодильник Samsung RB38", weight: 80, price: 30000, categoryId: 3, image:"/public/tech/6.avif", },
    { id: 15, name: "Мікрохвильова піч Panasonic", weight: 12, price: 4500, categoryId: 3, image:"/public/tech/5.jpg", },
    { id: 16, name: "Пилосос Dyson V15", weight: 3, price: 20000, categoryId: 3, image:"/public/tech/1.jpeg", },
    { id: 17, name: "Кавоварка DeLonghi", weight: 4, price: 9000, categoryId: 3, image:"/public/tech/2.jpg", },
    { id: 18, name: "Кондиціонер LG Dual Inverter", weight: 35, price: 28000, categoryId: 3, image:"/public/tech/3.jpg", },

    // Категория 4: Телевізоры
    { id: 19, name: "LG OLED55", weight: 15, price: 35000, categoryId: 4, image:"/public/monitor/6.webp", },
    { id: 20, name: "Samsung QLED Q80", weight: 17, price: 40000, categoryId: 4, image:"/public/monitor/2.jpg", },
    { id: 21, name: "Sony Bravia XR", weight: 18, price: 45000, categoryId: 4, image:"/public/monitor/5.webp", },
    { id: 22, name: "Philips Ambilight 55PUS", weight: 16, price: 30000, categoryId: 4, image:"/public/monitor/4.png", },
    { id: 23, name: "TCL 6-Series 55R635", weight: 17, price: 25000, categoryId: 4, image:"/public/monitor/3.jpg", },
    { id: 24, name: "Hisense U8G 55", weight: 18, price: 22000, categoryId: 4, image:"/public/monitor/1.jpg", },

    // Категория 5: Меблі
    { id: 25, name: "Стіл офісний IKEA Bekant", weight: 30, price: 8000, categoryId: 5, image:"/public/mb/2.webp", },
    { id: 26, name: "Крісло Cougar Armor", weight: 20, price: 6000, categoryId: 5, image:"/public/mb/1.webp", },
    { id: 27, name: "Шафа BRW Modern", weight: 45, price: 12000, categoryId: 5, image:"/public/mb/5.jpg", },
    { id: 28, name: "Ліжко IKEA Malm", weight: 50, price: 15000, categoryId: 5, image:"/public/mb/3.webp", },
    { id: 29, name: "Комод BRW Porto", weight: 40, price: 10000, categoryId: 5, image:"/public/mb/4.jpg", },
    { id: 30, name: "Тумба прикроватна IKEA Hemnes", weight: 15, price: 4000, categoryId: 5, image:"/public/mb/6.jpg", },
    ],
      categories: [
        { id: 1, name: "Ноутбуки" },
        { id: 2, name: "Смартфони" },
        { id: 3, name: "Побутова техніка" },
        { id: 4, name: "Телевізори" },
        { id: 5, name: "Меблі" }
      ],
      weightRange: [0, 100],
      priceRange: [0, 50000]
    };
  },


   setup() {
    const cart = inject("cart"); // глобальний кошик
    return { cart };
  },
  computed: {
    categoryProducts() {
      return this.products.filter(p => p.categoryId === parseInt(this.id));
    },
    filteredProducts() {
      return this.categoryProducts.filter(p =>
        p.weight >= this.weightRange[0] &&
        p.weight <= this.weightRange[1] &&
        p.price >= this.priceRange[0] &&
        p.price <= this.priceRange[1]
      );
    },
    categoryName() {
      const cat = this.categories.find(c => c.id === parseInt(this.id));
      return cat ? cat.name : "Невідома категорія";
    },
    minWeight() {
      return Math.min(...this.categoryProducts.map(p => p.weight));
    },
    maxWeight() {
      return Math.max(...this.categoryProducts.map(p => p.weight));
    },
    minPrice() {
      return Math.min(...this.categoryProducts.map(p => p.price));
    },
    maxPrice() {
      return Math.max(...this.categoryProducts.map(p => p.price));
    }
  },
  methods: {
     addToCart(product) {
      // Отримуємо кошик з localStorage
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Перевіряємо, чи товар вже є
      const existing = cart.find(p => p.id === product.id);
      if (existing) existing.quantity++;
      else cart.push({ ...product, quantity: 1 });

      // Зберігаємо назад
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`Товар "${product.name}" додано в кошик ✅`);
    }
  
  }
};
</script>

<style scoped>
.category-page {
  padding: 20px;

}
.category-page h2{
    display: flex;
    justify-content: center;
}

.content-wrapper {
  display: flex;
  gap: 20px;
}

/* Левый блок фильтр */
.filter-panel {
  flex: 0 0 250px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  background: #fafafa;
}

.filter-group {
  margin-bottom: 20px;
}

.filter-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.filter-group input[type="range"] {
  width: 100%;
  margin-bottom: 5px;
}

/* Правый блок товары */
.products-wrapper {
  flex: 1;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background: #fafafa;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  cursor: pointer;
}
.product-card img{
    width: 100px;
    height: 100px;
}

.product-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  background: #f0fff4;
}

.btn {
  background: #00a046;
  color: #fff;
  border: none;
  padding: 8px 12px;
  margin-top: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

.btn:hover {
  background: #008836;
  transform: scale(1.05);
}

.no-products {
  margin-top: 20px;
  font-weight: bold;
  color: #d32f2f;
  text-align: center;
}

/* Анимация появления карток */
.product-card-enter-active,
.product-card-leave-active {
  transition: all 0.5s ease;
}
.product-card-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.product-card-enter-to {
  opacity: 1;
  transform: translateY(0);
}


/* Планшети */
@media (max-width: 1024px) {
  .content-wrapper {
    flex-direction: column;
  }

  .filter-panel {
    width: 100%;
    margin-bottom: 20px;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Мобільні */
@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }

  .product-card img {
    width: 80px;
    height: 80px;
  }

  .btn {
    padding: 6px 10px;
    font-size: 0.9rem;
  }
}

/* Дуже маленькі екрани */
@media (max-width: 480px) {
  .category-page {
    padding: 10px;
  }

  .filter-group label {
    font-size: 0.9rem;
  }

  .product-card {
    padding: 10px;
  }

  .product-card h3 {
    font-size: 1rem;
  }

  .product-card p {
    font-size: 0.85rem;
  }
}


</style>
