(async function() {
  'use strict';

  const root = document.getElementById('libraries-research-root');
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

  try {
    const data = await DataLoader.fetchJSON('../data/research.json');
    const repositories = data.section_a_libraries_and_archives.repositories || [];
    const initiatives = data.section_b_digitization_initiatives.initiatives || [];
    const journals = data.section_c_academic_journals.journals_and_publishers || [];

    root.innerHTML = `
      <section class="data-section">
        <div class="section-header">
          <span class="section-eyebrow">Libraries & Archives</span>
          <h2 class="section-title">${data.section_a_libraries_and_archives.description}</h2>
        </div>
        <div class="data-grid">
          ${repositories.map(item => createCard(item.library_archive_name, `
            <p><strong>Location:</strong> ${item.location}</p>
            <p><strong>Collection:</strong> ${item.collection_type}</p>
            <p><strong>Digitization:</strong> ${item.digitization_status}</p>
            <p><strong>Access:</strong> ${item.access_rules}</p>
            ${item.website ? `<p><a href="${item.website}" target="_blank" rel="noreferrer">Official website</a></p>` : ''}
          `)).join('')}
        </div>
      </section>
      <section class="data-section">
        <div class="section-header">
          <span class="section-eyebrow">Digitization Initiatives</span>
          <h2 class="section-title">${data.section_b_digitization_initiatives.description}</h2>
        </div>
        <div class="data-grid">
          ${initiatives.map(item => createCard(item.initiative_name, `
            <p><strong>Lead:</strong> ${item.lead_institution}</p>
            <p><strong>Manuscripts:</strong> ${item.manuscripts_targeted}</p>
            <p><strong>Standards:</strong> ${item.technology_standards}</p>
            <p><strong>Access:</strong> ${item.access_model}</p>
            ${item.official_link ? `<p><a href="${item.official_link}" target="_blank" rel="noreferrer">Learn more</a></p>` : ''}
          `)).join('')}
        </div>
      </section>
      <section class="data-section">
        <div class="section-header">
          <span class="section-eyebrow">Academic Journals</span>
          <h2 class="section-title">${data.section_c_academic_journals.description}</h2>
        </div>
        <div class="data-grid">
          ${journals.map(item => createCard(item.journal_publisher_name, `
            <p><strong>Focus:</strong> ${item.subject_focus}</p>
            <p><strong>Access:</strong> ${item.access_type}</p>
            <p><strong>Special strength:</strong> ${item.special_strength}</p>
            ${item.website ? `<p><a href="${item.website}" target="_blank" rel="noreferrer">Visit website</a></p>` : ''}
          `)).join('')}
        </div>
      </section>
    `;
  } catch (error) {
    console.error('Libraries & research render error:', error);
    root.innerHTML = '<p class="data-error">Unable to load Libraries & Research data.</p>';
  }
})();
