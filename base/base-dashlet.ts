export interface IBaseDashlet {
    click(selector: string): Promise<void>;
    doubleClick(selector: string): Promise<void>;
    swipe(selector: string): Promise<void>;
    getText(selector: string): Promise<string>;
}

export abstract class BaseDashlet implements IBaseDashlet {
    public async click(selector: string): Promise<void> {
        // client.click(selector);
    }

    public async doubleClick(selector: string): Promise<void> {
        // client.doubleClick(selector);
    }

    public async swipe(selector: string): Promise<void> {
        // client.swipe(selector);
    }

    public async getText(selector: string): Promise<string> {
        // client.getText(selector);
        return `test text from ${selector} dashlet`;
    }
}