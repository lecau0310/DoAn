document.addEventListener("DOMContentLoaded", function () {
    
    const openSettingsBtn = document.getElementById("openSettingsBtn");
    const settingsPopup = document.getElementById("settingsPopup");
    const saveBtn = document.getElementById("saveBtn");
    const closeBtn = document.getElementById("closeBtn");
    const saveSuccessMessage = document.getElementById("saveSuccessMessage");

    openSettingsBtn.addEventListener("click", () => {
        settingsPopup.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        settingsPopup.style.display = "none";
    });

    saveBtn.addEventListener("click", () => {
        // Thực hiện lưu cài đặt ở đây (đối với nút "Lưu")
        // Hiển thị thông báo "Lưu thành công"
        saveSuccessMessage.style.display = "block";
    });
});

