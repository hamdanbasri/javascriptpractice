//Math.round(2.734)

function Calculate(){
    
    // console.log(Math.round((22.3 * 0.1) + 2) / 100);
    // console.log('Concatenation');
    // console.log('Total cost: $' + (599 + 295) / 100 + '\nThank you come again.');
    // console.log('Interpolation')
    // console.log(`Total cost: $${(599 + 295) / 100} \nThank you come again.`);
    console.log('String Challenge Exercise');
    console.log(`Items (${2 + 2}): $${((2095 * 2) + (799 * 2)) / 100}`);
    console.log(`Shipping & Handling: $${(499 + 499) / 100}`);
    console.log(`Total before tax: $${((2095 * 2) + (799 * 2) + (499 + 499)) / 100}`);
    console.log(`Estimated tax: $${Math.round(((2095 * 2) + (799 * 2) + (499 + 499)) * 0.1) / 100}`);
    console.log(`Order Total: ${(((2095 * 2) + (799 * 2) + (499 + 499)) + Math.round(((2095 * 2) + (799 * 2) + (499 + 499)) * 0.1)) / 100}`);
}

Calculate();