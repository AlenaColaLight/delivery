<template>
  <div class="cart-container">
    <h2>🛒 Кошик</h2>

    <div v-if="cart.length > 0">
      <div class="cart-grid">
        <div v-for="item in cart" :key="item.id" class="cart-card">
          <img :src="item.image" alt="" class="cart-image" />
          <div class="cart-info">
            <h3>{{ item.name }}</h3>
            <p>Ціна за одиницю: {{ item.price }} грн</p>
            <p>Вага: {{ item.weight }} кг</p>

            <div class="quantity-controls">
              <button @click="decrease(item)">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="increase(item)">+</button>
            </div>

            <p class="item-total">Сума: {{ item.price * item.quantity }} грн</p>

            <button class="btn-delete" @click="remove(item)">Видалити</button>
          </div>
        </div>
      </div>

      <div class="cart-actions">
        <p class="total">Всього: {{ totalSum }} грн</p>
        <button class="btn-checkout" @click="showPopup = true">Оформити замовлення</button>
        <button class="btn-clear" @click="clearCart">Очистити кошик</button>
      </div>
    </div>

    <p v-else class="empty-message">Кошик порожній 😔</p>

    <!-- Попап замовлення -->
    <transition name="popup">
      <div class="popup-overlay" v-if="showPopup">
        <div class="popup">
          <h3>Оформлення замовлення</h3>
          <form @submit.prevent="submitOrder">
            <div class="form-group">
              <label>Ім'я:</label>
              <input v-model="form.firstName" required />
            </div>
            <div class="form-group">
              <label>Прізвище:</label>
              <input v-model="form.lastName" required />
            </div>
            <div class="form-group">
              <label>Номер телефону:</label>
              <input v-model="form.phone" type="tel" required />
            </div>
            <div class="form-group">
              <label>Місто:</label>
              <select v-model="form.city" required>
                <option v-for="city in cities" :key="city.name" :value="city">{{ city.name }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Тип доставки:</label>
              <select v-model="form.deliveryType" required>
                <option value="courier">Кур’єр</option>
                <option value="nova">Нова пошта</option>
                <option value="ukr">Укрпошта</option>
              </select>
            </div>

            <!-- Додаткові поля -->
            <div class="form-group" v-if="form.deliveryType === 'courier'">
              <label>Адреса:</label>
              <input v-model="form.address" required />
            </div>
            <div class="form-group" v-if="form.deliveryType === 'nova' || form.deliveryType === 'ukr'">
              <label>Номер відділення:</label>
              <input v-model="form.office" type="number" min="1" required />
            </div>

            <p class="delivery-cost">Вартість доставки: {{ deliveryCost }} грн</p>
            <p class="total-with-delivery">Разом з доставкою: {{ totalWithDelivery }} грн</p>

            <div class="popup-actions">
              <button type="submit" class="btn-checkout">Оформити</button>
              <button type="button" class="btn-clear" @click="showPopup = false">Відмінити</button>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      showPopup: false,
      form: {
        firstName: "",
        lastName: "",
        phone: "",
        city: null,
        deliveryType: "courier",
        address: "",
        office: ""
      },
      cities: [
        { name: "Київ", rate: 50 },
        { name: "Львів", rate: 60 },
        { name: "Одеса", rate: 70 },
        { name: "Харків", rate: 65 },
        { name: "Дніпро", rate: 55 }
      ]
    };
  },
  computed: {
    totalSum() {
      return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    totalWeight() {
      return this.cart.reduce((acc, item) => acc + item.weight * item.quantity, 0);
    },
    deliveryCost() {
      if (!this.form.city) return 0;
      let multiplier = this.form.deliveryType === "courier" ? 1 : 1.5;
      return this.totalWeight * this.form.city.rate * multiplier;
    },
    totalWithDelivery() {
      return this.totalSum + this.deliveryCost;
    }
  },
  methods: {
    loadCart() {
      this.cart = JSON.parse(localStorage.getItem("cart")) || [];
    },
    increase(item) {
      item.quantity++;
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    decrease(item) {
      if (item.quantity > 1) item.quantity--;
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    remove(item) {
      this.cart = this.cart.filter(p => p.id !== item.id);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    clearCart() {
      this.cart = [];
      localStorage.removeItem("cart");
    },
    submitOrder() {
      alert(`Замовлення оформлено! Сума з доставкою: ${this.totalWithDelivery} грн ✅`);
      this.clearCart();
      this.showPopup = false;
      // Скидаємо форму
      this.form = {
        firstName: "",
        lastName: "",
        phone: "",
        city: null,
        deliveryType: "courier",
        address: "",
        office: ""
      };
    }
  },
  mounted() {
    this.loadCart();
    window.addEventListener("storage", this.loadCart);
  },
  beforeUnmount() {
    window.removeEventListener("storage", this.loadCart);
  }
};
</script>

<style scoped>
.cart-container {
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

h2 {
  text-align: center;
  font-size: 28px;
  color: #00a046;
  margin-bottom: 20px;
}

/* Сітка карток */
.cart-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

/* Картка товару */
.cart-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.cart-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

/* Зображення */
.cart-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  background: #f5f5f5;
  border-radius: 6px;
  margin-bottom: 10px;
}

/* Інформація */
.cart-info h3 {
  font-size: 16px;
  text-align: center;
  margin: 5px 0;
}
.cart-info p {
  margin: 3px 0;
  font-size: 14px;
}

/* Кількість */
.quantity-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 5px 0;
}
.quantity-controls button {
  width: 25px;
  height: 25px;
  background: #00a046;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
.quantity-controls button:hover {
  background: #008836;
}
.quantity-controls span {
  min-width: 20px;
  text-align: center;
}

/* Кнопки */
.btn-delete {
  margin-top: 5px;
  background: #e63946;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
}
.btn-delete:hover {
  background: #c82333;
}

.cart-actions {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.cart-actions .total {
  font-weight: bold;
  font-size: 18px;
}
.btn-checkout, .btn-clear {
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  font-weight: bold;
  cursor: pointer;
}
.btn-checkout {
  background: #00a046;
  color: white;
}
.btn-checkout:hover { background: #008836; }
.btn-clear {
  background: #ccc;
  color: #333;
}
.btn-clear:hover { background: #aaa; }

.empty-message {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-top: 50px;
  color: #d32f2f;
}

/* Попап */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.popup {
  background: white;
  padding: 20px;
  width: 400px;
  border-radius: 10px;
  max-height: 90%;
  overflow-y: auto;
}
.popup h3 {
  text-align: center;
  margin-bottom: 15px;
}
.form-group {
  margin-bottom: 10px;
}
.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}
.form-group input, .form-group select {
  width: 100%;
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.delivery-cost, .total-with-delivery {
  font-weight: bold;
  margin: 5px 0;
}

.popup-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

/* Анімація попапу */
.popup-enter-active, .popup-leave-active {
  transition: opacity 0.3s ease;
}
.popup-enter-from, .popup-leave-to {
  opacity: 0;
}


/* Планшети */
@media (max-width: 1024px) {
  .cart-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .popup {
    width: 90%;
  }
}

/* Мобільні */
@media (max-width: 768px) {
  .cart-grid {
    grid-template-columns: 1fr;
  }

  .cart-card img {
    width: 80%;
    margin-bottom: 8px;
  }

  .cart-info h3 {
    font-size: 14px;
  }

  .cart-info p {
    font-size: 13px;
  }

  .quantity-controls button {
    width: 22px;
    height: 22px;
    font-size: 0.9rem;
  }

  .btn-delete, .btn-checkout, .btn-clear {
    padding: 6px 10px;
    font-size: 0.9rem;
  }

  .cart-actions {
    flex-direction: column;
    gap: 10px;
  }

  .popup {
    width: 95%;
    padding: 15px;
  }
}

/* Дуже маленькі екрани */
@media (max-width: 480px) {
  h2 {
    font-size: 24px;
  }

  .cart-info h3 {
    font-size: 13px;
  }

  .cart-info p {
    font-size: 12px;
  }

  .quantity-controls button {
    width: 20px;
    height: 20px;
    font-size: 0.8rem;
  }

  .btn-delete, .btn-checkout, .btn-clear {
    padding: 5px 8px;
    font-size: 0.85rem;
  }

  .popup {
    padding: 10px;
  }
}

</style>
