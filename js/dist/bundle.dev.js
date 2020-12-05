"use strict";

define("advent.calculator", ["require", "exports"], function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AdventCalculator = void 0;

  var AdventCalculator =
  /** @class */
  function () {
    function AdventCalculator() {
      this.count = -1;
    }

    AdventCalculator.prototype.init = function () {
      console.log("adventCalculator created");
      var christmas = moment();
      console.log(christmas);
    };

    return AdventCalculator;
  }();

  exports.AdventCalculator = AdventCalculator;
});