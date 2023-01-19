const request = require('request');
const fs = require('fs');

const filePath = '/Users/chetanverma/Desktop/test1.pdf'

const fileReadableStream = fs.createReadStream(filePath);

const options = {
  method: 'POST',
  url: 'https://devapi-sprint.healthpe.co/v1/order/',
  headers: {
    Accept: '*/*',
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJNQS0wMDAwMDAwMDMiLCJleHAiOjE2NjMxNDY4NTksImlhdCI6MTY2MjU0MjA1OX0.Vpta4T2POGR-ReISaEmwg6bun-3IdBmFGnP4KW7t20c',
  },
  formData: {
    order: '{ "mode_of_payment": "COD", "sales_associate": "Upesh", "patient_name": "Chetan Verma Script pdf", "customer" : { "first_name": "Upesh Jindal", "phone_number": "7420008555" }, "net_payable_amount": 2000.0, "items" : [ { "name": "Medicine 234", "quantity": 3, "pre_discount_price": 100, "approximate_price": 75.0, "prescription_required": false, "sku_package_info": "Some SKU", "discount_type": "Percent", "discount_value":25, "max_discount_amount": 100 }, { "name": "Medicine 500", "quantity": 1, "pre_discount_price": 200, "approximate_price": 150, "prescription_required": false, "sku_package_info": "Some SKU", "discount_type": "Percent", "discount_value":25, "max_discount_amount": 100 }, { "name": "Medicine 500-2", "quantity": 1, "pre_discount_price": 300, "approximate_price": 225, "prescription_required": false, "sku_package_info": "Some SKU", "discount_type": "Percent", "discount_value":25, "max_discount_amount": 100 } ], "delivery_address" : { "atype": "Home", "line_1": "Some address", "landmark": "Manayata Tech Park", "city": "Bengaluru", "state": "Karnataka", "country": "India", "pincode": "560008", "longitude": 77.59091, "latitude": 12.964566 } }',
    prescription_images:fileReadableStream
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
