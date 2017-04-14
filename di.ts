const register = {};

interface IComponentSettings {
    name: string;
    path: string;
}

export const Autowire = (componentName: string, ...componentSettings: any[]) => {
    /*
    * when decorate static props Component will be the constructor it self
    * when decorate field Component will be the prototype
    * Component
    * */
    return (Component, key: string) => {
        if (register[componentName]) {
            Component[key] = new register[componentName].Constructor(...componentSettings);
        } else {
            throw new Error(`Component ${register[componentName]} definition missing`);
        }
    }
};

export const getComponent = Autowire;

export const Component = <T>(Constructor: T): T => {
    if (register[Configuration.scanning.name]) {
        throw Error(
            `Component ${register[Configuration.scanning.name]} was already defined!.
            Check file ${register[Configuration.scanning.name].path}`
        );
    }
    register[Configuration.scanning.name] = Object.assign({}, Configuration.scanning, { Constructor });
    return Constructor;
};

export class Configuration {
    static scanning: IComponentSettings | null;

    constructor(settings: { injectable: { [s: string]: string; } }) {
        for (let componentName of Object.keys(settings.injectable)) {
            // we can store component name in module scope because require is sync method
            Configuration.scanning = {
                name: componentName,
                path: settings.injectable[componentName],
            };
            require(settings.injectable[componentName]);
            Configuration.scanning = null;
        }
    }
}
