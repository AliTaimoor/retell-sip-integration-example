const phoneNumberEnvMap = {
	'+123456789': {
		RETELL_API_KEY: 'key_xxxxxxxxxxxxx',
		RETELL_TRUNK_NAME: 'XXXXXXX',
		PSTN_TRUNK_NAME: 'XXXXXX',
		RETELL_SIP_CLIENT_USERNAME: 'XXXXXXX',
	},
}

module.exports = function getEnvVariables(phoneNumber) {
	const envVars = phoneNumberEnvMap[phoneNumber]

	if (!envVars) {
		throw new Error(
			`No environment variables found for phone number: ${phoneNumber}`
		)
	}

	const requiredFields = [
		'RETELL_API_KEY',
		'RETELL_TRUNK_NAME',
		'PSTN_TRUNK_NAME',
		'RETELL_SIP_CLIENT_USERNAME',
	]

	for (const field of requiredFields) {
		if (!envVars[field]) {
			throw new Error(
				`Missing required field ${field} for phone number: ${phoneNumber}`
			)
		}
	}

	return envVars
}
