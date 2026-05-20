(async function() {
  'use strict';

  const root = document.getElementById('learning-systems-root');
  if (!root) {
    return;
  }

  function createCard(title, body) {
    return `
      <article class="data-card">
        <h3>${title}</h3>
        ${body}
      </article>
    `;
  }

  function buildList(items) {
    if (!items || items.length === 0) return '<p><em>None available.</em></p>';
    return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
  }

  try {
    const data = await DataLoader.fetchJSON('../data/learning_systems.json');
    const traditional = data.section_a_traditional_systems.systems || [];
    const organizations = data.section_b_non_formal_organizations.organizations || [];
    const platforms = data.section_c_online_platforms.platforms || [];

    root.innerHTML = `
      <section class="data-section">
        <div class="section-header">
          <span class="section-eyebrow">Traditional Systems</span>
          <h2 class="section-title">${data.section_a_traditional_systems.description}</h2>
        </div>
        <div class="data-grid">
          ${traditional.map(item => createCard(item.tradition_or_institution_name, `
            <p><strong>Type:</strong> ${item.type}</p>
            <p><strong>Courses:</strong> ${item.courses_disciplines_taught.join(', ')}</p>
            <p><strong>Certification:</strong> ${item.certification_model}</p>
            <p><strong>Age group:</strong> ${item.age_group_learner_type}</p>
            <p><strong>Pathway:</strong> ${item.pathway_into_modern_education}</p>
          `)).join('')}
        </div>
      </section>
      <section class="data-section">
        <div class="section-header">
          <span class="section-eyebrow">Non-formal Organizations</span>
          <h2 class="section-title">${data.section_b_non_formal_organizations.description}</h2>
        </div>
        <div class="data-grid">
          ${organizations.map(item => createCard(item.organization_name, `
            <p><strong>Audience:</strong> ${item.audience_type}</p>
            <p><strong>Reach:</strong> ${item.geographic_reach}</p>
            <p><strong>Certification:</strong> ${item.certification}</p>
            <p><strong>Affiliation:</strong> ${item.recognition_affiliation}</p>
            ${item.official_website ? `<p><a href="${item.official_website}" target="_blank" rel="noreferrer">Visit website</a></p>` : ''}
          `)).join('')}
        </div>
      </section>
      <section class="data-section">
        <div class="section-header">
          <span class="section-eyebrow">Online Platforms</span>
          <h2 class="section-title">${data.section_c_online_platforms.description}</h2>
        </div>
        <div class="data-grid">
          ${platforms.map(item => createCard(item.platform_name, `
            <p><strong>Format:</strong> ${item.course_format}</p>
            <p><strong>Focus:</strong> ${item.focus_area}</p>
            <p><strong>Certification:</strong> ${item.certification}</p>
            <p><strong>Duration:</strong> ${item.duration}</p>
            ${item.official_website ? `<p><a href="${item.official_website}" target="_blank" rel="noreferrer">Visit website</a></p>` : ''}
          `)).join('')}
        </div>
      </section>
    `;
  } catch (error) {
    console.error('Learning systems render error:', error);
    root.innerHTML = '<p class="data-error">Unable to load Learning Systems data.</p>';
  }
})();
