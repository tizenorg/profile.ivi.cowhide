$(function() {
    var library = function() {
        // For readability:
        this.initialized = false;
        this.root = undefined;

        this.initialize = function() {
            if (this.initialized)
                return;

            window.requestFileSystem =
                window.requestFileSystem ||
                window.webkitRequestFileSystem;

            if (window.requestFileSystem === undefined) {
                throw Error("your browser doesn't support file system " +
                            "operations");
            }
        };

        this.load = function() {
            this.initialize()
            if (this.root === undefined) {
                throw Error("root directory is not defined");
            }
        };
    };

    library.prototype = {
        set root(value) { this._root = value; },
        get root() { return this._root; },

        set initialized(value) {this._initialized = value; },
        get initialized() { return this._initialized; }
    };

    window.HoofbeatsLibrary = library;
});
