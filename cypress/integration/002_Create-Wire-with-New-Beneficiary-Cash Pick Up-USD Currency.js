describe ('Create Wire with New Beneficiary, Cash Pick Up, and USD Currency', function(){

    it ('Login',function(){
        cy.visit('https://imx-webagent-intermexonline-qa-app.azurewebsites.net/'); //comando
        cy.url().should('include', 'https://imx-webagent-intermexonline-qa-app.azurewebsites.net/');
        cy.get('#iniciarSession').click();
        cy.wait(2000);
        cy.get('#username').type('yre17@yopmail.com');
        cy.wait(2000);
        cy.get('#loginPassword').type('Tetumbalagorra1');
        cy.get('#loginPassword').should('have.length',1);
        cy.get('#loginModal > .modal-dialog > .modal-content > :nth-child(3) > .row > .col-md-push-6 > .aceptar').click();
    });

    it ('Send money to a new recipient',function(){
        cy.wait(2000);
        cy.get('.destinatario-form > [data-bind="visible: data.showReceivers()"]').click();
        cy.wait(2000);
        cy.get('div[data-bind="visible: !data.showReceivers()"] > .form-control').select('Uruguay')
        cy.wait(2000);
        cy.get('#collapseOne > .panel-body > .actions > .continue').click();
    });
    it ('How much money would you like to send',function(){
        cy.wait(2000);
        cy.get('[data-bind="visible: !transactionDetailsTitle()"]').should('be.visible')
        cy.wait(2000);
        cy.get('#originalAmountInput').type('10');
        cy.wait(4000);
        cy.get('[tabindex="3"] > [data-bind="ifnot: $parent.isEditiongStepFromReview"]').click();
        cy.wait(1000);
    });
    it ('How and where is the money received',function(){
        cy.get('#receptionOptionStatesDdl').select('CANELONES');
        cy.wait(1000);
        cy.get('#receptionOptionCitiesDdl').select('LA FLORESTA');
        //cy.get(':nth-child(2) > .form-group > [style="vertical-align: middle; display: inline-block; left: auto; top: auto; white-space: normal; margin-left: -20px; padding-left: 20px; padding-bottom: 20px;"]').click();
        cy.xpath('//*[@id="pickUpMethod"]/div[5]/div/div/div/div/span').click();
        cy.wait(1000);
        cy.get('[data-bind="if: $parent.transaction() != null && $parent.transaction().InternalPreparationData.StatusFlags.SetReceiver() === false"]').click();
    });
    it ('Who receives the money?',function(){
        cy.wait(1000);
        cy.get('#stepReceiverViewModelTitle > .collapsed').should('be.visible')
        cy.get('#RcvName').type('Yahir');
        cy.get('#RcvLastName').type('Ramos');
        cy.wait(1000);
        cy.wait(1000);
        cy.get('#RcvSecondName').type('Esquivel');
        cy.get('#RcvAddress').type('Queretaro');
        cy.get('#RcvZip').type('76000');
        cy.get('#RcvPhone').type('4427883783');
        cy.wait(1000);
        cy.get('[data-bind="ifnot: nextStepIsPaymentOptions()"]').click();
        cy.wait(1000);
        cy.get('#stepReviewViewModelTitle > .collapsed').should('be.visible')
        cy.wait(5000);

        cy.get('#reviewCVV').click();
        cy.get('#reviewCVV').type('061');
        cy.wait(1000);
        cy.get('#terms').click()
        cy.get('#Div6 > .panel-body > .actions > .continue').click()
        cy.wait(10000);
        

    });
  
 


})