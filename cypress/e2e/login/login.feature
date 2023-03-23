Feature: Search

    Feature Description
Scenario: Guest want to search all features on Zero Online Banking

    Given I go to Zero Online Banking dashboard
    When I fill in “zero” keyword in search bar on the web
    And i click on search button
    Then I see all features with the keyword “zero” on Zero Online Banking