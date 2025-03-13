(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [
    {
      name: "index_atlas_1",
      frames: [
        [0, 0, 398, 869],
        [400, 0, 409, 230],
        [400, 232, 257, 84]
      ]
    }
  ];

  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  // symbols:

  (lib.Bitmap1 = function () {
    this.initialize(ss["index_atlas_1"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.Bitmap3 = function () {
    this.initialize(ss["index_atlas_1"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.Ellipse1 = function () {
    this.initialize(ss["index_atlas_1"]);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();
  // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }

  (lib.y = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AArChIAci/IihC/IhWAAIAxlCIBWAAIgdDCICgjBIBXAAIgwFBg");
    this.shape.setTransform(17.4694, 15.9438, 0.9877, 0.9877);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.y, new cjs.Rectangle(0, 0, 35, 31.9), null);

  (lib.text = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#00F0FF")
      .s()
      .p(
        "AhJChQgegQgQgdQgQgcgBgoIAAhfQABgoAQgdQAQgdAegPQAfgQAqAAQArAAAeAQQAfAPARAdQAQAdAAAoIAABfQAAAogQAcQgRAdgfAQQgeAQgrAAQgqAAgfgQgAgdhNQgLAMAAAVIAABZQAAAUALANQAKAMATABQAUgBALgMQAKgNAAgUIAAhZQAAgVgKgMQgLgNgUAAQgTAAgKANg"
      );
    this.shape.setTransform(31.75, -16.975);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#00F0FF")
      .s()
      .p(
        "AhIChQgfgQgRgdQgQgcAAgoIAAhfQAAgoAQgdQARgdAfgPQAegQAqAAQArAAAfAQQAeAPAQAdQARAdAAAoIAABfQAAAogRAcQgQAdgeAQQgfAQgrAAQgqAAgegQgAgehNQgKAMAAAVIAABZQAAAUAKANQALAMATABQAUgBAKgMQALgNAAgUIAAhZQAAgVgLgMQgKgNgUAAQgTAAgLANg"
      );
    this.shape_1.setTransform(-1.95, -16.975);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#00F0FF")
      .s()
      .p(
        "AhJChQgfgQgQgdQgPgcgBgoIAAhfQABgoAPgdQAQgdAfgPQAfgQAqAAQArAAAfAQQAeAPARAdQAPAdABAoIAABfQgBAogPAcQgRAdgeAQQgfAQgrAAQgqAAgfgQgAgehNQgKAMAAAVIAABZQAAAUAKANQAKAMAUABQAUgBALgMQAKgNAAgUIAAhZQAAgVgKgMQgLgNgUAAQgUAAgKANg"
      );
    this.shape_2.setTransform(-35.65, -16.975);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#00F0FF")
      .s()
      .p(
        "AiJCtIAAhAICEhyQAPgOAHgLQAIgLAAgOQAAgOgJgJQgJgJgPAAQgQAAgKAKQgJALAAAQIAAAQIhdAAIAAgTQAAghAOgbQAPgbAcgQQAdgQAqAAQApAAAdAOQAdAOAQAZQAPAZAAAjQAAAZgJAVQgKATgPARQgRASgWASIglAfIB+AAIAABTg"
      );
    this.shape_3.setTransform(-79.35, -17.275);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(-97.6, -60.6, 148.39999999999998, 77.9), null);

  (lib.T3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAdBaIAAhRIg6BRIgnAAIAAiGIAnAAIAABQIA6hQIAnAAIAACGgAgUg6QgIgFgEgGQgDgIAAgJIAAgCIAcAAIAAABQAAAEABACQACACAEAAQAEAAADgCQABgCAAgEIAAgBIAdAAIAAACQgBAJgDAIQgEAGgIAFQgIAFgNAAQgMAAgIgFg"
      );
    this.shape.setTransform(87.6, 16.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("Ag9BEIAAiGIBzAAIAAAfIhMAAIAAARIAtAAIAAAgIgtAAIAAAVIBUAAIAAAhg");
    this.shape_1.setTransform(72.525, 18.5);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p("AhGBFIAAgoIADAAQAGAAAEgCQAEgCACgFIACgMIAJhLIBvAAIAACGIgnAAIAAhlIgnAAIgGAsQgBAUgGANQgFAMgKAHQgMAGgUABg");
    this.shape_2.setTransform(56.35, 18.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhBBEIAAiGIB3AAIAAAhIhQAAIAAARIApAAQAYAAANAKQAOAJAAAVQAAAWgOAKQgNAMgYAAgAgaAiIAlAAQAIAAADgCQAEgDAAgFQAAgFgEgDQgDgDgIAAIglAAg"
      );
    this.shape_3.setTransform(41.275, 18.5);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#FFFFFF").s().p("AgtBEIAbgtIg7hZIAvAAIAiA1IAfg1IArAAIhRCGg");
    this.shape_4.setTransform(25.55, 18.5);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhBBEIAAiGIBRAAQAYgBANAMQANALAAAYQAAAVgNALQgNAMgYAAIgrAAIAAAsgAgbgIIAnAAQAHAAAEgDQAEgEAAgFQAAgHgEgDQgEgDgHAAIgnAAg"
      );
    this.shape_5.setTransform(10.175, 18.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.T3, new cjs.Rectangle(0, 0, 98, 33.3), null);

  (lib.T2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#00F0FF").s().p("AgWBIIAAgnIAsAAIAAAngAgSAXIAAheIAmAAIAABeg");
    this.shape.setTransform(179.4, 56.775);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#00F0FF").s().p("AgvBIIAcgwIg/hfIAyAAIAkA5IAig5IAtAAIhVCPg");
    this.shape_1.setTransform(167.65, 56.775);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#00F0FF").s().p("AAWBIIg5g/IAAA/IgpAAIAAiPIApAAIAAA8IA5g8IA1AAIhDBFIBFBKg");
    this.shape_2.setTransform(151.65, 56.775);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#00F0FF")
      .s()
      .p(
        "AhGBIIAAiPIBYAAQAQAAALAFQALAFAFAJQAGAJgBALQAAAIgCAFQgDAGgFAEQgDAEgGACQAHACAFAEQAFAEADAHQADAHABAKQgBATgNALQgMALgaAAgAgdAnIAoAAQAIAAAFgDQAEgDAAgGQAAgHgEgDQgFgDgIAAIgoAAgAgdgRIAnAAQAHAAADgCQAFgDAAgGQAAgFgFgDQgDgCgHAAIgnAAg"
      );
    this.shape_3.setTransform(134.5, 56.775);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#00F0FF").s().p("AAnBIIgIgUIg/AAIgIAUIgqAAIA9iPIAsAAIA8CPgAAQASIgQgqIgSAqIAiAAg");
    this.shape_4.setTransform(117.425, 56.775);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#00F0FF").s().p("AgUBIIAAhrIgzAAIAAgkICQAAIAAAkIg1AAIAABrg");
    this.shape_5.setTransform(101, 56.775);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#00F0FF")
      .s()
      .p(
        "AgjBBQgRgKgJgRQgKgQAAgWQAAgVAKgQQAJgRARgJQARgKAVAAQASAAANAGQANAFAIAIQAIAIAEAJQAEAIABAGIgqAAIgFgFQgDgDgFgCQgGgDgIAAQgJAAgIAFQgHAFgEAIQgEAJAAAJQAAALAEAIQAEAIAHAFQAIAFAJAAQAIAAAGgDQAGgCADgDIAEgFIAqAAQgBAFgEAIQgEAJgIAIQgHAIgNAGQgNAGgTAAQgVAAgRgJg"
      );
    this.shape_6.setTransform(85.175, 56.775);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#00F0FF")
      .s()
      .p(
        "AgGBDQgPgHgLgMQgKgNgEgRIgNAAIAAA2IgpAAIAAiPIApAAIAAA2IANAAQAEgRAKgNQALgNAPgGQAOgHASAAQAVAAARAJQARAJAKARQAKAQAAAWQAAAXgKAQQgKARgRAJQgRAJgVAAQgSAAgOgHgAAJgfQgIAFgDAIQgEAIAAAKQAAALAEAIQADAIAHAFQAIAFAKAAQALAAAHgFQAHgFAEgIQAEgIAAgLQAAgKgEgIQgEgIgHgFQgHgFgLAAQgKAAgHAFg"
      );
    this.shape_7.setTransform(61.125, 56.775);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#00F0FF").s().p("AgvBIIAdgwIhAhfIAxAAIAlA5IAig5IAtAAIhVCPg");
    this.shape_8.setTransform(41.35, 56.775);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#00F0FF")
      .s()
      .p(
        "AhFBIIAAiPIBYAAQAPAAALAFQALAFAFAJQAFAJAAALQABAIgDAFQgDAGgEAEQgFAEgFACQAGACAGAEQAFAEADAHQAEAHAAAKQAAATgOALQgMALgZAAgAgdAnIAoAAQAIAAAEgDQAFgDAAgGQAAgHgFgDQgEgDgIAAIgoAAgAgdgRIAoAAQAGAAAEgCQADgDAAgGQAAgFgDgDQgEgCgGAAIgoAAg"
      );
    this.shape_9.setTransform(24.95, 56.775);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#00F0FF")
      .s()
      .p(
        "AhGBIIAAiPIBYAAQAZAAAOANQAOAMAAAYQAAAXgOAMQgOANgZAAIguAAIAAAugAgcgJIAoAAQAIAAAEgDQAEgEAAgGQAAgHgDgDQgEgDgJAAIgoAAg"
      );
    this.shape_10.setTransform(8.575, 56.775);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#00F0FF").s().p("AhBBIIAAiPIB7AAIAAAiIhRAAIAAASIAwAAIAAAiIgwAAIAAAWIBZAAIAAAjg");
    this.shape_11.setTransform(-7.275, 56.775);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#00F0FF").s().p("AAeBIIAAhrIg7AAIAABrIgpAAIAAiPICNAAIAACPg");
    this.shape_12.setTransform(-23.95, 56.775);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#FFFFFF").s().p("AAnBIIgIgUIg/AAIgIAUIgqAAIA9iPIAsAAIA8CPgAAQASIgQgqIgSAqIAiAAg");
    this.shape_13.setTransform(-46.025, 56.775);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgfBFQgOgFgIgIQgJgIgEgJQgDgIgBgGIApAAQACAFAHAEQAHAEAOAAQANAAAHgDQAHgDAAgHQAAgFgFgCQgFgDgLAAIgVAAIAAgfIATAAQAKAAAFgDQAFgCAAgFQAAgGgHgDQgGgCgLAAQgIAAgGABIgJAEIgFAFIgpAAQABgMAIgLQAIgKAPgGQAQgHAWAAQAXAAAOAGQAOAFAHAJQAHAJAAAMQAAAIgDAGQgDAGgFAEQgGAEgFACQAGACAGADQAGAEAEAGQAEAGAAAIQAAAWgSANQgSAMgiAAQgTAAgNgFg"
      );
    this.shape_14.setTransform(-62.475, 56.775);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.T2, new cjs.Rectangle(-71, 38.6, 254.7, 32.49999999999999), null);

  (lib.t = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AhUChIAkjyIhsAAIAMhPIEtAAIgNBPIhsAAIgkDyg");
    this.shape.setTransform(15.5063, 15.8945, 0.9877, 0.9877);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.t, new cjs.Rectangle(0, 0, 31, 31.8), null);

  (lib.rad = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .rf(["#FFFFFF", "#0FA0FF", "#0F1E84", "rgba(15,30,132,0)"], [0, 0.216, 0.561, 1], 0, 0, 0, 0, 0, 8.7)
      .s()
      .p("Ag7A8QgagYAAgkQAAgjAagZQAZgZAiAAQAkAAAZAZQAZAZAAAjQAAAkgZAYQgZAagkAAQgiAAgZgag");
    this.shape.setTransform(31.85, -27);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.rad, new cjs.Rectangle(23.3, -35.6, 17.2, 17.200000000000003), null);

  (lib.LLLLL = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_2
    this.instance = new lib.Ellipse1();
    this.instance.setTransform(-2.8, 0, 1, 1, 2.7226);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.LLLLL, new cjs.Rectangle(-6.8, 0, 260.7, 96.1), null);

  (lib.i = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AArChIAcjAIihDAIhWAAIAwlBIBXAAIgdDAIChjAIBWAAIgwFBg");
    this.shape.setTransform(17.4724, 15.8945, 0.9877, 0.9877);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.i, new cjs.Rectangle(0, 0, 35, 31.8), null);

  (lib.e = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AiYChIAwlBIEBAAIgMBKIiqAAIgGArIBlAAIgLBLIhlAAIgHAzIC7AAIgMBOg");
    this.shape.setTransform(15.0667, 15.8945, 0.9877, 0.9877);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.e, new cjs.Rectangle(0, 0, 30.2, 31.8), null);

  (lib.c = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhrB8QgogpgDhDQgChNAtg0QAtg0BFAAQBIAAAoArQAdAgADAnIhYAAQgFgLgKgIQgQgNgWAAQgiAAgUAdQgUAaACAnQABAgAQAUQAQAVAbAAQAlAAARgeIBXAAQgGAkgdAfQgoAthAAAQhCAAgpgqg"
      );
    this.shape.setTransform(14.8875, 16.4198, 0.9877, 0.9877);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.c, new cjs.Rectangle(0, 0, 29.8, 32.9), null);

  (lib.btn22 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#00F0FF")
      .s()
      .p(
        "Ag2AsQgLgLAAgSIAAgdQAAgTALgLQALgLAVAAQAUAAALALQALALgBATIAAAdQABATgLAKQgMALgTAAQgTAAgNgLgAgggYQgDAEAAAHIAAAbQAAAHADAEQAEADAGAAQAGAAAEgDQADgEAAgHIAAgbQAAgGgDgFQgEgEgGAAQgGAAgEAEgAifAsQgMgLABgSIAAgdQgBgTAMgLQALgLAVAAQAUAAALALQAMALAAATIAAAdQAAASgMALQgMALgTAAQgUAAgMgLgAiJgYQgDAFAAAGIAAAbQAAAHADAEQADADAHAAQAGAAADgDQAEgFgBgGIAAgbQABgGgEgFQgDgEgGAAQgHAAgDAEgAkIAsQgMgKAAgTIAAgdQAAgTAMgLQALgLAUAAQAUAAAMALQALALAAATIAAAdQAAASgLALQgMALgUAAQgTAAgMgLgAjygYQgDAFAAAGIAAAbQAAAHADAEQACADAHAAQAGAAADgDQAEgEAAgHIAAgbQAAgHgEgEQgDgEgGAAQgHAAgCAEgAEzA1IAAhPIgmAAIAAgbIBsAAIAAAbIgnAAIAABPgACjA1IAAhqIBcAAIAAAZIg9AAIAAAPIAlAAIAAAYIglAAIAAAQIBDAAIAAAagAApA1IAAhqIBCAAQAQABALAHQAJAJAAAMQAAAJgFAFQgCAEgIAEQAIACAFAGQAEAGAAALQAAAOgJAIQgKAIgSAAgABHAdIAeAAQANAAAAgJQAAgKgNAAIgeAAgABHgMIAeAAQALgBgBgHQABgJgLABIgeAAgAl4A1IAAgUIAqgjQAFgFACgDQACgEAAgEQAAgEgDgDQgDgCgFgBQgEABgDACQgDAEgBAFIAAAFIgdAAIAAgGQAAgQALgLQALgKASAAQAVAAAKAJQALAKgBAQQABALgGAIQgHAJgKAIIgMAKIAoAAIAAAag"
      );
    this.shape.setTransform(170.15, 16.8);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AHHBCIAAgYIhfAAIAAAYIgOAAIAAgmIAMAAQAHgKACgWIAGg8IBOAAIAABcIARAAIAAAmgAF9gDQgCAVgFAKIA/AAIAAhOIgzAAgAD7AcQgQgQAAgWQAAgXAQgQQAPgQAYAAQAYAAAPAQQAQAQAAAXQAAAWgQAQQgPAQgYAAQgYAAgPgQgAEFgoQgLANAAARQAAAQALAMQAMAMARAAQASAAALgMQALgMAAgQQAAgRgLgNQgLgMgSAAQgRAAgMAMgAAcAcQgQgQAAgWQAAgXAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAXQAAAWgQAQQgQAQgYAAQgYAAgPgQgAAmgoQgLANAAARQAAAQALAMQAMAMARAAQASAAALgMQAMgMAAgQQAAgRgMgNQgLgMgSAAQgRAAgMAMgAjqAcQgPgPAAgXQAAgYAPgPQAQgQAYAAQAXAAAQAQQAQAQAAAXQAAAWgQAQQgQAQgXAAQgYAAgQgQgAjfgoQgLAMAAASQAAARALALQALAMASAAQASAAAKgMQAMgMAAgQQAAgRgMgNQgKgMgSAAQgSAAgLAMgAhEArIgphdIAABcIgNAAIAAhqIAWAAIAlBWIAmhWIAVAAIAABqIgOAAIAAhdIgoBegADaAqIhAgxIAAAxIgOAAIAAhqIAOAAIAAAyIA+gyIAUAAIhBA1IBEA1gAleAqIAAhqIA3AAQARAAAKAJQAJAHAAAPQAAAOgJAJQgKAJgRAAIgpAAIAAArgAlQgPIApAAQAKAAAGgFQAFgEAAgJQAAgIgFgEQgFgFgLAAIgpAAgAmEAqIAAhcIhAAAIAABcIgPAAIAAhqIBdAAIAABqg"
      );
    this.shape_1.setTransform(78.225, 17.925);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#00F0FF")
      .ss(1.8, 0, 0, 4)
      .p("Ax9iuMAj7AAAQAWAAAPAQQAQAQAAAWIAADyQAAAWgQAPQgPAQgWAAMgj7AAAQgWAAgPgQQgQgPAAgWIAAjyQAAgWAQgQQAQgQAVAAg");
    this.shape_2.setTransform(120.25, 17.45);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.btn22, new cjs.Rectangle(-1, -1, 242.5, 36.9), null);

  (lib.btn2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#DA5035").s().p("AxaCkQg5AAAAg6IAAjTQAAg6A5AAMAi1AAAQA5AAAAA6IAADTQAAA6g5AAg");
    this.shape.setTransform(123.2047, 21.0541, 1.0079, 1.28);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.btn2, new cjs.Rectangle(5.1, 0.1, 236.3, 41.9), null);

  (lib.blick = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("Ak1I3IAAxtIJrAAIAARtg");
    this.shape.setTransform(31, 56.65);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 62, 113.3);

  (lib.b = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AiKChIATiCIg5AAIALhIIA5AAIASh3IELAAIgMBQIi0AAIgGAnIBLAAQA5AAAgAWQAfAVABApQACA6gmAfQgkAdhAAAgAgoBRIBWAAQASAAAKgIQALgIgBgPQAAgTgbAAIhaAAg"
      );
    this.shape.setTransform(17.5062, 15.8692, 0.9877, 0.9877);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.b, new cjs.Rectangle(0, 0, 35, 31.8), null);

  (lib.Анимация63 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // lig_copy
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "EFFiABFIgCgMIAHABQAFAAACgBQADgCABgDIAFgJIABgEIgdhNIANAAIARAtIAGASQABgKAEgIIAQgtIAOAAIgeBPQgFAMgDAFQgDAHgEADQgFADgGAAIgIgCgEEoWABFIgCgMIAIABQAEAAACgBQADgCABgDIAFgJIABgEIgehNIAPAAIAQAtIAFASQACgKAEgIIARgtIAMAAIgdBPQgFAMgDAFQgDAHgFADQgEADgGAAIgIgCgED+YABFIgCgMIAHABQAFAAACgBQADgCABgDIAFgJIABgEIgdhNIANAAIARAtIAGASQACgKADgIIAQgtIAOAAIgeBPQgEAMgEAFQgDAHgEADQgFADgGAAIgIgCgANWBHQAWgjAAgkQAAgMgDgOQgCgLgFgKIgMgWIAKAAQAOASAGATQAGAQAAAQQAAAUgIATQgIASgKAOgAhzBHQgLgOgIgSQgHgTAAgUQAAgQAFgQQAHgTAOgSIAJAAQgJAPgCAHQgFAKgCALQgEAOAAAMQAAAkAWAjgAzPBHQAVgjAAgkQAAgMgCgOQgDgLgFgKIgLgWIAJAAQAOASAGATQAGAQAAAQQAAAUgHATQgIASgLAOgEgiaABHQgLgOgHgSQgIgTAAgUQAAgQAGgQQAGgTAOgSIAJAAQgJAPgCAHQgEAKgDALQgDAOAAAMQgBAkAWAjgEhUhABFIgCgMIAHABQAFAAACgBQADgCABgDIAFgJIABgEIgdhNIANAAIARAtIAGASQACgKADgIIAQgtIAOAAIgeBPQgEAMgDAFQgEAHgEADQgFADgGAAIgIgCgEi2pABFIgCgMIAHABQAFAAACgBQADgCACgDIAEgJIABgEIgehNIAPAAIAQAtIAFASQADgKADgIIAQgtIAOAAIgeBPQgEAMgDAFQgEAHgEADQgFADgGAAIgIgCgEkVaABFIgBgMIAHABQAEAAADgBQACgCACgDIAEgJIABgEIgdhNIAOAAIARAtIAFASQACgKAEgIIAQgtIANAAIgdBPQgFAMgDAFQgEAHgEADQgFADgFAAIgJgCgElEmABFIgBgMIAHABQAFAAADgBQACgCABgDIAFgJIABgEIgdhNIANAAIARAtIAGASQACgKADgIIAQgtIAOAAIgeBPQgEAMgEAFQgDAHgEADQgFADgGAAIgJgCgEEYeABFIAAhrIAMAAIAAALQAEgGAGgDQAFgDAHAAQALAAAHAFQAIAFADAJQAEAKABAKQAAAMgFAJQgEAKgIAFQgJAFgIAAQgHAAgFgDQgGgDgDgEIAAAmgEEYwgAVQgGAIAAAOQAAAPAGAHQAGAHAJAAQAIAAAGgHQAHgIAAgPQAAgOgGgIQgHgHgIAAQgIAAgHAIgEEH3ABFIAAhrIAMAAIAAALQAEgGAFgDQAGgDAIAAQAKAAAHAFQAIAFADAJQAEAKAAAKQAAAMgEAJQgEAKgIAFQgJAFgIAAQgHAAgGgDQgFgDgDgEIAAAmgEEIJgAVQgGAIAAAOQAAAPAGAHQAGAHAJAAQAIAAAGgHQAHgIAAgPQAAgOgGgIQgHgHgIAAQgIAAgHAIgEDzhABFIAAhrIANAAIAAALQADgGAGgDQAGgDAHAAQAKAAAHAFQAIAFAEAJQAEAKAAAKQAAAMgFAJQgEAKgIAFQgIAFgJAAQgGAAgGgDQgFgDgDgEIAAAmgEDz0gAVQgHAIABAOQAAAPAFAHQAHAHAIAAQAJAAAGgHQAHgIgBgPQAAgOgFgIQgHgHgJAAQgIAAgGAIgEDgeABFIAAhrIAMAAIAAALQAFgGAFgDQAFgDAIAAQAKAAAIAFQAHAFAEAJQAEAKAAAKQAAAMgEAJQgEAKgJAFQgIAFgJAAQgHAAgFgDQgFgDgEgEIAAAmgEDgxgAVQgHAIAAAOQABAPAGAHQAFAHAJAAQAJAAAGgHQAGgIABgPQAAgOgHgIQgGgHgIAAQgJAAgGAIgEDUkABFIAAhrIAMAAIAAALQAEgGAGgDQAFgDAHAAQAKAAAIAFQAHAFAEAJQAFAKAAAKQgBAMgEAJQgEAKgIAFQgJAFgJAAQgGAAgFgDQgGgDgDgEIAAAmgEDU2gAVQgGAIAAAOQAAAPAGAHQAGAHAJAAQAIAAAGgHQAHgIAAgPQAAgOgGgIQgGgHgJAAQgIAAgHAIgEDD9ABFIAAhrIAMAAIAAALQAEgGAFgDQAGgDAIAAQAKAAAHAFQAIAFADAJQAEAKABAKQAAAMgFAJQgEAKgIAFQgIAFgJAAQgHAAgGgDQgFgDgDgEIAAAmgEDEPgAVQgGAIAAAOQAAAPAGAHQAGAHAJAAQAIAAAGgHQAHgIAAgPQAAgOgGgIQgHgHgIAAQgIAAgHAIgECv3ABFIAAhrIAMAAIAAALQAEgGAGgDQAFgDAHAAQALAAAHAFQAHAFAEAJQAFAKAAAKQAAAMgFAJQgEAKgIAFQgIAFgKAAQgGAAgFgDQgGgDgDgEIAAAmgECwJgAVQgGAIAAAOQAAAPAGAHQAGAHAJAAQAIAAAGgHQAHgIAAgPQAAgOgGgIQgGgHgJAAQgIAAgHAIgECqsABFIAAhrIAMAAIAAALQAEgGAGgDQAFgDAHAAQAKAAAIAFQAHAFAEAJQAFAKgBAKQAAAMgEAJQgEAKgJAFQgHAFgKAAQgGAAgFgDQgGgDgDgEIAAAmgECq+gAVQgGAIAAAOQAAAPAGAHQAGAHAIAAQAJAAAHgHQAGgIAAgPQAAgOgGgIQgHgHgIAAQgIAAgHAIgECa2ABFIAAgkQgEAEgEACQgGACgFAAQgMAAgKgLQgIgKgBgUQAAgQAJgMQAIgLAOAAQAGAAAFACQAEACAEAFIAAglIANAAIAAAlQAFgFAEgCQAGgCAFAAQAOAAAIALQAIAMAAAQQAAATgJALQgIALgOAAIgIgBQgEgCgHgFIAAAkgECbIgAVQgFAIAAAOQAAARAFAGQAFAGAHAAQAIAAAGgHQAGgIgBgPQAAgOgEgHQgGgIgIAAQgJAAgEAIgECaXgAVQgFAIAAANQAAAQAFAHQAGAHAIAAQAJAAAEgHQAEgHAAgPQAAgOgEgIQgEgHgJAAQgJAAgFAHgECQWABFIAAhrIAMAAIAAALQAEgGAGgDQAFgDAHAAQALAAAHAFQAIAFADAJQAFAKAAAKQAAAMgFAJQgEAKgIAFQgJAFgIAAQgHAAgFgDQgGgDgDgEIAAAmgECQogAVQgGAIAAAOQAAAPAGAHQAGAHAJAAQAIAAAGgHQAHgIAAgPQAAgOgGgIQgGgHgJAAQgIAAgHAIgECAJABFIAAhrIALAAIAAALQAEgGAGgDQAGgDAHAAQAKAAAIAFQAHAFAEAJQAEAKAAAKQAAAMgEAJQgEAKgJAFQgIAFgJAAQgGAAgGgDQgFgDgEgEIAAAmgECAbgAVQgHAIAAAOQAAAPAHAHQAFAHAJAAQAJAAAGgHQAGgIABgPQAAgOgHgIQgGgHgIAAQgIAAgHAIgEByFABFIAAhrIAMAAIAAALQAEgGAGgDQAFgDAIAAQAKAAAIAFQAHAFAEAJQAEAKAAAKQAAAMgEAJQgEAKgJAFQgIAFgJAAQgHAAgFgDQgFgDgEgEIAAAmgEByYgAVQgHAIAAAOQABAPAGAHQAFAHAJAAQAJAAAGgHQAGgIABgPQAAgOgHgIQgGgHgIAAQgJAAgGAIgEBq9ABFIAAhrIAMAAIAAALQAEgGAGgDQAFgDAHAAQALAAAHAFQAHAFAEAJQAFAKAAAKQgBAMgEAJQgEAKgIAFQgJAFgJAAQgGAAgFgDQgGgDgDgEIAAAmgEBrPgAVQgGAIAAAOQAAAPAGAHQAGAHAJAAQAIAAAGgHQAHgIAAgPQAAgOgGgIQgGgHgJAAQgIAAgHAIgEBlyABFIAAhrIAMAAIAAALQAEgGAGgDQAFgDAHAAQAKAAAIAFQAHAFAEAJQAFAKgBAKQAAAMgEAJQgEAKgJAFQgHAFgKAAQgGAAgFgDQgGgDgDgEIAAAmgEBmEgAVQgGAIAAAOQAAAPAGAHQAGAHAIAAQAJAAAHgHQAGgIAAgPQAAgOgGgIQgHgHgIAAQgIAAgHAIgEBc3ABFIAAhrIALAAIAAALQAEgGAGgDQAFgDAIAAQAKAAAIAFQAHAFAEAJQAEAKAAAKQAAAMgEAJQgEAKgJAFQgIAFgJAAQgHAAgFgDQgFgDgEgEIAAAmgEBdJgAVQgHAIAAAOQABAPAGAHQAFAHAJAAQAJAAAGgHQAGgIAAgPQABgOgHgIQgGgHgIAAQgJAAgGAIgEBIoABFIAAhrIAMAAIAAALQAEgGAGgDQAFgDAIAAQAKAAAHAFQAIAFADAJQAEAKABAKQAAAMgFAJQgEAKgIAFQgIAFgJAAQgHAAgFgDQgGgDgDgEIAAAmgEBI6gAVQgGAIAAAOQAAAPAGAHQAGAHAJAAQAIAAAGgHQAHgIAAgPQAAgOgGgIQgHgHgIAAQgIAAgHAIgEA9zABFIAAhrIAMAAIAAALQAEgGAGgDQAFgDAHAAQALAAAHAFQAIAFADAJQAEAKABAKQAAAMgFAJQgEAKgIAFQgIAFgJAAQgHAAgFgDQgGgDgDgEIAAAmgEA+FgAVQgGAIAAAOQAAAPAGAHQAGAHAJAAQAIAAAGgHQAHgIAAgPQAAgOgGgIQgHgHgIAAQgIAAgHAIgEAv6ABFIAAhrIANAAIAAALQADgGAGgDQAGgDAHAAQAKAAAHAFQAIAFAEAJQAEAKAAAKQAAAMgFAJQgEAKgIAFQgIAFgJAAQgGAAgGgDQgFgDgDgEIAAAmgEAwNgAVQgHAIABAOQAAAPAFAHQAHAHAIAAQAJAAAGgHQAHgIgBgPQAAgOgFgIQgHgHgJAAQgIAAgGAIgEAtYABFIAAgkQgEAEgEACQgFACgGAAQgMAAgJgLQgJgKAAgUQAAgQAJgMQAHgLAOAAQAHAAAEACQAFACADAFIAAglIAOAAIAAAlQAEgFAFgCQAFgCAFAAQAOAAAJALQAHAMAAAQQAAATgJALQgIALgNAAIgJgBQgEgCgGgFIAAAkgEAtqgAVQgEAIAAAOQAAARAEAGQAGAGAHAAQAHAAAGgHQAGgIAAgPQAAgOgFgHQgGgIgHAAQgKAAgEAIgEAs5gAVQgEAIgBANQAAAQAGAHQAFAHAJAAQAIAAAFgHQADgHAAgPQAAgOgDgIQgFgHgJAAQgJAAgFAHgAaABFIAAhrIAMAAIAAALQAEgGAGgDQAFgDAHAAQAKAAAIAFQAHAFAFAJQADAKAAAKQAAAMgEAJQgEAKgJAFQgHAFgKAAQgGAAgFgDQgFgDgEgEIAAAmgAaTgVQgHAIAAAOQAAAPAGAHQAGAHAIAAQAJAAAHgHQAGgIAAgPQAAgOgGgIQgHgHgIAAQgIAAgGAIgEhFlABFIAAhrIALAAIAAALQAEgGAGgDQAGgDAHAAQAKAAAIAFQAHAFAEAJQAEAKAAAKQAAAMgEAJQgFAKgIAFQgIAFgJAAQgGAAgGgDQgFgDgEgEIAAAmgEhFTgAVQgGAIgBAOQAAAPAHAHQAFAHAJAAQAJAAAGgHQAGgIABgPQAAgOgHgIQgGgHgJAAQgHAAgHAIgEhMdABFIAAhrIAMAAIAAALQAEgGAGgDQAFgDAIAAQAKAAAIAFQAHAFAEAJQAEAKAAAKQAAAMgFAJQgDAKgJAFQgIAFgJAAQgHAAgFgDQgFgDgEgEIAAAmgEhMKgAVQgHAIAAAOQABAPAFAHQAGAHAJAAQAJAAAGgHQAGgIAAgPQABgOgHgIQgGgHgIAAQgJAAgGAIgEhW5ABFIAAhrIAMAAIAAALQAEgGAFgDQAGgDAIAAQAJAAAIAFQAHAFAFAJQADAKAAAKQABAMgFAJQgEAKgJAFQgHAFgKAAQgGAAgGgDQgEgDgEgEIAAAmgEhWmgAVQgHAIAAAOQAAAPAGAHQAGAHAIAAQAKAAAFgHQAHgIAAgPQAAgOgGgIQgGgHgJAAQgIAAgGAIgEhmeABFIAAhrIALAAIAAALQAFgGAFgDQAGgDAHAAQAKAAAIAFQAHAFAEAJQAEAKAAAKQAAAMgEAJQgEAKgJAFQgIAFgJAAQgGAAgGgDQgFgDgEgEIAAAmgEhmMgAVQgGAIgBAOQAAAPAHAHQAFAHAJAAQAJAAAGgHQAGgIABgPQAAgOgHgIQgGgHgIAAQgIAAgHAIgEiuTABFIAAhrIAMAAIAAALQAEgGAGgDQAFgDAHAAQALAAAHAFQAIAFADAJQAFAKAAAKQAAAMgFAJQgEAKgIAFQgIAFgJAAQgHAAgFgDQgGgDgDgEIAAAmgEiuBgAVQgGAIAAAOQAAAPAGAHQAGAHAJAAQAIAAAGgHQAHgIAAgPQAAgOgGgIQgGgHgJAAQgIAAgHAIgEjaOABFIAAhrIALAAIAAALQAEgGAGgDQAGgDAHAAQAKAAAIAFQAHAFAEAJQAEAKAAAKQAAAMgEAJQgEAKgJAFQgIAFgJAAQgGAAgGgDQgFgDgEgEIAAAmgEjZ8gAVQgGAIgBAOQAAAPAHAHQAFAHAJAAQAJAAAGgHQAGgIABgPQAAgOgHgIQgGgHgJAAQgHAAgHAIgEjkcABFIAAhrIANAAIAAALQAEgGAFgDQAGgDAHAAQAKAAAHAFQAIAFAEAJQAEAKAAAKQAAAMgFAJQgDAKgJAFQgIAFgJAAQgGAAgGgDQgFgDgDgEIAAAmgEjkJgAVQgHAIABAOQAAAPAFAHQAHAHAIAAQAJAAAGgHQAHgIgBgPQAAgOgFgIQgHgHgIAAQgJAAgGAIgEkMfABFIAAhrIAMAAIAAALQAEgGAGgDQAFgDAHAAQAKAAAIAFQAHAFAFAJQADAKABAKQgBAMgEAJQgEAKgJAFQgIAFgJAAQgGAAgFgDQgGgDgDgEIAAAmgEkMMgAVQgHAIAAAOQAAAPAGAHQAGAHAIAAQAJAAAHgHQAGgIAAgPQAAgOgGgIQgHgHgIAAQgIAAgGAIgEkdrABFIAAhrIANAAIAAALQAEgGAFgDQAGgDAHAAQAKAAAHAFQAIAFAEAJQAEAKAAAKQAAAMgFAJQgDAKgJAFQgIAFgJAAQgGAAgGgDQgFgDgDgEIAAAmgEkdYgAVQgHAIABAOQAAAPAFAHQAHAHAIAAQAJAAAGgHQAHgIgBgPQAAgOgFgIQgHgHgIAAQgJAAgGAIgEkpuABFIAAhr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AASIAAAEIg6AAQABANAHAGQAGAHAKAAQAHAAAFgEQAFgDADgJIAOACQgEAMgIAGQgJAHgNAAQgSAAgKgKgEFBggAWQgHAGAAAKIArAAQAAgKgFgFQgGgHgKAAQgJAAgGAGgEFAHAAeIAAAJIgLAAIAAhqIAMAAIAAAmQAJgKANAAQAHAAAGADQAHACAEAGQAEAFADAHQACAIAAAIQAAATgKALQgKALgOAAQgNAAgJgLgEFAOgAVQgHAIAAANQABAOADAGQAGAKALAAQAIAAAHgHQAHgIAAgPQgBgOgGgHQgGgHgJAAQgIAAgGAHgEE4VAAfQgKgLAAgTQAAgTAKgKQAKgLARAAQAPAAAKAKQAJALAAASIAAAEIg6AAQABANAHAGQAHAHAJAAQAIAAAEgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgRAAgKgKgEE4ggAWQgGAGgBAKIAsAAQgBgKgEgFQgHgHgJAAQgKAAgGAGgEE0mAAjQgHgHAAgJQAAgGADgFQACgEAEgDQAFgCAFgCIAMgCQAPgBAIgDIAAgEQAAgIgDgDQgFgEgLAAQgJAAgEADQgFADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAKAAQAKAAAGACQAHACACAEQADAEACAFIABAMIAAARQAAASAAAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgGADgJAAQgNAAgGgGgEE1AAAFIgMADQgDABgCADQgCADAAADQAAAGAEADQAEAEAIAAQAHAAAGgEQAGgDADgGQACgEAAgJIAAgFQgHADgOACgEEzeAAfQgKgLAAgTQAAgMAEgJQAEgKAKgFQAIgEAKAAQAMAAAIAGQAJAHACALIgNACQgCgIgFgDQgEgEgHAAQgKAAgGAHQgGAHAAAOQAAAQAGAHQAGAHAKAAQAHAAAFgFQAGgEABgKIANABQgCAOgJAHQgIAIgNAAQgQAAgKgKgEExeAAjQgHgHAAgJQAAgGACgFQADgEAEgDQAEgCAGgCIAMgCQAQgBAHgDIAAgEQAAgIgDgDQgGgEgKAAQgJAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAKAAQAKAAAGACQAGACADAEQADAEABAFIACAMIAAARQAAASABAFQAAAFACAEIgNAAQgCgEgBgFQgHAGgHACQgGADgJA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ABAPAGAIQAHAHAKAAQAKAAAGgHQAHgIgBgPQABgOgHgHQgHgHgJAAQgKAAgHAHgECz3AAfQgKgLAAgUQAAgUAMgLQAKgIAOAAQAQAAAKAKQALALAAASQAAAOgFAJQgFAIgIAFQgJAFgKAAQgRAAgJgKgEC0BgAVQgHAHAAAOQAAAPAHAIQAGAHAKAAQAKAAAGgHQAHgIAAgPQAAgOgHgHQgGgHgKAAQgKAAgGAHgECumAAjQgHgHAAgJQAAgGADgFQACgEAEgDQAFgCAFgCIAMgCQAPgBAIgDIAAgEQAAgIgEgDQgEgEgLAAQgJAAgEADQgFADgCAIIgNgBQACgJAEgFQAEgFAIgDQAHgCALAAQAJAAAGACQAHACACAEQAEAEABAFIABAMIAAARQgBASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgHADgIAAQgNAAgGgGgECu/AAFIgLADQgDABgCADQgCADAAADQAAAGAEADQAEAEAIAAQAHAAAGgEQAGgDADgGQACgEAAgJIAAgFQgHADgPACgECjHAAjQgIgHABgJQgBgGADgFQADgEAEgDQAEgCAGgCIALgCQAQgBAIgDIAAgEQgBgIgDgDQgFgEgKAAQgJAAgFADQgFADgCAIIgNgBQACgJAFgFQAEgFAHgDQAIgCAKAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAARQAAASABAFQABAFACAEIgOAAQgCgEAAgFQgIAGgHACQgGADgIAAQgNAAgGgGgECjgAAFIgMADQgDABgCADQgCADAAADQAAAGAFADQADAEAIAAQAIAAAGgEQAFgDAEgGQACgEAAgJIAAgFQgIADgOACgECgIAAfQgKgLAAgTQAAgTAKgKQAKgLAQAAQAQAAAKAKQAJALAAASIAAAEIg5AAQABANAGAGQAHAHAJAAQAHAAAGgEQAEgDAEgJIANACQgDAMgIAGQgKAHgNAAQgRAAgKgKgECgTgAWQgGAGAAAKIArAAQgBgKgEgFQgHgHgKAAQgIAAgHAGgECcJAAfQgKgLAAgUQAAgUAMgLQAKgIAPAAQAQAAAKAKQAKALAAASQAAAOgEAJQgFAIgIAFQgJAFgKAAQgQAAgLgKgECcTgAVQgGAHAAAOQAAAPAGAIQAHAHAKAAQAKAAAHgHQAGgIAAgPQAAgOgGgHQgIgHgJAAQgKAAgHAHgECWqAAfQgKgLAAgUQAAgUAMgLQAKgIAOAAQAQAAALAKQAKALAAASQAAAOgEAJQgFAIgJAFQgJAFgKAAQgQAAgKgKgECW0gAVQgHAHAAAOQAAAPAHAIQAGAHAKAAQALAAAGgHQAGgIAAgPQAAgOgGgHQgHgHgKAAQgKAAgGAHgECUIAAfQgLgLABgUQgBgUAMgLQAKgIAPAAQAQAAAKAKQAKALAAASQAAAOgEAJQgEAIgJAFQgJAFgKAAQgQAAgKgKgECURgAVQgGAHAAAOQAAAPAGAIQAHAHAKAAQAKAAAHgHQAGgIAAgPQAAgOgGgHQgIgHgJAAQgKAAgHAHgECS3AARIAMgCQACAHAFAEQAGAEAGAAQAHAAAFgDQADgEAAgGQABgFgDgDQgDgDgDgBIgLgBIgDAAIAAgJIALgBQADAAADgDQADgDAAgFQgBgFgDgDQgDgDgHAAQgKAAgFANIgNgCQAGgWAXAAQAMAAAIAHQAGAGAAAKQABAJgKAGQAGACADAFQADAFAAAGQAAALgHAGQgJAHgNAAQgaAAgFgYgECNNAAfQgKgLAAgUQAAgUAMgLQAKgIAPAAQAPAAALAKQAKALAAASQAAAOgFAJQgEAIgIAFQgKAFgJAAQgRAAgKgKgECNXgAVQgGAHgBAOQABAPAGAIQAHAHAKAAQAJAAAHgHQAHgIgBgPQABgOgHgHQgHgHgJAAQgKAAgHAHgECGvAAfQgKgLAAgTQAAgTAKgKQAKgLARAAQAPAAAKAKQAKALAAASIAAAEIg7AAQABANAHAGQAHAHAJAAQAIAAAEgEQAGgDACgJIAPACQgEAMgJAGQgIAHgOAAQgRAAgKgKgECG6gAWQgGAGgBAKIAsAAQgBgKgEgFQgHgHgJAAQgJAAgHAGgECEEAAfQgKgLAAgTQAAgTAKgKQAKgLARAAQAPAAAKAKQAKALAAASIAAAEIg7AAQABANAHAGQAHAHAJAAQAIAAAEgEQAGgDACgJIAPACQgEAMgJAGQgIAHgOAAQgRAAgKgKgECEPgAWQgGAGgBAKIAsAAQgBgKgEgFQgHgHgJAAQgKAAgGAGgECBhAAfQgKgLAAgUQAAgUAMgLQAKgIAPAAQAQAAAJAKQALALAAASQAAAOgFAJQgEAIgIAFQgKAFgJAAQgRAAgKgKgECBrgAVQgGAHgBAOQABAPAGAIQAHAHAKAAQAJAAAHgHQAGgIAAgPQAAgOgGgHQgHgHgJAAQgKAAgHAHgEB4qAAjQgIgHABgJQgBgGADgFQADgEAEgDQAEgCAFgCIAMgCQAQgBAIgDIAAgEQgBgIgDgDQgFgEgKAAQgJAAgFADQgFADgBAIIgOgBQACgJAFgFQADgFAIgDQAIgCAKAAQAJAAAHACQAGACADAEQADAEABAFIABAMIAAARQAAASABAFQAAAFADAEIgOAAQgCgEAAgFQgIAGgHACQgGADgIAAQgNAAgGgGgEB5DAAFIgMADQgDABgBADQgCADgBADQABAGAEADQADAEAIAAQAIAAAGgEQAFgDAEgGQACgEAAgJIAAgFQgIADgOACgEBzbAAjQgGgHAAgJQgBgGADgFQADgEAEgDQAEgCAGgCIALgCQAQgBAIgDIAAgEQgBgIgDgDQgFgEgKAAQgKAAgEADQgEADgDAIIgNgBQACgJAFgFQAEgFAHgDQAIgCAKAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAARQAAASABAFQABAFACAEIgOAAQgCgEAAgFQgIAGgHACQgGADgIAAQgNAAgHgGgEBz1AAFIgMADQgDABgCADQgCADAAADQAAAGAFADQADAEAIAAQAIAAAGgEQAFgDADgGQADgEAAgJIAAgFQgIADgOACgEBu9AAfQgKgLAAgUQAAgUAMgLQAKgIAOAAQAQAAAKAKQALALAAASQAAAOgFAJQgFAIgIAFQgJAFgKAAQgRAAgJgKgEBvHgAVQgHAHAAAOQAAAPAHAIQAGAHAKAAQAKAAAGgHQAHgIAAgPQAAgOgHgHQgGgHgKAAQgKAAgGAHgEBpsAAjQgHgHAAgJQAAgGADgFQACgEAEgDQAFgCAFgCIAMgCQAPgBAIgDIAAgEQAAgIgEgDQgEgEgLAAQgJAAgEADQgFADgCAIIgNgBQACgJAEgFQAEgFAIgDQAHgCALAAQAJAAAGACQAHACACAEQAEAEABAFIABAMIAAARQgBASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgHADgIAAQgNAAgGgGgEBqFAAFIgLADQgDABgCADQgCADAAADQAAAGAEADQAEAEAIAAQAHAAAGgEQAGgDADgGQACgEAAgJIAAgFQgHADgPACgEBhwAAfQgKgLAAgTQAAgTAKgKQAKgLARAAQAPAAAKAKQAKALAAASIAAAEIg7AAQABANAHAGQAHAHAJAAQAIAAAEgEQAGgDACgJIAPACQgEAMgJAGQgIAHgOAAQgRAAgKgKgEBh7gAWQgGAGgBAKIAsAAQgBgKgEgFQgHgHgJAAQgKAAgGAGgEBfjAAfQgJgLAAgTQAAgMAEgJQAEgKAJgFQAIgEAKAAQANAAAIAGQAIAHADALIgOACQgCgIgEgDQgEgEgHAAQgKAAgHAHQgFAHAAAOQAAAQAFAHQAHAHAJAAQAIAAAFgFQAFgEABgKIAOABQgCAOgJAHQgJAIgNAAQgQAAgKgKgEBa8AAjQgHgHAAgJQAAgGADgFQACgEAFgDQAEgCAFgCIALgCQARgBAHgDIAAgEQAAgIgEgDQgFgEgJAAQgKAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAIgDQAHgCALAAQAJAAAHACQAFACAEAEQADAEAAAFIABAMIAAARQAAASABAFQABAFADAEIgOAAQgDgEAAgFQgHAGgHACQgHADgHAAQgOAAgGgGgEBbVAAFIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAIAAQAHAAAGgEQAGgDADgGQACgEAAgJIAAgFQgHADgPACgEBSPAAjQgHgHAAgJQAAgGACgFQADgEAFgDQAEgCAFgCIALgCQARgBAHgDIAAgEQAAgIgEgDQgFgEgJAAQgKAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAIgDQAHgCALAAQAJAAAHACQAFACAEAEQADAEAAAFIABAMIAAARQAAASABAFQABAFADAEIgOAAQgDgEAAgFQgHAGgHACQgHADgHAAQgOAAgGgGgEBSoAAFIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAIAAQAIAAAFgEQAGgDADgGQACgEAAgJIAAgFQgHADgPACgEBPvAAfQgKgLAAgUQAAgUAMgLQAKgIAPAAQAQAAAKAKQAKALAAASQAAAOgFAJQgEAIgIAFQgKAFgJAAQgRAAgKgKgEBP5gAVQgGAHgBAOQABAPAGAIQAHAHAKAAQAJAAAHgHQAGgIAAgPQAAgOgGgHQgHgHgJAAQgKAAgHAHgEBNRAAfQgJgLAAgTQAAgMAEgJQAEgKAJgFQAIgEAKAAQANAAAIAGQAIAHADALIgOACQgCgIgEgDQgEgEgHAAQgKAAgHAHQgFAHAAAOQAAAQAFAHQAHAHAJAAQAIAAAFgFQAFgEABgKIAOABQgCAOgJAHQgJAIgNAAQgQAAgKgKgEBL+AAfQgLgLABgUQAAgUALgLQALgIAOAAQAQAAAKAKQALALAAASQgBAOgEAJQgEAIgJAFQgJAFgKAAQgQAAgKgKgEBMHgAVQgGAHAAAOQAAAPAGAIQAHAHAKAAQAKAAAHgHQAGgIAAgPQAAgOgGgHQgIgHgJAAQgKAAgHAHgEBKBAAfQgKgLAAgTQAAgTAKgKQAKgLAQAAQAQAAAKAKQAKALAAASIAAAEIg7AAQABANAHAGQAGAHAKAAQAHAAAFgEQAGgDACgJIAPACQgEAMgIAGQgJAHgOAAQgRAAgKgKgEBKMgAWQgGAGAAAKIArAAQgBgKgEgFQgGgHgLAAQgJAAgGAGgEBHZAAfQgJgLgBgUQAAgUANgLQAJgIAPAAQAQAAAKAKQALALgBASQABAOgFAJQgEAIgJAFQgJAFgKAAQgQAAgLgKgEBHkgAVQgHAHAAAOQAAAPAHAIQAGAHAKAAQAKAAAGgHQAHgIAAgPQAAgOgHgHQgGgHgKAAQgKAAgGAHgEBE/AAjQgHgHAAgJQAAgGADgFQACgEAFgDQAEgCAFgCIAMgCQAPgBAIgDIAAgEQAAgIgEgDQgEgEgLAAQgJAAgEADQgFADgCAIIgNgBQACgJAEgFQAEgFAIgDQAHgCALAAQAJAAAGACQAHACACAEQAEAEABAFIABAMIAAARQgBASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgHADgIAAQgNAAgGgGgEBFYAAFIgLADQgDABgCADQgCADAAADQAAAGAEADQAEAEAIAAQAHAAAGgEQAGgDADgGQACgEAAgJIAAgFQgHADgPACgEBDxAARIAMgCQACAHAGAEQAEAEAHAAQAHAAAEgDQAFgEAAgGQgBgFgCgDQgDgDgDgBIgLgBIgEAAIAAgJIAMgBQADAAACgDQADgDAAgFQAAgFgDgDQgEgDgFAAQgMAAgEANIgMgCQAFgWAXAAQAMAAAHAHQAIAGgBAKQAAAJgJAGQAGACADAFQADAFAAAGQAAALgIAGQgHAHgOAAQgbAAgEgYgEBAAAAjQgIgHAAgJQABgGACgFQACgEAFgDQAEgCAFgCIAMgCQAQgBAIgDIAAgEQgBgIgDgDQgFgEgKAAQgJAAgFADQgEADgCAIIgOgBQADgJAEgFQADgFAIgDQAHgCALAAQAJAAAHACQAGACADAEQADAEABAFIABAMIAAARQAAASABAFQAAAFADAEIgOAAQgCgEgBgFQgGAGgHACQgHADgIAAQgNAAgGgGgEBAZAAFIgMADQgDABgBADQgCADAAADQAAAGADADQAEAEAIAAQAIAAAGgEQAGgDADgGQABgEABgJIAAgFQgIADgOACgEA8kAAfQgJgLgBgUQAAgUANgLQAJgIAPAAQAQAAAKAKQALALgBASQABAOgFAJQgEAIgJAFQgJAFgKAAQgQAAgLgKgEA8vgAVQgHAHAAAOQAAAPAHAIQAGAHAKAAQAKAAAGgHQAHgIAAgPQAAgOgHgHQgGgHgKAAQgKAAgGAHgEA6sAAjQgHgHgEgKQgFgJAAgYQAAgfALgLQALgKAVAAIAQgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIALAAQAAAIgDADQgDADgEABQgEABgNAAQgQAAgFADQgGAEgDAGQgDAHAAALQAFgHAHgEQAGgEAJAAQAPAAAKALQAKAKAAARQAAAOgFAJQgFAIgHAFQgHAFgMAAQgOAAgIgGgEA6ygASQgHAIABAMQAAAOAGAHQAHAHAJAAQAKAAAGgIQAGgIAAgOQAAgLgGgIQgFgIgLAAQgLAAgFAJgEA5SAAfQgLgLABgUQgBgUAMgLQAKgIAPAAQAQAAAKAKQAKALAAASQAAAOgEAJQgEAIgJAFQgJAFgKAAQgQAAgKgKgEA5bgAVQgGAHAAAOQAAAPAGAIQAHAHAKAAQAKAAAHgHQAGgIAAgPQAAgOgGgHQgIgHgJAAQgKAAgHAHgEA3aAAfQgJgJgBgRIgQAAIAAAiIgOAAIAAhNIAOAAIAAAhIAQAAQACgRAIgJQAJgIANAAQAMAAAHAEQAHAFAFAJQAEAIAAANQAAAUgJALQgKAKgPAAQgPAAgIgKgEA3jgAVQgGAIAAANQAAAPAGAIQAFAHAJAAQAJAAAGgHQAFgHABgPQgBgOgFgIQgEgHgLAAQgJAAgFAHgEAy3AAjQgGgHAAgJQAAgGACgFQADgEAEgDQAEgCAGgCIALgCQAQgBAIgDIAAgEQAAgIgEgDQgFgEgKAAQgKAAgEADQgFADgCAIIgMgBQABgJAFgFQAEgFAHgDQAIgCAKAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAARQAAASABAFQABAFACAEIgOAAQgCgEAAgFQgIAGgHACQgGADgIAAQgNAAgHgGgEAzRAAFIgMADQgDABgCADQgCADAAADQAAAGAFADQAEAEAHAAQAIAAAFgEQAHgDACgGQADgEAAgJIAAgFQgIADgOACgEAusAAfQgKgLAAgUQAAgUAMgLQAKgIAPAAQAQAAAKAKQAKALAAASQAAAOgFAJQgEAIgIAFQgKAFgJAAQgRAAgKgKgEAu2gAVQgGAHgBAOQABAPAGAIQAHAHAKAAQAJAAAHgHQAGgIAAgPQAAgOgGgHQgHgHgJAAQgKAAgHAHgEAihAAjQgHgHAAgJQAAgGADgFQACgEAEgDQAFgCAFgCIAMgCQAPgBAIgDIAAgEQAAgIgDgDQgFgEgLAAQgJAAgEADQgFADgCAIIgNgBQACgJAEgFQAEgFAIgDQAHgCALAAQAJAAAGACQAHACACAEQAEAEABAFIABAMIAAARQAAASABAFQAAAFACAEIgNAAQgDgEAAgFQgHAGgHACQgGADgJAAQgNAAgGgGgEAi6AAFIgLADQgDABgCADQgCADAAADQAAAGAEADQAEAEAIAAQAHAAAGgEQAGgDADgGQACgEAAgJIAAgFQgHADgPACgEAgkAAjQgHgHAAgJQAAgGADgFQACgEAFgDQAEgCAFgCIAMgCQAPgBAIgDIAAgEQAAgIgEgDQgEgEgLAAQgJAAgEADQgFADgCAIIgNgBQACgJAEgFQAEgFAIgDQAHgCALAAQAJAAAGACQAHACACAEQAEAEABAFIAAAMIAAARQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgHADgIAAQgNAAgGgGgEAg9AAFIgLADQgDABgCADQgCADAAADQAAAGAEADQAEAEAIAAQAHAAAGgEQAGgDADgGQACgEAAgJIAAgFQgHADgPACgAbWAjQgHgHAAgJQAAgGADgFQACgEAEgDQAFgCAFgCIAMgCQAPgBAIgDIAAgEQAAgIgEgDQgEgEgLAAQgJAAgEADQgFADgCAIIgNgBQACgJAEgFQAEgFAIgDQAHgCALAAQAJAAAGACQAHACACAEQAEAEABAFIABAMIAAARQAAASAAAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgGADgJAAQgNAAgGgGgAbwAFIgMADQgDABgCADQgCADAAADQAAAGAEADQAEAEAIAAQAHAAAGgEQAGgDADgGQACgEAAgJIAAgFQgHADgOACgAW3AfQgJgLgBgTQABgTAJgKQALgLAQAAQAPAAAKAKQAKALAAASIAAAEIg6AAQABANAHAGQAGAHAJAAQAIAAAFgEQAFgDADgJIAOACQgEAMgIAGQgJAHgOAAQgQAAgLgKgAXDgWQgHAGAAAKIAsAAQgCgKgEgFQgGgHgKAAQgJAAgGAGgARNAfQgKgLAAgUQAAgUAMgLQAKgIAOAAQAQAAALAKQAKALAAASQAAAOgEAJQgFAIgJAFQgJAFgKAAQgQAAgKgKgARXgVQgHAHAAAOQAAAPAHAIQAGAHAKAAQALAAAGgHQAHgIAAgPQAAgOgHgHQgHgHgKAAQgKAAgGAHgAKmAiQgKgHgGgNQgGgOABgOQgBgRAHgMQAGgNAMgGQAMgHAOAAQAQAAALAIQALAIAEAPIgOAEQgDgMgIgFQgGgGgLAAQgMAAgJAGQgIAGgDAKQgEAKAAALQAAANAEAKQAEAKAIAFQAJAFAKAAQALAAAJgHQAJgHACgNIAOADQgEASgMAJQgLAJgRAAQgSAAgLgHgAGhAiQgIgHgCgNIANgBQABAJAFAEQAFAEAGAAQAHAAAFgDQAEgCADgFQADgFACgIQABgHAAgIIAAgCQgDAGgHAEQgHADgIAAQgOAAgIgJQgKgJAAgQQAAgRAKgKQAKgKAOAAQAKAAAJAGQAJAGAEAKQAFALAAATQAAAUgFAMQgEAMgJAHQgJAGgMAAQgMAAgIgHgAGqgxQgHAHAAALQAAAKAGAHQAGAGAJAAQAKAAAFgGQAGgHAAgLQAAgLgGgHQgGgHgIAAQgJAAgGAIgAFNAhQgKgIgCgOIAPgBQABAKAGAFQAFAFAIAAQAJAAAHgHQAHgHAAgMQAAgKgHgHQgFgGgLAAQgHAAgFADQgEACgEAFIgMgCIALg3IA1AAIAAANIgrAAIgGAdQAKgHALAAQAOAAAJAKQAKAKAAAOQAAAOgJALQgKANgSAAQgPAAgIgIgADRAiQgJgHgBgNIAMgBQACAJAFAEQAEAEAHAAQAHAAAEgDQAEgCADgFQADgFACgIQACgHAAgIIAAgCQgEAGgGAEQgIADgIAAQgNAAgJgJQgKgJABgQQAAgRAKgKQAJgKAOAAQALAAAIAGQAKAGAEAKQAFALgBATQABAUgFAMQgEAMgKAHQgIAGgMAAQgNAAgHgHgADZgxQgGAHgBALQAAAKAHAHQAGAGAIAAQAKAAAGgGQAFgHABgLQAAgLgHgHQgFgHgJAAQgJAAgGAIgAB8AhQgKgIgBgOIAOgBQABAKAGAFQAGAFAHAAQAKAAAHgHQAHgHAAgMQAAgKgHgHQgGgGgLAAQgGAAgFADQgFACgDAFIgMgCIAKg3IA2AAIAAANIgrAAIgHAdQAKgHALAAQAOAAAJAKQALAKgBAOQAAAOgIALQgLANgSAAQgOAAgJgIgAAAAhQgJgJgCgNIANgCQACALAFAFQAGAFAHAAQAKAAAGgGQAGgHABgJQgBgIgGgGQgFgGgKAAIgJABIACgLIACAAQAIAAAHgEQAHgFAAgJQAAgHgFgFQgFgFgIAAQgIAAgEAFQgGAFgBAKIgMgDQACgNAIgHQAIgIANAAQAIAAAIAEQAIAEADAHQAEAGABAHQgBAHgEAGQgDAGgIADQAKACAGAHQAEAHAAAKQABAOgLAJQgKAKgQAAQgNAAgJgIgAkCAhQgKgIgBgOIANgBQACAKAGAFQAFAFAIAAQAKAAAGgHQAHgHAAgMQAAgKgHgHQgFgGgLAAQgHAAgFADQgEACgEAFIgMgCIAKg3IA2AAIAAANIgrAAIgGAdQAKgHALAAQANAAAKAKQAKAKAAAOQAAAOgIALQgLANgSAAQgOAAgJgIgAmqAeQgLgNAAgeQAAgTAFgLQADgMAJgGQAHgHALAAQAKAAAGAEQAHADAEAHQAEAHADAJQACAJAAAQQgBASgDAMQgEALgIAHQgHAGgNAAQgPAAgJgLgAmggxQgHAKABAaQAAAaAFAJQAGAIAJAAQAKAAAGgJQAGgIAAgaQAAgagGgJQgGgJgKAAQgJAAgFAIgAueAhQgJgJgBgNIANgCQACALAFAFQAGAFAHAAQAKAAAGgGQAHgHAAgJQAAgIgHgGQgFgGgKAAIgJABIACgLIACAAQAJAAAGgEQAHgFAAgJQAAgHgFgFQgFgFgIAAQgIAAgEAFQgFAFgCAKIgNgDQACgNAJgHQAIgIANAAQAIAAAIAEQAHAEAEAHQAFAGAAAHQAAAHgFAGQgDAGgIADQAKACAGAHQAEAHAAAKQAAAOgKAJQgKAKgQAAQgOAAgJgIgAwdAfQgKgLAAgUQAAgUAMgLQAKgIAPAAQAQAAAJAKQALALAAASQAAAOgFAJQgEAIgIAFQgKAFgJAAQgRAAgKgKgAwTgVQgGAHgBAOQABAPAGAIQAHAHAKAAQAJAAAHgHQAGgIAAgPQAAgOgGgHQgHgHgJAAQgKAAgHAHgA1/AiQgKgHgHgNQgFgOAAgOQAAgRAHgMQAGgNAMgGQALgHAOAAQARAAALAIQAKAIAFAPIgOAEQgEgMgHgFQgHgGgLAAQgMAAgJAGQgHAGgEAKQgEAKAAALQABANAEAKQADAKAJAFQAJAFAJAAQAMAAAJgHQAIgHADgNIAOADQgEASgMAJQgMAJgRAAQgRAAgLgHgA6GAeQgLgNABgeQAAgTADgLQAFgMAIgGQAHgHAMAAQAIAAAHAEQAGADAFAHQAEAHACAJQADAJAAAQQAAASgEAMQgEALgHAHQgJAGgLAAQgQAAgJgLgA58gxQgHAKAAAaQABAaAFAJQAHAIAJAAQAJAAAGgJQAGgIAAgaQAAgagGgJQgGgJgJAAQgKAAgFAIgA7ZAeQgLgNAAgeQAAgTAEgLQAEgMAIgGQAHgHAMAAQAJAAAGAEQAHADAEAHQAEAHADAJQACAJAAAQQAAASgEAMQgDALgIAHQgIAGgMAAQgPAAgJgLgA7PgxQgHAKAAAaQAAAaAGAJQAGAIAJAAQAKAAAFgJQAHgIAAgaQAAgagHgJQgFgJgKAAQgJAAgFAIgA9WAeQgLgNAAgeQAAgTAEgLQAEgMAIgGQAIgHALAAQAJAAAGAEQAHADAEAHQAEAHADAJQACAJAAAQQAAASgEAMQgDALgIAHQgIAGgMAAQgPAAgJgLgA9MgxQgHAKAAAaQAAAaAGAJQAGAIAJAAQAKAAAFgJQAHgIgBgaQABgagHgJQgFgJgKAAQgJAAgFAIgA+pAeQgMgNAAgeQABgTAEgLQAEgMAHgGQAIgHALAAQAJAAAHAEQAGADAEAHQAFAHACAJQACAJAAAQQABASgEAMQgEALgHAHQgJAGgMAAQgPAAgIgLgA+ggxQgGAKAAAaQgBAaAHAJQAGAIAIAAQAKAAAGgJQAGgIAAgaQAAgagGgJQgGgJgKAAQgIAAgGAIgEggmAAeQgLgNAAgeQAAgTAEgLQAEgMAHgGQAIgHALAAQAJAAAHAEQAGADAEAHQAFAHACAJQACAJAAAQQABASgEAMQgEALgHAHQgJAGgMAAQgPAAgIgLgEggdgAxQgGAKgBAaQAAAaAHAJQAGAIAIAAQAKAAAGgJQAGgIAAgaQAAgagGgJQgGgJgKAAQgIAAgGAIgEgh6AAeQgLgNAAgeQAAgTAEgLQAEgMAIgGQAHgHAMAAQAJAAAHAEQAGADAEAHQAEAHADAJQACAJAAAQQAAASgDAMQgFALgHAHQgIAGgMAAQgPAAgJgLgEghwgAxQgHAKAAAaQAAAaAGAJQAGAIAJAAQAJAAAHgJQAFgIABgaQgBgagFgJQgHgJgJAAQgJAAgFAIgEgn5AAeQgLgNAAgeQAAgTADgLQAEgMAIgGQAIgHAMAAQAIAAAHAEQAGADAEAHQAFAHACAJQACAJAAAQQAAASgDAMQgEALgHAHQgJAGgLAAQgQAAgIgLgEgnwgAxQgGAKgBAaQAAAaAHAJQAFAIAKAAQAJAAAGgJQAGgIAAgaQAAgagGgJQgGgJgJAAQgJAAgGAIgEgrLAAdQgLgMAAgbQAAgfAMgOQAKgNARAAQANAAAIAIQAIAHABAMIgMABQgCgIgEgDQgFgGgHAAQgHAAgFAEQgGAEgEAJQgDAJAAAQQAFgHAGgEQAIgDAHAAQANAAAJAJQAJAKAAAOQABAKgFAJQgEAJgIAEQgIAFgJAAQgQAAgLgMgEgrAgALQgGAGAAAJQAAAHACAGQADAHAGADQAFADAGAAQAIAAAGgGQAGgHAAgMQAAgKgGgGQgGgHgJAAQgJAAgGAHgEgseAAeQgKgNgBgeQAAgTAFgLQADgMAIgGQAIgHALAAQAKAAAGAEQAHADADAHQAFAHADAJQABAJAAAQQAAASgDAMQgEALgIAHQgHAGgNAAQgPAAgJgLgEgsUgAxQgGAKAAAaQAAAaAFAJQAGAIAJAAQAKAAAGgJQAGgIAAgaQAAgagGgJQgGgJgKAAQgJAAgFAIgEgxkAAfQgKgLAAgTQAAgMAFgJQADgKAJgFQAJgEAKAAQAMAAAIAGQAJAHACALIgNACQgCgIgFgDQgEgEgHAAQgKAAgGAHQgGAHAAAOQAAAQAGAHQAGAHAKAAQAIAAAEgFQAGgEABgKIANABQgCAOgJAHQgIAIgNAAQgQAAgKgKgEg5NAAjQgHgHAAgJQAAgGACgFQADgEAEgDQAEgCAGgCIALgCQARgBAHgDIAAgEQAAgIgDgDQgGgEgKAAQgJAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAKAAQAKAAAGACQAGACAEAEQACAEABAFIACAMIAAARQAAASABAFQAAAFACAEIgNAAQgCgEgBgFQgHAGgHACQgGADgJAAQgMAAgHgGgEg4zAAFIgMADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAJAAAFgEQAGgDADgGQACgEAAgJIAAgFQgHADgOACgEg+/AAfQgKgLAAgTQAAgTAKgKQAKgLARAAQAPAAAKAKQAKALAAASIAAAEIg7AAQACANAGAGQAHAHAJAAQAIAAAEgEQAFgDADgJIAPACQgEAMgJAGQgIAHgOAAQgRAAgKgKgEg+0gAWQgGAGgBAKIAsAAQgBgKgEgFQgHgHgJAAQgJAAgHAGgEhBqAAfQgKgLAAgTQAAgTAKgKQAKgLARAAQAPAAAKAKQAKALAAASIAAAEIg7AAQACANAGAGQAHAHAJAAQAIAAAEgEQAFgDADgJIAPACQgEAMgJAGQgIAHgOAAQgRAAgKgKgEhBfgAWQgGAGgBAKIAsAAQgBgKgEgFQgHgHgJAAQgJAAgHAGgEhENAAfQgKgLAAgUQAAgUAMgLQAKgIAPAAQAQAAAJAKQALALAAASQAAAOgFAJQgEAIgIAFQgKAFgJAAQgRAAgKgKgEhEDgAVQgGAHgBAOQABAPAGAIQAHAHAKAAQAJAAAHgHQAGgIAAgPQAAgOgGgHQgHgHgJAAQgKAAgHAHgEhLEAAfQgKgLAAgUQAAgUAMgLQAKgIAPAAQAPAAALAKQAKALAAASQAAAOgFAJQgEAIgIAFQgJAFgKAAQgRAAgKgKgEhK6gAVQgGAHgBAOQABAPAGAIQAHAHAKAAQAKAAAGgHQAHgIgBgPQABgOgHgHQgHgHgJAAQgKAAgHAHgEhN2AAiQgKgHgGgNQgGgOABgOQgBgRAHgMQAGgNAMgGQAMgHAOAAQARAAAKAIQALAIAEAPIgOAEQgDgMgIgFQgGgGgLAAQgMAAgJAGQgIAGgDAKQgEAKAAALQAAANAEAKQAEAKAIAFQAJAFAKAAQAMAAAIgHQAJgHACgNIAOADQgEASgMAJQgLAJgRAAQgSAAgLgHgEhSBAAjQgGgHAAgJQAAgGACgFQADgEAEgDQAEgCAGgCIALgCQAQgBAIgDIAAgEQAAgIgEgDQgFgEgKAAQgKAAgEADQgFADgCAIIgMgBQABgJAFgFQAEgFAHgDQAIgCAKAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAARQAAASABAFQABAFACAEIgOAAQgCgEAAgFQgIAGgHACQgGADgIAAQgNAAgHgGgEhRnAAFIgMADQgDABgCADQgCADAAADQAAAGAFADQAEAEAHAAQAIAAAFgEQAHgDACgGQADgEAAgJIAAgFQgIADgOACgEhYIAAfQgKgLABgUQgBgUAMgLQAKgIAPAAQAQAAAKAKQAKALAAASQAAAOgEAJQgFAIgIAFQgJAFgKAAQgQAAgLgKgEhX+gAVQgGAHAAAOQAAAPAGAIQAHAHAKAAQAKAAAHgHQAGgIAAgPQAAgOgGgHQgIgHgJAAQgKAAgHAHgEhdbAAiQgMgIgGgMQgFgNAAgNQAAgbANgPQAPgPAWAAQAPAAAMAHQANAHAFANQAHANAAAQQAAAPgHANQgGANgNAGQgMAHgOAAQgPAAgMgHgEhdZgAuQgLAKAAAYQAAATAKALQALALAPAAQARAAAKgLQALgMgBgTQABgNgFgKQgEgKgJgFQgJgGgLAAQgOAAgLALgEhfPAAiQgMgIgGgMQgGgNAAgNQAAgbAOgPQAOgPAXAAQAPAAAMAHQAMAHAGANQAGANAAAQQAAAPgGANQgHANgMAGQgMAHgOAAQgPAAgMgHgEhfNgAuQgMAKAAAYQAAATALALQALALAPAAQAQAAAKgLQALgMAAgTQAAgNgFgKQgEgKgIgFQgJgGgLAAQgPAAgKALgEhhEAAiQgLgIgHgMQgFgNAAgNQgBgbAOgPQAPgPAWAAQAQAAALAHQAMAHAGANQAHANAAAQQAAAPgHANQgGANgNAGQgMAHgOAAQgPAAgMgHgEhhCgAuQgLAKAAAYQAAATALALQAKALAPAAQARAAAKgLQALgMAAgTQAAgNgFgKQgFgKgIgFQgJgGgLAAQgPAAgKALgEhjIAAfQgJgLAAgTQAAgMADgJQAEgKAKgFQAIgEAKAAQAMAAAJAGQAHAHADALIgNACQgCgIgEgDQgFgEgGAAQgKAAgHAHQgGAHAAAOQAAAQAGAHQAGAHAKAAQAIAAAEgFQAGgEABgKIANABQgCAOgJAHQgJAIgMAAQgQAAgKgKgEhnvAAjQgIgHAAgJQABgGACgFQACgEAFgDQAEgCAFgCIAMgCQAQgBAHgDIAAgEQAAgIgDgDQgFgEgKAAQgKAAgEADQgEADgCAIIgOgBQACgJAEgFQAEgFAIgDQAHgCALAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAARQAAASABAFQAAAFADAEIgNAAQgDgEgBgFQgGAGgHACQgHADgIAAQgNAAgGgGgEhnWAAFIgMADQgDABgBADQgCADAAADQAAAGADADQAEAEAIAAQAIAAAGgEQAFgDAEgGQABgEAAgJIAAgFQgGADgPACgEhuyAAfQgKgLAAgTQAAgTAKgKQAKgLAQAAQAPAAALAKQAJALAAASIAAAEIg6AAQABANAGAGQAHAHAKAAQAHAAAFgEQAFgDADgJIAOACQgEAMgIAGQgJAHgNAAQgRAAgKgKgEhuogAWQgFAGgBAKIArAAQgBgKgDgFQgHgHgKAAQgJAAgHAGgEhxQAAfQgIgJgCgRIgQAAIAAAiIgNAAIAAhNIANAAIAAAhIAQAAQACgRAJgJQAJgIAOAAQAMAAAGAEQAHAFAEAJQAFAIAAANQAAAUgJALQgJAKgQAAQgPAAgJgKgEhxHgAVQgFAIAAANQAAAPAFAIQAGAHAJAAQAJAAAGgHQAFgHAAgPQAAgOgEgIQgGgHgKAAQgJAAgGAHgEh1hAAjQgGgHgBgJQAAgGADgFQACgEAFgDQAEgCAFgCIAMgCQAQgBAHgDIAAgEQABgIgEgDQgFgEgKAAQgKAAgEADQgEADgCAIIgOgBQADgJADgFQAEgFAIgDQAHgCALAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAARQAAASABAFQABAFACAEIgNAAQgDgEgBgFQgHAGgGACQgHADgIAAQgNAAgHgGgEh1HAAFIgLADQgEABgCADQgBADAAADQAAAGADADQAFAEAHAAQAIAAAFgEQAGgDADgGQACgEAAgJIAAgFQgGADgPACgEh2vAARIANgCQACAHAFAEQAFAEAHAAQAGAAAFgDQAEgEAAgGQAAgFgDgDQgCgDgDgBIgMgBIgDAAIAAgJIALgBQADAAADgDQADgDAAgFQAAgFgDgDQgEgDgGAAQgLAAgFANIgMgCQAGgWAXAAQAMAAAHAHQAHAGAAAKQAAAJgJAGQAFACAEAFQACAFAAAGQAAALgHAGQgIAHgNAAQgbAAgFgYgEh+RAAfQgKgLAAgTQAAgMAEgJQAEgKAJgFQAJgEAKAAQAMAAAIAGQAIAHACALIgMACQgDgIgEgDQgEgEgHAAQgKAAgGAHQgHAHAAAOQAAAQAHAHQAFAHAKAAQAIAAAFgFQAGgEABgKIAMABQgBAOgJAHQgJAIgNAAQgQAAgJgKgEiB6AAjQgIgHAAgJQABgGACgFQACgEAFgDQAEgCAFgCIAMgCQAQgBAHgDIAAgEQAAgIgDgDQgFgEgKAAQgJAAgFADQgEADgCAIIgOgBQADgJAEgFQADgFAIgDQAHgCALAAQAJAAAHACQAGACADAEQADAEABAFIABAMIAAARQAAASABAFQAAAFADAEIgOAAQgCgEgBgFQgGAGgHACQgHADgIAAQgNAAgGgGgEiBhAAFIgMADQgDABgBADQgCADAAADQAAAGADADQAEAEAIAAQAIAAAGgEQAGgDADgGQABgEAAgJIAAgFQgHADgOACgEiEbAAfQgKgLABgUQgBgUAMgLQAKgIAPAAQAQAAAKAKQAKALAAASQAAAOgEAJQgFAIgIAFQgJAFgKAAQgQAAgLgKgEiERgAVQgGAHAAAOQAAAPAGAIQAHAHAKAAQAKAAAHgHQAGgIAAgPQAAgOgGgHQgIgHgJAAQgKAAgHAHgEiFrAARIAMgCQACAHAFAEQAGAEAGAAQAHAAAFgDQADgEAAgGQABgFgDgDQgDgDgDgBIgMgBIgCAAIAAgJIALgBQADAAADgDQADgDAAgFQgBgFgDgDQgDgDgHAAQgKAAgFANIgNgCQAGgWAXAAQAMAAAIAHQAGAGAAAKQABAJgKAGQAGACADAFQADAFAAAGQAAALgHAGQgJAHgNAAQgbAAgEgYgEiJYAAfQgKgLAAgUQAAgUAMgLQAKgIAOAAQAQAAAKAKQALALAAASQAAAOgFAJQgFAIgIAFQgJAFgKAAQgRAAgJgKgEiJOgAVQgHAHAAAOQAAAPAHAIQAGAHAKAAQAKAAAGgHQAHgIAAgPQAAgOgHgHQgGgHgKAAQgKAAgGAHgEiL0AAfQgKgLAAgTQABgMAEgJQAEgKAIgFQAJgEAKAAQANAAAIAGQAHAHADALIgNACQgCgIgEgDQgFgEgHAAQgJAAgHAHQgGAHAAAOQAAAQAGAHQAGAHAJAAQAIAAAGgFQAFgEABgKIANABQgCAOgIAHQgKAIgNAAQgPAAgKgKgEiNIAAfQgKgLAAgUQAAgUAMgLQAKgIAOAAQAQAAALAKQAKALAAASQAAAOgEAJQgFAIgJAFQgJAFgKAAQgQAAgKgKgEiM+gAVQgHAHAAAOQAAAPAHAIQAGAHAKAAQALAAAGgHQAHgIAAgPQAAgOgHgHQgHgHgKAAQgKAAgGAHgEiRYAAfQgKgLAAgTQAAgTAKgKQAKgLARAAQAPAAAKAKQAKALAAASIAAAEIg7AAQABANAHAGQAHAHAJAAQAIAAAEgEQAGgDACgJIAPACQgEAMgJAGQgIAHgOAAQgRAAgKgKgEiRNgAWQgGAGgBAKIAsAAQgBgKgEgFQgGgHgKAAQgKAAgGAGgEiURAAfQgJgLgBgUQAAgUANgLQAJgIAPAAQAQAAAKAKQAKALAAASQABAOgFAJQgEAIgJAFQgJAFgKAAQgQAAgLgKgEiUHgAVQgGAHAAAOQAAAPAGAIQAHAHAKAAQAKAAAGgHQAHgIAAgPQAAgOgHgHQgHgHgJAAQgKAAgHAHgEibyAAjQgHgHAAgJQAAgGACgFQADgEAEgDQAEgCAGgCIALgCQARgBAHgDIAAgEQAAgIgDgDQgGgEgKAAQgJAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAKAAQAKAAAGACQAGACADAEQADAEABAFIACAMIAAARQAAASABAFQAAAFACAEIgNAAQgCgEgBgFQgHAGgHACQgGADgJAAQgMAAgHgGgEibYAAFIgMADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAJAAAFgEQAGgDADgGQACgEAAgJIAAgFQgHADgOACgEif7AAfQgKgLAAgUQAAgUAMgLQAKgIAOAAQARAAAJAKQALALAAASQAAAOgEAJQgFAIgJAFQgIAFgLAAQgQAAgKgKgEifxgAVQgGAHAAAOQAAAPAGAIQAGAHAKAAQAKAAAHgHQAGgIABgPQgBgOgGgHQgHgHgKAAQgKAAgGAHgEilRAAfQgJgLgBgTQABgTAJgKQALgLAQAAQAQAAAJAKQAKALAAASIAAAEIg6AAQABANAHAGQAGAHAJAAQAIAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgOAAQgRAAgKgKgEilFgAWQgGAGgBAKIAsAAQgBgKgFgFQgGgHgKAAQgJAAgGAGgEiviAAfQgJgLgBgUQAAgUANgLQAJgIAPAAQAQAAAKAKQALALgBASQABAOgFAJQgEAIgJAFQgJAFgKAAQgQAAgLgKgEivXgAVQgHAHAAAOQAAAPAHAIQAGAHAKAAQAKAAAGgHQAHgIAAgPQAAgOgHgHQgGgHgKAAQgKAAgGAHgEix5AAfQgLgLAAgUQAAgUANgLQAKgIAOAAQAQAAAKAKQALALAAASQAAAOgFAJQgFAIgIAFQgJAFgKAAQgRAAgJgKgEixvgAVQgHAHAAAOQAAAPAHAIQAGAHAKAAQAKAAAGgHQAHgIAAgPQAAgOgHgHQgGgHgKAAQgKAAgGAHgEi1YAAfQgKgLAAgTQAAgMAEgJQAEgKAJgFQAJgEAKAAQAMAAAIAGQAIAHACALIgMACQgCgIgFgDQgEgEgHAAQgKAAgGAHQgHAHAAAOQAAAQAHAHQAFAHAKAAQAIAAAFgFQAGgEABgKIAMABQgCAOgIAHQgJAIgNAAQgPAAgKgKgEi5KAAfQgLgLABgUQgBgUAMgLQAKgIAPAAQAQAAAKAKQALALAAASQgBAOgEAJQgEAIgJAFQgJAFgKAAQgQAAgKgKgEi5BgAVQgGAHAAAOQAAAPAGAIQAHAHAKAAQAKAAAHgHQAGgIAAgPQAAgOgGgHQgIgHgJAAQgKAAgHAHgEi6ZAAjQgIgHgDgKQgFgJAAgYQAAgfALgLQAKgKAVAAIAQgBQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAAAgBIAMAAQgBAIgDADQgCADgFABQgDABgNAAQgQAAgGADQgGAEgDAGQgCAHAAALQAFgHAGgEQAHgEAIAAQAQAAAJALQALAKAAARQgBAOgFAJQgFAIgGAFQgIAFgLAAQgPAAgHgGgEi6UgASQgGAIAAAMQAAAOAHAHQAGAHAKAAQAJAAAGgIQAHgIgBgOQAAgLgFgIQgGgIgKAAQgLAAgGAJgEi9xAAfQgKgLAAgTQAAgTAKgKQAKgLAQAAQAQAAAKAKQAJALAAASIAAAEIg5AAQAAANAHAGQAGAHAKAAQAHAAAGgEQAEgDADgJIAOACQgDAMgIAGQgJAHgOAAQgRAAgKgKgEi9mgAWQgGAGAAAKIArAAQgBgKgEgFQgGgHgLAAQgJAAgGAGgEjBvAAjQgHgHAAgJQAAgGADgFQACgEAFgDQAEgCAFgCIAMgCQAQgBAHgDIAAgEQABgIgEgDQgFgEgKAAQgKAAgEADQgEADgCAIIgOgBQADgJADgFQAEgFAIgDQAHgCALAAQAJAAAHACQAGACADAEQADAEABAFIABAMIAAARQAAASABAFQAAAFADAEIgNAAQgDgEgBgFQgHAGgGACQgHADgIAAQgNAAgHgGgEjBVAAFIgLADQgEABgCADQgBADAAADQAAAGADADQAFAEAHAAQAIAAAFgEQAGgDADgGQACgEAAgJIAAgFQgHADgOACgEjF3AAfQgLgLAAgUQAAgUANgLQAKgIAOAAQAQAAAKAKQALALAAASQAAAOgFAJQgFAIgIAFQgJAFgKAAQgRAAgJgKgEjFtgAVQgHAHAAAOQAAAPAHAIQAGAHAKAAQAKAAAGgHQAHgIAAgPQAAgOgHgHQgGgHgKAAQgKAAgGAHgEjNcAAfQgKgLAAgTQAAgTAKgKQAJgLARAAQAQAAAJAKQAKALAAASIAAAEIg6AAQABANAHAGQAGAHAKAAQAHAAAFgEQAFgDADgJIAOACQgEAMgIAGQgJAHgNAAQgSAAgJgKgEjNRgAWQgHAGAAAKIArAAQAAgKgFgFQgGgHgKAAQgJAAgGAGgEjSqAAjQgIgHABgJQgBgGADgFQADgEAEgDQAEgCAGgCIALgCQAQgBAIgDIAAgEQgBgIgDgDQgFgEgKAAQgJAAgFADQgEADgDAIIgNgBQACgJAFgFQAEgFAHgDQAIgCAKAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAARQAAASABAFQAAAFADAEIgOAAQgCgEAAgFQgIAGgHACQgGADgIAAQgNAAgGgGgEjSRAAFIgMADQgDABgBADQgDADAAADQABAGAEADQADAEAIAAQAIAAAGgEQAFgDAEgGQACgEAAgJIAAgFQgIADgOACgEjU3AAfQgJgLAAgTQAAgMADgJQAFgKAJgFQAIgEAKAAQANAAAHAGQAJAHACALIgNACQgCgIgFgDQgEgEgGAAQgLAAgGAHQgGAHAAAOQAAAQAGAHQAGAHAKAAQAHAAAFgFQAGgEABgKIANABQgCAOgJ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AGAAAKIAsAAQgBgKgFgFQgGgHgKAAQgJAAgGAGgEj85AAfQgKgLAAgUQAAgUAMgLQAKgIAOAAQAQAAAKAKQALALAAASQAAAOgEAJQgFAIgJAFQgIAFgLAAQgQAAgKgKgEj8vgAVQgHAHABAOQgBAPAHAIQAHAHAJAAQAKAAAHgHQAGgIABgPQgBgOgGgHQgHgHgKAAQgJAAgHAHgEkEZAAjQgIgHAAgJQABgGACgFQACgEAFgDQAEgCAFgCIAMgCQAQgBAHgDIAAgEQAAgIgDgDQgFgEgKAAQgKAAgEADQgEADgCAIIgOgBQADgJADgFQAEgFAIgDQAHgCALAAQAJAAAHACQAGACADAEQADAEABAFIABAMIAAARQAAASABAFQAAAFADAEIgNAAQgDgEgBgFQgHAGgGACQgHADgIAAQgNAAgGgGgEkEAAAFIgMADQgDABgCADQgBADAAADQAAAGADADQAEAEAIAAQAIAAAGgEQAFgDAEgGQABgEAAgJIAAgFQgGADgPACgEkGmAAfQgKgLAAgTQAAgMAFgJQAEgKAIgFQAJgEAKAAQANAAAIAGQAHAHADALIgNACQgCgIgFgDQgEgEgHAAQgJAAgHAHQgGAHAAAOQAAAQAGAHQAGAHAJAAQAIAAAGgFQAFgEABgKIANABQgCAOgIAHQgKAIgNAAQgPAAgKgKgEkJ4AAfQgKgLABgUQgBgUAMgLQAKgIAPAAQAQAAAKAKQAKALAAASQAAAOgEAJQgFAIgIAFQgJAFgKAAQgQAAgLgKgEkJugAVQgGAHAAAOQAAAPAGAIQAHAHAKAAQAKAAAHgHQAGgIAAgPQAAgOgGgHQgIgHgJAAQgKAAgHAHgEkNtAAfQgKgLAAgTQAAgTAKgKQAKgLARAAQAPAAAKAKQAKALAAASIAAAEIg7AAQABANAHAGQAHAHAJAAQAIAAAEgEQAGgDACgJIAPACQgEAMgJAGQgIAHgOAAQgRAAgKgKgEkNigAWQgGAGgBAKIAsAAQgBgKgEgFQgHgHgJAAQgJAAgHAGgEkQ7AAfQgKgLAAgTQAAgTAKgKQAKgLARAAQAPAAAKAKQAKALAAASIAAAEIg7AAQABANAHAGQAHAHAJAAQAIAAAEgEQAGgDACgJIAPACQgEAMgJAGQgIAHgOAAQgRAAgKgKgEkQwgAWQgGAGgBAKIAsAAQgBgKgEgFQgGgHgKAAQgKAAgGAGgEkWfAAfQgKgLAAgTQAAgMAFgJQADgKAJgFQAJgEAKAAQANAAAHAGQAIAHADALIgNACQgCgIgEgDQgFgEgHAAQgJAAgHAHQgGAHAAAOQAAAQAGAHQAGAHAJAAQAIAAAGgFQAFgEABgKIANABQgCAOgIAHQgKAIgNAAQgPAAgKgKgEkZvAAfQgKgLAAgTQAAgTAKgKQAKgLAQAAQAQAAAKAKQAJALAAASIAAAEIg5AAQAAANAHAGQAGAHAKAAQAHAAAGgEQAEgDADgJIAOACQgDAMgIAGQgKAHgNAAQgRAAgKgKgEkZkgAWQgGAGAAAKIArAAQgBgKgEgFQgHgHgKAAQgIAAgHAGgEkcUAAjQgIgHAAgJQABgGACgFQACgEAFgDQAEgCAFgCIAMgCQAQgBAHgDIAAgEQAAgIgDgDQgFgEgKAAQgKAAgEADQgEADgCAIIgOgBQACgJAFgFQADgFAIgDQAHgCALAAQAJAAAHACQAGACADAEQADAEABAFIABAMIAAARQAAASABAFQAAAFADAEIgNAAQgDgEgBgFQgGAGgHACQgHADgIAAQgNAAgGgGgEkb7AAFIgMADQgDABgBADQgCADAAADQAAAGADADQAEAEAIAAQAIAAAGgEQAFgDAEgGQABgEAAgJIAAgFQgGADgPACgEkjWAAjQgIgHAAgJQABgGACgFQACgEAFgDQAEgCAFgCIAMgCQAQgBAHgDIAAgEQAAgIgDgDQgFgEgKAAQgKAAgEADQgEADgCAIIgOgBQACgJAFgFQADgFAIgDQAHgCALAAQAJAAAHACQAGACADAEQADAEABAFIABAMIAAARQAAASABAFQAAAFADAEIgNAAQgDgEgBgFQgGAGgHACQgHADgIAAQgNAAgGgGgEki9AAFIgMADQgDABgBADQgCADAAADQAAAGADADQAEAEAIAAQAIAAAGgEQAFgDAEgGQABgEAAgJIAAgFQgGADgPACgEklsAAfQgKgLAAgTQAAgTAKgKQAKgLARAAQAPAAAKAKQAKALAAASIAAAEIg6AAQABANAHAGQAGAHAJAAQAIAAAFgEQAFgDADgJIAOACQgEAMgIAGQgJAHgOAAQgRAAgKgKgEklggAWQgHAGAAAKIAsAAQgCgKgEgFQgGgHgKAAQgJAAgGAGgEkm6AAjQgI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ABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQABgCAAgKIAAgzIA9AAIAABNIgNAAIAAhCIgjAAIAAAmQAAAOgBAEQgBAEgDAEQgEADgIAAIgLgBgEC38AAnIAAgLIAFAAIAGgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQABgCAAgKIAAgzIA9AAIAABNIgNAAIAAhCIgjAAIAAAmQAAAOgBAEQgBAEgEAEQgDADgIAAIgKgBgEB3IAAnIAAgLIAFAAIAGgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQABgCAAgKIAAgzIA9AAIAABNIgNAAIAAhCIgjAAIAAAmQAAAOgBAEQAAAEgFAEQgDADgIAAIgKgBgAfCAnIAAgLIAFAAIAHgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBABAAQAAgCABgKIAAgzIA9AAIAABNIgOAAIAAhCIgjAAIAAAmQAAAOgBAEQAAAEgEAEQgEADgHAAIgLgBgASUAnIAAgLIAFAAIAGgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQABgCAAgKIAAgzIA9AAIAABNIgNAAIAAhCIgjAAIAAAmQAAAOgBAEQAAAEgFAEQgEADgHAAIgKgBgEhzWAAnIAAgLIAFAAIAHgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBABAAQAAgCAAgKIAAgzIA+AAIAABNIgOAAIAAhCIgjAAIAAAmQAAAOgBAEQAAAEgEAEQgEADgHAAIgLgBgEh6CAAnIAAgLIAFAAIAGgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQABgCAAgKIAAgzIA9AAIAABNIgMAAIAAhCIgjAAIAAAmQAAAOgBAEQgBAEgEAEQgEADgIAAIgKgBgEiISAAnIAAgLIAFAAIAHgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQABgCAAgKIAAgzIA+AAIAABNIgOAAIAAhCIgiAAIAAAmQAAAOgCAEQAAAEgEAEQgEADgHAAIgLgBgEioJAAnIAAgLIAFAAIAGgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQABgCAAgKIAAgzIA9AAIAABNIgNAAIAAhCIgjAAIAAAmQAAAOgBAEQAAAEgFAEQgEADgHAAIgKgBgEjQTAAnIAAgLIAGA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LIARAHIgCgSIALAAIgCASQAHgEAKgDIAEALQgKADgJABIANAOIgJAGIgKgQgEjnvgAnIgJAQIgJgGIAMgOIgSgEIADgLIARAHIgBgSIAKAAIgBASQAHgEAKgDIADALQgJADgIABIAMAOIgJAGIgKgQgEkg5gAnIgKAQIgIgGIAMgOIgSgEIADgLIARAHIgBgSIAKAAIgBASQAHgEAKgDIADALQgJADgJABIANAOIgJAGIgKgQgEkhzgAnIgJAQIgJgGIAMgOIgSgEIAEgLIARAHIgCgSIAKAAIgBASQAHgEAKgDIAEALQgKADgIABIAMAOIgJAGIgKgQgElJVgAnIgKAQIgIgGIALgOIgSgEIAEgLIARAHIgCgSIALAAIgCASQAIgEAJgDIAEALQgJADgJABIANAOIgJAGIgKgQgEE2JgA1QgGgFgBgJIAJAAQACAFADACQACADAGAAQAFAAAEgCQACgDABgFIAJAAQgBAJgFAFQgFAFgKAAQgJAAgGgFgEEe7gA1QgFgFgBgJIAJAAQABAFADACQADADAFAAQAGAAADgCQADgDABgFIAJAAQgBAJgGAFQgFAFgJAAQgKAAgGgFgEDbBgA1QgFgFgBgJIAJAAQABAFADACQADADAFAAQAGAAADgCQADgDABgFIAJAAQgBAJgGAFQgFAFgJAAQgKAAgGgFgEi8RgA1QgGgFgBgJIAJAAQABAFAEACQADADAEAAQAHAAACgCQAEgDABgFIAJAAQgCAJgFAFQgGAFgJAAQgKAAgFgFgEjIpgA1QgGgFgBgJIAJAAQABAFADACQADADAFAAQAGAAADgCQADgDABgFIAJAAQgBAJgGAFQgFAFgKAAQgJAAgFgFgEkIXgA1QgGgFgBgJIAJAAQABAFADACQAEADAEAAQAHAAACgCQAEgDABgFIAJAAQgCAJgFAFQgGAFgJAAQgJAAgGgFgEFEXgA0IAAgPIANAAIAAAPg"
      );
    this.shape.setTransform(373.7, 4.675);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1739, -7, 4226.5, 20.8);

  (lib._T4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AgPALIAIgIIgLgDIAEgKIAKAEIAAgLIAKAAIgBALIAKgEIAEAKIgLADIAIAIIgJAGIgHgIIgGAJg");
    this.shape.setTransform(104.275, 12.95);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer_1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AgSBEIAAhlIgxAAIAAghICHAAIAAAhIgxAAIAABlg");
    this.shape_1.setTransform(92.675, 18.5);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("Ag9BEIAAiGIBzAAIAAAfIhMAAIAAARIAtAAIAAAgIgtAAIAAAVIBUAAIAAAhg");
    this.shape_2.setTransform(78.475, 18.5);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhBBEIAAiGIB3AAIAAAhIhQAAIAAARIApAAQAYAAANAKQAOAJAAAVQAAAWgOAKQgNAMgYAAgAgaAiIAlAAQAIAAADgCQAEgDAAgFQAAgFgEgDQgDgDgIAAIglAAg"
      );
    this.shape_3.setTransform(63.425, 18.5);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#FFFFFF").s().p("AAdBEIAAhQIg6BQIgnAAIAAiGIAnAAIAABQIA6hQIAnAAIAACGg");
    this.shape_4.setTransform(47.1, 18.5);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhBBEIAAiGIBRAAQAYgBANAMQANALAAAYQAAAVgNALQgNAMgYAAIgrAAIAAAsgAgbgIIAnAAQAHAAAEgDQAEgEAAgFQAAgHgEgDQgEgDgHAAIgnAAg"
      );
    this.shape_5.setTransform(31.425, 18.5);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSBGIAAgXIgcAAQgYAAgOgMQgOgNAAgWQAAgYAOgMQANgMAZAAIAcAAIAAgVIAmAAIAAAVIAbAAQAZAAAOAMQANAMAAAYQAAAWgOANQgNAMgZAAIgbAAIAAAXgAAUAOIAWAAQAJgBAEgEQAEgDAAgGQAAgIgEgDQgEgEgJAAIgWAAgAg2gLQgEADAAAIQAAAGAEADQAFAEAIABIAXAAIAAgdIgXAAQgJAAgEAEg"
      );
    this.shape_6.setTransform(12.675, 18.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 }
          ]
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib._T4, new cjs.Rectangle(0, 0, 109.4, 33.3), null);

  (lib._t = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AhUChIAkjyIhsAAIAMhPIEtAAIgMBPIhsAAIgkDyg");
    this.shape.setTransform(15.4984, 15.8945, 0.9877, 0.9877);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib._t, new cjs.Rectangle(0, 0, 31, 31.8), null);

  (lib.T4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.text();
    this.instance.setTransform(202.85, 100.55, 1, 1, 0, 0, 0, 101, 38.9);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.T4, new cjs.Rectangle(4.2, 1.1, 148.5, 77.80000000000001), null);

  (lib.shshshsh = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1_copy (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("ArLMWQkolIAAnOQAAnOEolIQEplHGiAAQGjAAEoFHQEpFIAAHOQAAHOkpFIQkoFImjgBQmiABkplIg");
    mask.setTransform(101.2, 111.75);

    // Layer_3
    this.instance = new lib.blick();
    this.instance.setTransform(37.2, -52.8, 1.7601, 4.9546, 0, 71.2773, 109.1802, 31, 56.6);
    this.instance.alpha = 0.6797;
    this.instance._off = true;
    this.instance.filters = [new cjs.BlurFilter(36, 36, 1)];
    this.instance.cache(-2, -2, 66, 117);
    new cjs.ButtonHelper(this.instance, 0, 1, 1);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(24)
        .to({ _off: false }, 0)
        .to({ regX: 31.2, x: 73.2, y: 312.85 }, 11, cjs.Ease.cubicOut)
        .wait(10)
        .to({ regX: 31, x: 37.2, y: -52.8 }, 0)
        .to({ regX: 31.2, x: 73.2, y: 312.85 }, 9, cjs.Ease.cubicOut)
        .wait(12)
        .to({ regX: 31, x: 37.2, y: -52.8 }, 0)
        .to({ regX: 31.2, x: 73.2, y: 312.85 }, 11, cjs.Ease.cubicOut)
        .wait(13)
    );

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#8C7740")
      .s()
      .p("ArLMWQkolIAAnOQAAnOEolIQEplHGiAAQGjAAEoFHQEpFIAAHOQAAHOkpFIQkoFImjgBQmiABkplIg");
    this.shape.setTransform(101.2, 111.75);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 202.4, 223.5);

  (lib.rad2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1_copy_copy
    this.instance = new lib.rad();
    this.instance.setTransform(-270.6, 102.6, 0.5909, 0.5909, 0, 0, 0, 32, -26.9);
    this.instance.alpha = 0;
    this.instance.compositeOperation = "lighter";
    this.instance._off = true;
    this.instance.filters = [new cjs.BlurFilter(3, 3, 1)];
    this.instance.cache(21, -38, 21, 21);

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(2).to({ _off: false }, 0).to({ alpha: 1 }, 12).to({ alpha: 0 }, 10).wait(6)
    );

    // Layer_1_copy
    this.instance_1 = new lib.rad();
    this.instance_1.setTransform(-241.05, -183.45, 0.5909, 0.5909, 0, 0, 0, 32, -26.9);
    this.instance_1.alpha = 0;
    this.instance_1.compositeOperation = "lighter";
    this.instance_1._off = true;
    this.instance_1.filters = [new cjs.BlurFilter(3, 3, 1)];
    this.instance_1.cache(21, -38, 21, 21);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1).wait(5).to({ _off: false }, 0).to({ alpha: 1 }, 14).to({ alpha: 0 }, 10).wait(1)
    );

    // Layer_1
    this.instance_2 = new lib.rad();
    this.instance_2.setTransform(5.15, 38.65, 0.5909, 0.5909, 0, 0, 0, 32, -26.9);
    this.instance_2.alpha = 0;
    this.instance_2.compositeOperation = "lighter";
    this.instance_2.filters = [new cjs.BlurFilter(3, 3, 1)];
    this.instance_2.cache(21, -38, 21, 21);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ alpha: 1 }, 7).to({ alpha: 0 }, 13).wait(10));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-279.7, -192.6, 301.7, 312.1);

  (lib.logo = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // y_idn
    this.instance = new lib.y();
    this.instance.setTransform(208.25, 10.9, 0.8971, 0.8971, 0, 0, 0, 17.4, 16);
    this.instance.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(13)
        .to({ regX: 18.9, regY: 14.3, scaleX: 0.0159, scaleY: 0.0175, x: 208.3, alpha: 1 }, 0)
        .to({ regX: 17.4, regY: 16, scaleX: 0.8971, scaleY: 0.8971, x: 208.25 }, 14, cjs.Ease.backOut)
        .wait(48)
        .to({ regX: 18.9, regY: 14.3, scaleX: 0.0159, scaleY: 0.0175, x: 208.3 }, 14, cjs.Ease.backIn)
        .wait(1)
    );

    // t
    this.instance_1 = new lib._t();
    this.instance_1.setTransform(179.4, 10.9, 0.8971, 0.8971, 0, 0, 0, 15.6, 16);
    this.instance_1.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(11)
        .to({ regX: 16.7, regY: 14.3, scaleX: 0.018, scaleY: 0.0175, x: 179.35, y: 10.85, alpha: 1 }, 0)
        .to({ regX: 15.6, regY: 16, scaleX: 0.8971, scaleY: 0.8971, x: 179.4, y: 10.9 }, 14, cjs.Ease.backOut)
        .wait(48)
        .to({ regX: 16.7, regY: 14.3, scaleX: 0.018, scaleY: 0.0175, x: 179.35, y: 10.85 }, 14, cjs.Ease.backIn)
        .to({ _off: true }, 1)
        .wait(2)
    );

    // i
    this.instance_2 = new lib.i();
    this.instance_2.setTransform(147.1, 10.9, 0.8971, 0.8971, 0, 0, 0, 17.5, 16);
    this.instance_2.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(9)
        .to({ regX: 18.9, regY: 14.3, scaleX: 0.0159, scaleY: 0.0175, y: 10.85, alpha: 1 }, 0)
        .to({ regX: 17.5, regY: 16, scaleX: 0.8971, scaleY: 0.8971, y: 10.9 }, 14, cjs.Ease.backOut)
        .wait(48)
        .to({ regX: 18.9, regY: 14.3, scaleX: 0.0159, scaleY: 0.0175, y: 10.85 }, 14, cjs.Ease.backIn)
        .to({ _off: true }, 1)
        .wait(4)
    );

    // c
    this.instance_3 = new lib.c();
    this.instance_3.setTransform(116.9, 10.8, 0.8971, 0.8971, 0, 0, 0, 15, 16.4);
    this.instance_3.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(7)
        .to({ regX: 16.1, regY: 14.8, scaleX: 0.0187, scaleY: 0.017, x: 116.85, alpha: 1 }, 0)
        .to({ regX: 15, regY: 16.4, scaleX: 0.8971, scaleY: 0.8971, x: 116.9 }, 14, cjs.Ease.backOut)
        .wait(48)
        .to({ regX: 16.1, regY: 14.8, scaleX: 0.0187, scaleY: 0.017, x: 116.85 }, 14, cjs.Ease.backIn)
        .to({ _off: true }, 1)
        .wait(6)
    );

    // t
    this.instance_4 = new lib.t();
    this.instance_4.setTransform(89.1, 10.9, 0.8971, 0.8971, 0, 0, 0, 15.6, 16);
    this.instance_4.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(5)
        .to({ regX: 16.7, regY: 14.3, scaleX: 0.018, scaleY: 0.0175, x: 89.05, y: 10.85, alpha: 1 }, 0)
        .to({ regX: 15.6, regY: 16, scaleX: 0.8971, scaleY: 0.8971, x: 89.1, y: 10.9 }, 14, cjs.Ease.backOut)
        .wait(48)
        .to({ regX: 16.7, regY: 14.3, scaleX: 0.018, scaleY: 0.0175, x: 89.05, y: 10.85 }, 14, cjs.Ease.backIn)
        .to({ _off: true }, 1)
        .wait(8)
    );

    // e
    this.instance_5 = new lib.e();
    this.instance_5.setTransform(59.6, 10.9, 0.8971, 0.8971, 0, 0, 0, 15.1, 16);
    this.instance_5.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(3)
        .to({ regX: 18.9, regY: 14.3, scaleX: 0.0185, scaleY: 0.0175, y: 10.85, alpha: 1 }, 0)
        .to({ regX: 15.1, regY: 16, scaleX: 0.8971, scaleY: 0.8971, y: 10.9 }, 14, cjs.Ease.backOut)
        .wait(48)
        .to({ regX: 18.9, regY: 14.3, scaleX: 0.0185, scaleY: 0.0175, y: 10.85 }, 14, cjs.Ease.backIn)
        .to({ _off: true }, 1)
        .wait(10)
    );

    // b
    this.instance_6 = new lib.b();
    this.instance_6.setTransform(28.05, 10.85, 0.8971, 0.8971, 0, 0, 0, 17.5, 15.9);
    this.instance_6.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(1)
        .to({ regX: 18.9, regY: 14.2, scaleX: 0.0159, scaleY: 0.0175, alpha: 1 }, 0)
        .to({ regX: 17.5, regY: 15.9, scaleX: 0.8971, scaleY: 0.8971 }, 14, cjs.Ease.backOut)
        .wait(48)
        .to({ regX: 18.9, regY: 14.2, scaleX: 0.0159, scaleY: 0.0175 }, 14, cjs.Ease.backIn)
        .to({ _off: true }, 1)
        .wait(12)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(9.5, -5.3, 216.1, 34);

  (lib.LLLL = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1_copy
    this.instance = new lib.LLLLL();
    this.instance.setTransform(881.4, 590.3, 2.0795, 0.816, 6.4294, 0, 0, 125.9, 48.3);
    this.instance.compositeOperation = "lighten";

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({ regX: 125.8, regY: 48.2, rotation: 5.939, x: -215.1, y: 295.1 }, 24, cjs.Ease.quadOut)
        .wait(1)
    );

    // Layer_1
    this.instance_1 = new lib.LLLLL();
    this.instance_1.setTransform(1022, 533.75, 2.0795, 0.816, 10.9565, 0, 0, 125.9, 48.1);
    this.instance_1.compositeOperation = "lighten";

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1).to({ rotation: 13.6987, x: -158.5, y: 88.35 }, 24, cjs.Ease.cubicOut).wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-493.4, -15.1, 1784.1999999999998, 674);

  (lib.lines_2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1_copy
    this.instance = new lib.LLLLL();
    this.instance.setTransform(862.9, 480.55, 2.0794, 0.8159, 2.6573, 0, 0, 125.9, 48.5);
    this.instance.compositeOperation = "lighten";

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({ regX: 125.7, regY: 48.3, scaleX: 2.0795, rotation: 2.9232, x: -187.95, y: 281.35 }, 34, cjs.Ease.quadOut)
        .wait(1)
    );

    // Layer_1
    this.instance_1 = new lib.LLLLL();
    this.instance_1.setTransform(793.7, 559.65, 2.0795, 0.816, -9.5175, 0, 0, 126, 48.2);
    this.instance_1.compositeOperation = "lighten";

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to({ regX: 125.9, regY: 48.1, rotation: -10.755, x: -46.95, y: 578.35 }, 34, cjs.Ease.cubicOut)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-465.1, 228, 1595.8000000000002, 440.4);

  (lib.coincoin = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("AsHMIQlBlCAAnGQAAnFFBlCQFBlBHGAAQHGAAFBFBQFCFCAAHFQAAHGlCFCQlBFBnGAAQnGAAlBlBg");
    mask.setTransform(205, 115.5);

    // Layer_3
    this.instance = new lib.blick();
    this.instance.setTransform(91.6, -22.3, 1.7601, 4.9546, 0, 33.8248, 71.7278, 31, 56.6);
    this.instance.alpha = 0.6797;
    this.instance._off = true;
    this.instance.filters = [new cjs.BlurFilter(36, 36, 1)];
    this.instance.cache(-2, -2, 66, 117);
    new cjs.ButtonHelper(this.instance, 0, 1, 1);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(12)
        .to({ _off: false }, 0)
        .to({ regX: 31.1, x: 342.55, y: 246.1 }, 12, cjs.Ease.cubicIn)
        .wait(13)
        .to({ regX: 31, x: 91.6, y: -22.3 }, 0)
        .to({ regX: 31.1, x: 342.55, y: 246.1 }, 8, cjs.Ease.cubicIn)
        .wait(11)
        .to({ regX: 31, x: 91.6, y: -22.3 }, 0)
        .to({ regX: 31.1, x: 342.55, y: 246.1 }, 10, cjs.Ease.cubicIn)
        .wait(24)
    );

    // Layer_4_copy
    this.instance_1 = new lib.Bitmap3();
    this.instance_1.setTransform(1, 1);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(1, 1, 409, 230.1);

  (lib.Coin_all = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_5_copy
    this.instance = new lib.coincoin();
    this.instance.setTransform(154.2, 312.5, 0.0012, 1, 0, 0, 0, 204.8, 115.5);
    this.instance.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(23)
        .to({ alpha: 1 }, 0)
        .to({ regX: 205, scaleX: 1, x: 150 }, 11, cjs.Ease.cubicOut)
        .wait(2)
        .to({ regX: 204.8, scaleX: 0.0012, x: 154.2, alpha: 0 }, 0)
        .wait(8)
        .to({ alpha: 1 }, 0)
        .to({ regX: 205, scaleX: 1, x: 150 }, 9, cjs.Ease.cubicOut)
        .wait(2)
        .to({ regX: 204.8, scaleX: 0.0012, x: 154.2, alpha: 0 }, 0)
        .wait(10)
        .to({ alpha: 1 }, 0)
        .to({ regX: 205, scaleX: 1, x: 150 }, 11, cjs.Ease.cubicOut)
        .wait(3)
        .to({ regY: 115.7, scaleX: 0.6207, scaleY: 0.7072, x: -76.95, y: 314.15, alpha: 0 }, 9, cjs.Ease.cubicIn)
        .wait(1)
    );

    // Layer_3_copy
    this.instance_1 = new lib.shshshsh();
    this.instance_1.setTransform(150.55, 312.3, 0.0641, 1, 0, 0, 0, 102.9, 111.8);
    this.instance_1.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(23)
        .to({ alpha: 1 }, 0)
        .to({ regX: 101.4, scaleX: 1.0135, scaleY: 0.9676, x: 142.2, y: 313.35 }, 11, cjs.Ease.cubicOut)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .wait(9)
        .to({ regX: 102.9, scaleX: 0.0641, scaleY: 1, x: 150.55, y: 312.3, alpha: 1 }, 0)
        .to({ regX: 101.4, scaleX: 1.0135, scaleY: 0.9676, x: 142.2, y: 313.35 }, 9, cjs.Ease.cubicOut)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .wait(11)
        .to({ regX: 102.9, scaleX: 0.0641, scaleY: 1, x: 150.55, y: 312.3, alpha: 1 }, 0)
        .to({ regX: 101.4, scaleX: 1.0135, scaleY: 0.9676, x: 142.2, y: 313.35 }, 11, cjs.Ease.cubicOut)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .wait(12)
    );

    // Layer_5
    this.instance_2 = new lib.coincoin();
    this.instance_2.setTransform(376.5, 311.7, 0.5522, 0.6554, 0, 0, 0, 205.1, 115.5);
    this.instance_2.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .to({ regX: 205, scaleX: 1, scaleY: 1, x: 150, y: 312.5, alpha: 1 }, 10, cjs.Ease.cubicOut)
        .wait(1)
        .to({ regX: 204.8, scaleX: 0.0012, x: 146.2 }, 12, cjs.Ease.cubicIn)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .wait(12)
        .to({ regX: 205, scaleX: 1, x: 150, alpha: 1 }, 0)
        .to({ regX: 204.8, scaleX: 0.0012, x: 146.2 }, 8, cjs.Ease.cubicIn)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .wait(10)
        .to({ regX: 205, scaleX: 1, x: 150, alpha: 1 }, 0)
        .to({ regX: 204.8, scaleX: 0.0012, x: 146.2 }, 10, cjs.Ease.cubicIn)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .wait(10)
        .to({ _off: true }, 1)
        .wait(12)
    );

    // Layer_3
    this.instance_3 = new lib.shshshsh();
    this.instance_3.setTransform(157.75, 311.85, 1.0234, 0.9536, 0, 0, 0, 101.2, 111.9);
    this.instance_3.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(11)
        .to({ alpha: 1 }, 0)
        .to({ regX: 102.9, regY: 111.8, scaleX: 0.0641, scaleY: 1, x: 150.55, y: 312.3 }, 12, cjs.Ease.cubicIn)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .wait(12)
        .to({ regX: 101.2, regY: 111.9, scaleX: 1.0234, scaleY: 0.9536, x: 157.75, y: 311.85, alpha: 1 }, 0)
        .to({ regX: 102.9, regY: 111.8, scaleX: 0.0641, scaleY: 1, x: 150.55, y: 312.3 }, 8, cjs.Ease.cubicIn)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .wait(10)
        .to({ regX: 101.2, regY: 111.9, scaleX: 1.0234, scaleY: 0.9536, x: 157.75, y: 311.85, alpha: 1 }, 0)
        .to({ regX: 102.9, regY: 111.8, scaleX: 0.0641, scaleY: 1, x: 150.55, y: 312.3 }, 10, cjs.Ease.cubicIn)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .wait(23)
    );

    // Layer_9
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#8C7740").s().p("AgzRYMAAAgivIBoAAMAAAAivg");
    this.shape.setTransform(150.5, 312.475);
    this.shape._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.shape)
        .wait(23)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(20)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(20)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(23)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-203.6, 197.9, 693.3, 230.1);

  (lib.btn1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // btn_copy (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("AynDTQg+AAAAhDIAAj0QAAhDA+AAMAlPAAAQA+AAAABDIAAD0QAABDg+AAg");
    mask.setTransform(123.6858, 21.103);

    // Layer_3
    this.instance = new lib.blick();
    this.instance.setTransform(-44.7, -3.4, 1, 1, 14.9983, 0, 0, 30.9, 56.6);
    this.instance.alpha = 0.6797;
    this.instance._off = true;
    this.instance.filters = [new cjs.BlurFilter(36, 36, 1)];
    this.instance.cache(-2, -2, 66, 117);
    new cjs.ButtonHelper(this.instance, 0, 1, 1);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(8)
        .to({ _off: false }, 0)
        .to({ x: 303.25, y: 38.1 }, 21, cjs.Ease.cubicOut)
        .wait(61)
    );

    // TXT
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgfA5QgPgIgIgPQgJgOAAgUQAAgSAJgPQAIgPAPgJQAPgIATAAQAQAAALAFQAMAFAHAHQAHAHAEAIQADAHABAGIglAAIgEgEQgDgDgFgDQgFgCgHAAQgIAAgHAEQgGAFgEAIQgDAHAAAIQAAAJADAIQAEAIAGAEQAHAEAIAAQAHAAAFgCIAIgFIAEgFIAlAAQgBAFgDAHQgDAIgHAHQgHAHgMAGQgLAFgRAAQgTAAgPgJg"
      );
    this.shape.setTransform(213.475, 23.05);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AgqBAIAagrIg5hUIAsAAIAgAyIAfgyIAoAAIhMB/g");
    this.shape_1.setTransform(199.025, 23.05);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AAbBAIAAgwIg1AAIAAAwIglAAIAAh/IAlAAIAAAwIA1AAIAAgwIAlAAIAAB/g");
    this.shape_2.setTransform(183.675, 23.05);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgiA6QgQgJgJgOQgIgPgBgUQABgTAIgPQAJgPAQgIQAQgIASAAQAUAAAPAIQAPAIAKAPQAIAPABATQgBAUgIAPQgKAOgPAJQgPAIgUAAQgSAAgQgIgAgQgcQgGAFgEAHQgEAHAAAJQAAAJAEAIQAEAIAGAEQAHAFAJgBQAKABAHgFQAHgEAEgIQADgIAAgJQAAgJgDgHQgEgHgHgFQgHgEgKAAQgIAAgIAEg"
      );
    this.shape_3.setTransform(168.25, 23.05);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag9BAIAAh/IBwAAIAAAgIhMAAIAAAQIAnAAQAWAAANAKQAOAIAAATQAAAVgOALQgNAKgWAAgAgZAgIAkAAQAHABADgDQAEgDgBgFQABgEgEgDQgDgCgHgBIgkAAg"
      );
    this.shape_4.setTransform(153.55, 23.05);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag+BAIAAh/IAlAAIAAAmIAmAAQAXAAANALQANALAAAWQAAAXgNAKQgNAMgXAAgAgZAgIAhAAQAJABADgEQAFgDAAgHQAAgHgFgDQgDgDgJgBIghAAg"
      );
    this.shape_5.setTransform(134.6, 23.05);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#FFFFFF").s().p("AgSBAIAAhfIguAAIAAggICAAAIAAAgIguAAIAABfg");
    this.shape_6.setTransform(119.95, 23.05);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#FFFFFF").s().p("AAcBAIAAhMIg3BMIglAAIAAh/IAlAAIAABMIA3hMIAlAAIAAB/g");
    this.shape_7.setTransform(105.05, 23.05);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAZBAIAAgrIgFAAIgMACIgPAAQgRAAgMgEQgNgGgGgLQgGgKAAgTIAAgkIAkAAIAAAkQAAAKAGAFQAFAFALAAIAOgBIAKgCIAEAAIAAg1IAlAAIAAB/g"
      );
    this.shape_8.setTransform(89.625, 23.05);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#FFFFFF").s().p("AgqBAIAagrIg5hUIAsAAIAgAyIAfgyIAoAAIhMB/g");
    this.shape_9.setTransform(75.025, 23.05);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p("AhCBBIAAglIACAAQAGAAAEgCQAEgCABgFQACgEABgIIAHhHIBqAAIAAB/IglAAIAAhfIgmAAIgEAqQgCASgFAMQgEANgLAFQgLAHgSAAg");
    this.shape_10.setTransform(59.375, 23.15);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgiA6QgQgJgIgOQgKgPABgUQgBgTAKgPQAIgPAQgIQAPgIATAAQATAAAQAIQAPAIAJAPQAKAPgBATQABAUgKAPQgJAOgPAJQgQAIgTAAQgTAAgPgIgAgPgcQgHAFgFAHQgDAHAAAJQAAAJADAIQAFAIAHAEQAGAFAJgBQAKABAHgFQAGgEAEgIQAEgIAAgJQAAgJgEgHQgEgHgGgFQgHgEgKAAQgJAAgGAEg"
      );
    this.shape_11.setTransform(44.45, 23.05);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#FFFFFF").s().p("AAaBAIAAhfIgzAAIAABfIglAAIAAh/IB9AAIAAB/g");
    this.shape_12.setTransform(29.125, 23.05);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(90)
    );

    // btn_copy
    this.instance_1 = new lib.btn2();
    this.instance_1.setTransform(123.9, 24.2, 1.0611, 0.9034, 0, 0, 0, 123.4, 22.1);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1.7, 4.4, 250.79999999999998, 37.800000000000004);

  (lib.btn = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // BTN
    this.instance = new lib.btn1();
    this.instance.setTransform(123.7, 21.8, 1, 1, 0, 0, 0, 123.7, 21.8);

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(1).to({ scaleX: 0.9101, scaleY: 0.9101, x: 123.75, y: 21.85 }, 0).wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1.7, 4.4, 250.79999999999998, 37.800000000000004);

  (lib.bg_new = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_5
    this.instance = new lib.lines_2();
    this.instance.setTransform(43, 243.15, 1, 1, 0, 0, 0, 43, 43);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Layer_4
    this.instance_1 = new lib.LLLL();
    this.instance_1.setTransform(57.8, 57.8, 1, 1, 0, 0, 0, 57.8, 57.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    // Layer_1_copy
    this.instance_2 = new lib.Bitmap1();
    this.instance_2.setTransform(254, 26);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.bg_new, new cjs.Rectangle(0, 13, 1872.7, 883.6), null);

  (lib.bg = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_3
    this.instance = new lib.bg_new();
    this.instance.setTransform(541.5, 278, 1, 1, 0, 0, 0, 682.5, 322);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(113, -18, 1036.8, 869), null);

  (lib.Символ39 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Слой_1
    this.lig = new lib.Анимация63("synched", 0);
    this.lig.name = "lig";
    this.lig.setTransform(1785.55, 2.8);

    this.timeline.addTween(cjs.Tween.get(this.lig).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(49, 0.4, 4220.5, 14.2), null);

  (lib.Символ30 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // timeline functions:
    this.frame_0 = function () {
      if (window.autobet.fields["DISCLAIMER"]) {
        this.lig.lig.lig.text = window.autobet.fields["DISCLAIMER"];
      }
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1200));

    // Слой_1
    this.lig = new lib.Символ39();
    this.lig.name = "lig";
    this.lig.setTransform(2842.1, 7, 1, 1, 0, 0, 0, 2080.6, 7);

    this.timeline.addTween(cjs.Tween.get(this.lig).to({ x: -1410.75, y: 11.2 }, 1199).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-3442.3, 0.4, 8473.3, 18.400000000000002);

  // stage content:
  (lib._350x788 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // logo
    this.instance = new lib.logo();
    this.instance.setTransform(188, 77.2, 1.43, 1.43, 0, 0, 0, 118.2, 16.7);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

    // lig
    this.instance_1 = new lib.Символ30();
    this.instance_1.setTransform(1282.65, 829.4, 0.9999, 0.9999, 0, 0, 0, 2080.4, 7.2);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

    // coin
    this.instance_2 = new lib.Coin_all();
    this.instance_2.setTransform(374, 496.75, 1.1897, 1.1897, 17.6932, 0, 0, 321.9, 312.9);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

    // T4
    this.instance_3 = new lib.T4();
    this.instance_3.setTransform(157.55, 123.45, 1.386, 1.386, 0, 0, 0, 100.9, 39);
    this.instance_3.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .to({ regY: 39.1, y: 165, alpha: 1 }, 17, cjs.Ease.backOut)
        .wait(60)
        .to({ regY: 39, x: 156.6, y: 196.7, alpha: 0 }, 12, cjs.Ease.cubicIn)
        .wait(1)
    );

    // Layer_6
    this.instance_4 = new lib._T4();
    this.instance_4.setTransform(296.5, 155.85, 1.2227, 1.2227, 0, 0, 0, 55.8, 16.7);
    this.instance_4.alpha = 0;
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(2)
        .to({ _off: false }, 0)
        .to({ regY: 16.6, y: 186.2, alpha: 1 }, 17, cjs.Ease.backOut)
        .wait(54)
        .to({ regY: 16.7, y: 214.25, alpha: 0 }, 14, cjs.Ease.backIn)
        .wait(3)
    );

    // Layer_4
    this.instance_5 = new lib.T3();
    this.instance_5.setTransform(287, 127, 1.2227, 1.2227, 0, 0, 0, 49.1, 16.7);
    this.instance_5.alpha = 0;
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(4)
        .to({ _off: false }, 0)
        .to({ regY: 16.6, y: 157.3, alpha: 1 }, 17, cjs.Ease.backOut)
        .wait(54)
        .to({ regY: 16.7, y: 185.4, alpha: 0 }, 14, cjs.Ease.backIn)
        .wait(1)
    );

    // T2
    this.instance_6 = new lib.T2();
    this.instance_6.setTransform(187.7, 155.45, 1.2712, 1.2712, 0, 0, 0, 56.2, 18.9);
    this.instance_6.alpha = 0;
    this.instance_6._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(6)
        .to({ _off: false }, 0)
        .to({ regY: 19.1, x: 188.6, y: 176.4, alpha: 1 }, 17, cjs.Ease.backOut)
        .wait(48)
        .to({ x: 187.7, y: 205.55, alpha: 0 }, 14, cjs.Ease.backIn)
        .wait(5)
    );

    // btn
    this.instance_7 = new lib.btn();
    this.instance_7.setTransform(188.8, 724.6, 0.0026, 0.0177, 0, 0, 0, 132.6, 22.6);
    new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .to({ regX: 123.7, regY: 21.9, scaleX: 1.2491, scaleY: 1.2491, y: 724.65 }, 14, cjs.Ease.backOut)
        .wait(57)
        .to({ regX: 132.6, regY: 22.6, scaleX: 0.0026, scaleY: 0.0177, y: 723.1 }, 14, cjs.Ease.backIn)
        .wait(5)
    );

    // Layer_1
    this.instance_8 = new lib.btn22();
    this.instance_8.setTransform(187.95, 665.7, 0.0027, 0.0186, 0, 0, 0, 130.3, 24.2);
    this.instance_8._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(1)
        .to({ _off: false }, 0)
        .to({ regX: 120.2, regY: 17.5, scaleX: 1.2952, scaleY: 1.2952, x: 187.9 }, 14, cjs.Ease.backOut)
        .wait(58)
        .to({ regX: 130.3, regY: 24.2, scaleX: 0.0027, scaleY: 0.0186, x: 187.95, y: 675.7 }, 14, cjs.Ease.backIn)
        .wait(3)
    );

    // pl
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSAjQgHgFgFgHQgEgIAAgKIAAgrIANAAIAAApQAAAKAGAGQAGAHAJAAQALAAAFgHQAGgGgBgKIAAgpIAPAAIAAArQgBAKgEAIQgEAHgIAFQgIAEgLAAQgKAAgIgEg"
      );
    this.shape.setTransform(169.05, 799.475);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("AgdAmIAAhLIAOAAIAAAOIAEgGQADgDAFgDQAFgCAJAAIATAAIAAAOIgUAAQgJAAgFACQgGACgCAEQgDAFAAAGIAAAqg");
    this.shape_1.setTransform(160.625, 799.375);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AgIALIAAgVIARAAIAAAVg");
    this.shape_2.setTransform(154, 802.1);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFFFFF").s().p("AgWA3IAQgkIgihJIAQAAIAZA5IAag5IAOAAIgwBtg");
    this.shape_3.setTransform(147.9, 801.125);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p("AAQA2QgOABgGgHQgGgGAAgNIAAglIgXAAIAAgNIAXAAIAAghIANAAIAAAhIAfAAIAAANIgfAAIAAAiQAAAIAEAEQADADAJAAIAPAAIAAANg");
    this.shape_4.setTransform(139.35, 797.75);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FFFFFF").s().p("AgGA4IAAhLIANAAIAABLgAgGghIAAgWIAOAAIAAAWg");
    this.shape_5.setTransform(133.4, 797.575);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSAiQgIgFgFgJQgFgJAAgLQAAgLAFgIQAFgJAIgGQAJgFAKAAQAKAAAHADQAHADAEAFIAGAIIACAHIgOAAIgDgFQgCgDgFgCQgFgDgHAAQgGAAgGAEQgFADgDAGQgDAGAAAHQAAAHADAGQADAGAGAEQAFAEAGAAQAIAAAEgDIAHgFIADgFIAOAAIgCAGQgCAEgEAFQgEAEgHADQgHADgKABQgKgBgJgFg"
      );
    this.shape_6.setTransform(126.725, 799.425);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p("AAPA2QgNABgGgHQgGgGAAgNIAAglIgWAAIAAgNIAWAAIAAghIANAAIAAAhIAeAAIAAANIgeAAIAAAiQAAAIADAEQAEADAJAAIAOAAIAAANg");
    this.shape_7.setTransform(118.1, 797.75);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSAiQgKgFgFgJQgEgJAAgLQAAgLAEgJQAFgJAJgFQAIgFALAAQALAAAJAFQAIAFAGAKQAEAJAAAMIg+AAQABAHADAFQAEAGAFADQAFAEAHAAQAIAAAEgDQAGgCABgCIADgEIAPAAIgDAGQgCAEgFAEQgEAEgGADQgIACgJABQgKgBgJgFgAAXgJQgCgJgHgEQgFgFgJAAQgIAAgHAFQgFAFgDAIIAuAAIAAAAg"
      );
    this.shape_8.setTransform(109.65, 799.425);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgLA2QgGgCgDgDQgEgEAAgCIAAAMIgOAAIAAhvIAOAAIAAAxQAAgBAEgEQADgEAGgDQAGgCAHAAQAKAAAJAEQAIAGAFAIQAFAIAAAMQAAANgFAJQgFAJgIAEQgJAFgKABQgHgBgGgDgAgNgFQgFAEgEAFQgDAGAAAHQAAAIADAHQAEAFAFAEQAGAEAHgBQAHABAGgEQAGgEADgFQADgHAAgIQAAgHgDgGQgDgFgGgEQgGgDgHgBQgHABgGADg"
      );
    this.shape_9.setTransform(100.075, 797.65);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#FFFFFF").s().p("AgIALIAAgVIARAAIAAAVg");
    this.shape_10.setTransform(88.5, 802.1);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgUAjQgIgFgFgJQgFgJAAgMQAAgMAFgIQAFgJAIgFQAJgFAKAAQAHAAAGADIAJAGIAEAFIAAgMIAOAAIAABLIgOAAIAAgNIgEAFQgDAEgGADQgGACgHABQgKAAgJgFgAgMgWQgGADgDAGQgCAGAAAHQAAAHACAGQADAHAGADQAGAEAGAAQAIAAAGgEQAFgDADgHQADgGAAgHQAAgHgDgGQgDgGgFgDQgGgEgIAAQgGAAgGAEg"
      );
    this.shape_11.setTransform(80.9, 799.425);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#FFFFFF").s().p("AgFAmIgeg6IAAA6IgMAAIAAhLIASAAIAdA7IAeg7IASAAIAABLIgNAAIAAg7IgeA7g");
    this.shape_12.setTransform(69.8, 799.425);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgTAjQgJgFgFgJQgFgJAAgMQAAgMAFgIQAFgJAJgFQAIgFAKAAQAHAAAGADIAIAGIAFAFIAAgMIAOAAIAABLIgOAAIAAgNIgEAFQgDAEgGADQgFACgIABQgKAAgIgFgAgMgWQgFADgDAGQgDAGgBAHQABAHADAGQADAHAFADQAGAEAGAAQAIAAAGgEQAFgDADgHQADgGAAgHQAAgHgDgGQgDgGgFgDQgGgEgIAAQgGAAgGAEg"
      );
    this.shape_13.setTransform(58.2, 799.425);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p("AglAnIAAgNIACAAQAFAAADgCQACgCABgFQACgFAAgIIAFgqIA3AAIAABLIgNAAIAAg+IgfAAIgDAeQgBAMgDAHQgCAHgFAEQgFAEgIAAg");
    this.shape_14.setTransform(48.1, 799.45);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#FFFFFF").s().p("AASAmIgpgjIAAAjIgOAAIAAhLIAOAAIAAAhIAnghIAUAAIgsAlIAuAmg");
    this.shape_15.setTransform(39.975, 799.4);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSAiQgJgFgGgJQgEgJAAgLQAAgLAEgJQAFgJAJgFQAJgFAKAAQALAAAJAFQAIAFAGAKQAEAJAAAMIg+AAQABAHADAFQADAGAGADQAGAEAGAAQAIAAAFgDQAEgCACgCIAEgEIANAAIgCAGQgCAEgFAEQgDAEgHADQgIACgJABQgKgBgJgFgAAXgJQgDgJgFgEQgHgFgIAAQgIAAgHAFQgFAFgDAIIAuAAIAAAAg"
      );
    this.shape_16.setTransform(30.2, 799.425);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AguA2IAAhsIA4AAQASABAKAHQAIAJABAPQAAAKgFAHQgEAGgHAEQgJAEgMAAIgpAAIAAAtgAgfgEIAqAAQAKAAAFgFQAFgFAAgHQAAgKgFgEQgFgEgKAAIgqAAg"
      );
    this.shape_17.setTransform(19.8, 797.75);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#FFFFFF").s().p("AgFApIAAgjIgiAAIAAgLIAiAAIAAgjIALAAIAAAjIAiAAIAAALIgiAAIAAAjg");
    this.shape_18.setTransform(203.525, 798.375);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgBA5QgMgBgIgEQgIgDgFgIQgEgHAAgJQAAgIADgFQADgGAFgDQAEgDAFgBQgFgBgEgDQgEgDgDgFQgCgFAAgIQAAgIAEgGQAEgIAIgDQAHgFAMAAIADAAQALAAAIAFQAIADAEAIQAEAGAAAIQAAAIgDAFQgDAFgEADIgIAEQAFABAEADQAFADADAGQADAFAAAIQAAAJgEAHQgFAHgJAEQgHAEgNABgAgRALQgGAEAAAJQAAAJAGAFQAGAFAKAAIADAAQAKAAAGgFQAGgFAAgJQAAgJgGgEQgGgGgKAAIgDAAQgKAAgGAGgAgQgmQgFAFAAAJQAAAHAFAFQAGAFAJAAIADAAQAJAAAGgFQAFgFAAgHQAAgJgFgFQgGgEgJAAIgDAAQgJAAgGAEg"
      );
    this.shape_19.setTransform(193.1, 797.75);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f("#FFFFFF").s().p("AAGA3IAAhbIgaAPIAAgOIAegTIALAAIAABtg");
    this.shape_20.setTransform(183.95, 797.725);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(90)
    );

    // Layer_11_copy
    this.instance_9 = new lib.rad2();
    this.instance_9.setTransform(327.1, 441.45, 1, 1, 0, 0, 0, 35.6, 21.9);

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(90));

    // Layer_10
    this.instance_10 = new lib.bg();
    this.instance_10.setTransform(514.8, 299.9, 1, 1, 0, 0, 0, 636.5, 299.9);

    this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(90));

    // stageBackground
    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f().s("rgba(0,0,0,0)").ss(1, 1, 1, 3, true).p("Ege2hDfMA9tAAAMAAACG/Mg9tAAAg");
    this.shape_21.setTransform(187.5, 422);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics.f("#FFFFFF").s().p("Ege2BDgMAAAiG/MA9tAAAMAAACG/g");
    this.shape_22.setTransform(187.5, 422);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_22 }, { t: this.shape_21 }] })
        .wait(90)
    );

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(178.8, 404, 4054.3, 447);
  // library properties:
  lib.properties = {
    id: "DCFFF2F380E46043872989521ABB34F7",
    width: 350,
    height: 788,
    fps: 30,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [{ src: `/betcity/index_atlas_1.png`, id: "index_atlas_1" }],
    preloads: []
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["DCFFF2F380E46043872989521ABB34F7"] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    }
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if ((respDim == "width" && lastW == iw) || (respDim == "height" && lastH == ih)) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + "px";
        container.style.height = h * sRatio + "px";
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target;
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index];
            if (cacheInst.startFrame <= target.currentFrame && target.currentFrame <= cacheInst.endFrame) {
              cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
            }
          }
        }
      }
    }
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
