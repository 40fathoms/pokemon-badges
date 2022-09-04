const badges = [
  `

    <p>Boulder Badge</p>`,

  `

    <p>Cascate Badge</p>`,

  `

    <p>Thunder Badge</p>`,

  `

    <p>Rainbow Badge</p>`,

  `

    <p>Soul Badge</p>`,

  `<div class="marsh-badge">
    <div class="badge part1"></div>
    <div class="badge part2">
        <div></div>
    </div>
    </div>

    <p>Marsh Badge</p>`,

  `

    <p>Volcano Badge</p>`,

  `

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
