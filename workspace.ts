const DDD = {
    heavy: 800,
    light: 100
} as const;


type Shadow = typeof DDD;

type Weightkey = keyof Shadow;

type WeightValue = (typeof DDD)[Weightkey];