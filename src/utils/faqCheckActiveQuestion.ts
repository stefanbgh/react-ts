import { IFaqCheckActiveQuestion } from "../ts/interfaces/IFaq/IFaqCheckActiveQuestion";

export const faqCheckActiveQuestion: Function = (currentActive: number, faqId: number, darkTheme: boolean): IFaqCheckActiveQuestion => {
    if (currentActive === faqId) {
        if (darkTheme) {
            return {
                faqQuestion: "faq__question-active-dark",
                faqTitle: "faq__title-active-dark",
                faqIcon: "faq__icon-dark"
            }
        };

        return {
            faqQuestion: "faq__question-active",
            faqTitle: "faq__title-active",
            faqIcon: "faq__icon"
        };
    };

    if (darkTheme) {
        return {
            faqQuestion: "faq__question-inactive-dark",
            faqTitle: "faq__title-inactive-dark",
            faqIcon: ""
        };
    };
    
    return {
        faqQuestion: "faq__question-inactive",
        faqTitle: "faq__title-inactive",
        faqIcon: ""
    };
};