export const createNavbar = (): HTMLDivElement => {

    const headerContainer: HTMLDivElement = document.createElement('nav') as HTMLDivElement;
        headerContainer.classList.add('w-full','z-30','top-0','py-1','lg:py-6','bg-green');
        headerContainer.id = 'header';

    const navBlock: HTMLDivElement = document.createElement('div');
        navBlock.classList.add('w-full', 'container','mx-auto','flex','flex-wrap','items-center', 'justify-between', 'mt-0', 'p-2', 'lg:py-6');

    const brandContainer: HTMLDivElement = document.createElement('div');
        brandContainer.classList.add('pl-4', 'flex', 'items-center')

    const logoImage: HTMLImageElement = document.createElement('img');
        logoImage.classList.add('h-10', 'w-10', 'inline-block');
        logoImage.src = "./resource/img/bookworm-transparent.png"

    const logoBookAnchor: HTMLAnchorElement = document.createElement('a');
    logoBookAnchor.classList.add('text-pink', 'font-bold', 'text-2x1', 'lg:text-4x1');
    logoBookAnchor.textContent = 'Book';

    const logoWormAnchor: HTMLAnchorElement = document.createElement('a');
        logoWormAnchor.classList.add('text-white', 'font-bold', 'text-2x1', 'lg:text-4x1');
        logoWormAnchor.textContent = 'Worm';

    const invisbleBlock: HTMLDivElement = document.createElement('div');
        invisbleBlock.classList.add('w-full', 'lg:flex', 'lg:w-auto', 'mt-2', 'lg:mt-0', 'p-4', 'lg:p-0');
        invisbleBlock.id = 'nav-content';

    const navList: HTMLUListElement = document.createElement('ul');
        navList.classList.add('list-reset', 'lg:flex', 'justify-end', 'flex-1', 'items-center');

    const navLinks: HTMLLIElement = document.createElement('li');
        navLinks.classList.add('mr-3');

    const home: HTMLAnchorElement = document.createElement('a');
        home.classList.add('inline-block', 'text-white', 'p-4')
        home.href = './index.html';
        home.textContent = 'Home';

    const preferences: HTMLAnchorElement = document.createElement('a');
        preferences.classList.add('inline-block', 'text-white', 'p-4');
        preferences.href = './preferences.html';
        preferences.textContent = 'Preferences';

    const recommendations: HTMLAnchorElement = document.createElement('a');
        recommendations.classList.add('inline-block', 'text-white', 'p-4');
        recommendations.href = './recommendations.html';
        recommendations.textContent = 'Recommendations';

    const readingList: HTMLAnchorElement = document.createElement('a');
        readingList.classList.add('inline-block', 'text-white', 'p-4');
        readingList.href = './readinglist.html';
        readingList.textContent = 'Reading List';

    headerContainer.appendChild(navBlock);
    navBlock.appendChild(brandContainer);
    brandContainer.appendChild(logoImage);
    brandContainer.appendChild(logoBookAnchor); 
    brandContainer.appendChild(logoWormAnchor);
    navBlock.appendChild(invisbleBlock);
    navBlock.appendChild(navList);
    navList.appendChild(navLinks);
    navLinks.appendChild(home);
    navLinks.appendChild(preferences);
    navLinks.appendChild(recommendations);
    navLinks.appendChild(readingList);

return headerContainer;
}
