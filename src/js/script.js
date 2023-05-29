const notifications = Array.from(document.querySelectorAll(".notification"));
const unreadNumberDisplay = document.querySelector(".notifications__unread");
const btnMarkRead = document.querySelector(".notifications__mark-read");

const updateUnreadDisplay = function () {
  const numUnread = notifications.reduce((acc, val) => {
    return val.classList.contains("unread") ? (acc = acc + 1) : (acc = acc);
  }, 0);
  unreadNumberDisplay.textContent = `${numUnread}`;
};

btnMarkRead.addEventListener("click", () => {
  notifications.forEach((notif) => {
    notif.classList.remove("unread");
  });
  updateUnreadDisplay();
});

updateUnreadDisplay();
