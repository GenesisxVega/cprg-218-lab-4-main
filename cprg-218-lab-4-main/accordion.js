// JavaScript for the accordion functionality
var acc = document.querySelectorAll(".container.accordion-container .accordion-item");

acc.forEach(item => {
    item.addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.querySelector(".accordion-content");
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});
