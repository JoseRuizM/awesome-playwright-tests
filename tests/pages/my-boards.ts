import { Locator, Page, expect } from "@playwright/test";

export class MyBoardsPage {
    readonly page: Page;
    readonly myBoardsTitle: Locator;
    constructor(page: Page) {
        this.page = page;
        this.myBoardsTitle = page.getByText('My Boards');
    }

    async expectLoaded(boardNames: string[]){
        await expect(this.myBoardsTitle).toBeVisible();

        for(const name of boardNames){
            await expect(this.page.getByText(name)).toBeVisible();
        }
    }
    async load(){
        await this.page.goto('http://localhost:3000/');
    }
    async openBoard(boardName: string){
        await this.page.getByText(boardName).click();
    }
}