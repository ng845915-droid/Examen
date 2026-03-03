document.addEventListener("DOMContentLoaded", function () {

    function loadComponent(id, file) {
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error("No se pudo cargar " + file);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(id).innerHTML = data;
            })
            .catch(error => console.error(error));
    }

    loadComponent("header", "components/header.html");
    loadComponent("footer", "components/footer.html");

});