describe("Test suite - conjunto de pruebas", () => {
    it("Validar pagina de inicio", () =>{
        cy.visit("http://localhost:3000")
        cy.get('.ml-auto.items-center > .flex').click()
        cy.get('#user').should('exist')
        cy.get('#password').should('exist')
        cy.get('.z-0').should('be.visible')
    })
    
    it("Prueba E2E- HappyPath", () =>{
        
    })
    it("Prueba E2E- UnhappyPath", () =>{
        cy.visit("http://localhost:3000")
        cy.get('.ml-auto.items-center > .flex').click()
        cy.get('#user').type('9999999')
        cy.get('#password').type('9999')
        cy.get('.z-0').click()
        cy.get('[data-content=""] > div').should('be.visible')
    })
    it("Prueba E2E- Golden Path-Recorrido nuevo rol", ({}) =>{
        cy.visit("http://localhost:3000")
        cy.get('.ml-auto.items-center > .flex').click()
        cy.get('#user').type('99999999')
        cy.get('#password').type('99999999')
        cy.get('.z-0').click()
        cy.wait(3000);
        cy.get('[href="/finos/v1/11/management"] > .gap-2', { timeout: 10000 }).click();
        cy.wait(3000);
        cy.get(':nth-child(2) > .h-auto > .tap-highlight-transparent').click()
        cy.wait(3000);
        cy.get('.sm\\:flex-col > .z-0').click()
        cy.wait(3000);
        cy.get('form > :nth-child(1) > .group > .relative').type('Administrador')
        cy.get(':nth-child(2) > .group > .relative').type('Se encarga de dar permisos')
        cy.wait(3000);
        cy.get('form > .flex-row > .z-0').click()
        cy.wait(3000);
    })
    
    
})