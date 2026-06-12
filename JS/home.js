document.addEventListener("DOMContentLoaded", () => {
    const orderBtn = document.querySelector('.order-button');
    let hoverTimeout;
  
    if (orderBtn) {
        const defaultImg = orderBtn.querySelector('.default-img');
        const hoverImg = orderBtn.querySelector('.hover-img');

        if (defaultImg && hoverImg) {
            orderBtn.addEventListener('mouseenter', () => {
                hoverTimeout = setTimeout(() => {
                    defaultImg.style.opacity = "0";
                    hoverImg.style.opacity = "1";
                }, 100);
            });

            orderBtn.addEventListener('mouseleave', () => {
                clearTimeout(hoverTimeout); 
                defaultImg.style.opacity = "1";
                hoverImg.style.opacity = "0";
            });
        }
    }
});