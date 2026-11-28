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