//Aurorian Collection
var myArray = {
"NFTImage": [
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/2574.png",
   "NFTPrice": "22",
   "NFTInfo": "Aurorian #2575",
    "NFTname": "Aurory",
   "NFTprice": "23"
  },
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/8971.png",
   "NFTPrice": "23",
   "NFTInfo": "Aurorian #8972",
      "NFTname": "Aurory",
   "NFTprice": "23"
  },
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/2599.png",
   "NFTPrice": "23",
   "NFTInfo": "Aurorian #2600",
      "NFTname": "Aurory",
   "NFTprice": "23"
  },
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/909.png",
   "NFTPrice": "23.5",
   "NFTInfo": "Aurorian #910",
      "NFTname": "Aurory",
   "NFTprice": "23.5"
  },
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/5285.png",
   "NFTPrice": "23.6",
   "NFTInfo": "Aurorian #5286",
      "NFTname": "Aurory",
   "NFTprice": "23.6"
  },
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/9370.png",
   "NFTPrice": "24",
   "NFTInfo": "Aurorian #9371",
      "NFTname": "Aurory",
   "NFTprice": "24"
  },
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/9225.png",
   "NFTPrice": "24",
   "NFTInfo": "Aurorian #9226",
      "NFTname": "Aurory",
   "NFTprice": "24"
  },
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/8296.png",
   "NFTPrice": "24",
   "NFTInfo": "Aurorian #8297",
      "NFTname": "Aurory",
   "NFTprice": "24"
  },
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/2770.png",
   "NFTPrice": "24",
   "NFTInfo": "Aurorian #2771",
      "NFTname": "Aurory",
   "NFTprice": "24"
  },
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/2820.png",
   "NFTPrice": "24",
   "NFTInfo": "Aurorian #2821",
      "NFTname": "Aurory",
   "NFTprice": "24"
  },
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/9790.png",
   "NFTPrice": "24.2",
   "NFTInfo": "Aurorian #9791",
      "NFTname": "Aurory",
   "NFTprice": "24.2"
  },
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/6504.png",
   "NFTPrice": "24.37",
   "NFTInfo": "Aurorian #6505",
      "NFTname": "Aurory",
   "NFTprice": "24.37"
  },
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/9349.png",
   "NFTPrice": "24.5",
   "NFTInfo": "Aurorian #9350",
      "NFTname": "Aurory",
   "NFTprice": "24.5"
  },
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/6588.png",
   "NFTPrice": "24.9",
   "NFTInfo": "Aurorian #6589",
      "NFTname": "Aurory",
   "NFTprice": "24.9"
  },
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/7967.png",
   "NFTPrice": "24.99",
   "NFTInfo": "Aurorian #7968",
      "NFTname": "Aurory",
   "NFTprice": "24.99"
  },
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/857.png",
   "NFTPrice": "25",
   "NFTInfo": "Aurorian #858",
      "NFTname": "Aurory",
   "NFTprice": "25"
  },
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/4591.png",
   "NFTPrice": "25",
   "NFTInfo": "Aurorian #4592",
      "NFTname": "Aurory",
   "NFTprice": "25"
  },
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/6687.png",
   "NFTPrice": "25",
   "NFTInfo": "Aurorian #6688",
      "NFTname": "Aurory",
   "NFTprice": "25"
  },
  {
   "image": "https://data.solanart.io/img/aurory/AuroryProject/4415.png",
   "NFTPrice": "25",
   "NFTInfo": "Aurorian #4416",
      "NFTname": "Aurory",
   "NFTprice": "25"
  }
 ]
}            
	buildTable(myArray)
	function buildTable(data){
		var table = document.getElementById('myTable')
		for (var i = 0; i < myArray.NFTImage.length; i++){          
var row = 
`<tr>
<td><img src=${myArray.NFTImage[i].image}></td>
</tr>`
var row2 = 
`<tr>
<td id="Info">${myArray.NFTImage[i].NFTInfo}</td>
</tr>`
var row3 =
`<tr>
<td>${myArray.NFTImage[i].NFTname}</td>
</tr>`
var row4 =
`<tr>
<td id="Pricing">Current price: ${myArray.NFTImage[i].NFTprice} SOL</td>
</tr>`
var row5 =
`<tr>
<td id="Break"></td>
</tr>`

table.innerHTML += row2
table.innerHTML += row3
table.innerHTML += row
table.innerHTML += row4
table.innerHTML += row5
        }
}