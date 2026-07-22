(() => {
  const root = document.documentElement;
  const body = document.body;
  const content = document.querySelector("#content");
  const searchInput = document.querySelector("#site-search");
  const searchStatus = document.querySelector("#search-status");
  const themeToggle = document.querySelector("#theme-toggle");
  const backToTop = document.querySelector("#back-to-top");
  const progress = document.querySelector("#reading-progress");
  const pageShell = document.querySelector(".page-shell");
  const sidebar = document.querySelector(".sidebar");
  const baseurl = (body.dataset.baseurl || "").replace(/\/$/, "");

  const sitePath = (path) => `${baseurl}${path}` || "/";

  const homeTitle = content.querySelector("h1:not([id])");
  if (body.dataset.pageKind === "home" && homeTitle) {
    homeTitle.id = "awesome-satellite-network-";
  }

  document.querySelectorAll('a[href="PAPERS_BY_VENUE.md"]').forEach((link) => {
    link.href = sitePath("/papers-by-venue/");
  });

  document.querySelectorAll('a[href="README.md"]').forEach((link) => {
    link.href = sitePath("/");
  });

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    themeToggle?.setAttribute("aria-label", `Use ${theme === "dark" ? "light" : "dark"} theme`);
    try {
      localStorage.setItem("asn-theme", theme);
    } catch (_) {}
  };

  themeToggle?.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  const toc = document.querySelector("#page-toc");
  const headings = [...content.querySelectorAll("h2, h3")];
  const tocHeadings = headings.filter((heading) => heading.id);
  const venueGroups = [...content.querySelectorAll("details")];
  const tocTargets = [];

  tocHeadings.forEach((heading) => {
    const link = document.createElement("a");
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    link.dataset.level = heading.tagName.slice(1);
    toc.append(link);
    tocTargets.push({ link, target: heading });
  });

  if (body.dataset.pageKind === "venue") {
    venueGroups.forEach((group) => {
      const anchor = group.previousElementSibling?.querySelector("a[id]");
      const label = group.querySelector("summary strong")?.textContent;
      if (!anchor || !label) return;

      const link = document.createElement("a");
      link.href = `#${anchor.id}`;
      link.textContent = label;
      link.dataset.level = "2";
      toc.append(link);
      tocTargets.push({ link, target: group });
    });
  }

  if (!tocTargets.length) {
    sidebar?.setAttribute("hidden", "");
    pageShell?.classList.add("no-sidebar");
  }

  if ("IntersectionObserver" in window && tocTargets.length) {
    const tocLinks = new Map(tocTargets.map(({ link, target }) => [target, link]));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (!visible) return;
        tocLinks.forEach((link) => link.classList.remove("is-active"));
        tocLinks.get(visible.target)?.classList.add("is-active");
      },
      { rootMargin: "-20% 0px -72% 0px" }
    );
    tocTargets.forEach(({ target }) => observer.observe(target));
  }

  const searchableItems = [...content.querySelectorAll("li")];

  venueGroups.forEach((group) => {
    group.dataset.initialOpen = group.open ? "true" : "false";
  });

  const normalize = (value) => value.toLocaleLowerCase().normalize("NFKD");

  const applySearch = () => {
    const query = normalize(searchInput.value.trim());
    let matches = 0;

    searchableItems.forEach((item) => {
      const isMatch = !query || normalize(item.textContent).includes(query);
      item.dataset.searchHidden = isMatch ? "false" : "true";
      item.classList.toggle("search-match", Boolean(query && isMatch));
      if (query && isMatch) matches += 1;
    });

    venueGroups.forEach((group) => {
      if (query) {
        group.open = Boolean(group.querySelector('li[data-search-hidden="false"]'));
      } else {
        group.open = group.dataset.initialOpen === "true";
      }
    });

    if (query) {
      searchStatus.hidden = false;
      searchStatus.textContent = `${matches} matching ${matches === 1 ? "entry" : "entries"} for “${searchInput.value.trim()}”`;
    } else {
      searchStatus.hidden = true;
      searchStatus.textContent = "";
    }
  };

  searchInput?.addEventListener("input", applySearch);
  searchInput?.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      searchInput.value = "";
      applySearch();
      searchInput.blur();
    }
    if (event.key === "Enter") {
      content.querySelector(".search-match a")?.focus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      searchInput?.focus();
    }
  });

  const updateScrollState = () => {
    const scrollTop = window.scrollY;
    const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = scrollRange > 0 ? Math.min(100, (scrollTop / scrollRange) * 100) : 0;
    progress.style.width = `${percentage}%`;
    backToTop?.classList.toggle("is-visible", scrollTop > 700);
  };

  window.addEventListener("scroll", updateScrollState, { passive: true });
  window.addEventListener("resize", updateScrollState);
  updateScrollState();

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
