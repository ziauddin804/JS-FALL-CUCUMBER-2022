const Commands = require('../../POM/Commands');

class homePageSD {

    commands = new Commands();

    getCurrentDate = '//button[@date-stid="open-date-picker"]';
    nextCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[2]';
    prevCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[1]';
    calendarDoneButtonLocator = '//button[text()="Done" and @data-stid]';

    async openCalendar() {
        await this.commands.clickWebElement(this.calendarOpenLocator);
    }

    async clickToGoToNextCalendar() {
        await this.commands.clickWebElement(this.nextCalendarButtonLocator).to.be.false;
    }

    async clickToGoToPrevCalendar() {
        await this.commands.clickWebElement(this.prevCalendarButtonLocator).to.be.false;
    }

    async clickOnCurrentDate() {
        await this.commands.clickWebElement(this.calendarDoneButtonLocator);
    }

}
module.exports = homePageSD;