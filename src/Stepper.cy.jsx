import Stepper from "./Stepper"

describe("<Stepper />", () => {
  const counterSelector = '[data-cy=counter]'
  const incrementSelector = '[aria-label=increment]'
  const decrementSelector = '[aria-label=decrement]'

  it('mounts', () => {
    cy.mount(<Stepper />)
  })

  it('should render a 0 as value by default', () => {
    cy.mount(<Stepper />)
    cy.get(counterSelector).should('have.text', '0')
  })

  it('supports a "initial" prop to set the value', () => {
    cy.mount(<Stepper initial={100} />)
    cy.get(counterSelector).should('have.text', '100')
  })

  it('when the increment button is pressed, the counter is incremented', () => {
    cy.mount(<Stepper />)

    cy.get(incrementSelector).click()
    cy.get(counterSelector).should('have.text', '1')
  })

  it('when the decrement button is pressed, the counter is decremented', () => {
    cy.mount(<Stepper />)

    cy.get(decrementSelector).click()
    cy.get(counterSelector).should('have.text', '-1')
  })

  it('when clicking increment and decrement buttons, the counter is changed as expected', () => {
    cy.mount(<Stepper initial={100} />)

    cy.get(counterSelector).should('have.text', '100')
    cy.get(incrementSelector).click()

    cy.get(counterSelector).should('have.text', '101')

    cy.get(decrementSelector).click().click()
    cy.get(counterSelector).should('have.text', '99')
  })
})