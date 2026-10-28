const products = [
  {
    id: 1,
    name: "Máscara de Hidratação Intensa Kérastase",
    category: "Cabelos",
    price: 281.73,
    description: "Limpa suavemente os fios e ajuda a manter a hidratação.",
    image: "Galeria/M%C3%A1cara%20Hidrata%C3%A7%C3%A3o%20intensa%20K%C3%A9rastase.webp",
    tag: "Mais vendido"
  },
  {
    id: 2,
    name: "Kit máscara e Shampoo Kérastase Discipline",
    category: "Cabelos",
    price: 546.25,
    description: "Ajuda a desembaraçar e deixar os fios macios e brilhantes.",
    image: "Galeria/Kit%20capilar%20K%C3%A9rastase.webp",
    tag: "Queridinho"
  },
  {
    id: 3,
    name: "Truss Uso Obrigatório",
    category: "Cabelos",
    price: 99.90,
    description: "Tratamento reconstrutor sem enxágue para cuidar dos fios.",
    image: "Galeria/Truss%20uso%20obrigat%C3%B3rio.webp",
    tag: "Favorito"
  },
  {
    id: 4,
    name: "Finalizador em Barra Dream Curly",
    category: "Cabelos",
    price: 94.05,
    description: "Finaliza o penteado e ajuda a controlar o frizz.",
    image: "Galeria/Finalizador%20em%20Barra.webp",
    tag: "Novidade"
  },
  {
    id: 5,
    name: "Mácara de Nutrição NutriOil",
    category: "Cabelos",
    price: 377.99,
    description: "Tratamento de hidratação intensa para fios macios e brilhantes.",
    image: "Galeria/M%C3%A1scara%20NutriOil.jpeg",
    tag: "Hidratação"
  },
  {
    id: 6,
    name: "Escova Tangle Teezer",
    category: "Cabelos",
    price: 94.41,
    description: "Escova desembaraçadora para ajudar a pentear sem puxar os fios.",
    image: "Galeria/Escova%20de%20cabelo%20tangle%20teezer.webp",
    tag: "Mais vendido"
  },
  {
    id: 7,
    name: "Óleo Capilar Wella",
    category: "Cabelos",
    price: 129.90,
    description: "Óleo capilar para nutrir os fios e realçar o brilho.",
    image: "Galeria/%C3%93leo%20capilar%20Wella.webp",
    tag: "Novidade"
  },
  {
    id: 8,
    name: "Acidificante Capilar",
    category: "Cabelos",
    price: 39.90,
    description: "Máscara de equilíbrio do pH para cuidar dos fios.",
    image: "Galeria/Acidificante%20capilar.webp",
    tag: "Tratamento"
  }
];

const $ = id => document.getElementById(id);

let cart = [];
let toastTimer;
let currentSlide = 0;
let carouselTimer;

const formatPrice = value =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

// MOSTRAR PRODUTOS

function renderProducts(search = "") {
  const query = search.trim().toLocaleLowerCase("pt-BR");

  const filtered = products.filter(product =>
    `${product.name} ${product.category} ${product.description}`
      .toLocaleLowerCase("pt-BR")
      .includes(query)
  );

  $("resultsCount").textContent =
    `${filtered.length} ${filtered.length === 1 ? "produto" : "produtos"}`;

  $("emptyResults").hidden = filtered.length > 0;

  $("productGrid").innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >
        <span class="product-tag">${product.tag}</span>
      </div>

      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>

        <div class="product-bottom">
          <span class="product-price">${formatPrice(product.price)}</span>
          <button class="add-button" data-add="${product.id}">
            Comprar agora
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// NOTIFICAÇÕES

function showToast(message) {
  $("toast").textContent = message;
  $("toast").classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    $("toast").classList.remove("show");
  }, 2500);
}

// CARRINHO DE COMPRAS

function addToCart(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
  showToast(`${product.name} adicionado ao carrinho!`);
}

function changeQuantity(id, amount) {
  const item = cart.find(product => product.id === id);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(product => product.id !== id);
  }

  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(product => product.id !== id);
  renderCart();
}

function renderCart() {
  const quantity = cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  $("cartCount").textContent = quantity;
  $("cartTotal").textContent = formatPrice(total);

  if (cart.length === 0) {
    $("cartItems").innerHTML =
      '<p class="cart-empty">Seu carrinho está vazio.</p>';
    return;
  }

  $("cartItems").innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">

      <div>
        <h3>${item.name}</h3>
        <span class="cart-line-price">
          ${formatPrice(item.price * item.quantity)}
        </span>

        <div class="quantity-controls">
          <button data-quantity="${item.id}" data-delta="-1"
            aria-label="Diminuir quantidade">−</button>

          <span>${item.quantity}</span>

          <button data-quantity="${item.id}" data-delta="1"
            aria-label="Aumentar quantidade">+</button>
        </div>
      </div>

      <button class="remove-item" data-remove="${item.id}"
        aria-label="Remover produto">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `).join("");
}

function openCart() {
  $("cartDrawer").classList.add("open");
  $("cartBackdrop").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  $("cartDrawer").classList.remove("open");
  $("cartBackdrop").classList.remove("open");
  document.body.style.overflow = "";
}

$("productGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(Number(button.dataset.add));
});

$("cartItems").addEventListener("click", event => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");

  if (quantityButton) {
    changeQuantity(
      Number(quantityButton.dataset.quantity),
      Number(quantityButton.dataset.delta)
    );
  }

  if (removeButton) {
    removeFromCart(Number(removeButton.dataset.remove));
  }
});

$("cartButton").addEventListener("click", openCart);
$("closeCart").addEventListener("click", closeCart);
$("cartBackdrop").addEventListener("click", closeCart);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeCart();
});

// PESQUISA

$("searchForm").addEventListener("submit", event => {
  event.preventDefault();
  renderProducts($("searchInput").value);
  $("produtos").scrollIntoView({ behavior: "smooth" });
});

$("searchInput").addEventListener("input", event => {
  renderProducts(event.target.value);
});

// FINALIZAR PEDIDO PELO WHATSAPP

$("checkoutButton").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Adicione produtos ao carrinho primeiro.");
    return;
  }

  // Substitua pelo número real da loja: país + DDD + número.
  const whatsappNumber = "5511999999999";

  const items = cart.map(item =>
    `${item.quantity}x ${item.name} - ${formatPrice(item.price * item.quantity)}`
  ).join("\n");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const message =
    `Olá! Gostaria de fazer um pedido na Vitta Store:\n\n` +
    `${items}\n\nTotal: ${formatPrice(total)}`;

  const url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
});

// MODO CLARO E ESCURO

const themeButton = $("themeToggle");

function setTheme(dark) {
  document.body.classList.toggle("dark", dark);

  themeButton.innerHTML = dark
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';

  themeButton.setAttribute(
    "aria-label",
    dark ? "Ativar modo claro" : "Ativar modo escuro"
  );

  try {
    localStorage.setItem("vitta-theme", dark ? "dark" : "light");
  } catch (error) {
    // O tema continua funcionando mesmo sem armazenamento local.
  }
}

let savedTheme = "light";

try {
  savedTheme = localStorage.getItem("vitta-theme") || "light";
} catch (error) {}

setTheme(savedTheme === "dark");

themeButton.addEventListener("click", () => {
  setTheme(!document.body.classList.contains("dark"));
});

// MENU PARA CELULAR

$("menuToggle").addEventListener("click", () => {
  const nav = $("nav");
  const isOpen = nav.classList.toggle("open");

  $("menuToggle").innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    $("nav").classList.remove("open");
    $("menuToggle").innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

// CARROSSEL COM QUATRO BANNERS

const slides = [...document.querySelectorAll(".slide")];

slides.forEach((slide, index) => {
  const dot = document.createElement("button");

  dot.setAttribute("aria-label", `Ir para o banner ${index + 1}`);

  dot.addEventListener("click", () => {
    showSlide(index);
    restartCarousel();
  });

  $("dots").appendChild(dot);
});

const dots = [...$("dots").querySelectorAll("button")];

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

function restartCarousel() {
  clearInterval(carouselTimer);

  carouselTimer = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
}

$("prevSlide").addEventListener("click", () => {
  showSlide(currentSlide - 1);
  restartCarousel();
});

$("nextSlide").addEventListener("click", () => {
  showSlide(currentSlide + 1);
  restartCarousel();
});

$("carousel").addEventListener("mouseenter", () => {
  clearInterval(carouselTimer);
});

$("carousel").addEventListener("mouseleave", restartCarousel);

showSlide(0);
restartCarousel();

// ANO AUTOMÁTICO NO RODAPÉ

$("year").textContent = new Date().getFullYear();

// INICIAR A LOJA

renderProducts();
renderCart();
