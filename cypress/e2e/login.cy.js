describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт

         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажали войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверили, что после авт. виден текст
         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })
    

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#forgotEmailButton').click(); // Нажимаю забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажимаю отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверили на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        })


    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio10'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажали войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверили, что после авт. виден текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })


    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
    
        cy.get('#mail').type('german@dolniko.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти
    
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверили, что после авт. виден текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        })


        it('Проверка, что в логине есть @', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
   
            cy.get('#mail').type('germandolnikov.ru'); // Ввели верный логин без @
            cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
            cy.get('#loginButton').click(); // Нажали войти
   
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверили на совпадение текст
            cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        })


        it('Приведение к строчным буквам в логине', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
   
            cy.get('#mail').type('GerMan@dolNiKov.ru'); // Ввели логин с заглавными буквами
            cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
            cy.get('#loginButton').click(); // Нажали войти
   
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверили, что виден текст
            cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
       })
})    