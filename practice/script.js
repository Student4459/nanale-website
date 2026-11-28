function toggleMenu(menuId) {
    const menus = document.querySelectorAll(".submenu");
    const selectedMenus = document.getElementById(menuId);

    const isOpen = selectedMenus.classList.contains("active");

    menus.forEach(menu => {
        menu.classList.remove("active");
    });

    if (!isOpen) {
        selectedMenus.classList.add("active");
    }
}

async function loadMenu() {
    const response = await fetch("data.json");
    const menuItems = await response.json();

    displayMenu(menuItems);
}

function displayMenu(menuItems) {
    for (let category in menuItems) {
        const container = document.getElementById(category);

        menuItems[category].forEach(item => {
            const itemDiv = document.createElement("div");

            itemDiv.classList.add("menu-item")

            itemDiv.innerHTML = `
                <h3 class="item-name">${item.name}</h3>
                <p class="item-details">${item.details}</p>
                <p class="item-price">₱${item.price.toFixed(2)}</p>
            `;

            container.appendChild(itemDiv);
        });
    }
}

loadMenu();