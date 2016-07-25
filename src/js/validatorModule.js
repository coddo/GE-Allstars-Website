var validatorModule = function() {
    function isNull(data) {
        return typeof data === 'undefined' || data === "undefined";
    }

    function isNullOrEmpty(data) {
        return typeof data === String && (isNull(data) || data === "");
    }

    function isNullOrWhitespace(data) {
        return typeof data === String && isNullOrEmpty(data.trim());
    }

    return {
        isNull: isNull,
        isNullOrEmpty: isNullOrEmpty,
        isNullOrWhitespace: isNullOrWhitespace
    };
}();
