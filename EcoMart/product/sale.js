// 1. Creating the banner element
const saleBanner = document.createElement('div');

// 2. Setting the text
saleBanner.innerText = "FLASH SALE: 50% OFF ALL PRODUCTS";

// 3. Applying styles directly via JavaScript
saleBanner.style.width = "100%";
saleBanner.style.backgroundColor = "yellow";
saleBanner.style.color = "red";
saleBanner.style.textAlign = "center";
saleBanner.style.fontWeight = "bold";
saleBanner.style.padding = "10px 0";
saleBanner.style.fontSize = "18px";
saleBanner.style.borderBottom = "2px solid red";

// 4. Find the header and place the banner directly after it
const header = document.querySelector('header');
if (header) {
    header.after(saleBanner);
}

// 5. Flashing logic (blinks every second)
setInterval(() => {
    saleBanner.style.visibility = (saleBanner.style.visibility === 'hidden' ? 'visible' : 'hidden');
}, 1000);