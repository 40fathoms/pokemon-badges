const badges = [
  `<div class="boulder-badge">
    <div class="badge part1"></div>
    <div class="badge part1"></div>
    <div class="badge part1"></div>
    <div class="badge part1"></div>
    </div>

    <p>Boulder Badge</p>`,

  `<div class="boulder-badge">
    </div>

    <p>Cascate Badge</p>`,

  `<div class="boulder-badge">
    </div>

    <p>Thunder Badge</p>`,

  `<div class="boulder-badge">
    </div>

    <p>Rainbow Badge</p>`,

  `<div class="boulder-badge">
    </div>

    <p>Soul Badge</p>`,

  `<div class="boulder-badge">
    </div>

    <p>Marsh Badge</p>`,

  `<div class="boulder-badge">
    </div>

    <p>Volcano Badge</p>`,

  `<div class="boulder-badge">
    </div>

    <p>Earth Badge</p>`,
];

const badgesContainer = document.querySelector(".badges-container");

const renderBadges = (badge) => {
  let badgeDiv = document.createElement("div");
  badgeDiv.setAttribute("class", "badge-box");
  badgeDiv.innerHTML = badge;
  badgesContainer.appendChild(badgeDiv);
};

badges.forEach((badge) => renderBadges(badge));
