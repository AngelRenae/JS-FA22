// callback functions
// 1. function is passed in as an argument to another function

function callMeOnMyPhone(time) {
  console.log('calling u on me phone', time);
}

function deliverPizza(time) {
  console.log('pizza is being delivered', time);
}

function whenPizzaIsReady(callback) {
  console.log('pizza is ready');
  const rand = Math.floor(Math.random() * 30);
  callback(rand);
}

// dont need to put () at end of function when its being used as an argument
whenPizzaIsReady(deliverPizza);
whenPizzaIsReady(callMeOnMyPhone);

// ccreate functions that return promises

function orderPizza(type, deliveryOption) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([type, deliveryOption]);
        }, 1000)
    })
};