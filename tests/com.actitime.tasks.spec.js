import { test,expect } from "@playwright/test";
import ActitimeTaskCreate from "../page-objects/com.actitime.taks";

let data=require("../TestData/com.actitime.tasks.json");
test("Create a New Task",async({page})=>{
    let createNewTask=new ActitimeTaskCreate(page);
    await createNewTask.link(data.link);
    await createNewTask.createNewTask(data.username,data.password,data.customername);
    await expect(page.locator(`//div[text()='Heinz']`)).toBeVisible();
    await page.waitForTimeout(3000);
});