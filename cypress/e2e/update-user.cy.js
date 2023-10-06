/// <reference types="cypress"/>

describe('PUT request to /user/{username} endpoint for updating a user', ()=>{

    it('Updating with correct username and valid data', ()=>{
        
        cy.fixture("user").then((data)=>{
            
            cy.updateUser('johndoe',data).then((response)=>{
                expect(response.status).to.eq(200)
            })

        })
    
    })

    it('Updating with non-existing username and valid data', ()=>{
        
        cy.fixture("user").then((data)=>{
            
            cy.updateUser('marry',data).then((response)=>{
                expect(response.status).to.eq(404)
            })

        })
    
    })

    it('Updating with correct username and invalid data', ()=>{
        
        cy.fixture("invalid-user").then((data)=>{
            
            cy.updateUser('johndoe',data).then((response)=>{
                expect(response.status).to.eq(400)
            })

        })
    
    })

    it('Updating with invalid username and valid data', ()=>{
        
        cy.fixture("user").then((data)=>{
            
            cy.updateUser('!.>+',data).then((response)=>{
                expect(response.status).to.eq(400)
            })

        })
    
    })

})