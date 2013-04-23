(function (Ω) {

	"use strict";

	var MainScreen = Ω.Screen.extend({

		sheet: new Ω.SpriteSheet("res/minecraft.png", 128),

		init: function () {

			this.camera = new Ω.Camera(0, 0, Ω.env.w, Ω.env.h);
			this.camera.zoom = 0.5;
			this.map = new Ω.IsoMap(this.sheet, [
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 0, 1, 1, 1, 1, 1],
				[1, 1, 0, 1, 1, 0, 1, 1],
				[1, 1, 0, 1, 1, 1, 1, 1],
				[1, 1, 2, 0, 1, 1, 1, 1],
				[1, 1, 2, 2, 1, 1, 1, 1],
				[1, 1, 2, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1]
			]);

		},

		tick: function (d) {

			if (Ω.input.pressed("escape")) {
				game.setScreen(new TitleScreen());
			}

			this.camera.zoom = Math.sin(Date.now() / 2000) * 0.25 + 0.75;

		},

		render: function (gfx) {

			var c = gfx.ctx,
				title = "Ω500: iso main'";

			c.fillStyle = "hsl(120, 10%, 20%)";
			c.fillRect(0, 0, gfx.w, gfx.h);

			this.camera.render(gfx, [
				this.map
			]);

		}

	});

	window.MainScreen = MainScreen;

}(Ω));