const main = document.body.getElementsByTagName("main")[0];

const mainProduct = `<h2 class="section-title">Our Coffee Based Products</h1>
<p style="text-align: center;">Locally sourced best ingredients = best coffee.</p>
<div class="products">
      <div class="product-item" data-name="Aren Latte" data-price=18000 data-image="../assets/aren latte.png">
          <p>Aren Latte</p>
          <p>Rp. 18.000</p>
          <img src="../assets/aren latte.png" alt="">
      </div>
      <div class="product-item">
          <p>Cafe Latte</p>
          <p>Rp. 24.000</p>
          <img src="../assets/cafe latte.png" alt="">
      </div>
      <div class="product-item">
          <p>Caramel Latte</p>
          <p>Rp. 30.000</p>
          <img src="../assets/caramel latte.png" alt="">
      </div>
      <div class="product-item">
          <p>Americano</p>
          <p>Rp. 18.000</p>
          <img src="../assets/americano.png" alt="">
      </div>
      <div class="product-item">
          <p>Cappucino</p>
          <p>Rp. 24.000</p>
          <img src="../assets/cappucino.png" alt="">
      </div>
      <div class="product-item">
          <p>Butterscotch</p>
          <p>Rp. 24.000</p>
          <img src="../assets/butterscotch.png" alt="">
      </div>
</div>`;

const menuDetail = (param) => {
  return `<div class="product-detail">
<div class="product-image">
  <img src="${param.image}" alt="" />
</div>
<div class="product-content">
  <h2>${param.name}</h2>
  <p>Smooth like butter like criminal undercover.</p>
  <h3>${param.price},-</h3>
</div>
</div>
<div class="product-desc">
<h2 class="underline">Description</h2>
<p>
  Made with a perfect combination of freshly grinded arabica coffee
  beans, full cream milk, and exquisite butterscotch sauce. Perfect for
  those who crave little bit of sweet things in their life.
</p>
<button class="btn">< Back to our products</button>
</div>`;
};

document.body.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.parentElement.classList.contains("product-item")) {
    main.setAttribute("id", "");
    const parent = e.target.parentElement;
    let dataset = {
      name: `${parent.children[0].textContent}`,
      price: `${parent.children[1].textContent}`,
      image: `${parent.children[2].getAttribute("src")}`,
    };
    return (main.innerHTML = menuDetail(dataset));
  }
  if (e.target.classList.contains("btn")) {
    main.setAttribute("id", "menu-main");
    return (main.innerHTML = mainProduct);
  }
});
