/// <reference types="cypress" />

describe('DELETE request to /user/{username} endpoint for deleting a user', ()=>{

    it('Delete a user with correct username', ()=>{
        
        cy.deleteUser('johndoe').then((response)=>{
            expect(response.status).to.eq(200)
        })

    })

    it('Delete a user with non-existing username', ()=>{
        
        cy.deleteUser('marry').then((response)=>{
            expect(response.status).to.eq(404)
        })

    })

    it('Delete a user with invalid username', ()=>{
        
        cy.deleteUser('^#%&').then((response)=>{
            expect(response.status).to.eq(400)
        })

    })

})