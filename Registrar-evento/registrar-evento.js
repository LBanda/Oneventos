var app = new Vue({
    el: "#app",
    data: {
        empresas: [
            { nombreEmpresa: "Microsoft" },
            { nombreEmpresa: "Google" },
            { nombreEmpresa: "Coca-Cola" },
            { nombreEmpresa: "Amazon" },
            { nombreEmpresa: "Sabritas" },
            { nombreEmpresa: "Barcel" },
        ],
        empresa: {
            nombreEmpresa: " ",
        },
        areasTrabajo: [
            { nombreAreaT: "Área 1" },
            { nombreAreaT: "Área 2" },
            { nombreAreaT: "Área 3" },
            { nombreAreaT: "Área 4" },
            { nombreAreaT: "Área 5" },
            { nombreAreaT: "Área 6" },
        ],
        areaTrabajo: {
            nombreAreaT: " ",
        },
        subeventos: [
            {nombreS: "Subevento 1", descripcionS: "Descripcion 1", locacionS: "Locación 1"},
            {nombreS: "Subevento 2", descripcionS: "Descripcion 2", locacionS: "Locación 2"},
            {nombreS: "Subevento 3", descripcionS: "Descripcion 3", locacionS: "Locación 3"},
            {nombreS: "Subevento 4", descripcionS: "Descripcion 4", locacionS: "Locación 4"},
            {nombreS: "Subevento 5", descripcionS: "Descripcion 5", locacionS: "Locación 5"},
        ],
        subevento: {
            nombreS: " ",
            descripcionS: " ",
            locacionS: " ",
        },
    },
    methods: {
        agregarEmpresa() {
            this.empresas.push({...this.empresa});
            this.empresa.nombreEmpresa = "";
        },
        agregarAreaTrabajo() {
            this.areasTrabajo.push({...this.areaTrabajo});
            this.areaTrabajo.nombreAreaT = "";
        },
        agregarSubevento() {
            this.subeventos.push({...this.subevento});
            this.subevento.nombreS = "";
            this.subevento.descripcionS = "";
            this.subevento.locacionS = "";
        },
        borrarEmpresas() {
            this.empresas = []
        },
        borrarAreasTrabajo() {
            this.areasTrabajo = []
        },
        borrarEmpresa(empresa) {
            this.empresas = this.empresas.filter((i) => i !== empresa);
        },
        borrarAreaTrabajo(areaTrabajo) {
            this.areasTrabajo = this.areasTrabajo.filter((i) => i !== areaTrabajo);
        },
        borrarSubevento(subevento) {
            this.subeventos = this.subeventos.filter((i) => i !== subevento);
        },
    },
})