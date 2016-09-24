var displayModule = function() {
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

	function getGenderText(genderSymbol) {
		if (validatorModule.isNullOrEmpty(genderSymbol)) {
			return "Not specified";
		}

		if (genderSymbol == "M") {
			return "Male";
		}

		if (genderSymbol == "F") {
			return "Female";
		}

		return "Not specified";
	}

	return {
		getGenericProfilePicture: getGenericProfilePicture,
		getGenderText: getGenderText,
	}
}();
