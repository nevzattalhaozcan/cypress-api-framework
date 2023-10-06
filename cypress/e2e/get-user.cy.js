/// <reference types = "cypress"/>

describe('GET requests to /user/{username} endpoint for getting a user', ()=>{
    
    it('Get user with correct username', ()=> {

        cy.getUser('johndoe').then((response)=>{
            expect(response.status).to.eq(200)
        })

    })

    it('Get user with non-existing username', ()=> {

        cy.getUser('marry').then((response)=>{
            expect(response.status).to.eq(404)
        })

    })

    it('Get user with invalid username', ()=> {

        cy.getUser('%23&').then((response)=>{
            expect(response.status).to.eq(400)
        })

    })

})