AFRAME.registerComponent("bowling-balls", {
    init: function () {
        this.throwBowlingBall()
    },

    throwBowlingBall: function () {
        window.addEventListener("keydown", (e) => {
            if (e.key === "z") {
                var bowling_ball = document.createElement("a-entity")
                bowling_ball.setAttribute("gltf-model", "./models/bowling_ball/scene.gltf")
                bowling_ball.setAttribute("scale", "1 1 1")

                var camera = document.querySelector("#camera")
                var pos = camera.getAttribute("position")

                bowling_ball.setAttribute("position", {
                    x: pos.x,
                    y: pos.y,
                    z: pos.z
                })

                bowling_ball.setAttribute("dynamic-body", {
                    shape: "sphere",
                    mass: 0
                })

                var cam = document.querySelector("#camera").object3D
                var direction = new THREE.Vector3()
                cam.getWorldDirection(direction)

                bowling_ball.setAttribute("velocity", direction.multiplyScalar(-10));

                var scene = document.querySelector("#scene");
                scene.appendChild(bowling_ball);

                bowling_ball.addEventListener("collide", this.removeBowlingBall())
            }
        })
    },

    removeBowlingBall: function (e) {
        var element_thats_getting_hit_pins = e.detail.body.el
        var element_bowling_ball = e.detail.target.el

        if (element_thats_getting_hit_pins.id.includes("pin")) {
            var impulse = new CANNON.Vec3(0, 1, -15);
            var worldPoint = new CANNON.Vec3().copy(element_thats_getting_hit_pins.getAttribute("position"))
        }

        element_thats_getting_hit_pins.body.applyForce(impulse, worldPoint)

        element_bowling_ball.removeEventListener("collide", this.throwBowlingBall())

        var scene = document.querySelector("#scene")
        scene.removeChild(element_bowling_ball)
    }

})