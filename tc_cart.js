"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Norman Williams
   Date:   4/15/2024
   
   Filename: tc_cart.js
	
*/

// Calculate order total
var orderTotal = 0;


var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

// Loop through item array
for (var i = 0; i < item.length; i++) {

    cartHTML += "<tr><td><img src='" + getItemImage(item[i]) + "' alt='item' /></td>";


    cartHTML += "<td>" + itemDescription[i] + "</td>";
    cartHTML += "<td>$" + itemPrice[i].toFixed(2) + "</td>";
    cartHTML += "<td>" + itemQty[i] + "</td>";

    var itemCost = itemPrice[i] * itemQty[i];


    cartHTML += "<td>$" + itemCost.toFixed(2) + "</td></tr>";


    orderTotal += itemCost;
}


cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal.toFixed(2) + "</td></tr></table>";


document.getElementById("cart").innerHTML = cartHTML;

// Function to get item image source based on item number
function getItemImage(itemNumber) {
    switch (itemNumber) {
        case 10582:
            return "tc_10582.png";
        case 23015:
            return "tc_23015.png";
        case 41807:
            return "tc_41807.png";
        case 10041:
            return "tc_10041.png";
        default:
            return "";
    }
}

