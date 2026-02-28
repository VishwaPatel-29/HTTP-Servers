# 📊 State Statistics Management API

📮 **Postman Documentation:**  
👉 https://your-postman-link-here  

🚀 **Render Deployment:**  
👉 https://http-servers-6.onrender.com/

---

## 📌About The Project
This is an HTTP Server that manages **Indian States Statistical Data**.  
This server contains:
- ✅ 3 GET Routes  
- ✅ 1 POST Route  
- ✅ 3 PUT Routes  
- ✅ 3 PATCH Routes  
- ✅ 3 DELETE Routes  

---

## 🌐 Available Routes

### 1️⃣ GET: Get All States  
**Endpoint:** `/states`  
📍 Description:  
Returns all states data.

---

### 2️⃣ GET: Get State By ID  
**Endpoint:** `/states/:id`  
📍 Description:  
Returns state data by ID.

---

### 3️⃣ GET: Get State With Highest GDP  
**Endpoint:** `/states/highest-gdp`  
📍 Description:  
Returns state with highest GDP.

---

### 4️⃣ POST: Add One State  
**Endpoint:** `/states`  
📍 Description:  
Add one state using POST.

---

### 5️⃣ PUT: Replace Entire State  
**Endpoint:** `/states/:id`  
📍 Description:  
Replace entire state using PUT.

---

### 6️⃣ PUT: Update Only Budget  
**Endpoint:** `/states/:id/budget`  
📍 Description:  
Replace only annualBudget using PUT.

---

### 7️⃣ PUT: Update Only Population  
**Endpoint:** `/states/:id/population`  
📍 Description:  
Replace only population using PUT.

---

### 8️⃣ PATCH: Update Literacy Rate  
**Endpoint:** `/states/:id/literacy`  
📍 Description:  
Update only literacyRate using PATCH.

---

### 9️⃣ PATCH: Update GDP  
**Endpoint:** `/states/:id/gdp`  
📍 Description:  
Update only gdp using PATCH.

---

### 🔟 PATCH: Partial Update State  
**Endpoint:** `/states/:id`  
📍 Description:  
Update provided fields only.

---

### 1️⃣1️⃣ DELETE: Delete State By ID  
**Endpoint:** `/states/:id`  
📍 Description:  
Delete state by ID.

---

### 1️⃣2️⃣ DELETE: Delete State By Name  
**Endpoint:** `/states/name/:stateName`  
📍 Description:  
Delete state by name (case-insensitive).

---

### 1️⃣3️⃣ DELETE: Delete Low Literacy States  
**Endpoint:** `/states/low-literacy/:percentage`  
📍 Description:  
Delete states where literacyRate is less than given percentage.

---

## 🛠 Tech Stack
- Node.js  
- Express.js  
- Postman (API Testing)  
- Render (Deployment)  

---

⭐ If you like this project, consider giving it a star!  
