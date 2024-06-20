import random
import time

def encrypt(string):
    b = str2hex_(reverseArray(calculate(hexArray(string), len(string) * 8)))
    return b.lower()

def str2hex_(string):  # p
    c = "0123456789ABCDEF"
    d = ""
    for e in range(len(string)):
        b = ord(string[e])
        d += c[(b >> 4) & 15] + c[b & 15]
    return d

def hexArray(string):  # q
    b = [0] * (len(string) >> 2)
    for c in range(len(string) * 8):
        b[c >> 5] |= (ord(string[c // 8]) & 255) << (c % 32)
    return b

def reverseArray(string):  # v
    b = ""
    for c in range(len(string) * 32):
        b += chr((string[c >> 5] >> (c % 32)) & 255)
    return b

def calculate(a, b):  # v
    a[b >> 5] |= 128 << (b % 32)
    a[14 + ((b + 64) >> 9 << 4)] = b
    c, d, e, f = 1732584193, -271733879, -1732584194, 271733878
    for g in range(0, len(a), 16):
        h, i, j, k = c, d, e, f
        d = md5_ii(d, e = md5_ff(e, f = md5_ff(f, c = md5_ff(c, d, e, f, a[g + 0], 7, -680876936), d, e, a[g + 1], 12, -389564586), c, d, a[g + 2], 17, 606105819), f, c, a[g + 3], 22, -1044525330)
        e = md5_ff(e, f = md5_ff(f, c = md5_ff(c, d, e, f, a[g + 4], 7, -176418897), d, e, a[g + 5], 12, 1200080426), c, d, a[g + 6], 17, -1473231341), f, c, a[g + 7], 22, -45705983)
        e = md5_ff(e, f = md5_ff(f, c = md5_ff(c, d, e, f, a[g + 8], 7, 1770035416), d, e, a[g + 9], 12, -1958414417), c, d, a[g + 10], 17, -42063), f, c, a[g + 11], 22, -1990404162)
        e = md5_ff(e, f = md5_ff(f, c = md5_ff(c, d, e, f, a[g + 12], 7, 1804603682), d, e, a[g + 13], 12, -40341101), c, d, a[g + 14], 17, -1502002290), f, c, a[g + 15], 22, 1236535329)
        e = md5_gg(e, f = md5_gg(f, c = md5_gg(c, d, e, f, a[g + 1], 5, -165796510), d, e, a[g + 6], 9, -1069501632), c, d, a[g + 11], 14, 643717713), f, c, a[g + 0], 20, -373897302)
        e = md5_gg(e, f = md5_gg(f, c = md5_gg(c, d, e, f, a[g + 5], 5, -701558691), d, e, a[g + 10], 9, 38016083), c, d, a[g + 15], 14, -660478335), f, c, a[g + 4], 20, -405537848)
        e = md5_gg(e, f = md5_gg(f, c = md5_gg(c, d, e, f, a[g + 9], 5, 568446438), d, e, a[g + 14], 9, -1019803690), c, d, a[g + 3], 14, -187363961), f, c, a[g + 8], 20, 1163531501)
        e = md5_gg(e, f = md5_gg(f, c = md5_gg(c, d, e, f, a[g + 13], 5, -1444681467), d, e, a[g + 2], 9, -51403784), c, d, a[g + 7], 14, 1735328473), f, c, a[g + 12], 20, -1926607734)
        e = md5_hh(e, f = md5_hh(f, c = md5_hh(c, d, e, f, a[g + 5], 4, -378558), d, e, a[g + 8], 11, -2022574463), c, d, a[g + 11], 16, 1839030562), f, c, a[g + 14], 23, -35309556)
        e = md5_hh(e, f = md5_hh(f, c = md5_hh(c, d, e, f, a[g + 1], 4, -1530992060), d, e, a[g + 4], 11, 1272893353), c, d, a[g + 7], 16, -155497632), f, c, a[g + 10], 23, -1094730640)
        e = md5_hh(e, f = md5_hh(f, c = md5_hh(c, d, e, f, a[g + 13], 4, 681279174), d, e, a[g + 0], 11, -358537222), c, d, a[g + 3], 16, -722521979), f, c, a[g + 6], 23, 76029189)
        e = md5_hh(e, f = md5_hh(f, c = md5_hh(c, d, e, f, a[g + 9], 4, -640364487), d, e, a[g + 12], 11, -421815835), c, d, a[g + 15], 16, 530742520), f, c, a[g + 2], 23, -995338651)
        e = md5_ii(e, f = md5_ii(f, c = md5_ii(c, d, e, f, a[g + 0], 6, -198630844), d, e, a[g + 7], 10, 1126891415), c, d, a[g + 14], 15, -1416354905), f, c, a[g + 5], 21, -57434055)
        e = md5_ii(e, f = md5_ii(f, c = md5_ii(c, d, e, f, a[g + 12], 6, 1700485571), d, e, a[g + 3], 10, -1894986606), c, d, a[g + 10], 15, -1051523), f, c, a[g + 1], 21, -2054922799)
        e = md5_ii(e, f = md5_ii(f, c = md5_ii(c, d, e, f, a[g + 8], 6, 1873313359), d, e, a[g + 15], 10, -30611744), c, d, a[g + 6], 15, -1560198380), f, c, a[g + 13], 21, 1309151649)
        e = md5_ii(e, f = md5_ii(f, c = md5_ii(c, d, e, f, a[g + 4], 6, -145523070), d, e, a[g + 11], 10, -1120210379), c, d, a[g + 2], 15, 718787259), f, c, a[g + 9], 21, -343485551)
        c, d, e, f = safe_add(c, h), safe_add(d, i), safe_add(e, j), safe_add(f, k)
    return [c, d, e, f]

def md5_cmn(a, b, c, d, e, f):  # x
    return safe_add(bit_rol(safe_add(safe_add(b, a), safe_add(d, f)), e), c)

def md5_ff(a, b, c, d, e, f, g):  # y
    return md5_cmn((b & c) | (~b & d), a, b, e, f, g)

def md5_gg(a, b, c, d, e, f, g):  # z
    return md5_cmn((b & d) | (c & ~d), a, b, e, f, g)

def md5_hh(a, b, c, d, e, f, g):  # A
    return md5_cmn(b ^ c ^ d, a, b, e, f, g)

def md5_ii(a, b, c, d, e, f, g):  # B
    return md5_cmn(c ^ (b | ~d), a, b, e, f, g)

def safe_add(a, b):  # C
    c = (a & 65535) + (b & 65535)
    return ((a >> 16) + (b >> 16) + (c >> 16) << 16) | (c & 65535)

def bit_rol(a, b):  # D
    return (a << b) | (a >> (32 - b))

useragent = encrypt("navigator.userAgent")  # E
key = "mTGeYphNdyHdmad-jh3niE"  # key or something??
now = time.time()  # b

if len(useragent) >= random.randint(1, 20):
    c = str2Hex(useragent[29])
    d = str2Hex(useragent[9])
    e = str2Hex(useragent[16])
    f = str2Hex(useragent[27])
    g = str2Hex(useragent[18])
    h = str2Hex(useragent[13])
    i = str2Hex(useragent[2])
    j = str2Hex(key[2])
    str_now = str(int(now))  # k
    l = c + d + e + f + g + h + i + j
    _first = encrypt(l)
    r = encrypt(str2Hex(str_now[4]) + str2Hex(str_now[5]))
    _randHex__ = r[9] + r[int(random.random() * 30)] + r[int(random.random() * 30)] + r[9] + r[12] + r[int(random.random() * 30)] + r[int(random.random() * 30)] + r[int(random.random() * 30)]
    _tak_token = _first + "." + _randHex__
    print(_tak_token)

def str2Hex(str):  # u
    b = ""
    for c in range(len(str)):
        b += str(ord(str[c])).encode('utf-8').hex()
    return b


