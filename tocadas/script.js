let counters = [];

document.addEventListener("DOMContentLoaded", ()=>{ 
    const displays = document.getElementsByClassName("display");
    const menos = document.getElementsByClassName("menos");
    const mas = document.getElementsByClassName("mas");
    const multipliers = document.getElementsByClassName("multip")
    
    for(let i = 0; i < displays.length; i++) {
        counters.push(new counter(menos[i], displays[i], mas[i], parseInt(multipliers[i].innerText)));
    }

    document.getElementById("reset").addEventListener("click", () => {
        counters.forEach((counter) => {
            counter.reset();
        })
        displayTotal();
    })
});

class counter {
    constructor(less, display, more, multiplier) {
        this.less = less
        this.display = display;
        this.more = more;
        this.multiplier = multiplier;

        less.addEventListener("click", ()=>{
            display.innerText = (parseInt(display.innerText) - 1) >= 0 ? parseInt(display.innerText) - 1 : 0;
            displayTotal();
        })

        more.addEventListener("click", ()=>{
            display.innerText = parseInt(display.innerText) + 1;
            displayTotal();
        })
    }

    get = () => {
        return parseInt(this.display.innerText) * this.multiplier
    }

    reset = () => {
        this.display.innerText = 0;
    }
}

const displayTotal = () => {
    let points = 0;
    counters.forEach(counter => {
        points += counter.get();
    });
    document.getElementById("total").innerText = points;
}