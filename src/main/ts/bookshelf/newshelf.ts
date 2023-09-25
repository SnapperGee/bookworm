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