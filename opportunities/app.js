(function () {
  var PAGE_SIZE = 50;
  var DATA_BASE = "/opportunities/data/";
  var WIDE = { roles: 1, notes: 1, comments: 1, extra_note: 1, industry: 1 };

  var I18N = {
    en: {
      htmlLang: "en",
      title: "Opportunities — Genu",
      description:
        "Browse visa-sponsoring tech companies, remote employers, and recently funded startups — a static snapshot curated for easier searching than the original spreadsheets.",
      navAbout: "About",
      navServices: "Services",
      navOpportunities: "Opportunities",
      navContact: "Contact",
      navWhatsapp: "Chat on WhatsApp",
      navPrivacy: "Privacy Policy",
      heading: "Opportunities",
      lede:
        "Visa sponsorship, remote roles, and freshly funded startups — searchable in one place instead of a pile of Google Sheets.",
      disclaimer:
        "A static snapshot of public lists. Genu does not run a job board and does not verify openings. Always check the company careers page before you apply. Sources are third-party spreadsheets; we are not affiliated with their authors.",
      searchLabel: "Search companies",
      searchPlaceholder: "Search company, city, stack, visa…",
      loading: "Loading lists…",
      loadingList: "Loading…",
      source: "Original spreadsheet",
      empty: "No companies match that search.",
      prev: "Previous",
      next: "Next",
      pageOf: "Page {page} of {pages} · {range}",
      statusCompanies: "{n} companies · snapshot {date}",
      statusMatches: "{n} match of {total} · snapshot {date}",
      statusMatchesPlural: "{n} matches of {total} · snapshot {date}",
      loadError: "Could not load this list.",
      loadDataError: "Could not load opportunities data.",
      groups: {
        visa: "Visa sponsorship",
        remote: "Remote",
        startups: "Startups",
      },
      links: { careers: "Careers", linkedin: "LinkedIn", website: "Website" },
      columns: {
        company: "Company",
        location: "Location",
        industry: "Industry",
        roles: "Focus / roles",
        visa: "Visa",
        freshers: "Freshers",
        min_exp: "Min. exp.",
        salary: "Salary",
        careers: "Careers",
        linkedin: "LinkedIn",
        website: "Website",
        relocation: "Relocation",
        notes: "Notes",
        japanese: "Japanese",
        open_jobs: "Open remote jobs",
        stage: "Stage",
        employees: "Employees",
        founded: "Founded",
        comments: "Comments",
        extra_note: "Extra note",
        founders: "Founders",
        headquarters: "Headquarters",
      },
      lists: {
        "eu-visa": "European Tech Visa Sponsorship",
        "us-visa": "US Tech Visa Sponsorship",
        "jp-visa": "Japan Tech Visa Sponsorship",
        "remote-150": "150 Remote Companies Hiring",
        "remote-100": "100% Remote Hiring Companies",
        "sf-bay": "San Francisco Bay Area Companies",
        "funded-1500": "1500+ Recently Funded Startups",
        "india-dsml": "Indian Startups Hiring Freshers (DS / ML / AI, 2026)",
        "india-robotics": "Indian Robotics Startups",
        "hidden-1300": "Hidden Companies Hiring",
      },
      notes: {
        "funded-1500":
          "Public export splits the list: a concatenated header block plus structured rows. Snapshot unions both (~1500 websites).",
        "hidden-1300":
          "Upstream author marked this spreadsheet as no longer updated.",
      },
    },
    fr: {
      htmlLang: "fr",
      title: "Opportunités — Genu",
      description:
        "Parcourir des entreprises tech qui sponsorisent un visa, des employeurs remote et des startups fraîchement financées — un instantané statique, plus simple à fouiller que les tableurs d’origine.",
      navAbout: "À propos",
      navServices: "Services",
      navOpportunities: "Opportunités",
      navContact: "Contact",
      navWhatsapp: "Discuter sur WhatsApp",
      navPrivacy: "Politique de confidentialité",
      heading: "Opportunités",
      lede:
        "Sponsoring de visa, postes en remote et startups fraîchement financées — consultables au même endroit, sans enchaîner les Google Sheets.",
      disclaimer:
        "Instantané statique de listes publiques. Genu n’est pas un job board et ne vérifie pas les offres. Vérifiez toujours la page carrières de l’entreprise avant de postuler. Les sources sont des tableurs tiers ; nous n’avons aucun lien avec leurs auteurs.",
      searchLabel: "Rechercher des entreprises",
      searchPlaceholder: "Entreprise, ville, stack, visa…",
      loading: "Chargement des listes…",
      loadingList: "Chargement…",
      source: "Tableur d’origine",
      empty: "Aucune entreprise ne correspond à cette recherche.",
      prev: "Précédent",
      next: "Suivant",
      pageOf: "Page {page} sur {pages} · {range}",
      statusCompanies: "{n} entreprises · instantané {date}",
      statusMatches: "{n} correspondance sur {total} · instantané {date}",
      statusMatchesPlural: "{n} correspondances sur {total} · instantané {date}",
      loadError: "Impossible de charger cette liste.",
      loadDataError: "Impossible de charger les données.",
      groups: {
        visa: "Sponsoring de visa",
        remote: "Remote",
        startups: "Startups",
      },
      links: { careers: "Carrières", linkedin: "LinkedIn", website: "Site" },
      columns: {
        company: "Entreprise",
        location: "Lieu",
        industry: "Secteur",
        roles: "Focus / rôles",
        visa: "Visa",
        freshers: "Juniors",
        min_exp: "Exp. min.",
        salary: "Salaire",
        careers: "Carrières",
        linkedin: "LinkedIn",
        website: "Site",
        relocation: "Relocation",
        notes: "Notes",
        japanese: "Japonais",
        open_jobs: "Postes remote ouverts",
        stage: "Stade",
        employees: "Effectifs",
        founded: "Fondée",
        comments: "Commentaires",
        extra_note: "Note",
        founders: "Fondateurs",
        headquarters: "Siège",
      },
      lists: {
        "eu-visa": "Sponsoring visa tech — Europe",
        "us-visa": "Sponsoring visa tech — États-Unis",
        "jp-visa": "Sponsoring visa tech — Japon",
        "remote-150": "150 entreprises remote qui recrutent",
        "remote-100": "Entreprises 100 % remote",
        "sf-bay": "Entreprises de la baie de San Francisco",
        "funded-1500": "1500+ startups récemment financées",
        "india-dsml": "Startups indiennes — juniors DS / ML / IA (2026)",
        "india-robotics": "Startups robotique en Inde",
        "hidden-1300": "Entreprises discrètes qui recrutent",
      },
      notes: {
        "funded-1500":
          "L’export public est en deux blocs (en-tête concaténé + lignes). L’instantané les fusionne (~1500 sites).",
        "hidden-1300":
          "L’auteur a indiqué que ce tableur n’est plus mis à jour.",
      },
    },
  };

  function detectLang() {
    var path = (location.pathname || "").toLowerCase();
    if (path.indexOf("/opportunite") !== -1) return "fr";
    return "en";
  }

  var lang = detectLang();
  var copy = I18N[lang] || I18N.en;

  function t(key, vars) {
    var value = copy[key];
    if (value == null) value = (I18N.en[key] || key);
    if (!vars) return value;
    return String(value).replace(/\{(\w+)\}/g, function (_, name) {
      return vars[name] == null ? "" : vars[name];
    });
  }

  function listTitle(item) {
    return (copy.lists && copy.lists[item.slug]) || item.title;
  }

  function listNote(item) {
    if (copy.notes && copy.notes[item.slug]) return copy.notes[item.slug];
    return item.note || "";
  }

  function colLabel(col) {
    return (copy.columns && copy.columns[col.key]) || col.label;
  }

  function langPath(next) {
    var base = next === "fr" ? "/opportunite/" : "/opportunities/";
    return base + location.search + location.hash;
  }

  function applyStaticCopy() {
    document.documentElement.lang = copy.htmlLang;
    document.title = copy.title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", copy.description);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-lang-link]").forEach(function (el) {
      var next = el.getAttribute("data-lang-link");
      el.setAttribute("href", langPath(next));
      if (next === lang) el.setAttribute("aria-current", "page");
      else el.removeAttribute("aria-current");
      el.classList.toggle("is-active", next === lang);
    });
    var selfOpp = document.querySelectorAll("[data-opp-self]");
    selfOpp.forEach(function (el) {
      el.setAttribute("href", lang === "fr" ? "/opportunite/" : "/opportunities/");
    });
  }

  var state = {
    manifest: null,
    slug: null,
    list: null,
    query: "",
    page: 1,
    cache: {},
  };

  var els = {
    groups: document.getElementById("opp-groups"),
    search: document.getElementById("opp-search"),
    status: document.getElementById("opp-status"),
    source: document.getElementById("opp-source"),
    note: document.getElementById("opp-note"),
    wrap: document.getElementById("opp-table-wrap"),
    head: document.getElementById("opp-head"),
    body: document.getElementById("opp-body"),
    empty: document.getElementById("opp-empty"),
    pager: document.getElementById("opp-pager"),
    prev: document.getElementById("opp-prev"),
    next: document.getElementById("opp-next"),
    pageLabel: document.getElementById("opp-page-label"),
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatDate(iso) {
    if (!iso) return "";
    var d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  function filteredRows() {
    var rows = state.list.rows || [];
    var q = state.query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(function (row) {
      return Object.keys(row).some(function (key) {
        var val = row[key];
        return val && String(val).toLowerCase().indexOf(q) !== -1;
      });
    });
  }

  function renderTabs() {
    var groups = { visa: [], remote: [], startups: [] };
    state.manifest.lists.forEach(function (item) {
      if (groups[item.group]) groups[item.group].push(item);
      else groups.startups.push(item);
    });
    els.groups.innerHTML = "";
    Object.keys(copy.groups).forEach(function (group) {
      var items = groups[group];
      if (!items.length) return;
      var block = document.createElement("div");
      var label = document.createElement("span");
      label.className = "opp-group-label";
      label.textContent = copy.groups[group];
      var tabs = document.createElement("div");
      tabs.className = "opp-tabs";
      items.forEach(function (item) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "opp-tab" + (item.slug === state.slug ? " is-active" : "");
        btn.innerHTML =
          escapeHtml(listTitle(item)) +
          ' <span class="opp-count">' +
          item.count +
          "</span>";
        btn.addEventListener("click", function () {
          if (item.slug !== state.slug) selectList(item.slug, true);
        });
        tabs.appendChild(btn);
      });
      block.appendChild(label);
      block.appendChild(tabs);
      els.groups.appendChild(block);
    });
  }

  function cellHtml(col, row) {
    var value = row[col.key];
    if (!value) return '<span class="cell-muted">—</span>';
    if (col.type === "url") {
      return (
        '<a href="' +
        escapeHtml(value) +
        '" target="_blank" rel="noopener">' +
        escapeHtml((copy.links && copy.links[col.key]) || t("source")) +
        "</a>"
      );
    }
    return escapeHtml(value);
  }

  function visibleColumns(list) {
    var cols = list.columns || [];
    var rows = list.rows || [];
    return cols.filter(function (col) {
      if (col.key === "company") return true;
      return rows.some(function (row) {
        return row[col.key];
      });
    });
  }

  function renderTable() {
    if (!state.list) return;
    var columns = visibleColumns(state.list);
    var rows = filteredRows();
    var pages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
    if (state.page > pages) state.page = pages;
    var start = (state.page - 1) * PAGE_SIZE;
    var slice = rows.slice(start, start + PAGE_SIZE);

    els.head.innerHTML =
      "<tr>" +
      columns
        .map(function (col) {
          return (
            '<th class="col-' +
            escapeHtml(col.key) +
            '">' +
            escapeHtml(colLabel(col)) +
            "</th>"
          );
        })
        .join("") +
      "</tr>";

    els.body.innerHTML = slice
      .map(function (row) {
        return (
          "<tr>" +
          columns
            .map(function (col) {
              var cls = "col-" + col.key;
              if (col.key === "company") cls += " cell-company";
              if (WIDE[col.key]) cls += " cell-wide";
              return '<td class="' + cls + '">' + cellHtml(col, row) + "</td>";
            })
            .join("") +
          "</tr>"
        );
      })
      .join("");

    var shown = rows.length;
    var total = (state.list.rows || []).length;
    var range = shown === 0 ? "0" : start + 1 + "–" + (start + slice.length);
    var date = formatDate(state.list.updated || state.manifest.updated);
    if (state.query) {
      els.status.textContent = t(
        shown === 1 ? "statusMatches" : "statusMatchesPlural",
        { n: shown, total: total, date: date }
      );
    } else {
      els.status.textContent = t("statusCompanies", { n: shown, date: date });
    }

    els.source.href = state.list.source || "#";
    els.source.hidden = !state.list.source;

    var note = listNote(state.list);
    if (note) {
      els.note.hidden = false;
      els.note.textContent = note;
    } else {
      els.note.hidden = true;
      els.note.textContent = "";
    }

    els.wrap.hidden = slice.length === 0;
    els.empty.hidden = slice.length !== 0;
    els.pager.hidden = shown <= PAGE_SIZE;
    els.prev.disabled = state.page <= 1;
    els.next.disabled = state.page >= pages;
    els.pageLabel.textContent = t("pageOf", {
      page: state.page,
      pages: pages,
      range: range,
    });
  }

  function selectList(slug, pushHash) {
    state.slug = slug;
    state.page = 1;
    renderTabs();
    applyStaticCopy();
    if (pushHash) {
      history.replaceState(null, "", "#" + slug);
      applyStaticCopy();
    }
    if (state.cache[slug]) {
      state.list = state.cache[slug];
      renderTable();
      return;
    }
    els.status.textContent = t("loadingList");
    fetch(DATA_BASE + slug + ".json")
      .then(function (res) {
        if (!res.ok) throw new Error("Could not load list");
        return res.json();
      })
      .then(function (data) {
        state.cache[slug] = data;
        if (state.slug !== slug) return;
        state.list = data;
        renderTable();
      })
      .catch(function () {
        els.status.textContent = t("loadError");
        els.wrap.hidden = true;
      });
  }

  applyStaticCopy();

  els.search.addEventListener("input", function () {
    state.query = els.search.value;
    state.page = 1;
    renderTable();
  });
  els.prev.addEventListener("click", function () {
    state.page -= 1;
    renderTable();
    els.wrap.scrollIntoView({ block: "start" });
  });
  els.next.addEventListener("click", function () {
    state.page += 1;
    renderTable();
    els.wrap.scrollIntoView({ block: "start" });
  });

  fetch(DATA_BASE + "manifest.json")
    .then(function (res) {
      if (!res.ok) throw new Error("missing manifest");
      return res.json();
    })
    .then(function (manifest) {
      state.manifest = manifest;
      var wanted = (location.hash || "").replace(/^#/, "");
      var slugs = manifest.lists.map(function (item) {
        return item.slug;
      });
      var initial = slugs.indexOf(wanted) !== -1 ? wanted : slugs[0];
      selectList(initial, false);
    })
    .catch(function () {
      els.status.textContent = t("loadDataError");
    });

  window.addEventListener("hashchange", function () {
    var slug = (location.hash || "").replace(/^#/, "");
    applyStaticCopy();
    if (slug && slug !== state.slug) selectList(slug, false);
  });
})();
