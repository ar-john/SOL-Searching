//Shadowy Super Coder Collection
var myArray = {
    "NFTImage": [
  {
   "image": "https://sld-gengo.s3.amazonaws.com/7689.png",
   "NFTPrice": "30",
   "NFTInfo": "Shadowy Super Coder #7689",
    "NFTname": "Shadowy Super Coder"
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/7699.png",
   "NFTPrice": "30",
   "NFTInfo": "Shadowy Super Coder #7699",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/7702.png",
   "NFTPrice": "30",
   "NFTInfo": "Shadowy Super Coder #7702",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/7708.png",
   "NFTPrice": "30",
   "NFTInfo": "Shadowy Super Coder #7708",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/9814.png",
   "NFTPrice": "30.98",
   "NFTInfo": "Shadowy Super Coder #9814",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/6429.png",
   "NFTPrice": "30.99",
   "NFTInfo": "Shadowy Super Coder #6429",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/9765.png",
   "NFTPrice": "31",
   "NFTInfo": "Shadowy Super Coder #9765",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/6806.png",
   "NFTPrice": "31",
   "NFTInfo": "Shadowy Super Coder #6806",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/2519.png",
   "NFTPrice": "31.4",
   "NFTInfo": "Shadowy Super Coder #2519",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/311.png",
   "NFTPrice": "31.53",
   "NFTInfo": "Shadowy Super Coder #311",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/6989.png",
   "NFTPrice": "31.93",
   "NFTInfo": "Shadowy Super Coder #6989",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/7810.png",
   "NFTPrice": "31.94",
   "NFTInfo": "Shadowy Super Coder #7810",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/7840.png",
   "NFTPrice": "31.95",
   "NFTInfo": "Shadowy Super Coder #7840",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/8700.png",
   "NFTPrice": "31.97",
   "NFTInfo": "Shadowy Super Coder #8700",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/6286.png",
   "NFTPrice": "32",
   "NFTInfo": "Shadowy Super Coder #6286",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/6928.png",
   "NFTPrice": "32",
   "NFTInfo": "Shadowy Super Coder #6928",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/4832.png",
   "NFTPrice": "32",
   "NFTInfo": "Shadowy Super Coder #4832",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/5722.png",
   "NFTPrice": "32.2",
   "NFTInfo": "Shadowy Super Coder #5722",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/1146.png",
   "NFTPrice": "32.4",
   "NFTInfo": "Shadowy Super Coder #1146",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/61.png",
   "NFTPrice": "32.6",
   "NFTInfo": "Shadowy Super Coder #61",
          "NFTname": "Shadowy Super Coder",
  },
  {
   "image": "https://sld-gengo.s3.amazonaws.com/5728.png",
   "NFTPrice": "33.299999999",
   "NFTInfo": "Shadowy Super Coder #5728",
          "NFTname": "Shadowy Super Coder",
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
<td id="Pricing3">Current price: ${myArray.NFTImage[i].NFTPrice} SOL</td>
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