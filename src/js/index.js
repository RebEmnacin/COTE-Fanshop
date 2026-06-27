document.addEventListener("DOMContentLoaded", function() {
    fetch("../components/sidebar.html")
        .then(response => response.text())
        .then(html => {document.getElementById("sidebar-placeholder").innerHTML = html;});
});