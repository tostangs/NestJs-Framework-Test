export interface Animal {
    species: Dog|Cat;
    ancestor: Lion|Wolf;
}

export interface Lion {
    name: 'Lion';
}

export interface Wolf {
    name: 'Wolf';
}

export interface Cat {
    name: string;
    age: number;
    breed: string;
}

export interface Dog {
    name: string;
    age; number;
    breed: string;
}
