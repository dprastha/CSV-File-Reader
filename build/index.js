"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResultEnum_1 = require("./utils/MatchResultEnum");
var MatchReader_1 = require("./MatchReader");
var reader = new MatchReader_1.MatchReader('csv/football.csv');
reader.read();
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResultEnum_1.MatchResultEnum.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResultEnum_1.MatchResultEnum.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
