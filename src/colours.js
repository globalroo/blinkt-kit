/*
 ** Basic RGB mappings of colours.
 */
const BASIC_COLOURS = {
	BLACK: { r: 0, g: 0, b: 0 }, //#000000
	WHITE: { r: 255, g: 255, b: 255 }, //#FFFFFF
	RED: { r: 255, g: 0, b: 0 }, //#FF0000
	LIME: { r: 0, g: 255, b: 0 }, //#00FF00
	BLUE: { r: 0, g: 0, b: 255 }, //#0000FF
	YELLOW: { r: 255, g: 255, b: 0 }, //#FFFF00
	CYAN: { r: 0, g: 255, b: 255 }, // /#00FFFF
	MAGENTA: { r: 255, g: 0, b: 255 }, //#FF00FF
	SILVER: { r: 192, g: 192, b: 192 }, //#C0C0C0
	GRAY: { r: 128, g: 128, b: 128 }, //#808080
	MAROON: { r: 128, g: 0, b: 0 }, //#800000
	OLIVE: { r: 128, g: 128, b: 0 }, //#808000
	GREEN: { r: 0, g: 128, b: 0 }, //#008000
	PURPLE: { r: 128, g: 0, b: 128 }, //#800080
	TEAL: { r: 0, g: 128, b: 128 }, //#008080
	NAVY: { r: 0, g: 0, b: 128 } //#000080
};

const COLOURS = {
	MAROON: { r: 128, g: 0, b: 0 }, //#800000
	DARKRED: { r: 139, g: 0, b: 0 }, //#8B0000
	BROWN: { r: 165, g: 42, b: 42 }, //#A52A2A
	FIREBRICK: { r: 178, g: 34, b: 34 }, //#B22222
	CRIMSON: { r: 220, g: 20, b: 60 }, //#DC143C
	RED: { r: 255, g: 0, b: 0 }, //#FF0000
	TOMATO: { r: 255, g: 99, b: 71 }, //#FF6347
	CORAL: { r: 255, g: 127, b: 80 }, //#FF7F50
	INDIANRED: { r: 205, g: 92, b: 92 }, //#CD5C5C
	LIGHTCORAL: { r: 240, g: 128, b: 128 }, //#F08080
	DARKSALMON: { r: 233, g: 150, b: 122 }, //#E9967A
	SALMON: { r: 250, g: 128, b: 114 }, //#FA8072
	LIGHTSALMON: { r: 255, g: 160, b: 122 }, //#FFA07A
	ORANGERED: { r: 255, g: 69, b: 0 }, //#FF4500
	DARKORANGE: { r: 255, g: 140, b: 0 }, //#FF8C00
	ORANGE: { r: 255, g: 165, b: 0 }, //#FFA500
	GOLD: { r: 255, g: 215, b: 0 }, //#FFD700
	DARKGOLDENROD: { r: 184, g: 134, b: 11 }, //#B8860B
	GOLDENROD: { r: 218, g: 165, b: 32 }, //#DAA520
	PALEGOLDENROD: { r: 238, g: 232, b: 170 }, //#EEE8AA
	DARKKHAKI: { r: 189, g: 183, b: 107 }, //#BDB76B
	KHAKI: { r: 240, g: 230, b: 140 }, //#F0E68C
	OLIVE: { r: 128, g: 128, b: 0 }, //#808000
	YELLOW: { r: 255, g: 255, b: 0 }, //#FFFF00
	YELLOWGREEN: { r: 154, g: 205, b: 50 }, //#9ACD32
	DARKOLIVEGREEN: { r: 85, g: 107, b: 47 }, //#556B2F
	OLIVEDRAB: { r: 107, g: 142, b: 35 }, //#6B8E23
	LAWNGREEN: { r: 124, g: 252, b: 0 }, //#7CFC00
	CHARTREUSE: { r: 127, g: 255, b: 0 }, //#7FFF00
	GREENYELLOW: { r: 173, g: 255, b: 47 }, //#ADFF2F
	DARKGREEN: { r: 0, g: 100, b: 0 }, //#006400
	GREEN: { r: 0, g: 128, b: 0 }, //#008000
	FORESTGREEN: { r: 34, g: 139, b: 34 }, //#228B22
	LIME: { r: 0, g: 255, b: 0 }, //#00FF00
	LIMEGREEN: { r: 50, g: 205, b: 50 }, //#32CD32
	LIGHTGREEN: { r: 144, g: 238, b: 144 }, //#90EE90
	PALEGREEN: { r: 152, g: 251, b: 152 }, //#98FB98
	DARKSEAGREEN: { r: 143, g: 188, b: 143 }, //#8FBC8F
	MEDIUMSPRINGGREEN: { r: 0, g: 250, b: 154 }, //#00FA9A
	SPRINGGREEN: { r: 0, g: 255, b: 127 }, //#00FF7F
	SEAGREEN: { r: 46, g: 139, b: 87 }, //#2E8B57
	MEDIUMAQUAMARINE: { r: 102, g: 205, b: 170 }, //#66CDAA
	MEDIUMSEAGREEN: { r: 60, g: 179, b: 113 }, //#3CB371
	LIGHTSEAGREEN: { r: 32, g: 178, b: 170 }, //#20B2AA
	DARKSLATEGRAY: { r: 47, g: 79, b: 79 }, //#2F4F4F
	TEAL: { r: 0, g: 128, b: 128 }, //#008080
	DARKCYAN: { r: 0, g: 139, b: 139 }, //#008B8B
	AQUA: { r: 0, g: 255, b: 255 }, //#00FFFF
	CYAN: { r: 0, g: 255, b: 255 }, //#00FFFF
	LIGHTCYAN: { r: 224, g: 255, b: 255 }, //#E0FFFF
	DARKTURQUOISE: { r: 0, g: 206, b: 209 }, //#00CED1
	TURQUOISE: { r: 64, g: 224, b: 208 }, //#40E0D0
	MEDIUMTURQUOISE: { r: 72, g: 209, b: 204 }, //#48D1CC
	PALETURQUOISE: { r: 175, g: 238, b: 238 }, //#AFEEEE
	AQUAMARINE: { r: 127, g: 255, b: 212 }, //#7FFFD4
	POWDERBLUE: { r: 176, g: 224, b: 230 }, //#B0E0E6
	CADETBLUE: { r: 95, g: 158, b: 160 }, //#5F9EA0
	STEELBLUE: { r: 70, g: 130, b: 180 }, //#4682B4
	CORNFLOWERBLUE: { r: 100, g: 149, b: 237 }, //#6495ED
	DEEPSKYBLUE: { r: 0, g: 191, b: 255 }, //#00BFFF
	DODGERBLUE: { r: 30, g: 144, b: 255 }, //#1E90FF
	LIGHTBLUE: { r: 173, g: 216, b: 230 }, //#ADD8E6
	SKYBLUE: { r: 135, g: 206, b: 235 }, //#87CEEB
	LIGHTSKYBLUE: { r: 135, g: 206, b: 250 }, //#87CEFA
	MIDNIGHTBLUE: { r: 25, g: 25, b: 112 }, //#191970
	NAVY: { r: 0, g: 0, b: 128 }, //#000080
	DARKBLUE: { r: 0, g: 0, b: 139 }, //#00008B
	MEDIUMBLUE: { r: 0, g: 0, b: 205 }, //#0000CD
	BLUE: { r: 0, g: 0, b: 255 }, //#0000FF
	ROYALBLUE: { r: 65, g: 105, b: 225 }, //#4169E1
	BLUEVIOLET: { r: 138, g: 43, b: 226 }, //#8A2BE2
	INDIGO: { r: 75, g: 0, b: 130 }, //#4B0082
	DARKSLATEBLUE: { r: 72, g: 61, b: 139 }, //#483D8B
	SLATEBLUE: { r: 106, g: 90, b: 205 }, //#6A5ACD
	MEDIUMSLATEBLUE: { r: 123, g: 104, b: 238 }, //#7B68EE
	MEDIUMPURPLE: { r: 147, g: 112, b: 219 }, //#9370DB
	DARKMAGENTA: { r: 139, g: 0, b: 139 }, //#8B008B
	DARKVIOLET: { r: 148, g: 0, b: 211 }, //#9400D3
	DARKORCHID: { r: 153, g: 50, b: 204 }, //#9932CC
	MEDIUMORCHID: { r: 186, g: 85, b: 211 }, //#BA55D3
	PURPLE: { r: 128, g: 0, b: 128 }, //#800080
	THISTLE: { r: 216, g: 191, b: 216 }, //#D8BFD8
	PLUM: { r: 221, g: 160, b: 221 }, //#DDA0DD
	VIOLET: { r: 238, g: 130, b: 238 }, //#EE82EE
	MAGENTA: { r: 255, g: 0, b: 255 }, //#FF00FF
	ORCHID: { r: 218, g: 112, b: 214 }, //#DA70D6
	MEDIUMVIOLETRED: { r: 199, g: 21, b: 133 }, //#C71585
	PALEVIOLETRED: { r: 219, g: 112, b: 147 }, //#DB7093
	DEEPPINK: { r: 255, g: 20, b: 147 }, //#FF1493
	HOTPINK: { r: 255, g: 105, b: 180 }, //#FF69B4
	LIGHTPINK: { r: 255, g: 182, b: 193 }, //#FFB6C1
	PINK: { r: 255, g: 192, b: 203 }, //#FFC0CB
	ANTIQUEWHITE: { r: 250, g: 235, b: 215 }, //#FAEBD7
	BEIGE: { r: 245, g: 245, b: 220 }, //#F5F5DC
	BISQUE: { r: 255, g: 228, b: 196 }, //#FFE4C4
	BLANCHEDALMOND: { r: 255, g: 235, b: 205 }, //#FFEBCD
	WHEAT: { r: 245, g: 222, b: 179 }, //#F5DEB3
	CORNSILK: { r: 255, g: 248, b: 220 }, //#FFF8DC
	LEMONCHIFFON: { r: 255, g: 250, b: 205 }, //#FFFACD
	LIGHTGOLDENRODYELLOW: { r: 250, g: 250, b: 210 }, //#FAFAD2
	LIGHTYELLOW: { r: 255, g: 255, b: 224 }, //#FFFFE0
	SADDLEBROWN: { r: 139, g: 69, b: 19 }, //#8B4513
	SIENNA: { r: 160, g: 82, b: 45 }, //#A0522D
	CHOCOLATE: { r: 210, g: 105, b: 30 }, //#D2691E
	PERU: { r: 205, g: 133, b: 63 }, //#CD853F
	SANDYBROWN: { r: 244, g: 164, b: 96 }, //#F4A460
	BURLYWOOD: { r: 222, g: 184, b: 135 }, //#DEB887
	TAN: { r: 210, g: 180, b: 140 }, //#D2B48C
	ROSYBROWN: { r: 188, g: 143, b: 143 }, //#BC8F8F
	MOCCASIN: { r: 255, g: 228, b: 181 }, //#FFE4B5
	NAVAJOWHITE: { r: 255, g: 222, b: 173 }, //#FFDEAD
	PEACHPUFF: { r: 255, g: 218, b: 185 }, //#FFDAB9
	MISTYROSE: { r: 255, g: 228, b: 225 }, //#FFE4E1
	LAVENDERBLUSH: { r: 255, g: 240, b: 245 }, //#FFF0F5
	LINEN: { r: 250, g: 240, b: 230 }, //#FAF0E6
	OLDLACE: { r: 253, g: 245, b: 230 }, //#FDF5E6
	PAPAYAWHIP: { r: 255, g: 239, b: 213 }, //#FFEFD5
	SEASHELL: { r: 255, g: 245, b: 238 }, //#FFF5EE
	MINTCREAM: { r: 245, g: 255, b: 250 }, //#F5FFFA
	SLATEGRAY: { r: 112, g: 128, b: 144 }, //#708090
	LIGHTSLATEGRAY: { r: 119, g: 136, b: 153 }, //#778899
	LIGHTSTEELBLUE: { r: 176, g: 196, b: 222 }, //#B0C4DE
	LAVENDER: { r: 230, g: 230, b: 250 }, //#E6E6FA
	FLORALWHITE: { r: 255, g: 250, b: 240 }, //#FFFAF0
	ALICEBLUE: { r: 240, g: 248, b: 255 }, //#F0F8FF
	GHOSTWHITE: { r: 248, g: 248, b: 255 }, //#F8F8FF
	HONEYDEW: { r: 240, g: 255, b: 240 }, //#F0FFF0
	IVORY: { r: 255, g: 255, b: 240 }, //#FFFFF0
	AZURE: { r: 240, g: 255, b: 255 }, //#F0FFFF
	SNOW: { r: 255, g: 250, b: 250 }, //#FFFAFA
	BLACK: { r: 0, g: 0, b: 0 }, //#000000
	DIMGRAY: { r: 105, g: 105, b: 105 }, //#696969
	GRAY: { r: 128, g: 128, b: 128 }, //#808080
	DARKGRAY: { r: 169, g: 169, b: 169 }, //#A9A9A9
	SILVER: { r: 192, g: 192, b: 192 }, //#C0C0C0
	LIGHTGRAY: { r: 211, g: 211, b: 211 }, //#D3D3D3
	GAINSBORO: { r: 220, g: 220, b: 220 }, //#DCDCDC
	WHITESMOKE: { r: 245, g: 245, b: 245 }, //#F5F5F5
	WHITE: { r: 255, g: 255, b: 255 } //#FFFFFF
};

const PI_RAINBOW = [
	COLOURS.RED,
	COLOURS.DARKORANGE,
	COLOURS.GOLD,
	COLOURS.GREEN,
	COLOURS.DODGERBLUE,
	{ ...COLOURS.DARKBLUE, brightness: 0.2 },
	{ ...COLOURS.PURPLE, brightness: 0.2 },
	COLOURS.DARKVIOLET
];

module.exports = {
	BASIC_COLOURS: BASIC_COLOURS,
	COLOURS: COLOURS,
	PI_RAINBOW: PI_RAINBOW
};
