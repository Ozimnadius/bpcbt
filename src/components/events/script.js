window.addEventListener('load', function () {
    new Events();
});

class Events {
    constructor() {

        this.events = {
            click: {
                openMenu: this.openMenu,
                closeMenu: this.closeMenu,
                openForm: this.openForm,
                closeForm: this.closeForm,
                scrollTo: this.scrollTo,
            },
            submit: {
                sendForm: this.sendForm
            }
        };

        this.templates = templates;

        this.init();
    }

    init() {

        for (let key in this.events) {
            let items = this.events[key];

            document.querySelector('body').addEventListener(key, (e) => {
                for (let name in items) {
                    let target = e.target.closest(`[data-event="${name}"]`);
                    if (target !== null) {
                        items[name].call(this, e, target)
                    }
                }
            });
        }
    }

    openMenu(e, elem) {
        e.preventDefault();
        console.log('Open menu');
        console.log(this);
        console.log(e);
        console.log(elem);
    }

    closeMenu(e, elem) {
        e.preventDefault();
        console.log('Close menu');
        console.log(this);
        console.log(e);
        console.log(elem);
    }

    openForm(e, elem) {
        e.preventDefault();

        let dataset = elem.dataset;

        this.templates.open(dataset.name);
        let recaptcha  = document.querySelector('.g-recaptcha');
        if (recaptcha) {
            let input = document.querySelector('.form__captcha-input');
            grecaptcha.render(recaptcha, {
                'sitekey': recaptcha.dataset.sitekey,
                'callback' : function(response) {
                    if (response){
                        input.value=response;
                    } else {
                        input.value='';
                    }
                },
                'expired-callback' : function (response){
                    input.value='';
                }
            });
        }
    }

    closeForm(e, elem) {
        e.preventDefault();

        this.templates.close();
    }

    sendForm(e, elem) {
        e.preventDefault();

        fetch(elem.action, {
            method: 'POST',
            body: new FormData(elem)
        }).then(response => response.json()).then((data) => {
            if (data.status){
                this.templates.close();
                this.templates.open(elem.dataset.ok);
            }
        });
    }

    scrollTo(e, elem) {
        e.preventDefault();

        document.querySelector(elem.hash).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

}