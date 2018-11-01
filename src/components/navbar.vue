<template>
<nav>
  <input type="checkbox" id="nav" class="hidden">
  <label for="nav" class="nav-btn">
    <i></i>
    <i></i>
    <i></i>
  </label>

  <div class="nav-wrapper">
    <ul>
      <li>
        <router-link to="/">
          <img src="../assets/icons/fireplace.svg" class="home" />
          <h4 class="a">{{ item1 }}</h4>
        </router-link>
      </li>
      <br>
      <li>
        <a @click="atras">
          <img src="../assets/icons/left-arrow.svg" class="home" />
          <h4 class="a">{{ item2 }}</h4>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../assets/icons/español.png" class="es" v-on:click="cambiarNormal()" />
          <h4 class="a">{{ item3 }}</h4>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../assets/icons/usa.png" class="es" v-on:click="cambiarIngles()" />
          <h4 class="a">{{ item4 }}</h4>
        </a>
      </li>
    </ul>
  </div>
</nav>
</template>
<script>
export default {
  data() {
    return {
      item1: 'INICIO',
      item2: 'ATRAS',
      item3: 'ESPAÑOL',
      item4: 'INGLÉS',
      ingles: undefined,
    }
  },
  methods: {
    atras() {
      this.$router.go(-1);
    },
    cambiarNormal() {
      this.ingles = false;

      if (this.ingles == false) {
        console.log('hola');
        this.item1 = 'INICIO';
        this.item2 = 'ATRAS';
        this.item3 = 'ESPAÑOL';
        this.item4 = 'INGLÉS';
      }
    },
    cambiarIngles() {
      this.ingles = true;

      if (this.ingles == true) {
        console.log('hola');
        this.item1 = 'HOME';
        this.item2 = 'BACK';
        this.item3 = 'SPAIN';
        this.item4 = 'ENGLISH';
      }
    }
  }
}
</script>
<style>
nav {
  padding: 6px;
}

nav ul {
  float: left;
}

nav ul li {
  display: block;
  float: right;
  margin-right: 50px;
}

.es {
  float: right;
  margin-top: 10px;
  height: 75px;
  width: 100px;
}

.a {
  color: #fff;
}

@media screen and (max-width: 864px) {
  .logo {
    padding: 0;
  }

  .nav-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: all 0.2s ease;
  }

  .nav-wrapper ul {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }

  .nav-wrapper ul li {
    display: block;
    float: none;
    width: 100%;
    text-align: right;
    margin-bottom: 10px;
  }

  .nav-wrapper ul li:nth-child(1) a {
    transition-delay: 0.2s;
  }

  .nav-wrapper ul li:nth-child(2) a {
    transition-delay: 0.3s;
  }

  .nav-wrapper ul li:nth-child(3) a {
    transition-delay: 0.4s;
  }

  .nav-wrapper ul li:nth-child(4) a {
    transition-delay: 0.5s;
  }

  .nav-wrapper ul li:not(:first-child) {
    margin-left: 0;
  }

  .nav-wrapper ul li a {
    padding: 10px 24px;
    opacity: 0;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1.2px;
    transform: translateX(-20px);
    transition: all 0.2s ease;
  }

  .nav-btn {
    position: fixed;
    right: 10px;
    top: 10px;
    display: block;
    width: 48px;
    height: 48px;
    cursor: pointer;
    z-index: 9999;
    border-radius: 50%;
  }

  .nav-btn i {
    display: block;
    width: 20px;
    height: 2px;
    background: #000;
    border-radius: 2px;
    margin-left: 14px;
  }

  .nav-btn i:nth-child(1) {
    margin-top: 16px;
  }

  .nav-btn i:nth-child(2) {
    margin-top: 4px;
    opacity: 1;
  }

  .nav-btn i:nth-child(3) {
    margin-top: 4px;
  }
}

#nav:checked+.nav-btn {
  transform: rotate(45deg);
}

#nav:checked+.nav-btn i {
  background: #000;
  transition: transform 0.2s ease;
}

#nav:checked+.nav-btn i:nth-child(1) {
  transform: translateY(6px) rotate(180deg);
}

#nav:checked+.nav-btn i:nth-child(2) {
  opacity: 0;
}

#nav:checked+.nav-btn i:nth-child(3) {
  transform: translateY(-6px) rotate(90deg);
}

#nav:checked~.nav-wrapper {
  z-index: 9990;
  opacity: 1;
}

#nav:checked~.nav-wrapper ul li a {
  opacity: 1;
  transform: translateX(0);
}

.hidden {
  display: none;
}

.home {
  width: 80px;
  height: 80px;
}
</style>
