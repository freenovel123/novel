(function(window, $) {
  $.fn.serializeJson = function() {
    var serializeObj = {};
    var array = this.serializeArray();
    $(array).each(
        function() {
          if (serializeObj[this.name]) {
            if ($.isArray(serializeObj[this.name])) {
              serializeObj[this.name].push(this.value);
            } else {
              serializeObj[this.name] = [
                serializeObj[this.name], this.value
              ];
            }
          } else {
            var arr = this.name.split('.');
            if (arr[1]) {
              if (!serializeObj[arr[0]]) {
                serializeObj[arr[0]] = {}
              }
              serializeObj[arr[0]][arr[1]] = this.value;
            } else {
              serializeObj[this.name] = this.value;
            }
          }
        });
    return serializeObj;
  };
})(window, Zepto);