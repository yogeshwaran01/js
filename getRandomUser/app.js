const app = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
            email: "py@python.com",
            gender: "female",
            pic: "https://randomuser.me/api/portraits/men/10.jpg"
        }
    },
    methods: {
        async getUser() {

            const res = await fetch("https://randomuser.me/api")
                .then(res => res.json())
                .then(data => {
                    var user = data.results[0]

                    this.firstName = user.name.first
                    this.lastName = user.name.last
                    this.email = user.email
                    this.gender = user.gender
                    this.pic = user.picture.large
                })

        }
    }
})

app.mount('#app')