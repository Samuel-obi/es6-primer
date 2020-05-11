import logger from './tools' ;
/*
const addressees = ["John Uzo","Mary Smart","Paul Umoh"]; //array with elements.
addressees.map(addressee => {
    let message = `Dear ${addressee},
    it is my pleasure to inform you that your admission letter is ready for collection`;
    logger(message);
})
*/

const addressees = ["John Uzo","Mary Smart","Paul Umoh"];

addressees.map(
    (addressee) => {
        const message = `
        Dear ${addressee},
        it is my pleasure to infrom you that your admissionn letter us ready for pick up.
        Congratulations!
        
        Regards,
        Admission Officer`

        logger(message);
    }
)