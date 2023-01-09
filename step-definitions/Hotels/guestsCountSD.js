const Commands = require('../../POM/Commands');

class homePageSD {

    commands = new Commands();

    goingToLocator = '//button[@aria-label="Going to"]';
    goingToTypeLocator = '#destination_form_field';
    autoSuggestionsLocator = '//div[@class="truncate"]//strong';

    travelersButtonLocator = '//div[@class="uitk-field-label"])[1]';
    selectAdultCountLocator = '(//div[@class="uitk-spacing-padding-blockstart-two"])';
    selectChildrenCountLocator = '(//div[@class="uitk-step-input-label"])[1]';
    doneButtonLocator = '(//div[@class="uitk-button-large])[1]';

    async clickOnTravelers() {
        await this.commands.clickWebElement(this.travelersButtonLocator);
    }

    async selectOnAdultCount() {
        await this.commands.clickWebElement(this.selectAdultCountLocator);
    }

    async selectChildrenCount() {
        await this.commands.clickWebElement(this.selectChildrenCountLocator);
    }

    async clickOnDoneButton() {
        await this.commands.clickWebElement(this.doneButtonLocator);
    }

}
module.exports = homePageSD;