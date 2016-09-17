var validatorModule = function() {
    var urlRegex = "https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,}";

    function isNull(data) {
        return typeof data === 'undefined' || data === "undefined" || typeof data === "null" || data === null || data === "null";
    }

    function isNullOrEmpty(data) {
        if (isNull(data)) {
            return true;
        }

        return (typeof data === "string" && data.trim() === "") ||
            ((typeof data === "array" || typeof data == "object") && !isNull(data.length) && data.length === 0);
    }

    function isUrlValid(link) {
        if (isNullOrEmpty(link)) {
            return false;
        }

        var regex = new RegExp(urlRegex);
        return regex.test(link);
    }

    return {
        isNull: isNull,
        isNullOrEmpty: isNullOrEmpty,
        isUrlValid: isUrlValid
    };
}();
