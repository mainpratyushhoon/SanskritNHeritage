(async function() {
  'use strict';

  const summary = document.getElementById('home-summary');
  if (!summary) {
    return;
  }

  try {
    const [indian, globalData, learning, research, awards] = await Promise.all([
      DataLoader.fetchJSON('data/indian_institutes.json'),
      DataLoader.fetchJSON('data/global_institutions.json'),
      DataLoader.fetchJSON('data/learning_systems.json'),
      DataLoader.fetchJSON('data/research.json'),
      DataLoader.fetchJSON('data/awards.json')
    ]);

    const universityCount = indian.section_a_sanskrit_universities.universities.length;
    const departmentCount = indian.section_b_sanskrit_departments.departments.length;
    const globalCount = Object.values(globalData.sections_by_region).reduce((sum, region) => sum + (region.institutions || []).length, 0);
    const traditionalCount = learning.section_a_traditional_systems.systems.length;
    const organizationCount = learning.section_b_non_formal_organizations.organizations.length;
    const platformCount = learning.section_c_online_platforms.platforms.length;
    const libraryCount = research.section_a_libraries_and_archives.repositories.length;
    const initiativeCount = research.section_b_digitization_initiatives.initiatives.length;
    const journalCount = research.section_c_academic_journals.journals_and_publishers.length;
    const awardCount = awards.section_a_honors_and_awards.awards.length;
    const fundingCount = awards.section_b_scholarships_and_funding.funding_opportunities.length;

    summary.innerHTML = `
      <div class="section-header reveal">
        <span class="section-eyebrow">Research at a glance</span>
        <h2 class="section-title">Data-driven Sanskrit ecosystem coverage</h2>
        <div class="divider-ornament">✦</div>
      </div>
      <div class="data-grid">
        <article class="data-card">
          <h3>Indian Sanskrit Institutions</h3>
          <p>${universityCount} dedicated Sanskrit universities and ${departmentCount} Sanskrit departments within general universities.</p>
        </article>
        <article class="data-card">
          <h3>Global Programs</h3>
          <p>${globalCount} Sanskrit programs across the Americas, Europe, South East Asia, Africa, and Australia.</p>
        </article>
        <article class="data-card">
          <h3>Learning Systems</h3>
          <p>${traditionalCount} traditional systems, ${organizationCount} community organizations, ${platformCount} online platforms.</p>
        </article>
        <article class="data-card">
          <h3>Libraries & Research</h3>
          <p>${libraryCount} archive repositories, ${initiativeCount} digitization initiatives, ${journalCount} research journal pathways.</p>
        </article>
        <article class="data-card">
          <h3>Awards & Funding</h3>
          <p>${awardCount} honors and awards plus ${fundingCount} scholarships and fellowship programs.</p>
        </article>
      </div>
      <div class="home-cta-grid">
        <a href="pages/indian-institutions.html" class="btn-primary">Indian Institutions</a>
        <a href="pages/global-programs.html" class="btn-secondary">Global Programs</a>
        <a href="pages/learning-systems.html" class="btn-secondary">Learning Systems</a>
      </div>
    `;
  } catch (error) {
    console.error('Home summary load failed:', error);
    summary.innerHTML = '<p class="data-error">Unable to load homepage summary data.</p>';
  }
})();
