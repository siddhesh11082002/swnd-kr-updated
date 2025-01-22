document.addEventListener('DOMContentLoaded', function () {
// voice section
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyAz98QmhgFapE7PY7ShVW2fHQcPCvHVkX8",
    authDomain: "swnd-terminus.firebaseapp.com",
    projectId: "swnd-terminus",
    storageBucket: "swnd-terminus.firebasestorage.app",
    messagingSenderId: "530194613372",
    appId: "1:530194613372:web:6527065b99481ac709f5f9",
    measurementId: "G-784NW86FSV"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    

    const form = document.getElementById("add-voice-form"); // Form element
    const grid = document.getElementById("voice-grid"); // Voice grid container
    const adminToggle = document.getElementById("admin-toggle"); // Admin toggle button
    let isAdmin = false; // Tracks admin mode status
  
    // Predefined admin key
    const ADMIN_KEY = "12345";
  
    // Toggle admin mode
    adminToggle.addEventListener("click", () => {
      if (!isAdmin) {
        const key = prompt("Enter admin key:");
        if (key === ADMIN_KEY) {
          isAdmin = true;
          adminToggle.textContent = "Admin Mode: ON";
          adminToggle.classList.add("admin-active");
          enableAdminFeatures();
          alert("Admin mode enabled.");
        } else {
          alert("Invalid admin key.");
        }
      } else {
        isAdmin = false;
        adminToggle.textContent = "Admin Mode";
        adminToggle.classList.remove("admin-active");
        disableAdminFeatures();
        alert("Admin mode disabled.");
      }
    });
  
    // Enable admin features (e.g., show delete buttons)
    function enableAdminFeatures() {
      const deleteButtons = document.querySelectorAll(".delete-btn");
      deleteButtons.forEach((btn) => (btn.style.display = "block"));
    }
  
    // Disable admin features (e.g., hide delete buttons)
    function disableAdminFeatures() {
      const deleteButtons = document.querySelectorAll(".delete-btn");
      deleteButtons.forEach((btn) => (btn.style.display = "none"));
    }
  
    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission
  
      const message = document.getElementById("voice-message").value.trim(); // Message textarea
      const author = document.getElementById("voice-author").value.trim(); // Author input
  
      if (message && author) {
        // Create a new voice card
        const card = document.createElement("div");
        card.classList.add("voice-card");
  
        card.innerHTML = `
          <p>${message}</p>
          <h4>- ${author}</h4>
          <button class="delete-btn" style="display: ${isAdmin ? 'block' : 'none'};">&times;</button>
        `;
  
        // Append to the grid
        grid.appendChild(card);
  
        // Reset form fields
        form.reset();
  
        // Attach delete functionality to the new card
        const deleteBtn = card.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
          if (isAdmin) {
            grid.removeChild(card);
          } else {
            alert("You don't have permission to delete this.");
          }
        });
      } else {
        alert("कृपया सर्व माहिती भरा!"); // Alert for incomplete form fields
      }
    });
  
    // Attach delete functionality to existing cards
    grid.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        if (isAdmin) {
          e.target.parentElement.remove();
        } else {
          alert("You don't have permission to delete this.");
        }
      }
    });
});