class ActitimeLogin{
    constructor(page){
        this.page=page;
        this.username=page.locator("#username");
        this.password=page.locator("//input[@name='pwd']");
        this.loginBtn=page.locator("//div[text()='Login ']");
    }
    async link(link){
        await this.page.goto(link);
    }
    async loginToActitimePortal(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }
}
export default ActitimeLogin;