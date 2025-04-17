describe('ArticleList Component', () => {
  it('should show the loading state initially', () => {
    cy.visit('/'); // Visit the home page or the page where your component is rendered
    cy.contains('Loading articles...'); // Check if the loading message is visible
  });

  it('should display articles once they are loaded', () => {
    cy.visit('/'); // Visit the home page
    cy.contains('NY Times Most Popular Articles'); // Ensure the title is visible
    cy.get('.article-list').should('exist'); // Check if the list of articles exists
  });

  it('should navigate to the article detail page when clicked', () => {
    cy.visit('/'); // Visit the home page
    cy.get('.article-link').first().click(); // Click the first article link
    cy.url().should('include', '/article/'); // Check if the URL includes the article ID
  });
});
