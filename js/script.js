// Данные по товарам
const goods = [
    {
        id: 1, 
        category: 'Видеокарты', 
        title: 'MSI AMD Radeon RX 550 AERO ITX OC [RX 550 AERO ITX 4G OC]', 
        price: 8500, 
        currency: 'руб.',
        img: 'radeonrx550.webp',
    }, 
    {
        id: 2, 
        category: 'Видеокарты', 
        title: 'KFA2 GeForce GTX 1050 Ti 1-Click OC [50IQH8DSQ31K]', 
        price: 14000, 
        currency: 'руб.',
        img: 'KFA2_1050.webp',
    }, 
    {
        id: 3, 
        category: 'Видеокарты', 
        title: 'PowerColor AMD Radeon RX 6500 XT ITX [AXRX 6500XT 4GBD6-DH]', 
        price: 16000, 
        currency: 'руб.',
        img: 'RADEONRX6500XT.webp',
    },
    {
        id: 4, 
        category: 'Видеокарты', 
        title: 'MSI GeForce GTX 1660 SUPER Gaming [GTX 1660 SUPER GAMING]', 
        price: 37800, 
        currency: 'руб.',
        img: 'MSI_GeForce1660.webp',
    },
    {
        id: 5, 
        category: 'Твердотельные накопители', 
        title: '240 ГБ 2.5" SATA накопитель HP S650 [345M8AA#ABB]', 
        price: 2799, 
        currency: 'руб.',
        img: 'hps650.webp',
    }, 
    {
        id: 6, 
        category: 'Твердотельные накопители', 
        title: '500 ГБ 2.5" SATA накопитель Samsung 870 EVO [MZ-77E500B/EU]', 
        price: 10000, 
        currency: 'руб.',
        img: 'samsung_evo870.webp',
    }, 
    {
        id: 7, 
        category: 'SSD M.2 накопители', 
        title: '2000 ГБ SSD M.2 накопитель WD Black SN850 [WDS200T1X0E]', 
        price: 40000, 
        currency: 'руб.',
        img: 'wd850sn.webp',
    },
    // Тестовые карточки товаров
    {
        id: 8, 
        category: 'Тестовая', 
        title: 'Позиция без изображения', 
        currency: 'руб.',
    },
    {
        id: 9, 
        category: 'Тестовая',  
        currency: 'руб.',
    },   
]   


// Рендеринг данных в html
const renderGoodsItem = ({id, category='не определена', title='не добавлен', price=0, currency, img='default.jpg'}) => {
    return `
        <div class="item">
            <div class="img_block">
                <img src="img/${img}" alt="${title}">   
            </div>
            <span class="category_name">${category}</span>
            <a href="#" class="title_for_item" id=${id}>${title}</a>
            <span class="price_item">${new Intl.NumberFormat("ru-RU", {
                minimumFractionDigits : 0
            }).format(price)} ${currency}</span>
            <button class="btn btn_item" id=${id}>В корзину</button>
        </div>
    `;
} ;

// Собираем данныe для вставки в DOM
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item));
    // join позволяет избваиться от запятой
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
};

renderGoodsList(goods);
