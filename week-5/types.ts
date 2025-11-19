export const types: type[] = [
    {
        language: 'Dart',
        list: ['String', 'bool', 'List', 'Set', 'Map', 'int', 'double', 'num', 'dynamic']
    },
    {
        language: 'Typescript',
        list: ['string', 'boolean', '[] (array)', 'Set', 'Map', 'number', 'number', 'number', 'any']
    },
    {
        language: 'C#',
        list: ['string', 'bool', 'List', 'HashSet', 'Dictionary', 'int', 'double', 'int/double', 'dynamic']
    },
];

export class type {
    language: string;
    list: string[];
}