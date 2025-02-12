# React + TypeScript + Vite

Cypress test project

## Cypress Documentation

[Link to Documentation](https://docs.cypress.io/app/get-started/why-cypress)

## 🟢 Test Cases - Calculator

### 1. Addition Test

**Description:** Verify that the calculator correctly adds two numbers.

- **Steps:**
  1. Click button `7`
  2. Click button `+`
  3. Click button `3`
  4. Click button `=`
- **Expected Result:** The display should show `10`

### 2. Subtraction Test

**Description:** Verify that the calculator correctly subtracts two numbers.

- **Steps:**
  1. Click button `9`
  2. Click button `-`
  3. Click button `5`
  4. Click button `=`
- **Expected Result:** The display should show `4`

### 3. Multiplication Test

**Description:** Verify that the calculator correctly multiplies two numbers.

- **Steps:**
  1. Click button `6`
  2. Click button `x`
  3. Click button `4`
  4. Click button `=`
- **Expected Result:** The display should show `24`

### 4. Division Test

**Description:** Verify that the calculator correctly divides two numbers.

- **Steps:**
  1. Click button `8`
  2. Click button `/`
  3. Click button `2`
  4. Click button `=`
- **Expected Result:** The display should show `4`

### 5. Clear Button Test

**Description:** Verify that the clear button resets the calculator.

- **Steps:**
  1. Click button `1`
  2. Click button `2`
  3. Click button `3`
  4. Click button `C`
- **Expected Result:** The display should be `0` or empty

## ⭐️ Bonus Test Cases - E-commerce Shopping

### Objective

Write a Cypress test that simulates a user searching for a product on your favorite e-commerce website and adding it to the cart. The test should validate that the correct product is added.

### Test Steps

1. **Visit the website**  
   Navigate to the homepage of the e-commerce website.

2. **Find a product**

   - Use the search bar to look for a specific product **OR**
   - Navigate through categories/menus to find the product.

3. **Select the product**

   - Click on the product from the search results or category listing.

4. **Add the product to the cart**

   - Click the "Add to Cart" button.

5. **Validate the cart**
   - Open the cart page.
   - Ensure the correct product is listed in the cart.
