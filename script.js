const data = [
    {
        Question: "Ե°րբ  է  գահակալել Ուրարտուի արքա Արամեն",
        Answer: "մ․թ․ա 859-840"
    },
    {
        Question: "Ե°րբ  է  գահակալել Արտավազդ  2-րդը",
        Answer: "մ․թ․ա 55-34"
    },
    {
        Question: "Ե°րբ  է  գահակալել Աշոտ  2-րդ  Բագրատունին",
        Answer: "914-928թ"
    },
    {
        Question: "Ո°ր թվականներին էր Լենկ Թեմուրի առաջին արշավանքը Հայաստան:",
        Answer: "1386թ"
    },
    {
        Question: "Թուրք-հայկական պատերազմը սկսվել  է...",
        Answer: "1920թ սեպ 28"
    },
    {
        Question: "Արցախյան շարժումը սկսվեց Հայաստանի հետ միավորվելու նպատակով...",
        Answer: "1988թ փետ 20-ից"
    },
    {
        Question: "Ե°րբ  է  ընդունվել  <<Հռչակագիր  ԼՂՀ  հռչակման>>  մասին փաստաթուղթը:",
        Answer: "1991թ սեպ 2"
    },
    {
        Question: "Ե°րբ  է  գահակալել Ուրարտուի արքա Արգիշտի  1-ինը",
        Answer: "մ․թ․ա 786-764"
    },
    {
        Question: "Ե°րբ  է  գահակալել Երվանդ Վերջինը:",
        Answer: "մ․թ․ա 220-201"
    },
    {
        Question: "Ե°րբ  է  գահակալել Արտավազդ  1-ինը:",
        Answer: "մթ․ա․ 160-115"
    },
    {
        Question: "Ե°րբ  է  Հայոց իշխան  և  սպարապետ Աշոտ Բագրատունին ճանաչվել հայոց իշխանաց իշխան:",
        Answer: "862թ"
    },
    {
        Question: "Ե°րբ  է  Լևոն  2րդ-ը  օծվել Կիլիկիայի Հայոց թագավոր:",
        Answer: "1198 թ. հունվարի 6"
    },
    {
        Question: "Ե°րբ  է  գահակալել Ռուբեն  1-ինը:",
        Answer: "1080 - 1095թ"
    },
    {
        Question: "Ե°րբ մահացավ Դավիթ Բեկը:",
        Answer: "1728թ"
    },
    {
        Question: "Ե°րբ  է  հիմնվել Հնչակյան կուսակցությունը:",
        Answer: "1887թ"
    },
    {
        Question: "Ե°րբ  է  ավարտվել Առաքելոց վանքի կռիվը",
        Answer: "1907 նոյ 23"
    },
    {
        Question: "Ե°րբ  է  կազմավորվել  ԽՍՀՄ-ը:",
        Answer: "1922 թ․ դեկ 30"
    },
    {
        Question: "Հայաստանի Գերագույն Խորհուրդը  ,,Հռչակագիր Հայաստանի անկախության մասին,,  փաստաթուղթը ընդունել  է… ",
        Answer: "1990 թ․ օգոս 23"
    },
    {
        Question: "Ե°րբ  է  Տիգրան Մեծը Ծոփքը միավորել Մեծ Հայքի թագավորությանը:",
        Answer: "մ․թ․ա․ 94 թվական"
    },
    {
        Question: "Ե°րբ  է  կազմվել Արմինիա փոխարքայությունը:",
        Answer: "701թ"
    },
    {
        Question: "Ե°րբ  է  տեղի ունեցել Բասենի ճակատամարտը:",
        Answer: "1048թ"
    },
    {
        Question: "Ե°րբ  է  կնքվել Կասրե Շիրինի պայմանագիրը:",
        Answer: "1639թ"
    },
    {
        Question: "Ե°րբ  է  կնքվել Թուրքմենչայի հաշտության պայմանագիրը:",
        Answer: "1828թ"
    },
    {
        Question: "Ե°րբ է  հիմնվել Արմենական կուսակցությունը:",
        Answer: "1885թ"
    },
    {
        Question: "Ե°րբ են սկսվել հայ-թաթարական ընդհարումները:",
        Answer: "1905թ"
    },
    {
        Question: "Ե°րբ է  ստորագրվել հայ-ռուսական Երևանի համաձայնագիրը իշխանափոխության մասին:",
        Answer: "1820 դեկ 2"
    },
    {
        Question: "Ե°րբ  է  կնքվել զինադադար Հայաստանի, Արցախի  և  Ադրբեջանի  միջև:",
        Answer: "1994թ"
    },
    {
        Question: "Որքա°ն էր Կիլիկյան Հայաստանի տարածքը:",
        Answer: "50․000 "
    },
    {
        Question: "Ո°վ  է  գլխավորել Սյունիքի ազատագրական պայքարը  1728-1730թթ:",
        Answer: "Մխիթար "
    },
    {
        Question: "Ե°րբ  է  գահակալել  Սարդուրի  2-րդը:",
        Answer: "մ․թ․ա 764-735"
    },
    {
        Question: "Ե°րբ  է  կնքվել Արտաշատի պայմանագիրը Տիգրան  2-րդի  և  Պոմպեոսի միջև:",
        Answer: "66 թ․"
    },
    {
        Question: "Ե°րբ են գահակալել Արշակունի արքաները:",
        Answer: "52-428"
    },
    {
        Question: "Ե°րբ  է գահակալել Արշակ  2-րդ  Արշակունին:",
        Answer: "350-368թ"
    },
    {
        Question: "Ե°րբ  է  տեղի ունեցել Հայաստանի բաժանումը Բյուզանդիայի  և  Պարսկաստանի միջև:",
        Answer: "591թ"
    },
    {
        Question: "Ե°րբ  է  գահակալել Սմբատ  1-ին Բագրատունին:",
        Answer: "890-914"
    },
    {
        Question: "Ե°րբ  է  գահակալել Գագիկ  2-րդ Բագրատունին:",
        Answer: "1042-1045"
    },
    {
        Question: "Ե°րբ  է  կործանվել Կիլիկիայի Հայոց թագավորությունը:",
        Answer: "1375թ"
    },
    {
        Question: "Ե°րբ  է  տեղի ունեցել Հայկ Նահապետի  և  Բելի ճակատամարտը:",
        Answer: "մ․թ․ա 2492"
    },
    {
        Question: "Ե°րբ  է  կնքվել Գյուլիստանի հաշտության պայմանագիրը:",
        Answer: "1813թ հոկ 13"
    },
    {
        Question: "Ե°րբ  է  կնքվել Սան Ստեֆանոյի հաշտության պայմանագիրը:",
        Answer: "1878թ փոտ 19"
    },
    {
        Question: "Ե°րբ  է  հիմնվել Հայ Հեղափոխական Դաշնակցություն կուսակցությունը:",
        Answer: "1890թ"
    },
    {
        Question: "Ե°րբ  է կնքվել Բաթումի հաշտության պայմանագիրը",
        Answer: "1918թ հունիս 4"
    },
    {
        Question: "Խորհրդային Հայաստանում զանգվածային ձերբակալությունների ու բռնությունների ալիքը հասավ գագաթնակետին:",
        Answer: "1937թ"
    },
    {
        Question: "Ե°րբ  է  Հայաստանի Գերագույն խորհուրդը Հայաստանը հռչակել անկախ պետություն:",
        Answer: "1991թ սեպ 23"
    },
    {
        Question: "Ե°րբ  է  տեղի ունեցել Սումգայիթի հայերի կոտորածը:",
        Answer: "1988թ"
    },
    {
        Question: "Էրեբունի-Երևանը հիմնվել  է  Ք.ա  782թ.  …կողմից:",
        Answer: "Արգիշտի"
    },
    {
        Question: "Նշվածներից ո՞րը 652թ-ի հայ-արաբական պայմանագրի կետերից չէր…",
        Answer: "Հայաստանը ձեռք է բերում անկախություն"
    },
    {
        Question: "1921թ մարտի 16-ին Մոսկվայի պայմանագրով Հայաստանը կորցրեց...",
        Answer: "Կարսը, Սուրմալու, Նախիջևան"
    },
    {
        Question: "Կիլիկիայի գահակալներին դասավորել կառավարման հաջորդականությամբ",
        Answer: "Ռ, Լ, Մ , Հ "
    },
    {
        Question: "Թագավորներին դասավորել կառավարման հաջորդականությամբ/Արտաշեսյաններ",
        Answer: "Տիգրան ,  Արտավազդ ,  Արտաշես , Տիգրան"
    },
    {
        Question: "Թագավորներին դասավորել կառավարման հաջորդականությամբ /Արշակունիներ",
        Answer: "Տ, Վ , Ս, Խ"
    },
    {
        Question: "Իրադարձությունները դասավորել ժամանակագրական հաջորդականությամբ Հայաստանը 4-5րդ դարերում",
        Answer: "Ձիրավ, Բաժանում , Ավարայր, Ներսեհապատ"
    },
    {
        Question: "Արցախյան պատերազմի իրադարձությունները դասավորել ժամանակագրական հաջորդականությամբ:",
        Answer: "Ս, Շ, Լ , Մ "
    },
    {
        Question: "Սելջուկ-թուրքերի արշավանքների ո՞ր շարքի տարեթվերն են ճիշտ:",
        Answer: "1047, 1048, 1054, 1064"
    },
    {
        Question: "Արքաների անունները դասավորել կառավարման հաջորդականությամբ /Բագրատունիներ / :",
        Answer: "Սմբատ, Աբաս, Աշոտ , Գագիկ"
    },
    {
        Question: "Արքաների անունները դասավորել կառավարման հաջորդականությամբ: /Բագրատունիներ / :",
        Answer: "Գագիկ, Երկաթ, Աշոտ , Սմբատ"
    },
    {
        Question: "Մայրաքաղաքները դասավորել իրենց հիմնադրման հաջորդականությամբ:",
        Answer: "Ա, Դ , Ա , Կ"
    },
    {
        Question: "Պայմանագրերը դասավորել կնքման ժամանակագրական հաջորդականությամբ: /Ռուս-թուրքական և ռուս-պարսական պատերազմներ / :",
        Answer: "Բ , Գ , Թ , Ա"
    },
    {
        Question: "Իրադարձությունները դասավորել ժամանակագրական հաջորդականությամբ /Հայաստանի 2րդ հանրապետության շրջան / :",
        Answer: "Հ, Ն , Խ , ՀՀ"
    },
    {
        Question: "Իրադարձությունները դասավորել ժամանակագրական հաջորդականությամբ 1918 թ իրադարձություններ / :",
        Answer: "Մայիս , առաջին , բաթում , աշխարհ"
    },
    {
        Question: "Իրադարձությունները դասավորել ժամանակագրական հաջորդականությամբ 1980-ական թվականներ / :",
        Answer: "Բ Ա Ս Ս / կոտորածներ"
    },
    {
        Question: "Իրադարձությունները դասավորել ժամանակագրական հաջորդականությամբ 20րդ դարի սկիզբ / :",
        Answer: "Հայ Թաթարական , Երիտ Թուրքեր , Եղեռն , Ադանա"
    },
    {
        Question: "Իրադարձությունները դասավորել ժամանակագրական հաջորդականությամբ 1918-1920 թվականներ /:",
        Answer: "Մայիս , առաջին , բաթում , Սևր"
    },
    {
        Question: "Իրադարձությունները դասավորել ժամանակագրական հաջորդականությամբ Հայաստանը 11-13րդ դարերում /:",
        Answer: "Հեթում ,Ռուբեն ,  Լևոն , Սիս"
    },
    {
        Question: "Իրադարձությունները դասավորել ժամանակագրական հաջորդականությամբ 1920 թվականի իրադարձություններ /:",
        Answer: "1920, Ալեքս, Երևան , Ալեքս"
    },
    {
        Question: "Արքաների անունները դասավորել գահակալման հաջորդականությամբ Արշակունիներ / :",
        Answer: "Տրդատ , Խոսրով, Արշակ , Պապ"
    },
    {
        Question: "Իրադարձությունները դասավորել ժամանակագրական հաջորդականությամբ Արտաշեսյանների շրջան /:",
        Answer: "կապադովկիա, Տիգրանակերտ, Արտաշատ, Խառան"
    },
    {
        Question: "Իրադարձությունները դասավորել ժամանակագրական հաջորդականությամբ Ուրարտական շրջան /:",
        Answer: "Սարգոն Բ , Ս Ի Մ Ս"
    },
    {
        Question: "Իրադարձությունները դասավորել ժամանակագրական հաջորդականությամբ Բագրատունյաց շրջան / :",
        Answer: "Զաք, Բագ , Սելջ, մոնղոլ"
    },
    {
        Question: "Մայրաքաղաքները դասավորել հիմնադրման հաջորդականությամբ:",
        Answer: "Երվանդ, Արշակ , Տիգրան , Վաղարշ"
    },
    {
        Question: "Իրադարձությունները համապատասխանեցնել տարեթվերին",
        Answer: "Բեռլին - 1878 հւնիսի 13"
    },
    {
        Question: "Ազգային կազմակերպությունների  և  կուսակցությունների հիմնման տարեթվերը համապատասխանեցնել:",
        Answer: "Բարենպատակ - 1869 , Հնչակյան - 1887"
    },
    {
        Question: "Պատմական իրադարձությունը համապատասխանեցել տարեթվերին:",
        Answer: "Նախիջևան, Արցախ, Ջավաղք"
    },
    {
        Question: "Իրադարձությունները  համապատասխանեցնել  տարեթվերին:",
        Answer: "Արցախ, ԼՂՀ, ՀՀ, Զինադադար"
    },
    {
        Question: "Կամավորական ջոկատները համապատասխանեցնել հրամանատարների հետ:",
        Answer: "Դրո - 2 , Քեռի - 4, Անդրանիկ - 1, Համազասպ - 3, Վարդան - 5"
    },
    {
        Question: "Իրադարձությունները համապատասխանեցնել տարեթվերին:",
        Answer: "Բաբ - 1895, Գում - 1890 հուլիս, Խանասորի - 1897, Սարգիս - 1890"
    },
    {
        Question: "Կատարել համապատասխանեցում /ծննդյան տարեթվեր/",
        Answer: "Անդրանիկ - 1865, Գևորգ - 1870, Արաբո - 1863, Հրայր - 1864"
    },
    {
        Question: "Կազմակերպությունները համապատասխանեցնել հիմնադրման տարեթվի , տեղի հետ:",
        Answer: "Բ - Ա, Ս - Վ , Պ - կ , Հ - Մ"
    },
    {
        Question: "Վանի թագավորության արքաների տարեթվերը համապատասխանեցնել նրանց գահակալման տարեթվերին: ",
        Answer: "Ա - 764, Ա - 786, Մ - 810, Ռ - 785"
    },
    {
        Question: "Բագրատունի արքաների անունները համապատասխանեցնել նրանց գահակալման տարեթվերին:",
        Answer: "Աշոտ - 914, Սմբատ - 880, Աբաս - 928"
    },
    {
        Question: "Արտաշեսյան արքաների անունները համապատասխանեցնել նրանց գահակալման տարեթվերին:",
        Answer: "Արտաշես - 189, Արտավազդ - 160, Տիգրանը - (20-8)"
    },
    {
        Question: "Կիլիկիայի  գահակալների  անունները համապատասխանեցնել նրանց կառավարման  տարեթվերին:",
        Answer: "Հ - 1226, կ - 1095, Թ - 1145, Լ - 1129"
    },
];

const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

searchInput.addEventListener('input', searchQuestions);

function searchQuestions() {
    const searchText = searchInput.value.toLowerCase();
    console.log(searchText)
    const filteredData = data.filter(item => item.Question.toLowerCase().includes(searchText));

    displayResults(filteredData);
}

function displayResults(results) {
    resultsDiv.innerHTML = '';



    for (let i = 0; i < results.length; i++) {
        const result = results[i];
        const question = result.Question;
        const answer = result.Answer;

        const questionDiv = document.createElement('div');
        questionDiv.classList.add('result');
        questionDiv.innerHTML = `<strong>${question}</strong><br>${answer}`;

        resultsDiv.appendChild(questionDiv);
    }
    if (results.length === 0) {
        resultsDiv.innerHTML = 'No matching questions found.';
        return;
    }
}
