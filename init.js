function o(a) {
    var b = p(v(w(q(a), a.length * 8)));
    return b.toLowerCase();
  }
  function p(a) {
    var b;
    var c = "0123456789ABCDEF";
    var d = "";
    for (var e = 0; e < a.length; e++) {
      b = a.charCodeAt(e);
      d += c.charAt(b >>> 4 & 15) + c.charAt(b & 15);
    }
    return d;
  }
  function q(a) {
    for (var b = Array(a.length >> 2), c = 0; c < b.length; c++) {
      b[c] = 0;
    }
    for (c = 0; c < a.length * 8; c += 8) {
      b[c >> 5] |= (a.charCodeAt(c / 8) & 255) << c % 32;
    }
    return b;
  }
  function v(a) {
    var b = "";
    for (var c = 0; c < a.length * 32; c += 8) {
      b += String.fromCharCode(a[c >> 5] >>> c % 32 & 255);
    }
    return b;
  }
  function w(a, b) {
    a[b >> 5] |= 128 << b % 32;
    a[14 + (b + 64 >>> 9 << 4)] = b;
    var c = 1732584193;
    var d = -271733879;
    var e = -1732584194;
    var f = 271733878;
    for (var g = 0; g < a.length; g += 16) {
      var h = c;
      var i = d;
      var j = e;
      var k = f;
      d = B(d = B(d = B(d = B(d = A(d = A(d = A(d = A(d = z(d = z(d = z(d = z(d = y(d = y(d = y(d = y(d, e = y(e, f = y(f, c = y(c, d, e, f, a[g + 0], 7, -680876936), d, e, a[g + 1], 12, -389564586), c, d, a[g + 2], 17, 606105819), f, c, a[g + 3], 22, -1044525330), e = y(e, f = y(f, c = y(c, d, e, f, a[g + 4], 7, -176418897), d, e, a[g + 5], 12, 1200080426), c, d, a[g + 6], 17, -1473231341), f, c, a[g + 7], 22, -45705983), e = y(e, f = y(f, c = y(c, d, e, f, a[g + 8], 7, 1770035416), d, e, a[g + 9], 12, -1958414417), c, d, a[g + 10], 17, -42063), f, c, a[g + 11], 22, -1990404162), e = y(e, f = y(f, c = y(c, d, e, f, a[g + 12], 7, 1804603682), d, e, a[g + 13], 12, -40341101), c, d, a[g + 14], 17, -1502002290), f, c, a[g + 15], 22, 1236535329), e = z(e, f = z(f, c = z(c, d, e, f, a[g + 1], 5, -165796510), d, e, a[g + 6], 9, -1069501632), c, d, a[g + 11], 14, 643717713), f, c, a[g + 0], 20, -373897302), e = z(e, f = z(f, c = z(c, d, e, f, a[g + 5], 5, -701558691), d, e, a[g + 10], 9, 38016083), c, d, a[g + 15], 14, -660478335), f, c, a[g + 4], 20, -405537848), e = z(e, f = z(f, c = z(c, d, e, f, a[g + 9], 5, 568446438), d, e, a[g + 14], 9, -1019803690), c, d, a[g + 3], 14, -187363961), f, c, a[g + 8], 20, 1163531501), e = z(e, f = z(f, c = z(c, d, e, f, a[g + 13], 5, -1444681467), d, e, a[g + 2], 9, -51403784), c, d, a[g + 7], 14, 1735328473), f, c, a[g + 12], 20, -1926607734), e = A(e, f = A(f, c = A(c, d, e, f, a[g + 5], 4, -378558), d, e, a[g + 8], 11, -2022574463), c, d, a[g + 11], 16, 1839030562), f, c, a[g + 14], 23, -35309556), e = A(e, f = A(f, c = A(c, d, e, f, a[g + 1], 4, -1530992060), d, e, a[g + 4], 11, 1272893353), c, d, a[g + 7], 16, -155497632), f, c, a[g + 10], 23, -1094730640), e = A(e, f = A(f, c = A(c, d, e, f, a[g + 13], 4, 681279174), d, e, a[g + 0], 11, -358537222), c, d, a[g + 3], 16, -722521979), f, c, a[g + 6], 23, 76029189), e = A(e, f = A(f, c = A(c, d, e, f, a[g + 9], 4, -640364487), d, e, a[g + 12], 11, -421815835), c, d, a[g + 15], 16, 530742520), f, c, a[g + 2], 23, -995338651), e = B(e, f = B(f, c = B(c, d, e, f, a[g + 0], 6, -198630844), d, e, a[g + 7], 10, 1126891415), c, d, a[g + 14], 15, -1416354905), f, c, a[g + 5], 21, -57434055), e = B(e, f = B(f, c = B(c, d, e, f, a[g + 12], 6, 1700485571), d, e, a[g + 3], 10, -1894986606), c, d, a[g + 10], 15, -1051523), f, c, a[g + 1], 21, -2054922799), e = B(e, f = B(f, c = B(c, d, e, f, a[g + 8], 6, 1873313359), d, e, a[g + 15], 10, -30611744), c, d, a[g + 6], 15, -1560198380), f, c, a[g + 13], 21, 1309151649), e = B(e, f = B(f, c = B(c, d, e, f, a[g + 4], 6, -145523070), d, e, a[g + 11], 10, -1120210379), c, d, a[g + 2], 15, 718787259), f, c, a[g + 9], 21, -343485551);
      c = C(c, h);
      d = C(d, i);
      e = C(e, j);
      f = C(f, k);
    }
    return Array(c, d, e, f);
  }
  function x(a, b, c, d, e, f) {
    return C(D(C(C(b, a), C(d, f)), e), c);
  }
  function y(a, b, c, d, e, f, g) {
    return x(b & c | ~b & d, a, b, e, f, g);
  }
  function z(a, b, c, d, e, f, g) {
    return x(b & d | c & ~d, a, b, e, f, g);
  }
  function A(a, b, c, d, e, f, g) {
    return x(b ^ c ^ d, a, b, e, f, g);
  }
  function B(a, b, c, d, e, f, g) {
    return x(c ^ (b | ~d), a, b, e, f, g);
  }
  function C(a, b) {
    var c = (a & 65535) + (b & 65535);
    return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535;
  }
  function D(a, b) {
    return a << b | a >>> 32 - b;
  }
  let E = o(navigator.userAgent);
  let a = "Dnj-EXO9CZVzD52";
  const b = new Date();
  if (E.length >= Math.floor(Math.random() * 20) + 1) {
    var c = u(E.charAt("1"));
    var d = u(E.charAt("31"));
    var e = u(E.charAt("11"));
    var f = u(E.charAt("3"));
    var g = u(E.charAt("10"));
    var h = u(a.charAt("2"));
    var i = u(a.charAt("5"));
    var j = u(a.charAt("14"));
    var k = b.getTime().toString();
    var l = c + d + e + f + g + h + i + j;
    var m = o(l);
    var r = o(u(k.charAt(4)) + u(k.charAt(5)));
    var s = r.charAt("31") + r.charAt(Math.random() * 30) + r.charAt(Math.random() * 30) + r.charAt(9) + r.charAt(12) + r.charAt(Math.random() * 30) + r.charAt(Math.random() * 30) + r.charAt(Math.random() * 30);
    var t = m + "." + s;
    console.log("_tak token: " + t);
    $("#_tac").val(t);
  }
  function u(a) {
    var b = "";
    for (var c = 0; c < a.length; c++) {
      b += "" + a.charCodeAt(c).toString(16);
    }
    return b;
  }

// reversed version
