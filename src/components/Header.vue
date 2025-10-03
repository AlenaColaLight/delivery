<template>
  <div class="header">
    <div class="header_logo">
      <img src="/icons/ChatGPT Image 3 жовт. 2025 р., 15_12_24.png" alt="logo">
    </div>

    <!-- гамбургер для мобільних -->
    <div :class="['hamburger', { open: menuActive }]" @click="toggleMenu">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <ul :class="['nav-list', { active: menuActive }]">
      <li class="nav-item">
        <RouterLink to="/">Головна</RouterLink>
      </li>

      <!-- Dropdown Каталог -->
      <li class="nav-item dropdown">
        <span class="nav-link">Каталог</span>
        <ul class="dropdown-menu">
          <li v-for="cat in categories" :key="cat.id">
            <RouterLink :to="`/category/${cat.id}`">{{ cat.name }}</RouterLink>
          </li>
        </ul>
      </li>

      <li class="nav-item">
        <RouterLink to="/about">Про нас</RouterLink>
      </li>
    </ul>

    <div class="basket">
      <RouterLink to="/cart"><img src="/icons/cart.png" alt="cart"></RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: 1, name: "Ноутбуки" },
        { id: 2, name: "Смартфони" },
        { id: 3, name: "Побутова техніка" },
        { id: 4, name: "Телевізори" },
        { id: 5, name: "Меблі" }
      ],
      menuActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>

<style scoped>
/* --- Базовий стиль хедера --- */
.header {
  background: #00a046;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.header_logo img {
  max-height: 100px;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 25px;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
}

.nav-item a,
.nav-link {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  padding: 8px 12px;
  display: block;
}

.nav-item a:hover,
.nav-link:hover {
  background: #008836;
  border-radius: 4px;
}

/* dropdown */
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: #fff;
  border: 1px solid #ddd;
  z-index: 999;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

.dropdown-menu li {
  list-style: none;
}

.dropdown-menu a {
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
}

.dropdown-menu a:hover {
  background: #f5f5f5;
  color: #00a046;
}

/* показуємо меню при наведенні на ПК */
.dropdown:hover .dropdown-menu {
  display: block;
}

.basket img {
  max-height: 40px;
}

/* --- Гамбургер --- */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1000;
}

.hamburger div {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 5px 0;
  transition: 0.4s;
}

/* анімація хрестика при відкритті */
.hamburger.open div:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger.open div:nth-child(2) {
  opacity: 0;
}
.hamburger.open div:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* --- Адаптив --- */
@media (max-width: 1024px) {
  .hamburger {
    display: flex;
  }

  .nav-list {
    flex-direction: column;
    gap: 0;
    width: 100%;
    display: none;
    background: #00a046;
    margin-top: 10px;
  }

  .nav-list.active {
    display: flex;
  }

  .nav-item {
    width: 100%;
  }

  .nav-item a,
  .nav-link {
    padding: 12px 20px;
  }

  .dropdown-menu {
    position: static;
    border: none;
    box-shadow: none;
    border-radius: 0;
  }

  .dropdown:hover .dropdown-menu {
    display: none;
  }
}

@media (max-width: 600px) {
  .header_logo img {
    max-height: 70px;
  }

  .basket img {
    max-height: 35px;
  }

  .nav-item a,
  .nav-link {
    padding: 10px 15px;
  }
}
</style>
