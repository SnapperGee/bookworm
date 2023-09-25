import noImgAvailable from "../../resource/img/no_image_available.svg";
import { CoverImgSize, OpenLibDoc, createOpenLibBookCoverImgUrl } from "./open-lib-api";
import { addIconsToBookCard } from './bookActions';

export function createBookResultCard(openLibDoc: OpenLibDoc): HTMLDivElement;
export function createBookResultCard(title: string, coverId?: number, author?: string, subjects?: string[]): HTMLDivElement;
export function createBookResultCard(titleStringOrOpenLibDoc: string | OpenLibDoc, coverId?: number, author?: string, subjects?: string[]): HTMLDivElement
{
    if (typeof titleStringOrOpenLibDoc !== "string")
    {
        return createBookResultCard( titleStringOrOpenLibDoc.title,
                                     titleStringOrOpenLibDoc.cover_i,
                                     titleStringOrOpenLibDoc.author_name[0],
                                     titleStringOrOpenLibDoc.subject );
    }

    if (author === undefined || author === null)
    {
        throw new TypeError(`${createBookResultCard.name}: ${author} author string.`);
    }

    if (subjects === undefined || subjects === null)
    {
        throw new TypeError(`${createBookResultCard.name}: ${subjects} subjects string array.`);
    }

    const titlePElement = document.createElement("p");
    titlePElement.classList.add("underline", "text-lg", "text-center");
    titlePElement.textContent = titleStringOrOpenLibDoc;

    const coverImgUrl = coverId ? createOpenLibBookCoverImgUrl(coverId, CoverImgSize.MEDIUM) : noImgAvailable;

    const coverImgElement = document.createElement("img");
    coverImgElement.classList.add("mx-auto", "my-2");
    coverImgElement.src = coverImgUrl;
    coverImgElement.alt = coverId ? `${titleStringOrOpenLibDoc} by ${author} cover` : "No cover image available";

    const authorPElement = document.createElement("p");
    authorPElement.classList.add("text-center");
    authorPElement.textContent = "by " + author;

    const subjectsTextPElement = document.createElement("p");
    subjectsTextPElement.classList.add("font-semibold", "mt-3");
    subjectsTextPElement.innerHTML = 'Subjects<hr class="h-px border-0 bg-gray-400">';

    const subjectsPElement = document.createElement("p");
    subjectsPElement.style.height = "7rem";
    subjectsPElement.style.overflowY = "auto";
    subjectsPElement.textContent = subjects.join(", ");

    const cardDivElement = document.createElement("div");
    cardDivElement.classList.add("p-2", "cursor-pointer", "border", "border-solid", "border-gray-400");

    cardDivElement.appendChild(titlePElement);
    cardDivElement.appendChild(coverImgElement);
    cardDivElement.appendChild(authorPElement);
    cardDivElement.appendChild(subjectsTextPElement);
    cardDivElement.appendChild(subjectsPElement);

    return cardDivElement;
}

export default createBookResultCard;
