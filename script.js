
// إضافة طلبات السائق
const driverForm = document.getElementById("driver-form");
const driverOrdersList = document.getElementById("driver-orders-list");

driverForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const driverName = document.getElementById("driver-name").value;

    const orderItem = document.createElement("li");
    orderItem.textContent = `${driverName} is ready for orders.`;
    driverOrdersList.appendChild(orderItem);

    driverForm.reset();
});

// إضافة طلبات طالب الخدمة
const userForm = document.getElementById("user-form");
const userRequestsList = document.getElementById("user-requests-list");

userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const serviceType = document.getElementById("service-type").value;
    const pickupLocation = document.getElementById("pickup-location").value;
    const dropoffLocation = document.getElementById("dropoff-location").value;

    const requestItem = document.createElement("li");
    requestItem.textContent = `Service: ${serviceType}, From: ${pickupLocation}, To: ${dropoffLocation}`;
    userRequestsList.appendChild(requestItem);

    userForm.reset();
});
