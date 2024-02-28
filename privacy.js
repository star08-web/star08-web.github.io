import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0/dist/cookieconsent.umd.js'
CookieConsent.run({

    categories: {
        necessary: {
            enabled: true,
            readOnly: true
        },
        analytics: {}
    },
    guiOptions: {
        consentModal: {
            layout: 'bar',
            flipButtons: false,
            equalWeightButtons: true
        },
        preferencesModal: {
            layout: 'box',
            flipButtons: false,
            equalWeightButtons: true
        }
    },
    language: {
        default: 'en',
        translations: {
            en: {
                consentModal: {
                    title: 'We use cookies',
                    description: 'Our website uses cookies to ensure you get the best experience. You can opt out of some or all cookies by clicking on the buttons below.',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    showPreferencesBtn: 'Manage Individual preferences'
                },
                preferencesModal: {
                    title: 'Manage cookie preferences',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    savePreferencesBtn: 'Accept current selection',
                    closeIconLabel: 'Close modal',
                    sections: [
                        {
                            title: 'Somebody said ... cookies?',
                            description: 'I want one!'
                        },
                        {
                            title: 'Strictly Necessary cookies',
                            description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Performance and Analytics',
                            description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                            linkedCategory: 'analytics'
                        }
                    ]
                }
            }
        }
    }
});