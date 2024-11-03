// // navComponent.js
// export const navData = {
//     logoSrc: 'assets/svg/full-logo.svg',
//     links: [
//         { href: 'index.html', text: 'Home' },
//         { href: 'about.html', text: 'About' },
//         {
//             text: 'Services▿',
//             dropdown: [
//                 { href: 'life-activation.html', text: 'Life Activation' },
//                 { href: 'healing-modalities.html', text: 'Healing Modalties™' },
//                 { href: 'reiki.html', text: 'Reiki' },
//                 { href: 'psych-k.html', text: 'PSYCH-K®' },
//             ],
//         },
//         { href: 'index.html#forms', text: 'Get In Touch', isButton: true },
//     ],
//     burgerMenuSrc: 'assets/svg/burger-menu.svg',
// };

// export function createNav(navData) {
//     const nav = document.createElement('nav');
//     nav.classList.add('holistic-nav');

//     const maxWidthDiv = document.createElement('div');
//     maxWidthDiv.classList.add('max-width');
    
//     const flexDiv = document.createElement('div');
//     flexDiv.classList.add('flex');
    
//     const logoLink = document.createElement('a');
//     logoLink.href = 'index.html';
//     logoLink.classList.add('nav-logo');
    
//     const logoImg = document.createElement('img');
//     logoImg.src = navData.logoSrc;
//     logoImg.alt = 'Business Logo';
//     logoLink.appendChild(logoImg);
    
//     flexDiv.appendChild(logoLink);
    
//     const linkBoxDiv = document.createElement('div');
//     linkBoxDiv.classList.add('link-box');
    
//     navData.links.forEach(link => {
//         if (link.dropdown) {
//             const dropdownDiv = document.createElement('div');
//             dropdownDiv.classList.add('links', 'link-list');

//             const span = document.createElement('span');
//             span.classList.add('dropdown');
//             span.textContent = link.text;
            
//             const ul = document.createElement('ul');
//             ul.classList.add('dropdown-menu');
            
//             link.dropdown.forEach(item => {
//                 const li = document.createElement('li');
//                 const a = document.createElement('a');
//                 a.href = item.href;
//                 a.classList.add('links');
//                 a.textContent = item.text;
//                 li.appendChild(a);
//                 ul.appendChild(li);
//             });
            
//             dropdownDiv.appendChild(span);
//             dropdownDiv.appendChild(ul);
//             linkBoxDiv.appendChild(dropdownDiv);
//         } else {
//             const a = document.createElement('a');
//             a.href = link.href;
//             a.classList.add('links');
//             if (link.isButton) a.classList.add('btn', 'btn--primary');
//             a.textContent = link.text;
//             linkBoxDiv.appendChild(a);
//         }
//     });
    
//     flexDiv.appendChild(linkBoxDiv);
    
//     const burgerMenuFigure = document.createElement('figure');
//     burgerMenuFigure.classList.add('burger-menu');
    
//     const burgerMenuImg = document.createElement('img');
//     burgerMenuImg.src = navData.burgerMenuSrc;
//     burgerMenuImg.alt = 'Burger Menu';
//     burgerMenuFigure.appendChild(burgerMenuImg);
    
//     flexDiv.appendChild(burgerMenuFigure);
    
//     maxWidthDiv.appendChild(flexDiv);
//     nav.appendChild(maxWidthDiv);
    
//     return nav;
// }


// footerComponent.js
// export const footerData = {
//     logoSrc: 'assets/svg/full-logo.svg',
//     logoSloganSrc: 'assets/svg/footer-logo-slogan.svg',
//     links: [
//         { href: 'index.html', text: 'Home' },
//         { href: 'about.html', text: 'About' },
//         { href: 'life-activation.html', text: 'Life Activation' },
//         { href: 'healing-modalities.html', text: 'Healing Modalties™' },
//         { href: 'reiki.html', text: 'Reiki' },
//         { href: 'psych-k.html', text: 'PSYCH-K®' },
//     ],
//     copyrightText: '© 2024 Holistic Transcendence. All rights reserved.',
//     poweredByHref: 'https://vexel.co.za/',
//     poweredByText: 'Powered By Vexel',
// };

// export function createFooter(footerData) {
//     const footer = document.createElement('footer');
//     footer.classList.add('holistic-footer');

//     const maxWidthDiv = document.createElement('div');
//     maxWidthDiv.classList.add('max-width');
    
//     const flexDiv1 = document.createElement('div');
//     flexDiv1.classList.add('flex');

//     const leftMarginDiv = document.createElement('div');
//     leftMarginDiv.classList.add('left-margin');

//     const logoFigure = document.createElement('figure');
//     logoFigure.classList.add('img-box');
//     const logoImg = document.createElement('img');
//     logoImg.src = footerData.logoSrc;
//     logoImg.alt = 'footer logo';
//     logoFigure.appendChild(logoImg);
//     leftMarginDiv.appendChild(logoFigure);

//     const sloganFigure = document.createElement('figure');
//     sloganFigure.classList.add('img-box');
//     const sloganImg = document.createElement('img');
//     sloganImg.src = footerData.logoSloganSrc;
//     sloganImg.alt = 'footer logo slogan';
//     sloganFigure.appendChild(sloganImg);
//     leftMarginDiv.appendChild(sloganFigure);

//     flexDiv1.appendChild(leftMarginDiv);

//     const rightMarginDiv = document.createElement('div');
//     rightMarginDiv.classList.add('right-margin');

//     footerData.links.forEach(link => {
//         const a = document.createElement('a');
//         a.href = link.href;
//         a.classList.add('links');
//         a.textContent = link.text;
//         rightMarginDiv.appendChild(a);
//     });

//     flexDiv1.appendChild(rightMarginDiv);
//     maxWidthDiv.appendChild(flexDiv1);

//     const flexDiv2 = document.createElement('div');
//     flexDiv2.classList.add('flex');

//     const copyrightText = document.createElement('p');
//     copyrightText.textContent = footerData.copyrightText;
//     flexDiv2.appendChild(copyrightText);

//     const poweredByLink = document.createElement('a');
//     poweredByLink.href = footerData.poweredByHref;
//     poweredByLink.textContent = footerData.poweredByText;
//     flexDiv2.appendChild(poweredByLink);

//     maxWidthDiv.appendChild(flexDiv2);
//     footer.appendChild(maxWidthDiv);

//     return footer;
// }
