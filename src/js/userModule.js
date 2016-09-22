var userModule = function() {
	function getGenericProfilePicture(sex) {
		if (validatorModule.isNullOrEmpty(sex)) {
			return "../../images/unknown.png";
		}

		if (sex === "M") {
			return "../../images/male.png";
		}

		if (sex === "F") {
			return "../../images/female.png";
		}
	}

	return {
		getGenericProfilePicture: getGenericProfilePicture,
	}
}();
