## 🌐 Lesson & Exercise Profile Viewer App – Design Overview

### 🖼️ Layout:

The webpage is simple, clean, and centered. It includes:

1. **Profile Card** – a styled box in the center that shows:

   * **Profile Picture**
   * **Full Name**
   * **Email or short bio**

2. **Tabs or Buttons** below the card:

   * **About** → Shows basic info like name, location, and age.
   * **Contact** → Shows email, phone, or any contact data.

3. **(Optional)** A button like “🔄 Load New Profile” to fetch another user from the API.

---

### 📱 Example Look:

```
+--------------------------------------------------+
|                 [ Profile Picture ]             |
|                                                  |
|              Jane Doe                            |
|              jane@example.com                    |
|                                                  |
|   [ About ]   [ Contact ]                        |
|                                                  |
|   ➤ About:  Age: 28, Location: New York          |
|                                                  |
|   [ 🔄 Load New Profile ]                         |
+--------------------------------------------------+
```

---

### 🧠 Functionality:

* When the page loads, it fetches user data (e.g., from [randomuser.me](https://randomuser.me)) using `fetch()`.
* Clicking “About” updates the box with name, age, location.
* Clicking “Contact” switches the content to email, phone, etc.
* “Load New Profile” gets a new random user from the API.

---

Would you like a starter HTML + JS template for this layout?
