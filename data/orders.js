const { default: Order } = require("../models/Order");

const ORDERS = [
  new Order("o1", "Jan 31, 2020 - 11:55 AM", "12.76", "New Sushi"),
  new Order("o1", "Dec 31, 2019 - 1:55 PM", "14.12", "Which Which"),
  new Order("o1", "Dec 1, 2019 - 11:50 AM", "13.11", "La Posada"),
  new Order("o1", "Dec 9, 2019 - 12:00 PM", "10.15", "Los Paisanos"),
];
