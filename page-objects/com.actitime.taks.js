import actiData from "../TestData/com.actitime.tasks.json";
class ActitimeTaskCreate{
    constructor(page){
        this.page=page;
        this.username=page.locator("#username");
        this.password=page.locator("//input[@name='pwd']");
        this.loginBtn=page.locator("//div[text()='Login ']");
        this.taskLink=page.locator("//div[text()='TASKS']/..");
        this.addNewBtn=page.locator("//div[text()='Add New']");
        this.addCustBtn=page.locator("//div[text()='+ New Customer']");
        this.custNameEdit=page.locator("#customerLightBox_nameField");
        this.createCustBtn=page.locator("//span[text()='Create Customer']");
        //const customername=actiData.customername;
        //this.dispCustNameEdit=page.locator(`//div[text()='${customername}']`);
       // this.logoutBtn=page.locator("//a[text()='Logout']");
    }
    async link(link){
        await this.page.goto(link);
    }
    async createNewTask(username,password,customername){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
        await this.taskLink.click();
        await this.addNewBtn.click();
        await this.addCustBtn.click();
        await this.custNameEdit.fill(customername);
        await this.createCustBtn.click();
        //await this.dispCustNameEdit.tobeVisible();
        //await this.page.locator(`//div[text()='${customername}']`).waitFor({state:"visible"});
        //await this.logoutBtn.click();
    }
}
export default ActitimeTaskCreate;