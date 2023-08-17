"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../db/models/log");
const DBError_1 = require("../errors/DBError");
class FileService {
    upload(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { name, executingTime, link, memory } = data;
                const newRecord = yield log_1.Record.create({
                    name: name,
                    executingTime: executingTime,
                    memory: memory,
                    link: link,
                });
                return newRecord;
            }
            catch (e) {
                new DBError_1.DBError('create record error', e);
            }
        });
    }
    getRecords() {
        return __awaiter(this, void 0, void 0, function* () {
            const records = yield log_1.Record.findAll();
            return records;
        });
    }
}
module.exports = new FileService();
