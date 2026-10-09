function highlightNotices() {

    let paragraphs = document.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {

        paragraphs[i].innerHTML =
            "IMPORTANT: " + paragraphs[i].innerHTML;

        paragraphs[i].classList.add("highlight");
    }
}