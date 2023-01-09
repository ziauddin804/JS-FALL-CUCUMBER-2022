Feature: Sprint
    Background: 
        Given I am on hotels

@TC-17
    Scenario: Verify past dates and back button on Current month's calender is disabled
        When I click on Dates
        And I go to current month if not displayed
        Then I Verify for current month past dates and back button on Current month's calender is disabled

@TC-18
    Scenario: Verify user can update number of guests on Home page
        When I click on "Travelers"
        When I select "Adults" as <adultCount>
        And I select "Children" as <childrenCount>
        And I select adults: 2
        And I select first child age: 5
        And I select second child age: 3
        When I click done
        Then I Verify total numbers of guests on Home page

@TC-24
    Scenario: Verify error is displayed when user submits the empty feedback form
        When I click on "Sign in"
        And I click on "Feedback"
        And I click on "Submit" empty form
        Then I Verify error message "please fill in the required information highlighted below" is displayed

@TC-25
    Scenario: Verify user can submit feedback after completing the feedback form
        When I click on "Sign in"
        And I click on "Feedback"
        And I click on "Submit" completed form
        Then I Verify completed feedback form 

@TC-30
    Scenario: Verify invalid phone number error
        When I input "Phone Number"
        And I click "Get the app"
        Then I Verify error "please enter a valid phone number." is displayed

@TC-31
    Scenario: Verify language can be changed successfully
        When I click on "English"
        And I click on "Language"
        And I click on "Spanish"
        And I click on "Save" button
        Then I Verify "language can be changed successfully"