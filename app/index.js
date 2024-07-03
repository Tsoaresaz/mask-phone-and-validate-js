import { ValidatePhone } from './validate/phoneValidate.js';
import { PhoneMask } from './mask/phone.mask.js'

document.addEventListener('DOMContentLoaded', function () {
    const inputPhone = document.querySelector('#phone');
    const spanMessage = document.querySelector('#message');
    const time = 1000;
    let finalySetTimeOut;

    inputPhone.onkeydown = () => {
        clearTimeout(finalySetTimeOut);
        finalySetTimeOut = setTimeout(getValueInput, time);
    }
    
    inputPhone.oninput = function (e) {
        PhoneMask(e);
        // TODO: método depreciado
        // maskPhone(e);
    }

    function getValueInput() {
        const value = inputPhone.value;
        console.log('pegou o valor do input phone: ', value);
        validatePhone(value);
    }

    function validatePhone(phone) {
        const isValide = ValidatePhone(phone);
        applyMessage(isValide)
    }

    function applyMessage(isValide) {
        isValide 
            ? spanMessage.innerHTML = 'formato correto'
            : spanMessage.innerHTML = 'formato inválido';
    }

    /**
     * @deprecated Usar o módulo que aplica a máscara
     * @param {*} phone 
     */
    function maskPhone(phone) {
        let value = phone.target.value.replace(/\D/g, '');
        let formattedValue = '';

        if (value.length > 0) {
            formattedValue = '(' + value.substring(0,2);
        }

        if (value.length > 2) {
            formattedValue += ')' + value.substring(2,6);
        }

        if (value.length > 6) {
            formattedValue += '-' + value.substring(6,11);
        }

        console.log('formattedValue: ', formattedValue);
        phone.target.value = formattedValue;
    }
});