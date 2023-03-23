AFRAME.registerComponent("cursor-c", {
    schema: {
        selectItemId: { type: "string", default: "" }
    },

    init: function () {
        this.handleMouseEnterEvent()
        this.handleMouseLeaveEvent()
    },

    update: function () {
        const fadeBackgroundEl = document.querySelector("#fadeBackground")
        c = fadeBackgroundEl.children

        if (c.length > 0) {
            var i
            for (i = 0; i <= c.length; i++) {
                fadeBackgroundEl.removeChild(c[i])
            }
        } else {
            this.handleMouseClickEvent()
        }
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
    },

    handleMouseClickEvent: function () {
        if (selectItemId) {
            fadeBackgroundEl.setAttribute("visible", true)
            fadeBackgroundEl.setAttribute("info-banner", { itemId: selectItemId })

            titleEl.setAttribute("visible", false)
            cursorEl.setAttribute("geometry", { radiusInner: 0.03, radiusOuter: 0.04 })
        } else {
            fadeBackgroundEl.setAttribute("visible", false);
            titleEl.setAttribute("visible", true)
            cursorEl.setAttribute("position", { x: 0, y: 0, z: -3 })
            cursorEl.setAttribute("geometry", { radiusInner: 0.08, radiusOuter: 0.12 })
        }
    }
})