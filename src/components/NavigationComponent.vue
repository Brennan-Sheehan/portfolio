<template>
  <nav id="main" class="navigation-menu navigation-container">
    <div class="header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="23"
        viewBox="0 0 28 23"
        fill="none"
      >
        <path
          d="M10.8206 11.7397C11.0858 12.0049 11.5156 12.0049 11.7808 11.7397L12.2607 11.2598C12.5259 10.9947 12.5259 10.5648 12.2607 10.2997L10.7451 8.78453L12.2603 7.26897C12.5254 7.00379 12.5254 6.57399 12.2603 6.3088L11.7804 5.82893C11.5152 5.56375 11.0854 5.56375 10.8202 5.82893L8.34491 8.30424C8.07973 8.56942 8.07973 8.99922 8.34491 9.2644L10.8206 11.7397ZM14.8942 11.2603L15.3741 11.7401C15.6393 12.0053 16.0691 12.0053 16.3343 11.7401L18.8096 9.26483C19.0748 8.99965 19.0748 8.56984 18.8096 8.30466L16.3343 5.82936C16.0691 5.56418 15.6393 5.56418 15.3741 5.82936L14.8942 6.30923C14.6291 6.57441 14.6291 7.00421 14.8942 7.26939L16.4094 8.78453L14.8942 10.3001C14.6291 10.5653 14.6291 10.9951 14.8942 11.2603ZM26.4756 18.2886H16.1883C16.1569 19.1291 15.5642 19.6463 14.7992 19.6463H12.2195C11.4265 19.6463 10.8185 18.9051 10.8291 18.2886H0.678862C0.305488 18.2886 0 18.5941 0 18.9675V19.6463C0 21.1398 1.22195 22.3618 2.71545 22.3618H24.439C25.9325 22.3618 27.1545 21.1398 27.1545 19.6463V18.9675C27.1545 18.5941 26.849 18.2886 26.4756 18.2886ZM24.439 2.67477C24.439 1.55465 23.5226 0.638184 22.4025 0.638184H4.75204C3.63191 0.638184 2.71545 1.55465 2.71545 2.67477V16.9309H24.439V2.67477ZM21.7236 14.2154H5.4309V3.35363H21.7236V14.2154Z"
          fill="#F4BE3A"
        />
      </svg>
      <a class="site-identity-logo">Sheehan</a>
    </div>

    <input type="checkbox" id="toggleMenu" @click="toggleMenu" />
    <label for="toggleMenu">
      <svg
        i
        class="ri-menu-line"
        id="toggleIcon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="21"
        viewBox="0 0 24 21"
        fill="none"
      >
        <path
          d="M0.981426 4.09119H22.482C22.9388 4.09119 23.309 3.72098 23.309 3.26425V1.19688C23.309 0.740148 22.9388 0.369934 22.482 0.369934H0.981426C0.524693 0.369934 0.15448 0.740148 0.15448 1.19688V3.26425C0.15448 3.72098 0.524693 4.09119 0.981426 4.09119ZM0.981426 12.3607H22.482C22.9388 12.3607 23.309 11.9904 23.309 11.5337V9.46634C23.309 9.00961 22.9388 8.6394 22.482 8.6394H0.981426C0.524693 8.6394 0.15448 9.00961 0.15448 9.46634V11.5337C0.15448 11.9904 0.524693 12.3607 0.981426 12.3607ZM0.981426 20.6301H22.482C22.9388 20.6301 23.309 20.2599 23.309 19.8032V17.7358C23.309 17.2791 22.9388 16.9089 22.482 16.9089H0.981426C0.524693 16.9089 0.15448 17.2791 0.15448 17.7358V19.8032C0.15448 20.2599 0.524693 20.6301 0.981426 20.6301Z"
          fill="#8E8E9C"
        />
      </svg>
    </label>
    <section class="main-menu">
      <ul class="navigation-menu__labels">
        <li>
          <ThemeButton />
        </li>

        <li>
          <a @click="resetToggle" href="#Projects">Projects</a>
        </li>
        <li>
          <a @click="resetToggle" href="#About">About</a>
        </li>
      </ul>
    </section>
  </nav>
</template>

<script>
import ThemeButton from "./ThemeButton.vue";
export default {
  name: "NavigationComponent",
  components: {
    ThemeButton,
  },
  methods: {
    resetToggle() {
      const menu = document.getElementById("main");
      menu.classList.remove("toggled-true");
      this.checkbox = true;
      this.toggleMenu();
    },
    toggleMenu() {
      this.checkbox = !this.checkbox;

      const toggleMenu = document.getElementById("toggleMenu");
      const menu = document.getElementById("main");

      toggleMenu.checked = this.checkbox;

      toggleMenu.addEventListener("change", function () {
        if (toggleMenu.checked) {
          menu.classList.add("toggled-true");
        } else {
          menu.classList.remove("toggled-true");
        }
      });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #fdfefe;
  font-family: "Cambria";
  font-size: 18px;
}

.navigation-container {
  max-width: 100%;
  margin: 0;
  padding: 0.5rem;
  z-index: 99;
  width: 100%;
  position: fixed;
}

.navigation-menu {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark-background);
  padding-block: 15px;
}

.header {
  display: flex;
  align-items: center;
  gap: 0.4375rem;
  margin-left: 3rem;
}
img {
  height: 60px;
  padding-right: 30px;
}

.navigation-menu a {
  text-decoration: none;
  color: #fdfefe;
}
.navigation-menu button {
  text-decoration: none;
  color: #fdfefe;
  border: none;
  background-color: transparent;
}

.site-identity-logo {
  color: var(--accent-text, #fdffff);
  font-family: Inter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.navigation-menu__labels {
  list-style: none;
  display: flex;
  gap: 25px;
  align-items: flex-end;
}

.navigation-menu__labels > li > a:hover {
  color: var(--dark-highlight);
}
.navigation-menu__labels > li > button:hover {
  color: var(--dark-highlight);
}

#toggleMenu,
.navigation-menu label {
  display: none;
}
.main-menu {
  margin-right: 3rem;
}

@media screen and (max-width: 768px) {
  .main-menu {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    opacity: 1;
  }
  .navigation-container {
    position: fixed;
    background: var(--dark-background);
  }
  .navigation-menu label {
    display: inline-flex;
    align-items: flex-start;
    cursor: pointer;
    color: #fdfefe;
    margin-right: 2rem;
  }

  .navigation-menu__labels {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
    padding: 20px;
  }

  #toggleMenu:checked ~ .main-menu {
    max-height: 75%;
  }
}
</style>
