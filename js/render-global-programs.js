(async function() {
  'use strict';

  const root = document.getElementById('global-programs-root');
  if (!root) {
    return;
  }

  function createCard(item) {
    return `
      <article class="data-card">
        <h3>${item.institution_name}</h3>
        <p><strong>Country:</strong> ${item.country}</p>
        <p><strong>Department / Center:</strong> ${item.department_center}</p>
        <p><strong>Levels:</strong> ${item.program_level.join(', ')}</p>
        <p><strong>Specialization:</strong> ${item.area_of_specialization}</p>
        <p><strong>Faculty:</strong> ${item.relevant_faculty}</p>
        ${item.collaboration_opportunities ? `<p><strong>Collaboration:</strong> ${item.collaboration_opportunities}</p>` : ''}
        ${item.website ? `<p><a href="${item.website}" target="_blank" rel="noreferrer">Visit website</a></p>` : ''}
      </article>
    `;
  }

  try {
    const data = await DataLoader.fetchJSON('../data/global_institutions.json');
    const regionEntries = Object.entries(data.sections_by_region || {});

    root.innerHTML = regionEntries.map(([key, region]) => {
      const regionTitle = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const cards = (region.institutions || []).map(createCard).join('');
      return `
        <section class="data-section">
          <div class="section-header">
            <span class="section-eyebrow">${regionTitle}</span>
            <h2 class="section-title">${region.region_introduction}</h2>
          </div>
          <div class="data-grid">${cards}</div>
        </section>
      `;
    }).join('');
  } catch (error) {
    console.error('Global programs render error:', error);
    root.innerHTML = '<p class="data-error">Unable to load Global Programs data.</p>';
  }
})();
