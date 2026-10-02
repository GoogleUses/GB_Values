const items = [
  {
    name: "Flying Skill",
    category: "Relics",
    tier: "Relics",
    value: 10,
    image: "flying-skill.png",
  },
  {
    name: "Gem Dust",
    category: "Relics",
    tier: "Relics",
    value: 50,
    image: "gem-dust.png",
  },
  {
    name: "Nivelus Nogux Novus",
    category: "Relics",
    tier: "Relics",
    value: 100,
    image: "nivelus-nogux-novus.png",
  },
  {
    name: "Blue Sneaker",
    category: "Relics",
    tier: "Relics",
    value: 100,
    image: "blue-sneaker.png",
  },
  {
    name: "Shinobi",
    category: "Relics",
    tier: "Relics",
    value: 100,
    image: "shinobi.png",
  },
  {
    name: "Dwarf Strength",
    category: "Relics",
    tier: "Relics",
    value: 100,
    image: "dwarf-strength.png",
  },
  {
    name: "Greeds Grip",
    category: "Relics",
    tier: "Relics",
    value: 100,
    image: "greeds-grip.png",
  },
  {
    name: "Talisman of the Pheonix",
    category: "Relics",
    tier: "Relics",
    value: 200,
    image: "talisman-of-the-pheonix.png",
  },
  {
    name: "Inferno",
    category: "Relics",
    tier: "Relics",
    value: 300,
    image: "inferno.png",
  },
  {
    name: "Rejuv Gem",
    category: "Relics",
    tier: "Relics",
    value: 500,
    image: "rejuv-gem.png",
  },
  {
    name: "Dice of Destiny",
    category: "Relics",
    tier: "Relics",
    value: 500,
    image: "dice-of-destiny.png",
  },
  {
    name: "Iron Heart",
    category: "Relics",
    tier: "Relics",
    value: 500,
    image: "iron-heart.png",
  },
  {
    name: "ShadoTear",
    category: "Relics",
    tier: "Relics",
    value: 1000,
    image: "shadotear.png",
  },
  {
    name: "Rose Ring",
    category: "Rings",
    tier: "Ultrarares",
    value: 250,
    image: "rose-ring.png",
  },
  {
    name: "GoBattle Ring",
    category: "Rings",
    tier: "Ultrarares",
    value: 250,
    image: "gobattle-ring.png",
  },
  {
    name: "Firebreath Ring",
    category: "Rings",
    tier: "Ultrarares",
    value: 250,
    image: "firebreath-ring.png",
  },
  {
    name: "Resto Ring",
    category: "Rings",
    tier: "Ultrarares",
    value: 500,
    image: "resto-ring.png",
  },
  {
    name: "Blue Ring",
    category: "Rings",
    tier: "Ultrarares",
    value: 500,
    image: "blue-ring.png",
  },
  {
    name: "Red Ring",
    category: "Rings",
    tier: "Ultrarares",
    value: 500,
    image: "red-ring.png",
  },
  {
    name: "Bloodmoon Ring",
    category: "Rings",
    tier: "Ultrarares",
    value: 1000,
    image: "bloodmoon-ring.png",
  },
  {
    name: "Maximum Speed Boots",
    category: "Sneakers",
    tier: "Ultrarares",
    value: 3000,
    image: "maximum-speed-boots.png",
  },
  {
    name: "Speed Boot",
    category: "Sneakers",
    tier: "Ultrarares",
    value: 3000,
    image: "speed-boot.png",
  },
  {
    name: "Hermes",
    category: "Sneakers",
    tier: "Ultrarares",
    value: 4000,
    image: "hermes.png",
  },
  {
    name: "Blazethrow",
    category: "Hand Protectors",
    tier: "Ultrarares",
    value: 500,
    image: "blazethrow.png",
  },
  {
    name: "Epic Glove",
    category: "Hand Protectors",
    tier: "Ultrarares",
    value: 2000,
    image: "epic-glove.png",
  },
  {
    name: "Blue Glove",
    category: "Hand Protectors",
    tier: "Ultrarares",
    value: 3000,
    image: "blue-glove.png",
  },
  {
    name: "Orange Glove",
    category: "Hand Protectors",
    tier: "Ultrarares",
    value: 3000,
    image: "orange-glove.png",
  },
  {
    name: "Max Regen",
    category: "Body Covers",
    tier: "Ultrarares",
    value: 2000,
    image: "max-regen.png",
  },
  {
    name: "Ex Venom",
    category: "Body Covers",
    tier: "Ultrarares",
    value: 2000,
    image: "ex-venom.png",
  },
  {
    name: "Max Fire",
    category: "Body Covers",
    tier: "Ultrarares",
    value: 2000,
    image: "max-fire.png",
  },
  {
    name: "Invisibility Cloak",
    category: "Body Covers",
    tier: "Ultrarares",
    value: 3000,
    image: "invisibility-cloak.png",
  },
  {
    name: "Ex Invis",
    category: "Body Covers",
    tier: "Ultrarares",
    value: 3000,
    image: "ex-invis.png",
  },
  {
    name: "Instant Defense Cloak",
    category: "Body Covers",
    tier: "Ultrarares",
    value: 3000,
    image: "instant-defense-cloak.png",
  },
  {
    name: "Epic Def",
    category: "Body Covers",
    tier: "Ultrarares",
    value: 3000,
    image: "epic-def.png",
  },
  {
    name: "Normal Venom Protection Cloak",
    category: "Body Covers",
    tier: "Ultrarares",
    value: 3000,
    image: "normal-venom-protection-cloak.png",
  },
  {
    name: "Health Regeneration Cloak",
    category: "Body Covers",
    tier: "Ultrarares",
    value: 3000,
    image: "health-regeneration-cloak.png",
  },
  {
    name: "Fire Protection Cloak",
    category: "Body Covers",
    tier: "Ultrarares",
    value: 3000,
    image: "fire-protection-cloak.png",
  },
  {
    name: "Team Gravity Feather",
    category: "Feathers",
    tier: "Ultrarares",
    value: 500,
    image: "team-gravity-feather.png",
  },
  {
    name: "Gravity Feather",
    category: "Feathers",
    tier: "Ultrarares",
    value: 1000,
    image: "gravity-feather.png",
  },
  {
    name: "Epic Invincibility Potion",
    category: "Potions",
    tier: "Ultrarares",
    value: 5000,
    image: "epic-invincibility-potion.png",
  },
  {
    name: "FireBreaths Blood",
    category: "Potions",
    tier: "Ultrarares",
    value: 2000,
    image: "firebreaths-blood.png",
  },
  {
    name: "FireBook",
    category: "Others",
    tier: "Ultrarares",
    value: 100,
    image: "firebook.png",
  },
  {
    name: "Peppermint",
    category: "Others",
    tier: "Ultrarares",
    value: 1000,
    image: "peppermint.png",
  },
  {
    name: "LavaArmour",
    category: "Others",
    tier: "Ultrarares",
    value: 2000,
    image: "lavaarmour.png",
  },
  {
    name: "BreathHelmet",
    category: "Others",
    tier: "Ultrarares",
    value: 3000,
    image: "breathhelmet.webp",
  },
  {
    name: "Prismatic Cloud",
    category: "Mount",
    tier: "Ultrarares",
    value: 250,
    image: "prismatic-cloud.png",
  },
];

const tierOrder = ["Relics", "Ultrarares"];
const categoryOrder = [
  "Relics",
  "Rings",
  "Sneakers",
  "Hand Protectors",
  "Body Covers",
  "Feathers",
  "Potions",
  "Others",
  "Mount",
];

const catalog = document.querySelector("#catalog");
const categoryFilters = document.querySelector("#category-filters");
const searchInput = document.querySelector("#search");
const clearSearchButton = document.querySelector("#clear-search");
const resultsSummary = document.querySelector("#results-summary");
const emptyState = document.querySelector("#empty-state");
const resetFiltersButton = document.querySelector("#reset-filters");

let activeCategory = "All";
let searchTerm = "";

const formatTickets = (value) => `${value.toLocaleString()} Tickets`;

const escapeHtml = (text) =>
  text.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character],
  );

function visibleItems() {
  const query = searchTerm.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const searchableText = `${item.name} ${item.category} ${item.tier}`.toLowerCase();
    return matchesCategory && (!query || searchableText.includes(query));
  });
}

function groupedItems(filteredItems) {
  return tierOrder
    .map((tier) => {
      const tierItems = filteredItems.filter((item) => item.tier === tier);
      const categories = categoryOrder
        .map((category) => ({
          category,
          items: tierItems.filter((item) => item.category === category),
        }))
        .filter((group) => group.items.length);
      return { tier, items: tierItems, categories };
    })
    .filter((section) => section.items.length);
}

function renderFilters() {
  const categories = ["All", ...categoryOrder.filter((category) =>
    items.some((item) => item.category === category),
  )];

  categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button
          class="filter-button ${category === activeCategory ? "active" : ""}"
          type="button"
          data-category="${escapeHtml(category)}"
          aria-pressed="${category === activeCategory}"
        >${escapeHtml(category)}</button>
      `,
    )
    .join("");

  categoryFilters.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      render();
    });
  });
}

function itemCard(item) {
  return `
    <article class="item-card">
      <div class="item-image-wrap">
        <img
          class="item-image"
          src="assets/items/${encodeURIComponent(item.image)}"
          alt="${escapeHtml(item.name)}"
          loading="lazy"
        />
      </div>
      <div class="item-details">
        <h4 class="item-name">${escapeHtml(item.name)}</h4>
        <div class="ticket-value">${formatTickets(item.value)}</div>
      </div>
    </article>
  `;
}

function renderCatalog(filteredItems) {
  catalog.innerHTML = groupedItems(filteredItems)
    .map(
      (section) => `
        <section class="catalog-section" aria-labelledby="${section.tier.toLowerCase()}-heading">
          <div class="section-heading">
            <h2 id="${section.tier.toLowerCase()}-heading">${section.tier}</h2>
            <span class="section-count">${section.items.length} ${
              section.items.length === 1 ? "item" : "items"
            }</span>
          </div>
          <p class="section-subtitle">${
            section.tier === "Relics"
              ? "Ticket values for every relic."
              : "Ticket values for every ultrarare drop."
          }</p>
          ${section.categories
            .map(
              (group) => `
                <div class="category-group">
                  <h3 class="category-title">${escapeHtml(group.category)}</h3>
                  <div class="item-grid">${group.items.map(itemCard).join("")}</div>
                </div>
              `,
            )
            .join("")}
        </section>
      `,
    )
    .join("");
}

function render() {
  const filteredItems = visibleItems();
  const hasFilters = activeCategory !== "All" || searchTerm.trim();

  clearSearchButton.hidden = !searchTerm;
  resultsSummary.textContent = hasFilters
    ? `Showing ${filteredItems.length} of ${items.length} items`
    : `${items.length} items across ${tierOrder.length} tiers`;

  renderFilters();
  renderCatalog(filteredItems);
  emptyState.hidden = filteredItems.length > 0;
  catalog.hidden = filteredItems.length === 0;
}

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  render();
});

clearSearchButton.addEventListener("click", () => {
  searchInput.value = "";
  searchTerm = "";
  searchInput.focus();
  render();
});

resetFiltersButton.addEventListener("click", () => {
  activeCategory = "All";
  searchInput.value = "";
  searchTerm = "";
  render();
});

render();