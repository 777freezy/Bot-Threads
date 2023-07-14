"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostWithData = void 0;
var cron = require('node-cron');
var PostWithData = function (dayOfWeeek, hour) {
    var deyWeek = {
        'domingo': '0',
        'segunda': '1',
        'terça': '2',
        'quarta': '3',
        'quinta': '4',
        'sexta': '5',
        'sábado': '6'
    };
    var _a = hour.split(':'), hora = _a[0], minuto = _a[1];
    return "".concat(minuto, " ").concat(hora, " * * ").concat(deyWeek[dayOfWeeek.toLowerCase()] || '*', " ");
};
exports.PostWithData = PostWithData;
