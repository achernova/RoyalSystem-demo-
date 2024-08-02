const serviceInner = document.querySelector(".services__inner");
if (window.innerWidth > 800) {
    let isScrolling = false;
    serviceInner.addEventListener('wheel', (e) => {
        if (isScrolling) {
            e.preventDefault();
            return;
        };
        isScrolling = true
        try {
            requestAnimationFrame(() => {
                if (e.deltaY > 0) {
                    serviceInner.scrollBy(-800, 0);
                } else {
                    serviceInner.scrollBy(800, 0);
                }
            })
        } catch (e) {
            console.log(e);
        } finally {
            isScrolling = false
        }

        serviceInner.addEventListener('mouseover', (event) => {
            document.body.style.overflow = "hidden"
        })
        serviceInner.addEventListener('mouseout', (event) => {
            document.body.style.overflow = "auto"
        })
    })


}
