Feature: The Swag Labs Website

  Background: 
    Given I am on the login page

  Scenario Outline: Check login functionality with valid credentials
    When I login with <username> and <password>
    Then user should navigate to products page

    Examples: 
      | username      | password     |
      | standard_user | secret_sauce |

  Scenario Outline: Check login functionality with invalid credentials
    When user login with <username> and <password>
    Then user should see error <message>

    Examples: 
      | username    | password | message                            |
      | standard_us | secret   | Username and password do not match |
      | xyz         | abc      | Username and password do not match |

  Scenario Outline: Check Add to cart Functionality
    When user login with <username> and <password>
    Then user should navigate to products page
    When user click on first product
    When user clicks on Add to cart button
    When user navigates to cart
    Then user should see same product on your cart page

    Examples: 
      | username      | password     |
      | standard_user | secret_sauce |

  @E2E
  Scenario Outline: Check user is able to place order
    When user login with <username> and <password>
    Then user should navigate to products page
    When user click on first product
    When user clicks on Add to cart button
    When user navigates to cart
    When user clicks on checkout button
    When user enters <firstName>, <lastName> and <postalCode> and place order
    Then user should see success <message>

    Examples: 
      | username      | password     | firstName | lastName | postalCode | message                   |
      | standard_user | secret_sauce | Priya     | Dsouza   |     411047 | Thank you for your order! |
