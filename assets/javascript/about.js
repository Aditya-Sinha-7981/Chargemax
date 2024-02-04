const faqaccordian = document.querySelectorAll(".faq-accordian")
const faqaccordianContent = document.querySelectorAll(".faq-accordian-content")

for(let i = 0; i < faqaccordian.length; i++){
    faqaccordian[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = faqaccordianContent[i];
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}