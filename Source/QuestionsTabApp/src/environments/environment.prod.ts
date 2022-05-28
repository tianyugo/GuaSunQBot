export const environment = {
    production: false,
    apiBaseUrl: "https://guasunqbot.azurewebsites.net/api/Request/",
    selfUrl: "https://guasunqbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "ea41b0cb-48e1-40f7-bdf5-711f5e071724",
        clientId: "fd303888-96b7-49f4-9139-c6b9db6ac7bf",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
