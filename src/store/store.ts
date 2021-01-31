export interface ProductsItem {
    id: number,
    quantity: number,
    name: string,
    price: number,
    imgUrl: string,
    added?: boolean,
    brand: string,
    launched: string,
    size: string,
    description: string
}

const InitialState: ProductsItem[]= [
    {
    id: 1,
    name: "1 MILLION BY PACO RABANNE FOR MEN EAU DE TOILETTE",
    quantity: 0,
    description: "1 Million Perfume by Paco Rabanne Launched in 2008, Every man wants to look like a million dollars and now, thanks to the fragrance designers of Paco Rabanne, the smell of affluence and style is available for everyone. 1 Million is a rich and heady blend of fine fragrance ingredients; top notes include grapefruit, cinnamon, and spice notes. Middle notes include rose, blonde leather, and blood orange; base notes include amber, white woods, and patchouli.",
    imgUrl: "https://www.theperfumeshop.pk/wp-content/uploads/2019/07/1-million-by-pacco-rabanne-the-perfume-shop.jpg",
    price: 90,
    brand: "Paco Rabanne",
    launched: "2008",
    size: "100ml"  
},
{
    id: 2,
    name: "9PM FOR UNISEX BY AFNAN EDP",
    quantity: 0,
    description: "9pm By Afnan, Enough to immediately awaken your deepest senses! The fresh notes of bergamot and cinnamon transform into orange blossoms growing warm with amber, vanilla, and patchouli. A scent that captures the imagination and soars high! Afnan Perfumes offers an exciting range of scents that are designed to evoke a sense of adventure and culture, and to bridge the divide between the western world and the eastern one. Made with some of France’s finest natural materials and crafted by perfumers who understand how to balance such strong flavors, the perfumery has experienced great success across the globe.",
    imgUrl: "https://www.theperfumeshop.pk/wp-content/uploads/2020/03/9pm-by-afnan-the-perfume-shop-pk.jpg",
    price: 20,
    brand: "Afnan",
    launched: "2019",
    size: "100ml"  
},
{
    id: 3,
    name: "CLASSIC GOLD BY JAGUAR FOR MEN EAU DE TOILETTE",
    description: "Jaguar Classic Gold by Jaguar, Released in 2013, Jaguar Classic Gold is a stylishly fresh perfume for men . Dominique Preyssas is the designer behind this luxury fragrance. The top notes start the experience with a citrus journey of apple, bergamot and lime. The heart notes release a beautiful combination of orange blossom and teak wood. The base notes mellow out with the flavors of patchouli, vanilla and musk. This versatile cologne can be worn during the day or evening and works during a variety of seasons.",
    quantity: 0,
    imgUrl: "https://www.theperfumeshop.pk/wp-content/uploads/2019/06/Jaguar-gold-by-jaguar-the-perfume-shop.jpg",
    price: 30,
    brand: "JAGUAR",
    launched: "2013",
    size: "100ml"  
},
{
    id: 4,
    name: "Jaguar Classic By Jaguar For Men Eau De Toilett",
    description: "Jaguar Classic by Jaguar, Sail away to the Mediterranean with every spritz of the aquatic Jaguar Classic, an exhilarating men’s fragrance . This revitalizing cologne blends citrus, floral and sweet accords for a mouth-watering, sensational aroma that’s perfect for any spring or summer ensemble. Top notes of mandarin orange, sparkling bergamot, relaxing lavender and ripe juniper berry present a fresh and invigorating scent right from the start. Middle notes of exotic lotus, spicy ginger and light orange blossom enhance the atmosphere with their Oriental flair.",
    quantity: 0,
    imgUrl: "https://www.theperfumeshop.pk/wp-content/uploads/2019/06/Jaguar-Blue-The-Perfume-Shop.jpeg",
    price: 26,
    brand: "JAGUAR",
    launched: "2002",
    size: "100ml"  
},
{
    id: 5,
    name: "Men Eau De Toilette",
    quantity: 0,
    description: "Versace Dylan Blue by Versace, Since its inception in July 2016, Versace Pour Homme Dylan Blue has stunned cologne lovers with its aquatic and spicy complexity, which makes for a sophisticated daytime signature fragrance. Top notes of Calabrian bergamot, grapefruit, and fig leaf open up the fragrance, bringing to mind a citrus orchard in the Italian sun. Mid notes of violet leaf, exotic papyrus, earthy patchouli, striking black pepper, and ambroxan add an intriguing complexity to the blend. Finally, this rich fragrance closes with notes of musk, incense, tonka bean, and aromatic saffron, summoning images of a mysterious ancient market. ",
    imgUrl: "https://www.theperfumeshop.pk/wp-content/uploads/2019/07/Dylan-Blue-by-Versace-the-perfume-shop.jpg",
    price: 80,
    brand: "Versace",
    launched: "2016",
    size: "100ml"  
},
{
    id: 6,
    name: "Guess By Marciano For Men Eau De Toilette",
    quantity: 0,
    description: "Guess By Marciano fragrance for women became a big hit when it was introduced in 2007. Two years later, in 2009, Guess by Marciano for Men was launched. This fragrance is aimed towards modern men. This Eau de Toilette is contained in a glass falcon that has a brown bronze shine and a golden board. The golden board is embellished with the name of the perfume and stopper in the same nuances. The fragrance starts off with accentuated aromas of ginger mandarin and ice tonic accords. The base encompasses a combination of woody and spicy notes to derive a hypnotic scent.",
    imgUrl: "https://www.theperfumeshop.pk/wp-content/uploads/2019/08/Guess-Marciano-the-perfume-shop.jpg",
    price: 35,
    brand: "Guess",
    launched: "2009",
    size: "100ml"  
}
]
export {InitialState}