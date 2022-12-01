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

	it('shold have ingredients items', () => {
		cy.get('[data-testid="ingredients-list"] li')
			.should('have.length', 3);
	});

	it('shold open ingredient modal window', () => {
		cy.get('[data-testid="ingredients-list"] li')
			.first()
			.click();
		cy.get('[data-testid="ingredient-details-name"]')
			.should('to.exist')
			.and('have.text','Краторная булка N-200i');
	});

	it('should drag bun to the constructor', () => {
		const dataTransfer = new DataTransfer;
		cy.get('[data-testid="ingredients-list"] li')
    		.first()
    		.trigger('dragstart', { dataTransfer });
		cy.get('[data-testid="constructor-list"]')
    		.eq(0)
    		.trigger('drop', { dataTransfer });
		cy.get('[data-testid="ingredients-list"] li')
    		.first()
    		.trigger('dragend');
	});

	it('should drag ingredient to the constructor', () => {
		const dataTransfer = new DataTransfer;
		cy.get('[data-testid="ingredients-list"] li')
    		.last()
    		.trigger('dragstart', { dataTransfer });
		cy.get('[data-testid="constructor-list"]')
    		.eq(0)
    		.trigger('drop', { dataTransfer });
		cy.get('[data-testid="ingredients-list"] li')
    		.last()
    		.trigger('dragend');
	});

	it('should be possible to create an order', () => {
		const dataTransfer = new DataTransfer;
		cy.get('[data-testid="ingredients-list"] li')
    		.first()
    		.trigger('dragstart', { dataTransfer });
		cy.get('[data-testid="constructor-list"]')
    		.eq(0)
    		.trigger('drop', { dataTransfer });
		cy.get('[data-testid="ingredients-list"] li')
    		.first()
    		.trigger('dragend');
		cy.get('[data-testid="ingredients-list"] li')
    		.last()
    		.trigger('dragstart', { dataTransfer });
		cy.get('[data-testid="constructor-list"]')
    		.eq(0)
    		.trigger('drop', { dataTransfer });
		cy.get('[data-testid="ingredients-list"] li')
    		.last()
    		.trigger('dragend');
		cy.get('[data-testid="order-total-price"]')
			.should('have.text','3847');
		cy.get('[data-testid="order-button"]')
			.click();
		cy.get('[data-testid="order-details-number"]')
			.should('to.exist')
			.and('have.text','123');
	});

})
