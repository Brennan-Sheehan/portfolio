<template>
  <div class="profile-container">
    <div class="profile">
      <div class="profile-circle">circle</div>
      <img src="../assets/headshot-nobg.png" alt="profile picture" />
    </div>
    <div class="contact-container">
      <h2>Contact</h2>
      <div class="contact">
        <div class="email">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
          >
            <path
              d="M14.2587 3.64918C14.3694 3.56118 14.5341 3.6435 14.5341 3.7826V9.58771C14.5341 10.34 13.9238 10.9503 13.1715 10.9503H1.36257C0.610318 10.9503 0 10.34 0 9.58771V3.78543C0 3.6435 0.161805 3.56402 0.275353 3.65202C0.911219 4.14595 1.75431 4.7733 4.64977 6.87677C5.24873 7.31392 6.25931 8.23366 7.26704 8.22798C8.28045 8.2365 9.3109 7.29689 9.88715 6.87677C12.7826 4.7733 13.6229 4.14311 14.2587 3.64918ZM7.26704 7.31676C7.92562 7.32812 8.87374 6.48787 9.35064 6.14155C13.1176 3.40789 13.4043 3.16944 14.2729 2.48815C14.4376 2.36041 14.5341 2.1617 14.5341 1.95164V1.41229C14.5341 0.660039 13.9238 0.0497208 13.1715 0.0497208H1.36257C0.610318 0.0497208 0 0.660039 0 1.41229V1.95164C0 2.1617 0.0965154 2.35757 0.261159 2.48815C1.1298 3.1666 1.41651 3.40789 5.18345 6.14155C5.66034 6.48787 6.60847 7.32812 7.26704 7.31676Z"
              fill="#F4BE3A"
            />
          </svg>
          <p>
            <a href="mailto:brennan.sheehan@gmail.com"
              >brennan.sheehan@gmail.com</a
            >
          </p>
        </div>
        <div class="phone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M14.1196 10.2703L10.9402 8.9077C10.8044 8.84982 10.6534 8.83762 10.5101 8.87295C10.3667 8.90827 10.2387 8.98921 10.1454 9.10357L8.73735 10.8238C6.5276 9.78197 4.74927 8.00364 3.70739 5.79389L5.42767 4.38588C5.54226 4.29267 5.62337 4.16467 5.65871 4.02125C5.69405 3.87783 5.68171 3.72681 5.62354 3.59103L4.26095 0.411643C4.19711 0.265281 4.0842 0.14578 3.94169 0.0737481C3.79918 0.00171606 3.636 -0.0183327 3.48029 0.0170589L0.528005 0.698356C0.377884 0.733022 0.243946 0.817549 0.14805 0.93814C0.0521548 1.05873 -3.45818e-05 1.20826 1.7192e-08 1.36234C1.7192e-08 8.6437 5.90174 14.5341 13.1717 14.5341C13.3259 14.5342 13.4755 14.482 13.5961 14.3861C13.7168 14.2902 13.8013 14.1562 13.836 14.0061L14.5173 11.0538C14.5525 10.8973 14.532 10.7335 14.4594 10.5905C14.3868 10.4475 14.2667 10.3343 14.1196 10.2703Z"
              fill="#F4BE3A"
            />
          </svg>
          <p>630-453-1686</p>
        </div>
      </div>
    </div>
    <div class="built-with-container">
      <div class="built-with">
        <div class="vue">
          <img src="../assets/vue-build.svg" alt="Built with Vue 3" />
        </div>
        <div class="firebase">
          <img src="../assets/logo-built_black.svg" alt="Built with Firebase" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileView",
  components: {},
};
</script>

<style scoped>
.profile {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 4rem 2rem 0 2rem;
}
.profile-circle {
  width: 16.25rem;
  height: 16.25rem;
  flex-shrink: 0;
  border-radius: 16.25rem;
  background: var(--dark-background, #272833);
}
.profile img {
  width: 18.875rem;
  height: 20.8125rem;
  flex-shrink: 0;
  position: absolute;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.contact-container {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  background: var(--dark-accent, #4a4962);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 0 2rem 2rem 2rem;
  padding: 0.5rem 1rem 0.5rem 2rem;
}
.contact {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
}
.email {
  display: flex;
  align-items: center;
  gap: 0.8125rem;
}
.email a {
  text-decoration: none;
  color: var(---standard-text);
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: left;
}
.phone {
  display: flex;
  align-items: flex-start;
  gap: 0.8125rem;
}

.built-with-container {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  background: var(--dark-accent, #4a4962);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 0 2rem 2rem 2rem;
  padding: 0rem 1rem 0 1rem;
  justify-content: center;
  align-items: center;
}

.built-with {
  display: flex;
}

.built-with img {
  width: 8rem;
  height: 8rem;
  flex-shrink: 0;
  padding: 0.5rem;
}

@media (min-width: 1300px) {
  .profile-container {
    max-width: 600px;
  }
  .contact-container {
    justify-content: center;
    padding-left: 1rem;
  }
  .contact {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }
  .built-with img {
    width: 10rem;
    height: 10rem;
    flex-shrink: 0;
    margin: 0 2rem 0 2rem;
    padding: 0;
  }
  .built-with {
    justify-content: space-between;
  }
}
</style>
