export enum TagType {
    Paragraph = 'p',
    Header1 = 'h1',
    Header2 = 'h2',
    Header3 = 'h3',
    HorizontalRule = 'hr',
}


export type TagTypeKey =
    | 'Paragraph'
    | 'Header3'
    | 'Header1'
    | 'Header2'
    | 'HorizontalRule'
;

export const TagTypeKeys = Object.keys(TagType) as TagTypeKey[];

export const TagTypeValues = Object.values(TagType);


export function opening(tag: TagType): `<${TagType}>` {
    return TagTypeValues.includes(tag) ? `<${tag}>` : `<${TagType.Paragraph}>`;
}

export function closing(tag: TagType): `</${TagType}>` {
    const openingTag = opening(tag);
    return (openingTag.charAt(0) + '/' + openingTag.slice(1)) as `</${TagType}>`;
}
