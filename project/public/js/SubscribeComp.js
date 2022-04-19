Vue.component('subscribe-el', {
  template: `
  <section class="subscribe">
  <div class="subscribe-items content-center">
    <div class="subscribe-info">
      <img src="img/avatar.png" alt="avatar" height="96">
      <p class="subscribe-info-text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span>a pulvinar
          purus condimentum“</span></p>
    </div>
    <div class="subscribe-form-wrp">
      <h3 class="subscribe-form-title">subscribe
        <span class="subscribe-form-subtitle">for our newletter and promotion </span>
      </h3>
      <form action="#" class="subscribe-form">
        <input class="subscribe-form-email" type="email" placeholder="Enter Your Email" required>
        <input class="subscribe-form-btn" type="submit" value="Subscribe">
      </form>
    </div>
  </div>
</section> `
});