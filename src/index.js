const digitsOnly = /^\d+$/;

//function to mask digits into US phone format
function maskUSPhone (phone) {
    //return null when getting null, undefined, or an object that is not a string
    if (!phone || typeof phone !== 'string') {
        return null;
    }

    // return the untouched value when it contins non-digit chars or when it has a length != 10
    if (digitsOnly.test (phone) === false || phone.length !== 10) {
        return phone;
    }

    // return the masked value
    const areaCode = phone.substring (0, 3);
    const prefix = phone.substring (3, 6);
    const suffix = phone.substring (6, 10);

    return `(${areaCode}) ${prefix}-${suffix}`;
}

export default maskUSPhone;