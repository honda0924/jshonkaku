function Triangle() {
  let _base;
  let _height;
  let _checkArgs = function (val) {
    return (typeof val ==='number' && val > 0);
  }
//   Object.defineProperty(
//     this,
//     'base',
//     {
//       get: function () {
//         return _base;
//       },
//       set: function (base) {
//         if (_checkArgs(base)) {
//           _base=base;
//         }
//       }
//     }
//   );
//   Object.defineProperty(
//     this,
//     'height',
//     {
//       get: function () {
//         return _height;
//       },
//       set: function (height) {
//         if (_checkArgs(height)) {
//           _height=height;
//         }
//       }
//     }
//   );
// };

Object.defineProperties(
  this,{
    'base':{
      get: function () {
        return _base;
      },
      set: function (base) {
        if (_checkArgs(base)) {
          _base=base;
        }
      }
    },
    'height':{
      get: function () {
        return _height;
      },
      set: function (height) {
        if (_checkArgs(height)) {
          _height=height;
        }
      }
    }
  });
};

Triangle.prototype.getArea = function () {
  return this.base * this.height / 2;
}

let t = new Triangle();
t.base=10;
t.height=2;

console.log('三角形の底辺: '+t.base);
console.log('三角形の高さ: '+t.height);
console.log('三角形の面積: '+t.getArea());

