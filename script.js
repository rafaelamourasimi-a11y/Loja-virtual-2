const products = [
  {
    id: 1,
    name: "Máscara Kérastase Discipline",
    category: "Controle de frizz",
    productType: "Máscara capilar",
    brand: "Kérastase",
    price: 281.73,
    description: "Máscara da linha Discipline, conforme identificação da embalagem.",
    image: "Galeria/M%C3%A1scara%20Hidrata%C3%A7%C3%A3o%20intensa%20K%C3%A9rastase.webp",
    size: "200 ml",
    indication: "",
    usage: "",
    tag: "Destaque"
  },
  {
    id: 2,
    name: "Kit Kérastase Discipline: shampoo e máscara",
    category: "Controle de frizz",
    productType: "Kit capilar",
    brand: "Kérastase",
    price: 546.25,
    description: "Kit da linha Discipline com um shampoo e uma máscara.",
    image: "Galeria/Kit%20capilar%20K%C3%A9rastase.webp",
    indication: "Cabelos indisciplinados, conforme a embalagem do kit.",
    usage: "",
    kitContents: "1 shampoo de 250 ml e 1 máscara de 200 ml."
  },
  {
    id: 3,
    name: "Truss Uso Obrigatório",
    category: "Reconstrução",
    productType: "Leave-in",
    brand: "TRUSS",
    price: 99.90,
    description: "Leave-in reconstrutor TRUSS Uso Obrigatório.",
    image: "Galeria/Truss%20uso%20obrigat%C3%B3rio.webp",
    size: "260 ml",
    indication: "Todos os tipos de cabelo, conforme a embalagem.",
    usage: ""
  },
  {
    id: 4,
    name: "Finalizador em Barra Dream Curly",
    category: "Finalização",
    productType: "Barra finalizadora",
    brand: "B.Hulmann",
    price: 94.05,
    description: "Barra ativadora 2 em 1 Dream Curly.",
    image: "Galeria/Finalizador%20em%20Barra.webp",
    size: "80 g",
    indication: "",
    usage: ""
  },
  {
    id: 5,
    name: "Condicionador NutriOil",
    category: "Nutrição",
    productType: "Condicionador",
    brand: "L’Oréal Professionnel",
    price: 377.99,
    description: "Condicionador NutriOil, conforme identificação da embalagem.",
    image: "Galeria/M%C3%A1scara%20NutriOil.jpeg",
    size: "500 ml",
    indication: "Cabelos secos, conforme a embalagem.",
    usage: ""
  },
  {
    id: 6,
    name: "Escova Tangle Teezer",
    category: "Acessórios",
    productType: "Escova",
    brand: "Tangle Teezer",
    price: 94.41,
    description: "Escova desembaraçadora Tangle Teezer.",
    image: "Galeria/Escova%20de%20cabelo%20tangle%20teezer.webp",
    hairTypes: ["Lisos", "Cacheados"],
    indication: "",
    usage: "",
    tag: "Destaque"
  },
  {
    id: 7,
    name: "Óleo capilar Wella Oil Reflections",
    category: "Nutrição",
    productType: "Óleo capilar",
    brand: "Wella Professionals",
    price: 129.90,
    description: "Óleo capilar Wella Oil Reflections.",
    image: "Galeria/%C3%93leo%20capilar%20Wella.webp",
    size: "100 ml",
    indication: "",
    usage: ""
  },
  {
    id: 8,
    name: "Máscara Acidificante Amend Essential",
    category: "",
    productType: "Máscara acidificante",
    brand: "Amend",
    price: 39.90,
    description: "Máscara acidificante para equilíbrio do pH, conforme a embalagem.",
    image: "Galeria/Acidificante%20capilar.webp",
    size: "250 g",
    indication: "",
    usage: ""
  },
  {
    id: 9,
    name: "Cera Antifrizz Dream Curly",
    category: "Controle de frizz",
    categories: ["Controle de frizz", "Finalização"],
    productType: "Cera finalizadora",
    brand: "B.Hulmann",
    price: null,
    description: "Cera capilar antifrizz da linha Dream Curly.",
    image: "Galeria/Cera%20Capilar%20Finalizadora%20Antifrizz.webp",
    size: "20 g",
    indication: "",
    usage: ""
  },
  {
    id: 10,
    name: "Escova polvo desembaraçadora",
    category: "Acessórios",
    productType: "Escova",
    brand: "",
    price: null,
    description: "Escova de cabelo modelo polvo; a marca não está identificada na imagem.",
    image: "Galeria/Escova%20polvo.webp",
    indication: "",
    usage: ""
  },
  {
    id: 11,
    name: "Máscara Wella Professionals Oil Reflections Luminous Reboost",
    category: "Nutrição",
    productType: "Máscara capilar",
    brand: "Wella Professionals",
    price: 142.90,
    description: "Máscara Luminous Reboost da linha Oil Reflections.",
    image: "Galeria/M%C3%A1scara%20de%20Hidrata%C3%A7%C3%A3o%20Oil%20Reflections.jpeg",
    size: "500 ml",
    indication: "",
    usage: ""
  },
  {
    id: 12,
    name: "Máscara Siàge Reconstrói os Fios 4D",
    category: "Reconstrução",
    productType: "Máscara capilar",
    brand: "Eudora",
    price: 66.40,
    description: "Máscara de reconstrução intensiva para cabelos danificados.",
    image: "Galeria/M%C3%A1scara%20de%20reconstru%C3%A7%C3%A3o%20Si%C3%A1ge.png",
    size: "250 g",
    indication: "Cabelos danificados, conforme a embalagem.",
    usage: ""
  },
  {
    id: 13,
    name: "Leave-in Braé Divine Absolutely Smooth Ten In One",
    category: "Finalização",
    productType: "Leave-in",
    brand: "Braé",
    price: 125.57,
    description: "Leave-in da linha Divine Absolutely Smooth Ten In One.",
    image: "Galeria/Protetor%20t%C3%A9rmico%20bra%C3%A9.webp",
    size: "200 g",
    indication: "Cabelos danificados, conforme a embalagem.",
    usage: ""
  },
  {
    id: 14,
    name: "Revlon Professional Uniq One All In One Hair Treatment",
    category: "Finalização",
    productType: "Tratamento em spray",
    brand: "Revlon Professional",
    price: null,
    description: "Tratamento capilar Uniq One All In One.",
    image: "Galeria/Protetor%20t%C3%A9rmico%20Revlon.jpeg",
    size: "150 ml",
    indication: "",
    usage: ""
  }
];

const $ = id => document.getElementById(id);

let cart = [];
let toastTimer;
let currentSlide = 0;
let carouselTimer;
const whatsappNumber = "5511940291936";
const selectedHairTextures = new Map();
let recommendationHairTypes = null;

const formatPrice = value =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

const hasReferencePrice = product =>
  typeof product.price === "number" && Number.isFinite(product.price);

const getProductCategories = product =>
  product.categories || (product.category ? [product.category] : []);

// MOSTRAR PRODUTOS

function renderProducts() {
  const query = $("searchInput").value.trim().toLocaleLowerCase("pt-BR");
  const category = $("categoryFilter").value;
  const brand = $("brandFilter").value;
  const hairType = $("hairTypeFilter").value;
  const priceRange = $("priceFilter").value;

  document.querySelectorAll(".filters label").forEach(label => {
    const select = label.querySelector("select");
    label.classList.toggle("is-selected", Boolean(select && select.value));
  });

  const filtered = products.filter(product => {
    const searchableText =
      `${product.name} ${product.brand} ${product.productType || ""} ` +
      `${getProductCategories(product).join(" ")} ${product.description}`
        .toLocaleLowerCase("pt-BR");
    const matchesQuery = searchableText.includes(query);
    const matchesCategory =
      !category || getProductCategories(product).includes(category);
    const matchesBrand = !brand || product.brand === brand;
    const matchesHairType =
      !hairType || (product.hairTypes || []).includes(hairType);
    const matchesHairRecommendation =
      !recommendationHairTypes ||
      recommendationHairTypes.some(type => (product.hairTypes || []).includes(type));
    const [minimum, maximum] = priceRange.split("-");
    const matchesPrice = !priceRange ||
      (hasReferencePrice(product) &&
        product.price >= Number(minimum) &&
        (!maximum || product.price <= Number(maximum)));

    return matchesQuery && matchesCategory && matchesBrand &&
      matchesHairType && matchesHairRecommendation && matchesPrice;
  });

  $("resultsCount").textContent =
    `${filtered.length} ${filtered.length === 1 ? "produto encontrado" : "produtos encontrados"}`;

  const emptyResults = $("emptyResults");
  emptyResults.hidden = filtered.length > 0;
  if (!filtered.length && recommendationHairTypes) {
    const matchingProducts = products.some(product =>
      recommendationHairTypes.some(type => (product.hairTypes || []).includes(type))
    );
    const selectedNames = [...selectedHairTextures.keys()].join(", ");
    emptyResults.textContent = matchingProducts
      ? "Nenhum produto corresponde aos filtros atuais para as texturas selecionadas. Ajuste os filtros ou limpe a seleção."
      : `Ainda não há produtos no catálogo com indicação registrada para ${selectedNames}.`;
  } else {
    emptyResults.textContent =
      "Nenhum produto corresponde à busca e aos filtros. Ajuste os critérios ou limpe a seleção.";
  }

  $("productGrid").innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >
        ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ""}
      </div>

      <div class="product-info">
        <span class="product-category">
          ${product.productType ? `${product.productType} · ` : ""}
          ${getProductCategories(product).join(" · ") || "Categoria a confirmar"}
        </span>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>

        <div class="product-bottom">
          <div class="product-price-block">
            <span class="product-price">
              ${hasReferencePrice(product) ? formatPrice(product.price) : "Preço pendente"}
            </span>
            <small class="price-note">
              ${hasReferencePrice(product) ? "Preço de referência" : "Valor a confirmar"}
            </small>
          </div>
          <div class="product-actions">
            <button class="details-button" type="button" data-details="${product.id}">Detalhes</button>
            <button class="add-button" type="button" data-add="${product.id}"
              ${hasReferencePrice(product) ? "" : "disabled aria-label=\"Preço pendente; adição ao carrinho indisponível\""}>
              ${hasReferencePrice(product) ? "Adicionar" : "Preço pendente"}
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

function populateFilters() {
  const brands = [...new Set(products.map(product => product.brand).filter(Boolean))]
    .sort((first, second) => first.localeCompare(second, "pt-BR"));
  const hairTypes = [...new Set(products.flatMap(product => product.hairTypes || []))]
    .sort((first, second) => first.localeCompare(second, "pt-BR"));

  brands.forEach(brand => {
    $("brandFilter").add(new Option(brand, brand));
  });

  hairTypes.forEach(type => {
    $("hairTypeFilter").add(new Option(type, type));
  });

  $("hairTypeFilter").disabled = hairTypes.length === 0;
  $("hairTypeNote").hidden = false;
  $("hairTypeNote").textContent = hairTypes.length
    ? "O filtro usa somente os tipos identificados no cadastro; alguns produtos não têm essa informação."
    : "Tipos de cabelo ainda não informados no cadastro.";
}

function renderProductDetails(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  const detail = (label, value) => `
    <div class="detail-row">
      <dt>${label}</dt>
      <dd>${value || "Não informado no cadastro."}</dd>
    </div>
  `;

  $("dialogTitle").textContent = product.name;
  $("productDetails").innerHTML = `
    <p class="detail-price">
      ${hasReferencePrice(product) ? formatPrice(product.price) : "Preço de referência a confirmar."}
    </p>
    <dl>
      ${detail("Marca", product.brand || "Não identificada na imagem.")}
      ${detail("Tipo de produto", product.productType)}
      ${detail("Categoria(s)", getProductCategories(product).join(", ") || "A confirmar")}
      ${product.size ? detail("Volume ou peso", product.size) : ""}
      ${detail("Indicação", product.indication)}
      ${detail("Modo de usar", product.usage)}
      ${product.kitContents ? detail("Conteúdo do kit", product.kitContents) : ""}
    </dl>
  `;
  $("productDialog").showModal();
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
  if (!hasReferencePrice(product)) {
    showToast("O preço deste produto ainda precisa ser confirmado.");
    return;
  }

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
  const detailsButton = event.target.closest("[data-details]");
  if (button) addToCart(Number(button.dataset.add));
  if (detailsButton) renderProductDetails(Number(detailsButton.dataset.details));
});

$("closeProductDialog").addEventListener("click", () => {
  $("productDialog").close();
});

$("productDialog").addEventListener("click", event => {
  if (event.target === $("productDialog")) $("productDialog").close();
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
  if (event.key === "Escape") {
    closeCart();
    if ($("productDialog").open) $("productDialog").close();
  }
});

// PESQUISA

$("searchForm").addEventListener("submit", event => {
  event.preventDefault();
  renderProducts();
  $("produtos").scrollIntoView({ behavior: "smooth" });
});

["searchInput", "categoryFilter", "brandFilter", "priceFilter", "hairTypeFilter"]
  .forEach(id => {
    $(id).addEventListener(id === "searchInput" ? "input" : "change", renderProducts);
  });

$("clearFilters").addEventListener("click", () => {
  recommendationHairTypes = null;
  $("searchInput").value = "";
  $("categoryFilter").value = "";
  $("brandFilter").value = "";
  $("priceFilter").value = "";
  $("hairTypeFilter").value = "";
  renderProducts();
  $("searchInput").focus();
});

function updateSelectedHairTextures() {
  document.querySelectorAll("[data-texture-select]").forEach(button => {
    const selected = selectedHairTextures.has(button.dataset.texture);
    button.setAttribute("aria-pressed", String(selected));
    button.closest(".hair-texture-card").classList.toggle("is-selected", selected);
  });

  const selectedNames = [...selectedHairTextures.keys()];
  $("selectedHairTextures").textContent = selectedNames.length
    ? `Texturas selecionadas: ${selectedNames.join(", ")}. Você pode escolher mais de uma.`
    : "Você ainda não selecionou uma textura.";
  $("showHairProducts").hidden = selectedNames.length === 0;
  recommendationHairTypes = null;
  renderProducts();
}

document.querySelectorAll("[data-texture-select]").forEach(button => {
  button.addEventListener("click", () => {
    const texture = button.dataset.texture;
    if (selectedHairTextures.has(texture)) {
      selectedHairTextures.delete(texture);
    } else {
      selectedHairTextures.set(texture, button.dataset.hairType);
    }

    updateSelectedHairTextures();
  });
});

$("showHairProducts").addEventListener("click", () => {
  recommendationHairTypes = [...new Set(selectedHairTextures.values())];
  $("hairTypeFilter").value = "";
  renderProducts();
  $("produtos").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll("[data-category-link]").forEach(link => {
  link.addEventListener("click", () => {
    $("categoryFilter").value = link.dataset.categoryLink;
    renderProducts();
  });
});

document.querySelectorAll("[data-guide-toggle]").forEach(button => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    document.querySelectorAll("[data-guide-toggle]").forEach(toggle => {
      const panel = $(toggle.getAttribute("aria-controls"));
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML =
        'Ver dicas <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>';
      panel.hidden = true;
    });

    if (!isExpanded) {
      const panel = $(button.getAttribute("aria-controls"));
      button.setAttribute("aria-expanded", "true");
      button.innerHTML =
        'Fechar dicas <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>';
      panel.hidden = false;
    }
  });

  button.addEventListener("keydown", event => {
    if ((event.key === "Enter" || event.key === " ") && !event.repeat) {
      event.preventDefault();
      button.click();
    }
  });
});

// FINALIZAR PEDIDO PELO WHATSAPP

$("checkoutButton").addEventListener("click", () => {
  if (!whatsappNumber) {
    showToast("Informe o número oficial de WhatsApp para habilitar o envio do pedido.");
    return;
  }

  if (cart.length === 0) {
    showToast("Adicione produtos ao carrinho primeiro.");
    return;
  }

  const items = cart.map(item =>
    `${item.quantity}x ${item.name} - ${formatPrice(item.price * item.quantity)}`
  ).join("\n");
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );
  const message =
    `Olá! Gostaria de fazer um pedido na Maison Rosé:\n\n` +
    `${items}\n\nSubtotal dos produtos: ${formatPrice(total)}`;
  const url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
});

$("checkoutButton").disabled = !whatsappNumber;
$("checkoutButton").textContent = whatsappNumber
  ? "Enviar pedido pelo WhatsApp"
  : "WhatsApp de pedidos a informar";

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

  $("menuToggle").setAttribute("aria-expanded", String(isOpen));
  $("menuToggle").setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  $("menuToggle").innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    $("nav").classList.remove("open");
    $("menuToggle").setAttribute("aria-expanded", "false");
    $("menuToggle").setAttribute("aria-label", "Abrir menu");
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

populateFilters();
renderProducts();
renderCart();
