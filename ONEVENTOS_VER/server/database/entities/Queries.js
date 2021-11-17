const { SubEvento } = require("./SubEvento");

async function main() {
    const subeventos = []

    for (let i = 0; i < 10; i++) {
        const today = new Date().toDateString();
        const subevento = {
            ID_Subevento: 0,
            ID_Evento: 25,
            descripcion: `Subevento ${i}`,
            cupoMaximo: 10,
            fechaInicio: today,
            fechaFin: today,
            nombre: `Subevento ${1}`,
            locacion: "Mi casa"
        }

        subeventos.push(subevento);
    }

    const result = await SubEvento.addSubeventos(subeventos);
    return result;
}

main()
    .then(res => console.log(res))
    .catch(err => console.log(err));