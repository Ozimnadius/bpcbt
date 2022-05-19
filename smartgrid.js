const smartgrid = require('smart-grid');

smartgrid('./src/default/css', {
    mobileFirst: false,
    columns: 24,
    offset: "20px",
    outputStyle: "scss",
    container: {
        maxWidth: "1440px",
        fields: "20px",
    },
    breakPoints: {
        xlg: {
            width: "1919.98px",
            fields: "20px",
            maxWidth: "1220px",
        },
        lg: {
            width: "1439.98px",
            fields: "20px",
        },
        md: {
            width: "1023.98px",
            fields: "20px",
        },
        sm: {
            width: "767.98px",
            fields: "15px",
        },
        xs: {
            width: "575.98px",
            fields: "15px",
        }
    },
});