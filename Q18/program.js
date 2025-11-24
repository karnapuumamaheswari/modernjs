// a)
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);

// b)
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);

// c)
const data = {
  product: {
    name: "Laptop"
  }
};

console.log(data.product?.price?.amount);
