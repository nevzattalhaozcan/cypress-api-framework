Cypress.Commands.add('createUser', (data)=>{
    
    cy.api({
        method: 'POST',
        url:'/user',
        body: {
            id: data.id,
            username: data.username,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            phone: data.phone,
            userStatus: data.userStatus
        }
    })
    
})

Cypress.Commands.add('getUser', (username)=>{
    cy.api({
        method: 'GET',
        url: `/user/${username}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('updateUser', (username,data)=>{
    cy.api({
        method: 'PUT',
        url: `/user/${username}`,
        body: {
            id: data.id,
            username: data.username,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            phone: data.phone,
            userStatus: data.userStatus
        }
    })

})

Cypress.Commands.add('deleteUser', (username)=>{

    cy.api({
        method: 'DELETE',
        url: `/user/${username}`,
        failOnStatusCode: false
    })

})