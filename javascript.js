// Array of videos
  const videos = [
    {
      src: "https://www.facebook.com/plugins/video.php?height=345&href=https%3A%2F%2Fwww.facebook.com%2Fshahzad.anwar.58910%2Fvideos%2F3056235927868759%2F&show_text=false&width=560&t=0",
      label: "Facebook Video",
      width: 560,
      height: 345
    },
    {
      src: "https://www.youtube-nocookie.com/embed/xRJ0RvDUprg",
      label: "YouTube",
      width: "100%",
      height: "100%"
    },
    {
      src: "https://www.youtube.com/embed/bJDEkODBgds",
      label: "YouTube",
      width: 928,
      height: 522
    },
    {
      src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fpakamericansocietypsausa%2Fvideos%2F2225528161212004%2F&show_text=false&width=332&t=0",
      label: "Facebook Video",
      width: 332,
      height: 476
    }
    // 👉 Add more items here
  ];

  const track = document.getElementById("videoTrack");

  videos.forEach(video => {
    const wrapper = document.createElement("div");
    wrapper.className =
      "min-w-[360px] md:min-w-[520px] snap-start rounded-2xl border border-neutral-200 bg-neutral-50 p-3";

    wrapper.innerHTML = `
      <div class="aspect-video overflow-hidden rounded-xl">
        <iframe src="${video.src}" 
                width="${video.width}" height="${video.height}"
                style="border:none;overflow:hidden" 
                scrolling="no" frameborder="0" allowfullscreen="true" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
        </iframe>
      </div>
      <p class="mt-2 text-sm font-medium">${video.label}</p>
    `;

    track.appendChild(wrapper);
  });


// Array of Facebook post URLs
  const fbPosts = [
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpakamericansocietypsausa%2Fposts%2Fpfbid02ABN9v2Ck4fHwhDwXVJnVY2YcWyZwgf3cuwykdMDeiUpruojKKsP1D1HL8z2PhnE2l&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D9835212793262013%26set%3Da.622203201229731%26type%3D3&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpakamericansocietypsausa%2Fposts%2Fpfbid02AYYzBLd2AikHdfX4LJvhCo6yauEPZTdT2sTbTGdzPeS2K489x4r3yqt1UjDwW7Yxl&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpakamericansocietypsausa%2Fposts%2Fpfbid0Jsb9nxiMnAL8jp9fgPEMJisQzMd3Pf47CD57qpNa1TSq5iRU14CeVFNabvbKbppSl&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpakamericansocietypsausa%2Fposts%2Fpfbid0EUN8k6FxLcjcMzUSZ2hfs4rwzHnZKaL2USgY7XqaB7QPibNz617c5LReSXmrJnPrl&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpakamericansocietypsausa%2Fposts%2Fpfbid027bkKUNDWCcLSC3z5SoVaT1f834QAi92ZvFfwg5GGJodR2tqtHeU1Gy3F4rAWgNwbl&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpakamericansocietypsausa%2Fposts%2Fpfbid0rjXvEJapimK2nGbAfSNvsgWZWWJPkb97WrBhaaQx5sNGPQRVJ7Ku5jBV1nj1bu9Tl&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpakamericansocietypsausa%2Fposts%2Fpfbid02STvXntuVXtRZCZx5ZW1VBaAaKJCwxzGd2gPfz8bfkeSnA5A9gWHYaCJxjPCsnjBtl&show_text=true&width=500"
    // 👉 Just add more links here without duplicating HTML
  ];

  const container = document.getElementById("fb-posts");

  fbPosts.forEach(src => {
    const postDiv = document.createElement("div");
    postDiv.className =
      "min-w-[360px] md:min-w-[520px] snap-start rounded-2xl border border-neutral-200 bg-neutral-50 p-3";

    postDiv.innerHTML = `
      <div class="aspect-video overflow-hidden rounded-xl">
        <iframe src="${src}" width="500" height="640" 
          style="border:none;overflow:hidden" scrolling="no" frameborder="0" 
          allowfullscreen="true" 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
        </iframe>
      </div>
      <p class="mt-2 text-sm font-medium">Facebook Post</p>
    `;

    container.appendChild(postDiv);
  });


  (function () {
    const SESSION_KEY = 'pas_flood_modal_session';
    const modal = document.getElementById('donationModal');
    const backdrop = document.getElementById('donationModalBackdrop');
    const closeBtn = document.getElementById('donationModalClose');

    function openModal() {
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      setTimeout(() => closeBtn?.focus(), 0);
    }

    function closeModal() {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    // Show once per session (not on refresh)
    try {
      if (!sessionStorage.getItem(SESSION_KEY)) {
        openModal();
        sessionStorage.setItem(SESSION_KEY, '1');
      }
    } catch (e) {
      // If sessionStorage is unavailable, fallback to always show
      openModal();
    }

    // Close interactions
    closeBtn?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });

    // Optional: manual opener
    window.openDonationModal = openModal;
  })();