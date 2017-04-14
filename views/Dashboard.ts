import { Autowire } from '../di';
import { IBaseDashlet } from "../base/base-dashlet";

export default class Dashboard {

    @Autowire('ADashlet', { name: 'CoolDashlet' })
    public coolDashlet: IBaseDashlet;

    public async testResult(): Promise<void> {
        const txt = await this.coolDashlet.getText('some selector');
        console.log(txt);
    }
}