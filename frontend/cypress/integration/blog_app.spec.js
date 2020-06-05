describe('Blog app', function () {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.visit('http://localhost:3003')

    const user = {
      name: 'Samson Azizyan',
      username: 'samson',
      password: 'samson'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user) 
  })

  it('Login form is shown', function() {
    cy.contains('Login').click()
    cy.contains('username')
    cy.contains('password')
  })

  it('user can log in', function() {
    cy.contains('Login').click()
    cy.get('#inputUsername').type('samson')
    cy.get('#inputPassword').type('samson')
    cy.get('#loginButton').click()

    cy.contains('Samson Azizyan logged in')
  })

  it('login fails with wrong password', function() {
    cy.contains('Login').click()
    cy.get('#inputUsername').type('samson')
    cy.get('#inputPassword').type('wrong')
    cy.get('#loginButton').click()

    cy.contains('wrong credentials')
    cy.get('.error').should('have.css', 'color', 'rgb(255, 0, 0)')
  })

  describe('When loggend in', function() {
    beforeEach(function() {
      cy.login({ username: 'samson', password: 'samson' })
    })

    it('a new blog can be created', function() {
      cy.contains('New Blog').click()
      cy.get('#titleInput0').type('new blog')
      cy.get('#authorInput0').type('new author')
      cy.get('#urlInput0').type('http://newblog.com')
      cy.get('#addNewBlogButton').click()

      cy.contains('new blog')
    })
  })

  describe.only('Interaction with blogs', function() {
    beforeEach(function() {
      cy.login({ username: 'samson', password: 'samson' })
      cy.createB({ title: 'new blog', author: 'some dude', url: 'https://new.com' })
    })

    it('A blog can be liked', function() {
      cy.contains('new blog')
      cy.contains('View').click()
      cy.contains('like').click()

      cy.contains('Likes: 1')
    })
  })
})