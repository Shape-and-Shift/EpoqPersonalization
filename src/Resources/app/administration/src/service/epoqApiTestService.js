const ApiService = Shopware.Classes.ApiService;
const { Application } = Shopware;

class ApiClient extends ApiService {
    constructor(httpClient, loginService, apiEndpoint = 'epoq-api-test') {
        super(httpClient, loginService, apiEndpoint);
    }

    async check(tenantId) {

        const headers = this.getBasicHeaders({});

        return this.httpClient
            .get(`https://cdn.epoq.de/flow/${tenantId}.js`, null,{
                headers
            })
            .then((response) => {
                return ApiService.handleResponse(response);
            });
    }
}

Application.addServiceProvider('epoqApiTest', (container) => {
    const initContainer = Application.getContainer('init');
    return new ApiClient(initContainer.httpClient, container.loginService);
});
