
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector(".icon");

        const isExpanded =
            question.getAttribute("aria-expanded") === "true";

        question.setAttribute("aria-expanded", String(!isExpanded));
        answer.hidden = isExpanded;
        icon.textContent = isExpanded ? "+" : "−";
    });
});