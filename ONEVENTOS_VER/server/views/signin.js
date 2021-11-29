const app = new Vue({
    el: "#app",
    data() {
        return {
            nombre: "",
            email: "",
            password: "",
            response: "",
            errors: [],
            placeholderEmail: "sofia.soto@email.com",
            placeholderPass: "**********"
        }
    },
    methods: {
        validate(nombre, email, password) {
            const errors = [];
            if (!nombre) {
                errors.push({ message: "Ingresa tu nombre de usuario" });
            }
            
            if (!email) {
                errors.push({ message: "Ingresa tu Correo" });
            }

            if (!password) {
                errors.push({ message: "Ingresa tu Contraseña" });
            }

            return errors;
        },
        async signUp() {
            const { email, password, nombre } = this;
            const errors = this.validate(nombre, email, password);
            if (errors.length > 0) {
                this.errors = errors;
                return;
            }

            try {
                const body = { user: { nombre, email, password } }
                const response = await axios.post("/api/signup", body);

                if (response.status != 200) {
                    this.errors = response.data.errors;
                } else {
                    location.assign("/");
                }

            } catch (error) {
                this.errors.push({ message: "Error: Necesitas registrarte primero" });
            }
        }
    }
});