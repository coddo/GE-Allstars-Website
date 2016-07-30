var validatorModule = function() {
    function isNull(data) {
        return typeof data === 'undefined' || data === "undefined" || typeof data === "null" || data === null || data === "null";
    }

    function isNullOrEmpty(data) {
        if (isNull(data)) {
            return true;
        }

        return (typeof data === "string" && data === "") ||
            ((typeof data === "array" || typeof data == "object") && !isNull(data.length) && data.length === 0);
    }

    function isNullOrWhitespace(data) {
        return typeof data === "string" && isNullOrEmpty(data.trim());
    }

    return {
        isNull: isNull,
        isNullOrEmpty: isNullOrEmpty,
        isNullOrWhitespace: isNullOrWhitespace
    };
}();
