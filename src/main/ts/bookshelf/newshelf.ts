export const createNewShelf = (shelfName: string, colorClass: string): HTMLDivElement => {

    const playlistContainer: HTMLDivElement = document.createElement('div') as HTMLDivElement;
        playlistContainer.classList.add('flex', 'flex-col', 'justify-center', 'm-5');
        playlistContainer.id = 'shelf-container';

    const playlistHeader: HTMLDivElement = document.createElement('div');
        playlistHeader.classList.add(colorClass, 'rounded-lg', 'pb-1', 'w-full', 'flex', 'items-center', 'justify-between');
    
    const playlistName: HTMLHeadingElement = document.createElement('h3');
        playlistName.classList.add('inline-block', 'm-5', 'text-white', 'font-bold', 'text-xl');
        playlistName.textContent = `${shelfName}`;

    const playlistNavigation: HTMLSpanElement = document.createElement('span');
        playlistNavigation.classList.add('inline-block', 'mr-8');

    const playlistNavLeft: SVGSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg') as SVGSVGElement;
        playlistNavLeft.classList.add('h-6', 'w-6', 'inline-block', 'p-2', 'fill-white', 'cursor-pointer');
        playlistNavLeft.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        playlistNavLeft.setAttribute('viewBox', '-78.5 0 512 512');
    const pathLeftElement: SVGPathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path') as SVGPathElement;
        pathLeftElement.setAttribute('d', 'M257 64L291 98 128 262 291 426 257 460 61 262 257 64Z');
        playlistNavLeft.appendChild(pathLeftElement);

    const playlistNavRight: SVGSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg') as SVGSVGElement;
    playlistNavRight.classList.add('h-6', 'w-6', 'inline-block', 'p-2', 'fill-white', 'cursor-pointer');
    playlistNavRight.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    playlistNavRight.setAttribute('viewBox', '-77 0 512 512');
    const pathRightElement: SVGPathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path') as SVGPathElement;
        pathRightElement.setAttribute('d', 'M98 460L64 426 227 262 64 98 98 64 294 262 98 460Z');
        playlistNavRight.appendChild(pathRightElement);

    const playlistBooks: HTMLDivElement = document.createElement('div');
        playlistBooks.classList.add('bg-slate-100', 'rounded-lg', 'pb-1', 'w-full');

    const playlistContent: HTMLAnchorElement = document.createElement('a');
        playlistContent.textContent = 'Hello World';

    playlistContainer.appendChild(playlistHeader);
    playlistHeader.appendChild(playlistName);
    playlistHeader.appendChild(playlistNavigation);
    playlistNavigation.appendChild(playlistNavLeft);
    playlistNavigation.appendChild(playlistNavRight);
    playlistContainer.appendChild(playlistBooks);
    playlistBooks.appendChild(playlistContent);

    return playlistContainer;

}