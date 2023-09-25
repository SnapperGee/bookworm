export const createNewShelf = (shelfId: string, shelfName: string, colorClass: string): HTMLDivElement => {

    const playlistContainer: HTMLDivElement = document.createElement('div') as HTMLDivElement;
        playlistContainer.classList.add('shelfId', 'flex', 'flex-col', 'justify-center', 'm-5');
        const playlistContainerId = shelfId || ('shelfId' + new Date().getTime());
        playlistContainer.id = playlistContainerId;

    const playlistHeader: HTMLDivElement = document.createElement('div');
        playlistHeader.classList.add(colorClass, 'rounded-lg', 'pb-1', 'w-full', 'flex', 'items-center', 'justify-between');
        const playlistHeaderId = 'header-color-' + new Date().getTime();
        playlistHeader.id = playlistHeaderId;
    
    const playlistName: HTMLHeadingElement = document.createElement('h3');
        playlistName.classList.add('inline-block', 'm-5', 'text-white', 'font-bold', 'text-xl');
        playlistName.textContent = `${shelfName}`;

    const playlistEdit: SVGSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg') as SVGSVGElement;
        playlistEdit.classList.add('edit-list', 'h-6', 'w-6', 'inline-block', 'fill-white', 'cursor-pointer');
        playlistEdit.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        playlistEdit.setAttribute('viewBox', '0 0 24 24');
    const playlistEditId = 'edit-list-' + new Date().getTime();
        playlistEdit.id = playlistEditId;
    const pathEditElement: SVGPathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path') as SVGPathElement;
        pathEditElement.setAttribute('d', 'M16.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-13 13A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l10-10 3-3zM14 7.414l-9 9V19h2.586l9-9L14 7.414zm4 1.172L19.586 7 17 4.414 15.414 6 18 8.586z')
        playlistEdit.appendChild(pathEditElement);

    const playlistBooks: HTMLDivElement = document.createElement('div');
        playlistBooks.classList.add('row-list', 'flex', 'flex-row', 'p-5', 'bg-slate-100', 'rounded-lg', 'pb-1', 'w-full');
        const playlistBooksId = "row-list" + new Date().getTime();
        playlistBooks.id = playlistBooksId;


    playlistContainer.appendChild(playlistHeader);
    playlistHeader.appendChild(playlistName);
    playlistName.appendChild(playlistEdit);
    playlistContainer.appendChild(playlistBooks);

    return playlistContainer;

}