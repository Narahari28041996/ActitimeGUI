import { test } from "@playwright/test";
import ActitimeLogin from "../page-objects/com.actitime.login";

let data=require("../TestData/com.actitime.login.json");
test("Login to Actitime portal",async({page})=>{
    let loginToActitimePortal=new ActitimeLogin(page);
    await loginToActitimePortal.link(data.link);
    await loginToActitimePortal.loginToActitimePortal(data.username,data.password);
});