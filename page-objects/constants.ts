export class Constants {
    private emailData: string;
    private passData: string;
    private invalidEmailData: string;
    private invalidPassData: string;
    private searchQueryData: string;

    constructor() {
        this.emailData = 'andrey.qa@ukr.net';
        this.passData = 'secret';
        this.invalidEmailData = 'qa@net';
        this.invalidPassData = '1';
        this.searchQueryData = 'администрация';
    };

    public async validEmail() {
        return await this.emailData;
    };

    public async validPassword() {
        return await this.passData;
    };

    public async invalidEmail() {
        return await this.invalidEmailData;
    };

    public async invalidPassword() {
        return await this.invalidPassData;
    };

    public async searchQuery() {
        return await this.searchQueryData;
    };
};