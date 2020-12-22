import '@abraham/reflection';
import {container, InjectionToken} from 'tsyringe';

/**
 * Inject dependency through property
 *
 * @param targetClass
 * @returns PropertyDecorator
 */
export const inject = (targetClass: InjectionToken): PropertyDecorator => {
    if (!targetClass || targetClass === undefined) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`${targetClass} class is undefined`);
    }

    return (target: any, propertyKey: string | symbol): PropertyDescriptor | undefined => {
        if (!Reflect.deleteProperty(target, propertyKey)) {
            throw new Error(`Could not delete property ${String(propertyKey)} in class ${target.constructor.name}`);
        }

        const options: PropertyDescriptor = {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            value: container.resolve(targetClass)
        };

        if (!Reflect.defineProperty(target, propertyKey, options)) {
            throw new Error(`Could not define new property for ${targetClass.toString()}`);
        }

        return Reflect.getOwnPropertyDescriptor(target, propertyKey);
    };
};
