AFRAME.registerComponent("move-pos", {
    schema: {
        clickCounter: { type: "number", default: 0 }
    },

    update: function () {
        window.addEventListener("click", e => {
            this.data.clickCounter += 1
            if (this.data.clickCounter === 1) {
                const rotation = { x: 0, y: 45, z: 0 }
                this.el.setAttribute("rotation", rotation);
            } else if (this.data.clickCounter === 2) {
                const rotation = { x: 0, y: 90, z: 0 }
                this.el.setAttribute("rotation", rotation);
            } else if (this.data.clickCounter === 3) {
                const rotation = { x: 0, y: 135, z: 0 }
                this.el.setAttribute("rotation", rotation);
            } else if (this.data.clickCounter === 4) {
                const rotation = { x: 0, y: 180, z: 0 }
                this.el.setAttribute("rotation", rotation);
            } else if (this.data.clickCounter === 5) {
                const rotation = { x: 0, y: 225, z: 0 }
                this.el.setAttribute("rotation", rotation);
            } else if (this.data.clickCounter === 6) {
                const rotation = { x: 0, y: 270, z: 0 }
                this.el.setAttribute("rotation", rotation);

            } else if (this.data.clickCounter === 7) {
                const rotation = { x: 0, y: 315, z: 0 }
                this.el.setAttribute("rotation", rotation);

            } else if (this.data.clickCounter === 8) {
                const rotation = { x: 0, y: 360, z: 0 }
                this.el.setAttribute("rotation", rotation);

            } else if (this.data.clickCounter === 9) {
                const rotation = { x: 0, y: 360, z: 360 }
                this.el.setAttribute("rotation", rotation);
                this.data.clickCounter = 0
            }
        })
    }
})
