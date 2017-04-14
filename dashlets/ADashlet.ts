import { BaseDashlet, IBaseDashlet } from '../base/base-dashlet';
import { Component } from '../di';

@Component
export class ADashlet extends BaseDashlet implements IBaseDashlet {
    public selector: string;

    constructor(settings: { name: string; }) {
        super();
        this.selector = settings.name;
    }

    public async getName() {
        return this.getText(this.selector);
    }

    public async getLabel() {
        return this.getText(this.selector);
    }
}