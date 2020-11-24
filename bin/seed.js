const mongoose = require('mongoose')
const Celebration = require('./../models/Celebration.model')

const dbtitle = 'Celebrations'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useUnifiedTopology: true, useNewUrlParser: true })

const celebrations = [
    {
        name: 'Christmas',
        date: 'From around December the 22th to around January the 8th (see "country")',
        description: 'The celebrations of winter are one of the most global and well-know traditional celebrations of the years. Although this festivity have a long christian church-related history, they origins seems to laid in pagan traditions and the celebration of the Winter Solstice. Nowadays is considered an all-family festivity, being the most common traits the Christmas tree, the bigs reunions the nigth fo the 25th o December to share a dinner and the exchange or giving of presents. The most famous figure related with Christmas is Santa Claus (a. k. a. Sinderklass, Papá Noel or Saint Nicholas), but in catholic countries the traditional are the Three Wise Men (Melchor, Gaspar and Balthasar).',
        traditions: 'Family meeting and dinner the 25th, singing carols, exchanging presents, sending cards.',
        country: ['Angola, Argentina, Armenia, Australia, Austria, Bangladesh, Belarus, Belgium, Bolivia, Botswana, Brazil, Bulgaria, Canada, Chile, China, Colombia, Costa Rica, Croatia, Cuba, Czechia / Czech Rep., DR Congo, Denmark, Egypt, Estonia, Ethiopia, Falkland Islands, Finland, France, Georgia, Germany, Ghana, Greece, Greenland, Guatemala, Haiti, Hong Kong, Hungary, Iceland, India, Indonesia, Ireland, Israel, Italy, Jamaica, Japan, Kazakhstan, Kenya, Latvia, Lebanon, Lithuania, Madagascar, Mali, Malta, Mexico, Montenegro, Namibia, The Netherlands, New Zealand, Nigeria, North Macedonia, Norway, Pakistan, The Palestinian Territories, Peru, Philippines, Poland, Portugal, Puerto Rico, Romania, Russia, Serbia, Singapore, Slovakia, South Africa, South Korea, Spain, Sri Lanka, Sweden, Switzerland, Taiwan, Trinidad and Tobago, UK, Ukraine, USA, Venezuela, Vietnam, Zambia, Zimbabwe'],
        links: ["https://www.whychristmas.com/"],
        image: "String",

    },
    {
        name: 'Halloween',
        date: 'October the 31th',
        description: 'For sure the most famous memeber of the "Festival of the Dead" family of celebrations, All Hallows Eve (from the name "Halloween" evolves) or the Nigth of Jack O´Lantern, this festivity is as much well-know as Christmas and, like Christmas, have a pagan origin. The tradition of this day started with the ancient festival of Samhain, the night when, according to the ancient ones, the gates between worlds are open and the souls of the death, the misterious fae and other creatures can come and visit the living mortal realm. The Cristians turn in into the All Hollows Eve, the night before the day the livings should go to the cementery to pay respect to their dead beloved ones. Is a nigth full of costumes, sweets, candles and spooky fun.',
        traditions: 'Dressing with costumes, gift candies and other treats to kids, candles, nigth meetings.',
        country: ['Australia, Austria, Belgium, Canada, Czechia / Czech Rep., France, Germany, Greece, Hong Kong, Ireland, Italy, Japan, New Zealand, Philippines, Poland, Romania, Russia, Serbia, Singapore, Spain, Sweden, Switzerland, UK, USA.'],
        links: ["https://en.wikipedia.org/wiki/Geography_of_Halloween"],
        image: "String",

    },
    {
        name: 'Easter',
        date: 'Between March and April (see "country")',
        description: 'Related to the ancient pagan traditions of Ostara, Easter is, despite sayed relation, one of the biggest and most important cristian festivities. It is also called Pascha or Pascua, and in catholic Christiany, the main period of the celebration is the Holy Week or "Semana Santa" (the common name for Easter in the spanish-speaking countries). It cmnmemorates the resurrection of Jesus, his crucifxion and Passion. Nowadays, some of the pagan-origin tradutions like the searching of eggs and the Bunny (or Hen) that create the eggs, are very popular, specially among kids.',
        traditions: 'Ritual representations and processions, decorating eggs, searching of eggs.',
        country: ['Andorra, Anguilla, Angola, Antigua and Barbuda, Argentina, Armenia, Aruba, Australia, Austria, Bahamas, Barbados, Belarus, Belgium, Belize, Benin, Bolivia, Botswana, Bosnia and Hezergovina, Burkina Faso, Brazil, Bulgaria, Canada, Central African Republic, Chad, Chile, Colombia, Costa Rica, Croatia, Cuba, Czechia / Czech Rep., DR Congo, Denmark, Dominica, Egypt (coptics), Estonia, Ethiopia, Faroe Islands, Fiji, Finland, France, Gabon, Gambia, Georgia, Germany, Ghana, Greece, Greenland, Guatemala, Guinea, Guyana, Haiti, Hong Kong, Hungary, Iceland, Ireland, Italy, Ivory Coast, Jamaica, Kenya, Latvia, Lebanon, Lithuania, Macau, Madagascar, Mali, Malta, Mexico, Montenegro, Namibia, The Netherlands, New Zealand, Nigeria, North Macedonia, Norway, Papua New Guinea, Peru, Philippines, Poland, Portugal, Puerto Rico, Romania, Russia, Senegal, Serbia, Slovakia, Slovenia, South Africa, South Sudan, Spain, Sweden, Switzerland, Tanzania, Trinidad and Tobago, UK, Ukraine, Uganda, Venezuela, Zambia, Zimbabwe'],
        links: ["https://en.wikipedia.org/wiki/Easter_traditions"],
        image: "String",

    },
    {
        name: 'Carnival',
        date: 'Between February and March (see "country")',
        description: 'Time of satyre, costumes, feasts, dance, music and joy of life, the Carnival origin is imbrincated with the Lent and the Easter. It was a way to party-hard before a long period of fasting, spiritual retirement and sobriety. A reversinglroles celebration when the people was allowed to be, for one day, a different person with a different status. Although the freedom of speech and individual freedom advances in moderns societys lake less important this feature of the celebration, it is still a big worldwide celebration with a passion for costumes and outrages. Brazil holds the crown of the biggest Carnivals, but Venice is still the well-know craddle of masquerades and the venicean Carnival have fame far and beyond. aAd dont forget the infamous Mardi Gras of New Orleans!',
        traditions: 'Costumes, costume parties, parades, feast, foods, masquerades, balls, reversing roles.',
        country: ['Albania, Angola, Argentina, Australia, Belgium, Bolivia, Brazil, Bulgaria, Canada, Cape Verde, Chile, China, Colombia, Costa Rica, Croatia, Cuba, Czechia / Czech Rep., Denmark,Falkland Islands, France, Germany, Ghana, Greece, Guatemala, Haiti, Hong Kong, Hungary, India, Indonesia, Israel, Italy, Jamaica, Kenya, Latvia, Lithuania, Malta, Mexico, The Netherlands, Nigeria, Peru, Poland, Portugal, Puerto Rico, Russia, Slovenia, South Africa, South Korea, Spain, Switzerland, Trinidad and Tobago, UK, Ukraine, USA, Venezuela, Zimbabwe'],
        links: ["https://www.carnivaland.net/"],
        image: "String",

    },
    {
        name: 'Lantern Festival',
        date: 'The 15th of the first lunar month (around February or March, acording to the western calendar)',
        description: 'A very, veeeery ancient festival that started in the III century as a way to pay respect to Budha. Nowadays is a big, familiar celebration where the people create beautiful paper lanterns with pieces of paper attached. In this papers are riddles for anyone who wants to try to solve it. If you have the solution, you must tell it to the owner of the lantern, and they will awarded for your wisdom with a small gift!',
        traditions: 'Create and decorate paper lanterns, solving riddles, practicing divination, eat yuanxiao, folkloric dances.',
        country: ['China'],
        links: ["https://en.wikipedia.org/wiki/Lantern_Festival"],
        image: "String",

    },
    {
        name: 'Mwaka Kogwa',
        date: 'July the 23th-24th.',
        description: 'This ancient celebration have an origin in zoroastrism. Is the Shirazi or Persian New Year celebration, and have it core in the village of Makunduchi. One of the most significant activities of this festival is the battle with banna sticks performed by the men, while the women put their best clothes and sing and dance, making fun of the men. In the end, a hut is set in fire and the smoke is used to divinating the next year ways. No festival is complete without a feast, and zanzibaris know it!',
        traditions: 'Create and decorate paper lanterns, solving riddles, practicing divination, eat yuanxiao, folkloric dances.',
        country: ['Tanzania (semi-autonomous region of Zanzibar)'],
        links: ["https://www.tanzaniatourism.go.tz/en/things-to-do/mwaka-kogwa-festival/P30"],
        image: "String",

    },
    {
        name: 'Inti Raymi',
        date: 'June the 22th-24th.',
        description: 'Direct from ancient incas, comes the Wawa Inti Raymi, the Celebration of the Sun. It was, and still is, a festival to celebrate the Winter Solstice (because in the South Hemisphere, June is a winter month). Nowadays the religious tone of the festival is minimum, but is a beautyfil representation of the ancient ceremony, with chant, dances and colourful clothes. Best place for it? Cuzco!',
        traditions: 'iAdoration of the Sun, dancing, singing.',
        country: ['Perú, ecuador, Bolivia'],
        links: ["https://en.wikipedia.org/wiki/Inti_Raymi"],
        image: "String",

    },
    {
        name: 'Mekel',
        date: 'September the 27th.',
        description: 'A christian celebration of the Ethiopian and Eritrean Orthodox Faith who commemorates the discover of the True Cross os Jesus. It is said that it was Saint Helena, Roman empress of ancient times, the one who found it thanks to a revelation dream and the smoke of a bonefire. This is represented today by the Demera, a largue bonfire and central piece of the celebrations of Meskel. If you are tired of typical catholic processions, this could be a good chance to discover another face of the faith!',
        traditions: 'Parties, bonfires, fireworks, paint cross figures in the forehead with charcoal of the Demera.',
        country: ['Ethiopia, Eritrea'],
        links: ["https://en.wikipedia.org/wiki/Meskel"],
        image: "String",

    },
    {
        name: 'Hinamatsuri',
        date: 'March the 3th.',
        description: 'The festival of the dolls, with their sumptuous altars! This celebration takes place all over Japan and is also knowed as The Festival of the Girls, because they are the protagonists, with a lot of activities specially prepared for their entertaiment. The Hina dolls imitates the ancient Imperial Hein Court and some of them are exquisite pieces of arts. Not forget to use a beautiful kimono!',
        traditions: 'Parties, bonfires, fireworks, paint cross figures in the forehead with charcoal of the Demera.',
        country: ['Japan'],
        links: ["https://www.nippon.com/en/features/jg00031/"],
        image: "String",

    },
    {
        name: 'Saint Patrick`s Day',
        date: 'March the 17th.',
        description: 'The big Irish day, the exhaltation of the iris spirit and traditions and, as everybody wispers, the day of driking Guiness like there is no tomorrow. Although it commemorates the death of a saint, and have a strong catholic origin, thies festival have turned into a big pary full of shamrocks, green color, beer and celtic music. Big parades are celebration in Ireland, UK and USA, and other "celtic" regions like Bretagne in France, Galicia in Spain and the big colonies of irish descent in Latin América pay their respects to their cousins by shading in green some emblematic monuments. Put yourself in drink and sing with me!',
        traditions: 'Parties, bonfires, fireworks, paint cross figures in the forehead with charcoal of the Demera.',
        country: ['Ireland, UK, USA'],
        links: ["https://www.britannica.com/topic/Saint-Patricks-Day"],
        image: "String",

    },
    {
        name: 'Holi',
        date: 'A day of March (variable).',
        description: 'The festival of the colours, love and spring in India. It have it origin in ancient legends of arrogant kings, faithfull princes, evil aunt, shy deities and more. Quite the stories! But I warn you: one of the mains themes of the festival is paiting the other with any (unharming) methods you could think. So, better no use your fancy clothes that day!',
        traditions: 'Bonfires, colour "wars", forgiving other, singing, dancing.',
        country: ['India'],
        links: ["https://www.holifestival.org/"],
        image: "String",

    },
    {
        name: 'The Gerewol Festival',
        date: 'At the end of the rainy season (mostly September).',
        description: 'One of the most bigger and extravagant, not to mention surprising male beauty pageant. The men of the Wodaabe Fula people have to compite to gaing the attention of the jury of women. This involves a lot of dancing, singing, camel races.... any way to prove you`re the most desirable man of the place!',
        traditions: 'Dancing the Yakee, choral sing, competitions of resistance, strength, dexterity...',
        country: ['Camerun, Chad, DR Congo, Níger, Nigeria'],
        links: ["https://en.wikipedia.org/wiki/Gu%C3%A9rewol"],
        image: "String",

    },
    {
        name: 'Valentine`s Day',
        date: 'February the 14th.',
        description: 'The worlwide knowed festival of love, or love and friendship in some countries. Thought is not an official holyday anywhere, it is one of the most famous celebrations in almost all the world. Legends said that the name comes from a christian martyr, Valentine, who was knowed for performing marriage ceremonies for christian in Roman empire times, something forbbiden, and some even add the story about the love letter he worte to his jailer`s daughter, signes as "Your Valentine". In any case, romanticism all over! Look at the many forms of celebration this festival around the world and pick your favourite for your next Valentine`s Day!',
        traditions: 'Love letters, chocolate gifts, flowers, Valentine`s cards.',
        country: ['Argentina, Armenia, Australia, Austria, Belarus, Belgium, Bolivia, Brazil, Bulgaria, Canada, Chile, China, Colombia, Costa Rica, Croatia, Cuba, Czechia / Czech Rep., Denmark, Estonia, Finland, France, Georgia, Germany, Greece, Greenland, Guatemala, Haiti, Hong Kong, Hungary, Iceland, India, Ireland, Israel, Italy, Jamaica, Japan, Latvia, Lebanon, Lithuania, Malta, Mexico, The Netherlands, New Zealand, Norway, Pakistan, Peru, Philippines, Poland, Portugal, Puerto Rico, Romania, Russia, Serbia, Slovakia, Spain, Sweden, Switzerland, Taiwan, Trinidad and Tobago, UK, Ukraine, USA, Venezuela'],
        links: ["https://en.wikipedia.org/wiki/Valentine%27s_Day"],
        image: "String",

    },
    {
        name: 'La Mama Negra',
        date: 'September and November (bianual)',
        description: 'A proof of the surprises of a mixted heritage, this religious celebration combines christian faith and african traditions from the slaves, with a touch of precolombine traits. The main protagonist, the Mama Negra ("Black Mum"), represent the Virgen de la Merced, a popular virgin among the african slaves, who believed it was her intervention what bring them freedom in the XIX century, when José María Urbina became president and abolished slavery. The main event is the parade with the clasic characters of the festival, but beware of the huacos who may want to "purify" you (and charging you for it)!',
        traditions: 'Love letters, chocolate gifts, flowers, Valentine`s cards.',
        country: ['Ecuador'],
        links: ["https://www.ecuador.com/blog/the-exuberant-festival-of-la-mama-negra/"],
        image: "String",

    },
   
]

Celebration
    .create(celebrations)
    .then(allCelebrationsCreated => {
        console.log(`Created ${allCelebrationsCreated.length} festivals`)
        mongoose.connection.close()
    })
    .catch((err) => console.log(`An error ocurred: ${err}`)) 