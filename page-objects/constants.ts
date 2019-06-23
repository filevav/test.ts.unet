export class Constants {
    private _validEmail: string;
    private _validPass: string;
    private _invalidEmail: string;
    private _invalidPass: string;
    private _searchQuery: string;

    constructor() {
        this._validEmail = 'andrey.qa@ukr.net';
        this._validPass = 'secret';
        this._invalidEmail = 'qa@net';
        this._invalidPass = '1';
        this._searchQuery = 'администрация';
    };

    public async validEmail() {
        return await this._validEmail;
    };

    public async validPassword() {
        return await this._validPass;
    };

    public async invalidEmail() {
        return await this._invalidEmail;
    };

    public async invalidPassword() {
        return await this._invalidPass;
    };

    public async searchQuery() {
        return await this._searchQuery;
    };
};