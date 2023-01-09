const { Given } = require("@wdio/cucumber-framework");

//Glue Code
/**
 * Glue code is a regular expression which helps to map Scenario-steps with functions (step-definitions) 
 */

Given (/^I am on hotels$/, async function () {
    await browser.url('/');
    await browser.pause(5000);

});