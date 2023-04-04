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

                var cam = document.querySelector("#camera").object3D
                var direction = new THREE.Vector3()
                cam.getWorldDirection(direction)

                bowling_ball.setAttribute("velocity", direction.multiplyScalar(-10));

                var scene = document.querySelector("#scene");

                scene.appendChild(bowling_ball);
            }
        })
    }

})