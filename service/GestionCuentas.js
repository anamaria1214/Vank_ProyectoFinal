function obtenerCuentasDesdeLocalStorage() {
    return JSON.parse(localStorage.getItem("cuentas")) || [];
}

function crearCards() {
    const container = document.getElementById("cards-container");
    const cuentas = obtenerCuentasDesdeLocalStorage();

    if (cuentas.length === 0) {
        container.innerHTML = `<p>No hay cuentas bancarias registradas.</p>`;
        return;
    }

    cuentas.forEach(cuenta => {
        const card = document.createElement("a");
        card.className = "card";

        card.addEventListener("click", (event) => {
            event.preventDefault();

            console.log("Guardando cuenta:", cuenta);

            localStorage.setItem("cuentaActual", JSON.stringify(cuenta));

            console.log("Cuenta guardada en localStorage:", JSON.parse(localStorage.getItem("cuentaActual")));

            window.location.href = `./transferir.html?numeroCuenta=${cuenta.numeroCuenta}`;
        });

        card.innerHTML = `
            <h3>${cuenta.tipoCuenta} - ${cuenta.numeroCuenta}</h3>
            <p>Estado: ${cuenta.estado}</p>
            <p class="saldo">Saldo: $${parseFloat(cuenta.saldo).toLocaleString()}</p>
        `;

        container.appendChild(card);
    });
}

crearCards();
