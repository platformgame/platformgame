"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Platform = exports.Platform = function () {
  function Platform(x, y, height, length) {
    _classCallCheck(this, Platform);

    this.x = x;
    this.y = y;
    this.height = height;
    this.length = length;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      //Draw platform
    }
  }, {
    key: "x",
    get: function get() {
      return this.x;
    },
    set: function set(xpos) {
      this.x = xpos;
    }
  }, {
    key: "y",
    get: function get() {
      return this.x;
    },
    set: function set(ypos) {
      this.y = ypos;
    }
  }, {
    key: "height",
    get: function get() {
      return this.height;
    },
    set: function set(h) {
      this.height = h;
    }
  }, {
    key: "length",
    get: function get() {
      return this.length;
    },
    set: function set(l) {
      this.length = l;
    }
  }]);

  return Platform;
}();