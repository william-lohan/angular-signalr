"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var signalr_tokens_1 = require("./signalr_tokens");
var SignalRService = (function () {
    function SignalRService(connection, errorHandler) {
        var _this = this;
        this.errorHandler = errorHandler;
        this.connection = connection; // https://github.com/angular/angular/issues/12631#issuecomment-269525406
        this.connection.error(function (error) { return _this.errorHandler.handleError(error); });
        // this.registerHubs(['usersOnLine', 'chatHub']);
    }
    Object.defineProperty(SignalRService.prototype, "isConnected", {
        get: function () {
            return this.connection.state <= 1;
        },
        enumerable: true,
        configurable: true
    });
    // private _registerHub(hub: string) {
    //     this._connection.createHubProxy(hub).on('register', () => { });
    // }
    // public registerHubs(hubs: string[]) {
    //     hubs.forEach(hub => this._registerHub(hub));
    // }
    SignalRService.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // switch (this._connection.state) {
                //     case $.signalR.connectionState.connected:
                //         return Observable.of(this._connection);
                //     case $.signalR.connectionState.connecting:
                //     case $.signalR.connectionState.reconnecting:
                //         return this.connect().delay(300);
                //     case $.signalR.connectionState.disconnected:
                //         return Observable.fromPromise(Promise.resolve(this._connection.start())).map(() => this._connection);
                // }
                return [2 /*return*/, Promise.resolve(this.connection.start())];
            });
        });
    };
    SignalRService.prototype.disconnect = function () {
        return this.connection.stop(false, true);
    };
    SignalRService.prototype.setToken = function (token) {
        this.connection.qs = 'Authorization=' + token;
    };
    return SignalRService;
}());
SignalRService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
SignalRService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [signalr_tokens_1.SIGNALR_CONNECTION,] },] },
    { type: core_1.ErrorHandler, },
]; };
exports.SignalRService = SignalRService;
//# sourceMappingURL=signalr.service.js.map