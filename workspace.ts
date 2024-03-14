const DDD = {
    heavy: 800,
    light: 100
} as const;


type Shadow = typeof DDD;

type Weightkey = keyof Shadow;

type WeightValue = (Shadow)[Weightkey];

/**
 * @description declaring first interface like object or class structure
 */
interface Data {
    input: string;
    getValue(): string;
}
/**
 * @description we can also redeclare with same name with different property or method
 */
interface Data {
    asdfasdf: string;
}

interface Data1 {
    input1: string;
    getValue1(): string;
}

/**
 * @description we can extends multiple interface into single interface like
 * class extending the Parent
 */
interface Information extends Data, Data1 {
    formatedString: string;
}

const de: Information = {
    formatedString: '',
    input: 'input',
    input1: 'input 1',
    asdfasdf: 'adsfasdf',
    getValue() {
        return this.input
    },
    getValue1() {
        return this.input1
    }
};

