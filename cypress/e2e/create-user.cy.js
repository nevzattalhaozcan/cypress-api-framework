/// <reference types="cypress" />

describe('POST requests to /user endpoint for creating a user', ()=>{

    it('Create a user with valid data', ()=>{

        cy.fixture('user.json').then((data)=>{

            cy.createUser(data).then((resp)=>{

                expect(resp.status).to.eq(200)

            })
        })

    })

    it('Create a user with invalid data', ()=>{

        cy.fixture('invalid-user.json').then((data)=>{

            cy.createUser(data).then((resp)=>{

                expect(resp.status).to.eq(400)

            })
        })

    })


})