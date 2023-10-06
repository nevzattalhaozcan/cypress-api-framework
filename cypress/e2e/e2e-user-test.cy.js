/// <reference types="cypress" />

describe('End to end tests for user endpoints', ()=>{

    it('Happy Path test for user enpoints', ()=>{

        cy.fixture("user").then(data => {

            cy.createUser(data).then(Response => {

                expect(Response.status).to.eq(200)

            })

            cy.getUser(data.username).then(Response => {
                    
                expect(Response.status).to.eq(200)

            })
            
            cy.updateUser(data.username, data).then(Response => {

                expect(Response.status).to.eq(200)

            })

            cy.deleteUser(data.username).then(Response => {

                expect(Response.status).to.eq(200)

            })

        })
        
    })

})