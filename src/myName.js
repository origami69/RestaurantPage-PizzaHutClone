console.log(_.join(['Another', 'module', 'loaded!'], ' '));
import carp from './assets/Cart_D.png'
import prof from './assets/Profile_Avatar_Guest_D.webp'
import lego from './assets/Logo_PH_Retro@2x.webp'
import pizza from './assets/Hero_TheEdge_Desktop_1104x360_v2.webp'
import pizz1 from './assets/web2_sidekick_localdeals_desktop_small_352x282.webp'
import pizz2 from './assets/Sidekick_1299SC_SmallDesktop_352x282.webp'
import pizz3 from './assets/Sidekick_BigDinnerBox_SmallDesktop_352x282.webp'
import wings from './assets/Sidekick_Wings_v2_LargeDesktop_541x282.webp'
import pizzCombo from './assets/Sidekick_CelebrationBundle_LargeDesktop_541x282.webp'
import popPizza from './assets/PopularPizzas_LargeOriginalPanSupreme_73x132.webp'
import meatty from './assets/web2_poppizzas_meatlovers_132x73.webp'
import cheesy from './assets/web2_poppizzas_cheese_132x73.webp'
import peppy from './assets/web2_popularpizzas_pepperoni_73x132.webp'
import hiring from './assets/Web2_NowHiring_MarketingBanner_541x282.jpg'
import covid from './assets/Web2_covid19_marketingbanner_541x282.jpg'

function myPage() {
    let content = document.querySelector('#content')
    let head = document.createElement('header')
    head.className = 'head'
    content.appendChild(head)

    function header() {
        function leftSides() {
            let leftSide = document.createElement('div')
            leftSide.className = 'leftS'
            head.appendChild(leftSide)
            let logoLink = document.createElement('a')
            logoLink.className = 'logoLink'
            logoLink.href = '#'
            let theLogo = document.createElement('img')
            theLogo.src = lego
            theLogo.className = 'logo'
            logoLink.appendChild(theLogo)
            leftSide.appendChild(logoLink)
            let deals = document.createElement('a')
            deals.innerText = 'Deals '
            deals.className = 'deal'
            deals.href = 'https://www.pizzahut.com/index.php?menu=deals#/menu/deals'
            leftSide.appendChild(deals)
            let menu = document.createElement('div')
            menu.className = 'dropDown'
            let menuBtn = document.createElement('button')
            menuBtn.innerText = 'Menu'
            menuBtn.innerHTML += '<svg class="coolDown" id="koom" viewBox="0 0 24 24">' + '<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>' + '</svg>\n'
            menuBtn.className = 'dropBtn'
            let dropContent = document.createElement('div')
            dropContent.className = 'drop'
            dropContent.innerHTML += '<a class="dropper" href="https://www.pizzahut.com/index.php?menu=pizza#/menu/pizza">' + 'Pizza' + '</a>' + '<a class="dropper" href="https://www.pizzahut.com/index.php?menu=wings#/menu/wings">' + 'Wings' + '</a>' + '<a class="dropper" href="https://www.pizzahut.com/index.php?menu=sides#/menu/sides">' + 'Sides' + '</a>' + '<a class="dropper" href="https://www.pizzahut.com/index.php?menu=sides#/menu/pasta">' + 'Pasta' + '</a>' + '<a class="dropper" href="https://www.pizzahut.com/index.php?menu=sides#/menu/desserts">' + 'Desserts' + '</a>' + '<a class="dropper" href="https://www.pizzahut.com/index.php?menu=sides#/menu/drinks">' + 'Drinks' + '</a>' + '<a class="dropper" href="https://www.pizzahut.com/index.php?menu=sides#/menu/Dips">' + 'Dips' + '</a>\n'
            menu.appendChild(menuBtn)
            menu.appendChild(dropContent)
            leftSide.appendChild(menu)
        }
        leftSides()

        function centerH() {
            let centerDiv = document.createElement('div')
            centerDiv.className = 'divCenter'
            head.appendChild(centerDiv)
            let center = document.createElement('a')
            center.href = 'https://www.pizzahut.com/index.php?f=login#/sign-in/home'
            center.className = 'centerHead'
            let userIcon = document.createElement('img')
            userIcon.src = prof
            userIcon.className = 'person'
            center.appendChild(userIcon)
            let textContain = document.createElement('div')
            textContain.className = 'centerCont'
            let textTop = document.createElement('p')
            textTop.className = 'TextTop'
            textTop.innerText = 'HUT REWARDS'
            let textBottem = document.createElement('p')
            textBottem.innerHTML = '<p class="textBottem">' + 'Sign In  ' + '<svg viewBox="0 0 25 25" class="sup">' + '<path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path>' + '</svg>' + '</p>'
            textContain.appendChild(textTop)
            textContain.appendChild(textBottem)
            center.appendChild(textContain)
            centerDiv.appendChild(center)
        }
        centerH()

        function rightH() {
            let rightSide = document.createElement('div')
            rightSide.className = 'right'
            let clicker = document.createElement('a')
            clicker.href = '#'
            clicker.className = 'shopingcart'
            let cart = document.createElement('img')
            cart.className = 'cart'
            cart.src = carp
            clicker.appendChild(cart)
            let moneyCount = document.createElement('p')
            moneyCount.className = 'moneys'
            moneyCount.innerText = '$0.00'
            clicker.appendChild(moneyCount)
            rightSide.appendChild(clicker)
            head.appendChild(rightSide)
        }
        rightH()

    }
    header()

    function body() {
        let middle = document.createElement('div')
        middle.className = 'mid'
        content.appendChild(middle)
        let yummy = document.createElement('img')
        yummy.src = pizza
        yummy.className = 'ymmPi'
        let activate = document.createElement('a')
        activate.href = 'https://www.pizzahut.com/index.php?c=THEEDGE#/localize//'
        activate.className = 'doWork'
        activate.appendChild(yummy)
        middle.appendChild(activate)
        let startHere = document.createElement('a')
        startHere.href = '#'
        startHere.className = 'coolThing'
        let startLeft = document.createElement('div')
        startLeft.className = 'startHere'
        startLeft.innerHTML += '<svg class="weAre" viewBox="0 0 26 38" width="26px" height="38px">' + '<g fill="none" fill-rule="evenodd" transform="translate(-5.2 -1)"><path fill="#FFF" fill-rule="nonzero" d="M18.285 36.737c.413-.492.873-1.056 1.37-1.683 1.416-1.793 2.833-3.732 4.155-5.743 1.742-2.65 3.183-5.226 4.221-7.645 1.156-2.693 1.773-5.107 1.773-7.166 0-6.594-5.209-11.942-11.63-11.942-6.422 0-11.63 5.348-11.63 11.942 0 2.059.617 4.473 1.773 7.166 1.038 2.419 2.479 4.994 4.22 7.645 1.322 2.011 2.74 3.95 4.157 5.743.496.627.956 1.191 1.369 1.683l.11.132.112-.132z"></path><ellipse cx="17.957" cy="14.277" fill="#E52A33" rx="5.435" ry="5.58"></ellipse><path fill="#131313" fill-rule="nonzero" d="M18.174 1.442c7.022 0 12.717 5.848 12.717 13.058 0 2.236-.654 4.793-1.865 7.616-1.067 2.487-2.54 5.117-4.315 7.819-1.34 2.04-2.777 4.005-4.213 5.822-.503.636-.97 1.209-1.39 1.709-.252.3-.433.511-.53.622l-.404.459-.403-.459c-.098-.11-.28-.322-.532-.622-.42-.5-.886-1.073-1.39-1.709-1.435-1.817-2.871-3.781-4.213-5.822-1.775-2.702-3.247-5.332-4.314-7.82-1.211-2.822-1.865-5.38-1.865-7.615 0-7.21 5.695-13.058 12.717-13.058zm.111 35.295c.413-.492.873-1.056 1.37-1.683 1.416-1.793 2.833-3.732 4.155-5.743 1.742-2.65 3.183-5.226 4.221-7.645 1.156-2.693 1.773-5.107 1.773-7.166 0-6.594-5.209-11.942-11.63-11.942-6.422 0-11.63 5.348-11.63 11.942 0 2.059.617 4.473 1.773 7.166 1.038 2.419 2.479 4.994 4.22 7.645 1.322 2.011 2.74 3.95 4.157 5.743.496.627.956 1.191 1.369 1.683l.11.132.112-.132zM17.957 19.3c2.7 0 4.89-2.25 4.89-5.022 0-2.772-2.19-5.023-4.89-5.023-2.7 0-4.892 2.25-4.892 5.023 0 2.772 2.192 5.022 4.892 5.022zm0 1.116c-3.3 0-5.979-2.75-5.979-6.138 0-3.389 2.678-6.139 5.979-6.139 3.3 0 5.978 2.75 5.978 6.139 0 3.388-2.678 6.138-5.978 6.138z"></path></g>' + '</svg>' + '<div class="fancyWords">' + 'Start here' + '</div>\n'
        let startRight = document.createElement('div')
        startRight.className = 'awsome'
        let startText = document.createElement('p')
        startText.className = 'awsome'
        startText.innerText = 'Find your store to see local deals'
        let startBtn = document.createElement('div')
        startBtn.className = 'holder'
        let wordBtn = document.createElement('p')
        wordBtn.innerText = 'FIND DEALS'
        let feature = document.createElement('div')
        feature.className = 'feature'
        let featureWord = document.createElement('p')
        featureWord.className = 'featureWord'
        featureWord.innerText = 'Featured'
        let featureLink = document.createElement('a')
        featureLink.className = 'featureLink'
        featureLink.href = 'https://www.pizzahut.com/index.php?menu=deals#/menu/deals'
        let linkSide = document.createElement('div')
        linkSide.className = 'linkSide'
        linkSide.innerHTML = '<p class="word">' + 'SEE MORE' + '</p>' + '<svg viewBox="0 0 24 24" class="saveMe">' + '<path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path>' + '</svg>\n'
        featureLink.appendChild(linkSide)
        feature.appendChild(featureWord)
        feature.appendChild(featureLink)
        startBtn.appendChild(wordBtn)
        startHere.appendChild(startLeft)
        startHere.appendChild(startText)
        startHere.appendChild(startBtn)
        let masterPizza = document.createElement('div')
        masterPizza.className = 'featurePizza'
        let pizza1 = document.createElement('a')
        pizza1.href = 'https://www.pizzahut.com/index.php?menu=deals#/menu/deals'
        pizza1.className = 'pizza1'
        let pizzaimg1 = document.createElement('img')
        pizzaimg1.className = 'pizzaimg1'
        pizzaimg1.src = pizz1
        pizza1.appendChild(pizzaimg1)
        let wordPizza = document.createElement('div')
        wordPizza.className = 'wordPizza'
        let innerPizza = document.createElement('p')
        innerPizza.className = 'innerpizza1'
        innerPizza.innerText = 'Local deals'
        wordPizza.appendChild(innerPizza)
        let textBelow = document.createElement('p')
        textBelow.className = 'textBelow'
        textBelow.innerText = 'Delivery or carryout'
        wordPizza.appendChild(textBelow)
        let fancySvg = document.createElement('div')
        fancySvg.className = 'saveEveryone'
        fancySvg.innerHTML = '<svg class="cook" viewBox="0 0 24 24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>\n'
        wordPizza.appendChild(fancySvg)
        pizza1.appendChild(pizzaimg1)
        pizza1.appendChild(wordPizza)
        masterPizza.appendChild(pizza1)

        function reproduce() {
            let pizza1 = document.createElement('a')
            pizza1.href = 'https://www.pizzahut.com/index.php?c=1299L1TSC#/localize//'
            pizza1.className = 'pizza1'
            let pizzaimg1 = document.createElement('img')
            pizzaimg1.className = 'pizzaimg1'
            pizzaimg1.src = pizz2
            pizza1.appendChild(pizzaimg1)
            let wordPizza = document.createElement('div')
            wordPizza.className = 'wordPizza'
            let innerPizza = document.createElement('p')
            innerPizza.className = 'innerpizza1'
            innerPizza.innerText = '$12.99 Original Stuffed Crust'
            wordPizza.appendChild(innerPizza)
            let textBelow = document.createElement('p')
            textBelow.className = 'textBelow'
            textBelow.innerText = 'Nothing beats the original'
            wordPizza.appendChild(textBelow)
            let fancySvg = document.createElement('div')
            fancySvg.className = 'saveEveryone'
            fancySvg.innerHTML = '<svg class="cook" viewBox="0 0 24 24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>\n'
            wordPizza.appendChild(fancySvg)
            pizza1.appendChild(pizzaimg1)
            pizza1.appendChild(wordPizza)
            masterPizza.appendChild(pizza1)

        }
        reproduce()

        function reproduction() {
            let pizza1 = document.createElement('a')
            pizza1.href = 'https://www.pizzahut.com/index.php?c=BIGDINNERBOX#/localize//'
            pizza1.className = 'pizza1'
            let pizzaimg1 = document.createElement('img')
            pizzaimg1.className = 'pizzaimg1'
            pizzaimg1.src = pizz3
            pizza1.appendChild(pizzaimg1)
            let wordPizza = document.createElement('div')
            wordPizza.className = 'wordPizza'
            let innerPizza = document.createElement('p')
            innerPizza.className = 'innerpizza1'
            innerPizza.innerText = 'Big Dinner Box'
            wordPizza.appendChild(innerPizza)
            let textBelow = document.createElement('p')
            textBelow.className = 'textBelow'
            textBelow.innerText = 'Feed the whole family, all from one box'
            wordPizza.appendChild(textBelow)
            let fancySvg = document.createElement('div')
            fancySvg.className = 'saveEveryone'
            fancySvg.innerHTML = '<svg class="cook" viewBox="0 0 24 24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>\n'
            wordPizza.appendChild(fancySvg)
            pizza1.appendChild(pizzaimg1)
            pizza1.appendChild(wordPizza)
            masterPizza.appendChild(pizza1)

        }
        reproduction()
        let masterCunny = document.createElement('div')
        masterCunny.className = 'cunny'

        function asexual() {


            let pizza2 = document.createElement('a')
            pizza2.href = 'https://www.pizzahut.com/index.php?menu=wings#/menu/wings'
            pizza2.className = 'pizza2'
            let pizzaimg2 = document.createElement('img')
            pizzaimg2.className = 'pizzaimg2'
            pizzaimg2.src = wings
            pizza2.appendChild(pizzaimg2)
            let wordPizza2 = document.createElement('div')
            wordPizza2.className = 'wordPizza2'
            let innerPizza2 = document.createElement('p')
            innerPizza2.className = 'innerpizza2'
            innerPizza2.innerText = 'Wings'
            wordPizza2.appendChild(innerPizza2)
            let textBelow2 = document.createElement('p')
            textBelow2.className = 'textBelow2'
            textBelow2.innerText = 'Choose your favorite sauce or rub'
            wordPizza2.appendChild(textBelow2)
            let fancySvg2 = document.createElement('div')
            fancySvg2.className = 'saveEveryone2'
            fancySvg2.innerHTML = '<svg class="cook2" viewBox="0 0 24 24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>\n'
            wordPizza2.appendChild(fancySvg2)
            pizza2.appendChild(pizzaimg2)
            pizza2.appendChild(wordPizza2)
            masterCunny.appendChild(pizza2)
            middle.appendChild(masterCunny)
        }

        function seggs() {
            let pizza2 = document.createElement('a')
            pizza2.href = 'https://www.pizzahut.com/index.php?menu=wings#/menu/wings'
            pizza2.className = 'pizza2'
            let pizzaimg2 = document.createElement('img')
            pizzaimg2.className = 'pizzaimg2'
            pizzaimg2.src = pizzCombo
            pizza2.appendChild(pizzaimg2)
            let wordPizza2 = document.createElement('div')
            wordPizza2.className = 'wordPizza2'
            let innerPizza2 = document.createElement('p')
            innerPizza2.className = 'innerpizza2'
            innerPizza2.innerText = 'The Celebetration Bundle'
            wordPizza2.appendChild(innerPizza2)
            let textBelow2 = document.createElement('p')
            textBelow2.className = 'textBelow2'
            textBelow2.innerText = '2 med 2-topping pizzas, breadsticks, & a 2L Pepsi'
            wordPizza2.appendChild(textBelow2)
            let fancySvg2 = document.createElement('div')
            fancySvg2.className = 'saveEveryone2'
            fancySvg2.innerHTML = '<svg class="cook2" viewBox="0 0 24 24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>\n'
            wordPizza2.appendChild(fancySvg2)
            pizza2.appendChild(pizzaimg2)
            pizza2.appendChild(wordPizza2)
            masterCunny.appendChild(pizza2)
            middle.appendChild(masterCunny)
        }
        let divider = document.createElement('div')
        divider.className = 'divider1'
        let divider2 = document.createElement('div')
        divider2.className = 'divider2'

        function factory() {
            let feature = document.createElement('div')
            feature.className = 'feature'
            let featureWord = document.createElement('p')
            featureWord.className = 'featureWord'
            featureWord.innerText = 'Popular pizzas'
            let featureLink = document.createElement('a')
            featureLink.className = 'featureLink'
            featureLink.href = 'https://www.pizzahut.com/index.php?menu=deals#/menu/deals'
            let linkSide = document.createElement('div')
            linkSide.className = 'linkSide'
            linkSide.innerHTML = '<p class="word">' + 'PIZZA MENU' + '</p>' + '<svg viewBox="0 0 24 24" class="saveMe">' + '<path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path>' + '</svg>\n'
            featureLink.appendChild(linkSide)
            feature.appendChild(featureWord)
            feature.appendChild(featureLink)
            middle.appendChild(feature)
        }
        let cunnyDiv = document.createElement('div')
        cunnyDiv.className = 'cunnyDiv'
        let cunnyContent = document.createElement('a')
        cunnyContent.className = 'cunnyLink'
        cunnyContent.href = 'https://www.pizzahut.com/index.php?fp=L_P_.B4GP4.M4.O4.P4PK4PS4_S#?fp=L_P_.B4GP4.M4.O4.P4PK4PS4_S'
        let cunnyImage = document.createElement('img')
        cunnyImage.className = 'cunnyImage'
        cunnyImage.src = popPizza
        cunnyContent.appendChild(cunnyImage)
        let cunnyHolder = document.createElement('div')
        cunnyHolder.className = 'cunnyHolder'
        let cunnyText1 = document.createElement('p')
        cunnyText1.className = 'cunnyText1'
        cunnyText1.innerText = 'Supreme Pizza'
        cunnyHolder.appendChild(cunnyText1)
        let cunnyText2 = document.createElement('p')
        cunnyText2.className = 'cunnyText2'
        cunnyText2.innerText = 'Large Original Pan'
        cunnyHolder.appendChild(cunnyText2)
        cunnyContent.appendChild(cunnyHolder)
        let cunnySvg = document.createElement('div')
        cunnySvg.className = 'cunnySvg'
        cunnySvg.innerHTML += '<svg class="saveRe" viewBox="0 0 24 24">' + '<path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path>' + '</svg>\n'
        cunnyContent.appendChild(cunnySvg)
        cunnyDiv.appendChild(cunnyContent)
        middle.appendChild(startHere)
        middle.appendChild(feature)
        middle.appendChild(masterPizza)

        function cunnyNator() {
            let cunnyContent = document.createElement('a')
            cunnyContent.className = 'cunnyLink'
            cunnyContent.href = 'https://www.pizzahut.com/index.php?fp=L_P_.B4BN4.H4IS4.P4PK4PS4_ML#/localize/index.fp/'
            let cunnyImage = document.createElement('img')
            cunnyImage.className = 'cunnyImage'
            cunnyImage.src = meatty
            cunnyContent.appendChild(cunnyImage)
            let cunnyHolder = document.createElement('div')
            cunnyHolder.className = 'cunnyHolder'
            let cunnyText1 = document.createElement('p')
            cunnyText1.className = 'cunnyText1'
            cunnyText1.innerText = 'Meat Lovers Pizza'
            cunnyHolder.appendChild(cunnyText1)
            let cunnyText2 = document.createElement('p')
            cunnyText2.className = 'cunnyText2'
            cunnyText2.innerText = 'Large Original Pan'
            cunnyHolder.appendChild(cunnyText2)
            cunnyContent.appendChild(cunnyHolder)
            let cunnySvg = document.createElement('div')
            cunnySvg.className = 'cunnySvg'
            cunnySvg.innerHTML += '<svg class="saveRe" viewBox="0 0 24 24">' + '<path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path>' + '</svg>\n'
            cunnyContent.appendChild(cunnySvg)
            cunnyDiv.appendChild(cunnyContent)
            middle.appendChild(cunnyDiv)
        }

        function trapNator() {
            let cunnyContent = document.createElement('a')
            cunnyContent.className = 'cunnyLink'
            cunnyContent.href = 'https://www.pizzahut.com/index.php?fp=L_H_PS4#/localize/index.fp/'
            let cunnyImage = document.createElement('img')
            cunnyImage.className = 'cunnyImage'
            cunnyImage.src = cheesy
            cunnyContent.appendChild(cunnyImage)
            let cunnyHolder = document.createElement('div')
            cunnyHolder.className = 'cunnyHolder'
            let cunnyText1 = document.createElement('p')
            cunnyText1.className = 'cunnyText1'
            cunnyText1.innerText = 'Cheese Pizza'
            cunnyHolder.appendChild(cunnyText1)
            let cunnyText2 = document.createElement('p')
            cunnyText2.className = 'cunnyText2'
            cunnyText2.innerText = 'Large Hand Tossed'
            cunnyHolder.appendChild(cunnyText2)
            cunnyContent.appendChild(cunnyHolder)
            let cunnySvg = document.createElement('div')
            cunnySvg.className = 'cunnySvg'
            cunnySvg.innerHTML += '<svg class="saveRe" viewBox="0 0 24 24">' + '<path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path>' + '</svg>\n'
            cunnyContent.appendChild(cunnySvg)
            cunnyDiv.appendChild(cunnyContent)
            middle.appendChild(cunnyDiv)
        }

        function funkyWunky() {
            let cunnyContent = document.createElement('a')
            cunnyContent.className = 'cunnyLink'
            cunnyContent.href = 'https://www.pizzahut.com/index.php?fp=L_H_PS4.P4#/localize/index.fp/'
            let cunnyImage = document.createElement('img')
            cunnyImage.className = 'cunnyImage'
            cunnyImage.src = peppy
            cunnyContent.appendChild(cunnyImage)
            let cunnyHolder = document.createElement('div')
            cunnyHolder.className = 'cunnyHolder'
            let cunnyText1 = document.createElement('p')
            cunnyText1.className = 'cunnyText1'
            cunnyText1.innerText = 'Pepperoni Pizza'
            cunnyHolder.appendChild(cunnyText1)
            let cunnyText2 = document.createElement('p')
            cunnyText2.className = 'cunnyText2'
            cunnyText2.innerText = 'Large Hand Tossed'
            cunnyHolder.appendChild(cunnyText2)
            cunnyContent.appendChild(cunnyHolder)
            let cunnySvg = document.createElement('div')
            cunnySvg.className = 'cunnySvg'
            cunnySvg.innerHTML += '<svg class="saveRe" viewBox="0 0 24 24">' + '<path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path>' + '</svg>\n'
            cunnyContent.appendChild(cunnySvg)
            cunnyDiv.appendChild(cunnyContent)
            middle.appendChild(cunnyDiv)
        }
        let combiner = document.createElement('div')
        combiner.className = 'combiner'
        let linkerimg1 = document.createElement('a')
        let imager = document.createElement('img')
        imager.src = covid
        linkerimg1.href = 'https://www.pizzahut.com/c/coronavirus-updates'
        imager.className = 'imager1'
        linkerimg1.appendChild(imager)
        combiner.appendChild(linkerimg1)
        let linkerimg2 = document.createElement('a')
        let imager2 = document.createElement('img')
        imager2.src = hiring
        linkerimg2.href = 'https://jobs.pizzahut.com/restaurants/careers.php'
        imager2.className = 'imager2'
        let cssHelp = document.createElement('div')
        cssHelp.className = 'cssHelp'
        linkerimg2.appendChild(imager2)
        combiner.appendChild(linkerimg2)
        asexual()
        seggs()
        cssHelp.appendChild(divider)
        cssHelp.appendChild(divider2)
        middle.appendChild(cssHelp)
        factory()

        middle.appendChild(cunnyDiv)

        cunnyNator()
        trapNator()
        funkyWunky()
        middle.appendChild(divider2)
        middle.appendChild(divider)

        middle.appendChild(combiner)
    }
    body()

    function footer() {
        let foot = document.createElement('footer')
        foot.className = 'foot'
        content.appendChild(foot)
        let finalFoot = document.createElement('div')
        finalFoot.className = 'uterine'
        finalFoot.innerText = 'Not A Real Site and Is for The purposes of improving with css and javascript'
        foot.appendChild(finalFoot)
    }
    footer()
};

function theActivators() {
    let world = document.createElement('div')
    world.className = 'worlds'
    let slidingIn = document.createElement('div')
    slidingIn.className = 'slideIn'
    let topOf = document.createElement('div')
    topOf.className = 'topOf'
    let exitOut = document.createElement('button')
    exitOut.className = 'gtfo'
    exitOut.innerText = 'X'
    let hiddenTopOf = document.createElement('div')
    hiddenTopOf.innerHTML += '<svg class="bruhMoment" viewBox="0 0 32 32>"' + '<g fill="none" fill-rule="evenodd"><g transform="translate(0 12)"><circle cx="7.25" cy="12.5" r="2.5" fill="#CFCECC"></circle><circle cx="25" cy="12.5" r="2.5" fill="#CFCECC"></circle><path fill="#000" fill-rule="nonzero" d="M4.386 4.62l2.822-3.57A2.723 2.723 0 019.378 0h10.726a2.83 2.83 0 011.954.798l3.995 3.905 4.973 1.47c.788.215.93.89.974 1.68v3.696c-.042 1.01-.451 1.826-1.495 1.89h-1.963C28.064 14.698 26.63 16 24.938 16c-1.694 0-3.127-1.302-3.604-2.562h-10.57C10.285 14.698 9.031 16 7.337 16c-1.693 0-3.126-1.302-3.604-2.562H1.911C.867 13.375.042 12.558 0 11.548V7.35c.03-.745.53-1.396 1.26-1.638L4.385 4.62zM25 15a2.5 2.5 0 000-5 2.5 2.5 0 000 5zM7.25 15a2.5 2.5 0 000-5 2.5 2.5 0 000 5z"></path><path fill="#FFF" fill-rule="nonzero" d="M1.01 11.674c0 .042.303.522.346.522h2.427c.278-1.78 1.648-3.208 3.49-3.208 1.841 0 3.174 1.427 3.453 3.208h10.6c.331-1.724 1.756-3.27 3.55-3.27 1.793 0 3.325 1.546 3.657 3.27h1.813c.474.03.654-.587.654-.63L30.99 7.4l-.646-.409-5.13-1.38a.907.907 0 01-.428-.25L20.67 1.292a1.038 1.038 0 00-.685-.293H9.122c-.301.01-.583.147-.772.377L5.254 5.225l-.385.293L1.25 6.69l-.227.406-.015 4.578z"></path></g><path fill="#E71316" d="M10.14 5.5L9.061 8.16 3.5 10.558v.281h22v-.281L19.939 8.16 18.86 5.5z"></path></g>' + '</svg>\n'
    hiddenTopOf.className = 'asuma'
    topOf.appendChild(hiddenTopOf)
    let intop = document.createElement('div')
    intop.className = 'intop'
    intop.innerHTML += '<svg class="pizzaBox" viewBox="0 0 32 32">' + '<g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M3.411 6.063L1.031 18.63l5.23 2.901h20.942l4.76-2.9-1.904-12.568z"></path><path fill="#131313" fill-rule="nonzero" d="M3.003 6.061l-1.87 12.513 3.739 1.925h22.43l3.738-1.925L29.17 6.06H3.004zM.103 19.17L2.196 5.03h27.779l1.962 13.912-4.413 2.588H4.648L.102 19.17z"></path><path fill="#131313" fill-rule="nonzero" d="M1.595 18.534l4.125 1.833c.35.155.57.472.57.82v4.582c0 .68-.807 1.124-1.493.82L.672 24.754c-.349-.155-.57-.472-.57-.82v-4.581c0-.681.807-1.125 1.493-.82zm29.13.001l-3.437 1.833a.924.924 0 00-.476.82v4.582c0 .681.673 1.124 1.244.82l3.438-1.833a.927.927 0 00.475-.82v-4.582c0-.681-.673-1.124-1.244-.82z"></path><path fill="#131313" fill-rule="nonzero" d="M5.204 20.499H28c.522 0 .945.395.945.884v4.42c0 .487-.65.528-.945.883H5.204c-.537-.451-.945-.396-.945-.884v-4.42c0-.488.423-.883.945-.883z"></path><path fill="#CFCECC" fill-rule="nonzero" d="M1.031 19.469v4.419l4 1.768v-4.419zM31 19.469v4.419l-3 1.768v-4.419zM6.188 21.531v4.125h20.625v-4.125z"></path><path fill="#E71316" d="M11.64 10l-1.079 2.66L5 15.058v.281h22v-.281l-5.561-2.398L20.36 10z"></path></g>' + '</svg>\n'
    let wordInTop = document.createElement('p')
    wordInTop.className = 'wordTop'
    wordInTop.innerText = 'Start Here'
    topOf.appendChild(intop)
    topOf.appendChild(wordInTop)
    topOf.appendChild(exitOut)
    slidingIn.appendChild(topOf)
    let lowerTexts = document.createElement('p')
    lowerTexts.className = 'lowerTet'
    lowerTexts.innerText = 'Find your store to see local deals'
    slidingIn.appendChild(lowerTexts)
    let divButts = document.createElement('div')
    divButts.className = 'divButts'
    let butt1 = document.createElement('button')
    butt1.className = 'butt1'
    butt1.innerHTML += '<svg class="smallPizzaBox" viewBox="0 0 32 32">' + '<g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M3.411 6.063L1.031 18.63l5.23 2.901h20.942l4.76-2.9-1.904-12.568z"></path><path fill="#131313" fill-rule="nonzero" d="M3.003 6.061l-1.87 12.513 3.739 1.925h22.43l3.738-1.925L29.17 6.06H3.004zM.103 19.17L2.196 5.03h27.779l1.962 13.912-4.413 2.588H4.648L.102 19.17z"></path><path fill="#131313" fill-rule="nonzero" d="M1.595 18.534l4.125 1.833c.35.155.57.472.57.82v4.582c0 .68-.807 1.124-1.493.82L.672 24.754c-.349-.155-.57-.472-.57-.82v-4.581c0-.681.807-1.125 1.493-.82zm29.13.001l-3.437 1.833a.924.924 0 00-.476.82v4.582c0 .681.673 1.124 1.244.82l3.438-1.833a.927.927 0 00.475-.82v-4.582c0-.681-.673-1.124-1.244-.82z"></path><path fill="#131313" fill-rule="nonzero" d="M5.204 20.499H28c.522 0 .945.395.945.884v4.42c0 .487-.65.528-.945.883H5.204c-.537-.451-.945-.396-.945-.884v-4.42c0-.488.423-.883.945-.883z"></path><path fill="#CFCECC" fill-rule="nonzero" d="M1.031 19.469v4.419l4 1.768v-4.419zM31 19.469v4.419l-3 1.768v-4.419zM6.188 21.531v4.125h20.625v-4.125z"></path><path fill="#E71316" d="M11.64 10l-1.079 2.66L5 15.058v.281h22v-.281l-5.561-2.398L20.36 10z"></path></g>' + '</svg>' + '<p class="dumb">' + 'CARRYOUT' + '</p>\n'
    divButts.appendChild(butt1)
    let butt2 = document.createElement('button')
    butt2.className = 'butt2'
    butt2.innerHTML += '<svg class="car" viewBox="0 0 32 32>"' + '<g fill="none" fill-rule="evenodd"><g transform="translate(0 12)"><circle cx="7.25" cy="12.5" r="2.5" fill="#CFCECC"></circle><circle cx="25" cy="12.5" r="2.5" fill="#CFCECC"></circle><path fill="#000" fill-rule="nonzero" d="M4.386 4.62l2.822-3.57A2.723 2.723 0 019.378 0h10.726a2.83 2.83 0 011.954.798l3.995 3.905 4.973 1.47c.788.215.93.89.974 1.68v3.696c-.042 1.01-.451 1.826-1.495 1.89h-1.963C28.064 14.698 26.63 16 24.938 16c-1.694 0-3.127-1.302-3.604-2.562h-10.57C10.285 14.698 9.031 16 7.337 16c-1.693 0-3.126-1.302-3.604-2.562H1.911C.867 13.375.042 12.558 0 11.548V7.35c.03-.745.53-1.396 1.26-1.638L4.385 4.62zM25 15a2.5 2.5 0 000-5 2.5 2.5 0 000 5zM7.25 15a2.5 2.5 0 000-5 2.5 2.5 0 000 5z"></path><path fill="#FFF" fill-rule="nonzero" d="M1.01 11.674c0 .042.303.522.346.522h2.427c.278-1.78 1.648-3.208 3.49-3.208 1.841 0 3.174 1.427 3.453 3.208h10.6c.331-1.724 1.756-3.27 3.55-3.27 1.793 0 3.325 1.546 3.657 3.27h1.813c.474.03.654-.587.654-.63L30.99 7.4l-.646-.409-5.13-1.38a.907.907 0 01-.428-.25L20.67 1.292a1.038 1.038 0 00-.685-.293H9.122c-.301.01-.583.147-.772.377L5.254 5.225l-.385.293L1.25 6.69l-.227.406-.015 4.578z"></path></g><path fill="#E71316" d="M10.14 5.5L9.061 8.16 3.5 10.558v.281h22v-.281L19.939 8.16 18.86 5.5z"></path></g>' + '</svg>' + '<p class="dumb">' + 'DELIVERY' + '</p>\n'
    divButts.appendChild(butt2)
    slidingIn.appendChild(divButts)
    let inputsDiv = document.createElement('div')
    inputsDiv.className = 'inputsDiv'
    let describer = document.createElement('p')
    describer.className = 'descrbingInput'
    describer.innerText = 'City, State or Zip Code'
    inputsDiv.appendChild(describer)
    let userInputs = document.createElement('input')
    userInputs.className = 'userAdress'
    userInputs.type = 'text'
    inputsDiv.appendChild(userInputs)
    slidingIn.appendChild(inputsDiv)
    let deliveryDiv = document.createElement('div')
    deliveryDiv.className = 'deliveryDiv'
    let textDelivery = document.createElement('p')
    textDelivery.className = 'textDelivery'
    textDelivery.innerText = 'Street Address'
    deliveryDiv.appendChild(textDelivery)
    let deliverybutt = document.createElement('div')
    deliverybutt.className = 'deliveryButtHold'
    let deliveryButt1 = document.createElement('input')
    deliveryButt1.className = 'delivery1'
    deliveryButt1.type = 'text'
    deliveryButt1.placeholder = '1234 Sample Street'
    deliverybutt.appendChild(deliveryButt1)
    let deliveryButt2 = document.createElement('input')
    deliveryButt2.className = 'delivery2'
    deliveryButt2.type = 'text'
    deliveryButt2.placeholder = 'Apt/Ste'
    deliverybutt.appendChild(deliveryButt2)
    deliveryDiv.appendChild(deliverybutt)
    let lowerTextdeliv = document.createElement('div')
    lowerTextdeliv.className = 'lowerDeliv'
    let textdeliv1 = document.createElement('p')
    textdeliv1.className = 'textdeliv1'
    textdeliv1.innerText = 'City'
    lowerTextdeliv.appendChild(textdeliv1)
    let textdeliv2 = document.createElement('p')
    textdeliv2.className = 'textdeliv2'
    textdeliv2.innerText = 'State'
    lowerTextdeliv.appendChild(textdeliv2)
    let textdeliv3 = document.createElement('p')
    textdeliv3.className = 'textdeliv3'
    textdeliv3.innerText = 'ZIP'
    lowerTextdeliv.appendChild(textdeliv3)
    deliveryDiv.appendChild(lowerTextdeliv)
    let lowerDelivButt = document.createElement('div')
    lowerDelivButt.className = 'lowerDelivButt'
    let deliveryButt3 = document.createElement('input')
    deliveryButt3.className = 'delivery3'
    deliveryButt3.type = 'text'
    deliveryButt3.placeholder = 'City'
    lowerDelivButt.appendChild(deliveryButt3)
    let deliveryButt4 = document.createElement('input')
    deliveryButt4.className = 'delivery4'
    deliveryButt4.type = 'text'
    deliveryButt4.placeholder = 'XX'
    lowerDelivButt.appendChild(deliveryButt4)
    let deliveryButt5 = document.createElement('input')
    deliveryButt5.className = 'delivery5'
    deliveryButt5.type = 'text'
    deliveryButt5.placeholder = 'XXXXX'
    lowerDelivButt.appendChild(deliveryButt5)
    deliveryDiv.appendChild(lowerDelivButt)
    slidingIn.appendChild(deliveryDiv)
    let contin = document.createElement('button')
    contin.className = 'userContin'
    contin.innerText = 'SEARCH'
    slidingIn.appendChild(contin)
    world.appendChild(slidingIn)
    let worldOfdestroyed = document.querySelector('body')
    worldOfdestroyed.appendChild(world)
    let chosenOne = document.querySelector('.coolThing')
    chosenOne.addEventListener('click', clunk)

    function clunk() {
        document.querySelector('.worlds').style.visibility = 'visible'
        let helpHer = document.querySelector('.gtfo')
        helpHer.addEventListener('click', function() {
            document.querySelector('.worlds').style.visibility = 'hidden'
        })
        document.querySelector('.userContin').addEventListener('click', function() {
            alert('This is not a real site')
        })
        document.querySelector('.butt2').addEventListener('click', function() {
            document.querySelector('.bruhMoment').style.display = 'block'
            document.querySelector('.pizzaBox').style.display = 'none'
            document.querySelector('.butt2').style.border = '2px solid red'
            document.querySelector('.butt1').style.border = 'none'
            document.querySelector('.inputsDiv').style.display = 'none'
            document.querySelector('.deliveryDiv').style.display = 'block'
        })
        document.querySelector('.butt1').addEventListener('click', function() {
            document.querySelector('.bruhMoment').style.display = 'none'
            document.querySelector('.pizzaBox').style.display = 'block'
            document.querySelector('.butt2').style.border = 'none'
            document.querySelector('.butt1').style.border = '2px solid red'
            document.querySelector('.inputsDiv').style.display = 'block'
            document.querySelector('.deliveryDiv').style.display = 'none'
        })
    }

    let popBackground = document.createElement('div')
    popBackground.className = 'popBack'
    let divPop = document.createElement('div')
    divPop.className = 'divPop'
    let divCloser = document.createElement('button')
    divCloser.className = 'divCloses'
    divCloser.innerText = 'X'
    divPop.appendChild(divCloser)
    let textPops = document.createElement('p')
    textPops.className = 'textPop1'
    textPops.innerText = 'Your Cart Is Empty'
    divPop.appendChild(textPops)
    let textPop2 = document.createElement('p')
    textPop2.className = 'textPop2'
    textPop2.innerText = 'Your cart must be hungry. Fill it with pizza!'
    divPop.appendChild(textPop2)
    let redirectPops = document.createElement('button')
    redirectPops.className = 'redirectPop'
    redirectPops.innerText = 'START YOUR ORDER'
    divPop.appendChild(redirectPops)
    popBackground.appendChild(divPop)
    let bodyGets = document.querySelector('#content')
    bodyGets.appendChild(popBackground)
    let hungryHippo = document.querySelector('.shopingcart')


    hungryHippo.addEventListener('click', function() {
        document.querySelector('.popBack').style.visibility = 'visible'
        document.querySelector('.divCloses').addEventListener('click', function() {
            document.querySelector('.popBack').style.visibility = 'hidden'
        })
        document.querySelector('.redirectPop').addEventListener('click', function() {
            document.querySelector('.popBack').style.visibility = 'hidden'
            clunk()
        })
    })
}

myPage()
theActivators()


export { myPage, theActivators };