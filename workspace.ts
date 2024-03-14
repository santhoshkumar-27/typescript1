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
    dummy: string;
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
    dummy: 'adsfasdf',
    getValue() {
        return this.input
    },
    getValue1() {
        return this.input1
    }
};

/**
 * @description we can assign the structure of object with the help of typeof
 */
type DE = typeof de;

/**
 * @description in type we define like a assigning a value to the type
 */
type data2 = {
    input: string;
    getValue(): string;
}


/**
 * @description in type we not able to declare with same identifier and it
 * throws errors
 */

// type data2 = {
//     input: string;
//     getValue(): string;
// }

type data3 = {
    input1: string;
    getValue1(): string;
}

/**
 * @description same like interface key word we can extend the use 'and operator &'
 */
type information = data2 & data3 & {
    dummy: string;
}

const te: information = {
    input1: 'input 1',
    input: 'input',
    dummy: 'aaaaaaaaa',
    getValue() {
        return this.input
    },
    getValue1() {
        return this.input
    }
}

/**
 * @description we can combine Both interface and Type using "And operator &"
 */
type t1 = Data & data2

/**
 * @description we can combine Both interface and Type using "extends"
 */
interface t2 extends  data2 {
    dummy: string;
}

/**
 * @description we are use the t1 combination of the t1 using And operator
 */
const t1d: t1 = {
    dummy: 'string',
    getValue(){
        return this.dummy;
    },
    input: 'string'
}

/**
 * @description we are use the t2 combination of the t2 extends data2 using extend keyword
 */
const t2d: t2 = {
    dummy: 'string',
    getValue(){
        return this.dummy;
    },
    input: 'string'
}