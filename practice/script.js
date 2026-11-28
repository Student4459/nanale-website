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

            itemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.details}</p>
                <p>${item.price}</p>
            `;

            container.appendChild(itemDiv);
        });
    }
}

loadMenu();