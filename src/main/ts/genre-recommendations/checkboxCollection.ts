type CheckboxInfo = {htmlInputElement: HTMLInputElement, id: string};

export class CheckboxCollection
{
    readonly #checkboxCollection: HTMLCollectionOf<HTMLInputElement>;
    public constructor(htmlInputCollection: NonNullable<HTMLCollectionOf<NonNullable<HTMLInputElement>>>)
    {
        if (htmlInputCollection === undefined || htmlInputCollection === null)
        {
            throw new TypeError(`${new.target.name}: ${htmlInputCollection} HTML input element collection.`);
        }

        for (let index = 0; index < htmlInputCollection.length; ++index)
        {
            const htmlEl = htmlInputCollection.item(index);

            if ( ! (htmlEl instanceof HTMLInputElement))
            {
                throw new TypeError(`${new.target.name}: ${htmlEl === null ? "null" : "non " + HTMLInputElement.name}.`);
            }

            if (htmlEl.type !== "checkbox")
            {
                throw new TypeError(`${new.target.name}: ${HTMLInputElement.name} with non-checkbox type: "${htmlEl.type}"`);
            }
        }

        this.#checkboxCollection = htmlInputCollection;
    }

    public checked(): Readonly<CheckboxInfo>[]
    {
        const htmlInputElementArray: Readonly<CheckboxInfo>[] = [];

        for (let index = 0; index < this.#checkboxCollection.length; ++index)
        {
            const checkBoxHTMLInputElement = this.#checkboxCollection.item(index);

            if (checkBoxHTMLInputElement?.checked === true)
            {
                const checkBoxInputInfo = {htmlInputElement: checkBoxHTMLInputElement, id: checkBoxHTMLInputElement.id};
                htmlInputElementArray.push(checkBoxInputInfo);
            }
        }

        return htmlInputElementArray;
    }

    public unchecked(): Readonly<CheckboxInfo>[]
    {
        const htmlInputElementArray: Readonly<CheckboxInfo>[] = [];

        for (let index = 0; index < this.#checkboxCollection.length; ++index)
        {
            const checkBoxHTMLInputElement = this.#checkboxCollection.item(index);

            if (checkBoxHTMLInputElement?.checked === false)
            {
                const checkBoxInputInfo = {htmlInputElement: checkBoxHTMLInputElement, id: checkBoxHTMLInputElement.id};
                htmlInputElementArray.push(checkBoxInputInfo);
            }
        }

        return htmlInputElementArray;
    }
}

export const checkboxCollection = (htmlInputCollection: HTMLCollectionOf<HTMLInputElement>): CheckboxCollection =>
{
    if (htmlInputCollection === undefined || htmlInputCollection === null)
    {
        throw new TypeError(`${checkboxCollection.name}: ${htmlInputCollection} HTML input element collection.`);
    }

    return new CheckboxCollection(htmlInputCollection);
}

export default checkboxCollection;
