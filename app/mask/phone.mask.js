/**
 * @description Informar o ID do input de telefone que terá a mascara
 * @param {*} elementId 
 */
export const PhoneMask = (element) => {


    let value = element.target.value.replace(/\D/g, '');
    let formattedValue = '';

    if (value.length > 0) {
        formattedValue = '(' + value.substring(0, 2);
    }

    if (value.length > 2) {
        formattedValue += ')' + value.substring(2, 6);
    }

    if (value.length > 6) {
        formattedValue += '-' + value.substring(6, 11);
    }

    console.log('formattedValue: ', formattedValue);
    element.target.value = formattedValue;
}