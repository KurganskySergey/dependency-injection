import { Autowire } from '../di';
import { IBaseDashlet } from "../base/base-dashlet";
import { ADashlet } from '../dashlets/ADashlet';

export default class Dashboard {

    @Autowire('ADashlet', { name: 'CoolDashlet' })
    protected coolDashlet: IBaseDashlet;

    @Autowire('ADashlet', { name: 'ABC-Dashlet' })
    protected aDashlet: ADashlet;

    public async testResult(): Promise<void> {
        const txt = await this.coolDashlet.getText('some selector');
        console.log(txt);
    }

    public async testResult2(): Promise<void> {
        const txt = await this.aDashlet.getLabel();
        console.log(txt);
    }
}
