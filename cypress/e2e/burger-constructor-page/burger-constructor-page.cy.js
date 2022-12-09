describe('burger-constructor page functions', () => {
	beforeEach(() => {
		cy.intercept('GET', '**api/ingredients', { fixture: 'ingredients.json' });
		cy.intercept("GET", "**api/auth/user", { fixture: "user.json" });
		cy.intercept("POST", "**api/orders", { fixture: "order.json" }).as("postOrder");
		cy.setCookie('access_token', 'test-accessToken');
		cy.setCookie('token', 'test-Token');
		cy.visit('/');
	});

	afterEach(function () {
		cy.clearCookies();
	});

	it('should have ingredients items', () => {
		cy.get('[data-testid="ingredients-list"] li')
			.should('have.length', 3);
	});

	it('should open/close ingredient modal window', () => {
		cy.get('[data-testid="ingredients-list"] li')
			.first()
			.click();
		cy.get('[data-testid="ingredient-details-name"]')
			.should('exist')
			.and('have.text','Краторная булка N-200i');
		cy.get('[data-testid="modal-close-btn"]')
			.should('exist')
			.click();
		cy.get('[data-testid="ingredient-details-name"]')
			.should('not.exist');
	});

	it('should drag bun to the constructor', () => {

		cy.get('[data-testid="constructor-bun-top"]')
			.contains('Краторная булка N-200i')
			.should('not.exist');
		cy.get('[data-testid="constructor-bun-bottom"]')
			.contains('Краторная булка N-200i')
			.should('not.exist');

		cy.get('[data-testid="ingredients-list"] li')
			.contains('Краторная булка N-200i')
    		.trigger('dragstart');
		cy.get('[data-testid="constructor-list"]')
    		.trigger('drop');

		cy.get('[data-testid="constructor-bun-top"]')
			.contains('Краторная булка N-200i')
			.should('exist');
		cy.get('[data-testid="constructor-bun-bottom"]')
			.contains('Краторная булка N-200i')
			.should('exist');
		cy.get('[data-testid="constructor-list"]')
			.contains('Краторная булка N-200i')
			.should('not.exist');
	});

	it('should drag ingredient to the constructor', () => {
		cy.get('[data-testid="constructor-list"]')
			.contains('Мясо бессмертных моллюсков Protostomia')
			.should('not.exist');
	
		cy.get('[data-testid="ingredients-list"] li')
			.contains('Мясо бессмертных моллюсков Protostomia')
    		.trigger('dragstart');
		cy.get('[data-testid="constructor-list"]')
    		.trigger('drop');
		cy.get('[data-testid="constructor-list"]')
			.contains('Мясо бессмертных моллюсков Protostomia')
			.should('exist');
	});

	it('should be possible to create an order', () => {
		cy.get('[data-testid="ingredients-list"] li')
			.contains('Краторная булка N-200i')
    		.trigger('dragstart');
		cy.get('[data-testid="constructor-list"]')
    		.trigger('drop');
		cy.get('[data-testid="ingredients-list"] li')
			.contains('Мясо бессмертных моллюсков Protostomia')
    		.trigger('dragstart');
		cy.get('[data-testid="constructor-list"]')
    		.trigger('drop');

		cy.get('[data-testid="order-total-price"]')
			.should('have.text','3847');
		cy.get('[data-testid="order-button"]')
			.click();
		cy.get('[data-testid="order-details-number"]')
			.should('exist')
			.and('have.text','123');
	});
	
})
