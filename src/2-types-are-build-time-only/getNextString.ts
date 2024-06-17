let index = 5;
export function getNextString(): string {
    let returnValue: string = `${index}`;
    if (index % 5 === 1) {
        returnValue = index as unknown as string;
    }
    if (index % 5 === 3) {
        returnValue = null!;
    }
    if (index % 5 === 4) {
        returnValue = (() => index) as unknown as string;
    }
    index += 1;
    return returnValue;
}
