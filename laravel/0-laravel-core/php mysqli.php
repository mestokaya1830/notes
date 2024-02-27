<?php
// Create connection
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_DATABASE', 'gaziantebiz_app');

$mysqli = new mysqli("localhost", DB_USERNAME, DB_PASSWORD, DB_DATABASE);
$mysqli->set_charset("utf8");
if ($mysqli->connect_error) {
  die("Connection failed: " . $mysqli->connect_error);
}
//insert order
$insertOrder = "INSERT INTO oc_order(`order_id`, `invoice_no`, `invoice_prefix`, `store_id`, `store_name`, `store_url`, `customer_id`, `customer_group_id`, `firstname`, `lastname`, `email`, `telephone`, `fax`, `custom_field`, `payment_firstname`, `payment_lastname`, `payment_company`, `payment_address_1`, `payment_address_2`, `payment_city`, `payment_postcode`, `payment_country`, `payment_country_id`, `payment_zone`, `payment_zone_id`, `payment_address_format`, `payment_custom_field`, `payment_method`, `payment_code`, `shipping_firstname`, `shipping_lastname`, `shipping_company`, `shipping_address_1`, `shipping_address_2`, `shipping_city`, `shipping_postcode`, `shipping_country`, `shipping_country_id`, `shipping_zone`, `shipping_zone_id`, `shipping_address_format`, `shipping_custom_field`, `shipping_method`, `shipping_code`, `comment`, `total`, `order_status_id`, `aktarim`, `iban_callback`, `affiliate_id`, `commission`, `marketing_id`, `tracking`, `language_id`, `currency_id`, `currency_code`, `currency_value`, `ip`, `forwarded_ip`, `user_agent`, `accept_language`, `date_added`, `date_modified`, `date_invoice`, `tracking_carrier`, `tracking_no`, `tracking_url`) 
  VALUES (
        0,
        0,
        0,
        0,
        'Gaziantebiz',
        'https://gaziantebiz.com/',
        20,
        1,
        'Hasan',
        'Demir',
        'mesto@outlook.com',
        '000.000.000',
        0,
        0,
        'Mesto',
        'Kaya',
        'null',
        'null',
        'null',
        'Gaziantep',
        000,
        'Turkey',
        215,
        'Gaziantep',
        3325,
        'null',
        'Nakit',
        'cod',
        'Mesto',
        'Kaya',
        'null',
        'null',
        'null',
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        5,
        45,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        'TRY',
        1,
        1,
        0,
        'null',
        'TR-tr',
        now(),
        now(),
        now(),
        'null',
        'null',
        'null')";
$mysqli->query($insertOrder);
$last_id = $mysqli->insert_id;
echo ("Error order: " .  $mysqli->error . '<br/>');

//insert customerpartnerorder
$insertCustomerPartnerOrder = "INSERT INTO oc_customerpartner_to_order(order_id,customer_id,product_id,order_product_id,price,quantity,shipping,shipping_rate,payment,payment_rate,oc_customerpartner_to_order.admin,customer,shipping_applied,commission_applied,currency_code,currency_value,details,paid_status,order_product_status,seller_access,date_added) 
  VALUES('$last_id', 20, 4127,597, 25,1,0,0,'Nakit',0,0,1,0,0,'TRY',1,'Partner',0,0,1,Now())";
echo $mysqli->query($insertCustomerPartnerOrder);
echo ("Error customerpartnerorder: " .  $mysqli->error);


$result = $mysqli->query("SELECT * FROM oc_customerpartner_to_order WHERE order_id = $last_id");
$products = $result->fetch_assoc();
var_dump($products);
var_dump($products['product_id']);
