function createInvoice() {
    let name = document.getElementById("name").value;
    let street = document.getElementById("street").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value;
    let phone = document.getElementById("phone").value;
    let item1 = document.getElementById("item1").value;
    let item2 = document.getElementById("item2").value;
    let item3 = document.getElementById("item3").value;

    let price1 = document.getElementById("price1").value;
    let price2 = document.getElementById("price2").value;
    let price3 = document.getElementById("price3").value;

    let subtotal = parseFloat(price1) + parseFloat(price2) + parseFloat(price3);
    let tax = 0.07 * subtotal;
    let total = parseFloat(tax) + subtotal;

    const startHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="invoice-style.css">
        <title>Customer Invoice</title>
    </head>
    <body>
        <header>
            <div class="logo">
                <img src="chocolate-logo.jpg" alt="Chocolate Logo">
            </div>
            <div class="invoice-text">
                <p>
                123 Main St.<br>
                St. Louis, MO 99955<br>
                (123) 456-7890<br>
                </p>
            </div>
        </header>
        <main>`;
    const table = ` <table>
        <tr>
            <th colspan="3">Customer Information</th>
        </tr>
        <tr >
            <td colspan="3">${name}<br>
                ${street}<br>
                {$city}, ${state} ${zip}<br>
                ${phone}
            </td>
        </tr>
        <tr>
            <th width="20%">Item</th>
            <th>Product</th>
            <th width="20%">Price</th>
        </tr>
        <tr>
            <td>Item 1</td>
            <td>${item1
        }</td >
    <td>$ ${price1}</td>
        </tr >
        <tr>
            <td>Item 2</td>
            <td>${item2}</td>
            <td>$ ${price2}</td>
        </tr>
        <tr>
            <td>Item 3</td>
            <td>${item3}</td>
            <td>$ ${price3}</td>
        </tr>
        <tr>
            <td></td>
            <td>Subtotal</td>
            <td>$ ${subtotal}</td>
        </tr>
        <tr>
            <td></td>
            <td>Tax</td>
            <td>$ ${tax}</td>
        </tr>
        <tr>
            <td></td>
            <td>Total</td>
            <td>$ ${total}</td>
        </tr>
        </table > `;
    const endHTML = ` </main >
        </body >
        </html > `;

    const newWindow = window.open("", "newWindow");
    newWindow.document.write(startHTML + table + endHTML);

}