function encrypt(string) {
    var b = str2hex_(reverseArray(calculate(hexArray(string), string.length * 8)));
    return b.toLowerCase();
  }
  function str2hex_(string) { // p
    var b;
    var c = "0123456789ABCDEF";
    var d = "";
    for (var e = 0; e < string.length; e++) {
      b = string.charCodeAt(e);
      d += c.charAt(b >>> 4 & 15) + c.charAt(b & 15);
    }
    return d;
  }
  function hexArray(string) { // q
    for (var b = Array(string.length >> 2), c = 0; c < b.length; c++) {
      b[c] = 0;
    }
    for (c = 0; c < string.length * 8; c += 8) {
      b[c >> 5] |= (string.charCodeAt(c / 8) & 255) << c % 32;
    }
    return b;
  }
  function reverseArray(string) { // v
    var b = "";
    for (var c = 0; c < string.length * 32; c += 8) {
      b += string.fromCharCode(string[c >> 5] >>> c % 32 & 255);
    }
    return b;
  }
  function calculate(a, b) { // v
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
      d = md5_ii(d = md5_ii(d = md5_ii(d = md5_ii(d = md5_hh(d = md5_hh(d = md5_hh(d = md5_hh(d = md5_gg(d = md5_gg(d = md5_gg(d = md5_gg(d = md5_ff(d = md5_ff(d = md5_ff(d = md5_ff(d, e = md5_ff(e, f = md5_ff(f, c = md5_ff(c, d, e, f, a[g + 0], 7, -680876936), d, e, a[g + 1], 12, -389564586), c, d, a[g + 2], 17, 606105819), f, c, a[g + 3], 22, -1044525330), e = md5_ff(e, f = md5_ff(f, c = md5_ff(c, d, e, f, a[g + 4], 7, -176418897), d, e, a[g + 5], 12, 1200080426), c, d, a[g + 6], 17, -1473231341), f, c, a[g + 7], 22, -45705983), e = md5_ff(e, f = md5_ff(f, c = md5_ff(c, d, e, f, a[g + 8], 7, 1770035416), d, e, a[g + 9], 12, -1958414417), c, d, a[g + 10], 17, -42063), f, c, a[g + 11], 22, -1990404162), e = md5_ff(e, f = md5_ff(f, c = y(c, d, e, f, a[g + 12], 7, 1804603682), d, e, a[g + 13], 12, -40341101), c, d, a[g + 14], 17, -1502002290), f, c, a[g + 15], 22, 1236535329), e = md5_gg(e, f = md5_gg(f, c = md5_gg(c, d, e, f, a[g + 1], 5, -165796510), d, e, a[g + 6], 9, -1069501632), c, d, a[g + 11], 14, 643717713), f, c, a[g + 0], 20, -373897302), e = md5_gg(e, f = md5_gg(f, c = md5_gg(c, d, e, f, a[g + 5], 5, -701558691), d, e, a[g + 10], 9, 38016083), c, d, a[g + 15], 14, -660478335), f, c, a[g + 4], 20, -405537848), e = md5_gg(e, f = md5_gg(f, c = md5_gg(c, d, e, f, a[g + 9], 5, 568446438), d, e, a[g + 14], 9, -1019803690), c, d, a[g + 3], 14, -187363961), f, c, a[g + 8], 20, 1163531501), e = md5_gg(e, f = md5_gg(f, c = md5_gg(c, d, e, f, a[g + 13], 5, -1444681467), d, e, a[g + 2], 9, -51403784), c, d, a[g + 7], 14, 1735328473), f, c, a[g + 12], 20, -1926607734), e = md5_hh(e, f = md5_hh(f, c = md5_hh(c, d, e, f, a[g + 5], 4, -378558), d, e, a[g + 8], 11, -2022574463), c, d, a[g + 11], 16, 1839030562), f, c, a[g + 14], 23, -35309556), e = md5_hh(e, f = md5_hh(f, c = md5_hh(c, d, e, f, a[g + 1], 4, -1530992060), d, e, a[g + 4], 11, 1272893353), c, d, a[g + 7], 16, -155497632), f, c, a[g + 10], 23, -1094730640), e = md5_hh(e, f = md5_hh(f, c = md5_hh(c, d, e, f, a[g + 13], 4, 681279174), d, e, a[g + 0], 11, -358537222), c, d, a[g + 3], 16, -722521979), f, c, a[g + 6], 23, 76029189), e = md5_hh(e, f = A(f, c = A(c, d, e, f, a[g + 9], 4, -640364487), d, e, a[g + 12], 11, -421815835), c, d, a[g + 15], 16, 530742520), f, c, a[g + 2], 23, -995338651), e = md5_ii(e, f = md5_ii(f, c = md5_ii(c, d, e, f, a[g + 0], 6, -198630844), d, e, a[g + 7], 10, 1126891415), c, d, a[g + 14], 15, -1416354905), f, c, a[g + 5], 21, -57434055), e = md5_ii(e, f = md5_ii(f, c = md5_ii(c, d, e, f, a[g + 12], 6, 1700485571), d, e, a[g + 3], 10, -1894986606), c, d, a[g + 10], 15, -1051523), f, c, a[g + 1], 21, -2054922799), e = md5_ii(e, f = md5_ii(f, c = md5_ii(c, d, e, f, a[g + 8], 6, 1873313359), d, e, a[g + 15], 10, -30611744), c, d, a[g + 6], 15, -1560198380), f, c, a[g + 13], 21, 1309151649), e = md5_ii(e, f = B(f, c = B(c, d, e, f, a[g + 4], 6, -145523070), d, e, a[g + 11], 10, -1120210379), c, d, a[g + 2], 15, 718787259), f, c, a[g + 9], 21, -343485551);
      c = safe_add(c, h);
      d = safe_add(d, i);
      e = safe_add(e, j);
      f = safe_add(f, k);
    }
    return Array(c, d, e, f);
  }
  function md5_cmn(a, b, c, d, e, f) { // x
    return safe_add(bit_rol(safe_add(safe_add(b, a), safe_add(d, f)), e), c);
  }
  function md5_ff(a, b, c, d, e, f, g) { // y
    return md5_cmn(b & c | ~b & d, a, b, e, f, g);
  }
  function md5_gg(a, b, c, d, e, f, g) { // z
    return md5_cmn(b & d | c & ~d, a, b, e, f, g);
  }
  function md5_hh(a, b, c, d, e, f, g) { // A
    return md5_cmn(b ^ c ^ d, a, b, e, f, g);
  }
  function md5_ii(a, b, c, d, e, f, g) { // B
    return md5_cmn(c ^ (b | ~d), a, b, e, f, g);
  }
  function safe_add(a, b) { // C
    var c = (a & 65535) + (b & 65535);
    return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535;
  }
  function bit_rol(a, b) { // D
    return a << b | a >>> 32 - b;
  }
  let useragent = encrypt(navigator.userAgent); // E
  let key = "mTGeYphNdyHdmad-jh3niE"; // key or somethinh??
  const now = new Date(); // b
  if (useragent.length >= Math.floor(Math.random() * 20) + 1) {
    var c = str2Hex(useragent.charAt("29"));
    var d = str2Hex(useragent.charAt("9"));
    var e = str2Hex(useragent.charAt("16"));
    var f = str2Hex(useragent.charAt("27"));
    var g = str2Hex(useragent.charAt("18"));
    var h = str2Hex(useragent.charAt("13"));
    var i = str2Hex(useragent.charAt("2"));
    var j = str2Hex(key.charAt("2"));
    var str_now = now.getTime().toString(); // k
    var l = c + d + e + f + g + h + i + j;
    var _first = encrypt(l);
    var r = encrypt(str2Hex(str_now.charAt(4)) + str2Hex(str_now.charAt(5)));
    var _randHex__ = r.charAt("9") + r.charAt(Math.random() * 30) + r.charAt(Math.random() * 30) + r.charAt(9) + r.charAt(12) + r.charAt(Math.random() * 30) + r.charAt(Math.random() * 30) + r.charAt(Math.random() * 30);
    var _tak_token = _first + "." + _randHex__;
    $("#_tac").val(_tak_token);
  }
  function str2Hex(str) { // u
    var b = "";
    for (var c = 0; c < str.length; c++) {
      b += "" + str.charCodeAt(c).toString(16);
    }
    return b;
  }

// better reversed code, try to understand some things, but nvm its now cleaner
