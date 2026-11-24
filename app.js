/* ============================================================================
   SUPABASE_CONFIG
   Step 3: set url + anonKey, install @supabase/supabase-js, and replace the
   localStorage bodies inside dataService with the queries noted below.
   The UI only ever talks to dataService, so nothing else needs to change.
   ========================================================================== */
const SUPABASE_CONFIG = {
  SUPABASE_URL: "",              // e.g. "https://your-project.supabase.co"
  SUPABASE_ANON_KEY: "",         // public anon key
  menuTable: "menu_items",
  ordersTable: "orders",
};

// Step 3, once the two values above are set:
// const supabase = window.supabase.createClient(
//   SUPABASE_CONFIG.SUPABASE_URL,
//   SUPABASE_CONFIG.SUPABASE_ANON_KEY
// );

const DELIVERY_FEE = 200;
const STORAGE_KEYS = {
  orders: "ded_orders_v1",
  cart: "ded_cart_v1",
};

const CATEGORY_LABELS = {
  all: "All",
  traditional: "Traditional",
  grills: "Grills",
  fast: "Fast Food",
  drinks: "Drinks",
};

const ORDER_TYPES = {
  "dine-in": { label: "Dine-in", eta: "20 to 30 min" },
  takeaway: { label: "Takeaway", eta: "15 to 25 min" },
  delivery: { label: "Local delivery", eta: "30 to 40 min" },
};

const STATUS_FLOW = ["pending", "preparing", "ready", "completed"];

const STATUSES = {
  pending: {
    label: "Pending",
    icon: "clock",
    note: "The kitchen has your order and will start on it shortly.",
  },
  preparing: {
    label: "Preparing",
    icon: "flame",
    note: "Your order is being cooked now.",
  },
  ready: {
    label: "Ready",
    icon: "circle-check",
    note: "Your order is ready. See you at the counter or your table.",
  },
  completed: {
    label: "Completed",
    icon: "circle-check",
    note: "This order is complete. Thank you for eating with us.",
  },
};

const PICKUP_LABELS = {
  asap: "ASAP",
  "in-20-min": "In 20 min",
};

const MENU_SEED = [
  {
    id: "chakhchoukha-batnia",
    name: "Chakhchoukha Batnia",
    description: "Torn semolina, slow lamb, chickpeas and a deep ras el hanout sauce.",
    category: "traditional",
    price: 1400,
    prepMinutes: 35,
    icon: "wheat",
    available: true,
  },
  {
    id: "couscous-djazair",
    name: "Couscous El Djazair",
    description: "Hand-rolled couscous with lamb, turnip, carrot and chickpeas.",
    category: "traditional",
    price: 1200,
    prepMinutes: 30,
    icon: "salad",
    available: true,
  },
  {
    id: "tajine-zitoune",
    name: "Tajine Zitoune",
    description: "Chicken, green olives, mushrooms and preserved lemon.",
    category: "traditional",
    price: 1500,
    prepMinutes: 30,
    icon: "cooking-pot",
    available: false,
  },
  {
    id: "bourek-annabi",
    name: "Bourek Annabi",
    description: "Three crisp rolls with minced beef, egg and parsley.",
    category: "traditional",
    price: 450,
    prepMinutes: 15,
    icon: "scroll-text",
    available: true,
  },
  {
    id: "chorba-frik",
    name: "Chorba Frik",
    description: "Green wheat soup with lamb, tomato and fresh coriander.",
    category: "traditional",
    price: 350,
    prepMinutes: 15,
    icon: "soup",
    available: true,
  },
  {
    id: "mhajeb-batna",
    name: "Mhajeb Batna",
    description: "Pan-fried semolina flatbread with tomato, onion and harissa.",
    category: "traditional",
    price: 400,
    prepMinutes: 15,
    icon: "pizza",
    available: true,
  },
  {
    id: "mechoui-plate",
    name: "Mechoui Plate",
    description: "Slow-roasted lamb shoulder with cumin salt and grilled peppers.",
    category: "grills",
    price: 2200,
    prepMinutes: 40,
    icon: "beef",
    available: true,
  },
  {
    id: "merguez-grill",
    name: "Merguez Grill",
    description: "House lamb merguez, thick fries and a small salad.",
    category: "grills",
    price: 1100,
    prepMinutes: 25,
    icon: "flame",
    available: true,
  },
  {
    id: "poulet-chermoula",
    name: "Poulet Chermoula",
    description: "Half chicken, chermoula, grilled lemon and fresh khobz.",
    category: "grills",
    price: 1300,
    prepMinutes: 30,
    icon: "drumstick",
    available: true,
  },
  {
    id: "brochettes-boeuf",
    name: "Brochettes de Bœuf",
    description: "Charcoal beef skewers with onion, peppers and khobz.",
    category: "grills",
    price: 1500,
    prepMinutes: 25,
    icon: "utensils-crossed",
    available: true,
  },
  {
    id: "kefta-kebab",
    name: "Kefta Kebab",
    description: "Minced beef kefta with parsley, onion and grilled tomato.",
    category: "grills",
    price: 1200,
    prepMinutes: 25,
    icon: "flame",
    available: false,
  },
  {
    id: "chicken-shawarma",
    name: "Chicken Shawarma",
    description: "Marinated chicken, garlic sauce and fries, wrapped in khobz.",
    category: "fast",
    price: 750,
    prepMinutes: 10,
    icon: "sandwich",
    available: true,
  },
  {
    id: "tacos-gratine",
    name: "Tacos Gratiné",
    description: "Chicken, fries and cheese sauce, gratinated in a pressed wrap.",
    category: "fast",
    price: 900,
    prepMinutes: 12,
    icon: "flame",
    available: true,
  },
  {
    id: "burger-ded",
    name: "Burger Dar El Djazair",
    description: "Beef patty, cheddar, caramelised onion and house sauce.",
    category: "fast",
    price: 1000,
    prepMinutes: 15,
    icon: "hamburger",
    available: true,
  },
  {
    id: "frites-maison",
    name: "Frites Maison",
    description: "Thick-cut fries, sea salt and harissa mayo on the side.",
    category: "fast",
    price: 250,
    prepMinutes: 8,
    icon: "utensils",
    available: true,
  },
  {
    id: "mint-tea",
    name: "Mint Tea",
    description: "Fresh mint, gunpowder green tea and sugar, served in a glass.",
    category: "drinks",
    price: 150,
    prepMinutes: 5,
    icon: "leaf",
    available: true,
  },
  {
    id: "hamoud-boualem",
    name: "Hamoud Boualem",
    description: "The classic Batna table soda, served cold.",
    category: "drinks",
    price: 200,
    prepMinutes: 2,
    icon: "cup-soda",
    available: true,
  },
  {
    id: "orange-juice",
    name: "Fresh Orange Juice",
    description: "Pressed to order, no sugar added.",
    category: "drinks",
    price: 300,
    prepMinutes: 5,
    icon: "citrus",
    available: true,
  },
  {
    id: "cafe-express",
    name: "Café Express",
    description: "Dark roast, short and strong. Sugar on the side.",
    category: "drinks",
    price: 120,
    prepMinutes: 4,
    icon: "coffee",
    available: true,
  },
  {
    id: "lben",
    name: "Lben",
    description: "Chilled buttermilk with a pinch of cumin.",
    category: "drinks",
    price: 150,
    prepMinutes: 2,
    icon: "milk",
    available: true,
  },
];

/* --------------------------------------------------------------------------
   Data layer. Everything reads/writes here, so the localStorage bodies can be
   swapped for Supabase without touching the UI.
   ------------------------------------------------------------------------ */
let ordersCache = null;

function readOrders(fresh = false) {
  if (!fresh && ordersCache) return ordersCache;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.orders);
    const parsed = raw ? JSON.parse(raw) : [];
    if (Array.isArray(parsed)) ordersCache = parsed;
    else if (!ordersCache) ordersCache = [];
  } catch (error) {
    if (!ordersCache) ordersCache = [];
  }
  return ordersCache;
}

function writeOrders(orders) {
  ordersCache = orders;
  try {
    localStorage.setItem(STORAGE_KEYS.orders, JSON.stringify(orders));
  } catch (error) {
    console.warn("Orders are kept in memory for this session only.", error);
  }
}

function nextOrderCode(orders) {
  const used = new Set(orders.map((order) => order.code));
  let code = "";
  do {
    code = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
  } while (used.has(code));
  return code;
}

const dataService = {
  async getMenuItems() {
    // Step 3:
    // const { data, error } = await supabase
    //   .from(SUPABASE_CONFIG.menuTable).select("*")
    //   .order("sort_order", { ascending: true });
    // if (error) throw error;
    // return data; // keep unavailable rows: the UI shows them as sold out
    return MENU_SEED.map((item) => ({ ...item }));
  },

  async createOrder(order) {
    // Step 3:
    // const { data, error } = await supabase
    //   .from(SUPABASE_CONFIG.ordersTable).insert(order).select().single();
    // if (error) throw error;
    // return data;
    const orders = readOrders();
    const subtotal = order.items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const deliveryFee = order.type === "delivery" ? DELIVERY_FEE : 0;
    const record = {
      id: `ord_${Date.now()}`,
      code: nextOrderCode(orders),
      status: "pending",
      createdAt: new Date().toISOString(),
      ...order,
      subtotal,
      deliveryFee,
      total: subtotal + deliveryFee,
    };
    orders.unshift(record);
    writeOrders(orders);
    return { ...record };
  },

  async getOrderByCode(code) {
    // Step 3:
    // const { data, error } = await supabase
    //   .from(SUPABASE_CONFIG.ordersTable).select("*")
    //   .eq("code", code.trim().toUpperCase()).maybeSingle();
    // if (error) throw error;
    // return data;
    const normalized = String(code || "").trim().toUpperCase();
    return readOrders(true).find((order) => order.code === normalized) || null;
  },
};

/* --------------------------------------------------------------------------
   State + helpers
   ------------------------------------------------------------------------ */
const state = {
  menu: [],
  category: "all",
  cart: new Map(),
  trackCode: null,
  trackStatus: null,
  trackPoll: null,
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatDA(amount) {
  return `${new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(amount)} DA`;
}

function formatDate(iso) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Africa/Algiers",
    }).format(new Date(iso));
  } catch (error) {
    return "";
  }
}

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons({ attrs: { "stroke-width": 1.75 } });
  }
}

function announce(message) {
  const region = $("#liveRegion");
  if (!region) return;
  region.textContent = "";
  window.setTimeout(() => {
    region.textContent = message;
  }, 30);
}

function normalizePhone(value) {
  return String(value || "").replace(/[\s\-().]/g, "");
}

function isValidAlgerianPhone(value) {
  return /^0[567]\d{8}$/.test(normalizePhone(value));
}

function normalizeTable(value) {
  const digits = String(value || "").replace(/\D/g, "");
  return digits ? `Table ${Number(digits)}` : "";
}

function getOrderType() {
  return $('input[name="orderType"]:checked')?.value || "takeaway";
}

function getPickup() {
  return $('input[name="pickup"]:checked')?.value || "asap";
}

function getCartItems() {
  return [...state.cart.entries()]
    .map(([id, qty]) => {
      const item = state.menu.find((entry) => entry.id === id);
      return item ? { ...item, qty } : null;
    })
    .filter(Boolean);
}

function cartCount() {
  return [...state.cart.values()].reduce((sum, qty) => sum + qty, 0);
}

function cartSubtotal() {
  return getCartItems().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getTotals() {
  const subtotal = cartSubtotal();
  const deliveryFee = getOrderType() === "delivery" ? DELIVERY_FEE : 0;
  return { subtotal, deliveryFee, total: subtotal + deliveryFee };
}

function persistCart() {
  try {
    if (state.cart.size === 0) {
      localStorage.removeItem(STORAGE_KEYS.cart);
      return;
    }
    const entries = [...state.cart.entries()].map(([id, qty]) => ({ id, qty }));
    localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(entries));
  } catch (error) {
    // Cart persistence is a convenience; the in-memory cart still works.
  }
}

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.cart);
    if (!raw) return;
    const entries = JSON.parse(raw);
    if (!Array.isArray(entries)) return;
    entries.forEach(({ id, qty }) => {
      const exists = state.menu.some((item) => item.id === id && item.available);
      const quantity = Math.max(1, Math.min(20, Number(qty) || 1));
      if (exists) state.cart.set(id, quantity);
    });
  } catch (error) {
    // Ignore a malformed cart.
  }
}

/* --------------------------------------------------------------------------
   Menu
   ------------------------------------------------------------------------ */
function visibleMenuItems() {
  return state.category === "all"
    ? state.menu
    : state.menu.filter((item) => item.category === state.category);
}

function dishCard(item) {
  const disabled = !item.available;
  const addButton = disabled
    ? `<span class="dish__sold">Sold out today</span>`
    : `<button class="dish__add" type="button" data-add="${item.id}" aria-label="Add ${escapeHtml(item.name)} to order tray">
         <i data-lucide="plus" aria-hidden="true"></i> Add
       </button>`;

  return `
    <article class="dish${disabled ? " is-unavailable" : ""}">
      <div class="dish__top">
        <span class="dish__icon" aria-hidden="true"><i data-lucide="${item.icon}"></i></span>
        <span class="dish__prep"><i data-lucide="clock" aria-hidden="true"></i>${item.prepMinutes} min</span>
      </div>
      <h3>${escapeHtml(item.name)}</h3>
      <p class="dish__desc">${escapeHtml(item.description)}</p>
      <div class="dish__foot">
        <span class="dish__price">${formatDA(item.price)}</span>
        ${addButton}
      </div>
    </article>
  `;
}

function renderMenu() {
  const grid = $("#menuGrid");
  const items = visibleMenuItems();
  const soldOut = items.filter((item) => !item.available).length;

  grid.innerHTML = items.length
    ? items.map(dishCard).join("")
    : `<p class="menu__loading">No dishes in this section today.</p>`;

  const countLabel = `${items.length} ${items.length === 1 ? "dish" : "dishes"}`;
  $("#menuCount").textContent = soldOut
    ? `${countLabel}, ${soldOut} sold out today`
    : countLabel;

  $$(".filter").forEach((button) => {
    const active = button.dataset.category === state.category;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  refreshIcons();
}

/* --------------------------------------------------------------------------
   Cart + tray
   ------------------------------------------------------------------------ */
function updateTrayBadge(bump = false) {
  const badge = $("#trayCount");
  const count = cartCount();
  badge.textContent = String(count);
  badge.hidden = count === 0;

  if (bump && count > 0) {
    badge.classList.remove("is-bumped");
    void badge.offsetWidth;
    badge.classList.add("is-bumped");
  }
}

function cartRow(item) {
  return `
    <div class="cart-item" data-id="${item.id}">
      <span class="cart-item__icon" aria-hidden="true"><i data-lucide="${item.icon}"></i></span>
      <div class="cart-item__info">
        <p class="cart-item__name">${escapeHtml(item.name)}</p>
        <p class="cart-item__unit">${formatDA(item.price)} each</p>
      </div>
      <span class="cart-item__line">${formatDA(item.price * item.qty)}</span>
      <div class="cart-item__controls">
        <div class="qty" role="group" aria-label="Quantity for ${escapeHtml(item.name)}">
          <button type="button" data-qty="-1" data-id="${item.id}" aria-label="Decrease ${escapeHtml(item.name)} quantity">
            <i data-lucide="minus" aria-hidden="true"></i>
          </button>
          <span aria-live="polite">${item.qty}</span>
          <button type="button" data-qty="1" data-id="${item.id}" aria-label="Increase ${escapeHtml(item.name)} quantity">
            <i data-lucide="plus" aria-hidden="true"></i>
          </button>
        </div>
        <button class="remove-btn" type="button" data-remove="${item.id}" aria-label="Remove ${escapeHtml(item.name)} from order tray">
          <i data-lucide="trash-2" aria-hidden="true"></i> Remove
        </button>
      </div>
    </div>
  `;
}

function updateTotals() {
  const { subtotal, deliveryFee, total } = getTotals();

  $("#sumSubtotal").textContent = formatDA(subtotal);
  $("#sumDeliveryRow").hidden = deliveryFee === 0;
  $("#sumDelivery").textContent = formatDA(deliveryFee);
  $("#sumTotal").textContent = formatDA(total);
  $("#trayTotal").textContent = formatDA(total);

  const feeNote = $("#trayFeeNote");
  feeNote.hidden = deliveryFee === 0;
  feeNote.textContent = `Includes ${formatDA(deliveryFee)} Batna City delivery.`;
}

function renderCart() {
  const items = getCartItems();
  const count = cartCount();
  const empty = $("#trayEmpty");
  const content = $("#trayContent");
  const foot = $("#trayFoot");

  $("#trayMeta").textContent = `${count} ${count === 1 ? "item" : "items"}`;
  updateTrayBadge();

  if (items.length === 0) {
    empty.hidden = false;
    content.hidden = true;
    foot.hidden = true;
    $("#cartList").innerHTML = "";
    return;
  }

  empty.hidden = true;
  content.hidden = false;
  foot.hidden = false;
  $("#cartList").innerHTML = items.map(cartRow).join("");
  updateTotals();
  refreshIcons();
}

function addToCart(id, button) {
  const item = state.menu.find((entry) => entry.id === id);
  if (!item || !item.available) return;

  state.cart.set(id, Math.min(20, (state.cart.get(id) || 0) + 1));
  persistCart();
  renderCart();
  updateTrayBadge(true);
  announce(`${item.name} added. ${cartCount()} in the order tray.`);

  if (button) {
    button.classList.add("is-added");
    button.innerHTML = `<i data-lucide="check" aria-hidden="true"></i> Added`;
    refreshIcons();
    window.clearTimeout(button._resetTimer);
    button._resetTimer = window.setTimeout(() => {
      button.classList.remove("is-added");
      button.innerHTML = `<i data-lucide="plus" aria-hidden="true"></i> Add`;
      refreshIcons();
    }, 1000);
  }
}

function changeQty(id, delta) {
  const next = (state.cart.get(id) || 0) + delta;
  if (next <= 0) {
    state.cart.delete(id);
  } else {
    state.cart.set(id, Math.min(20, next));
  }
  persistCart();
  renderCart();
  announce(`${cartCount()} items in the order tray.`);

  const sameButton = $(`[data-qty="${delta}"][data-id="${id}"]`, $("#cartList"));
  if (sameButton) {
    sameButton.focus({ preventScroll: true });
  } else {
    $("#fullName")?.focus({ preventScroll: true });
  }
}

function removeFromCart(id) {
  const item = state.menu.find((entry) => entry.id === id);
  state.cart.delete(id);
  persistCart();
  renderCart();
  announce(`${item ? item.name : "Item"} removed from the order tray.`);
}

function updateConditionalFields() {
  const type = getOrderType();
  $$("[data-for]").forEach((block) => {
    block.hidden = block.dataset.for !== type;
  });

  if (type !== "dine-in") clearFieldError("tableNumber");
  if (type !== "delivery") clearFieldError("address");
}

/* --------------------------------------------------------------------------
   Tracking
   ------------------------------------------------------------------------ */
function statusTag(status) {
  const meta = STATUSES[status] || STATUSES.pending;
  return `<span class="status-tag status-tag--${status}"><i data-lucide="${meta.icon}" aria-hidden="true"></i>${meta.label}</span>`;
}

function orderDetail(order) {
  if (order.type === "dine-in") return order.table || "";
  if (order.type === "takeaway") return PICKUP_LABELS[order.pickup] || "ASAP";
  return order.address || "";
}

function trackSteps(status) {
  const current = STATUS_FLOW.indexOf(status);
  const complete = status === "completed";

  return STATUS_FLOW.map((step, index) => {
    const done = index < current || (complete && index <= current);
    const active = index === current && !complete;
    const currentClass = index === current ? " is-current" : "";
    return `<li class="step${done ? " is-done" : ""}${active ? " is-active" : ""}${currentClass}">
      <span>${STATUSES[step].label}</span>
    </li>`;
  }).join("");
}

function renderTrackResult(order) {
  const result = $("#trackResult");
  const detail = orderDetail(order);
  const type = ORDER_TYPES[order.type] || ORDER_TYPES.takeaway;
  const status = STATUSES[order.status] || STATUSES.pending;

  state.trackCode = order.code;
  state.trackStatus = order.status;

  result.hidden = false;
  result.innerHTML = `
    <div class="track-card">
      <div class="track-card__head">
        <div>
          <p class="track-card__label">Order</p>
          <h3 class="track-card__code">${escapeHtml(order.code)}</h3>
        </div>
        <div class="track-card__head-actions">
          ${statusTag(order.status)}
          <button class="icon-btn icon-btn--sm" type="button" data-refresh-track aria-label="Refresh order status">
            <i data-lucide="refresh-cw" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <ol class="steps" aria-label="Order progress">${trackSteps(order.status)}</ol>

      <dl class="track-card__meta">
        <div><dt>Placed</dt><dd>${formatDate(order.createdAt)}</dd></div>
        <div><dt>Order type</dt><dd>${type.label}</dd></div>
        <div><dt>Total</dt><dd class="mono">${formatDA(order.total)}</dd></div>
        ${detail ? `<div class="track-card__address"><dt>${order.type === "delivery" ? "Delivering to" : "Order detail"}</dt><dd>${escapeHtml(detail)}</dd></div>` : ""}
      </dl>

      <p class="track-card__note">${status.note}</p>
    </div>
  `;

  refreshIcons();
  announce(`Order ${order.code} is ${status.label.toLowerCase()}.`);
}

function stopTracking() {
  if (state.trackPoll) {
    window.clearInterval(state.trackPoll);
    state.trackPoll = null;
  }
  state.trackCode = null;
  state.trackStatus = null;
}

function startTracking(code, status) {
  stopTracking();
  state.trackCode = code;
  state.trackStatus = status || null;

  state.trackPoll = window.setInterval(async () => {
    if (document.hidden || !state.trackCode) return;
    const order = await dataService.getOrderByCode(state.trackCode);
    if (order && order.status !== state.trackStatus) {
      renderTrackResult(order);
    }
  }, 15000);
}

async function lookupOrder(code, { focusResult = false } = {}) {
  const normalized = String(code || "").trim().toUpperCase();
  const error = $("#trackError");
  const result = $("#trackResult");
  const submit = $("#trackSubmit");

  error.hidden = true;
  result.hidden = true;

  if (!normalized) {
    error.textContent = "Enter the code from your order ticket.";
    error.hidden = false;
    $("#trackCode").focus();
    return;
  }

  stopTracking();
  submit.disabled = true;
  submit.textContent = "Checking…";

  try {
    const order = await dataService.getOrderByCode(normalized);
    if (!order) {
      stopTracking();
      error.textContent = `No order found with code ${normalized}. Check the ticket and try again.`;
      error.hidden = false;
      announce("No order found with that code.");
      return;
    }

    renderTrackResult(order);
    startTracking(order.code, order.status);
    if (focusResult) result.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } catch (errorObject) {
    error.textContent = "We could not check that order. Please try again.";
    error.hidden = false;
  } finally {
    submit.disabled = false;
    submit.textContent = "Track order";
  }
}

/* --------------------------------------------------------------------------
   Order ticket
   ------------------------------------------------------------------------ */
function showTicket(order) {
  const type = ORDER_TYPES[order.type] || ORDER_TYPES.takeaway;
  const detail = orderDetail(order);
  const detailLabel = order.type === "delivery" ? "Delivering to" : order.type === "dine-in" ? "Table" : "Pickup";

  $("#ticketContent").innerHTML = `
    <div class="ticket__top">
      <span class="ticket__check" aria-hidden="true"><i data-lucide="check"></i></span>
      <h2 id="ticketTitle">Order placed</h2>
      <p class="ticket__sub">The kitchen has your order. Keep this code.</p>
      <div class="ticket__code-box">
        <p class="ticket__code-label">Order code</p>
        <p class="ticket__code" id="ticketCode">${escapeHtml(order.code)}</p>
        <button class="copy-btn" type="button" data-copy-code="${escapeHtml(order.code)}">
          <i data-lucide="copy" aria-hidden="true"></i> Copy code
        </button>
      </div>
    </div>

    <div class="ticket__body">
      <dl class="ticket__meta">
        <div><dt>Order type</dt><dd>${type.label}</dd></div>
        <div><dt>Items</dt><dd>${order.items.reduce((sum, item) => sum + item.qty, 0)}</dd></div>
        <div><dt>Status</dt><dd>${statusTag(order.status)}</dd></div>
        <div><dt>Estimated</dt><dd>${type.eta}</dd></div>
      </dl>

      ${detail ? `<p class="ticket__detail"><span>${detailLabel}</span>${escapeHtml(detail)}</p>` : ""}

      <ul class="ticket__items">
        ${order.items.map((item) => `
          <li class="ticket__item">
            <span>${item.qty} × ${escapeHtml(item.name)}</span>
            <span>${formatDA(item.price * item.qty)}</span>
          </li>
        `).join("")}
      </ul>

      <div class="ticket__total">
        <span>Total</span>
        <strong>${formatDA(order.total)}</strong>
      </div>
    </div>

    <div class="ticket__actions">
      <button class="btn btn--primary" type="button" data-track-ticket="${escapeHtml(order.code)}">Track this order</button>
      <button class="btn btn--ghost" type="button" data-close-ticket>Close</button>
    </div>
  `;

  $("#ticketDialog").showModal();
  syncBodyLock();
  refreshIcons();
  announce(`Order ${order.code} placed. Total ${formatDA(order.total)}.`);
}

async function copyCode(code, button) {
  try {
    await navigator.clipboard.writeText(code);
  } catch (error) {
    const helper = document.createElement("textarea");
    helper.value = code;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }

  button.innerHTML = `<i data-lucide="check" aria-hidden="true"></i> Copied`;
  refreshIcons();
  window.setTimeout(() => {
    button.innerHTML = `<i data-lucide="copy" aria-hidden="true"></i> Copy code`;
    refreshIcons();
  }, 1600);
}

/* --------------------------------------------------------------------------
   Validation + checkout
   ------------------------------------------------------------------------ */
function setFieldError(id, message) {
  const input = document.getElementById(id);
  const error = document.getElementById(`${id}Error`);
  if (!input || !error) return;
  input.setAttribute("aria-invalid", "true");
  error.textContent = message;
  error.hidden = false;
  input.closest(".field")?.classList.add("is-invalid");
}

function clearFieldError(id) {
  const input = document.getElementById(id);
  const error = document.getElementById(`${id}Error`);
  if (!input || !error) return;
  input.removeAttribute("aria-invalid");
  error.textContent = "";
  error.hidden = true;
  input.closest(".field")?.classList.remove("is-invalid");
}

function clearAllFieldErrors() {
  ["fullName", "phone", "tableNumber", "address"].forEach(clearFieldError);
  const formError = $("#checkoutError");
  formError.hidden = true;
  formError.textContent = "";
}

function validateField(input) {
  if (!input) return true;
  const value = input.value.trim();
  let message = "";

  if (input.id === "fullName" && value.length < 2) {
    message = "Enter your full name.";
  }

  if (input.id === "phone" && !isValidAlgerianPhone(value)) {
    message = "Enter a 10-digit number starting with 05, 06 or 07.";
  }

  if (input.id === "tableNumber") {
    const digits = value.replace(/\D/g, "");
    if (!digits || Number(digits) < 1 || Number(digits) > 99) {
      message = "Enter your table number, for example 4.";
    }
  }

  if (input.id === "address" && value.length < 4) {
    message = "Add your neighborhood and street inside Batna.";
  }

  if (message) {
    setFieldError(input.id, message);
    return false;
  }

  clearFieldError(input.id);
  return true;
}

async function handleCheckout(event) {
  event.preventDefault();
  clearAllFieldErrors();

  const items = getCartItems();
  if (items.length === 0) {
    renderCart();
    return;
  }

  const type = getOrderType();
  const ids = ["fullName", "phone"];
  if (type === "dine-in") ids.push("tableNumber");
  if (type === "delivery") ids.push("address");

  const invalid = ids
    .map((id) => document.getElementById(id))
    .filter((input) => input && !validateField(input));

  if (invalid.length > 0) {
    invalid[0].focus({ preventScroll: true });
    invalid[0].scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const payload = {
    items: items.map(({ id, name, price, qty, icon }) => ({ id, name, price, qty, icon })),
    type,
    customer: {
      name: $("#fullName").value.trim(),
      phone: normalizePhone($("#phone").value),
    },
    table: type === "dine-in" ? normalizeTable($("#tableNumber").value) : null,
    pickup: type === "takeaway" ? getPickup() : null,
    address: type === "delivery" ? $("#address").value.trim() : null,
    notes: $("#notes").value.trim(),
  };

  const submit = $("#placeOrderBtn");
  const label = submit.textContent;
  submit.disabled = true;
  submit.textContent = "Placing order…";

  try {
    const order = await dataService.createOrder(payload);

    state.cart.clear();
    persistCart();
    renderCart();
    $("#checkoutForm").reset();
    clearAllFieldErrors();
    updateConditionalFields();
    updateTotals();

    $("#trayDialog").close();
    showTicket(order);
  } catch (error) {
    const formError = $("#checkoutError");
    formError.textContent = "We could not save your order. Check your connection and try again.";
    formError.hidden = false;
  } finally {
    submit.disabled = false;
    submit.textContent = label;
  }
}

/* --------------------------------------------------------------------------
   Dialogs
   ------------------------------------------------------------------------ */
function syncBodyLock() {
  const tray = $("#trayDialog");
  const ticket = $("#ticketDialog");
  document.body.classList.toggle("is-locked", tray.open || ticket.open);
}

function bindBackdropClose(dialog) {
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog || event.detail === 0) return;
    const rect = dialog.getBoundingClientRect();
    const inside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    if (!inside) dialog.close();
  });
}

/* --------------------------------------------------------------------------
   Events
   ------------------------------------------------------------------------ */
function bindEvents() {
  $$(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      renderMenu();
      announce(`Showing ${CATEGORY_LABELS[state.category] || "all"} dishes.`);
    });
  });

  $("#menuGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-add]");
    if (button) addToCart(button.dataset.add, button);
  });

  $("#openTrayBtn").addEventListener("click", () => {
    renderCart();
    $("#trayDialog").showModal();
    syncBodyLock();
    refreshIcons();
  });

  $("#closeTrayBtn").addEventListener("click", () => $("#trayDialog").close());

  $("[data-browse-menu]").addEventListener("click", () => {
    $("#trayDialog").close();
    $("#menu").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  $("#cartList").addEventListener("click", (event) => {
    const qtyButton = event.target.closest("[data-qty]");
    if (qtyButton) {
      changeQty(qtyButton.dataset.id, Number(qtyButton.dataset.qty));
      return;
    }

    const removeButton = event.target.closest("[data-remove]");
    if (removeButton) removeFromCart(removeButton.dataset.remove);
  });

  $("#checkoutForm").addEventListener("change", (event) => {
    if (event.target.name === "orderType") {
      updateConditionalFields();
      updateTotals();
    }
  });

  $("#checkoutForm").addEventListener("input", (event) => {
    if (event.target.closest("#checkoutError")) return;
    if (event.target.getAttribute("aria-invalid") === "true") {
      validateField(event.target);
    }
  });

  $("#checkoutForm").addEventListener("focusout", (event) => {
    if (["fullName", "phone", "tableNumber", "address"].includes(event.target.id)) {
      validateField(event.target);
    }
  });

  $("#checkoutForm").addEventListener("submit", handleCheckout);

  $("#trackForm").addEventListener("submit", (event) => {
    event.preventDefault();
    lookupOrder($("#trackCode").value, { focusResult: true });
  });

  $("#trackCode").addEventListener("input", (event) => {
    const input = event.target;
    const position = input.selectionStart;
    input.value = input.value.toUpperCase();
    input.setSelectionRange(position, position);
  });

  $("#trackResult").addEventListener("click", async (event) => {
    const refresh = event.target.closest("[data-refresh-track]");
    if (!refresh || !state.trackCode) return;
    refresh.disabled = true;
    const order = await dataService.getOrderByCode(state.trackCode);
    if (order) {
      renderTrackResult(order);
    } else {
      refresh.disabled = false;
    }
  });

  $("#ticketContent").addEventListener("click", (event) => {
    const copyButton = event.target.closest("[data-copy-code]");
    if (copyButton) {
      copyCode(copyButton.dataset.copyCode, copyButton);
      return;
    }

    const trackButton = event.target.closest("[data-track-ticket]");
    if (trackButton) {
      const code = trackButton.dataset.trackTicket;
      $("#ticketDialog").close();
      $("#trackCode").value = code;
      $("#track").scrollIntoView({ behavior: "smooth", block: "start" });
      $("#trackCode").focus({ preventScroll: true });
      lookupOrder(code);
      return;
    }

    if (event.target.closest("[data-close-ticket]")) {
      $("#ticketDialog").close();
    }
  });

  ["#trayDialog", "#ticketDialog"].forEach((selector) => {
    const dialog = $(selector);
    dialog.addEventListener("close", syncBodyLock);
    bindBackdropClose(dialog);
  });

  window.addEventListener("storage", async (event) => {
    if (event.key !== STORAGE_KEYS.orders || !state.trackCode) return;
    ordersCache = null;
    const order = await dataService.getOrderByCode(state.trackCode);
    if (order && order.status !== state.trackStatus) {
      renderTrackResult(order);
    }
  });

  window.addEventListener("pagehide", stopTracking);
}

/* --------------------------------------------------------------------------
   Boot
   ------------------------------------------------------------------------ */
async function init() {
  bindEvents();

  try {
    state.menu = await dataService.getMenuItems();
  } catch (error) {
    $("#menuGrid").innerHTML = `<p class="menu__loading">The menu could not load. Please refresh the page.</p>`;
    $("#menuCount").textContent = "Menu unavailable";
    return;
  }

  loadCart();
  $$("[data-delivery-fee]").forEach((node) => {
    node.textContent = formatDA(DELIVERY_FEE);
  });

  renderMenu();
  renderCart();
  updateConditionalFields();
  updateTotals();
  refreshIcons();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

