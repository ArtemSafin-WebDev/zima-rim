document.addEventListener("DOMContentLoaded", () => {
  const accordions = Array.from(
    document.querySelectorAll(".zima-faq__accordion")
  );
  accordions.forEach((accordion) => {
    const btn = accordion.querySelector("button");
    btn?.addEventListener("click", (event) => {
      event.preventDefault();
      accordions.forEach((someAccordion) => {
        if (someAccordion === accordion) return;
        someAccordion.classList.remove("shown");
      });
      accordion.classList.toggle("shown");
    });
  });
});
