let sections = document.querySelectorAll('.sec');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height){
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    })
}

const scrollers = document.querySelectorAll('.scroller');

if (!window.matchMedia("(prefers-reduce-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    scrollers.forEach(s => {
        s.setAttribute('data-animated', true);

        const scrollerInner = document.querySelector('.scroller_inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(i => {
            const duplicatedItem = i.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        })

    })
}