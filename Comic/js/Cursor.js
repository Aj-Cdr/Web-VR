AFRAME.registerComponent("cursor-c", {
    schema: {
        selectItemId: { type: "string", default: "" }
    },

    init: function () {
        this.handleMouseEnterEvent()
        this.handleMouseLeaveEvent()
    },

    handleMouseEnterEvent: function () {
        this.el.addEventListener("mouseenter", () => {
            const id = this.el.getAttribute("id")
            const posterId = ["superman", "spiderman", "captain-aero", "outer-space"]

            if (posterId.includes(id)) {
                const posterContainer = document.querySelector("#posters-container")
                posterContainer.setAttribute("cursor-c", {
                    selectItemId: id
                })

                console.log(this.data.selectItemId)

                this.el.setAttribute("material", { color: "#1565c0" })
            }
        })
    },

    handleMouseLeaveEvent: function () {
        this.el.addEventListener("mouseleave", () => {
            const { selectItemId } = this.data
            const el = document.querySelector(`#${selectItemId}`)
            const id = el.getAttribute("id")

            if (id == selectItemId) {
                el.setAttribute("material", {
                    color: "#0077CC",
                    opacity: 1,
                });
            }
        })
    }
})