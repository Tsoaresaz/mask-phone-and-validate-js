/**
 * @author Thiago Soares
 */

const regex = /^(?:\(?\d{2}\)?\s?)\d{4,5}-\d{4}$/;

export const ValidatePhone = phone => {
    console.log('phone validate => ', regex.test(phone));
    return regex.test(phone);
}